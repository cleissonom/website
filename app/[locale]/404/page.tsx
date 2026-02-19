import Link from "next/link";
import { notFound } from "next/navigation";

import { uiByLocale } from "@/data/profile";
import { isLocale } from "@/lib/i18n";
import { buildPageTitle, createMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return createMetadata(locale, {
    title: buildPageTitle("404"),
    description: "Localized not found route.",
    path: "/404"
  });
}

export default async function Localized404Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const ui = uiByLocale[locale];

  return (
    <main className="not-found">
      <h1>{ui.labels.notFoundTitle}</h1>
      <p className="muted">{ui.labels.notFoundDescription}</p>
      <Link href={`/${locale}`} className="primary-button">
        {ui.labels.goHome}
      </Link>
    </main>
  );
}
