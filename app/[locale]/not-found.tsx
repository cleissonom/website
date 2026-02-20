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
      <ButtonLink href={`/${locale}`}>{ui.labels.goHome}</ButtonLink>
    </main>
  )
}
