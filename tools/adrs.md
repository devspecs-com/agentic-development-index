---
id: adrs
title: ADRs
summary: A cross-platform Rust CLI for creating, searching, validating, converting, and exposing Architecture Decision Records to coding agents.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/joshrotenberg/adrs
tags:
  - adr
  - cli
  - mcp
---

# ADRs

## What It Does

ADRs creates and manages Architecture Decision Records using Nygard or MADR templates. Its CLI can list, search, link, supersede, validate, import, export, and generate views of a decision repository.

## Where It Fits

It is a cross-platform ADR lifecycle tool with compatibility for existing ADR Tools repositories. It adds structured search, health checks, multiple templates, JSON-ADR interchange, and optional agent access while remaining focused on decision records.

## Deployment And Storage

The Rust CLI is available through Homebrew, Cargo, Docker, and binary releases for macOS, Linux, and Windows. Records remain in the repository; optional NextGen mode adds YAML front matter and configuration.

## Agent Support

The default build includes an MCP server that exposes ADR operations to compatible agents. Agents can also call the CLI directly.

## Capabilities

- Create and manage Nygard and MADR records and template variants.
- Search by content, status, or tags.
- Link and supersede decisions with reverse relationships.
- Run repository health checks and a pre-commit hook.
- Import and export JSON-ADR, generate documentation, and serve ADR operations through MCP.
- Related format: [Architecture decision record](../formats/architecture-decision-record.md).

## Limitations

Its evidence model is the ADR repository itself. It does not establish whether a decision matches current source or tests, and its MCP surface does not turn ADR lifecycle into a broader implementation checkpoint system.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical source and documentation | [ADRs repository](https://github.com/joshrotenberg/adrs) |

[Back to Tools](README.md)
