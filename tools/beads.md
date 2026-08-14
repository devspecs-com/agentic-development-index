---
id: beads
title: Beads
summary: A dependency-aware graph issue tracker for coding agents with ready-work detection, structured memory, and Dolt-backed history.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/gastownhall/beads
tags:
  - task-graph
  - memory
  - local-first
---

# Beads

## What It Does

Beads tracks issues, dependencies, discovered work, readiness, assignment, and project memory for coding agents. Its graph supports blockers, parent-child links, related work, and provenance such as `discovered-from`.

## Where It Fits

It is a structured task graph and agent-memory layer. It does not primarily retrieve source/test context or preserve full session transcripts.

## Deployment And Storage

The MIT-licensed `bd` CLI runs locally. Current documentation uses a Dolt database in `.beads/`, with embedded and server modes plus Dolt remote sync. No LLM is required.

## Agent Support

`bd setup` documents integrations for Codex, Claude Code, Factory, Cursor, and others; JSON commands support generic agents.

## Capabilities

- Dependency-aware ready-work detection and atomic claiming.
- Durable issue history, links, memory, and machine-readable output.
- Distributed IDs and multi-branch synchronization model.
- Related: [task slices](../formats/task-slice.md) and [session handoffs](../formats/session-handoff.md).

## Limitations

The Dolt-backed synchronization model has operational concepts beyond ordinary Git files. Project issues document historical confusion around storage and worktrees; users should follow the current sync guidance rather than older JSONL workflows.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Beads repository](https://github.com/gastownhall/beads) |
| Project-reported | [Beads agent instructions](https://github.com/gastownhall/beads/blob/main/AGENTS.md) |

[Back to Tools](README.md)
