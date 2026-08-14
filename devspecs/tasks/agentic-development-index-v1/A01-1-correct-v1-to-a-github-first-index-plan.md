# A01-1 Plan: Correct v1 To A GitHub-First Index

## Goal
Make the repository and its Markdown the canonical v1 product, matching established GitHub-first indexes rather than building a companion website prematurely.

## Correction

The first A-track plan incorrectly treated a generated site under `devspecs.com/index/` as a launch requirement. The intended product is a maintained GitHub index similar in operating model to an awesome list, with deeper format pages, learning material, sourced tool profiles, and future Dataset and Benchmark sections.

Automation may validate links, evidence metadata, and index consistency. It must not make contributors maintain a schema-heavy publishing system or turn a future website into the source of truth.

## Deliverables

- Update `A00-index.md` and A02-A06 so every downstream gate is GitHub-first.
- Preserve the A01 taxonomy, evidence, governance, and licensing decisions that remain valid.
- Replace A02's generator-first model with Markdown record contracts and lightweight validation.
- Replace A05's website/UI scope with root README, category-index, profile-navigation, and maintainer-experience work.
- Replace A06's deployment checks with clean-checkout repository, link, evidence, and contribution QA.
- Correct public charter, roadmap, contribution, and licensing language created by A01.

## Acceptance Checks

- [ ] The root README is the canonical v1 entry point.
- [ ] `Formats`, `Learn`, and `Tools` are navigable as GitHub-native Markdown.
- [ ] Datasets and Benchmarks remain roadmap sections until their evidence gates pass.
- [ ] A02 can be implemented without a website generator or a large schema framework.
- [ ] A05 contains no custom frontend, deployment, sitemap, analytics, or screenshot gate.
- [ ] A06 can complete by publishing a trustworthy GitHub repository and release.
- [ ] A future website is described only as an optional consumer of repository content.

## Out Of Scope

- Building or designing a companion website.
- Choosing a static-site framework.
- SEO, analytics, or deployment work.
- Removing evidence standards merely to imitate the brevity of an awesome list.

## Decision Gates

- Promote to A02: the full corpus consistently treats GitHub as the product and automation as support.
- Improve as A01-2: a bounded wording or navigation ambiguity remains.
- Rework: the repository still requires generated pages to be useful.
- Rollback: the correction removes the evidence depth that differentiates this from a flat links list.
- Block: the canonical repository or ownership model remains unresolved.

## Completion Contract

Record which site assumptions were removed, which A01 decisions survived, how A02 and A05 changed, any remaining generator coupling, and the recommendation for restarting A02.
