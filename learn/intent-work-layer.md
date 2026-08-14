---
id: intent-work-layer
title: The work layer between issue and diff
summary: Why AI-assisted development needs durable records for the attempts and micro-decisions that happen below conventional work items.
category: learn
status: reviewed
last_verified: 2026-08-14
tags:
  - intent
  - decisions
  - agents
---

# The work layer between issue and diff

## What You Will Learn

You will learn why an issue and a Git diff leave a meaningful gap in AI-assisted work, and which small records close it without creating a second project-management system.

## Why It Matters

An issue describes intended work at coordination scale. Git records file history. Between them, an agent may test several paths, reject an old workaround, discover a constraint, narrow scope, or leave a partially validated next step. Those micro-decisions affect the next session but often live only in chat.

## Workflow

Preserve the layer with four linked records:

1. **Intent:** the current goal and its owner-approved constraints.
2. **Slice:** the bounded attempt delegated now.
3. **Checkpoint:** what changed, what ran, what failed, and what was learned.
4. **Gate:** promote, improve, rework, roll back, or block.

Keep the issue tracker as the coordination layer and Git as the code history. Store the execution trail near the repository so humans and agents can inspect the same state.

## Tradeoffs

Capturing every tool call creates noise. Capturing nothing forces reconstruction. Use durable records at decision and handoff boundaries, with lighter treatment for obvious one-off fixes. The work layer earns its cost when changes span sessions, agents, repositories, or uncertain decisions.

## Resources

| Resource | Link |
| --- | --- |
| Decision-record overview | [Architectural Decision Records](https://adr.github.io/) |
| Task lifecycle example | [DevSpecs task flow](https://docs.devspecs.com/greenfield/task-flow) |

[Back to the index](../README.md#learning-guides)
