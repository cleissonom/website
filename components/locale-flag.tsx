import type { Locale } from "@/lib/i18n"

type LocaleFlagProps = {
  locale: Locale
}

export function LocaleFlag({ locale }: LocaleFlagProps) {
  if (locale === "en-US") {
    return (
      <svg className="locale-flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
        <rect width="24" height="16" fill="#b22234" />
        <rect y="2" width="24" height="2" fill="#ffffff" />
        <rect y="6" width="24" height="2" fill="#ffffff" />
        <rect y="10" width="24" height="2" fill="#ffffff" />
        <rect y="14" width="24" height="2" fill="#ffffff" />
        <rect width="11" height="9" fill="#3c3b6e" />
      </svg>
    )
  }

  if (locale === "pt-BR") {
    return (
      <svg className="locale-flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
        <rect width="24" height="16" fill="#009739" />
        <polygon points="12,2 21,8 12,14 3,8" fill="#ffcd00" />
        <circle cx="12" cy="8" r="3.2" fill="#002776" />
      </svg>
    )
  }

  return (
    <svg className="locale-flag" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
      <rect width="24" height="16" fill="#aa151b" />
      <rect y="4" width="24" height="8" fill="#f1bf00" />
    </svg>
  )
}
