---
id: evaluation-card
title: Evaluation card
summary: A compact, reviewable record of an evaluation's task, data, criteria, environment, results, and known limitations.
category: format
status: reviewed
last_verified: 2026-08-14
canonical_url: https://platform.openai.com/docs/guides/evals
tags:
  - evidence
  - evaluation
  - reproducibility
---

# Evaluation card

## What It Is

An evaluation card summarizes what was evaluated and what a result can support. It should identify the task, inputs or dataset, test criteria, configuration, result, exclusions, and limitations. The term is used here as a practical index category, not as a universal standard.

## When To Use It

Use one when a score or product claim will be compared, repeated, or cited later. A card is valuable even for a small deterministic fixture if it prevents a result from becoming detached from its conditions.

## Lifecycle

Write the card with the evaluation definition, pin versions and inputs, attach run results, and update verification dates when rerun. Preserve failed and superseded runs when they explain a changed method or claim.

## Agent Use

Agents can assemble receipts and compare runs, but should not generalize beyond the recorded sample. They should keep project-reported results separate from independently reproduced results and surface changed environments.

## Pitfalls

- Reporting a score without task or data definitions.
- Tuning on the holdout and continuing to call it unseen.
- Hiding failed runs or selective exclusions.
- Treating one synthetic fixture as broad product superiority.

## Examples

OpenAI Evals separates evaluation definitions, data-source schemas, testing criteria, runs, and output items. An index card can link those machine records to a concise human interpretation.

## Sources

| Evidence | Source |
| --- | --- |
| Canonical evaluation guide | [OpenAI Evals](https://platform.openai.com/docs/guides/evals) |
| Primary API model | [OpenAI Evals API](https://platform.openai.com/docs/api-reference/evals) |

[Back to the index](../README.md#formats)
