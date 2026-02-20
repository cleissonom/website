import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { JsonLd } from "@/components/json-ld"
import { getDictionary } from "@/data/i18n"
import { getAllPostSlugs, getPostBySlug } from "@/lib/content"
import { LOCALES, isLocale } from "@/lib/i18n"
import { absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
import { blogPostJsonLd, breadcrumbJsonLd } from "@/lib/schema"

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getAllPostSlugs(locale).map((slug) => ({
      locale,
      slug
    }))
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dictionary = getDictionary(locale)
  const post = getPostBySlug(locale, slug)
  if (!post) {
    return createMetadata(locale, {
      title: buildPageTitle(dictionary.pages.blog.notFoundTitle),
      description: dictionary.pages.blog.notFoundDescription,
      path: "/blog"
    })
  }

  return createMetadata(locale, {
    title: buildPageTitle(post.title),
    description: post.summary,
    path: `/blog/${post.slug}`,
    keywords: post.tags
  })
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui
  const post = getPostBySlug(locale, slug)

  if (!post) {
    notFound()
  }

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.blog, url: absoluteUrl(`/${locale}/blog`) },
    { name: post.title, url: absoluteUrl(`/${locale}/blog/${post.slug}`) }
  ])

  return (
    <article className="section-stack">
      <JsonLd id="blog-post-jsonld" data={blogPostJsonLd(locale, post)} />
      <JsonLd id="blog-post-breadcrumb-jsonld" data={breadcrumbs} />

      <header className="page-header">
        <p className="eyebrow">{ui.nav.blog}</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.summary}</p>
        <p className="muted">
          {ui.labels.published}: {new Date(post.date).toLocaleDateString(locale)}
          {post.updatedAt
            ? ` | ${ui.labels.updated}: ${new Date(post.updatedAt).toLocaleDateString(locale)}`
            : ""}
        </p>
      </header>

      <section className="surface markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </section>

      <a className="inline-link" href={`/${locale}/blog`}>
        {ui.labels.backToBlog}
      </a>
    </article>
  )
}
