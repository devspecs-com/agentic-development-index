# Taxonomy

## Category Boundary

The index covers the durable substrate between intended work and code changes. An item belongs when it helps preserve, recover, communicate, or evaluate intent and work state across AI-assisted development.

## Formats

Formats are durable artifact shapes that humans or agents can create, review, version, query, or hand off.

### Intent

Defines why or what should change: PRDs, RFCs, ADRs, technical specifications, and design documents.

### Instructions

Defines how an agent should operate in a repository or workflow: `AGENTS.md`, tool rules, skills, conventions, and policy files.

### Execution

Defines bounded work and ordering: implementation plans, task tracks, slices, checklists, and iteration plans.

### Evidence

Records what happened and how it was checked: checkpoints, test receipts, evaluation cards, and decision records.

### Continuity

Carries useful state forward: handoffs, status records, decision journals, and resumable work summaries.

One artifact may have a primary family and secondary capabilities. Avoid duplicating it across multiple format records.

## Learn

Learn content explains concepts, teaches workflows, compares meaningfully different approaches, or reports original findings.

- Concepts establish vocabulary and boundaries.
- Guides help a reader complete a real job.
- Comparisons explain tradeoffs without synthetic winners.
- Reports summarize original index data or reproducible observations.

`Informational` is an internal content description, not a public navigation label.

## Tools

Tools are classified by evidenced capabilities rather than vendor category alone:

- context and repository indexing;
- session capture and memory;
- specifications and intent management;
- task lifecycle and checkpoints;
- codebase navigation and retrieval;
- orchestration and multi-repository coordination;
- provenance, review, and audit.

A coding agent belongs only when its durable context or lifecycle capability is itself relevant. The index is not a general coding-agent directory.

## Datasets

Datasets are reusable collections of relevant artifacts or observations. Records require provenance, license, version, access conditions, permitted use, and a removal process.

This category is deferred until B track.

## Benchmarks

Benchmarks are repeatable tasks, inputs, metrics, baselines, and environments used to evaluate a relevant capability. External reported results and index-reproduced results remain separate.

This category is deferred until C track.

## Sample Classification

| Example | Primary category | Family or capability |
| --- | --- | --- |
| ADR | Format | Intent |
| RFC | Format | Intent |
| PRD | Format | Intent |
| `AGENTS.md` | Format | Instructions |
| Implementation plan | Format | Execution |
| Task slice | Format | Execution |
| Checkpoint | Format | Evidence |
| Session handoff | Format | Continuity |
| DevSpecs | Tool | Context, lifecycle, navigation, provenance |
| OpenSpec | Tool | Specifications and intent management |
| Session-memory system | Tool | Session capture, memory, continuity |

These examples fit without adding a new top-level category, which is the A01 taxonomy stability test.
