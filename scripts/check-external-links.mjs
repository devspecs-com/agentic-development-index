import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const ignoredDirectories = new Set([".git", "devspecs", "fixtures", "node_modules", "templates"]);
const timeoutMs = 15_000;
const concurrency = 8;

async function listMarkdown(current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }
    const entryPath = path.join(current, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdown(entryPath)));
    } else if (entry.name.toLowerCase().endsWith(".md")) {
      files.push(entryPath);
    }
  }
  return files;
}

function normalizeUrl(candidate) {
  return candidate.replace(/[.,;:!?]+$/, "");
}

function isInternalRepositoryUrl(value) {
  const url = new URL(value);
  return url.hostname === "github.com" && url.pathname.startsWith("/devspecs-com/agentic-development-index");
}

async function collectUrls() {
  const urls = new Map();
  for (const filePath of await listMarkdown()) {
    const relativePath = path.relative(root, filePath).replaceAll(path.sep, "/");
    const source = await readFile(filePath, "utf8");
    for (const match of source.matchAll(/https:\/\/[^\s<>()\[\]"']+/g)) {
      const value = normalizeUrl(match[0]);
      if (isInternalRepositoryUrl(value)) {
        continue;
      }
      if (!urls.has(value)) {
        urls.set(value, []);
      }
      urls.get(value).push(relativePath);
    }
  }
  return urls;
}

async function request(url, method) {
  return fetch(url, {
    method,
    redirect: "follow",
    signal: AbortSignal.timeout(timeoutMs),
    headers: { "user-agent": "agentic-development-index-link-check/0.1" },
  });
}

async function check(url) {
  try {
    let response = await request(url, "HEAD");
    if (response.status >= 400) {
      response = await request(url, "GET");
    }
    if (response.status >= 200 && response.status < 400) {
      return { kind: "ok", status: response.status, url };
    }
    if ([401, 403, 429].includes(response.status)) {
      return { kind: "restricted", status: response.status, url };
    }
    return { kind: "broken", status: response.status, url };
  } catch (error) {
    return { kind: "error", message: error.message, url };
  }
}

const urls = await collectUrls();
const pending = [...urls.keys()];
const results = [];

async function worker() {
  while (pending.length > 0) {
    const url = pending.shift();
    results.push(await check(url));
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, pending.length) }, () => worker()));
results.sort((left, right) => left.url.localeCompare(right.url));

const restricted = results.filter(({ kind }) => kind === "restricted");
const failures = results.filter(({ kind }) => kind === "broken" || kind === "error");

for (const result of [...restricted, ...failures]) {
  const detail = result.status ?? result.message;
  console.log(`${result.kind.toUpperCase()} ${detail} ${result.url}`);
  console.log(`  ${[...new Set(urls.get(result.url))].join(", ")}`);
}

console.log(`Checked ${results.length} external URL(s): ${results.length - restricted.length - failures.length} reachable, ${restricted.length} restricted, ${failures.length} failed.`);
if (failures.length > 0) {
  process.exitCode = 1;
}
