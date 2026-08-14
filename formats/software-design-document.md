---
id: software-design-document
title: Software design document
summary: A structured explanation of a software system's boundaries, building blocks, runtime behavior, deployment, and quality decisions.
category: format
status: reviewed
last_verified: 2026-08-14
canonical_url: https://docs.arc42.org/home/
tags:
  - intent
  - design
  - architecture
---

# Software design document

## What It Is

A software design document explains how a system is structured and why. Depending on scope, it may cover context, constraints, building blocks, runtime behavior, deployment, cross-cutting concepts, quality requirements, risks, and decisions.

## When To Use It

Use one when contributors need a shared model spanning more than a single decision. Keep it proportional: a small service may need a few diagrams and boundaries, while a large system may need a maintained architecture reference.

## Lifecycle

Establish the document with the architecture, assign ownership, and update it when system boundaries or quality assumptions change. Link granular decisions to ADRs instead of duplicating their histories.

## Agent Use

Agents can use the document to locate likely owners and constraints before searching source. They should verify claims against current code and tests, especially when the document has no recent review date.

## Pitfalls

- Producing a one-time diagram that no owner maintains.
- Repeating source structure without explaining boundaries or rationale.
- Hiding critical decisions inside prose with no links.
- Treating an architecture overview as exact implementation context.

## Examples

The arc42 template organizes architecture documentation into twelve adaptable sections and explicitly supports leaner or more thorough variants.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical reference | [arc42 documentation](https://docs.arc42.org/home/) |
| Primary template | [arc42 overview](https://arc42.org/overview) |

[Back to the index](../README.md#formats)
