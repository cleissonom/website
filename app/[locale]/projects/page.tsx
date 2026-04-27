import { notFound } from "next/navigation"

import {
  Chip,
  ChipRow,
  Eyebrow,
  Lead,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
import { JsonLd } from "@/components/json-ld"
import { ProjectListWithFilters } from "@/components/project-list-with-filters"
import { getDictionary } from "@/data/i18n"
import { getAllProjects } from "@/lib/content"
import { isLocale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd } from "@/lib/schema"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dictionary = getDictionary(locale)

  return createMetadata(locale, {
    title: buildPageTitle(dictionary.pages.projects.metadataTitle),
    description: dictionary.pages.projects.metadataDescription,
    path: "/projects",
    imagePath: SEO_IMAGE_PATHS.projects,
    imageAlt: `${dictionary.pages.projects.metadataTitle} social preview`
  })
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui
  const projects = getAllProjects(locale)
  const projectLabels = Array.from(new Set(projects.flatMap((project) => project.tags))).sort(
    (a, b) => a.localeCompare(b, locale, { sensitivity: "base" })
  )
  const projectCards = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    role: project.role,
    type: project.type,
    stage: project.stage,
    tags: project.tags,
    coverImage: project.coverImage
  }))
  const developerToolsCount = projects.filter((project) => project.type === "developer-tool").length
  const maintainedCount = projects.filter((project) => project.stage === "maintained").length

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.projects, url: absoluteUrl(`/${locale}/projects`) }
  ])

  return (
    <SectionStack>
      <JsonLd id="projects-breadcrumb-jsonld" data={breadcrumbs} />

      <Surface as="section" className="page-overview" aria-labelledby="projects-title">
        <PageHeader className="page-overview-copy">
          <Eyebrow>{ui.nav.projects}</Eyebrow>
          <h1 id="projects-title">{dictionary.pages.projects.metadataTitle}</h1>
          <Lead>{dictionary.pages.projects.lead}</Lead>
        </PageHeader>

        <dl className="metric-grid page-overview-metrics">
          <div>
            <dt>{projects.length}</dt>
            <dd>{ui.sections.projects}</dd>
          </div>
          <div>
            <dt>{developerToolsCount}</dt>
            <dd>{dictionary.pages.projects.typeLabels["developer-tool"]}</dd>
          </div>
          <div>
            <dt>{maintainedCount}</dt>
            <dd>{dictionary.pages.projects.stageLabels.maintained}</dd>
          </div>
        </dl>

        <ChipRow className="overview-chip-row">
          {projectLabels.slice(0, 6).map((label) => (
            <Chip key={label}>{label}</Chip>
          ))}
        </ChipRow>
      </Surface>

      <ProjectListWithFilters
        projects={projectCards}
        locale={locale}
        readMoreLabel={ui.labels.readMore}
        readMoreAboutPrefix={dictionary.snippets.readMoreAboutPrefix}
        typeLabels={dictionary.pages.projects.typeLabels}
        stageLabels={dictionary.pages.projects.stageLabels}
        copy={{
          filterHeading: dictionary.pages.projects.filterHeading,
          allLabels: dictionary.pages.projects.allLabels,
          clearLabels: dictionary.pages.projects.clearLabels,
          noResultsDescription: dictionary.pages.projects.noResultsDescription
        }}
      />
    </SectionStack>
  )
}
