# GitHub Repository Checklist

Use this checklist before a public catalog release. It keeps the GitHub repository itself complete; no companion site is required.

## Repository Settings

- Description: `Evidence-backed formats, guides, and tools for preserving intent, context, evidence, and handoffs in AI-assisted development.`
- Topics: `ai-assisted-development`, `coding-agents`, `developer-tools`, `software-architecture`, `specifications`, `context-management`, `ai-engineering`.
- Features: enable Issues; enable Discussions only when there is capacity to moderate open-ended requests.
- Branch protection: require the `Validate index` workflow on `main`.

## Social Preview

Use a 1280 x 640 image with the repository name, the phrase `Formats, guides, and tools for durable agent context`, and the three live categories: Formats, Learn, Tools. Keep profile tables and unlaunched categories off the image so it remains readable in small link previews.

## Release Check

1. Run `npm ci`, `npm test`, and `npm run validate` from a clean checkout.
2. Confirm the root README links only to live inventory.
3. Review changed records for evidence labels, limitations, disclosure, and `last_verified` accuracy.
4. Open the root and each category README in GitHub's desktop and mobile renderers.
5. Test the factual correction, disputed claim, and new record forms.

[Back to contributing](../CONTRIBUTING.md)
