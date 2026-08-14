# A02 Plan: Define Markdown Record Contracts And Lightweight Validation

## Goal

Make records consistent enough to trust and navigate while keeping normal contributions as simple as editing Markdown in GitHub.

## Deliverables

- GitHub-native directories for `formats/`, `learn/`, and `tools/`, each with a readable category index.
- Markdown templates for format pages, learning pages, and tool profiles.
- A compact metadata convention for identity, canonical URL, sources, status, verification date, tags, and category membership.
- Lightweight checks for required headings, valid links and dates, duplicate IDs, evidence presence, and root/category index coverage.
- At least two valid fixtures per launch category plus focused invalid cases with useful error messages.
- Authoring documentation that starts with editing Markdown, not learning the validator.

## Record Principle

The Markdown page is the source of truth. Metadata may support navigation and validation, but factual display copy must not be duplicated into YAML, JSON, or generated pages.

Tool profiles cover deployment, storage, LLM requirement, supported agents, evidenced capabilities, license, limitations, and claim sources. Format pages cover purpose, lifecycle, canonical references, agent affordances, pitfalls, and examples or templates.

## Acceptance Checks

- [ ] A contributor can add a valid record by copying and editing one Markdown template.
- [ ] Every record is complete and readable in GitHub's native renderer.
- [ ] Missing canonical evidence, malformed dates, duplicate IDs, broken internal links, and unindexed records fail clearly.
- [ ] At least two fixtures per launch category prove meaningful variation without a generic metadata bag.
- [ ] CI validation runs without building a website.
- [ ] Dataset and Benchmark templates remain deferred until their provenance and reproducibility tracks begin.

## Out Of Scope

- A static-site generator, custom frontend, client-side filters, or deployment pipeline.
- Production-scale catalog writing.
- A generic schema platform.
- Public JSON/CSV exports unless they fall out cheaply from the Markdown metadata.

## Decision Gates

- Promote to A03: the contract supports the planned content and normal contributions remain Markdown-first.
- Improve as A02-1: the contract is sound but error messages, fixtures, or index checks need bounded repair.
- Rework: important claims cannot be validated without duplicating prose into structured records.
- Rollback: automation makes the repository harder to contribute to than a carefully reviewed Markdown index.
- Block: GitHub-native content cannot satisfy the evidence model chosen in A01.

## Completion Contract

Record the template decisions, metadata retained or rejected, fixture coverage, invalid cases tested, maintenance cost, and recommended A03 authoring workflow.
