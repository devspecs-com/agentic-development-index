import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { lexer } from "marked";
import { parseDocument } from "yaml";

const categories = {
  formats: {
    value: "format",
    headings: ["What It Is", "When To Use It", "Lifecycle", "Agent Use", "Pitfalls", "Examples", "Sources"],
  },
  learn: {
    value: "learn",
    headings: ["What You Will Learn", "Why It Matters", "Workflow", "Tradeoffs", "Sources"],
  },
  tools: {
    value: "tool",
    headings: ["What It Does", "Where It Fits", "Deployment And Storage", "Agent Support", "Capabilities", "Limitations", "Sources"],
  },
};

const allowedFields = new Set([
  "id",
  "title",
  "summary",
  "category",
  "status",
  "last_verified",
  "canonical_url",
  "tags",
]);
const statuses = new Set(["draft", "reviewed", "maintainer-verified", "disputed", "stale", "archived"]);
const ignoredDirectories = new Set([".git", "devspecs", "fixtures", "node_modules", "templates"]);

function normalizeHeading(value) {
  return String(value).replace(/<[^>]+>/g, "").trim().toLowerCase();
}

function visitTokens(value, visit, seen = new WeakSet()) {
  if (Array.isArray(value)) {
    for (const item of value) {
      visitTokens(item, visit, seen);
    }
    return;
  }
  if (!value || typeof value !== "object" || seen.has(value)) {
    return;
  }

  seen.add(value);
  if (typeof value.type === "string") {
    visit(value);
  }
  for (const child of Object.values(value)) {
    if (child && typeof child === "object") {
      visitTokens(child, visit, seen);
    }
  }
}

function linksFromTokens(tokens) {
  const links = [];
  visitTokens(tokens, (token) => {
    if (token.type === "link") {
      links.push(token.href);
    }
  });
  return links;
}

function sectionTokens(tokens, headingName) {
  const headingIndex = tokens.findIndex(
    (token) => token.type === "heading" && token.depth === 2 && normalizeHeading(token.text) === normalizeHeading(headingName),
  );
  if (headingIndex === -1) {
    return [];
  }

  const section = [];
  for (const token of tokens.slice(headingIndex + 1)) {
    if (token.type === "heading" && token.depth <= 2) {
      break;
    }
    section.push(token);
  }
  return section;
}

function validateHeadingHierarchy(tokens, relativePath) {
  const errors = [];
  let previousDepth = 0;
  for (const token of tokens.filter((candidate) => candidate.type === "heading")) {
    if (previousDepth > 0 && token.depth > previousDepth + 1) {
      errors.push(`${relativePath}: heading level jumps from H${previousDepth} to H${token.depth}`);
    }
    previousDepth = token.depth;
  }
  return errors;
}

function validateRelatedToolLinks(root, filePath, tokens, relativePath) {
  const section = sectionTokens(tokens, "Related Tools");
  if (section.length === 0) {
    return [];
  }

  const errors = [];
  const links = linksFromTokens(section);
  if (links.length === 0) {
    return [`${relativePath}: Related Tools must link to at least one canonical profile under tools/`];
  }

  for (const href of links) {
    if (/^(?:https?:|mailto:|#)/i.test(href)) {
      errors.push(`${relativePath}: Related Tools link '${href}' must point to a canonical local profile under tools/`);
      continue;
    }
    const targetText = decodeURIComponent(href.split("#", 1)[0].split("?", 1)[0]);
    const target = path.resolve(path.dirname(filePath), targetText);
    const targetRelative = path.relative(root, target).replaceAll(path.sep, "/");
    if (!/^tools\/[^/]+\.md$/i.test(targetRelative) || targetRelative === "tools/README.md") {
      errors.push(`${relativePath}: Related Tools link '${href}' must point to a canonical local profile under tools/`);
    }
  }
  return errors;
}

function parseFrontMatter(markdown, relativePath) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return { body: markdown, data: null, errors: [`${relativePath}: missing YAML front matter`] };
  }

  const document = parseDocument(match[1], { prettyErrors: true, strict: true, uniqueKeys: true });
  const errors = document.errors.map((error) => `${relativePath}: front matter ${error.message}`);
  return {
    body: markdown.slice(match[0].length),
    data: errors.length === 0 ? document.toJS() : null,
    errors,
  };
}

function validDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function validHttpsUrl(value) {
  try {
    return typeof value === "string" && new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listMarkdown(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }
    const entryPath = path.join(current, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdown(root, entryPath)));
    } else if (entry.name.toLowerCase().endsWith(".md")) {
      files.push(entryPath);
    }
  }
  return files;
}

