---
title: DevImg
slug: devimg
summary: Rust CLI and GitHub Action that generates responsive frontend image variants, exports app helpers, creates review artifacts, and enforces freshness and budgets in CI.
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
  - Added content-hashed filenames, crop controls, preset overrides, generated manifest helpers, framework diagnostics, and static visual review artifacts.
  - Dogfooded the workflow on this website with `devimg optimize`, `devimg manifest export`, `devimg check --fail-on-warning`, and a pinned GitHub Release binary.
---

DevImg is a developer image pipeline built to make frontend image workflows reproducible, reviewable, and CI-enforced instead of manual.

The tool reads a `devimg.toml` config, scans source folders, generates configured variants, writes a JSON manifest, exports app-friendly helpers, produces a Markdown report, and checks that generated files are present, current, and inside configured budgets.

## What I built

- Rust core library that owns config parsing, scanning, planning, transforms, manifests, reports, budgets, and check behavior.
- Rust CLI with `init`, `optimize`, `check`, `doctor`, `report`, `inspect`, review artifact, and manifest export commands.
- GitHub Action wrapper that can run the CLI in pull requests and fail when generated images are missing, stale, oversized, or out of sync.
- Content-hashed output filenames for safe immutable caching.
- Crop anchors, normalized focal points, and source-specific preset overrides for real-world screenshots and diagrams.
- Generated TypeScript manifest export so web apps can consume hashed image paths without hand-maintained lookup tables.
- Framework-aware `doctor` diagnostics that explain helper export checks and the intended `img`/`picture`, framework `Image`, or layered optimization consumption modes.
- Static HTML review artifact so generated variants can be inspected locally or uploaded from CI.

## Why I built it

The project started from smaller `imgconvert` and `imgcrop` ideas, then grew into a productized workflow for portfolio and static-site images.

I wanted the pipeline to behave like normal developer infrastructure: deterministic config, repeatable output, explicit reports, CI enforcement, release assets, and real dogfooding in production. Generated images should be normal PR material: source/config changes, generated variants, manifest, helper export, report, and review artifact all move together.

## Dogfood proof

This website uses DevImg for project card and banner images. The source images live under `public/projects`, generated variants live under `public/images/generated`, and application code reads a checked-in TypeScript helper generated from the manifest.

CI downloads a pinned private GitHub Release binary, verifies the checksum, runs strict `devimg check --fail-on-warning`, and validates that the helper export is up to date. That keeps Vercel deployments using checked-in static assets while still getting CDN-friendly content-hash filenames.

## Current scope

DevImg currently focuses on local static assets and stable PNG, JPEG, WebP, and opt-in AVIF output workflows. It does not provide a hosted service, remote storage, automatic pull-request commits, AI automation, or a web UI.
