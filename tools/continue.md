---
id: continue
title: Continue
summary: An open-source platform for configurable coding agents, repository rules, model selection, tools, and context providers.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://docs.continue.dev/
tags:
  - coding-agent
  - rules
  - context
---

# Continue

## What It Does

Continue provides IDE and CLI coding-agent surfaces configured through models, rules, tools, and context. Local rules under `.continue/rules` can be versioned with a repository and scoped to relevant work.

## Where It Fits

It is a configurable agent and context framework. Rules preserve guidance; they do not by themselves provide task decisions, checkpoint evidence, or a current-intent ranking.

## Deployment And Storage

Continue's core is open source under Apache-2.0. Configuration and local rules can live on disk or in a repository; shared configurations may use Continue's hosted hub. Agent work requires a configured model.

## Agent Support

Continue supplies its own IDE and CLI agents and can connect different model providers and tools through configuration.

## Capabilities

- Versioned local rules and shared configuration.
- Pluggable models, tools, and context providers.
- Codebase and documentation awareness workflows.
- Related: [`AGENTS.md`](../formats/agents-md.md) and [brownfield intent recovery](../learn/brownfield-intent-recovery.md).

## Limitations

Current documentation deprecates some older context-provider workflows, so copied configurations may be stale. Rules are prompt guidance rather than an auditable execution lifecycle.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [Continue documentation](https://docs.continue.dev/) |
| Project-reported | [Rules](https://docs.continue.dev/customize/rules) |
| Project-reported | [Configuration reference](https://docs.continue.dev/reference) |

[Back to Tools](README.md)
