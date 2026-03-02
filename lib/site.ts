import type { Locale } from "@/lib/i18n"

export const SITE_URL = "https://www.cleisson.com"
export const SITE_DOMAIN = "www.cleisson.com"
export const SITE_NAME = "Cleisson de Oliveira Moura"
export const SITE_SHORT_TITLE = "Senior Software Engineer"
export const SITE_HEADLINE =
  "Senior Software Engineer | Node.js, Python & AWS Specialist | Scalable Systems | Kubernetes | System Design | Building AI-Powered Products"

export const SITE_EMAIL_BY_LOCALE: Record<Locale, string> = {
  "en-US": "contact@cleisson.com",
  "pt-BR": "contato@cleisson.com",
  "es-ES": "contacto@cleisson.com"
}

export const SITE_LINKS = {
  website: "https://www.cleisson.com",
  linkedin: "https://linkedin.cleisson.com",
  github: "https://github.cleisson.com",
  email: `mailto:${SITE_EMAIL_BY_LOCALE["en-US"]}`
} as const

export function siteEmailAddress(locale: Locale): string {
  return SITE_EMAIL_BY_LOCALE[locale]
}

export function siteEmailHref(locale: Locale): string {
  return `mailto:${siteEmailAddress(locale)}`
}
