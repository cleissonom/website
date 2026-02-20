import type { ExperienceCompany } from "@/data/profile"

export function ExperienceTimeline({
  items,
  ariaLabel
}: {
  items: ExperienceCompany[]
  ariaLabel: string
}) {
  return (
    <ol className="timeline" aria-label={ariaLabel}>
      {items.map((company) => (
        <li key={company.company} className="timeline-company">
          <div className="timeline-company-header">
            <h3>{company.company}</h3>
            <p>
              {company.employment} | {company.location}
            </p>
          </div>

          {company.roles.map((role, roleIndex) => (
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
          ))}
        </li>
      ))}
    </ol>
  )
}
