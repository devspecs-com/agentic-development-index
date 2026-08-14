---
id: devspecs
title: DevSpecs
summary: A local-first CLI that indexes repository intent, code, tests, and Git history, composes durable intent artifacts, and preserves bounded task lifecycle and handoff records.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://www.devspecs.com/
tags:
  - intent-index
  - artifact-composition
  - task-lifecycle
  - local-first
---

# DevSpecs

## What It Does

DevSpecs indexes plans, ADRs, PRDs, RFCs, docs, source, tests, and Git activity for local retrieval. `ds compose` creates and indexes repo-owned ADR, RFC, and PRD drafts. Its task workflow creates bounded slices with packed context, prompts, checkpoints, decision gates, and next-target state.

## Where It Fits

It combines repository navigation with an explicit execution lifecycle. It does not execute an LLM, capture every agent tool call, or replace an issue tracker.

## Deployment And Storage

The MIT-licensed CLI runs locally. Its search index is SQLite under the user's DevSpecs home; durable task artifacts are repository Markdown by default. No account, cloud service, or LLM is required.

## Agent Support

The CLI is agent-agnostic. `ds init` can install thin adapters for Codex, Cursor, Claude Code, and Windsurf; agents can also call the CLI directly.

## Capabilities

- Local intent and repository evidence retrieval.
- Repo-owned ADR, RFC, and PRD composition with repository convention detection.
- Bounded task slices, iteration slices, checkpoints, and decision gates.
- Repository and experimental multi-repository workspace views.
- Related: [task slices](../formats/task-slice.md), [checkpoints](../formats/checkpoint.md), and [brownfield recovery](../learn/brownfield-intent-recovery.md).

## Limitations

Task evidence is only as complete as the recorded checkpoint. Retrieval output is evidence, not proof of full repository coverage. Workspace support is newer than the single-repository workflow.

DevSpecs maintains this index. This affiliation does not change profile ordering, status, or evidence requirements; comparative claims require unaffiliated review.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [DevSpecs](https://www.devspecs.com/) |
| Canonical source | [DevSpecs CLI repository](https://github.com/devspecs-com/devspecs-cli) |
| Canonical feature documentation | [`ds compose` durable documents](https://github.com/devspecs-com/devspecs-cli#durable-documents) |
| Project-reported | [Task flow](https://docs.devspecs.com/greenfield/task-flow) |

[Back to the index](../README.md#tools)
