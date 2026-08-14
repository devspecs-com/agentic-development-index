---
id: log4brains
title: Log4brains
summary: A docs-as-code CLI and static-site generator for creating, browsing, searching, and publishing repository Architecture Decision Records.
category: tool
status: reviewed
last_verified: 2026-08-14
tags:
  - adr
  - docs-as-code
  - publishing
---

# Log4brains

## What It Does

Log4brains creates Architecture Decision Records from a customizable template, previews them locally, and builds a searchable static decision site. It derives navigation metadata from ADR text and Git history.

## Where It Fits

It turns repository ADRs into a browsable docs-as-code knowledge base while keeping records close to source. It supports global and package-specific ADRs in multi-package projects.

## Deployment And Storage

The Node CLI runs locally and stores Markdown ADRs and configuration in the project. Static output can be published through GitHub Pages, GitLab Pages, S3, or another static host; builds that derive Git metadata require the repository's full history.

## Agent Support

The project does not document a dedicated coding-agent adapter. Agents with shell access can create ADRs through the CLI or read the repository Markdown directly.

## Capabilities

- Initialize an ADR knowledge base and customizable template.
- Create ADRs from the command line.
- Preview with hot reload and browse a chronological timeline.
- Search ADRs and publish a static site.
- Support global and package-specific ADRs in a monorepo.
- Related format: [Architecture decision record](../formats/architecture-decision-record.md).

## Limitations

The workflow is centered on ADR authoring and publication. It does not connect decisions to current source/test ownership or capture a general coding-agent task lifecycle. Some generated metadata depends on complete Git history.

## Resources

| Resource | Link |
| --- | --- |
| Source and documentation | [Log4brains repository](https://github.com/thomvaill/log4brains) |
| Releases | [Log4brains releases](https://github.com/thomvaill/log4brains/releases) |

[Back to the index](../README.md#tools)
