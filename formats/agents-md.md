---
id: agents-md
title: AGENTS.md
summary: A repository-local instruction file for coding agents, including project conventions, commands, boundaries, and review expectations.
category: format
status: reviewed
last_verified: 2026-08-14
canonical_url: https://agents.md/
tags:
  - instructions
  - agents
  - repositories
---

# AGENTS.md

## What It Is

`AGENTS.md` is an open Markdown format for repository instructions aimed at coding agents. It can describe project structure, setup and test commands, style rules, review expectations, and directory-specific guidance.

## When To Use It

Add one when agents repeatedly need the same repository knowledge or constraints. Nested files are useful when subprojects have different commands or ownership boundaries.

## Lifecycle

Create the root file from working repository knowledge, review it like code, and update it when commands or policies change. Keep narrower instructions near the code they govern and remove rules that no longer apply.

## Agent Use

Agents should read the nearest applicable `AGENTS.md` before editing, combine nested instructions according to tool behavior, and report conflicts. The file guides execution; it does not prove that a requested change is currently approved.

## Pitfalls

- Copying generic advice that obscures project-specific rules.
- Listing commands that no longer run.
- Mixing temporary task state into durable repository instructions.
- Assuming every agent discovers or resolves nested files identically.

## Examples

The format site provides a minimal example and guidance for monorepos, including nested instruction files for subprojects.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical specification | [`AGENTS.md` open format](https://agents.md/) |

[Back to Formats](README.md)
