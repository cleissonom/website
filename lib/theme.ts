export const THEME_COOKIE_KEY = "theme"

export type Theme = "light" | "dark"

export function parseTheme(value: string | null | undefined): Theme | null {
  return value === "light" || value === "dark" ? value : null
}
