import { Card, Chip, ChipRow, InlineLink } from "@/components/design-system"
import type { ProjectEntry } from "@/lib/content"
import type { Locale } from "@/lib/i18n"

export type ProjectCardProject = Pick<
  ProjectEntry,
  "slug" | "title" | "summary" | "role" | "tags" | "coverImage"
>

export function ProjectCard({
  project,
  locale,
  readMoreLabel,
  readMoreAboutPrefix,
  enableWalletHover = false
}: {
  project: ProjectCardProject
  locale: Locale
  readMoreLabel: string
  readMoreAboutPrefix: string
  enableWalletHover?: boolean
}) {
  const contextLabel = `${readMoreAboutPrefix} ${project.title}`
  const descriptiveLabel = `${readMoreLabel} ${contextLabel}`

  return (
    <Card enableWalletHover={enableWalletHover}>
      {enableWalletHover ? (
        <div className="card-banner-shell">
          {project.coverImage ? (
            <img
              className="card-banner-image"
              src={project.coverImage}
              alt={`${project.title} preview`}
              loading="lazy"
            />
          ) : (
            <div className="card-banner-fallback" aria-hidden="true" />
          )}
        </div>
      ) : null}
      <p className="card-meta">{project.role}</p>
      <h3>
        <a href={`/${locale}/projects/${project.slug}`}>{project.title}</a>
      </h3>
      <p>{project.summary}</p>
      <ChipRow>
        {project.tags.map((tag) => (
          <Chip key={`${project.slug}-${tag}`}>{tag}</Chip>
        ))}
      </ChipRow>
      <InlineLink href={`/${locale}/projects/${project.slug}`} aria-label={descriptiveLabel}>
        {readMoreLabel}
        <span className="sr-only"> {contextLabel}</span>
      </InlineLink>
    </Card>
  )
}
