---
id: cline
title: Cline
summary: An open-source VS Code coding agent with persistent rules and a Markdown Memory Bank convention for cross-session project context.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://cline.bot/
tags:
  - coding-agent
  - memory
  - instructions
---

# Cline

## What It Does

Cline is a VS Code coding agent. Its rules provide persistent instructions, while the documented Memory Bank convention stores project brief, active context, decisions, patterns, and progress in repository Markdown.

## Where It Fits

Cline combines execution with agent-specific memory. Memory Bank is maintained through prompting and rules rather than an independent evidence or lifecycle engine.

## Deployment And Storage

The extension is open source under Apache-2.0. Rules and Memory Bank files can live in the repository; Cline connects to a selected model provider, so agent work requires an LLM.

## Agent Support

Memory Bank is a Cline workflow, while its Markdown records remain readable by humans and other agents. Cline rules also recognize several external rule-file conventions.

## Capabilities

- Versionable project rules and conditional instruction loading.
- Structured cross-session Memory Bank files.
- Agent execution with tool use and human approval controls.
- Related: [session handoffs](../formats/session-handoff.md) and [context versus memory](../learn/context-vs-memory.md).

## Limitations

Memory updates rely on the agent following instructions and can become stale or verbose. The index has not reproduced how reliably current releases refresh or prioritize the files.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Cline](https://cline.bot/) |
| Project-reported | [Memory Bank](https://docs.cline.bot/best-practices/memory-bank) |
| Project-reported | [Cline rules](https://docs.cline.bot/customization/cline-rules) |

[Back to Tools](README.md)
