export const LOCALES = ["en-US", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en-US";
export const LOCALE_COOKIE_NAME = "locale";
export const RESUME_PDF_BY_LOCALE: Record<Locale, string> = {
  "en-US": "/resume.en-US.pdf",
  "pt-BR": "/resume.pt-BR.pdf"
};

const LOCALE_PATTERN = /^[a-z]{2}-[a-z]{2}$/i;

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && LOCALES.includes(value as Locale));
}

export function looksLikeLocale(value: string | null | undefined): boolean {
  return Boolean(value && LOCALE_PATTERN.test(value));
}

export function ensureLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized.length > 1 && normalized.endsWith("/")
    ? normalized.slice(0, -1)
    : normalized;
}

export function removeLocaleFromPath(pathname: string): string {
  const normalized = normalizePath(pathname);
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  if (isLocale(segments[0])) {
    const next = `/${segments.slice(1).join("/")}`;
    return next === "/" ? "/" : normalizePath(next);
  }

  return normalized;
}

export function toLocalePath(locale: Locale, pathname: string): string {
  const withoutLocale = removeLocaleFromPath(pathname);
  if (withoutLocale === "/") {
    return `/${locale}`;
  }

  return `/${locale}${withoutLocale}`;
}

export function buildLocalizedPath(locale: Locale, pathWithoutLocale = "/"): string {
  const normalized = normalizePath(pathWithoutLocale);
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function pathWithoutLocale(pathname: string): string {
  return removeLocaleFromPath(pathname);
}

export function resumePdfPath(locale: Locale): string {
  return RESUME_PDF_BY_LOCALE[locale];
}
