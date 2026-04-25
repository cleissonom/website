import { ButtonLink, MutedText } from "@/components/design-system"
import { uiByLocale } from "@/data/i18n"
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n"

type NotFoundProps = {
  params?: {
    locale?: string
  }
}

function localeFromParams(value?: string): Locale {
  if (value && LOCALES.includes(value as Locale)) {
    return value as Locale
  }

  return DEFAULT_LOCALE
}

export default function LocaleNotFound({ params }: NotFoundProps) {
  const locale = localeFromParams(params?.locale)
  const ui = uiByLocale[locale]

  return (
    <main className="not-found">
      <h1>{ui.labels.notFoundTitle}</h1>
      <MutedText>{ui.labels.notFoundDescription}</MutedText>
      <div className="not-found-actions">
        <ButtonLink href={`/${locale}`}>{ui.labels.goHome}</ButtonLink>
        <ButtonLink variant="secondary" href={`/${locale}/experience`}>
          {ui.nav.experience}
        </ButtonLink>
        <ButtonLink variant="ghost" href={`/${locale}/projects`}>
          {ui.nav.projects}
        </ButtonLink>
      </div>
    </main>
  )
}
