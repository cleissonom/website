import "server-only"

import fs from "node:fs"
import path from "node:path"

import { LOCALES, type Locale } from "@/lib/i18n"

const contentRoot = path.join(process.cwd(), "content")

function getMarkdownSlugs(type: "projects" | "blog", locale: Locale): string[] {
  const dir = path.join(contentRoot, type, locale)
  if (!fs.existsSync(dir)) {
    return []
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -3))
    .sort()
}

function createLocaleSlugIndex(type: "projects" | "blog"): Record<Locale, string[]> {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, getMarkdownSlugs(type, locale)])
  ) as Record<Locale, string[]>
}

export const PROJECT_SLUGS_BY_LOCALE = createLocaleSlugIndex("projects")
export const BLOG_SLUGS_BY_LOCALE = createLocaleSlugIndex("blog")
