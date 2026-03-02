import { notFound } from "next/navigation"

import { Eyebrow, Lead, PageHeader, SectionStack, Surface } from "@/components/design-system"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { JsonLd } from "@/components/json-ld"
import { getDictionary } from "@/data/i18n"
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
    title: buildPageTitle(dictionary.pages.experience.metadataTitle),
    description: dictionary.pages.experience.metadataDescription,
    path: "/experience",
    imagePath: SEO_IMAGE_PATHS.home,
    imageAlt: `${dictionary.pages.experience.metadataTitle} social preview`
  })
}

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.experience, url: absoluteUrl(`/${locale}/experience`) }
  ])

  return (
    <SectionStack>
      <JsonLd id="experience-breadcrumb-jsonld" data={breadcrumbs} />

      <PageHeader>
        <Eyebrow>{ui.nav.experience}</Eyebrow>
        <h1>{ui.sections.experience}</h1>
        <Lead>{dictionary.pages.experience.lead}</Lead>
      </PageHeader>

      <Surface as="article">
        <ExperienceTimeline
          items={dictionary.content.experienceTimeline}
          ariaLabel={ui.labels.experienceTimelineAria}
        />
      </Surface>
    </SectionStack>
  )
}
