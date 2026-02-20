import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"

import { SiteMain } from "@/components/design-system"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { getDictionary } from "@/data/i18n"
import { siteIdentity } from "@/data/profile"
import { LOCALES, isLocale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, buildPageTitle, createMetadata } from "@/lib/metadata"

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
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
    imageAlt: `${siteIdentity.name} homepage preview`
  })
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)

  return (
    <>
      <Header locale={locale} ui={dictionary.ui} shortTitle={dictionary.site.shortTitle} />
      <SiteMain>{children}</SiteMain>
      <Footer
        locale={locale}
        resumeLabel={dictionary.ui.nav.resume}
        contactLabel={dictionary.ui.cta.contact}
      />
    </>
  )
}
