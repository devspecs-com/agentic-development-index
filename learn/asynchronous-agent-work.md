---
id: asynchronous-agent-work
title: Before, during, and after asynchronous agent work
summary: A three-phase workflow for delegating a bounded change, working elsewhere, and returning to inspectable evidence.
category: learn
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/devspecs-com/agentic-development-index/blob/main/learn/asynchronous-agent-work.md
tags:
  - asynchronous
  - agents
  - handoff
---

# Before, during, and after asynchronous agent work

## What You Will Learn

You will learn a practical loop for leaving an agent with bounded work and returning without reconstructing the goal from chat and diffs.

## Why It Matters

Asynchronous agents let developers move to other work, but review becomes expensive when the returned diff has no durable explanation. The reviewer needs both physical evidence from Git and the work thread: target, constraints, tests, discoveries, and gate.

## Workflow

### Before the agent

Define one slice with a clear outcome, relevant repository evidence, exclusions, and acceptance checks. Identify any decision that must remain human-owned.

### While it runs

Let the agent operate inside the slice. Require it to preserve actual files read or edited, commands run, failures, and new information. It should stop when evidence changes the plan or the boundary is reached.

### After it finishes

Inspect the diff and test output. Read the checkpoint beside that physical evidence. Decide whether to promote, improve with a follow-up slice, rework the approach, roll back, or block. Give the next agent only the resulting bounded target.

## Tradeoffs

This loop adds a small handoff cost. It pays off when review happens later or by someone else. It cannot make weak tests trustworthy or transfer human product judgment to an agent; those remain explicit gates.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical guide | [Before, during, and after asynchronous agent work](https://github.com/devspecs-com/agentic-development-index/blob/main/learn/asynchronous-agent-work.md) |
| Primary session capture | [Entire documentation](https://docs.entire.io/) |
| Primary bounded workflow | [DevSpecs task flow](https://docs.devspecs.com/greenfield/task-flow) |

[Back to the index](../README.md#learning-guides)
