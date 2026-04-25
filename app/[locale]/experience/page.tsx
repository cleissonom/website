import { notFound } from "next/navigation"

import {
  ButtonLink,
  Chip,
  ChipRow,
  Eyebrow,
  Lead,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { JsonLd } from "@/components/json-ld"
import { LinkedInButton } from "@/components/linkedin-button"
import { RecommendationsList } from "@/components/recommendations-list"
import { getDictionary } from "@/data/i18n"
import { isLocale, resumePdfPath } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema"
import { siteEmailHref } from "@/lib/site"

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
    imagePath: SEO_IMAGE_PATHS.experience,
    imageAlt: `${dictionary.pages.experience.metadataTitle} social preview`,
    keywords: [...dictionary.pages.home.keywords]
  })
}

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui
  const experiencePage = dictionary.pages.experience
  const experienceTimeline = dictionary.content.experienceTimeline
  const recommendations = dictionary.content.recommendations
  const currentCompany = experienceTimeline[0]
  const currentRole = currentCompany?.roles[0]
  const focusAreas = dictionary.content.focusAreas.slice(0, 5)

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.experience, url: absoluteUrl(`/${locale}/experience`) }
  ])

  return (
    <SectionStack>
      <JsonLd id="experience-breadcrumb-jsonld" data={breadcrumbs} />
      <JsonLd id="experience-person-jsonld" data={personJsonLd(locale)} />

      <Surface as="section" className="experience-hero" aria-labelledby="experience-title">
        <div className="experience-hero-grid">
          <PageHeader className="experience-page-header">
            <Eyebrow>{ui.nav.experience}</Eyebrow>
            <h1 id="experience-title">{ui.sections.experience}</h1>
            <Lead>{experiencePage.lead}</Lead>
          </PageHeader>

          {currentCompany && currentRole ? (
            <aside className="experience-current" aria-label={experiencePage.currentRoleLabel}>
              <p className="card-meta">{experiencePage.currentRoleLabel}</p>
              <p className="experience-current-role">{currentRole.title}</p>
              <p className="muted">
                {currentCompany.company} | {currentRole.period}
              </p>
            </aside>
          ) : null}
        </div>

        <div className="experience-overview" aria-label={experiencePage.overviewHeading}>
          <div className="experience-focus">
            <p className="card-meta">{experiencePage.focusLabel}</p>
            <ChipRow>
              {focusAreas.map((area) => (
                <Chip key={area}>{area}</Chip>
              ))}
            </ChipRow>
          </div>

          <dl className="experience-stats">
            <div>
              <dt>{recommendations.length}</dt>
              <dd>{experiencePage.statsLabels.recommendations}</dd>
            </div>
          </dl>
        </div>

        <div className="experience-actions">
          <ButtonLink href={resumePdfPath(locale)} target="_blank" rel="noreferrer">
            {ui.cta.downloadResume}
            <span className="sr-only"> ({experiencePage.opensInNewTabLabel})</span>
          </ButtonLink>
          <ButtonLink variant="secondary" href={siteEmailHref(locale)}>
            {ui.cta.contact}
          </ButtonLink>
          <LinkedInButton
            label={ui.cta.linkedin}
            opensInNewTabLabel={experiencePage.opensInNewTabLabel}
          />
        </div>
      </Surface>

      <Surface as="section" aria-labelledby="experience-timeline-title">
        <div className="experience-section-header">
          <h2 id="experience-timeline-title" className="experience-section-title">
            {experiencePage.timelineHeading}
          </h2>
        </div>
        <ExperienceTimeline
          items={experienceTimeline}
          ariaLabel={ui.labels.experienceTimelineAria}
          collapsibleCompanies
          latestRoleLabel={experiencePage.latestRoleLabel}
        />
      </Surface>

      <Surface as="section" aria-labelledby="experience-recommendations-title">
        <div className="experience-section-header">
          <h2 id="experience-recommendations-title" className="experience-section-title">
            {experiencePage.recommendationsHeading}
          </h2>
          <p className="recommendations-lead">{experiencePage.recommendationsLead}</p>
        </div>
        <RecommendationsList
          items={recommendations}
          viewProfileLabel={experiencePage.viewProfileLabel}
          opensInNewTabLabel={experiencePage.opensInNewTabLabel}
        />
      </Surface>
    </SectionStack>
  )
}
