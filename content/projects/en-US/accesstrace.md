---
title: AccessTrace
slug: accesstrace
summary: Local cybersecurity analytics lab that normalizes synthetic AWS, Google Workspace, and Slack-style audit events into ClickHouse and Postgres, then exposes dashboard-ready investigation views.
dateStart: "2026-05-02T12:00:00.000Z"
role: Software Engineer
status: active
type: systems-lab
stage: lab
tags:
  - Security Analytics
  - ClickHouse
  - TypeScript
  - Postgres
  - Audit Logs
stack:
  - Next.js 16
  - React 19
  - TypeScript
  - ClickHouse
  - Postgres
  - Docker Compose
  - Zod
  - Vitest
highlights:
  - Built a deterministic local ingestion flow with 1,200 synthetic normalized events across AWS, Google Workspace, and Slack-style sources.
  - Modeled raw payload storage, normalized access events, import tracking, and dashboard-shaped query scripts with non-empty results.
  - Added typed server-side query functions, Zod filter validation, a first dashboard, ClickHouse summary-table experiments, and a local security review.
coverImage: /projects/accesstrace-overview.png
---

AccessTrace is a local product prototype for exploring how security audit logs can become usable investigation data.

The project starts from synthetic source-shaped events, normalizes them into a shared access-event model, scores risk with explainable rules, stores analytics data in ClickHouse, stores import metadata in Postgres, and serves dashboard views for overview metrics, filtered logs, risky actors, sensitive resources, hourly volume, and event details.

## What I built

- Docker Compose setup for local ClickHouse and Postgres.
- Idempotent database initialization for raw events, normalized events, import batches, import errors, and ClickHouse summary tables.
- Deterministic synthetic event generator covering AWS CloudTrail-style, Google Workspace-style, and Slack audit-style records.
- Normalization and risk scoring with focused Vitest coverage.
- Server-side query layer with typed functions, Zod validation, time-range filters, pagination, and ClickHouse query parameters.
- First dashboard with overview, logs explorer, and event detail pages.
- Documentation for architecture, synthetic data, ClickHouse learning notes, case study, screenshots, dependency audit, security review, and launch positioning.

## Why I built it

I wanted a portfolio project that looks like a real system, not just a UI mockup. AccessTrace exercises data modeling, ingestion, analytics queries, repeatable local workflows, backend validation, dashboard design, and security review around a concrete cybersecurity use case.

## Current scope

AccessTrace is intentionally local and synthetic. It does not connect to real Slack, Google Workspace, or AWS APIs yet. It has no auth, no production tenant isolation, and no production security claims.

That limitation is part of the design: the first version proves the data foundation and investigation workflow before adding real connectors or production controls.
