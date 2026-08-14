# Agentic Development Index

[![Validate index](https://github.com/devspecs-com/agentic-development-index/actions/workflows/validate.yml/badge.svg)](https://github.com/devspecs-com/agentic-development-index/actions/workflows/validate.yml)
[![Code: MIT](https://img.shields.io/badge/code-MIT-2ea44f)](LICENSES.md)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC_BY_4.0-2ea44f)](LICENSES.md)

An evidence-backed GitHub index of formats, practical guides, and tools for preserving context, intent, decisions, evidence, and work state in AI-assisted software development.

Use it to understand an artifact, improve an agent workflow, or compare what different tools actually preserve. The complete catalog is below; individual record pages provide deeper evidence, limitations, and sources.

## Contents

- [Formats](#formats)
- [Learning Guides](#learning-guides)
- [Tools](#tools)
- [How Records Relate](#how-records-relate)
- [Evidence Rules](#evidence-rules)
- [Contribute](#contribute)

## Formats

Durable artifact shapes that humans and agents can create, review, version, query, and hand off.

### Preserve Intent

- **[Architecture decision record](formats/architecture-decision-record.md)** - Records a consequential architecture choice, its context, and tradeoffs; includes common ADR variants and related tooling.
- **[Request for comments](formats/request-for-comments.md)** - Circulates a consequential proposal for review before it becomes an adopted decision.
- **[Product requirements document](formats/product-requirements-document.md)** - Defines the product problem, intended outcome, scope, and acceptance signals.
- **[Technical specification](formats/technical-specification.md)** - Turns approved intent into inspectable system behavior, interfaces, and constraints.
- **[Software design document](formats/software-design-document.md)** - Explains a system's structure, boundaries, runtime behavior, and important quality attributes.

### Guide And Execute Work

- **[`AGENTS.md`](formats/agents-md.md)** - Gives coding agents repository-local operating instructions that travel with the codebase.
- **[Implementation plan](formats/implementation-plan.md)** - Sequences non-trivial work with validation, dependencies, and recovery guidance.
- **[Task slice](formats/task-slice.md)** - Bounds one independently reviewable attempt within a larger change.

### Preserve Evidence And Continuity

- **[Checkpoint](formats/checkpoint.md)** - Records what happened, which evidence was observed, and which decision follows.
- **[Evaluation card](formats/evaluation-card.md)** - Makes an evaluation's task, data, criteria, results, and limitations inspectable.
- **[Session handoff](formats/session-handoff.md)** - Carries the durable state of unfinished work to the next human or agent.

## Learning Guides

- **[Context and memory solve different problems](learn/context-vs-memory.md)** - Separate evidence needed for the current task from continuity that must survive across sessions.
- **[The work layer between issue and diff](learn/intent-work-layer.md)** - Preserve the micro-decisions, attempts, and findings that conventional work items usually miss.
- **[Before, during, and after asynchronous agent work](learn/asynchronous-agent-work.md)** - Bound a change, let an agent run, then review its work from durable evidence.
- **[Recover intent in a brownfield repository](learn/brownfield-intent-recovery.md)** - Use existing plans and decision artifacts as evidence without reviving stale instructions.
- **[Decision gates and iteration slices](learn/decision-gates-and-iteration-slices.md)** - Turn implementation learning into an explicit promote, improve, rework, rollback, or block decision.

## Tools

Software that preserves or exposes coding-agent context, intent, work state, evidence, and handoffs. Inclusion is based on evidenced capabilities, not popularity or paid placement. "LLM required" describes the documented workflow; it does not mean every utility command invokes a model.

| Tool | Primary job | Deployment / durable state | LLM required |
| --- | --- | --- | --- |
| [ADR Tools](tools/adr-tools.md) | Nygard ADR lifecycle | Local shell CLI; repository Markdown | No |
| [ADRs](tools/adrs.md) | Cross-platform ADR lifecycle and search | Local CLI/MCP; repository Markdown | No |
| [Aider](tools/aider.md) | Repository-aware coding agent | Local CLI; Git and local history | Yes |
| [Augment Code](tools/augment-code.md) | Semantic repository context | Hosted/local connectors; local or S3 indexes | No for context service |
| [Backlog.md](tools/backlog-md.md) | Markdown task lifecycle | Local CLI; repository Markdown | No |
| [Backstage ADR Plugin](tools/backstage-adr-plugin.md) | ADR retrieval and portal search | Backstage plugin; repository ADRs plus search index | No |
| [Beads](tools/beads.md) | Dependency-aware agent task graph | Local CLI; Dolt database | No |
| [BMAD Method](tools/bmad-method.md) | Multi-phase planning and execution | Agent assets; repository artifacts | Yes |
| [Claude Code](tools/claude-code.md) | Coding agent with durable instructions and memory | Local client; repository and user files | Yes |
| [Cline](tools/cline.md) | IDE coding agent with Memory Bank | VS Code extension; repository Markdown | Yes |
| [Codex](tools/codex.md) | Coding agent with layered project instructions | CLI, app, and cloud; repository and user files | Yes |
| [Continue](tools/continue.md) | Configurable coding agents and rules | IDE/CLI; local or shared configuration | Yes |
| [Cursor](tools/cursor.md) | AI editor with rules and memories | Desktop editor; repository rules and product memory | Yes |
| [DevSpecs](tools/devspecs.md) | Local intent index, durable artifact composition, and task lifecycle | Local CLI; SQLite plus repository Markdown | No |
| [Entire](tools/entire.md) | Coding-agent session capture | CLI; Git-backed checkpoints | No for capture |
| [GitHub Copilot](tools/github-copilot.md) | Coding agent with repository instructions | Hosted service; repository instructions | Yes |
| [GitHub Spec Kit](tools/github-spec-kit.md) | Specification-driven workflow harness | Local CLI; repository Markdown and state | Yes for agent steps |
| [Kiro](tools/kiro.md) | Agentic IDE with specs and steering | Desktop/web; repository artifacts and service state | Yes |
| [Log4brains](tools/log4brains.md) | ADR authoring and static publication | Local CLI; repository Markdown and generated site | No |
| [OpenHands](tools/openhands.md) | Software-agent platform with persistent conversations | Local/cloud; event and state stores | Yes |
| [OpenSpec](tools/openspec.md) | Repository-native specification workflow | Local CLI; repository Markdown | Yes for agent commands |
| [Sourcegraph Cody](tools/sourcegraph-cody.md) | Codebase context and coding assistance | Managed or self-hosted Sourcegraph | Yes |
| [SpecStory](tools/specstory.md) | Cross-agent session history and resume | Local CLI; reads agent session stores | No for capture/export |
| [Tessl](tools/tessl.md) | Agent context package manager and registry | CLI/registry; repository skills and plugins | No for package management |

### Capability Boundaries

- **Architecture decisions:** ADR Tools and ADRs create or manage decision records; Log4brains publishes them; the Backstage ADR Plugin retrieves them through a developer portal.
- **Repository context:** Aider, Augment Code, Sourcegraph Cody, and coding agents retrieve or curate code context.
- **Durable instructions and memory:** Claude Code, Cline, Codex, Continue, Cursor, GitHub Copilot, Kiro, OpenHands, and Tessl carry or distribute reusable guidance or session state.
- **Intent and execution:** Backlog.md, Beads, BMAD Method, DevSpecs, GitHub Spec Kit, and OpenSpec preserve plans, tasks, or lifecycle state.
- **Session provenance:** Entire and SpecStory capture or translate coding-agent sessions.

These groups overlap. They are navigation aids, not scores or claims of equivalence.

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

The root README is the public catalog. Detailed Markdown records remain the source of truth for evidence, limitations, and verification metadata. Validation keeps both layers aligned.

## Affiliation

[DevSpecs](https://www.devspecs.com/) maintains the index. DevSpecs receives no featured placement, score, or relaxed evidence standard. Comparative claims involving DevSpecs require unaffiliated review.

## Roadmap And Licensing

[Datasets and benchmarks are gated future sections](ROADMAP.md); they will not appear as empty inventory. Code is MIT licensed, original editorial content is CC BY 4.0, and original structured data is CC0. See [LICENSES.md](LICENSES.md).
