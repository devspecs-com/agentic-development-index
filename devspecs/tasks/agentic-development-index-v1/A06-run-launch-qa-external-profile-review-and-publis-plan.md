# A06 Plan: Verify And Publish v1

## Goal
Prove the initial index is accurate, maintainable, accessible, and honest enough for public promotion, then publish the first version with a correction and feedback loop.

## Verification Run
- Validate all Markdown records, metadata, and category indexes from a clean checkout.
- Check root navigation, relative links, canonical sources, and external links.
- Review GitHub desktop and mobile rendering for unreadable tables, broken hierarchy, or buried contribution paths.
- Audit sources, verification dates, licenses, attribution, and DevSpecs disclosures.
- Review every public claim that implies measured or reproduced behavior.

## External Review
- Invite at least 10 represented tool maintainers to verify their profiles.
- Track requests, responses, corrections, and unresolved disputes publicly.
- Require at least three independent factual reviews before calling the profiles externally reviewed; otherwise publish the exact review status without blocking useful v1 content.

## Launch Package
- Release notes describing scope and explicit omissions.
- A tagged GitHub release and repository topics that match the actual category.
- A machine-readable snapshot only if A05 retained one without adding maintenance burden.
- A concise launch report based on the actual catalog, not a manufactured leaderboard.
- Submission targets and outreach copy for maintainers, Changelog, Console.dev, Hacker News, and relevant communities.
- A clear public feedback route for additions, corrections, disputes, and missing categories.

## Acceptance Checks
- [ ] Clean-checkout validation passes without relying on uncommitted or generated local state.
- [ ] No broken internal links, unusable GitHub rendering, or unsupported benchmark claims remain.
- [ ] Every launch profile has evidence, attribution, disclosure where relevant, and a verification date.
- [ ] External review status is represented accurately.
- [ ] Dataset and Benchmark navigation remains absent until their launch gates are met.
- [ ] The repository, contribution path, and correction mechanism are public and usable.
- [ ] A bad record can be corrected, disputed, archived, or reverted without a deployment rollback.

## Decision Gates
- Promote/complete: v1 passes the quality bar and can be promoted without overstating independence or evidence.
- Improve as A06-1: a bounded launch issue remains, such as profile correction, navigation, or metadata repair.
- Rework: external review exposes a systemic taxonomy or evidence problem.
- Rollback: publication creates misleading comparisons, legal/provenance risk, or an unusable repository entry point.
- Block: unresolved licensing, security, or ownership concerns make publication irresponsible.

## Completion Contract
Record the release identifier, repository URL, validation commands, external review receipts, corrected profiles, remaining limitations, and the explicit recommendation for B track activation or continued A-track improvement.
