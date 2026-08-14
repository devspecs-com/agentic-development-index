---
id: github-spec-kit
title: GitHub Spec Kit
summary: An open-source, agent-integrated harness for producing specifications, plans, tasks, implementations, and resumable gated workflows.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.github.com/spec-kit/
tags:
  - specifications
  - planning
  - workflows
---

# GitHub Spec Kit

## What It Does

GitHub Spec Kit provides a specification-driven sequence of specify, clarify, plan, checklist, tasks, analyze, implement, and converge. Its newer workflow engine can chain agent, shell, and human-gate steps with persisted run state.

## Where It Fits

It is an intent and process harness that creates repository artifacts. It does not primarily index arbitrary existing plans or capture unrelated agent sessions.

## Deployment And Storage

The MIT-licensed `specify` CLI runs locally and writes project Markdown plus `.specify/` configuration and workflow state. The CLI can manage artifacts without an LLM; agentic commands require a configured coding-agent integration.

## Agent Support

Spec Kit documents integrations for many coding agents, including Copilot, Claude, Gemini, Codex, Kiro, and generic adapters.

## Capabilities

- Specification, plan, task, analysis, and implementation artifacts.
- Review gates and resumable workflow runs.
- Extensible integrations, presets, workflows, and bundles.
- Related: [technical specifications](../formats/technical-specification.md) and [implementation plans](../formats/implementation-plan.md).

## Limitations

The workflow can produce substantial artifact volume. Official documentation states that spec persistence strategy remains a user choice, and downloaded workflows can execute unsandboxed shell steps.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [GitHub Spec Kit](https://github.github.com/spec-kit/) |
| Project-reported | [Agentic SDD reference](https://github.github.com/spec-kit/reference/agentic-sdd.html) |
| Project-reported | [Workflow reference](https://github.github.com/spec-kit/reference/workflows.html) |

[Back to Tools](README.md)
