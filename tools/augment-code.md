---
id: augment-code
title: Augment Code
summary: A commercial coding platform and context service that semantically indexes code and other engineering sources for agents.
category: tool
status: reviewed
last_verified: 2026-08-14
tags:
  - repository-context
  - indexing
  - multi-repo
---

# Augment Code

## What It Does

Augment Code provides coding agents and a Context Engine. Its Context Services expose semantic retrieval through MCP, SDKs, CLI, and HTTP, with connectors for code, documentation, runbooks, schemas, and configuration.

## Where It Fits

It primarily supplies repository and engineering context. That differs from session memory, approved specifications, and explicit task lifecycle, though retrieved sources may contain those artifacts.

## Deployment And Storage

Augment is a commercial service. Official connector documentation describes local filesystem indexing and persistent indexes stored locally or in S3. The context service can be queried independently; agent generation requires a model in the consuming tool.

## Agent Support

The MCP integration is documented for Claude Code, Codex, Gemini CLI, and other MCP clients. SDKs support custom agents and applications.

## Capabilities

- Semantic search across one or more engineering sources.
- Persistent indexes and source connectors.
- Agent-agnostic MCP and SDK access.
- Related: [technical specifications](../formats/technical-specification.md) and [context versus memory](../learn/context-vs-memory.md).

## Limitations

Most quality and efficiency results are project-reported and are not reproduced by this index. Retrieval can surface intent artifacts, but their lifecycle authority still needs an external convention.

## Resources

| Resource | Link |
| --- | --- |
| Project page | [Augment Code](https://www.augmentcode.com/) |
| Project-reported | [Context Services overview](https://docs.augmentcode.com/context-services/overview) |

[Back to the index](../README.md#tools)
