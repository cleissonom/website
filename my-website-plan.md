# My Website Plan

Inspiration: https://ahmedtokyo.com/

## Goals
- Primary: a high-signal personal site that converts **recruiters + collaborators + clients**.
- Secondary: a canonical home for **projects, writing, resume PDF, and contact**.
- Constraints: **fast**, **SEO-first**, **accessible**, **easy to maintain**.

---

## Stack & Core Decisions
- **Framework:** Next.js (App Router)
- **Rendering strategy:** mostly **SSG/ISR** (pre-render) with minimal client JS; SSR only when necessary
- **Styling:** Tailwind CSS (or equivalent utility CSS) with design tokens
- **Content:** MDX or Markdown + frontmatter (typed schema + validation)
- **i18n:** locale-prefixed routes: `/{locale}/...`
  - Default language: **en-US**
  - Additional: **pt-BR**
  - Preference persistence: **cookie-based** locale selection
- **Theme:** **light + dark mode**
- **Palette:** **black / white / gray / red**
- **No education pages (for now)**

---

## Information Architecture (Routes)
### MVP Routes
- `/` (root): **redirect to locale** (see i18n behavior)
- `/{locale}`: **About landing** (home)
- `/{locale}/projects`: Projects index (cards, filters)
- `/{locale}/projects/[slug]`: Project detail
- `/{locale}/blog`: Blog index (cards, tags)
- `/{locale}/blog/[slug]`: Post detail
- `/{locale}/resume`: (optional) HTML resume page that links to PDF
- `/resume.pdf`: Resume PDF (static asset)
- `/{locale}/404`: Not found

### v1 Additions (Optional)
- `/{locale}/about`: longer narrative (if `/{locale}` becomes dense)
- `/{locale}/journey`: full professional journey timeline
- `/{locale}/now`: what you’re focused on this season
- `/{locale}/uses`: tools/setup (often strong organic traffic)

---

## i18n Behavior (Locale Routing + Cookie Logic)
### Requirements
- URLs are always locale-prefixed: `/{locale}/...`
- English (`en-US`) is the default, but still uses `/en-US/...` routes internally.
- Locale selection is persisted via cookie.

### Redirect Rules (Server-side via middleware)
1. Request to `/`
   - If cookie `locale` exists and is supported → redirect to `/{cookieLocale}`
   - Else → redirect to `/en-US`

2. Request to `/projects`, `/blog`, etc. without locale
   - Same rule: redirect to `/{preferredLocale}/projects` (or `/en-US/...` fallback)

3. Request to `/{locale}/...`
   - If `locale` unsupported → redirect to `/en-US/...` (or 404)

### Locale Switcher UI
- Switch to same path with a different locale when possible:
  - Example: `/en-US/projects/foo` → `/pt-BR/projects/foo`
- If the target locale page does not exist, fall back to the locale home: `/{locale}`

### SEO i18n
- `hreflang` alternates for each localized page + `x-default`
- Canonical URLs are **self-canonical** per locale page (no cross-locale canonicals)

---

## SEO Plan
### Metadata
- Every route defines:
  - `title`, `description`, canonical URL
  - Open Graph + Twitter card (auto-generated per page)
- Project/post pages generate:
  - OG images (template) using title + tags + brand colors

### Sitemaps & Robots
- `sitemap.xml` includes all locale pages (including alternates)
- `robots.txt` points to sitemap

### Feeds
- RSS + Atom + JSON Feed for blog (at least one; ideally all three)

### Structured Data (JSON-LD)
- Home/About: `Person`
- Blog posts: `BlogPosting`
- Projects: `CreativeWork` or `SoftwareApplication` (when applicable)
- Site-wide: `BreadcrumbList`

### Content Strategy (Practical)
- 2–3 “lanes” you want to rank for (e.g., platform engineering, performance, distributed systems, AI infra)
- Write 5–10 evergreen posts in those lanes over time
- Cross-link posts ↔ projects

---

## Performance Plan
### Rendering Defaults
- Use **SSG/ISR** for content pages:
  - `/{locale}`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`
- SSR only for actions that truly require it (likely none for MVP)

### Budgets
- Keep client JS minimal on content pages
- Optimize images via `next/image`
- Self-host fonts (subset, preload only what’s needed)
- Avoid heavy analytics scripts

### Caching
- Enable caching headers for static assets
- Use ISR revalidation for content updates (e.g., revalidate 1h or on-demand)

---

## Design System & UI
### Visual Style
- Minimalist, high contrast, editorial layout
- Palette: **black / white / gray / red** (red as accent)
- Support **light + dark mode** with consistent contrast ratios

### Components
- Header: name/mark + nav + locale switcher + theme toggle
- Footer: compact link list (GitHub/LinkedIn/X/email/calendar), copyright, RSS
- Cards:
  - Project cards: title, summary, tags, links (GitHub/live/case study)
  - Blog cards: title, summary, tags, date, reading time
- Tag chips (clickable filters)
- CTA buttons: Contact / Resume

### Accessibility
- Keyboard navigable menus, visible focus states
- Sufficient contrast in both themes
- Semantic headings and landmarks

---

## Content Model (Schemas)
### Project frontmatter
- `title`, `slug`, `summary`
- `dateStart`, `dateEnd` (or `date`)
- `role`, `status` (active/archived)
- `tags[]` (controlled vocabulary)
- `stack[]`
- `links`: `repo`, `live`, `caseStudy`, `demo`
- `highlights[]` (3 bullets focused on outcomes)
- `coverImage` (optional)

### Blog post frontmatter
- `title`, `slug`, `summary`
- `date`, `updatedAt` (optional)
- `tags[]`
- `coverImage` (optional)
- `canonicalUrl` (optional, if cross-posting)
- `lang` (`en-US` or `pt-BR`)

### Tag Strategy
- Keep tag set intentionally small (avoid SEO-thin pages)
- Consider `noindex` for low-signal tag pages until content grows

---

## Contact & Resume
### Resume
- Provide `/resume.pdf` as the canonical downloadable resume
- Optional: `/{locale}/resume` as an HTML summary that links to PDF

### Contact
- MVP: CTA button to email or scheduling link
- Optionally add a contact form later with:
  - rate limiting + honeypot
  - server action endpoint
  - spam protection

---

## Analytics (Optional, Privacy-Friendly)
- Add minimal analytics (Plausible or similar) only after MVP
- Track:
  - outbound link clicks (resume, GitHub, LinkedIn)
  - project page views
  - blog post reads

---

## Deployment
- Hosting: Vercel (straightforward for Next.js App Router + ISR)
- Configure:
  - custom domain
  - redirects + middleware locale handling
  - caching headers
  - environment variables (if any)

---

## Build Order (Roadmap)
### MVP (Ship)
1. Repo setup (Next.js App Router, Tailwind, MDX/Markdown pipeline)
2. i18n routing + middleware redirects + cookie preference
3. Theme (light/dark) + palette tokens
4. Core pages:
   - `/{locale}` About landing
   - `/{locale}/projects` + details
   - `/{locale}/blog` + details
5. SEO baseline:
   - metadata, OG, sitemap, robots, feeds
6. Performance + accessibility pass

### v1 (Improve)
- Add `/journey` or `/now`
- Add richer project case studies
- Expand pt-BR content
- Add automated OG image generation
- Add minimal analytics

---

## Definition of Done (MVP)
- Lighthouse:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+
- All pages render with correct locale, theme, metadata, and canonical/hreflang
- Projects and blog content are easy to add by dropping files + frontmatter
- Resume + contact CTAs work on mobile and desktop
