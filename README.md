# cleisson.com

Personal website and portfolio for Cleisson de Oliveira Moura, built with Next.js App Router and TypeScript.

## Features

- Locale-prefixed routes for `en-US`, `pt-BR`, and `es-ES`
- Automatic locale detection via cookie and `Accept-Language` header
- Markdown-based blog and project content with schema validation
- Localized resume pages and per-locale PDF files
- SEO artifacts: sitemap, robots, Open Graph metadata, JSON-LD, RSS/Atom/JSON feeds
- Security headers configured globally in `next.config.mjs`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Zod
- gray-matter + react-markdown
- ESLint + Prettier + Husky + lint-staged

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install and run

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Start dev server
- `npm run build`: Build for production
- `npm run start`: Run production server
- `npm run lint`: Run ESLint with `--max-warnings=0`
- `npm run lint:fix`: Auto-fix lint issues
- `npm run typecheck`: Run TypeScript type check
- `npm run format`: Format code with Prettier
- `npm run format:check`: Check formatting
- `npm run precommit:checks`: Run staged secret scan + lint-staged checks

## Project Structure

```text
app/                 Next.js routes, layouts, SEO routes, feeds
components/          Shared UI components
content/             Markdown content (blog and projects) by locale
data/                Localized dictionaries and profile data
lib/                 Content loaders, i18n, metadata, feed builders
public/              Static assets (favicons, OG images, resumes)
proxy.ts             Locale routing and redirect logic
```

## Localization and Routing

Supported locales are defined in `lib/i18n.ts`:

- `en-US` (default)
- `pt-BR`
- `es-ES`

All main routes are locale-prefixed:

- `/{locale}`
- `/{locale}/projects`
- `/{locale}/projects/{slug}`
- `/{locale}/blog`
- `/{locale}/blog/{slug}`
- `/{locale}/resume`

`proxy.ts` applies this resolution order:

1. `locale` cookie
2. Browser `Accept-Language`
3. `en-US`

## Content Authoring

### Blog posts

Place files in `content/blog/{locale}/`.

Required frontmatter:

```yaml
---
title: Post title
slug: post-slug
summary: Short summary
date: 2026-01-15
updatedAt: 2026-01-20 # optional
tags:
  - Node.js
lang: en-US
---
```

### Projects

Place files in `content/projects/{locale}/`.

Required frontmatter:

```yaml
---
title: Project name
slug: project-slug
summary: Short summary
dateStart: 2025-01-01
dateEnd: 2025-12-31 # optional
role: Software Engineer
status: active # active | archived
tags:
  - Backend
stack:
  - Node.js
links:
  repo: https://example.com # optional
  live: https://example.com # optional
highlights:
  - Main result or impact
---
```

## SEO and Feed Endpoints

- `/sitemap.xml`
- `/robots.txt`
- `/rss.xml`
- `/atom.xml`
- `/feed.json`

## Verification

Before shipping changes:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

No project-specific environment variables are required for local or production builds at this time.
