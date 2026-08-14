# Agentic Development Index

An evidence-backed index of the formats, knowledge, and tools that preserve context, intent, decisions, and work state in AI-assisted software development.

The index is maintained by [DevSpecs](https://www.devspecs.com/), but it is designed to be useful independently of DevSpecs. Inclusion is free, factual claims require sources, and DevSpecs is evaluated under the same rules as every other project.

## What It Covers

- **[Formats](formats/README.md):** durable artifacts such as ADRs, RFCs, PRDs, agent instructions, plans, task slices, checkpoints, and handoffs.
- **[Learn](learn/README.md):** practical explanations, guides, comparisons, and periodic reports.
- **[Tools](tools/README.md):** software for context, memory, specifications, lifecycle state, navigation, orchestration, and provenance.
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

This GitHub repository is the canonical v1 product. Its Markdown indexes, profiles, and guides must remain complete and useful in GitHub's native renderer.

The repository owns:

- the root and category indexes;
- readable format, learning, and tool pages;
- editorial content and evidence history;
- lightweight validation and contribution tooling.

Compact metadata or machine-readable exports may support the repository later. They do not replace Markdown as the source of truth. A future website may consume repository content, but it is not part of the v1 launch contract.

## Status

The first implementation run is tracked in [`devspecs/tasks/agentic-development-index-v1/A00-index.md`](devspecs/tasks/agentic-development-index-v1/A00-index.md).

## Licensing

Code is MIT licensed. Original editorial content is CC BY 4.0. Structured index data is released under CC0 1.0. See [LICENSES.md](LICENSES.md) for path-level details.
