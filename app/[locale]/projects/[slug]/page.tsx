import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import {
  ButtonLink,
  ChipRow,
  Eyebrow,
  InlineLink,
  Lead,
  MutedText,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
import { JsonLd } from "@/components/json-ld"
import { getDictionary } from "@/data/i18n"
import type { ProjectLinkKey } from "@/data/i18n/types"
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content"
import { LOCALES, isLocale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
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

  const dictionary = getDictionary(locale)
  const project = getProjectBySlug(locale, slug)
  if (!project) {
    return createMetadata(locale, {
      title: buildPageTitle(dictionary.pages.projects.notFoundTitle),
      description: dictionary.pages.projects.notFoundDescription,
      path: "/projects",
      imagePath: SEO_IMAGE_PATHS.projects,
      imageAlt: `${dictionary.pages.projects.metadataTitle} social preview`
    })
  }

  return createMetadata(locale, {
    title: buildPageTitle(project.title),
    description: project.summary,
    path: `/projects/${project.slug}`,
    imagePath: SEO_IMAGE_PATHS.projects,
    imageAlt: `${project.title} social preview`,
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

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui
  const project = getProjectBySlug(locale, slug)

  if (!project) {
    notFound()
  }

  const links = (
    Object.entries(project.links) as Array<[ProjectLinkKey, string | undefined]>
  ).flatMap(([label, value]) => (value ? [{ label, value }] : []))

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.projects, url: absoluteUrl(`/${locale}/projects`) },
    { name: project.title, url: absoluteUrl(`/${locale}/projects/${project.slug}`) }
  ])

  return (
    <SectionStack as="article">
      <JsonLd id="project-jsonld" data={projectJsonLd(locale, project)} />
      <JsonLd id="project-breadcrumb-jsonld" data={breadcrumbs} />

      <PageHeader>
        <Eyebrow>{ui.nav.projects}</Eyebrow>
        <h1>{project.title}</h1>
        <Lead>{project.summary}</Lead>
      </PageHeader>

      {project.coverImage ? (
        <figure className="project-banner">
          <img src={project.coverImage} alt={`${project.title} banner`} />
        </figure>
      ) : null}

      <section className="meta-grid">
        <article>
          <MutedText>{ui.labels.role}</MutedText>
          <p>{project.role}</p>
        </article>
        <article>
          <MutedText>{ui.labels.status}</MutedText>
          <p>{dictionary.pages.projects.statusLabels[project.status]}</p>
        </article>
        <article>
          <MutedText>{ui.labels.stack}</MutedText>
          <p>{project.stack.join(", ")}</p>
        </article>
      </section>

      <Surface>
        <h2>{ui.labels.highlights}</h2>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </Surface>

      {links.length > 0 ? (
        <Surface>
          <h2>{dictionary.pages.projects.linksHeading}</h2>
          <ChipRow>
            {links.map(({ label, value }) => (
              <ButtonLink
                key={label}
                href={value}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                {dictionary.pages.projects.linkLabels[label]}
              </ButtonLink>
            ))}
          </ChipRow>
        </Surface>
      ) : null}

      <Surface className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.body}</ReactMarkdown>
      </Surface>

      <InlineLink href={`/${locale}/projects`}>{ui.labels.backToProjects}</InlineLink>
    </SectionStack>
  )
}
