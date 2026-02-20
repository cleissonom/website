import { LocaleFlag } from "@/components/locale-flag"
import { LOCALES, LOCALE_OPTIONS, type Locale } from "@/lib/i18n"

export function LocaleSwitcher({ currentLocale, label }: { currentLocale: Locale; label: string }) {
  const currentOption = LOCALE_OPTIONS[currentLocale]

  return (
    <details className="locale-dropdown js-locale-switcher">
      <summary className="locale-dropdown-trigger" aria-label={label}>
        <span className="locale-dropdown-current">
          <LocaleFlag locale={currentLocale} />
          <span>{currentOption.shortLabel}</span>
        </span>
        <svg className="locale-caret" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M4 6l4 4 4-4" />
        </svg>
      </summary>

      <ul className="locale-dropdown-menu" role="listbox" aria-label={label}>
        {LOCALES.map((locale) => {
          const isCurrent = locale === currentLocale
          const option = LOCALE_OPTIONS[locale]
          const href = `/${locale}`

          return (
            <li key={locale}>
              <a
                href={href}
                className={`locale-dropdown-option js-locale-option${isCurrent ? " locale-dropdown-option-active" : ""}`}
                data-target-locale={locale}
                aria-current={isCurrent ? "true" : undefined}
              >
                <LocaleFlag locale={locale} />
                <span>{option.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
