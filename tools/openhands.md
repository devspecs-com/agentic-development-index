---
id: openhands
title: OpenHands
summary: An open software-agent platform whose SDK can persist conversation events, execution state, tool outputs, workspace context, and skills.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://docs.openhands.dev/
tags:
  - coding-agent
  - session-state
  - platform
---

# OpenHands

## What It Does

OpenHands provides CLI, application, and SDK surfaces for software agents. Its SDK can save and restore conversations, including messages, tool events, agent configuration, execution state, statistics, workspace context, and activated skills.

## Where It Fits

It is an agent platform with detailed session persistence. That state is richer than a handoff but does not itself establish approved intent or a reviewed decision gate.

## Deployment And Storage

Core OpenHands and agent-server images are MIT-licensed; enterprise code has separate terms. Local SDK persistence writes conversation state and event files to a configurable directory. Cloud options also exist. Agent execution requires an LLM.

## Agent Support

OpenHands supplies its own agent runtime and SDK. Repository customization supports skills, setup scripts, and hooks.

## Capabilities

- Persistent and resumable conversation state.
- Structured event logs and tool observations.
- Repository skills, setup, hooks, and local/cloud execution.
- Related: [session handoffs](../formats/session-handoff.md) and [context versus memory](../learn/context-vs-memory.md).

## Limitations

Persisted conversations can contain secrets and large event histories; the documentation describes encryption or redaction choices. Enterprise licensing differs from the core project.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [OpenHands documentation](https://docs.openhands.dev/) |
| Project-reported | [Conversation persistence](https://docs.openhands.dev/sdk/guides/convo-persistence) |
| Canonical source | [OpenHands repository](https://github.com/OpenHands/OpenHands) |

[Back to the index](../README.md#tools)
