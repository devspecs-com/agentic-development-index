# A03 Plan: Seed Formats And Learning Content

## Goal
Publish enough original, sourced content to make the index useful before the tool landscape exists and to establish an editorial standard that cannot be satisfied by thin generated pages.

## Initial Format Set
Cover at least 10 durable artifacts across the taxonomy, including:

- ADR, RFC, PRD, technical specification, and design document;
- `AGENTS.md` or equivalent repository instruction format;
- implementation plan and bounded task slice;
- checkpoint or decision gate receipt;
- session handoff or continuity record;
- evaluation card or evidence receipt.

## Initial Learn Set
Publish at least five guides:

- coding-agent context versus memory;
- intent artifacts and the work layer between issue and diff;
- before, during, and after an asynchronous agent run;
- brownfield context recovery without treating old plans as instructions;
- evidence, decision gates, and iteration slices.

## Page Contract
Every format page explains what it is, what problem it solves, when to use it, what it contains, how agents consume it, how it changes over time, common failure modes, canonical sources, examples/templates, and related tools.

## Acceptance Checks
- [ ] At least 10 format records and 5 learning pages validate and render.
- [ ] Every factual definition cites a primary or canonical source where one exists.
- [ ] Every page contains original analysis, examples, or operational guidance.
- [ ] Similar formats explain their boundaries rather than competing for the same keyword with duplicate prose.
- [ ] DevSpecs terminology is used only when the concept is genuinely DevSpecs-specific.
- [ ] An editorial review removes generic AI phrasing, unsupported claims, and repetitive filler.

## Out Of Scope
- Tool rankings or comparison verdicts.
- Hundreds of templated format variations.
- Dataset or benchmark publication.

## Decision Gates
- Promote to A04: the content is useful without DevSpecs and establishes a repeatable editorial bar.
- Improve as A03-1: coverage is credible but one format family or guide needs focused expansion.
- Rework: pages are primarily summaries of external sources rather than practical references.
- Rollback: programmatic content production creates thin or overlapping SEO pages.
- Block: canonical licensing or quotation constraints prevent responsible publication.

## Completion Contract
Record sources reviewed, pages created, editorial issues found, overlap decisions, validation results, and which concepts/tool capabilities A04 should reuse.
