---
id: claude-code
title: Claude Code
summary: Anthropic's coding agent with repository instruction files, scoped rules, user memory, and resumable agent sessions.
category: tool
status: reviewed
last_verified: 2026-08-14
tags:
  - coding-agent
  - memory
  - instructions
---

# Claude Code

## What It Does

Claude Code is a coding agent available through terminal and editor surfaces. For durable context, it supports `CLAUDE.md`, imported instruction files, path-scoped rules, and auto memory.

## Where It Fits

It combines execution with agent-specific instructions and memory. Those mechanisms guide Claude sessions; they are not a tool-independent task lifecycle or repository evidence index.

## Deployment And Storage

Claude Code is a commercial Anthropic product. Project instructions can live in versioned repository files, while user and auto memory can live under user-scoped Claude directories. Model inference and an Anthropic-supported authentication path are required.

## Agent Support

The files directly configure Claude Code. Shared `AGENTS.md` compatibility depends on the current product surface and should not be assumed from `CLAUDE.md` alone.

## Capabilities

- Hierarchical project and user instructions.
- Scoped rules and imported files.
- Auto memory for recurring project knowledge.
- Related: [`AGENTS.md`](../formats/agents-md.md) and [context versus memory](../learn/context-vs-memory.md).

## Limitations

Auto memory is agent-specific and may not be team-versioned. Instructions are prompt context, not proof of current behavior or approval. Full sessions can still contain more noise than a reviewed handoff.

## Resources

| Resource | Link |
| --- | --- |
| Project page | [Claude Code documentation](https://code.claude.com/docs/) |
| Project-reported | [How Claude remembers your project](https://code.claude.com/docs/en/memory) |

[Back to the index](../README.md#tools)
