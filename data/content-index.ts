import { LOCALES, type Locale } from "@/lib/i18n"

const projectSlugs = ["ai-photo-verification-platform", "commerce-mobile-application"]
const blogSlugs = ["designing-reliable-nodejs-services", "scaling-kubernetes-on-aws"]

function createLocaleSlugIndex(slugs: readonly string[]): Record<Locale, string[]> {
  return Object.fromEntries(LOCALES.map((locale) => [locale, [...slugs]])) as Record<
    Locale,
    string[]
  >
}

export const PROJECT_SLUGS_BY_LOCALE = createLocaleSlugIndex(projectSlugs)
export const BLOG_SLUGS_BY_LOCALE = createLocaleSlugIndex(blogSlugs)
