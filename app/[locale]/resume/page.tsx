import { notFound } from "next/navigation"

import {
  ButtonLink,
  Chip,
  ChipRow,
  Eyebrow,
  InlineLink,
  Lead,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
import { JsonLd } from "@/components/json-ld"
import { LinkedInButton } from "@/components/linkedin-button"
import { getDictionary } from "@/data/i18n"
import { siteIdentity } from "@/data/profile"
import { isLocale, resumePdfPath } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, buildPageTitle, createMetadata } from "@/lib/metadata"
import { personJsonLd } from "@/lib/schema"
import { siteEmailHref } from "@/lib/site"

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
  const focusAreas = dictionary.content.focusAreas.slice(0, 6)

  return (
    <SectionStack>
      <JsonLd id="resume-person-jsonld" data={personJsonLd(locale)} />

      <Surface as="section" className="resume-hub" aria-labelledby="resume-title">
        <div className="detail-hero-grid">
          <PageHeader className="detail-hero-copy">
            <Eyebrow>{ui.nav.resume}</Eyebrow>
            <h1 id="resume-title">{siteIdentity.name}</h1>
            <Lead>{dictionary.pages.resume.summary}</Lead>
          </PageHeader>

          <div className="resume-contact-panel">
            <p className="card-meta">{dictionary.site.shortTitle}</p>
            <p>{dictionary.content.about[0]}</p>
          </div>
        </div>

        <ChipRow>
          {focusAreas.map((area) => (
            <Chip key={area}>{area}</Chip>
          ))}
        </ChipRow>

        <div className="hero-actions">
          <ButtonLink href={resumePdfPath(locale)} target="_blank" rel="noreferrer">
            {ui.cta.downloadResume}
            <span className="sr-only"> ({ui.labels.opensInNewTab})</span>
          </ButtonLink>
          <ButtonLink variant="secondary" href={siteEmailHref(locale)}>
            {ui.cta.contact}
          </ButtonLink>
          <LinkedInButton label={ui.cta.linkedin} opensInNewTabLabel={ui.labels.opensInNewTab} />
        </div>
      </Surface>

      <Surface as="section" className="resume-links" aria-labelledby="resume-links-title">
        <div className="section-heading-row">
          <h2 id="resume-links-title">{ui.sections.experience}</h2>
          <InlineLink href={`/${locale}/experience`}>{ui.nav.experience}</InlineLink>
        </div>
        <p className="muted">{dictionary.pages.experience.lead}</p>
      </Surface>
    </SectionStack>
  )
}
