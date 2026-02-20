import { notFound } from "next/navigation";

import { aboutByLocale, siteIdentity, uiByLocale } from "@/data/profile";
import { isLocale, resumePdfPath } from "@/lib/i18n";
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
    title: buildPageTitle("Resume"),
    description: "Resume overview with direct PDF download and contact links.",
    path: "/resume"
  });
}

export default async function ResumePage({
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
    <section className="section-stack">
      <header className="page-header">
        <p className="eyebrow">{ui.nav.resume}</p>
        <h1>{siteIdentity.name}</h1>
        <p className="lead">{aboutByLocale[locale][0]}</p>
      </header>

      <article className="surface">
        <p>
          {siteIdentity.shortTitle} focused on backend systems, cloud infrastructure, and scalable product delivery.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={resumePdfPath(locale)} target="_blank" rel="noreferrer">
            {ui.cta.downloadResume}
          </a>
          <a className="secondary-button" href={siteIdentity.links.email}>
            {ui.cta.contact}
          </a>
        </div>
      </article>
    </section>
  );
}
