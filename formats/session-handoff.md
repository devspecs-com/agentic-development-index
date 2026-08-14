---
id: session-handoff
title: Session handoff
summary: A durable continuation record containing the current goal, observed state, constraints, evidence, and next safe action.
category: format
status: reviewed
last_verified: 2026-08-14
tags:
  - continuity
  - handoff
  - sessions
---

# Session handoff

## What It Is

A session handoff carries the durable parts of unfinished work to another human or agent. It usually states the active goal, what changed, why, what was checked, current constraints, unresolved questions, and the next bounded action.

## When To Use It

Use a handoff when work crosses sessions, contributors, agents, or context windows. Prefer a short current record linked to source evidence over a transcript dump.

## Lifecycle

Create the handoff at a natural stop, refresh it when the next session materially changes state, and close or supersede it when the work finishes. Keep links to checkpoints, commits, and current intent so readers can inspect rather than trust a summary blindly.

## Agent Use

An agent should read the handoff as orientation, verify the repository state, and continue only the stated next action. It should update durable state at the next gate instead of relying on private conversation memory.

## Pitfalls

- Copying an entire chat without identifying decisions or next action.
- Omitting failures and unresolved risk.
- Leaving multiple handoffs that all appear current.
- Treating a summary as proof that tests passed or code still matches.

## Examples

Entire captures coding-agent sessions and checkpoints alongside Git history. DevSpecs task checkpoints and next-slice prompts provide a repository-local handoff shaped around bounded execution.

## Resources

| Resource | Link |
| --- | --- |
| Capture example | [Entire documentation](https://docs.entire.io/) |
| Related workflow | [DevSpecs task flow](https://docs.devspecs.com/greenfield/task-flow) |

[Back to the index](../README.md#formats)
