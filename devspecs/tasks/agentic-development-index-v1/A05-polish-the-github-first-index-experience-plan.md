# A05 Plan: Polish The GitHub-First Index Experience

## Goal

Make the repository feel like a maintained, credible reference from the first README viewport through category discovery, profile review, and contribution.

## Deliverables

- A concise root README that explains the category, trust model, launch scope, and direct paths into Formats, Learn, and Tools.
- Scannable category indexes with short descriptions and stable links to every launch record.
- Consistent breadcrumbs or return links across profile and guide Markdown.
- Repository topics, social preview guidance, status badges, license links, and contribution entry points that aid discovery without visual clutter.
- Issue and pull-request templates for additions, factual corrections, and disputed claims.
- An optional machine-readable index generated from compact Markdown metadata only if it stays deterministic and maintenance-light.

## GitHub UX Contract

- A first-time visitor can explain the index and reach a useful record from the root README without reading the methodology first.
- Formats, Learn, and Tools are visible; empty future categories are not presented as current inventory.
- Profile pages prioritize summary, evidence, limitations, verification date, and related records.
- GitHub search, links, headings, and tables remain useful without JavaScript or a companion site.

## Acceptance Checks

- [ ] Every launch record is reachable from the root README through one category index.
- [ ] Root and category tables remain legible in GitHub's desktop and mobile renderers.
- [ ] Heading hierarchy, anchors, relative links, and badges pass automated checks.
- [ ] A contributor can find the correct template and correction path in two clicks or fewer.
- [ ] No profile facts are generated into a second source of truth.
- [ ] The repository does not depend on custom UI, deployment, analytics, or a DevSpecs website route.

## Out Of Scope

- A standalone website, static-site generator, custom filters, sitemap, or SEO landing pages.
- Account features, submission databases, hosted workspaces, or background synchronization.
- Empty Dataset or Benchmark indexes.

## Decision Gates

- Promote to A06: the GitHub repository is understandable, navigable, and maintainable as the product.
- Improve as A05-1: one bounded navigation, copy, or contribution issue remains.
- Rework: visitors still need project knowledge to understand how the sections relate.
- Rollback: repository polish adds generated-content bloat or marketing noise.
- Block: GitHub-native navigation cannot expose the catalog coherently.

## Completion Contract

Record navigation checks, link coverage, README/category review, contribution-path testing, generated artifacts if any, and the exact misses A06 must resolve.
