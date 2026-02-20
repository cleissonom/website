import { notFound } from "next/navigation"

import { ExperienceTimeline } from "@/components/experience-timeline"
import { JsonLd } from "@/components/json-ld"
import { PostCard } from "@/components/post-card"
import { ProjectCard } from "@/components/project-card"
import { getDictionary } from "@/data/i18n"
import { siteIdentity } from "@/data/profile"
import { getAllPosts, getAllProjects } from "@/lib/content"
import { isLocale } from "@/lib/i18n"
import { absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dictionary = getDictionary(locale)

  return createMetadata(locale, {
    title: buildPageTitle(siteIdentity.name),
    description: dictionary.site.headline,
    path: "/",
    keywords: [...dictionary.pages.home.keywords]
  })
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui
  const about = dictionary.content.about
  const experienceTimeline = dictionary.content.experienceTimeline
  const focusAreas = dictionary.content.focusAreas
  const projects = getAllProjects(locale).slice(0, 2)
  const posts = getAllPosts(locale).slice(0, 2)

  const breadcrumbs = breadcrumbJsonLd([
    { name: dictionary.pages.home.breadcrumbLabel, url: absoluteUrl(`/${locale}`) }
  ])

  return (
    <>
      <JsonLd id="person-jsonld" data={personJsonLd(locale)} />
      <JsonLd id="home-breadcrumb-jsonld" data={breadcrumbs} />

      <section className="hero surface">
        <p className="eyebrow">{dictionary.site.shortTitle}</p>
        <h1>{siteIdentity.name}</h1>
        <p className="lead">{dictionary.site.headline}</p>
        <div className="hero-actions">
          <a className="primary-button" href={siteIdentity.links.email}>
            {ui.cta.contact}
          </a>
          <a
            className="secondary-button"
            href={siteIdentity.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {ui.cta.linkedin}
          </a>
        </div>
      </section>

      <section className="section-stack">
        <article className="surface">
          <h2>{ui.sections.about}</h2>
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="surface">
          <h2>{ui.sections.focusAreas}</h2>
          <div className="chip-row">
            {focusAreas.map((area) => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>
        </article>

        <article className="surface">
          <h2>{ui.sections.experience}</h2>
          <ExperienceTimeline
            items={experienceTimeline}
            ariaLabel={ui.labels.experienceTimelineAria}
          />
        </article>

        <article className="section-stack">
          <div className="page-header">
            <h2>{ui.sections.projects}</h2>
            <a className="inline-link" href={`/${locale}/projects`}>
              {ui.nav.projects}
            </a>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                readMoreLabel={ui.labels.readMore}
                readMoreAboutPrefix={dictionary.snippets.readMoreAboutPrefix}
              />
            ))}
          </div>
        </article>

        <article className="section-stack">
          <div className="page-header">
            <h2>{ui.sections.blog}</h2>
            <a className="inline-link" href={`/${locale}/blog`}>
              {ui.nav.blog}
            </a>
          </div>
          <div className="grid">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                locale={locale}
                readMoreLabel={ui.labels.readMore}
                readMoreAboutPrefix={dictionary.snippets.readMoreAboutPrefix}
                readingMinutesLabel={dictionary.snippets.readingMinutesShort}
              />
            ))}
          </div>
        </article>
      </section>
    </>
  )
}
