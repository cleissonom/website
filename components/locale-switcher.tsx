"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

import { LOCALE_COOKIE_NAME, LOCALES, type Locale } from "@/lib/i18n";
import { resolveLocaleSwitchPath } from "@/lib/route-availability";

const ONE_YEAR = 60 * 60 * 24 * 365;

export function LocaleSwitcher({ currentLocale, label }: { currentLocale: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <div className="locale-switcher" role="group" aria-label={label}>
      {LOCALES.map((locale) => {
        const href = resolveLocaleSwitchPath(pathname, locale) as Route;
        const isCurrent = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={href}
            className={`locale-option${isCurrent ? " locale-option-active" : ""}`}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
            }}
            aria-current={isCurrent ? "true" : undefined}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
