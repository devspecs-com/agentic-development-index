# Agentic Development Index

[![Validate index](https://github.com/devspecs-com/agentic-development-index/actions/workflows/validate.yml/badge.svg)](https://github.com/devspecs-com/agentic-development-index/actions/workflows/validate.yml)
[![Code: MIT](https://img.shields.io/badge/code-MIT-2ea44f)](LICENSES.md)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC_BY_4.0-2ea44f)](LICENSES.md)

An evidence-backed GitHub index of formats, practical guides, and tools for preserving context, intent, decisions, evidence, and work state in AI-assisted software development.

Use it to understand an artifact, improve an agent workflow, or compare what different tools actually preserve.

## Start Here

| Browse | What you will find | A useful first record |
| --- | --- | --- |
| **[Formats](formats/README.md)** | 11 durable artifact shapes for intent, instructions, execution, evidence, and continuity. | [Task slice](formats/task-slice.md) |
| **[Learn](learn/README.md)** | 5 practical guides for context recovery, asynchronous work, handoffs, and iteration. | [The work layer between issue and diff](learn/intent-work-layer.md) |
| **[Tools](tools/README.md)** | 20 sourced profiles across repository context, memory, lifecycle, specifications, and session provenance. | [Browse the tool landscape](tools/README.md) |

## Why It Exists

Issue trackers describe intended work and Git preserves code history. Coding agents also produce plans, attempts, local decisions, test evidence, and handoffs between those layers. This index documents the artifacts and tools that keep that work inspectable.

It is not a general AI-tools directory, paid marketplace, endorsement program, or overall leaderboard.

## Evidence Rules

- Non-obvious claims cite canonical documentation, source, or reproducible evidence.
- Project-reported behavior stays distinct from behavior reproduced by index maintainers.
- Records show status, attribution, limitations, and a `last_verified` date.
- Inclusion is free. Paid placement and required backlinks are not accepted.
- Affiliations and conflicts of interest are disclosed.

Read the [methodology](METHODOLOGY.md), [project charter](CHARTER.md), [taxonomy](docs/taxonomy.md), and current [external review status](REVIEWS.md).

## Contribute

- [Correct a factual claim](https://github.com/devspecs-com/agentic-development-index/issues/new?template=factual-correction.yml)
- [Dispute a classification or interpretation](https://github.com/devspecs-com/agentic-development-index/issues/new?template=disputed-claim.yml)
- [Verify a profile you maintain](https://github.com/devspecs-com/agentic-development-index/issues/new?template=profile-review.yml)
- [Propose a new record](https://github.com/devspecs-com/agentic-development-index/issues/new?template=new-record.yml)
- [Author a record directly](CONTRIBUTING.md)

The Markdown record is the source of truth. Validation checks structure, evidence labels, links, and category coverage without generating a second copy of profile facts.

## Affiliation

[DevSpecs](https://www.devspecs.com/) maintains the index. DevSpecs receives no featured placement, score, or relaxed evidence standard. Comparative claims involving DevSpecs require unaffiliated review.

## Roadmap And Licensing

[Datasets and benchmarks are gated future sections](ROADMAP.md); they will not appear as empty inventory. Code is MIT licensed, original editorial content is CC BY 4.0, and original structured data is CC0. See [LICENSES.md](LICENSES.md).
