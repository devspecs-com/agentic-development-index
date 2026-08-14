---
id: adr-tools
title: ADR Tools
summary: A shell command-line tool for creating, numbering, linking, and superseding Nygard-style Architecture Decision Records in a repository.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/npryce/adr-tools
tags:
  - adr
  - decisions
  - cli
---

# ADR Tools

## What It Does

ADR Tools manages a log of Markdown Architecture Decision Records. It initializes an ADR directory, creates numbered records, links related decisions, and can supersede an earlier record while updating that record's status.

## Where It Fits

It is a focused implementation of the Nygard ADR workflow. It helps a repository maintain decision-file structure and relationships; it is not a general specification system or repository context index.

## Deployment And Storage

ADR Tools is distributed as shell scripts and runs locally. ADRs remain Markdown files in a configurable repository directory such as `doc/adr` or `doc/architecture/decisions`.

## Agent Support

The project does not document a dedicated coding-agent adapter. An agent with shell access can invoke the same `adr` commands as a developer and review the resulting Markdown diff.

## Capabilities

- Initialize a repository ADR log.
- Create numbered Nygard-style records.
- Link, amend, supersede, and change the status of existing records.
- Generate a table of contents and graph from the decision log.
- Related format: [Architecture decision record](../formats/architecture-decision-record.md).

## Limitations

The workflow is specialized to ADRs and a shell environment. It does not retrieve broader plans, source, tests, or agent-session state, and it does not provide an agent-specific execution lifecycle.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical source and documentation | [ADR Tools repository](https://github.com/npryce/adr-tools) |

[Back to Tools](README.md)
