import { notFound } from "next/navigation"

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
  const projectCards = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    role: project.role,
    tags: project.tags,
    coverImage: project.coverImage
  }))

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.projects, url: absoluteUrl(`/${locale}/projects`) }
  ])

  return (
    <section className="section-stack">
      <JsonLd id="projects-breadcrumb-jsonld" data={breadcrumbs} />

      <header className="page-header">
        <p className="eyebrow">{ui.nav.projects}</p>
        <h1>{ui.sections.projects}</h1>
        <p className="lead">{dictionary.pages.projects.lead}</p>
      </header>

      <ProjectListWithFilters
        projects={projectCards}
        locale={locale}
        readMoreLabel={ui.labels.readMore}
        readMoreAboutPrefix={dictionary.snippets.readMoreAboutPrefix}
        copy={{
          filterHeading: dictionary.pages.projects.filterHeading,
          allLabels: dictionary.pages.projects.allLabels,
          noResultsDescription: dictionary.pages.projects.noResultsDescription
        }}
      />
    </section>
  )
}
