import { notFound } from "next/navigation"

import {
  ButtonLink,
  Chip,
  ChipRow,
  Eyebrow,
  Grid,
  InlineLink,
  Lead,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { JsonLd } from "@/components/json-ld"
import { PostCard } from "@/components/post-card"
import { ProjectCard } from "@/components/project-card"
import { getDictionary } from "@/data/i18n"
import { siteIdentity } from "@/data/profile"
import { getAllPosts, getAllProjects } from "@/lib/content"
import { isLocale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
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
    imagePath: SEO_IMAGE_PATHS.home,
    imageAlt: `${siteIdentity.name} homepage preview`,
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

      <Surface as="section" className="hero">
        <div className="hero-layout">
          <div className="hero-copy">
            <Eyebrow>{dictionary.site.shortTitle}</Eyebrow>
            <h1>{siteIdentity.name}</h1>
            <Lead>{dictionary.site.headline}</Lead>
            <div className="hero-actions">
              <ButtonLink href={siteIdentity.links.email}>{ui.cta.contact}</ButtonLink>
              <ButtonLink
                variant="secondary"
                href={siteIdentity.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {ui.cta.linkedin}
              </ButtonLink>
            </div>
          </div>

          <figure className="hero-portrait">
            <img
              src="/about/profile.webp"
              alt={siteIdentity.name}
              width={448}
              height={459}
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </Surface>

      <SectionStack>
        <Surface as="article">
          <h2>{ui.sections.about}</h2>
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Surface>

        <Surface as="article">
          <h2>{ui.sections.focusAreas}</h2>
          <ChipRow>
            {focusAreas.map((area) => (
              <Chip key={area}>{area}</Chip>
            ))}
          </ChipRow>
        </Surface>

        <Surface as="article">
          <h2>{ui.sections.experience}</h2>
          <ExperienceTimeline
            items={experienceTimeline}
            ariaLabel={ui.labels.experienceTimelineAria}
          />
        </Surface>

        <SectionStack as="article">
          <PageHeader as="div">
            <h2>{ui.sections.projects}</h2>
            <InlineLink href={`/${locale}/projects`}>{ui.nav.projects}</InlineLink>
          </PageHeader>
          <Grid>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                readMoreLabel={ui.labels.readMore}
                readMoreAboutPrefix={dictionary.snippets.readMoreAboutPrefix}
              />
            ))}
          </Grid>
        </SectionStack>

        <SectionStack as="article">
          <PageHeader as="div">
            <h2>{ui.sections.blog}</h2>
            <InlineLink href={`/${locale}/blog`}>{ui.nav.blog}</InlineLink>
          </PageHeader>
          <Grid>
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
          </Grid>
        </SectionStack>
      </SectionStack>
    </>
  )
}
