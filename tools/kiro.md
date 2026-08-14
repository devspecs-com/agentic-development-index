---
id: kiro
title: Kiro
summary: An agentic IDE and web product with structured specs, repository steering files, hooks, and multi-repository planning sessions.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://kiro.dev/
tags:
  - coding-agent
  - specifications
  - instructions
---

# Kiro

## What It Does

Kiro combines agentic coding with specs, steering, and hooks. Specs produce requirements, design, and tasks; steering files provide persistent workspace knowledge with always, conditional, manual, or automatic inclusion.

## Where It Fits

It combines a coding agent, specification workflow, and repository guidance. Its product-managed sessions differ from an agent-agnostic local lifecycle.

## Deployment And Storage

Kiro is a commercial product with IDE, CLI, and web surfaces. Workspace steering and downloaded spec artifacts can live in repository Markdown; web session state is service-managed. Model inference is required.

## Agent Support

Kiro is the agent host. It also recognizes `AGENTS.md` as steering input and supports MCP connections.

## Capabilities

- Feature and bug specs with requirements, design, and tasks.
- Scoped repository and global steering.
- Hooks and multi-repository web spec sessions.
- Related: [technical specifications](../formats/technical-specification.md) and [`AGENTS.md`](../formats/agents-md.md).

## Limitations

Behavior and storage differ across IDE, CLI, and web. Kiro's docs identify some features as preview, and a spec's generated task list is not independent evidence that implementation passed.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Kiro documentation](https://kiro.dev/docs/) |
| Project-reported | [Steering](https://kiro.dev/docs/steering/) |
| Project-reported | [Web specs](https://kiro.dev/docs/web/specs/) |

[Back to the index](../README.md#tools)
