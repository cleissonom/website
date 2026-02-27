"use client"

import { useState } from "react"

import { THEME_COOKIE_KEY, type Theme } from "@/lib/theme"

type ThemeToggleProps = {
  lightLabel: string
  darkLabel: string
  initialTheme: Theme
}

export function ThemeToggle({ lightLabel, darkLabel, initialTheme }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", nextTheme)
    document.cookie = `${THEME_COOKIE_KEY}=${encodeURIComponent(nextTheme)}; path=/; max-age=31536000; samesite=lax`
    setTheme(nextTheme)
  }

  const nextLabel = theme === "dark" ? lightLabel : darkLabel

  return (
    <button type="button" className="ghost-button" aria-label={nextLabel} onClick={toggleTheme}>
      {nextLabel}
    </button>
  )
}
