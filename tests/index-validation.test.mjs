import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { parse } from "yaml";

import { validateIndex } from "../scripts/index-validation.mjs";

const repositoryRoot = path.resolve(import.meta.dirname, "..");
const validFixture = path.join(repositoryRoot, "fixtures", "valid");

async function withMutatedFixture(mutate, verify) {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "agentic-index-fixture-"));
  try {
    await cp(validFixture, temporaryRoot, { recursive: true });
    await mutate(temporaryRoot);
    await verify(await validateIndex(temporaryRoot));
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
}

async function replaceInFile(root, relativePath, search, replacement) {
  const filePath = path.join(root, relativePath);
  const source = await readFile(filePath, "utf8");
  assert.ok(source.includes(search), `${relativePath} did not contain the expected fixture text`);
  await writeFile(filePath, source.replace(search, replacement));
}

test("valid fixtures cover two records per launch category", async () => {
  const { errors, records } = await validateIndex(validFixture);
  assert.deepEqual(errors, []);
  assert.equal(records.length, 6);
  assert.deepEqual(
    Object.fromEntries(
      ["format", "learn", "tool"].map((category) => [
        category,
        records.filter((record) => record.data.category === category).length,
      ]),
    ),
    { format: 2, learn: 2, tool: 2 },
  );
});

test("malformed verification dates fail with the record path", async () => {
  await withMutatedFixture(
    (root) => replaceInFile(root, "formats/task-slice.md", "last_verified: 2026-08-14", "last_verified: 14-08-2026"),
    ({ errors }) => assert.match(errors.join("\n"), /formats\/task-slice\.md: last_verified must be a valid YYYY-MM-DD date/),
  );
});

test("duplicate IDs identify both records", async () => {
  await withMutatedFixture(
    (root) => replaceInFile(root, "formats/task-slice.md", "id: task-slice", "id: architecture-decision-record"),
    ({ errors }) => assert.match(errors.join("\n"), /duplicate id 'architecture-decision-record'.*formats\/architecture-decision-record\.md/),
  );
});

test("records require visibly labeled canonical evidence", async () => {
  await withMutatedFixture(
    (root) => replaceInFile(root, "formats/architecture-decision-record.md", "| Canonical |", "| Project-reported |"),
    ({ errors }) => assert.match(errors.join("\n"), /Sources must label at least one Canonical source/),
  );
});

test("broken local links fail at the referring file", async () => {
  await withMutatedFixture(
    async (root) => {
      const readmePath = path.join(root, "README.md");
      const source = await readFile(readmePath, "utf8");
      await writeFile(readmePath, `${source}\n[Missing page](missing.md)\n`);
    },
    ({ errors }) => assert.match(errors.join("\n"), /README\.md: broken local link 'missing\.md'/),
  );
});

test("unindexed records fail category coverage", async () => {
  await withMutatedFixture(
    (root) => replaceInFile(root, "formats/README.md", "- [Task slice](task-slice.md)\n", ""),
    ({ errors }) => assert.match(errors.join("\n"), /formats\/task-slice\.md: record is not linked from formats\/README\.md/),
  );
});

test("unsupported front matter fields fail instead of becoming metadata bags", async () => {
  await withMutatedFixture(
    (root) => replaceInFile(root, "tools/local-intent-index.md", "id: local-intent-index", "id: local-intent-index\nvendor_score: 99"),
    ({ errors }) => assert.match(errors.join("\n"), /unsupported front matter field 'vendor_score'/),
  );
});

test("the production repository validates the initial format, learning, and tool catalog", async () => {
  const { errors, records } = await validateIndex(repositoryRoot);
  assert.deepEqual(errors, []);
  assert.equal(records.length, 36);
  assert.equal(records.filter(({ data }) => data.category === "format").length, 11);
  assert.equal(records.filter(({ data }) => data.category === "learn").length, 5);
  assert.equal(records.filter(({ data }) => data.category === "tool").length, 20);
});

test("contribution issue forms remain valid YAML", async () => {
  for (const filename of ["factual-correction.yml", "disputed-claim.yml", "new-record.yml"]) {
    const source = await readFile(path.join(repositoryRoot, ".github", "ISSUE_TEMPLATE", filename), "utf8");
    const form = parse(source);
    assert.equal(typeof form.name, "string");
    assert.equal(typeof form.description, "string");
    assert.ok(Array.isArray(form.body));
    assert.ok(form.body.length >= 5);
  }
});

test("the root README exposes the live catalog and validation status", async () => {
  const source = await readFile(path.join(repositoryRoot, "README.md"), "utf8");
  assert.match(source, /formats\/README\.md/);
  assert.match(source, /learn\/README\.md/);
  assert.match(source, /tools\/README\.md/);
  assert.match(source, /actions\/workflows\/validate\.yml\/badge\.svg/);
  assert.doesNotMatch(source, /devspecs\/tasks/);
});
