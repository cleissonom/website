import { BLOG_SLUGS_BY_LOCALE, PROJECT_SLUGS_BY_LOCALE } from "@/data/content-index";
import { normalizePath, pathWithoutLocale, type Locale } from "@/lib/i18n";

export function resolveLocaleSwitchPath(pathname: string, targetLocale: Locale): string {
  const normalized = normalizePath(pathname);
  const path = pathWithoutLocale(normalized);

  if (path === "/") {
    return `/${targetLocale}`;
  }

  const segments = path.split("/").filter(Boolean);

  if (segments.length === 1) {
    const [top] = segments;
    if (["projects", "blog", "resume"].includes(top)) {
      return `/${targetLocale}/${top}`;
    }

    return `/${targetLocale}`;
  }

  if (segments.length >= 2 && segments[0] === "projects") {
    const slug = segments[1];
    if (PROJECT_SLUGS_BY_LOCALE[targetLocale].includes(slug)) {
      return `/${targetLocale}/projects/${slug}`;
    }
    return `/${targetLocale}`;
  }

  if (segments.length >= 2 && segments[0] === "blog") {
    const slug = segments[1];
    if (BLOG_SLUGS_BY_LOCALE[targetLocale].includes(slug)) {
      return `/${targetLocale}/blog/${slug}`;
    }
    return `/${targetLocale}`;
  }

  return `/${targetLocale}`;
}
