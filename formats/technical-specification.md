---
id: technical-specification
title: Technical specification
summary: An inspectable contract for system behavior, interfaces, constraints, acceptance checks, and unresolved technical choices.
category: format
status: reviewed
last_verified: 2026-08-14
canonical_url: https://github.github.com/spec-kit/
tags:
  - intent
  - specification
  - behavior
---

# Technical specification

## What It Is

A technical specification defines behavior and constraints precisely enough to review and implement. Its shape varies by domain, but useful specifications separate required outcomes from implementation guesses and make interfaces, edge cases, and acceptance evidence explicit.

## When To Use It

Use a specification when ambiguity would create incompatible implementations, expensive rework, or unsafe assumptions. It can follow a PRD or RFC, or stand alone for a narrowly technical change.

## Lifecycle

Start with unresolved behavior, review the contract with owners, then version material changes. Link implementation plans and conformance evidence. A specification should be corrected when the contract changes, not quietly drift behind the code.

## Agent Use

Agents can extract acceptance criteria, identify underspecified cases, and check proposed code against the contract. They should report conflicts between spec, code, and tests rather than choosing one source silently.

## Pitfalls

- Encoding implementation detail before behavior is agreed.
- Using vague adjectives where measurable constraints are needed.
- Omitting failure modes and compatibility boundaries.
- Assuming a generated specification has human approval.

## Examples

GitHub's Spec Kit demonstrates a specification-first workflow that separates specification, planning, tasks, and implementation. IETF standards provide a more formal example of normative technical specification.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical workflow example | [GitHub Spec Kit](https://github.github.com/spec-kit/) |
| Primary standards process | [RFC 2026](https://datatracker.ietf.org/doc/rfc2026/) |

[Back to the index](../README.md#formats)
