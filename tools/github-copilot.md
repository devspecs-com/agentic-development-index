---
id: github-copilot
title: GitHub Copilot
summary: GitHub's coding-assistant and agent product with repository instructions, custom agents, prompt files, and curated project context.
category: tool
status: reviewed
last_verified: 2026-08-14
canonical_url: https://docs.github.com/en/copilot
tags:
  - coding-agent
  - instructions
  - repository-context
---

# GitHub Copilot

## What It Does

GitHub Copilot provides chat, completion, review, and coding-agent workflows. Repository custom instructions, path-specific instructions, agent files, prompt files, and Spaces can carry reusable project context.

## Where It Fits

It combines hosted agent execution with GitHub repository context. Instructions preserve guidance, while GitHub issues and pull requests provide broader coordination; neither is automatically a slice/checkpoint lifecycle.

## Deployment And Storage

Copilot is a commercial hosted service used through GitHub and supported editors. Repository instruction files are versionable; personal and organization settings are service-managed. Model inference is required.

## Agent Support

The mechanisms configure GitHub Copilot surfaces. GitHub also documents support for shared files including `AGENTS.md`, `CLAUDE.md`, and `GEMINI.md`, with feature-specific compatibility.

## Capabilities

- Repository-wide and path-specific custom instructions.
- Reusable prompt files and custom agents.
- Coding-agent and code-review workflows connected to GitHub.
- Related: [`AGENTS.md`](../formats/agents-md.md) and [asynchronous agent work](../learn/asynchronous-agent-work.md).

## Limitations

Instruction support varies across Copilot surfaces, and GitHub notes that models may not follow instructions deterministically. Service state is not a local cross-agent memory store.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical | [GitHub Copilot documentation](https://docs.github.com/en/copilot) |
| Project-reported | [Customize Copilot for a project](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-copilot-overview) |
| Project-reported | [Custom instructions](https://docs.github.com/en/copilot/concepts/prompting/response-customization) |

[Back to Tools](README.md)
