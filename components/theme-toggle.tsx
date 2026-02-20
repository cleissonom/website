type ThemeToggleProps = {
  lightLabel: string
  darkLabel: string
}

export function ThemeToggle({ lightLabel, darkLabel }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="ghost-button js-theme-toggle"
      data-light-label={lightLabel}
      data-dark-label={darkLabel}
      aria-label={darkLabel}
      suppressHydrationWarning
    >
      {darkLabel}
    </button>
  )
}
