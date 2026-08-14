# A06-1 Plan: Merge And Publish v0.1.0

## Goal

Turn the green release candidate into the public `v0.1.0` repository without widening the catalog or overstating external review.

## Preconditions

- Candidate commit `ee6ddbe509da9b9933a2cfca91328efb019b8a1f` or a descendant passes the clean-checkout commands in `A06`.
- PR #1 has no unresolved review or CI failure.
- `REVIEWS.md` still matches public outreach receipts.

## Actions

1. Merge PR #1 to `main` without squashing away useful evidence history unless the maintainer deliberately chooses that policy.
2. Apply the About description and seven topics in `docs/maintainer-checklist.md`.
3. Upload a 1280 x 640 social preview following the same checklist.
4. Open all five issue forms from `main`: factual correction, disputed claim, profile review, new record, and tool-format relationship.
5. Repeat `npm ci`, `npm test`, `npm run validate`, and `npm run qa:links` from a clean checkout of `main`.
6. Send the review request in `REVIEWS.md` to the first ten independently maintained projects. Record only public, receipt-backed requests and responses.
7. Update review counts without converting a maintainer confirmation into endorsement or independent reproduction.
8. Tag `v0.1.0` and publish `docs/v0.1.0-release-notes.md` as the GitHub release body.

## Acceptance Checks

- [ ] `main` contains the full 40-record catalog and passes all four clean-checkout commands.
- [ ] About copy, topics, social preview, and issue forms are live.
- [ ] Ten review requests have public receipts, or the release notes preserve the exact lower count.
- [ ] External confirmations and independent reviews remain separate counts.
- [ ] `v0.1.0` points at the verified `main` commit.
- [ ] Release notes include the explicit omissions and correction routes.

## Out Of Scope

- Adding or removing catalog records.
- Reworking taxonomy, profile schemas, or navigation.
- Activating Datasets or Benchmarks.
- Claiming broad community validation from unanswered outreach.
- Publishing a companion website.

## Decision Gates

- Promote/complete: repository settings, forms, clean-main validation, outreach receipts, tag, and release are public and accurately reported.
- Improve: one bounded operational item remains and the release has not been announced as complete.
- Rework: merge or release history no longer identifies the verified candidate.
- Rollback: published settings or notes materially overstate evidence or independence.
- Block: repository permissions, CI, or ownership prevent a responsible release.

## Completion Contract

Record the merged commit, settings applied, social-preview receipt, issue-form checks, clean-main commands, outreach URLs, exact review counts, tag, release URL, and one final promote/improve/rework/rollback/block decision.
