"use client"

import { useState } from "react"

type ThemeToggleProps = {
  lightLabel: string
  darkLabel: string
}

const STORAGE_KEY = "theme"

function getSavedTheme(): "light" | "dark" | null {
  const cookieValue = `; ${document.cookie}`
  const parts = cookieValue.split(`; ${STORAGE_KEY}=`)
  if (parts.length !== 2) {
    return null
  }

  const saved = decodeURIComponent(parts.pop()?.split(";").shift() ?? "")
  return saved === "light" || saved === "dark" ? saved : null
}

export function ThemeToggle({ lightLabel, darkLabel }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") {
      return "light"
    }

    return (
      getSavedTheme() ??
      (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light")
    )
  })

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", nextTheme)
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(nextTheme)}; path=/; max-age=31536000; samesite=lax`
    setTheme(nextTheme)
  }

  const nextLabel = theme === "dark" ? lightLabel : darkLabel

  return (
    <button
      type="button"
      className="ghost-button"
      aria-label={nextLabel}
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      {nextLabel}
    </button>
  )
}
