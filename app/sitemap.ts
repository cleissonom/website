import type { MetadataRoute } from "next";

import { getAllPosts, getAllProjects } from "@/lib/content";
import { LOCALES, buildLocalizedPath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/metadata";

const staticPaths = ["/", "/projects", "/blog", "/resume"] as const;

function languageAlternates(path: string) {
  return {
    languages: Object.fromEntries(
      LOCALES.map((locale) => [locale, absoluteUrl(buildLocalizedPath(locale, path))])
    )
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of staticPaths) {
      entries.push({
        url: absoluteUrl(buildLocalizedPath(locale, path)),
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "/" ? 1 : 0.8,
        alternates: languageAlternates(path)
      });
    }

    for (const project of getAllProjects(locale)) {
      const path = `/projects/${project.slug}`;
      entries.push({
        url: absoluteUrl(buildLocalizedPath(locale, path)),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: languageAlternates(path)
      });
    }

    for (const post of getAllPosts(locale)) {
      const path = `/blog/${post.slug}`;
      entries.push({
        url: absoluteUrl(buildLocalizedPath(locale, path)),
        lastModified: new Date(post.updatedAt ?? post.date),
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: languageAlternates(path)
      });
    }
  }

  return entries;
}
