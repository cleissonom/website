import Link from "next/link";

import type { UiDictionary } from "@/data/profile";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Locale } from "@/lib/i18n";
import { siteIdentity } from "@/data/profile";

export function Header({ locale, ui }: { locale: Locale; ui: UiDictionary }) {
  return (
    <header className="site-header">
      <div className="container header-grid">
        <Link href={`/${locale}`} className="nameplate">
          <span>{siteIdentity.name}</span>
          <small>{siteIdentity.shortTitle}</small>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <Link href={`/${locale}`}>{ui.nav.home}</Link>
          <Link href={`/${locale}/projects`}>{ui.nav.projects}</Link>
          <Link href={`/${locale}/blog`}>{ui.nav.blog}</Link>
          <Link href={`/${locale}/resume`}>{ui.nav.resume}</Link>
        </nav>

        <div className="header-actions">
          <LocaleSwitcher currentLocale={locale} label={ui.labels.locale} />
          <ThemeToggle lightLabel={ui.labels.light} darkLabel={ui.labels.dark} />
        </div>
      </div>
    </header>
  );
}
