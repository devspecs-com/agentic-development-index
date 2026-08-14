---
id: tessl
title: Tessl
summary: A package manager and registry for creating, evaluating, versioning, and distributing skills and context for coding agents.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://tessl.io/
tags:
  - context-registry
  - agent-skills
  - evaluation
---

# Tessl

## What It Does

Tessl provides a package manager, registry, and tooling for versioned agent context. Skills and plugins can package instructions, rules, commands, and MCP servers for repository-local use or distribution through a workspace.

## Where It Fits

It is primarily a context creation, evaluation, and distribution layer. It can preserve repository-specific guidance and package it for multiple agents, but it does not define a general task checkpoint or decision-gate lifecycle.

## Deployment And Storage

Tessl combines a local CLI with hosted registry and organization features. Repository plugins can stay with the codebase, while registry publication and workspace distribution use the service. Package-management operations do not inherently require an LLM; agents use the installed context during model-driven work.

## Agent Support

Tessl documents custom agent setup and packages context in shared formats. Exact execution behavior depends on the selected agent and the installed skill or plugin.

## Capabilities

- Versioned skills and plugins containing instructions, rules, commands, and tools.
- Registry and workspace distribution for shared agent context.
- Reviews and scenario-based evaluations for skill quality.
- Related: [`AGENTS.md`](../formats/agents-md.md) and [context versus memory](../learn/context-vs-memory.md).

## Limitations

Agent results still depend on model behavior and instruction following. Hosted registry and organization features are service-managed, and third-party packages carry quality, security, licensing, and maintenance risks.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Tessl](https://tessl.io/) |
| Project-reported | [Skills and plugins overview](https://docs.tessl.io/creating-skills-and-plugins/overview.md) |
| Project-reported | [Repository plugins](https://docs.tessl.io/distribute/repository-plugins.md) |

[Back to the index](../README.md#tools)
