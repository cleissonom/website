import Image from "next/image"
import type { ExperienceCompany } from "@/data/i18n/types"
import { COMPANY_LOGOS, COMPANY_LOGO_SIZE } from "@/lib/company-logos"

export function ExperienceTimeline({
  items,
  ariaLabel,
  collapsibleCompanies = false,
  defaultOpenCompanies = 1,
  latestRoleLabel = "Latest role"
}: {
  items: ExperienceCompany[]
  ariaLabel: string
  collapsibleCompanies?: boolean
  defaultOpenCompanies?: number
  latestRoleLabel?: string
}) {
  return (
    <ol className="timeline" aria-label={ariaLabel}>
      {items.map((company, companyIndex) => {
        const logoSrc = COMPANY_LOGOS[company.company]
        const latestRole = company.roles[0]
        const companyPeriod = summarizeCompanyPeriod(company.roles)

        const companyHeader = (
          <div className="timeline-company-header">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt=""
                width={COMPANY_LOGO_SIZE}
                height={COMPANY_LOGO_SIZE}
                className="timeline-company-logo"
                aria-hidden="true"
              />
            ) : null}

            <div className="timeline-company-header-text">
              <h3>{company.company}</h3>
              <p>
                {company.employment} | {company.location}
              </p>
            </div>
          </div>
        )

        const roles = company.roles.map((role, roleIndex) => (
          <article
            key={`${company.company}-${role.title}-${role.period}-${roleIndex}`}
            className="timeline-role"
          >
            <h4>{role.title}</h4>
            <p className="timeline-period">{role.period}</p>
            {role.bullets.length > 0 ? (
              <ul>
                {role.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={`${company.company}-${role.title}-${role.period}-${bullet}-${bulletIndex}`}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))

        if (!collapsibleCompanies) {
          return (
            <li key={company.company} className="timeline-company">
              {companyHeader}
              {roles}
            </li>
          )
        }

        return (
          <li key={company.company} className="timeline-company timeline-company-collapsible">
            <details
              className="timeline-company-details"
              open={companyIndex < defaultOpenCompanies}
            >
              <summary className="timeline-company-summary">
                <span className="timeline-company-summary-main">
                  {logoSrc ? (
                    <Image
                      src={logoSrc}
                      alt=""
                      width={COMPANY_LOGO_SIZE}
                      height={COMPANY_LOGO_SIZE}
                      className="timeline-company-logo"
                      aria-hidden="true"
                    />
                  ) : null}

                  <span className="timeline-company-header-text">
                    <span className="timeline-company-name">{company.company}</span>
                    <span className="timeline-company-meta">
                      {company.employment} | {company.location}
                    </span>
                  </span>
                </span>

                <span className="timeline-company-summary-details">
                  {companyPeriod ? (
                    <span className="timeline-company-period-range">{companyPeriod}</span>
                  ) : null}
                </span>

                {latestRole ? (
                  <span className="timeline-company-latest">
                    <span className="timeline-company-latest-label">{latestRoleLabel}</span>
                    <span>{latestRole.title}</span>
                  </span>
                ) : null}

                <span className="timeline-company-chevron" aria-hidden="true" />
              </summary>
              <div className="timeline-company-content">
                <h3 className="sr-only">{company.company}</h3>
                {roles}
              </div>
            </details>
          </li>
        )
      })}
    </ol>
  )
}

function summarizeCompanyPeriod(roles: ExperienceCompany["roles"]): string {
  if (roles.length === 0) {
    return ""
  }

  if (roles.length === 1) {
    return roles[0].period
  }

  const oldestStart = roles[roles.length - 1].period.split(" - ")[0]?.trim()
  const latestEnd = stripDuration(roles[0].period.split(" - ")[1]?.trim() ?? "")

  if (!oldestStart || !latestEnd) {
    return roles[0].period
  }

  return `${oldestStart} - ${latestEnd}`
}

function stripDuration(value: string): string {
  return value.replace(/\s*\([^)]*\)\s*$/, "")
}
