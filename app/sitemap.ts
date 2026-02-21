import type { MetadataRoute } from "next"

import { getAllPosts, getAllProjects } from "@/lib/content"
import { LOCALES, buildLocalizedPath } from "@/lib/i18n"
import { absoluteUrl } from "@/lib/metadata"

const staticPaths = ["/", "/projects", "/blog", "/resume"] as const

function toValidDate(value: string | undefined, fallback: Date): Date {
  if (!value) {
    return fallback
  }

  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? fallback : parsed
}

function languageAlternates(path: string) {
  return {
    languages: Object.fromEntries(
      LOCALES.map((locale) => [locale, absoluteUrl(buildLocalizedPath(locale, path))])
    )
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const path of staticPaths) {
      entries.push({
        url: absoluteUrl(buildLocalizedPath(locale, path)),
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "/" ? 1 : 0.8,
        alternates: languageAlternates(path)
      })
    }

    for (const project of getAllProjects(locale)) {
      const path = `/projects/${project.slug}`
      const projectLastModified = toValidDate(project.dateEnd ?? project.dateStart, now)
      entries.push({
        url: absoluteUrl(buildLocalizedPath(locale, path)),
        lastModified: projectLastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: languageAlternates(path)
      })
    }

    for (const post of getAllPosts(locale)) {
      const path = `/blog/${post.slug}`
      const postLastModified = toValidDate(post.updatedAt ?? post.date, now)
      entries.push({
        url: absoluteUrl(buildLocalizedPath(locale, path)),
        lastModified: postLastModified,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: languageAlternates(path)
      })
    }
  }

  return entries
}
