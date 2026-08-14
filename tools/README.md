# Tools

Software that preserves or exposes coding-agent context, intent, work state, evidence, and handoffs. Inclusion is based on evidenced capabilities rather than popularity or paid placement.

## Index

Profiles are alphabetical. "LLM required" means the documented workflow depends on model inference; it does not mean every utility command calls a model.

| Tool | Primary job | Deployment / durable state | LLM required |
| --- | --- | --- | --- |
| [ADR Tools](adr-tools.md) | Nygard ADR lifecycle | Local shell CLI; repository Markdown | No |
| [ADRs](adrs.md) | Cross-platform ADR lifecycle and search | Local CLI/MCP; repository Markdown | No |
| [Aider](aider.md) | Repository-aware coding agent | Local CLI; Git and local history | Yes |
| [Augment Code](augment-code.md) | Semantic repository context | Hosted/local connectors; local or S3 indexes | No for context service |
| [Backlog.md](backlog-md.md) | Markdown task lifecycle | Local CLI; repository Markdown | No |
| [Backstage ADR Plugin](backstage-adr-plugin.md) | ADR retrieval and portal search | Backstage plugin; repository ADRs plus search index | No |
| [Beads](beads.md) | Dependency-aware agent task graph | Local CLI; Dolt database | No |
| [BMAD Method](bmad-method.md) | Multi-phase planning and execution | Agent assets; repository artifacts | Yes |
| [Claude Code](claude-code.md) | Coding agent with durable instructions/memory | Local client; repo and user files | Yes |
| [Cline](cline.md) | IDE coding agent with Memory Bank | VS Code extension; repository Markdown | Yes |
| [Codex](codex.md) | Coding agent with layered project instructions | CLI/app/cloud; repo and user files | Yes |
| [Continue](continue.md) | Configurable coding agents and rules | IDE/CLI; local or shared configuration | Yes |
| [Cursor](cursor.md) | AI editor with rules and memories | Desktop editor; repo rules and product memory | Yes |
| [DevSpecs](devspecs.md) | Local intent index and task lifecycle | Local CLI; SQLite plus repository Markdown | No |
| [Entire](entire.md) | Coding-agent session capture | CLI; Git-backed checkpoints | No for capture |
| [GitHub Copilot](github-copilot.md) | Coding agent with repository instructions | Hosted service; repository instructions | Yes |
| [GitHub Spec Kit](github-spec-kit.md) | Specification-driven workflow harness | Local CLI; repository Markdown/state | Yes for agent steps |
| [Kiro](kiro.md) | Agentic IDE with specs and steering | Desktop/web; repository artifacts and service state | Yes |
| [Log4brains](log4brains.md) | ADR authoring and static publication | Local CLI; repository Markdown and generated site | No |
| [OpenHands](openhands.md) | Software-agent platform with persistent conversations | Local/cloud; event and state stores | Yes |
| [OpenSpec](openspec.md) | Repository-native specification workflow | Local CLI; repository Markdown | Yes for agent commands |
| [Sourcegraph Cody](sourcegraph-cody.md) | Codebase context and coding assistance | Managed or self-hosted Sourcegraph | Yes |
| [SpecStory](specstory.md) | Cross-agent session history and resume | Local CLI; reads agent session stores | No for capture/export |
| [Tessl](tessl.md) | Agent context package manager and registry | CLI/registry; repository skills and plugins | No for package management |

## Capability Boundaries

- **Architecture decisions:** ADR Tools and ADRs create or manage decision records; Log4brains publishes them; the Backstage ADR Plugin retrieves and searches them in a developer portal.
- **Repository context:** Aider, Augment Code, Sourcegraph Cody, and coding agents retrieve or curate code context.
- **Durable instructions and memory:** Claude Code, Cline, Codex, Continue, Cursor, GitHub Copilot, Kiro, OpenHands, and Tessl carry or distribute reusable guidance or session state.
- **Intent and execution:** Backlog.md, Beads, BMAD Method, DevSpecs, GitHub Spec Kit, and OpenSpec preserve plans, tasks, or lifecycle state.
- **Session provenance:** Entire and SpecStory capture or translate coding-agent sessions.

These groups overlap. They are navigation aids, not scores or claims of equivalence.

## Contribute

Start with the [tool template](../templates/tool.md), the [record-authoring guide](../docs/authoring-records.md), a focused [correction request](https://github.com/devspecs-com/agentic-development-index/issues/new?template=factual-correction.yml), or a [new-record proposal](https://github.com/devspecs-com/agentic-development-index/issues/new?template=new-record.yml).

[Back to the index](../README.md)
