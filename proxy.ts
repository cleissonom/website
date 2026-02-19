import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  ensureLocale,
  isLocale,
  looksLikeLocale,
  toLocalePath,
  type Locale
} from "@/lib/i18n";

const PUBLIC_FILE = /\.[^/]+$/;

function preferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const lowered = acceptLanguage.toLowerCase();

  if (lowered.includes("pt-br") || lowered.startsWith("pt")) {
    return "pt-BR";
  }

  return DEFAULT_LOCALE;
}

function withLocaleCookie(response: NextResponse, locale: Locale): NextResponse {
  response.cookies.set({
    name: LOCALE_COOKIE_NAME,
    value: locale,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax"
  });

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const locale = preferredLocale(request);

  if (!firstSegment) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return withLocaleCookie(NextResponse.redirect(url), locale);
  }

  if (isLocale(firstSegment)) {
    return withLocaleCookie(NextResponse.next(), firstSegment);
  }

  if (looksLikeLocale(firstSegment)) {
    const url = request.nextUrl.clone();
    const rest = segments.slice(1).join("/");
    const suffix = rest ? `/${rest}` : "";
    url.pathname = `/${DEFAULT_LOCALE}${suffix}`;
    return withLocaleCookie(NextResponse.redirect(url), DEFAULT_LOCALE);
  }

  const url = request.nextUrl.clone();
  url.pathname = toLocalePath(ensureLocale(locale), pathname);
  return withLocaleCookie(NextResponse.redirect(url), locale);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
