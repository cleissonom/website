import type { Metadata } from "next"

import { DEFAULT_LOCALE, LOCALES, buildLocalizedPath, type Locale } from "@/lib/i18n"
import { SITE_NAME, SITE_SHORT_TITLE, SITE_URL } from "@/lib/site"

type MetadataInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  imagePath?: string
  imageAlt?: string
  openGraphType?: "website" | "article"
}

export const SEO_IMAGE_PATHS = {
  default: "/seo/og-default-1200x630.png",
  home: "/seo/og-home-1200x630.png",
  blog: "/seo/og-blog-1200x630.png",
  projects: "/seo/og-projects-1200x630.png",
  resume: "/seo/og-resume-1200x630.png"
} as const

const SOCIAL_IMAGE_WIDTH = 1200
const SOCIAL_IMAGE_HEIGHT = 630

export function absoluteUrl(pathname = "/"): string {
  if (!pathname || pathname === "/") {
    return SITE_URL
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`
  return `${SITE_URL}${normalized}`
}

export function buildAlternates(locale: Locale, pathWithoutLocale = "/"): Metadata["alternates"] {
  const normalized = pathWithoutLocale === "" ? "/" : pathWithoutLocale

  const languages = Object.fromEntries(
    LOCALES.map((supportedLocale) => [
      supportedLocale,
      absoluteUrl(buildLocalizedPath(supportedLocale, normalized))
    ])
  )

  return {
    canonical: absoluteUrl(buildLocalizedPath(locale, normalized)),
    languages: {
      ...languages,
      "x-default": absoluteUrl(buildLocalizedPath(DEFAULT_LOCALE, normalized))
    }
  }
}

export function createMetadata(locale: Locale, input: MetadataInput): Metadata {
  const pathWithoutLocale = input.path ?? "/"
  const socialImagePath = input.imagePath ?? SEO_IMAGE_PATHS.default
  const socialImageAlt = input.imageAlt ?? `${input.title} social preview`
  const socialImageUrl = absoluteUrl(socialImagePath)

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: buildAlternates(locale, pathWithoutLocale),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        "max-image-preview": "large"
      }
    },
    openGraph: {
      type: input.openGraphType ?? "website",
      title: input.title,
      description: input.description,
      url: absoluteUrl(buildLocalizedPath(locale, pathWithoutLocale)),
      siteName: SITE_NAME,
      images: [
        {
          url: socialImageUrl,
          width: SOCIAL_IMAGE_WIDTH,
          height: SOCIAL_IMAGE_HEIGHT,
          alt: socialImageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [socialImageUrl]
    }
  }
}

export function buildPageTitle(title: string): string {
  return `${title} | ${SITE_SHORT_TITLE}`
}
