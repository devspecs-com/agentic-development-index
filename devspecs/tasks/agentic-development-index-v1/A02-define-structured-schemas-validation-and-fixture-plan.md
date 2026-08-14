# A02 Plan: Build the Structured Source Of Truth

## Goal
Define portable YAML records and automated validation so the repository can generate trustworthy pages and exports without maintaining facts in multiple places.

## Deliverables
- `schemas/common.schema.json` for identity, summary, canonical URL, sources, tags, status, attribution, and verification date.
- Category schemas for formats and tools.
- Forward-compatible draft schemas for datasets and benchmarks without publishing empty registries.
- Valid and invalid fixture records that exercise required evidence, dates, enums, URLs, and category-specific fields.
- One validation command suitable for local use and CI.
- Deterministic normalized JSON and CSV export commands.
- Schema and record-authoring documentation.

## Minimum Record Shape
Common records must express `id`, `name`, `summary`, `canonical_url`, `categories`, `sources`, `last_verified`, `maintainer`, `status`, and `tags`.

Tool records additionally cover deployment, storage, LLM requirement, supported agents, capabilities, license, and evidence for each non-obvious claim. Format records additionally cover purpose, lifecycle, canonical references, agent affordances, pitfalls, and templates/examples.

## Acceptance Checks
- [ ] Valid format and tool fixtures pass locally and in CI.
- [ ] Missing primary sources, malformed dates, unknown fields, and unsupported enum values fail with useful paths and messages.
- [ ] At least two fixtures per launch category prove that the schema handles meaningfully different records.
- [ ] Generated JSON and CSV are deterministic across two clean runs.
- [ ] Display copy is not duplicated into a second hand-maintained data source.
- [ ] Dataset and benchmark drafts require provenance/reproducibility fields before those categories can launch.

## Out Of Scope
- Building the final site UI.
- Filling the catalog with production-scale records.
- Designing a generic schema platform unrelated to this index.

## Decision Gates
- Promote to A03: schemas support the planned content without permissive free-form escape hatches.
- Improve as A02-1: the model is sound but validation messages, fixtures, or exports need bounded repair.
- Rework: records cannot represent evidence and lifecycle without large blobs or duplicated content.
- Rollback: schema complexity makes normal contributions harder than editing a reviewed Markdown profile.
- Block: implementation-stack decisions from A01 are unresolved.

## Completion Contract
Record schema decisions, fixture coverage, invalid cases tested, export reproducibility, known migration risks, and the recommended authoring workflow for A03.
