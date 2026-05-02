---
title: CLI Tools Collection
slug: cli-tools
summary: Multi-language command-line toolbox built in Rust and C for image processing, Python paste workflows, raw HTTP requests, and earnings/reporting automation.
dateStart: "2024-06-01T12:00:00.000Z"
role: Software Engineer
status: active
type: developer-tool
stage: maintained
tags:
  - CLI
  - Rust
  - C
  - Developer Tools
  - Automation
  - libcurl
stack:
  - Rust
  - C
  - libcurl
  - Make
  - Shell
links:
  repo: https://github.com/cleissonom/cli_tools
coverImage: /projects/cli_tools.png
highlights:
  - Built five standalone CLI tools across Rust and C for image automation, code compaction, raw HTTP requests, and currency-aware earnings reports.
  - Unified the collection with Make-based build/test orchestration and a public macOS installer that works without cloning the repository.
  - Added focused tests around CLI parsing, safe output paths, HTTP request parsing, CSV storage, report filtering, and export behavior.
---

I built this collection to turn small recurring workflows into reusable command-line tools while practicing Rust, C, testing, and local installation ergonomics.

The repository is intentionally practical: each tool solves a focused problem, but the collection shares build scripts, test orchestration, and install behavior so it can be used as a real developer toolbox.

## What is included

- `imgconvert`: a Rust CLI for converting images between formats while validating output paths.
- `imgcrop`: a Rust CLI for exact-size image cropping with proportion and framing controls.
- `pypaste`: a Rust CLI that compacts Python scripts for terminal pasting and clipboard workflows.
- `raw_http`: a C/libcurl tool that sends raw HTTP requests from `.txt` files and prints or saves full responses.
- `workpay`: a C/libcurl tool for earnings calculation, currency conversion, CSV persistence, and report exports.

## What I focused on

- Multi-language CLI structure with Rust and C projects living under one repository.
- Repeatable local workflows through Makefiles and root scripts.
- Safe file-output behavior to avoid accidental overwrite and path mistakes.
- Public macOS installation through a tarball-based script instead of requiring a manual clone.
- Small, targeted test suites around parsing, formatting, request execution, and reporting behavior.