async function validateLocalLinks(root, filePath, tokens) {
  const errors = [];
  const relativePath = path.relative(root, filePath).replaceAll(path.sep, "/");
  for (const href of linksFromTokens(tokens)) {
    if (/^(?:https?:|mailto:|#)/i.test(href)) {
      continue;
    }
    const targetText = decodeURIComponent(href.split("#", 1)[0].split("?", 1)[0]);
    if (!targetText) {
      continue;
    }
    let target = targetText.startsWith("/")
      ? path.join(root, targetText.slice(1))
      : path.resolve(path.dirname(filePath), targetText);
    if (await pathExists(target)) {
      continue;
    }
    if (await pathExists(path.join(target, "README.md"))) {
      continue;
    }
    errors.push(`${relativePath}: broken local link '${href}'`);
  }
  return errors;
}

function validateMetadata(data, relativePath, expectedCategory) {
  const errors = [];
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return [`${relativePath}: front matter must be a mapping`];
  }
  for (const field of allowedFields) {
    if (!(field in data)) {
      errors.push(`${relativePath}: front matter missing '${field}'`);
    }
  }
  for (const field of Object.keys(data)) {
    if (!allowedFields.has(field)) {
      errors.push(`${relativePath}: unsupported front matter field '${field}'`);
    }
  }
  if (typeof data.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.id)) {
    errors.push(`${relativePath}: id must use lowercase kebab case`);
  }
  if (typeof data.title !== "string" || data.title.trim().length < 2) {
    errors.push(`${relativePath}: title must contain at least two characters`);
  }
  if (typeof data.summary !== "string" || data.summary.length < 20 || data.summary.length > 280) {
    errors.push(`${relativePath}: summary must contain 20-280 characters`);
  }
  if (data.category !== expectedCategory) {
    errors.push(`${relativePath}: category must be '${expectedCategory}' for this directory`);
  }
  if (!statuses.has(data.status)) {
    errors.push(`${relativePath}: status '${data.status}' is unsupported`);
  }
  if (!validDate(data.last_verified)) {
    errors.push(`${relativePath}: last_verified must be a valid YYYY-MM-DD date`);
  }
  if (!validHttpsUrl(data.canonical_url)) {
    errors.push(`${relativePath}: canonical_url must be a valid HTTPS URL`);
  }
  if (!Array.isArray(data.tags) || data.tags.length === 0) {
    errors.push(`${relativePath}: tags must contain at least one value`);
  } else {
    const seenTags = new Set();
    for (const tag of data.tags) {
      if (typeof tag !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tag)) {
        errors.push(`${relativePath}: tag '${tag}' must use lowercase kebab case`);
      }
      if (seenTags.has(tag)) {
        errors.push(`${relativePath}: duplicate tag '${tag}'`);
      }
      seenTags.add(tag);
    }
  }
  return errors;
}

