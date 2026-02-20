import { uiByLocale } from "@/data/profile"
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
      <p className="muted">{ui.labels.notFoundDescription}</p>
      <a className="primary-button" href={`/${locale}`}>
        {ui.labels.goHome}
      </a>
    </main>
  )
}
