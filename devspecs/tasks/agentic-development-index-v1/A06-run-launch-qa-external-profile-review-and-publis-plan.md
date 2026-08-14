# A06 Plan: Verify And Publish v1

## Goal
Prove the initial index is accurate, maintainable, accessible, and honest enough for public promotion, then publish the first version with a correction and feedback loop.

## Verification Run
- Validate all schemas and records from a clean checkout.
- Rebuild the site and exports twice and compare deterministic outputs.
- Check canonical URLs, internal links, external links, sitemap, robots policy, and structured data.
- Run accessibility, mobile, desktop, and performance checks.
- Audit sources, verification dates, licenses, attribution, and DevSpecs disclosures.
- Review every public claim that implies measured or reproduced behavior.

## External Review
- Invite at least 10 represented tool maintainers to verify their profiles.
- Track requests, responses, corrections, and unresolved disputes publicly.
- Require at least three independent factual reviews before calling the profiles externally reviewed; otherwise publish the exact review status without blocking useful v1 content.

## Launch Package
- Release notes describing scope and explicit omissions.
- Public JSON/CSV snapshot with version and license.
- A concise launch report based on the actual catalog, not a manufactured leaderboard.
- Submission targets and outreach copy for maintainers, Changelog, Console.dev, Hacker News, and relevant communities.
- Search Console submission and analytics events for profile corrections, export downloads, and outbound source visits.

## Acceptance Checks
- [ ] Clean-checkout validation and builds pass.
- [ ] No broken internal links, critical accessibility failures, or unsupported benchmark claims remain.
- [ ] Every launch profile has evidence, attribution, disclosure where relevant, and a verification date.
- [ ] External review status is represented accurately.
- [ ] Dataset and Benchmark navigation remains absent until their launch gates are met.
- [ ] The repository, generated site, contribution path, and correction mechanism are public and usable.
- [ ] A rollback path exists for bad records or a failed deployment.

## Decision Gates
- Promote/complete: v1 passes the quality bar and can be promoted without overstating independence or evidence.
- Improve as A06-1: a bounded launch issue remains, such as accessibility, profile correction, or metadata repair.
- Rework: external review exposes a systemic taxonomy or evidence problem.
- Rollback: publication creates misleading comparisons, legal/provenance risk, or broken public routes.
- Block: unresolved licensing, security, or ownership concerns make publication irresponsible.

## Completion Contract
Record the release identifier, deployment URL, validation commands, external review receipts, corrected profiles, remaining limitations, analytics/search setup, and the explicit recommendation for B track activation or continued A-track improvement.
