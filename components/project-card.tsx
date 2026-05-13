import { Card, Chip, ChipRow, InlineLink } from "@/components/design-system"
import type { Route } from "next"
import Image from "next/image"
import Link from "next/link"
import type { ProjectEntry } from "@/lib/content"
import { projectCardImageVariant } from "@/lib/devimg"
import type { Locale } from "@/lib/i18n"
import { isProjectDetailAvailable } from "@/lib/project-state"

export type ProjectCardProject = Pick<
  ProjectEntry,
  "slug" | "title" | "summary" | "role" | "type" | "stage" | "tags" | "coverImage"
>

export function ProjectCard({
  project,
  locale,
  readMoreLabel,
  readMoreAboutPrefix,
  detailsUnavailableLabel,
  typeLabel,
  stageLabel,
  enableWalletHover = false
}: {
  project: ProjectCardProject
  locale: Locale
  readMoreLabel: string
  readMoreAboutPrefix: string
  detailsUnavailableLabel: string
  typeLabel: string
  stageLabel: string
  enableWalletHover?: boolean
}) {
  const contextLabel = `${readMoreAboutPrefix} ${project.title}`
  const descriptiveLabel = `${readMoreLabel} ${contextLabel}`
  const cardImage = project.coverImage ? projectCardImageVariant(project.coverImage) : null
  const hasPublicDetails = isProjectDetailAvailable(project)
  const detailHref = `/${locale}/projects/${project.slug}` as Route

  return (
    <Card
      className={hasPublicDetails ? undefined : "project-card-in-progress"}
      enableWalletHover={enableWalletHover && hasPublicDetails}
    >
      <div className="card-banner-shell">
        {cardImage ? (
          <Image
            className={`card-banner-image${cardImage.fit === "contain" ? " card-banner-image-contain" : ""}`}
            src={cardImage.src}
            alt={`${project.title} preview`}
            width={cardImage.width}
            height={cardImage.height}
            loading="lazy"
          />
        ) : (
          <div className="card-banner-fallback" aria-hidden="true" />
        )}
        {!hasPublicDetails ? (
          <span className="project-card-state-ribbon" aria-hidden="true">
            {stageLabel}
          </span>
        ) : null}
      </div>
      <div className="project-card-meta-row" aria-label={`${typeLabel} | ${stageLabel}`}>
        <span>{typeLabel}</span>
        <span className={`project-card-stage project-card-stage-${project.stage}`}>
          {stageLabel}
        </span>
      </div>
      <p className="card-meta">{project.role}</p>
      <h3>{hasPublicDetails ? <Link href={detailHref}>{project.title}</Link> : project.title}</h3>
      <p>{project.summary}</p>
      <ChipRow>
        {project.tags.map((tag) => (
          <Chip key={`${project.slug}-${tag}`}>{tag}</Chip>
        ))}
      </ChipRow>
      {hasPublicDetails ? (
        <InlineLink href={detailHref} aria-label={descriptiveLabel}>
          {readMoreLabel}
          <span className="sr-only"> {contextLabel}</span>
        </InlineLink>
      ) : (
        <p className="project-card-detail-status">{detailsUnavailableLabel}</p>
      )}
    </Card>
  )
}
