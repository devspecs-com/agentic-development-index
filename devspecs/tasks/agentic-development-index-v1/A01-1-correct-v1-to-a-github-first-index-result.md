# Task agentic-development-index-v1 A01-1 Result

## Summary
- Target: `A01-1` - Correct v1 to a GitHub-first index
- Outcome: Promoted. The repository and its Markdown are now the canonical v1 product throughout the A-track corpus.

## Completion Contract
- Attempted slice: `A01-1` - Correct v1 to a GitHub-first index
- Gate tested: promote
- What changed: Removed the generated-site launch requirement, replaced schema-first A02 with Markdown contracts and lightweight validation, replaced UI-focused A05 with GitHub navigation/readability work, and made A06 a repository release gate.
- Evidence for decision: The root contract, public governance docs, A00 index, and every downstream plan now agree that GitHub is canonical and a future website is optional.
- What remains: Rework the uncommitted A02 implementation against the corrected Markdown-first boundary.
- Next iteration: `A02`

## Changed Files
- `README.md`
- `CHARTER.md`
- `CONTRIBUTING.md`
- `LICENSES.md`
- `ROADMAP.md`
- `A00-index.md`
- A01 through A06 planning artifacts

## Tests
- `git diff --check`
- Corpus scan for stale generated-site, deployment, sitemap, and custom-UI requirements
- DevSpecs task status and next-target resolution

## Decision
- Promote to the corrected `A02`.

## Follow-up
- Keep automation subordinate to readable Markdown contributions.
- Treat a companion website as a later consumer, not part of v1 or the canonical source.

## References
- `A00-index.md`
- `A01-1-correct-v1-to-a-github-first-index-plan.md`

## Checkpoint History

### Checkpoint
- Created At: 2026-08-14T09:11:10Z
- Stage: validated
- Decision: promote
- Source: `checkpoints/20260814-091110-validated.md`
- Structured Evidence: `checkpoints/20260814-091110-validated.json`
- What changed: Made GitHub Markdown canonical, removed the standalone-site requirement, and rewrote A02, A05, and A06 around lightweight repository-native delivery.
- Evidence for decision: 12 file(s) edited; 1 test command(s)
- What remains: next target A02; next decision promote
- Next iteration: A02 with decision promote
- Files edited:
  - `README.md`
  - `CHARTER.md`
  - `CONTRIBUTING.md`
  - `LICENSES.md`
  - `ROADMAP.md`
  - `devspecs/tasks/agentic-development-index-v1/A00-index.md`
  - `devspecs/tasks/agentic-development-index-v1/A01-1-correct-v1-to-a-github-first-index-plan.md`
  - `devspecs/tasks/agentic-development-index-v1/A02-define-markdown-record-contracts-and-validation-plan.md`
  - `devspecs/tasks/agentic-development-index-v1/A03-publish-the-initial-format-catalog-and-learning-plan.md`
  - `devspecs/tasks/agentic-development-index-v1/A04-publish-an-evidence-backed-tool-landscape-and-co-plan.md`
  - `devspecs/tasks/agentic-development-index-v1/A05-polish-the-github-first-index-experience-plan.md`
  - `devspecs/tasks/agentic-development-index-v1/A06-run-launch-qa-external-profile-review-and-publis-plan.md`
- Tests run:
  - `git diff --check -- README.md CHARTER.md CONTRIBUTING.md LICENSES.md ROADMAP.md devspecs/tasks/agentic-development-index-v1`
