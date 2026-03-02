import type { ExperienceCompany } from "@/data/i18n/types"

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
              <div className="timeline-company-header">
                <h3>{company.company}</h3>
                <p>
                  {company.employment} | {company.location}
                </p>
              </div>
              {roles}
            </li>
          )
        }

        return (
          <li key={company.company} className="timeline-company timeline-company-collapsible">
            <details open={companyIndex < defaultOpenCompanies}>
              <summary className="timeline-company-summary">
                <div className="timeline-company-header">
                  <h3>{company.company}</h3>
                  <p>
                    {company.employment} | {company.location}
                  </p>
                </div>
              </summary>
              <div className="timeline-company-content">{roles}</div>
            </details>
          </li>
        )
      })}
    </ol>
  )
}
