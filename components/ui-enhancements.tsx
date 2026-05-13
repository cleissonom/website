"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import { THEME_COOKIE_KEY, type Theme, parseTheme } from "@/lib/theme"

type SlugIndex = Record<string, string[]>
type ThemeToggleWindow = Window & {
  __themeToggleBound?: boolean
}

type UiEnhancementsProps = {
  locales: readonly string[]
  projectSlugsByLocale: SlugIndex
  blogSlugsByLocale: SlugIndex
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/"
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`
  return normalized.length > 1 && normalized.endsWith("/") ? normalized.slice(0, -1) : normalized
}

function isLocale(value: string, locales: readonly string[]): boolean {
  return locales.includes(value)
}

function pathWithoutLocale(pathname: string, locales: readonly string[]): string {
  const normalized = normalizePath(pathname)
  const segments = normalized.split("/").filter(Boolean)

  if (segments.length === 0) {
    return "/"
  }

  if (isLocale(segments[0], locales)) {
    return segments.length === 1 ? "/" : `/${segments.slice(1).join("/")}`
  }

  return normalized
}

function localePath(locale: string, path: string): string {
  if (path === "/") {
    return `/${locale}`
  }

  return `/${locale}${path}`
}

function resolveLocaleSwitchPath(
  pathname: string,
  targetLocale: string,
  locales: readonly string[],
  projectSlugsByLocale: SlugIndex,
  blogSlugsByLocale: SlugIndex
): string {
  const path = pathWithoutLocale(pathname, locales)
  if (path === "/") {
    return localePath(targetLocale, "/")
  }

  const segments = path.split("/").filter(Boolean)
  if (segments.length === 1) {
    const top = segments[0]
    if (top === "projects" || top === "blog" || top === "resume" || top === "experience") {
      return localePath(targetLocale, `/${top}`)
    }

    return localePath(targetLocale, "/")
  }

  if (segments.length >= 2 && segments[0] === "projects") {
    const projectSlug = segments[1]
    const slugs = projectSlugsByLocale[targetLocale] ?? []
    return slugs.includes(projectSlug)
      ? localePath(targetLocale, `/projects/${projectSlug}`)
      : localePath(targetLocale, "/")
  }

  if (segments.length >= 2 && segments[0] === "blog") {
    const blogSlug = segments[1]
    const slugs = blogSlugsByLocale[targetLocale] ?? []
    return slugs.includes(blogSlug)
      ? localePath(targetLocale, `/blog/${blogSlug}`)
      : localePath(targetLocale, "/")
  }

  return localePath(targetLocale, "/")
}

function updateLocaleSwitcher(
  pathname: string,
  locales: readonly string[],
  projectSlugsByLocale: SlugIndex,
  blogSlugsByLocale: SlugIndex
): void {
  const segments = pathname.split("/").filter(Boolean)
  const currentLocale = segments.length > 0 && isLocale(segments[0], locales) ? segments[0] : null
  const localeOptions = document.querySelectorAll(".js-locale-option")

  for (const option of localeOptions) {
    if (!(option instanceof HTMLAnchorElement)) {
      continue
    }

    const targetLocale = option.getAttribute("data-target-locale")
    if (!targetLocale || !isLocale(targetLocale, locales)) {
      continue
    }

    option.setAttribute(
      "href",
      resolveLocaleSwitchPath(
        pathname,
        targetLocale,
        locales,
        projectSlugsByLocale,
        blogSlugsByLocale
      )
    )

    const isCurrent = targetLocale === currentLocale
    option.classList.toggle("locale-dropdown-option-active", isCurrent)
    if (isCurrent) {
      option.setAttribute("aria-current", "true")
    } else {
      option.removeAttribute("aria-current")
    }
  }
}

function updateActiveNav(pathname: string): void {
  const navLinks = document.querySelectorAll(".js-site-nav-link")

  for (const link of navLinks) {
    if (!(link instanceof HTMLAnchorElement)) {
      continue
    }

    const href = link.getAttribute("href") ?? "/"
    const hrefPath = normalizePath(new URL(href, window.location.origin).pathname)
    const navKey = link.getAttribute("data-nav-key")
    const isHome = navKey === "home"
    const isActive = isHome
      ? pathname === hrefPath || pathname === "/"
      : pathname === hrefPath || pathname.startsWith(`${hrefPath}/`)

    link.classList.toggle("site-nav-link-active", isActive)
    if (isActive) {
      link.setAttribute("aria-current", "page")
    } else {
      link.removeAttribute("aria-current")
    }
  }
}

function readThemeFromCookie(): Theme | null {
  const cookieValue = `; ${document.cookie}`
  const parts = cookieValue.split(`; ${THEME_COOKIE_KEY}=`)
  if (parts.length !== 2) {
    return null
  }

  return parseTheme(decodeURIComponent(parts.pop()?.split(";").shift() ?? ""))
}

function preferredTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function updateThemeToggleLabel(theme: Theme): void {
  const buttons = document.querySelectorAll(".js-theme-toggle")

  for (const button of buttons) {
    if (!(button instanceof HTMLButtonElement)) {
      continue
    }

    const lightLabel = button.getAttribute("data-light-label") ?? ""
    const darkLabel = button.getAttribute("data-dark-label") ?? ""
    const label = theme === "dark" ? lightLabel : darkLabel
    button.setAttribute("aria-label", label)
    button.textContent = label
  }
}

function applyTheme(theme: Theme, persistCookie: boolean): void {
  document.documentElement.setAttribute("data-theme", theme)
  if (persistCookie) {
    document.cookie = `${THEME_COOKIE_KEY}=${encodeURIComponent(theme)}; path=/; max-age=31536000; samesite=lax`
  }

  updateThemeToggleLabel(theme)
}

function syncThemePreference(): void {
  applyTheme(readThemeFromCookie() ?? preferredTheme(), false)
}

function setupThemeToggle(): () => void {
  const themeWindow = window as ThemeToggleWindow
  if (themeWindow.__themeToggleBound === true) {
    return () => {}
  }

  const handleClick = (event: MouseEvent) => {
    const target = event.target
    if (!(target instanceof Element)) {
      return
    }

    const toggle = target.closest(".js-theme-toggle")
    if (!(toggle instanceof HTMLButtonElement)) {
      return
    }

    const currentTheme =
      document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"
    applyTheme(currentTheme === "dark" ? "light" : "dark", true)
  }

  window.addEventListener("click", handleClick)
  themeWindow.__themeToggleBound = true

  return () => {
    window.removeEventListener("click", handleClick)
    themeWindow.__themeToggleBound = false
  }
}

function setupHeaderVisibility(): () => void {
  const header = document.querySelector(".js-site-header")
  if (!(header instanceof HTMLElement)) {
    return () => {}
  }

  const threshold = 6
  let lastScrollY = window.scrollY

  const setVisibility = (isVisible: boolean) => {
    header.classList.toggle("site-header-visible", isVisible)
    header.classList.toggle("site-header-hidden", !isVisible)
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY <= 0) {
      setVisibility(true)
      lastScrollY = 0
      return
    }

    const delta = currentScrollY - lastScrollY
    if (Math.abs(delta) < threshold) {
      return
    }

    setVisibility(delta < 0)
    lastScrollY = currentScrollY
  }

  setVisibility(true)
  window.addEventListener("scroll", handleScroll, { passive: true })

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}

export function UiEnhancements({
  locales,
  projectSlugsByLocale,
  blogSlugsByLocale
}: UiEnhancementsProps) {
  const pathname = usePathname()

  useEffect(() => {
    const normalizedPath = normalizePath(pathname ?? "/")
    syncThemePreference()
    updateLocaleSwitcher(normalizedPath, locales, projectSlugsByLocale, blogSlugsByLocale)
    updateActiveNav(normalizedPath)
  }, [pathname, locales, projectSlugsByLocale, blogSlugsByLocale])

  useEffect(() => setupHeaderVisibility(), [])
  useEffect(() => setupThemeToggle(), [])

  return null
}
