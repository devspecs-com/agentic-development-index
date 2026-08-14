---
id: aider
title: Aider
summary: A terminal coding agent that builds a ranked repository map, edits local files, and integrates its changes with Git.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://aider.chat/
tags:
  - navigation
  - coding-agent
  - git
---

# Aider

## What It Does

Aider is a terminal coding agent. Its repository map extracts important symbols and uses a dependency graph to fit relevant structure into a configurable token budget.

## Where It Fits

Its strongest index-relevant role is repository context plus Git-integrated execution. It is not a separate intent or task-lifecycle store.

## Deployment And Storage

The open-source CLI runs locally under the Apache-2.0 license. Files and commits stay in Git; input/chat history paths are configurable. A model provider or local model is required for agent work.

## Agent Support

Aider is itself the agent interface. It can also copy its selected code context for use in another chat tool.

## Capabilities

- Ranked repository maps for many languages.
- Explicit editable and read-only file context.
- Automatic Git commits, diff review, and undo.
- Related: [software design documents](../formats/software-design-document.md) and [brownfield intent recovery](../learn/brownfield-intent-recovery.md).

## Limitations

The project documents one-repository operation; multi-repository work requires manual read-only files or exported maps. Repository mapping explains code structure, not current product intent or decision state.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Aider documentation](https://aider.chat/docs/) |
| Project-reported | [Repository map](https://aider.chat/docs/repomap.html) |
| Project-reported | [Git integration](https://aider.chat/docs/git.html) |

[Back to Tools](README.md)
