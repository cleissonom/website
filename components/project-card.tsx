import type { ProjectEntry } from "@/lib/content"
import type { Locale } from "@/lib/i18n"

export function ProjectCard({
  project,
  locale,
  readMoreLabel
}: {
  project: ProjectEntry
  locale: Locale
  readMoreLabel: string
}) {
  const contextLabel = locale === "pt-BR" ? `sobre ${project.title}` : `about ${project.title}`
  const descriptiveLabel = `${readMoreLabel} ${contextLabel}`

  return (
    <article className="card">
      <p className="card-meta">{project.role}</p>
      <h3>
        <a href={`/${locale}/projects/${project.slug}`}>{project.title}</a>
      </h3>
      <p>{project.summary}</p>
      <div className="chip-row">
        {project.tags.map((tag) => (
          <span key={`${project.slug}-${tag}`} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <a
        className="inline-link"
        href={`/${locale}/projects/${project.slug}`}
        aria-label={descriptiveLabel}
      >
        {readMoreLabel}
        <span className="sr-only"> {contextLabel}</span>
      </a>
    </article>
  )
}
