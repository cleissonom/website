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
  authors?: string[]
  publishedTime?: string
  modifiedTime?: string
  canonicalUrl?: string
}

export const SEO_IMAGE_PATHS = {
  default: "/seo/og-default-1200x630.png",
  home: "/seo/og-home-1200x630.png",
  experience: "/seo/og-experience-1200x630.png",
  blog: "/seo/og-blog-1200x630.png",
  projects: "/seo/og-projects-1200x630.png",
  resume: "/seo/og-resume-1200x630.png"
} as const

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s"
  },
  description:
    "Senior Software Engineer focused on backend systems, cloud infrastructure, and scalable software.",
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon-48x48-light.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-48x48-dark.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/favicon-96x96-light.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-96x96-dark.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      },
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
      {
        url: "/favicon-32x32-light.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-32x32-dark.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      }
    ],
    shortcut: "/favicon-light.svg",
    apple: [
      {
        url: "/apple-touch-icon-light.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/apple-touch-icon-dark.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)"
      }
    ]
  }
}

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
  const pageUrl = absoluteUrl(buildLocalizedPath(locale, pathWithoutLocale))
  const socialImagePath = input.imagePath ?? SEO_IMAGE_PATHS.default
  const socialImageAlt = input.imageAlt ?? `${input.title} social preview`
  const socialImageUrl = absoluteUrl(socialImagePath)
  const alternates: NonNullable<Metadata["alternates"]> =
    buildAlternates(locale, pathWithoutLocale) ?? {}

  if (input.canonicalUrl) {
    alternates.canonical = input.canonicalUrl
  }

  const openGraphBase = {
    type: input.openGraphType ?? "website",
    title: input.title,
    description: input.description,
    url: pageUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: socialImageUrl,
        width: SOCIAL_IMAGE_WIDTH,
        height: SOCIAL_IMAGE_HEIGHT,
        alt: socialImageAlt
      }
    ]
  }

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates,
    authors: input.authors?.map((author) => ({ name: author })),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        "max-image-preview": "large"
      }
    },
    openGraph:
      input.openGraphType === "article"
        ? {
            ...openGraphBase,
            type: "article",
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime,
            authors: input.authors
          }
        : openGraphBase,
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
