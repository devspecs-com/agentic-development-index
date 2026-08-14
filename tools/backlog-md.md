---
id: backlog-md
title: Backlog.md
summary: A Markdown-native task manager that gives humans and coding agents one Git-versioned backlog, CLI, MCP server, and review workflow.
category: tool
status: reviewed
last_verified: 2026-08-14
tags:
  - task-lifecycle
  - local-first
  - markdown
---

# Backlog.md

## What It Does

Backlog.md manages tasks, acceptance criteria, plans, decisions, milestones, dependencies, and status in repository Markdown. It exposes the same records through CLI, JSON, MCP, terminal board, and local browser UI.

## Where It Fits

It is a task/spec collaboration layer. It does not primarily index arbitrary repository intent or capture full agent sessions.

## Deployment And Storage

The MIT-licensed CLI runs locally. Records live in a configurable repository folder such as `backlog/` or `.backlog/`; Git is optional and remote operations are configurable. No LLM is required for the task manager itself.

## Agent Support

Documented setup covers Claude Code, Codex, Gemini CLI, Kiro, Cursor, and generic CLI/MCP clients.

## Capabilities

- Markdown tasks with acceptance criteria, plans, comments, and final summaries.
- Milestones, dependencies, decisions, search, and JSON reads.
- Review checkpoints before implementation and completion.
- Related: [task slices](../formats/task-slice.md) and [checkpoints](../formats/checkpoint.md).

## Limitations

The recommended lifecycle centers tasks and one-task-per-session review. Repository evidence retrieval and session capture are separate concerns. The index has not reproduced its cross-branch behavior.

## Resources

| Resource | Link |
| --- | --- |
| Project page | [Backlog.md repository](https://github.com/MrLesk/Backlog.md) |
| Releases | [Backlog.md releases](https://github.com/MrLesk/Backlog.md/releases) |

[Back to the index](../README.md#tools)
