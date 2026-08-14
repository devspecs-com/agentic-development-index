# Contributing

Contributions should make the index more accurate, useful, or reproducible. Small factual corrections are preferred over broad promotional rewrites.

## Before Contributing

Read:

- [CHARTER.md](CHARTER.md)
- [METHODOLOGY.md](METHODOLOGY.md)
- [docs/taxonomy.md](docs/taxonomy.md)

Disclose whether you maintain, work for, invest in, or are sponsored by a project affected by the change.

## Contribution Types

### Correct A Fact

Open a focused pull request or use the [factual correction form](https://github.com/devspecs-com/agentic-development-index/issues/new?template=factual-correction.yml). Include:

- the affected record and field;
- the current claim;
- the proposed correction;
- first-party or otherwise credible supporting material;
- your relationship to the project.

Change `last_verified` only after rechecking every cited claim in the record. A reproduced claim also needs the command, fixture, and receipt needed to repeat it.

### Dispute A Classification

Use the [disputed claim form](https://github.com/devspecs-com/agentic-development-index/issues/new?template=disputed-claim.yml) when the cited facts may be accurate but their interpretation, category, or relationship to another capability is contested. Include the competing interpretation and its strongest source; do not silently rewrite a material disagreement.

### Add A Format Or Tool

Explain how the item fits the charter, copy the relevant Markdown template, cite primary sources for non-obvious claims, and avoid comparison language that is not supported by evidence. The [new record form](https://github.com/devspecs-com/agentic-development-index/issues/new?template=new-record.yml) is available when a contributor is not ready to open a pull request.

### Add A Tool To A Format

First make sure the tool has one maintained profile under `tools/`. Then add a short relationship row to the format page using a concrete verb: creates, validates, renders, indexes, links, publishes, or manages lifecycle. Link to the local profile rather than the vendor site and keep capability evidence in that profile.

Use the [tool-format relationship form](https://github.com/devspecs-com/agentic-development-index/issues/new?template=format-tool-relationship.yml) when proposing the relationship without editing the records directly. Maintainers and vendors may submit their own tools, but must provide primary evidence and disclose the relationship. A format page is a curated view, not a second tool directory or promotional placement.

### Improve Learning Content

Add original explanation, examples, operational guidance, or analysis. Pages that only paraphrase another source or target a keyword variation will not be accepted.

### Add A Dataset Or Benchmark

These contribution paths remain closed during the initial Formats, Learn, and Tools release. See [ROADMAP.md](ROADMAP.md) for activation gates.

## Review Standard

Reviewers check:

- charter fit;
- record-contract validity;
- source quality;
- evidence labels;
- neutral and precise language;
- licensing and attribution;
- duplication or search-intent overlap;
- conflicts of interest.

Passing automated validation does not guarantee inclusion.

The DevSpecs maintainers also maintain this index. DevSpecs records follow the same alphabetical ordering, evidence labels, verification dates, and correction process as every other record. Comparative claims involving DevSpecs require review from someone without that affiliation.

## Source Of Truth

Edit the Markdown profile or guide directly. Lightweight metadata supports navigation and checks, but contributors do not maintain the same factual copy in a second file. See [docs/authoring-records.md](docs/authoring-records.md) for templates and validation.

The root README links every published record. Category indexes add summaries and comparison dimensions. Tool facts stay in maintained tool profiles even when several format pages link to them.

Maintainers preparing a release should also use the [GitHub repository checklist](docs/maintainer-checklist.md).

## Conduct

Assume good faith, challenge claims with evidence, and keep corrections about the record rather than the contributor. Promotional pressure and required backlinks are not accepted.
