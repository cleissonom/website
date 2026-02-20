"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import type { UiDictionary } from "@/data/profile"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Locale } from "@/lib/i18n"
import { siteIdentity } from "@/data/profile"

export function Header({ locale, ui }: { locale: Locale; ui: UiDictionary }) {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const threshold = 6

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        setIsVisible(true)
        lastScrollY.current = 0
        return
      }

      const delta = currentScrollY - lastScrollY.current
      if (Math.abs(delta) < threshold) {
        return
      }

      setIsVisible(delta < 0)
      lastScrollY.current = currentScrollY
    }

    lastScrollY.current = window.scrollY
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const rootPath = `/${locale}`
  const normalizedPathname =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname

  const navItems = [
    {
      href: rootPath,
      label: ui.nav.home,
      isActive: normalizedPathname === rootPath
    },
    {
      href: `${rootPath}/projects`,
      label: ui.nav.projects,
      isActive:
        normalizedPathname === `${rootPath}/projects` ||
        normalizedPathname.startsWith(`${rootPath}/projects/`)
    },
    {
      href: `${rootPath}/blog`,
      label: ui.nav.blog,
      isActive:
        normalizedPathname === `${rootPath}/blog` ||
        normalizedPathname.startsWith(`${rootPath}/blog/`)
    },
    {
      href: `${rootPath}/resume`,
      label: ui.nav.resume,
      isActive:
        normalizedPathname === `${rootPath}/resume` ||
        normalizedPathname.startsWith(`${rootPath}/resume/`)
    }
  ]

  return (
    <header className={`site-header ${isVisible ? "site-header-visible" : "site-header-hidden"}`}>
      <div className="container header-grid">
        <a href={rootPath} className="nameplate">
          <span>{siteIdentity.name}</span>
          <small>{siteIdentity.shortTitle}</small>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`site-nav-link${item.isActive ? " site-nav-link-active" : ""}`}
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LocaleSwitcher currentLocale={locale} label={ui.labels.locale} />
          <ThemeToggle lightLabel={ui.labels.light} darkLabel={ui.labels.dark} />
        </div>
      </div>
    </header>
  )
}
