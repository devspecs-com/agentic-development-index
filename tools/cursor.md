---
id: cursor
title: Cursor
summary: A commercial AI code editor with repository rules, user rules, automatically generated memories, and indexed codebase context.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://cursor.com/
tags:
  - coding-agent
  - memory
  - rules
---

# Cursor

## What It Does

Cursor is an AI code editor. Project rules in `.cursor/rules` provide versioned, scoped instructions; user rules apply globally; memories are generated from chat and scoped to a Git repository.

## Where It Fits

It combines coding execution, codebase context, and agent-specific guidance. Rules and memories do not form a general cross-agent task lifecycle.

## Deployment And Storage

Cursor is a commercial desktop product. Project rules live in the repository, user rules live in editor settings, and memories are managed by Cursor. Model inference is required. Official docs say memories are unavailable with Privacy Mode enabled.

## Agent Support

The mechanisms directly configure Cursor Agent and related Cursor features. Versioned rule content can remain human-readable outside Cursor.

## Capabilities

- Repository and user rules with scoped inclusion.
- Automatically generated repository memories.
- Indexed codebase context and agent editing.
- Related: [`AGENTS.md`](../formats/agents-md.md) and [context versus memory](../learn/context-vs-memory.md).

## Limitations

Generated memories are product-managed and privacy-mode dependent. Rules can guide behavior without proving current intent, validation, or human acceptance.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Cursor](https://cursor.com/) |
| Project-reported | [Cursor rules and memories](https://docs.cursor.com/context/rules) |

[Back to the index](../README.md#tools)
