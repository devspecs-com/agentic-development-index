---
id: backstage-adr-plugin
title: Backstage ADR Plugin
summary: A Backstage community plugin that retrieves, renders, and searches repository Architecture Decision Records across catalog entities.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.com/backstage/community-plugins/tree/main/workspaces/adr/plugins/adr
tags:
  - adr
  - developer-portal
  - search
---

# Backstage ADR Plugin

## What It Does

The Backstage ADR Plugin displays Architecture Decision Records associated with software-catalog entities and adds ADRs to Backstage Search. Repository locations are connected through catalog annotations and configured integrations.

## Where It Fits

It makes distributed repository decisions discoverable through an existing Backstage developer portal. It is primarily a retrieval and presentation layer rather than an ADR authoring workflow.

## Deployment And Storage

The frontend plugin runs inside a Backstage application and depends on the corresponding ADR backend plugin. ADRs remain in configured repository or URL locations; Backstage retrieves and indexes them through its integrations.

## Agent Support

The project documents developer-portal UI and search integration rather than a coding-agent adapter. Agents may consume links or search results exposed by a surrounding Backstage integration, but no direct agent protocol is part of this plugin's documented surface.

## Capabilities

- Render ADRs on catalog entity pages.
- Search ADRs across entities and repositories.
- Rewrite relative links and embedded assets for portal rendering.
- Customize status presentation, path filters, and content decorators.
- Parse MADR by default with extension points for other formats.
- Related format: [Architecture decision record](../formats/architecture-decision-record.md).

## Limitations

Adoption requires a configured Backstage application, backend plugin, software-catalog entities, and repository integrations. The plugin does not create ADRs or preserve implementation attempts, source/test evidence, or task checkpoints.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical source and setup documentation | [Backstage ADR Plugin](https://github.com/backstage/community-plugins/tree/main/workspaces/adr/plugins/adr) |

[Back to the index](../README.md#tools)
