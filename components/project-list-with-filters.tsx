"use client"

import { useMemo, useState } from "react"

import { Grid, MutedText } from "@/components/design-system"
import { ProjectCard, type ProjectCardProject } from "@/components/project-card"
import type { Locale } from "@/lib/i18n"

type ProjectsFilterCopy = {
  filterHeading: string
  allLabels: string
  clearLabels: string
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
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const availableLabels = useMemo(
    () =>
      Array.from(new Set(projects.flatMap((project) => project.tags))).sort((a, b) =>
        a.localeCompare(b, locale, { sensitivity: "base" })
      ),
    [projects, locale]
  )
  const selectedLabelKeys = useMemo(
    () => new Set(selectedLabels.map((label) => label.toLocaleLowerCase(locale))),
    [selectedLabels, locale]
  )
  const filteredProjects = useMemo(
    () =>
      selectedLabelKeys.size > 0
        ? projects.filter((project) =>
            project.tags.some((tag) => selectedLabelKeys.has(tag.toLocaleLowerCase(locale)))
          )
        : projects,
    [projects, selectedLabelKeys, locale]
  )
  const selectedLabelSummary =
    selectedLabels.length === 0
      ? copy.allLabels
      : selectedLabels.length <= 2
        ? selectedLabels.join(", ")
        : `${selectedLabels.slice(0, 2).join(", ")} +${selectedLabels.length - 2}`

  function toggleLabel(label: string) {
    const labelKey = label.toLocaleLowerCase(locale)

    setSelectedLabels((currentLabels) =>
      currentLabels.some((currentLabel) => currentLabel.toLocaleLowerCase(locale) === labelKey)
        ? currentLabels.filter(
            (currentLabel) => currentLabel.toLocaleLowerCase(locale) !== labelKey
          )
        : [...currentLabels, label]
    )
  }

  return (
    <>
      <section className="projects-filter" aria-label={copy.filterHeading}>
        <p className="projects-filter-label">{copy.filterHeading}</p>

        <details className="projects-label-dropdown">
          <summary
            className="projects-label-dropdown-trigger"
            aria-label={`${copy.filterHeading}: ${selectedLabelSummary}`}
          >
            <span className="projects-label-dropdown-summary">{selectedLabelSummary}</span>
            {selectedLabels.length > 0 ? (
              <span className="projects-label-dropdown-count">{selectedLabels.length}</span>
            ) : null}
            <svg
              className="projects-label-dropdown-caret"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </summary>

          <div className="projects-label-dropdown-menu">
            <div className="projects-label-dropdown-actions">
              <span>{copy.allLabels}</span>
              <button
                className="projects-label-clear"
                type="button"
                disabled={selectedLabels.length === 0}
                onClick={() => setSelectedLabels([])}
              >
                {copy.clearLabels}
              </button>
            </div>

            <div className="projects-label-options">
              {availableLabels.map((label, index) => {
                const labelKey = label.toLocaleLowerCase(locale)
                const isChecked = selectedLabelKeys.has(labelKey)
                const inputId = `projects-label-filter-${index}`

                return (
                  <label
                    key={label}
                    className={`projects-label-option${isChecked ? " projects-label-option-active" : ""}`}
                    htmlFor={inputId}
                  >
                    <input
                      id={inputId}
                      className="projects-label-checkbox"
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleLabel(label)}
                    />
                    <span className="projects-label-checkmark" aria-hidden="true" />
                    <span className="projects-label-option-text">{label}</span>
                  </label>
                )
              })}
            </div>
          </div>
        </details>
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
