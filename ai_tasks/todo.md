# Implementation TODO

## Scope
Build an MVP personal website in Next.js App Router from `my-website-plan.md` and `cleisson-content.md`.

## Plan
- [x] Scaffold project baseline (`package.json`, Next.js config, TS, app directory)
- [x] Implement locale-prefixed routing, middleware redirects, and locale cookie persistence
- [x] Implement global layout, design tokens (black/white/gray/red), and light/dark theme toggle
- [x] Implement localized core routes (`/{locale}`, projects, blog, resume, 404) and shared header/footer
- [x] Add content/data model for profile, experience timeline, projects, and blog posts (en-US + pt-BR)
- [x] Implement SEO baseline (metadata, `hreflang`, canonical handling, JSON-LD, sitemap, robots, feeds)
- [x] Add static `public/resume.pdf` placeholder and verify route wiring
- [x] Run available checks, mark progress, and document review notes

## Progress Log
- [x] Plan documented and validated against source docs
- [x] Implementation complete
- [x] Verification complete

## Review
- Implementation status: Completed MVP scaffold aligned with `my-website-plan.md` and `cleisson-content.md`.
- Verified manually:
  - Locale middleware redirect rules (`/`, unprefixed paths, unsupported locale handling, cookie persistence)
  - Localized route tree (`/[locale]`, projects/blog listing + detail, resume, localized 404)
  - SEO artifacts (metadata helper, JSON-LD, `sitemap.ts`, `robots.ts`, RSS/Atom/JSON feeds)
  - Content pipeline (Markdown + frontmatter parsing for projects and blog in both locales)
- Environment limitations:
  - `npm install` could not complete in this environment (continuous spinner, no package resolution output), so lint/typecheck/build were not executable.
  - No runtime verification performed due dependency installation block.

## Favicon Refresh (2026-02-19)
- [x] Capture palette/branding cues for icon design
- [x] Design light-mode favicon (SVG)
- [x] Design dark-mode favicon (SVG)
- [x] Wire theme-aware favicons in Next.js metadata
- [x] Smoke-verify assets (dimensions, references, visual contrast)
- [x] Add PNG fallbacks (32x32, 180x180) for light/dark modes

## Package Upgrade Verification (2026-02-19)

### Goal
Ensure upgraded dependency stack runs scripts successfully, generates production build, and has working lint/format flow.

### Checks
- [x] `npm run lint` passes
- [x] `npm run lint:fix` passes (via `npm run format`)
- [x] `npm run format` passes
- [x] `npm run format:check` passes
- [x] `npm run typecheck` passes
- [x] `npm run build` passes and outputs generated routes
- [x] `npm run dev` boots successfully (smoke test, then stopped)
- [x] `npm run start` boots successfully after build (smoke test, then stopped)

### Notes
- Network to npm registry is unavailable in this environment (`ENOTFOUND registry.npmjs.org`), so no new packages were added.
- Linting was migrated from `next lint` to direct ESLint script usage compatible with current setup.
- Next.js 16 App Router typing updates were applied (`params` is Promise-based).
