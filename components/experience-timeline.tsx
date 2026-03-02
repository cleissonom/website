import Image from "next/image"
import type { ExperienceCompany } from "@/data/i18n/types"
import { COMPANY_LOGOS, COMPANY_LOGO_SIZE } from "@/lib/company-logos"

export function ExperienceTimeline({
  items,
  ariaLabel,
  collapsibleCompanies = false,
  defaultOpenCompanies = 1
}: {
  items: ExperienceCompany[]
  ariaLabel: string
  collapsibleCompanies?: boolean
  defaultOpenCompanies?: number
}) {
  return (
    <ol className="timeline" aria-label={ariaLabel}>
      {items.map((company, companyIndex) => {
        const logoSrc = COMPANY_LOGOS[company.company]

        const companyHeader = (
          <div className="timeline-company-header">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={`${company.company} logo`}
                width={COMPANY_LOGO_SIZE}
                height={COMPANY_LOGO_SIZE}
                className="timeline-company-logo"
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
            <details open={companyIndex < defaultOpenCompanies}>
              <summary className="timeline-company-summary">{companyHeader}</summary>
              <div className="timeline-company-content">{roles}</div>
            </details>
          </li>
        )
      })}
    </ol>
  )
}
