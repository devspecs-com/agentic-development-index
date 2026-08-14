---
id: checkpoint
title: Checkpoint
summary: A durable receipt of an attempted slice, observed evidence, unresolved gaps, and the decision governing what happens next.
category: format
status: reviewed
last_verified: 2026-08-14
canonical_url: https://docs.devspecs.com/greenfield/task-flow
tags:
  - evidence
  - decisions
  - lifecycle
---

# Checkpoint

## What It Is

A checkpoint records an execution attempt: target, changes, files read or edited, tests or other checks, misses, learnings, and the resulting decision. It is a receipt, not a claim that every relevant fact was captured automatically.

## When To Use It

Checkpoint at a review boundary, before handing work to another agent, or when new evidence changes the plan. For tiny disposable work, a commit message or short note may be sufficient.

## Lifecycle

Create it from observed work, verify important evidence, choose a decision, and link the next target. Keep prior checkpoints immutable enough to preserve history; append or supersede rather than erasing a failed attempt.

## Agent Use

Agents should populate checkpoints from actual tool output and repository changes. They must distinguish verified evidence from inference, expose incomplete checks, and leave human-only acceptance gates unresolved.

## Pitfalls

- Letting the agent award itself visual or product acceptance.
- Listing planned tests as if they ran.
- Capturing so much raw output that the decision disappears.
- Using a checkpoint as a second, divergent task plan.

## Examples

DevSpecs checkpoints record stage, decision, files, tests, learnings, and next target. Entire checkpoints preserve coding-agent context alongside Git history using a different capture model.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical workflow | [DevSpecs task checkpoints](https://docs.devspecs.com/greenfield/task-flow) |
| Related implementation | [Entire documentation](https://docs.entire.io/) |

[Back to the index](../README.md#formats)
