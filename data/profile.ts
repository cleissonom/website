import { SITE_LINKS, SITE_NAME } from "@/lib/site"

export const siteIdentity = {
  name: SITE_NAME,
  links: SITE_LINKS
} as const

export type { ExperienceCompany, ExperienceRole, UiDictionary } from "@/data/i18n/types"
