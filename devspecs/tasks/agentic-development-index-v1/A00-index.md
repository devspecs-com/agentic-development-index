# A Track: Agentic Development Index v1

## Objective
Build a credible public index of the formats, knowledge, and tools that preserve intent, evidence, decisions, and work state in AI-assisted software development.

The first implementation run ends with a launchable `Formats + Learn + Tools` release. Dataset and benchmark work is deliberately deferred until the index has stable provenance rules and enough real entries to justify those sections.

## Public Promise
The index is useful independently of DevSpecs. It provides:

- structured, sourced profiles rather than a flat link list;
- practical guidance for choosing and evolving durable development artifacts;
- evidence-backed tool comparisons without paid ranking;
- open data that researchers and maintainers can inspect, correct, and reuse.

## Governance Position
- Maintained by DevSpecs with the affiliation stated plainly.
- Inclusion is free and based on published criteria.
- DevSpecs is evaluated with the same fields and evidence bar as every other tool.
- Factual claims require primary sources and a `last_verified` date.
- Maintainer corrections are accepted through focused pull requests.
- No overall leaderboard until measurements are genuinely comparable.

## First-Run Scope

| Slice | Target | Timing | Promotion signal |
| --- | --- | --- | --- |
| A01 | Charter, taxonomy, methodology, governance, and roadmap | Week 1 | Sample records fit the taxonomy and conflicts are resolved |
| A02 | Structured schemas, validation, and fixture records | Week 2 | Valid fixtures pass and malformed or unsupported claims fail |
| A03 | Initial format catalog and learning guides | Weeks 2-3 | At least 10 sourced formats and 5 useful guides pass editorial review |
| A04 | Evidence-backed tool landscape and correction workflow | Weeks 3-4 | At least 20 sourced profiles use one consistent comparison model |
| A05 | Accessible generated site, filters, and exports | Weeks 4-5 | Desktop/mobile UX and deterministic JSON/CSV outputs pass review |
| A06 | Launch QA, external profile review, and v1 publication | Week 6 | Verification, link, accessibility, provenance, and disclosure gates pass |

## Deferred Tracks
- B track, months 2-3: dataset registry with license, provenance, access, and permitted-use fields.
- C track, months 3-6: benchmark registry followed by one reproducible brownfield context evaluation.
- D track, month 6+: opt-in specs.place corpora only after consent, removal, licensing, and versioning are operational.
- E track, months 6-12: governance/spinout review if independent contributors and citations justify a neutral organization.

Do not expose empty `Datasets` or `Benchmarks` navigation before each section has at least three credible records.

## Shared Quality Bar
- Every profile has a canonical URL, primary evidence, attribution, and verification date.
- Editorial pages add original analysis, examples, or instructions rather than restating sources.
- Structured records validate in CI and generate deterministic exports.
- Every public page is reachable through crawlable internal links and the sitemap.
- Vendor or maintainer affiliation is disclosed wherever it could affect interpretation.
- Failed validation, ambiguous classification, and unsupported claims remain visible in slice results.

## Decision Model
- Promote: the slice meets its acceptance checks and the next slice can start without hidden prerequisites.
- Improve: the model is sound but evidence or UX needs a bounded follow-up such as `A02-1`.
- Rework: the chosen taxonomy, schema, content shape, or implementation approach does not support the public promise.
- Rollback: the slice creates misleading claims, vendor bias, generated-content bloat, or an unusable maintenance burden.
- Block: a missing license, source, ownership decision, or external dependency prevents responsible publication.

## Execution Rule
Implement one slice at a time. Record what changed, which gate was tested, what evidence supports the decision, what remains, and whether the next action is promote, improve, rework, rollback, or block.

## Resources
- `task.json` (local lifecycle state; not committed because it contains machine-local paths)
- `A01-define-charter-taxonomy-methodology-governance-a-plan.md`
- `A02-define-structured-schemas-validation-and-fixture-plan.md`
- `A03-publish-the-initial-format-catalog-and-learning-plan.md`
- `A04-publish-an-evidence-backed-tool-landscape-and-co-plan.md`
- `A05-generate-the-accessible-index-site-filters-and-j-plan.md`
- `A06-run-launch-qa-external-profile-review-and-publis-plan.md`
