"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

import { LOCALES, type Locale } from "@/lib/i18n";
import { resolveLocaleSwitchPath } from "@/lib/route-availability";

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
            aria-current={isCurrent ? "true" : undefined}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
