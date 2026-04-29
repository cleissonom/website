type ThemeToggleProps = {
  lightLabel: string
  darkLabel: string
}

export function ThemeToggle({ lightLabel, darkLabel }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="ghost-button js-theme-toggle"
      aria-label={darkLabel}
      data-light-label={lightLabel}
      data-dark-label={darkLabel}
      suppressHydrationWarning
    >
      {darkLabel}
    </button>
  )
}
