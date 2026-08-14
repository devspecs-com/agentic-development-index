---
id: architecture-decision-record
title: Architecture decision record
summary: A durable record of one consequential architecture decision, its context, chosen option, and consequences.
category: format
status: reviewed
last_verified: 2026-08-14
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

## Common Variants

| Variant | Shape | Useful when |
| --- | --- | --- |
| Nygard ADR | Title, status, context, decision, and consequences. | A team wants the smallest broadly recognizable decision narrative. |
| MADR | Adds explicit options, pros and cons, outcome, confirmation, and optional metadata. | Reviewers need visible tradeoff analysis before accepting the decision. |
| Y-Statement | Compresses context, concern, choice, intended quality, and accepted downside into one sentence. | A full record would be disproportionate but the rationale still needs to survive. |

These are alternative representations of the same artifact family, not maturity levels. Teams can use more than one shape if the choice is explicit and readers can still recognize status and supersession.

## Agent Use

An agent should use current ADRs as constraints and superseded ADRs as historical explanation. It should cite the relevant ADR when proposing a conflicting design and request a new decision rather than editing accepted rationale to match new code.

## Related Tools

The relationship describes the evidenced ADR job, not an overall product ranking. Each link opens the local tool profile maintained by this index.

| Tool | Relationship to ADRs |
| --- | --- |
| [ADR Tools](../tools/adr-tools.md) | Creates, numbers, links, and supersedes Nygard-style Markdown ADRs from a shell CLI. |
| [ADRs](../tools/adrs.md) | Creates, searches, checks, converts, and exposes Nygard or MADR records through a cross-platform CLI and optional MCP server. |
| [Backstage ADR Plugin](../tools/backstage-adr-plugin.md) | Retrieves, renders, and searches repository ADRs through a Backstage developer portal. |
| [Log4brains](../tools/log4brains.md) | Creates repository ADRs and publishes a searchable static decision log. |
| [DevSpecs](../tools/devspecs.md) | Composes repo-owned ADR drafts and indexes them beside plans, source, tests, Git activity, and bounded task records. |

## Related Formats

- Use an [RFC](request-for-comments.md) when the proposal is still seeking review across a wider design or organizational surface.
- Use a [technical specification](technical-specification.md) when approved intent needs inspectable behavior, interfaces, and constraints.
- Use a [checkpoint](checkpoint.md) when the important artifact is implementation evidence and the decision that follows an attempt.

## Pitfalls

- Recording outcomes without alternatives or consequences.
- Treating every code choice as architecture.
- Leaving superseded records looking current.
- Letting an ADR claim behavior that tests or code no longer support.

## Examples

Michael Nygard's original article includes the compact record structure and supersession model. The [MADR project](https://adr.github.io/madr/) provides full and minimal Markdown templates. The ADR GitHub organization compares [Nygard, MADR, Y-Statement, and other templates](https://adr.github.io/adr-templates/) and maintains a separate, inclusive [decision-capturing tool catalog](https://adr.github.io/adr-tooling/). [adr.zone](https://adr.zone/) offers a browsable guide to ADR formats, templates, examples, and tooling.

## Resources

| Resource | Link |
| --- | --- |
| Original article | [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) |
| Overview | [Architectural Decision Records](https://adr.github.io/) |
| Template variants | [ADR Templates](https://adr.github.io/adr-templates/) |
| MADR project | [Markdown Architectural Decision Records](https://adr.github.io/madr/) |
| Tool catalog | [Decision Capturing Tools](https://adr.github.io/adr-tooling/) |

[Back to the index](../README.md#formats)
