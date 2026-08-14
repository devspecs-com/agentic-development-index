# A05 Plan: Generate The Public Index Experience

## Goal
Turn the reviewed structured records and editorial content into a fast, accessible, inspectable website and reusable exports without introducing a second source of truth.

## Deliverables
- Generated index, category, detail, guide, and methodology pages.
- Useful filters for evidenced dimensions only.
- Deterministic JSON and CSV downloads with stable URLs and version metadata.
- Crawlable internal links, canonical metadata, sitemap, robots policy, and appropriate structured data.
- Clear source/evidence links, last-reviewed dates, correction actions, and DevSpecs affiliation.
- Deployment integration for the route selected in A01.

## UX Contract
- The first viewport explains the index category and offers clear paths into Formats, Learn, and Tools.
- Filtering helps answer real questions and does not dominate the experience.
- Detail pages prioritize summary, evidence, limitations, and related records over decorative cards.
- The design remains legible on mobile and desktop and stays consistent with DevSpecs branding without impersonating an independent institution.

## Acceptance Checks
- [ ] The site is generated entirely from reviewed content and structured records.
- [ ] Two clean builds produce identical data exports and stable page routes.
- [ ] Keyboard navigation, focus states, contrast, reduced motion, and semantic headings pass review.
- [ ] Desktop and mobile screenshots show no overflow, overlap, clipped controls, or unreadable comparison tables.
- [ ] Every indexable page is reachable from a normal anchor link and included in the sitemap.
- [ ] Invalid records fail the build before publication.
- [ ] Performance budgets and dependency weight are recorded and checked.

## Visual Proof Gate
Capture desktop and mobile screenshots for the index, one format page, one guide, one tool profile, and one filtered landscape state. Record viewport sizes, acceptance notes, and known visual misses in the result.

## Out Of Scope
- Account features, submissions database, hosted workspaces, or background synchronization.
- Empty Dataset or Benchmark sections.
- Complex visualization that obscures the underlying evidence.

## Decision Gates
- Promote to A06: the generated experience makes the dataset easier to understand and verify.
- Improve as A05-1: the architecture is sound but visual, accessibility, or performance proof misses a bounded gate.
- Rework: the UI behaves like a marketing landing page rather than a reference index.
- Rollback: site generation duplicates facts or weakens repository-first maintainability.
- Block: the selected deployment path cannot preserve canonical routes or build integrity.

## Completion Contract
Record builds, export hashes, accessibility checks, performance results, screenshot paths, visual acceptance notes, deployment evidence, and the exact misses A06 must resolve.
