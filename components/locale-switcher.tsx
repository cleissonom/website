import { LOCALES, type Locale } from "@/lib/i18n"

export function LocaleSwitcher({ currentLocale, label }: { currentLocale: Locale; label: string }) {
  return (
    <div className="locale-switcher" role="group" aria-label={label}>
      {LOCALES.map((locale) => {
        const isCurrent = locale === currentLocale

        return (
          <a
            key={locale}
            href={`/${locale}`}
            className={`locale-option${isCurrent ? " locale-option-active" : ""}`}
            aria-current={isCurrent ? "true" : undefined}
          >
            {locale}
          </a>
        )
      })}
    </div>
  )
}
