---
id: openspec
title: OpenSpec
summary: An open-source specification workflow that keeps proposals, requirements, designs, tasks, and archived changes in Markdown.
category: tool
status: reviewed
last_verified: 2026-08-14
tags:
  - specifications
  - brownfield
  - markdown
---

# OpenSpec

## What It Does

OpenSpec installs an artifact-guided workflow for exploring, proposing, applying, and archiving changes. A change can contain a proposal, requirement scenarios, design, and task checklist, with resulting specs retained in Markdown.

## Where It Fits

It is a repository-native specification framework. It creates and updates intent artifacts; it does not primarily index arbitrary source/test evidence or capture external agent sessions.

## Deployment And Storage

The MIT-licensed Node CLI runs locally and writes an `openspec/` directory. The repository documents optional anonymous command telemetry with opt-out controls. An LLM is not required for CLI file management, while slash-command workflows run in a coding agent.

## Agent Support

OpenSpec documents more than 30 tool integrations, including Claude Code, Cursor, GitHub Copilot, Codex, and generic invocation variants.

## Capabilities

- Proposal, requirement, design, task, apply, and archive flow.
- Brownfield onboarding and editable artifact schemas.
- Beta stores for shared or cross-repository specifications.
- Related: [technical specifications](../formats/technical-specification.md) and [decision gates](../learn/decision-gates-and-iteration-slices.md).

## Limitations

The default flow can mark implementation tasks complete without independently capturing all test or review evidence. Stores are documented as beta. Agent output quality remains model- and prompt-dependent.

## Resources

| Resource | Link |
| --- | --- |
| Project page | [OpenSpec repository](https://github.com/Fission-AI/OpenSpec) |
| Project-reported | [OpenSpec documentation](https://openspec.dev/) |

[Back to the index](../README.md#tools)
