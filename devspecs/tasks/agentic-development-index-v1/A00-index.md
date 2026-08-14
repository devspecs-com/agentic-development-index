# A Track: Agentic Development Index v1

## Objective
Build a credible public index of the formats, knowledge, and tools that preserve intent, evidence, decisions, and work state in AI-assisted software development.

The first implementation run ends with a launchable `Formats + Learn + Tools` release. Dataset and benchmark work is deliberately deferred until the index has stable provenance rules and enough real entries to justify those sections.

## Public Promise
The index is useful independently of DevSpecs. It provides:

- a curated GitHub index with readable, sourced profiles rather than an unexplained link dump;
- practical guidance for choosing and evolving durable development artifacts;
- evidence-backed tool comparisons without paid ranking;
- repository-native content that researchers and maintainers can inspect, correct, link to, and reuse.

The GitHub repository is the canonical product in v1. A companion website, generated application, or `devspecs.com/index` route is not required for launch.

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
| A01-1 | Correct the v1 contract to GitHub-first | Immediate correction | Repository and Markdown are canonical; website assumptions are removed |
| A02 | Markdown record contracts and lightweight validation | Week 2 | A contributor can add a valid record without learning a schema platform |
| A03 | Initial format catalog and learning guides | Weeks 2-3 | At least 10 sourced formats and 5 useful guides pass editorial review |
| A04 | Evidence-backed tool landscape and correction workflow | Weeks 3-4 | At least 20 sourced profiles use one consistent comparison model |
| A05 | GitHub navigation, readability, and maintainer experience | Weeks 4-5 | The repository is useful from its README and category indexes without custom UI |
| A06 | Repository QA, external profile review, and v1 publication | Week 6 | Clean-checkout, link, provenance, disclosure, and contribution gates pass |

## Deferred Tracks
- B track, months 2-3: dataset registry with license, provenance, access, and permitted-use fields.
- C track, months 3-6: benchmark registry followed by one reproducible brownfield context evaluation.
- D track, month 6+: opt-in specs.place corpora only after consent, removal, licensing, and versioning are operational.
- E track, months 6-12: governance/spinout review if independent contributors and citations justify a neutral organization.

Do not expose empty `Datasets` or `Benchmarks` navigation before each section has at least three credible records.

## Shared Quality Bar
- Every profile has a canonical URL, primary evidence, attribution, and verification date.
- Editorial pages add original analysis, examples, or instructions rather than restating sources.
- Markdown pages are complete and useful in GitHub's native renderer.
- Lightweight metadata and CI checks support the prose instead of becoming a second product.
- Every public record is reachable from the root README or a category index.
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
- `A01-1-correct-v1-to-a-github-first-index-plan.md`
- `A02-define-markdown-record-contracts-and-validation-plan.md`
- `A03-publish-the-initial-format-catalog-and-learning-plan.md`
- `A04-publish-an-evidence-backed-tool-landscape-and-co-plan.md`
- `A05-polish-the-github-first-index-experience-plan.md`
- `A06-run-launch-qa-external-profile-review-and-publis-plan.md`
