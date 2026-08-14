---
id: brownfield-intent-recovery
title: Recover intent in a brownfield repository
summary: A cautious workflow for finding current intent among old plans, decisions, docs, source, tests, and Git history.
category: learn
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/devspecs-com/agentic-development-index/blob/main/learn/brownfield-intent-recovery.md
tags:
  - brownfield
  - retrieval
  - intent
---

# Recover intent in a brownfield repository

## What You Will Learn

You will learn to recover a credible current thread from an established repository without treating every plausible plan or document as an instruction.

## Why It Matters

Brownfield repositories contain valuable intent and dangerous history in the same directories. A blocked plan can share more keywords with a query than the current decision memo. Source and tests show implemented behavior, but may not reveal which direction is still wanted.

## Workflow

1. Map likely subsystem boundaries and current activity.
2. Search for owner decisions, active plans, identifiers, source, and tests.
3. Check lifecycle markers: accepted, active, blocked, superseded, completed.
4. Use Git history to connect artifacts to the current code surface.
5. Separate three classes: current instruction, historical explanation, and uncertain evidence.
6. Stop before editing if no credible implementation owner or current decision can be established.

The output should be a starting boundary with confidence and exclusions, not an assertion of complete repository understanding.

## Tradeoffs

Conservative recovery may stop where an experienced maintainer would continue. Aggressive retrieval may hand an agent a coherent but obsolete story. Prefer visible uncertainty and a narrow follow-up question over silent ranking confidence.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical guide | [Recover intent in a brownfield repository](https://github.com/devspecs-com/agentic-development-index/blob/main/learn/brownfield-intent-recovery.md) |
| Primary architecture map | [arc42 documentation](https://docs.arc42.org/home/) |
| Primary intent recovery workflow | [DevSpecs brownfield intent recovery](https://docs.devspecs.com/brownfield/recover-intent) |

[Back to Learn](README.md)