async function parseRecord(root, filePath, categoryName) {
  const relativePath = path.relative(root, filePath).replaceAll(path.sep, "/");
  const markdown = await readFile(filePath, "utf8");
  const parsed = parseFrontMatter(markdown, relativePath);
  const errors = [...parsed.errors];
  if (!parsed.data) {
    return { data: null, errors, filePath, relativePath, tokens: lexer(parsed.body) };
  }

  const config = categories[categoryName];
  const tokens = lexer(parsed.body);
  errors.push(...validateMetadata(parsed.data, relativePath, config.value));
  errors.push(...validateHeadingHierarchy(tokens, relativePath));

  const headings = new Set(
    tokens.filter((token) => token.type === "heading" && token.depth === 2).map((token) => normalizeHeading(token.text)),
  );
  for (const heading of config.headings) {
    if (!headings.has(normalizeHeading(heading))) {
      errors.push(`${relativePath}: missing required heading '## ${heading}'`);
    }
  }

  if (categoryName === "formats") {
    errors.push(...validateRelatedToolLinks(root, filePath, tokens, relativePath));
  }

  const h1 = tokens.find((token) => token.type === "heading" && token.depth === 1);
  if (!h1 || normalizeHeading(h1.text) !== normalizeHeading(parsed.data.title)) {
    errors.push(`${relativePath}: H1 must match front matter title '${parsed.data.title}'`);
  }

  const sources = sectionTokens(tokens, "Sources");
  const sourceLinks = linksFromTokens(sources).filter((href) => validHttpsUrl(href));
  const sourceText = sources.map((token) => token.raw ?? token.text ?? "").join("\n");
  if (sourceLinks.length === 0) {
    errors.push(`${relativePath}: Sources must contain at least one HTTPS link`);
  }
  if (!/\bcanonical\b/i.test(sourceText)) {
    errors.push(`${relativePath}: Sources must label at least one Canonical source`);
  }

  errors.push(...(await validateLocalLinks(root, filePath, tokens)));
  const categoryIndex = path.join(root, categoryName, "README.md");
  const hasCategoryReturnLink = linksFromTokens(tokens).some((href) => {
    if (/^(?:https?:|mailto:|#)/i.test(href)) {
      return false;
    }
    const targetText = decodeURIComponent(href.split("#", 1)[0].split("?", 1)[0]);
    return path.resolve(path.dirname(filePath), targetText) === categoryIndex;
  });
  if (!hasCategoryReturnLink) {
    errors.push(`${relativePath}: record must link back to ${categoryName}/README.md`);
  }
  return { data: parsed.data, errors, filePath, relativePath, tokens };
}

export async function validateIndex(root) {
  const absoluteRoot = path.resolve(root);
  const errors = [];
  const records = [];

  const rootReadme = path.join(absoluteRoot, "README.md");
  if (!(await pathExists(rootReadme))) {
    return { errors: ["README.md: root index is missing"], records: [] };
  }

  const rootTokens = lexer(await readFile(rootReadme, "utf8"));
  errors.push(...(await validateLocalLinks(absoluteRoot, rootReadme, rootTokens)));
  const rootLinks = new Set(
    linksFromTokens(rootTokens).map((href) => href.replaceAll("\\", "/").replace(/^\.\//, "")),
  );

  for (const [categoryName, config] of Object.entries(categories)) {
    const directory = path.join(absoluteRoot, categoryName);
    const indexPath = path.join(directory, "README.md");
    if (!(await pathExists(indexPath))) {
      errors.push(`${categoryName}/README.md: category index is missing`);
      continue;
    }
    if (!rootLinks.has(`${categoryName}/README.md`) && !rootLinks.has(`${categoryName}/`)) {
      errors.push(`README.md: category '${categoryName}' is not linked from the root index`);
    }

    const indexMarkdown = await readFile(indexPath, "utf8");
    const indexTokens = lexer(indexMarkdown);
    errors.push(...(await validateLocalLinks(absoluteRoot, indexPath, indexTokens)));
    const indexedTargets = new Set();
    for (const href of linksFromTokens(indexTokens)) {
      if (/^(?:https?:|mailto:|#)/i.test(href)) {
        continue;
      }
      const targetText = decodeURIComponent(href.split("#", 1)[0].split("?", 1)[0]);
      indexedTargets.add(path.resolve(path.dirname(indexPath), targetText));
    }

    const categoryFiles = (await readdir(directory, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md") && entry.name !== "README.md")
      .map((entry) => path.join(directory, entry.name))
      .sort();
    for (const filePath of categoryFiles) {
      const record = await parseRecord(absoluteRoot, filePath, categoryName);
      records.push(record);
      errors.push(...record.errors);
      if (!rootLinks.has(record.relativePath)) {
        errors.push(`${record.relativePath}: record is not linked from README.md`);
      }
      if (!indexedTargets.has(filePath)) {
        errors.push(`${record.relativePath}: record is not linked from ${categoryName}/README.md`);
      }
      if (record.data?.category !== config.value) {
        continue;
      }
    }
  }

  const ids = new Map();
  for (const record of records) {
    if (!record.data?.id) {
      continue;
    }
    if (ids.has(record.data.id)) {
      errors.push(`${record.relativePath}: duplicate id '${record.data.id}' also used by ${ids.get(record.data.id)}`);
    } else {
      ids.set(record.data.id, record.relativePath);
    }
  }

  const markdownFiles = await listMarkdown(absoluteRoot);
  for (const filePath of markdownFiles) {
    const relativePath = path.relative(absoluteRoot, filePath).replaceAll(path.sep, "/");
    if (relativePath === "README.md" || records.some((record) => record.filePath === filePath)) {
      continue;
    }
    const tokens = lexer(await readFile(filePath, "utf8"));
    errors.push(...(await validateLocalLinks(absoluteRoot, filePath, tokens)));
  }

  return { errors: [...new Set(errors)].sort(), records };
}
