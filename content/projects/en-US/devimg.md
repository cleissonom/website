---
title: DevImg
slug: devimg
summary: Rust image pipeline and GitHub Action that optimizes project images, generates responsive variants, emits manifests and reports, and enforces image budgets in CI.
dateStart: "2026-05-01T12:00:00.000Z"
role: Software Engineer
status: active
type: developer-tool
stage: maintained
tags:
  - Rust
  - CLI
  - GitHub Actions
  - Image Optimization
  - Developer Tools
stack:
  - Rust
  - Clap
  - Serde
  - GitHub Actions
  - Image Processing
  - Markdown
links:
  repo: https://github.cleisson.com/devimg
coverImage: /projects/devimg.png
highlights:
  - Built a Rust workspace with a reusable core library and a `devimg` CLI for repeatable image optimization workflows.
  - Added content-hashed filenames, crop controls, preset overrides, generated manifest helpers, and CI drift checks for generated app mappings.
  - Packaged the tool as a versioned GitHub Release and dogfooded it in this website's production image pipeline.
---

DevImg is a developer image pipeline built to make static website image workflows reproducible instead of manual.

The tool reads a `devimg.toml` config, scans source folders, generates configured variants, writes a JSON manifest, produces a Markdown report, and checks that generated files are present, current, and inside configured budgets.

## What I built

- Rust core library that owns config parsing, scanning, planning, transforms, manifests, reports, budgets, and check behavior.
- Rust CLI with `init`, `optimize`, `check`, `report`, `inspect`, and manifest export commands.
- GitHub Action wrapper that can run the CLI in pull requests and fail when generated images are missing, stale, oversized, or out of sync.
- Content-hashed output filenames for safe immutable caching.
- Crop anchors, normalized focal points, and source-specific preset overrides for real-world screenshots and diagrams.
- Generated TypeScript manifest export so web apps can consume hashed image paths without hand-maintained lookup tables.

## Why I built it

The project started from smaller `imgconvert` and `imgcrop` ideas, then grew into a productized workflow for portfolio and static-site images.

I wanted the pipeline to behave like normal developer infrastructure: deterministic config, repeatable output, explicit reports, CI enforcement, release assets, and real dogfooding in production.

## Current scope

DevImg currently focuses on local static assets and stable PNG, JPEG, and WebP workflows. It does not provide a hosted service, remote storage, automatic pull-request commits, or a web UI.
