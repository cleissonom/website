import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { JsonLd } from "@/components/json-ld"
import { uiByLocale } from "@/data/profile"
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content"
import { LOCALES, isLocale } from "@/lib/i18n"
import { absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/schema"

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getAllProjectSlugs(locale).map((slug) => ({
      locale,
      slug
    }))
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const project = getProjectBySlug(locale, slug)
  if (!project) {
    return createMetadata(locale, {
      title: buildPageTitle("Project not found"),
      description: "Project not found for this locale.",
      path: "/projects"
    })
  }

  return createMetadata(locale, {
    title: buildPageTitle(project.title),
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: project.tags
  })
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const ui = uiByLocale[locale]
  const project = getProjectBySlug(locale, slug)

  if (!project) {
    notFound()
  }

  const links = (Object.entries(project.links) as Array<[string, string | undefined]>).flatMap(
    ([label, value]) => (value ? [{ label, value }] : [])
  )

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.projects, url: absoluteUrl(`/${locale}/projects`) },
    { name: project.title, url: absoluteUrl(`/${locale}/projects/${project.slug}`) }
  ])

  return (
    <article className="section-stack">
      <JsonLd id="project-jsonld" data={projectJsonLd(locale, project)} />
      <JsonLd id="project-breadcrumb-jsonld" data={breadcrumbs} />

      <header className="page-header">
        <p className="eyebrow">{ui.nav.projects}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
      </header>

      <section className="meta-grid">
        <article>
          <p className="muted">{ui.labels.role}</p>
          <p>{project.role}</p>
        </article>
        <article>
          <p className="muted">{ui.labels.status}</p>
          <p>{project.status}</p>
        </article>
        <article>
          <p className="muted">{ui.labels.stack}</p>
          <p>{project.stack.join(", ")}</p>
        </article>
      </section>

      <section className="surface">
        <h2>{ui.labels.highlights}</h2>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      {links.length > 0 ? (
        <section className="surface">
          <h2>Links</h2>
          <div className="chip-row">
            {links.map(({ label, value }) => (
              <a
                key={label}
                href={value}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                {label}
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="surface markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.body}</ReactMarkdown>
      </section>

      <a className="inline-link" href={`/${locale}/projects`}>
        {ui.labels.backToProjects}
      </a>
    </article>
  )
}
