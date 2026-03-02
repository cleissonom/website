import type { ExperienceCompany } from "@/data/i18n/types"

export function summarizeExperienceTimeline(items: ExperienceCompany[]): ExperienceCompany[] {
  return items.map((company) => ({
    ...company,
    roles: company.roles.map((role) => ({
      ...role,
      bullets: role.bullets.length > 0 ? [role.bullets[0]] : []
    }))
  }))
}
