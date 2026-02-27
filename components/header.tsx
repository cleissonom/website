import { Container } from "@/components/design-system"
import type { Route } from "next"
import Link from "next/link"
import { cookies } from "next/headers"
import type { UiDictionary } from "@/data/i18n/types"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Locale } from "@/lib/i18n"
import { siteIdentity } from "@/data/profile"
import { THEME_COOKIE_KEY, parseTheme } from "@/lib/theme"

export async function Header({
  locale,
  ui,
  shortTitle
}: {
  locale: Locale
  ui: UiDictionary
  shortTitle: string
}) {
  const cookieStore = await cookies()
  const initialTheme = parseTheme(cookieStore.get(THEME_COOKIE_KEY)?.value) ?? "light"
  const rootPath = `/${locale}`

  const navItems = [
    {
      key: "home",
      href: rootPath,
      label: ui.nav.home
    },
    {
      key: "projects",
      href: `${rootPath}/projects`,
      label: ui.nav.projects
    },
    {
      key: "blog",
      href: `${rootPath}/blog`,
      label: ui.nav.blog
    },
    {
      key: "resume",
      href: `${rootPath}/resume`,
      label: ui.nav.resume
    }
  ]

  return (
    <header className="site-header site-header-visible js-site-header">
      <Container className="header-grid">
        <Link href={rootPath as Route} className="nameplate">
          <span>{siteIdentity.name}</span>
          <small>{shortTitle}</small>
        </Link>

        <nav className="site-nav js-site-nav" aria-label={ui.labels.mainNavigationAria}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as Route}
              className="site-nav-link js-site-nav-link"
              data-nav-key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LocaleSwitcher currentLocale={locale} label={ui.labels.locale} />
          <ThemeToggle
            lightLabel={ui.labels.light}
            darkLabel={ui.labels.dark}
            initialTheme={initialTheme}
          />
        </div>
      </Container>
    </header>
  )
}
