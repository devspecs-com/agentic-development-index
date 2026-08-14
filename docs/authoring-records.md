# Authoring Records

The Markdown page is the source of truth. Its compact front matter exists only to support navigation and automated checks.

## Add A Record

1. Copy the matching file from `templates/` into `formats/`, `learn/`, or `tools/`.
2. Replace the front matter and every body section.
3. Add the page to that category's `README.md`.
4. Cite at least one canonical HTTPS source.
5. Run `npm test` and `npm run validate`.

## Front Matter

Every record uses exactly these fields:

| Field | Rule |
| --- | --- |
| `id` | Unique lowercase kebab case. |
| `title` | Human-readable page title; must match the H1. |
| `summary` | One concrete sentence, 20-280 characters. |
| `category` | `format`, `learn`, or `tool`; must match the directory. |
| `status` | `draft`, `reviewed`, `maintainer-verified`, `disputed`, `stale`, or `archived`. |
| `last_verified` | Date when sources were actually checked, in `YYYY-MM-DD`. |
| `canonical_url` | Primary HTTPS home, specification, or source repository. |
| `tags` | One or more lowercase kebab-case discovery terms. |

Do not add a generic metadata field. Propose a contract change with a real record when the existing fields cannot represent a necessary fact.

## Sources

The `Sources` section is visible editorial content, not hidden metadata. Label canonical, project-reported, reproduced, and independent evidence according to [METHODOLOGY.md](../METHODOLOGY.md). Marketing pages may support a project-reported claim, but every record requires canonical evidence.

## Validation

```bash
npm ci
npm test
npm run validate
```

Validation checks metadata, required headings, canonical evidence, local links, duplicate IDs, and category-index coverage. It does not decide whether a record is accurate or worth including.
