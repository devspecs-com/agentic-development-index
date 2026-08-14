---
id: context-vs-memory
title: Context and memory solve different problems
summary: A practical model for separating the evidence needed for the current change from durable state that should survive sessions.
category: learn
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/devspecs-com/agentic-development-index/blob/main/learn/context-vs-memory.md
tags:
  - context
  - memory
  - continuity
---

# Context and memory solve different problems

## What You Will Learn

You will learn to separate **working context** from **durable memory**. Working context is the evidence needed to make the next change: relevant code, tests, intent, constraints, and current state. Durable memory is the reviewed record that should remain useful after the prompt or session ends.

## Why It Matters

More retained conversation does not guarantee better engineering context. A long session can preserve stale guesses while omitting the exact test or current decision that matters. Conversely, a search result can retrieve the right file without explaining why the work exists.

## Workflow

1. Start from the current goal or question.
2. Retrieve the smallest credible source, test, documentation, and intent set.
3. Mark which claims are direct evidence and which are inference.
4. Do the bounded work.
5. Preserve only durable outcomes: decisions, verified evidence, misses, and the next action.
6. Rebuild future working context from those records plus the current repository, not from an assumed-perfect transcript.

This creates a useful asymmetry: context can be temporary and task-specific; memory should be selective, inspectable, and durable.

## Tradeoffs

Selective memory requires judgment and can omit a detail that later matters. Full transcripts retain more raw material but are expensive to inspect and may contain contradictions. The practical target is not total recall; it is enough provenance to recover the thread and verify important claims.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical guide | [Context and memory solve different problems](https://github.com/devspecs-com/agentic-development-index/blob/main/learn/context-vs-memory.md) |
| Primary continuity implementation | [Entire documentation](https://docs.entire.io/) |
| Primary task-context implementation | [DevSpecs task flow](https://docs.devspecs.com/greenfield/task-flow) |

[Back to Learn](README.md)
