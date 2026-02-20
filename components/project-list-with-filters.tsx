"use client"

import { useMemo, useState } from "react"

import { ChipButton, ChipRow, Grid, MutedText } from "@/components/design-system"
import { ProjectCard, type ProjectCardProject } from "@/components/project-card"
import type { Locale } from "@/lib/i18n"

type ProjectsFilterCopy = {
  filterHeading: string
  allLabels: string
  noResultsDescription: string
}

export function ProjectListWithFilters({
  projects,
  locale,
  readMoreLabel,
  readMoreAboutPrefix,
  copy
}: {
  projects: ProjectCardProject[]
  locale: Locale
  readMoreLabel: string
  readMoreAboutPrefix: string
  copy: ProjectsFilterCopy
}) {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)
  const selectedLabelKey = selectedLabel?.toLocaleLowerCase(locale) ?? null
  const availableLabels = useMemo(
    () =>
      Array.from(new Set(projects.flatMap((project) => project.tags))).sort((a, b) =>
        a.localeCompare(b, locale, { sensitivity: "base" })
      ),
    [projects, locale]
  )
  const filteredProjects = useMemo(
    () =>
      selectedLabelKey
        ? projects.filter((project) =>
            project.tags.some((tag) => tag.toLocaleLowerCase(locale) === selectedLabelKey)
          )
        : projects,
    [projects, selectedLabelKey, locale]
  )

  return (
    <>
      <section className="projects-filter" aria-label={copy.filterHeading}>
        <p className="projects-filter-label">{copy.filterHeading}</p>
        <ChipRow>
          <ChipButton
            type="button"
            active={!selectedLabelKey}
            onClick={() => setSelectedLabel(null)}
          >
            {copy.allLabels}
          </ChipButton>

          {availableLabels.map((label) => {
            const isActive = label.toLocaleLowerCase(locale) === selectedLabelKey

            return (
              <ChipButton
                key={label}
                type="button"
                active={isActive}
                onClick={() => setSelectedLabel(label)}
              >
                {label}
              </ChipButton>
            )
          })}
        </ChipRow>
      </section>

      {filteredProjects.length > 0 ? (
        <Grid projects>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              readMoreLabel={readMoreLabel}
              readMoreAboutPrefix={readMoreAboutPrefix}
              enableWalletHover
            />
          ))}
        </Grid>
      ) : (
        <MutedText>{copy.noResultsDescription}</MutedText>
      )}
    </>
  )
}
