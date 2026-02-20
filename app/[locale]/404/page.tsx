import { notFound } from "next/navigation"

import { getDictionary } from "@/data/i18n"
import { isLocale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, buildPageTitle, createMetadata } from "@/lib/metadata"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dictionary = getDictionary(locale)

  return createMetadata(locale, {
    title: buildPageTitle(dictionary.pages.notFound.metadataTitle),
    description: dictionary.pages.notFound.metadataDescription,
    path: "/404",
    imagePath: SEO_IMAGE_PATHS.default,
    imageAlt: `${dictionary.pages.notFound.metadataTitle} social preview`
  })
}

export default async function Localized404Page({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui

  return (
    <main className="not-found">
      <h1>{ui.labels.notFoundTitle}</h1>
      <p className="muted">{ui.labels.notFoundDescription}</p>
      <a href={`/${locale}`} className="primary-button">
        {ui.labels.goHome}
      </a>
    </main>
  )
}
