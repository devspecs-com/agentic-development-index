---
id: codex
title: Codex
summary: OpenAI's coding agent across CLI, IDE, app, and cloud surfaces with layered AGENTS.md instructions and resumable tasks.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://developers.openai.com/codex/
tags:
  - coding-agent
  - instructions
  - sessions
---

# Codex

## What It Does

Codex is OpenAI's coding agent across terminal, IDE, desktop, and cloud workflows. It discovers layered `AGENTS.md` guidance from user and project scopes before work begins.

## Where It Fits

Codex executes engineering work and carries agent-specific task state. `AGENTS.md` provides durable instruction context; external tools are still needed for a tool-independent intent index or formal lifecycle.

## Deployment And Storage

The Codex CLI is open source under Apache-2.0, while the broader Codex product uses OpenAI services and models. Project instructions remain in the repository; global guidance defaults to the user's Codex home.

## Agent Support

This profile covers Codex itself. Repository `AGENTS.md` files are also recognized by other tools implementing the open format.

## Capabilities

- Layered global, repository, and directory instructions.
- Local and remote coding workflows with reviewable changes.
- CLI automation and extension surfaces.
- Related: [`AGENTS.md`](../formats/agents-md.md) and [asynchronous agent work](../learn/asynchronous-agent-work.md).

## Limitations

Instruction files set expectations but do not establish that a task is approved or complete. Features and persistence differ across CLI, IDE, app, and cloud surfaces; this profile does not flatten them into one storage claim.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Codex documentation](https://developers.openai.com/codex/) |
| Project-reported | [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) |
| Canonical source | [Codex CLI repository](https://github.com/openai/codex) |

[Back to Tools](README.md)
