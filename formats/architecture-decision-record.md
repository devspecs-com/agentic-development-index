---
id: architecture-decision-record
title: Architecture decision record
summary: A durable record of one consequential architecture decision, its context, chosen option, and consequences.
category: format
status: reviewed
last_verified: 2026-08-14
canonical_url: https://adr.github.io/
tags:
  - intent
  - architecture
  - decisions
---

# Architecture decision record

## What It Is

An architecture decision record (ADR) captures one decision that affects a system's structure or qualities. A useful ADR states the context, the decision, and its consequences. Collections of ADRs form a decision log rather than a replacement for architecture documentation.

## When To Use It

Use an ADR when future maintainers will reasonably ask why one architecture option won. Small, reversible implementation choices usually do not earn a permanent record.

## Lifecycle

Create the record while the decision is reviewable. Mark it accepted when adopted. If the decision changes, preserve the old record and link a new ADR that supersedes it; do not silently rewrite history.

## Agent Use

An agent should use current ADRs as constraints and superseded ADRs as historical explanation. It should cite the relevant ADR when proposing a conflicting design and request a new decision rather than editing accepted rationale to match new code.

## Pitfalls

- Recording outcomes without alternatives or consequences.
- Treating every code choice as architecture.
- Leaving superseded records looking current.
- Letting an ADR claim behavior that tests or code no longer support.

## Examples

The [MADR project](https://adr.github.io/madr/) provides concise Markdown templates and examples. The ADR GitHub organization also maintains a broader [collection of templates](https://adr.github.io/adr-templates/).

## Sources

| Evidence | Source |
| --- | --- |
| Canonical overview | [Architectural Decision Records](https://adr.github.io/) |
| Primary template | [Markdown Architectural Decision Records](https://adr.github.io/madr/) |

[Back to Formats](README.md)
