# Task agentic-development-index-v1 A05-1 Plan

## Goal
Consolidate root discovery and pilot the ADR format ecosystem

## Description
Make the root README a useful catalog rather than a three-link directory, then use Architecture Decision Records as the first deep format ecosystem. Keep format knowledge, tool facts, and learning guidance distinct while connecting them through visible, evidence-backed links.

## Resources
- `A00-index.md`
- `A05-1-consolidate-root-discovery-and-pilot-the-adr-for-result.md`
- `task.json`

## Starting Context
### Evidence to Review
- `README.md`
- `formats/README.md`
- `formats/architecture-decision-record.md`
- `tools/README.md`
- `templates/format.md`
- `CONTRIBUTING.md`
- `docs/authoring-records.md`
- `METHODOLOGY.md`
- `scripts/index-validation.mjs`
- `tests/index-validation.test.mjs`

### Test or Evaluation Signals
- `npm test`
- `npm run validate`
- `npm run qa:links`
- Root README exposes every format and tool without requiring folder exploration.
- Every tool named in the ADR relationship table has one canonical local tool profile.

## Expected Change Surface
- Consolidated root README navigation.
- A deeper ADR profile covering variants, adjacent formats, and typed tool relationships.
- Canonical profiles for a small representative ADR tool set.
- Contributor and authoring guidance for proposing tool-format relationships.
- Validation and tests that protect the canonical-record boundary.

## Out-of-Scope Areas
- New top-level categories.
- ADR subdirectories or a generated site.
- Comprehensive ADR-tool inventory.
- Deep RFC or PRD ecosystem pages before the ADR pilot is evaluated.
- Rankings, popularity scores, vendor claims without primary evidence, or copied third-party lists.

## Risks
- The root README becomes a duplicated content store rather than a concise catalog map.
- Format pages accumulate promotional tool blurbs instead of typed relationships.
- Tool facts drift if format pages bypass canonical tool profiles.
- The ADR pilot creates a directory pattern that other formats do not yet need.

## Success Criteria
- [ ] The root README directly exposes all current formats, learning guides, and tools.
- [ ] The ADR page explains common variants and uses typed relationships for related tools.
- [ ] Every ADR tool in that table has one canonical, sourced tool profile.
- [ ] Contributors can propose a tool-format relationship without duplicating vendor copy.
- [ ] Validation rejects related-tool links that bypass canonical local tool records.
- [ ] The repository passes tests, validation, and external-link QA.
- [ ] The result recommends promote, improve, rework, rollback, or block before RFC/PRD expansion.

## Tasks
- [ ] Replace shallow root navigation with a compact catalog map.
- [ ] Deepen the ADR profile without adding a new subdirectory.
- [ ] Add a representative ADR creation, publication, and indexing tool set.
- [ ] Document and validate the canonical tool-profile relationship rule.
- [ ] Run repository QA and inspect GitHub-readable Markdown.
- [ ] Record the pilot result and next decision.

## Decision Gates
- Promote: root discovery is materially better, the ADR ecosystem remains legible, and the relationship contract is reusable for RFCs and PRDs.
- Improve: the model works but needs a navigation, evidence, or contribution refinement before another format adopts it.
- Rework: the root becomes overwhelming or format/tool ownership remains ambiguous.
- Rollback: the added depth duplicates facts, weakens neutrality, or makes the GitHub index harder to browse.
- Block: primary tool evidence or repository validation cannot support a trustworthy pilot.
