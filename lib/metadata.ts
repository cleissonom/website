import type { Metadata } from "next";

import { DEFAULT_LOCALE, LOCALES, buildLocalizedPath, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_SHORT_TITLE, SITE_URL } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function absoluteUrl(pathname = "/"): string {
  if (!pathname || pathname === "/") {
    return SITE_URL;
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalized}`;
}

export function buildAlternates(locale: Locale, pathWithoutLocale = "/"): Metadata["alternates"] {
  const normalized = pathWithoutLocale === "" ? "/" : pathWithoutLocale;

  const languages = Object.fromEntries(
    LOCALES.map((supportedLocale) => [
      supportedLocale,
      absoluteUrl(buildLocalizedPath(supportedLocale, normalized))
    ])
  );

  return {
    canonical: absoluteUrl(buildLocalizedPath(locale, normalized)),
    languages: {
      ...languages,
      "x-default": absoluteUrl(buildLocalizedPath(DEFAULT_LOCALE, normalized))
    }
  };
}

export function createMetadata(locale: Locale, input: MetadataInput): Metadata {
  const pathWithoutLocale = input.path ?? "/";

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: buildAlternates(locale, pathWithoutLocale),
    openGraph: {
      type: "website",
      title: input.title,
      description: input.description,
      url: absoluteUrl(buildLocalizedPath(locale, pathWithoutLocale)),
      siteName: SITE_NAME
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description
    }
  };
}

export function buildPageTitle(title: string): string {
  return `${title} | ${SITE_SHORT_TITLE}`;
}
