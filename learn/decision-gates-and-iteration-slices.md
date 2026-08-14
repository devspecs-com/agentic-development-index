---
id: decision-gates-and-iteration-slices
title: Decision gates and iteration slices
summary: A workflow for turning implementation evidence into explicit promotion, improvement, rework, rollback, or blocking decisions.
category: learn
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/devspecs-com/agentic-development-index/blob/main/learn/decision-gates-and-iteration-slices.md
tags:
  - decisions
  - iteration
  - lifecycle
---

# Decision gates and iteration slices

## What You Will Learn

You will learn to treat an implementation attempt as evidence for a decision, then attach follow-up work to the attempt that produced the learning.

## Why It Matters

Binary done/not-done status hides useful outcomes. A slice may validate the direction while exposing one missing edge case, falsify the approach, or require human review. Starting an unrelated new task loses that relationship; implementing the whole roadmap removes the review boundary.

## Workflow

At the end of a slice, record observed evidence and choose one gate:

- **Promote:** the gate passed; continue to the next peer slice.
- **Improve:** the direction holds; add a child iteration such as `A01-1`.
- **Rework:** the approach should change before continuing.
- **Rollback:** revert the attempted change and preserve why.
- **Block:** an external decision or dependency prevents useful progress.

The iteration slice should inherit the parent's goal and evidence, state the new information, and remain narrower than silently reopening the original work.

## Tradeoffs

Explicit gates can become ceremony if every trivial edit requires a lifecycle record. Use them where uncertainty, delegation, review latency, or blast radius makes the decision valuable. A named decision does not replace the evidence supporting it.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical guide | [Decision gates and iteration slices](https://github.com/devspecs-com/agentic-development-index/blob/main/learn/decision-gates-and-iteration-slices.md) |
| Primary workflow | [DevSpecs task flow](https://docs.devspecs.com/greenfield/task-flow) |
| Related living-plan model | [OpenAI Cookbook: Codex ExecPlans](https://github.com/openai/openai-cookbook/blob/main/articles/codex_exec_plans.md) |

[Back to the index](../README.md#learning-guides)
