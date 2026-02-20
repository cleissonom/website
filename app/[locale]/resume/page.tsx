import { notFound } from "next/navigation"

import {
  ButtonLink,
  Eyebrow,
  Lead,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
import { getDictionary } from "@/data/i18n"
import { siteIdentity } from "@/data/profile"
import { isLocale, resumePdfPath } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, buildPageTitle, createMetadata } from "@/lib/metadata"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dictionary = getDictionary(locale)

  return createMetadata(locale, {
    title: buildPageTitle(dictionary.pages.resume.metadataTitle),
    description: dictionary.pages.resume.metadataDescription,
    path: "/resume",
    imagePath: SEO_IMAGE_PATHS.resume,
    imageAlt: `${dictionary.pages.resume.metadataTitle} social preview`
  })
}

export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui

  return (
    <SectionStack>
      <PageHeader>
        <Eyebrow>{ui.nav.resume}</Eyebrow>
        <h1>{siteIdentity.name}</h1>
        <Lead>{dictionary.content.about[0]}</Lead>
      </PageHeader>

      <Surface as="article">
        <p>{dictionary.pages.resume.summary}</p>
        <div className="hero-actions">
          <ButtonLink href={resumePdfPath(locale)} target="_blank" rel="noreferrer">
            {ui.cta.downloadResume}
          </ButtonLink>
          <ButtonLink variant="secondary" href={siteIdentity.links.email}>
            {ui.cta.contact}
          </ButtonLink>
        </div>
      </Surface>
    </SectionStack>
  )
}
