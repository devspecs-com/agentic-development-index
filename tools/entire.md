---
id: entire
title: Entire
summary: A developer tool that captures coding-agent sessions as Git-linked checkpoints so prompts, tool activity, and context can be reviewed later.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://entire.io/
tags:
  - session-capture
  - provenance
  - git
---

# Entire

## What It Does

Entire captures the context behind coding-agent work and associates checkpoints with Git history. Its documented model centers sessions, checkpoints, summaries, prompts, and tool activity that can be searched or reviewed after the coding session.

## Where It Fits

Entire is primarily a session-provenance system. It records what happened around a change; it does not by itself define the approved product intent or a tool-independent planning format.

## Deployment And Storage

The MIT-licensed CLI integrates with local Git repositories and stores checkpoint data through Git-backed mechanisms described in its documentation. Capture does not require a second LLM call, while the coding agent being observed does.

## Agent Support

Official integrations cover supported terminal coding agents. Support and captured detail can differ by agent because each product exposes different local session data.

## Capabilities

- Automatic session and checkpoint capture linked to commits.
- Searchable prompts, summaries, and tool context.
- Continuation and review across captured agent work.
- Related: [checkpoints](../formats/checkpoint.md) and [session handoffs](../formats/session-handoff.md).

## Limitations

Session capture can preserve more detail than a reviewer needs and does not make agent claims correct. Agent coverage and storage behavior should be checked against the current integration documentation.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Entire](https://entire.io/) |
| Canonical source | [Entire CLI repository](https://github.com/entireio/cli) |
| Project-reported | [Entire documentation](https://docs.entire.io/) |

[Back to the index](../README.md#tools)
