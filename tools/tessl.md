---
id: tessl
title: Tessl
summary: A commercial agent-skill and documentation registry with a spec-driven workflow that writes reviewable requirements before implementation.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://tessl.io/
tags:
  - specifications
  - agent-skills
  - documentation
---

# Tessl

## What It Does

Tessl distributes agent skills and documentation through a registry. Its spec-driven development tile instructs an agent to clarify requirements, write specification Markdown, pause for approval, implement, verify requirements, and update specs with discoveries.

## Where It Fits

It combines reusable agent instructions with a specification workflow and documentation context. It is not a standalone source/test index or session recorder.

## Deployment And Storage

Tessl is a commercial service with a CLI and hosted registry. The documented workflow writes specifications into a repository `specs/` folder. The CLI installs the process, while a connected coding agent and model execute it.

## Agent Support

Tiles are designed for compatible coding-agent environments. Current host coverage should be checked in Tessl's setup documentation.

## Capabilities

- Installable agent skills and curated documentation context.
- Requirements-first spec workflow with human approval.
- Requirement-to-test linking in the documented tile.
- Related: [technical specifications](../formats/technical-specification.md) and [decision gates](../learn/decision-gates-and-iteration-slices.md).

## Limitations

The spec-driven behavior is implemented through agent instructions, so adherence depends on the host and model. Registry availability and licensing differ between Tessl content and third-party tiles.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Tessl](https://tessl.io/) |
| Project-reported | [Spec-driven development with Tessl](https://docs.tessl.io/common-workflows/spec-driven-development-with-tessl) |

[Back to Tools](README.md)
