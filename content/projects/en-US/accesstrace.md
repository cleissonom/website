---
title: AccessTrace
slug: accesstrace
summary: Security analytics product prototype that turns synthetic audit events into an investigation workspace, with SaaS, self-hosted, and local MCP boundaries.
dateStart: "2026-05-02T12:00:00.000Z"
role: Software Engineer
status: active
type: systems-lab
stage: in-progress
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
  - Built a deterministic local ingestion flow with synthetic AWS, Google Workspace, Slack, and GitHub-style audit events.
  - Designed a dashboard investigation workspace with alerts, reports, saved views, audit trail, notification previews, plan guardrails, and operations status.
  - Added SaaS/self-hosted product boundaries and a local MCP interface for AI-agent assisted investigation without exposing credentials or real provider APIs.
coverImage: /projects/accesstrace-overview.png
links:
  repo: https://github.com/cleissonom/accesstrace
---

AccessTrace is a security analytics product prototype for exploring how audit logs can become usable investigation data.

The project starts from synthetic source-shaped events, normalizes them into a shared access-event model, scores risk with explainable rules, stores analytics data in ClickHouse, stores operational metadata in Postgres, and serves dashboard views for overview metrics, logs, alerts, reports, imports, jobs, notifications, billing boundaries, and admin operations.

## What I built

- Docker Compose setup for local ClickHouse and Postgres.
- Idempotent database initialization for raw events, normalized events, import batches, import errors, and ClickHouse summary tables.
- Deterministic synthetic event generation across AWS CloudTrail-style, Google Workspace-style, Slack audit-style, and GitHub Enterprise audit-style records.
- Server-side query layer with typed functions, Zod validation, time-range filters, pagination, and ClickHouse query parameters.
- Investigation workspace with alert workflow, readable reports, saved views, evidence exports, local notification previews, and admin audit trail.
- SaaS direction with workspaces, users, roles, invitations, plan visibility, metering, entitlement guardrails, and operations status.
- Self-hosted direction with runtime checks, Docker app profile, backup/restore notes, upgrade guidance, and support boundaries.
- Local MCP server boundary so personal AI agents can inspect logs, alerts, imports, reports, and controlled workflow actions through tenant-scoped, redacted, audited tools.

## Why I built it

I wanted a portfolio project that looks like a real product, not just a UI mockup. AccessTrace exercises data modeling, ingestion, analytics queries, repeatable local workflows, backend validation, dashboard design, security review, product packaging, and operational boundaries around a concrete cybersecurity use case.

## Where it is going

The product direction is a Metabase-style deployment model: hosted SaaS for the easiest onboarding path, self-hosted for sensitive audit-log environments, and a future managed/serverless option. Real provider API connectors are intentionally deferred until there is a safe sandbox, credential strategy, data-handling approval, and production access-control decision.

## Current scope

AccessTrace is intentionally local and synthetic today. It does not connect to real Slack, Google Workspace, GitHub, or AWS APIs yet. It has local auth and RBAC-shaped boundaries for demos, but not production authentication, billing, live notification delivery, production tenant isolation, or production security claims.

That limitation is part of the design: the current version proves the data foundation, investigation workflow, SaaS/self-hosted shape, and AI-agent access boundary before adding real connectors or production controls.
