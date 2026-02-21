import type { BlogEntry, ProjectEntry } from "@/lib/content"
import type { Locale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, absoluteUrl } from "@/lib/metadata"
import { SITE_LINKS, SITE_NAME, SITE_SHORT_TITLE } from "@/lib/site"

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: SITE_SHORT_TITLE,
    url: absoluteUrl(`/${locale}`),
    sameAs: [SITE_LINKS.linkedin, SITE_LINKS.github, SITE_LINKS.website],
    email: SITE_LINKS.email.replace("mailto:", "")
  }
}

export function projectJsonLd(locale: Locale, project: ProjectEntry) {
  const image = project.coverImage
    ? absoluteUrl(project.coverImage)
    : absoluteUrl(SEO_IMAGE_PATHS.projects)

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    applicationCategory: "DeveloperApplication",
    inLanguage: locale,
    keywords: project.tags.join(", "),
    creator: {
      "@type": "Person",
      name: SITE_NAME
    },
    image,
    mainEntityOfPage: absoluteUrl(`/${locale}/projects/${project.slug}`),
    url: absoluteUrl(`/${locale}/projects/${project.slug}`)
  }
}

export function blogPostJsonLd(locale: Locale, post: BlogEntry) {
  const image = post.coverImage ? absoluteUrl(post.coverImage) : absoluteUrl(SEO_IMAGE_PATHS.blog)

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: SITE_NAME
    },
    image,
    mainEntityOfPage: absoluteUrl(`/${locale}/blog/${post.slug}`),
    url: absoluteUrl(`/${locale}/blog/${post.slug}`)
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
