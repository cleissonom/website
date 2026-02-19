import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteIdentity, uiByLocale } from "@/data/profile";
import { LOCALES, isLocale } from "@/lib/i18n";
import { buildPageTitle, createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return createMetadata(locale, {
    title: buildPageTitle(siteIdentity.name),
    description: siteIdentity.headline,
    path: "/"
  });
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const ui = uiByLocale[locale];

  return (
    <>
      <Header locale={locale} ui={ui} />
      <main className="site-main container">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
