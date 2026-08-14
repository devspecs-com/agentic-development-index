# A01 Plan: Define the Index Contract

## Goal
Create the public charter, taxonomy, methodology, governance rules, repository contract, and staged roadmap that every later record and page must follow.

## Deliverables
- `README.md` with the category, audience, trust posture, and contribution entry points.
- `CHARTER.md` defining scope and explicit non-goals.
- `METHODOLOGY.md` defining evidence, verification, freshness, correction, and comparison rules.
- `CONTRIBUTING.md` with focused workflows for new records and factual corrections.
- `ROADMAP.md` covering Formats, Learn, Tools, Datasets, Benchmarks, and future specs.place integration.
- `docs/taxonomy.md` defining category boundaries and artifact families.
- A documented repository layout and decision on how generated pages will publish under `devspecs.com/index/`.

## Taxonomy To Test
- Formats: intent, instruction, execution, evidence, and continuity artifacts.
- Learn: concepts, guides, comparisons, and reports.
- Tools: context, memory, specification, lifecycle, navigation, orchestration, and provenance tools.
- Datasets: deferred registry for corpora with explicit provenance and permitted use.
- Benchmarks: deferred registry for reproducible evaluations and reported external results.

## Acceptance Checks
- [ ] The index answers one coherent question: what durable substrate helps humans and coding agents understand intent, preserve work state, and continue safely?
- [ ] ADR, RFC, PRD, `AGENTS.md`, task slice, checkpoint, handoff, DevSpecs, OpenSpec, and a session-memory tool can be classified without changing the top-level model.
- [ ] Inclusion, correction, stale-record, conflict-of-interest, paid-placement, and removal policies are explicit.
- [ ] The public labels are `Formats`, `Learn`, `Tools`, `Datasets`, and `Benchmarks`; `Informational` is not exposed as navigation copy.
- [ ] Empty future sections are roadmap items rather than launch navigation.
- [ ] Code, content, and structured data licensing are chosen deliberately.
- [ ] The publishing path and ownership boundary with the DevSpecs website are recorded.

## Out Of Scope
- Implementing schemas, profile records, or the website.
- Selecting benchmark winners or publishing comparative scores.
- Presenting the project as independent from DevSpecs before independent governance exists.

## Decision Gates
- Promote to A02: the taxonomy survives the sample-set review and governance rules make vendor bias inspectable.
- Improve as A01-1: wording or edge cases remain, but the category model is stable.
- Rework: formats, tools, and learning material do not form one coherent public category.
- Rollback: the repository reads as a DevSpecs backlink vehicle rather than an independent reference.
- Block: licensing or publishing ownership cannot be settled.

## Completion Contract
Record reviewed examples, disputed classifications, final decisions, changed files, checks run, remaining risks, and the recommended A02 starting assumptions in the A01 result or checkpoint.
