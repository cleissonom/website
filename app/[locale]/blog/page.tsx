import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { PostCard } from "@/components/post-card";
import { uiByLocale } from "@/data/profile";
import { getAllPosts } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

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
    title: buildPageTitle("Blog"),
    description: "Writing on backend engineering, cloud infrastructure, and scalable architecture.",
    path: "/blog"
  });
}

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const ui = uiByLocale[locale];
  const posts = getAllPosts(locale);

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.blog, url: absoluteUrl(`/${locale}/blog`) }
  ]);

  return (
    <section className="section-stack">
      <JsonLd id="blog-breadcrumb-jsonld" data={breadcrumbs} />

      <header className="page-header">
        <p className="eyebrow">{ui.nav.blog}</p>
        <h1>{ui.sections.blog}</h1>
        <p className="lead">
          Notes from production engineering work: reliability, infrastructure, distributed systems, and delivery
          strategy.
        </p>
      </header>

      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} locale={locale} readMoreLabel={ui.labels.readMore} />
        ))}
      </div>
    </section>
  );
}
