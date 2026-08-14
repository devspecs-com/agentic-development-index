# A04 Plan: Seed The Tool Landscape

## Goal
Create an evidence-backed comparison of tools that preserve or expose coding-agent context, intent, work state, evidence, and handoffs.

## Coverage
Publish at least 20 profiles across distinct capabilities such as session capture, memory, cross-agent handoff, repository indexing, specification workflows, task lifecycle, checkpoints, navigation, provenance, and multi-repository coordination.

DevSpecs must appear as one disclosed profile under the same schema and evidence rules as every other project.

## Profile Contract
Each profile includes canonical links, maintainer/source attribution, license and deployment facts, storage posture, whether an LLM is required, supported agents, evidenced capabilities, limitations, verification date, and related formats/guides.

## Correction Workflow
- Provide issue and pull-request templates for factual corrections and new submissions.
- Require a source for changed claims.
- Distinguish project-reported behavior from behavior reproduced by index maintainers.
- Preserve material corrections in repository history and refresh `last_verified` only after review.

## Acceptance Checks
- [ ] At least 20 profiles validate and render from structured records.
- [ ] Non-obvious capability claims link to primary documentation, source, or reproducible evidence.
- [ ] Profiles distinguish session memory, repository context, intent management, and execution lifecycle instead of flattening them into one feature.
- [ ] DevSpecs affiliation is visible and does not affect ordering or scoring.
- [ ] No paid placement, star-count ranking, or synthetic overall score is present.
- [ ] Correction and submission workflows are understandable without maintainer assistance.

## Out Of Scope
- Declaring an overall winner.
- Reproducing every vendor benchmark.
- Requiring maintainers to link back to the index.

## Decision Gates
- Promote to A05: the landscape supports useful filtering and comparison without implying false equivalence.
- Improve as A04-1: the model holds but category coverage or evidence quality is uneven.
- Rework: profiles are too generic to help a developer choose or understand a tool.
- Rollback: the section becomes a vendor directory or DevSpecs comparison funnel.
- Block: too many core claims remain unverifiable.

## Completion Contract
Record tools reviewed, evidence gaps, disputed classifications, correction workflow tests, disclosures, validation results, and the filters A05 may safely expose.
