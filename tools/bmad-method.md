---
id: bmad-method
title: BMAD Method
summary: A modular agent workflow that produces planning, architecture, story, sprint, review, and project-context artifacts across development phases.
category: tool
status: reviewed
last_verified: 2026-08-14
tags:
  - specifications
  - orchestration
  - planning
---

# BMAD Method

## What It Does

BMAD Method packages specialized agents and workflows for analysis, requirements, architecture, epics, stories, implementation, review, and course correction. Documents produced in one phase become context for later phases.

## Where It Fits

It is a broad planning and execution methodology. Compared with a repository index or session recorder, BMAD creates the workflow artifacts it expects agents to consume.

## Deployment And Storage

The project is distributed from an open GitHub repository and installs agent assets into a project. Outputs live under `_bmad-output/`, including PRDs, architecture, stories, sprint state, and optional project context. Agent workflows require an LLM-capable host.

## Agent Support

The documented prerequisites include Claude Code, Cursor, and similar AI-powered tools; workflow assets are invoked through the host's skills or agents.

## Capabilities

- Multiple planning tracks for different scope.
- Explicit planning, solutioning, implementation, review, and course-correction workflows.
- Repository project-context files and fresh-session handoffs between phases.
- Related: [PRDs](../formats/product-requirements-document.md) and [implementation plans](../formats/implementation-plan.md).

## Limitations

The method introduces many roles and artifacts, so small work needs its quick-flow path. This index has not reproduced the end-to-end method or verified every host integration.

## Resources

| Resource | Link |
| --- | --- |
| Project page | [BMAD Method repository](https://github.com/bmad-code-org/BMAD-METHOD) |
| Project-reported | [Getting started](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/tutorials/getting-started.md) |

[Back to the index](../README.md#tools)
