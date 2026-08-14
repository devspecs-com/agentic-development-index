---
id: specstory
title: SpecStory
summary: A session-history tool that reads local coding-agent stores, exports conversations, and resumes work across supported agents and projects.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://specstory.com/
tags:
  - session-capture
  - handoff
  - cross-agent
---

# SpecStory

## What It Does

SpecStory captures and organizes coding-agent session history. Its terminal integration can list, export, share, and resume sessions from supported agent stores, including cross-project and cross-agent continuation.

## Where It Fits

It is a session-history and handoff layer. It preserves conversation state from existing agents rather than defining repository intent, task gates, or source ownership.

## Deployment And Storage

The CLI reads documented local session locations for supported agents and can create exported history. Product and account features may use SpecStory services. Capture and export do not inherently require another LLM call.

## Agent Support

Official usage documentation names Claude Code, Cursor, Factory, Codex, Gemini CLI, and DeepSeek session sources, with support varying by operating system and agent format.

## Capabilities

- Discovery and export of local coding-agent sessions.
- Resume across supported projects and agents.
- Searchable session history and handoff.
- Related: [session handoffs](../formats/session-handoff.md) and [asynchronous agent work](../learn/asynchronous-agent-work.md).

## Limitations

Cross-agent translation cannot guarantee equivalent hidden instructions or tool state. Local session formats can change, and raw history can be less concise than a reviewed checkpoint.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [SpecStory](https://specstory.com/) |
| Project-reported | [Terminal coding-agent usage](https://docs.specstory.com/integrations/terminal-coding-agents/usage) |

[Back to the index](../README.md#tools)
