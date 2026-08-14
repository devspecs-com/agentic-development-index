---
id: implementation-plan
title: Implementation plan
summary: A living execution document that sequences non-trivial work, validation, recovery, and important discoveries.
category: format
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/openai/openai-cookbook/blob/main/articles/codex_exec_plans.md
tags:
  - execution
  - planning
  - agents
---

# Implementation plan

## What It Is

An implementation plan explains how to carry a non-trivial change from the current repository state to a verifiable result. Strong plans include context, sequence, validation, decision points, and enough recovery information for a new contributor to continue.

## When To Use It

Use a plan for work that spans components, contains uncertainty, or will cross sessions. A tiny, well-understood edit may only need a bounded task and acceptance check.

## Lifecycle

Draft from current repository evidence, review the intended sequence, and update the plan as implementation produces new facts. Preserve meaningful discoveries and decisions. Close it with results and remaining work rather than rewriting it as if execution followed the first draft exactly.

## Agent Use

An agent can execute one bounded part, update progress, and record surprises. It should stop at decision gates, keep later work out of the active slice, and avoid marking unverified work complete.

## Pitfalls

- Writing a checklist with no rationale or validation.
- Treating the initial plan as immutable after contradictory evidence appears.
- Giving one agent the entire roadmap as a single work package.
- Recording completion without commands, outputs, or review evidence.

## Examples

OpenAI's ExecPlans guidance describes self-contained, living plans for long-running coding tasks. GitHub Spec Kit provides a related specification-to-plan-to-task flow.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical implementation guidance | [OpenAI Cookbook: Codex ExecPlans](https://github.com/openai/openai-cookbook/blob/main/articles/codex_exec_plans.md) |
| Primary workflow example | [GitHub Spec Kit](https://github.github.com/spec-kit/) |

[Back to the index](../README.md#formats)
