# A05-2 Plan: Flatten The Primary Catalog Into The Root README

## Goal

Make the repository useful as a conventional GitHub resource index without requiring visitors to traverse category folders or open individual profiles.

## Product Decision

`README.md` is the primary browsing experience and complete catalog. Files under `formats/`, `learn/`, and `tools/` remain optional evidence and maintenance records, not required navigation steps.

## Changes

1. Add a compact table of contents linking directly to root README sections.
2. List every format, learning guide, and tool in the root README with a useful one-line description or comparison row.
3. Preserve category groupings that help scanning, but remove category-index pages from the primary path.
4. Keep detailed profile links available for evidence, limitations, and sources.
5. Extend validation so every published record must have a substantive root README entry, not merely a matching link.
6. Keep governance, evidence rules, contribution routes, affiliation, and roadmap concise below the catalog.

## Acceptance Checks

- [ ] A visitor can discover and understand all 40 records without leaving `README.md`.
- [ ] Root sections are reachable from one compact contents list.
- [ ] Tool rows expose job, deployment/state, and LLM dependency without opening a profile.
- [ ] Format and learning entries include a plain-language purpose.
- [ ] Detailed records remain canonical for sources and limitations.
- [ ] Validation fails when a record is hidden from or reduced to an unlabeled link in the root catalog.
- [ ] `npm test`, `npm run validate`, and `npm run qa:links` pass.

## Out Of Scope

- Deleting detailed profile files.
- Adding records or changing taxonomy.
- Building a companion website or generated catalog.
- Converting the repository into a promotional awesome-list with unsupported claims.

## Decision Gates

- Promote: the README is a complete, scannable index and detailed records feel optional.
- Improve: the catalog is complete but still too dense or repetitive in GitHub's renderer.
- Rework: flattening removes evidence boundaries or produces an unreadable wall of tables.
- Rollback: important sourcing, limitations, or disclosure become inaccessible.
