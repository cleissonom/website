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
  repo: https://github.com/cleissonom/devimg
  package: https://crates.io/crates/devimg
coverImage: /projects/devimg.png
highlights:
  - Published the Rust CLI on crates.io as `devimg`, with a reusable `devimg-core` library underneath.
  - Added content-hashed filenames, crop controls, preset overrides, generated manifest helpers, framework diagnostics, and static visual review artifacts.
  - Shipped a public GitHub Action, checksum-verified release binaries, and production dogfooding in this website's image pipeline.
---

DevImg is a developer image pipeline built to make frontend image workflows reproducible, reviewable, and CI-enforced instead of manual. It is designed for teams that keep static assets in the repository and want generated image variants to behave like normal build artifacts.

The tool reads a `devimg.toml` config, scans source folders, generates configured variants, writes a JSON manifest, exports app-friendly helpers, produces a Markdown report, and checks that generated files are present, current, and inside configured budgets. It sits beside framework image components and CDNs: DevImg owns deterministic source-to-variant generation, while the frontend decides how to render the selected assets.

## Install and CI

Install the CLI with Rust 1.85 or newer:

```bash
cargo install devimg
```

Use the public GitHub Action in pull requests:

```yaml
- uses: cleissonom/devimg/action@v0.1.15
  with:
    mode: check
```

The Action downloads the matching GitHub Release binary, verifies its SHA-256 checksum, and runs the same CLI behavior developers use locally.

## Workflow

1. Define sources, presets, widths, formats, quality, crop behavior, and budgets in `devimg.toml`.
2. Run `devimg optimize` to generate responsive variants and a manifest.
3. Run `devimg manifest export` when the app needs a checked-in TypeScript or JSON helper for content-hash filenames.
4. Run `devimg review` to create a static HTML artifact for visual inspection.
5. Run `devimg check` in CI so missing, stale, oversized, or config-drifted outputs block the branch.

## What I built

- Rust core library that owns config parsing, scanning, planning, transforms, manifests, reports, budgets, and check behavior.
- Rust CLI with `init`, `optimize`, `check`, `doctor`, `report`, `inspect`, review artifact, and manifest export commands.
- crates.io packages for both the user-facing CLI and reusable core library.
- Public GitHub Action wrapper that can run the CLI in pull requests and fail when generated images are missing, stale, oversized, or out of sync.
- Content-hashed output filenames for safe immutable caching.
- Crop anchors, normalized focal points, and source-specific preset overrides for real-world screenshots and diagrams.
- Generated TypeScript manifest export so web apps can consume hashed image paths without hand-maintained lookup tables.
- Framework-aware `doctor` diagnostics that explain helper export checks and the intended `img`/`picture`, framework `Image`, or layered optimization consumption modes.
- Static HTML review artifact so generated variants can be inspected locally or uploaded from CI.

## Why it is useful

Frontend image work often drifts because generated files are easy to forget, hard to review, and usually tied to ad hoc scripts. DevImg makes that workflow explicit: source image, config, generated variants, manifest, helper export, Markdown report, and review artifact move together in the same pull request.

For static sites, portfolios, documentation sites, and product marketing pages, this keeps image quality and byte budgets visible without introducing a hosted service or remote storage dependency.

## Why I built it

The project started from smaller `imgconvert` and `imgcrop` ideas, then grew into a productized workflow for portfolio and static-site images.

I wanted the pipeline to behave like normal developer infrastructure: deterministic config, repeatable output, explicit reports, CI enforcement, release assets, and real dogfooding in production. Generated images should be normal PR material: source/config changes, generated variants, manifest, helper export, report, and review artifact all move together.

## Dogfood proof

This website uses DevImg for project card and banner images. The source images live under `public/projects`, generated variants live under `public/images/generated`, and application code reads a checked-in TypeScript helper generated from the manifest.

CI uses the public `cleissonom/devimg/action@v0.1.15`, downloads a checksum-verified release binary, runs strict `devimg check --fail-on-warning`, validates that the helper export is up to date, and uploads a review artifact. The config file is the default `devimg.toml`, so the workflow can stay short while Vercel deployments keep using checked-in static assets with CDN-friendly content-hash filenames.

## Current scope

DevImg currently focuses on local static assets and stable PNG, JPEG, WebP, and opt-in AVIF output workflows. It does not provide a hosted service, remote storage, automatic pull-request commits, AI automation, or a web UI.
