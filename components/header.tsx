import type { UiDictionary } from "@/data/profile"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Locale } from "@/lib/i18n"
import { siteIdentity } from "@/data/profile"

export function Header({ locale, ui }: { locale: Locale; ui: UiDictionary }) {
  return (
    <header className="site-header">
      <div className="container header-grid">
        <a href={`/${locale}`} className="nameplate">
          <span>{siteIdentity.name}</span>
          <small>{siteIdentity.shortTitle}</small>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href={`/${locale}`}>{ui.nav.home}</a>
          <a href={`/${locale}/projects`}>{ui.nav.projects}</a>
          <a href={`/${locale}/blog`}>{ui.nav.blog}</a>
          <a href={`/${locale}/resume`}>{ui.nav.resume}</a>
        </nav>

        <div className="header-actions">
          <LocaleSwitcher currentLocale={locale} label={ui.labels.locale} />
          <ThemeToggle lightLabel={ui.labels.light} darkLabel={ui.labels.dark} />
        </div>
      </div>
    </header>
  )
}
