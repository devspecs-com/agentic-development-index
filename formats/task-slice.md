---
id: task-slice
title: Task slice
summary: One bounded, independently reviewable unit of execution inside a larger implementation track or product change.
category: format
status: reviewed
last_verified: 2026-08-14
tags:
  - execution
  - scope
  - agents
---

# Task slice

## What It Is

A task slice is one bounded attempt within a larger change. It carries a goal, relevant context, allowed scope, acceptance checks, and a stop condition. Iteration slices such as `A01-1` attach new work to the attempt that produced the learning.

## When To Use It

Use slices when an agent should finish and report before receiving the rest of a track. They are especially useful when work has uncertain outcomes, expensive review, or a meaningful risk of scope expansion.

## Lifecycle

Create a slice from current intent and repository evidence, mark it active when work starts, and close the attempt with observed evidence. Promote to the next peer slice, improve through a child iteration, rework the approach, roll back, or block.

## Agent Use

The agent should implement only the addressed slice, run its checks, record misses, and stop at the gate. Later slices are context for ordering, not permission to implement the whole track.

## Pitfalls

- Slicing by arbitrary file count instead of reviewable behavior.
- Repeating generic implementation boilerplate with no local context.
- Treating every two-file fix as a multi-slice project.
- Opening a new peer slice when the work is actually an iteration on the prior attempt.

## Examples

The DevSpecs task flow shows explicit slices, one-target prompts, checkpoints, and `A01-1` follow-up iterations. OpenAI ExecPlans provide a broader living-plan model in which progress and discoveries stay current.

## Resources

| Resource | Link |
| --- | --- |
| Workflow guide | [DevSpecs task flow](https://docs.devspecs.com/greenfield/task-flow) |
| Related plan model | [OpenAI Cookbook: Codex ExecPlans](https://github.com/openai/openai-cookbook/blob/main/articles/codex_exec_plans.md) |

[Back to the index](../README.md#formats)
