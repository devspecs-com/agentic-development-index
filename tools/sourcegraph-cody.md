---
id: sourcegraph-cody
title: Sourcegraph Cody
summary: A code assistant that uses Sourcegraph search and code-graph data to retrieve context across local and remote repositories.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://sourcegraph.com/docs/cody
tags:
  - repository-context
  - code-graph
  - multi-repo
---

# Sourcegraph Cody

## What It Does

Cody is Sourcegraph's coding assistant. It retrieves context through keyword search, Sourcegraph search, code-graph relationships, repository context, and explicit file, symbol, repository, or URL references.

## Where It Fits

It is primarily a codebase navigation and coding-assistance layer. It can retrieve documentation and remote repositories, but does not provide a general intent-artifact lifecycle.

## Deployment And Storage

Cody is currently documented for Sourcegraph Enterprise through managed or self-hosted instances and editor/web clients. Sourcegraph indexes repositories and can ingest code-graph data. A model is required for Cody responses.

## Agent Support

Cody runs in VS Code, JetBrains, Visual Studio, and the Sourcegraph web app. MCP and OpenCtx can add external context in supported configurations.

## Capabilities

- Multi-repository search and context retrieval.
- Code-graph-aware symbol relationships.
- Context filters and explicit context selection.
- Related: [software design documents](../formats/software-design-document.md) and [brownfield recovery](../learn/brownfield-intent-recovery.md).

## Limitations

Some context and filtering features require Enterprise versions or feature flags. Retrieved relevance does not establish which historical plan is current or whether a change is accepted.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Sourcegraph Cody](https://sourcegraph.com/docs/cody) |
| Project-reported | [Cody context](https://sourcegraph.com/docs/cody/core-concepts/context) |
| Project-reported | [Code Graph](https://sourcegraph.com/docs/cody/core-concepts/code-graph) |

[Back to Tools](README.md)
