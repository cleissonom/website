import type { Theme } from "@/lib/theme"

type ThemeToggleProps = {
  lightLabel: string
  darkLabel: string
  initialTheme: Theme
}

export function ThemeToggle({ lightLabel, darkLabel, initialTheme }: ThemeToggleProps) {
  const nextLabel = initialTheme === "dark" ? lightLabel : darkLabel

  return (
    <button
      type="button"
      className="ghost-button js-theme-toggle"
      aria-label={nextLabel}
      data-light-label={lightLabel}
      data-dark-label={darkLabel}
    >
      {nextLabel}
    </button>
  )
}
