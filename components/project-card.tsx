import { Card, Chip, ChipRow, InlineLink } from "@/components/design-system"
import type { Route } from "next"
import Image from "next/image"
import Link from "next/link"
import type { ProjectEntry } from "@/lib/content"
import { projectCardImage } from "@/lib/devimg"
import type { Locale } from "@/lib/i18n"

export type ProjectCardProject = Pick<
  ProjectEntry,
  "slug" | "title" | "summary" | "role" | "type" | "stage" | "tags" | "coverImage"
>

export function ProjectCard({
  project,
  locale,
  readMoreLabel,
  readMoreAboutPrefix,
  typeLabel,
  stageLabel,
  enableWalletHover = false
}: {
  project: ProjectCardProject
  locale: Locale
  readMoreLabel: string
  readMoreAboutPrefix: string
  typeLabel: string
  stageLabel: string
  enableWalletHover?: boolean
}) {
  const contextLabel = `${readMoreAboutPrefix} ${project.title}`
  const descriptiveLabel = `${readMoreLabel} ${contextLabel}`

  return (
    <Card enableWalletHover={enableWalletHover}>
      <div className="card-banner-shell">
        {project.coverImage ? (
          <Image
            className="card-banner-image"
            src={projectCardImage(project.coverImage)}
            alt={`${project.title} preview`}
            width={640}
            height={360}
            loading="lazy"
          />
        ) : (
          <div className="card-banner-fallback" aria-hidden="true" />
        )}
      </div>
      <div className="project-card-meta-row" aria-label={`${typeLabel} | ${stageLabel}`}>
        <span>{typeLabel}</span>
        <span>{stageLabel}</span>
      </div>
      <p className="card-meta">{project.role}</p>
      <h3>
        <Link href={`/${locale}/projects/${project.slug}` as Route}>{project.title}</Link>
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
