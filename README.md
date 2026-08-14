# Agentic Development Index

An evidence-backed index of the formats, knowledge, and tools that preserve context, intent, decisions, and work state in AI-assisted software development.

The index is maintained by [DevSpecs](https://www.devspecs.com/), but it is designed to be useful independently of DevSpecs. Inclusion is free, factual claims require sources, and DevSpecs is evaluated under the same rules as every other project.

## What It Covers

- **Formats:** durable artifacts such as ADRs, RFCs, PRDs, agent instructions, plans, task slices, checkpoints, and handoffs.
- **Learn:** practical explanations, guides, comparisons, and periodic reports.
- **Tools:** software for context, memory, specifications, lifecycle state, navigation, orchestration, and provenance.
- **Datasets:** future registries for corpora with explicit provenance, licensing, and permitted use.
- **Benchmarks:** future registries for reproducible evaluations and clearly attributed external results.

The first public release includes Formats, Learn, and Tools. Dataset and Benchmark navigation will appear only after each section has enough credible records to be useful.

## The Question

The index focuses on one question:

> What durable substrate helps humans and coding agents understand intent, preserve work state, and continue safely across development sessions?

It is not a general AI tools directory, a paid marketplace, or a leaderboard.

## Trust Model

- Every non-obvious claim links to primary documentation, source, or reproducible evidence.
- Profiles distinguish project-reported behavior from behavior reproduced by index maintainers.
- Records include attribution, status, and a `last_verified` date.
- Maintainers can submit focused factual corrections.
- Affiliations and conflicts of interest are disclosed.
- No paid placement or required backlinks.

See [METHODOLOGY.md](METHODOLOGY.md), [CHARTER.md](CHARTER.md), and [CONTRIBUTING.md](CONTRIBUTING.md).

## Repository Model

Structured YAML records will be the source of truth for profile facts. Markdown will carry interpretation, examples, and instructional content. CI will validate records and generate the website plus reusable JSON and CSV exports.

The repository owns:

- structured records and schemas;
- editorial content and evidence history;
- validation and export tooling;
- the generated index application.

The main DevSpecs website owns the public `/index/` route integration, global navigation, consent, and site-wide analytics. The generated index remains independently buildable and deployable.

## Status

The first implementation run is tracked in [`devspecs/tasks/agentic-development-index-v1/A00-index.md`](devspecs/tasks/agentic-development-index-v1/A00-index.md).

## Licensing

Code is MIT licensed. Original editorial content is CC BY 4.0. Structured index data is released under CC0 1.0. See [LICENSES.md](LICENSES.md) for path-level details.
