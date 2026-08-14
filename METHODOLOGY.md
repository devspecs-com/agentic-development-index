# Methodology

## Core Rule

The index separates what a project says, what source material demonstrates, what index maintainers reproduce, and what remains inference.

## Evidence Classes

1. **Canonical:** a specification, standard, official documentation page, license, or maintained source repository.
2. **Project-reported:** a capability or result stated by the project maintainer but not reproduced by this index.
3. **Reproduced:** behavior observed through a documented command, fixture, or benchmark with retained receipts.
4. **Independent:** a relevant third-party evaluation or report with attributable methodology.
5. **Inference:** interpretation derived from evidence. Inference must be labeled and cannot silently become a factual profile field.

Marketing pages can establish what a project claims. They do not establish reproduced behavior.

## Inclusion Criteria

A record belongs when it materially contributes to durable context, intent, work state, evidence, handoffs, or evaluation in AI-assisted software development.

Records must have:

- an identifiable project, author, or standards body;
- a canonical public source;
- enough documentation to describe the item without speculation;
- a clear relationship to the project charter;
- licensing or access information where reuse is relevant.

Popularity is neither required nor sufficient.

## Record Status

- `draft`: structurally valid but not yet editorially reviewed.
- `reviewed`: evidence and language passed index review.
- `maintainer-verified`: a project maintainer confirmed the factual profile.
- `disputed`: a material claim or classification has an unresolved challenge.
- `stale`: verification is older than the category freshness target or key sources no longer resolve.
- `archived`: retained for historical value but no longer active.

## Freshness

Tool profiles should be rechecked at least every 180 days. Formats and conceptual references should be rechecked at least annually, or sooner when their canonical specification changes. Datasets and benchmarks will define version-specific freshness rules before those registries launch.

Updating a date without rechecking the cited claims is not verification.

## Comparison Rules

- Compare evidenced dimensions, not brand narratives.
- Distinguish absence of evidence from evidence of absence.
- Do not turn incompatible benchmark results into one score.
- Keep local-first, storage, LLM requirement, supported-agent, licensing, and lifecycle claims independently sourced.
- Mark project-reported and reproduced results separately.
- Explain material limitations and ambiguous classifications.

## Corrections

Anyone may propose a correction. The proposal must identify the affected claim, current text, proposed text, and supporting source. Small factual corrections should not require rewriting a full profile.

When credible sources disagree, preserve the disagreement in an issue or profile note rather than selecting the more flattering claim.

## Removal And Archival

Records may be removed from generated navigation when they become fraudulent, malicious, legally unsafe, or entirely unverifiable. Historically relevant inactive projects should normally be archived rather than erased.

## Conflicts And Funding

Contributors disclose employment, ownership, sponsorship, or maintainership related to a record. DevSpecs-affiliated reviewers may edit DevSpecs facts but should seek an unaffiliated review for comparative claims.

Paid placement is not accepted. Sponsorship, if introduced later, cannot affect inclusion, ordering, evidence status, or benchmark interpretation.

## Datasets And Benchmarks

Dataset records will require provenance, license, access conditions, version, removal process, and permitted-use statements. Benchmark records will require tasks, inputs, metrics, baselines, environment, raw outputs, and reproducibility status.

These sections remain unpublished until their schemas and minimum credible record counts pass the roadmap gates.
