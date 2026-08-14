# Agentic Development Index

[![Validate index](https://github.com/devspecs-com/agentic-development-index/actions/workflows/validate.yml/badge.svg)](https://github.com/devspecs-com/agentic-development-index/actions/workflows/validate.yml)
[![Code: MIT](https://img.shields.io/badge/code-MIT-2ea44f)](LICENSES.md)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC_BY_4.0-2ea44f)](LICENSES.md)

An evidence-backed GitHub index of formats, practical guides, and tools for preserving context, intent, decisions, evidence, and work state in AI-assisted software development.

Use it to understand an artifact, improve an agent workflow, or compare what different tools actually preserve.

## Browse The Catalog

The root is the catalog map. Category indexes add descriptions and comparison dimensions; individual records remain the source of truth.

### Formats

| Job | Durable artifact formats |
| --- | --- |
| Preserve intent | [Architecture decision record](formats/architecture-decision-record.md) · [Request for comments](formats/request-for-comments.md) · [Product requirements document](formats/product-requirements-document.md) · [Technical specification](formats/technical-specification.md) · [Software design document](formats/software-design-document.md) |
| Guide an agent | [`AGENTS.md`](formats/agents-md.md) |
| Bound execution | [Implementation plan](formats/implementation-plan.md) · [Task slice](formats/task-slice.md) |
| Record evidence | [Checkpoint](formats/checkpoint.md) · [Evaluation card](formats/evaluation-card.md) |
| Carry continuity | [Session handoff](formats/session-handoff.md) |

[Browse format descriptions and families](formats/README.md).

### Learn

- [Context and memory solve different problems](learn/context-vs-memory.md)
- [The work layer between issue and diff](learn/intent-work-layer.md)
- [Before, during, and after asynchronous agent work](learn/asynchronous-agent-work.md)
- [Recover intent in a brownfield repository](learn/brownfield-intent-recovery.md)
- [Decision gates and iteration slices](learn/decision-gates-and-iteration-slices.md)

[Browse learning-guide summaries](learn/README.md).

### Tools

- **Decision records:** [ADR Tools](tools/adr-tools.md) · [ADRs](tools/adrs.md) · [Backstage ADR Plugin](tools/backstage-adr-plugin.md) · [Log4brains](tools/log4brains.md)
- **Repository context and navigation:** [Aider](tools/aider.md) · [Augment Code](tools/augment-code.md) · [DevSpecs](tools/devspecs.md) · [Sourcegraph Cody](tools/sourcegraph-cody.md)
- **Durable instructions and memory:** [Claude Code](tools/claude-code.md) · [Cline](tools/cline.md) · [Codex](tools/codex.md) · [Continue](tools/continue.md) · [Cursor](tools/cursor.md) · [GitHub Copilot](tools/github-copilot.md) · [Kiro](tools/kiro.md) · [OpenHands](tools/openhands.md) · [Tessl](tools/tessl.md)
- **Intent and execution:** [Backlog.md](tools/backlog-md.md) · [Beads](tools/beads.md) · [BMAD Method](tools/bmad-method.md) · [GitHub Spec Kit](tools/github-spec-kit.md) · [OpenSpec](tools/openspec.md)
- **Session provenance:** [Entire](tools/entire.md) · [SpecStory](tools/specstory.md)

[Browse the complete tool matrix and capability boundaries](tools/README.md).

## How Records Relate

- A **format** defines a durable artifact shape.
- A **tool** creates, validates, renders, indexes, links, publishes, or manages those artifacts.
- A **learning guide** explains when and how to use them in a real development workflow.

Tool facts live in one canonical tool profile. Format pages may curate typed relationships to those profiles, but do not duplicate vendor descriptions or maintain parallel tool lists.

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
- [Propose a tool-format relationship](https://github.com/devspecs-com/agentic-development-index/issues/new?template=format-tool-relationship.yml)
- [Author a record directly](CONTRIBUTING.md)

The Markdown record is the source of truth. Validation checks structure, evidence labels, links, and category coverage without generating a second copy of profile facts.

## Affiliation

[DevSpecs](https://www.devspecs.com/) maintains the index. DevSpecs receives no featured placement, score, or relaxed evidence standard. Comparative claims involving DevSpecs require unaffiliated review.

## Roadmap And Licensing

[Datasets and benchmarks are gated future sections](ROADMAP.md); they will not appear as empty inventory. Code is MIT licensed, original editorial content is CC BY 4.0, and original structured data is CC0. See [LICENSES.md](LICENSES.md).
