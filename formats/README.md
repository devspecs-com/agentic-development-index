# Formats

Durable artifact shapes that humans and agents can create, review, version, query, and hand off. Profiles explain the job each format performs, its lifecycle, and how an agent should use it without treating old intent as current instruction.

## Intent

- [Architecture decision record](architecture-decision-record.md) - records one consequential architecture decision and its rationale.
- [Request for comments](request-for-comments.md) - circulates a consequential proposal for review before adoption.
- [Product requirements document](product-requirements-document.md) - defines the product problem, outcome, scope, and acceptance signals.
- [Technical specification](technical-specification.md) - turns approved intent into inspectable system behavior and constraints.
- [Software design document](software-design-document.md) - explains the structure, boundaries, and important runtime qualities of a software system.

## Instructions

- [`AGENTS.md`](agents-md.md) - gives coding agents repository-local operating instructions.

## Execution

- [Implementation plan](implementation-plan.md) - sequences non-trivial implementation work with validation and recovery guidance.
- [Task slice](task-slice.md) - bounds one independently reviewable attempt within a larger change.

## Evidence

- [Checkpoint](checkpoint.md) - records what happened, the evidence observed, and the decision that follows.
- [Evaluation card](evaluation-card.md) - makes an evaluation's task, data, criteria, results, and limits inspectable.

## Continuity

- [Session handoff](session-handoff.md) - carries the durable state of unfinished work to the next human or agent.

## Contribute

Start with the [format template](../templates/format.md) and the [record-authoring guide](../docs/authoring-records.md). Found an inaccurate claim? [Open a focused correction](https://github.com/devspecs-com/agentic-development-index/issues/new?template=factual-correction.yml).

[Back to the index](../README.md)
