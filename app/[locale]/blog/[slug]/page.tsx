import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import {
  Chip,
  ChipRow,
  Eyebrow,
  InlineLink,
  Lead,
  MutedText,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
import { JsonLd } from "@/components/json-ld"
import { getDictionary } from "@/data/i18n"
import { siteIdentity } from "@/data/profile"
import { getAllPostSlugs, getPostBySlug } from "@/lib/content"
import { LOCALES, isLocale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
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
      path: "/blog",
      imagePath: SEO_IMAGE_PATHS.blog,
      imageAlt: `${dictionary.pages.blog.metadataTitle} social preview`
    })
  }

  return createMetadata(locale, {
    title: buildPageTitle(post.title),
    description: post.summary,
    path: `/blog/${post.slug}`,
    imagePath: SEO_IMAGE_PATHS.blog,
    imageAlt: `${post.title} social preview`,
    openGraphType: "article",
    keywords: post.tags,
    authors: [siteIdentity.name],
    publishedTime: post.date,
    modifiedTime: post.updatedAt ?? post.date,
    canonicalUrl: post.canonicalUrl
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
    <SectionStack as="article">
      <JsonLd id="blog-post-jsonld" data={blogPostJsonLd(locale, post)} />
      <JsonLd id="blog-post-breadcrumb-jsonld" data={breadcrumbs} />

      <Surface as="section" className="article-hero" aria-labelledby="blog-post-title">
        <PageHeader className="article-hero-copy">
          <Eyebrow>{ui.nav.blog}</Eyebrow>
          <h1 id="blog-post-title">{post.title}</h1>
          <Lead>{post.summary}</Lead>
        </PageHeader>

        <div className="article-meta-row">
          <MutedText>
            {ui.labels.published}: {new Date(post.date).toLocaleDateString(locale)}
          </MutedText>
          {post.updatedAt ? (
            <MutedText>
              {ui.labels.updated}: {new Date(post.updatedAt).toLocaleDateString(locale)}
            </MutedText>
          ) : null}
          <MutedText>
            {post.readingTimeMinutes} {dictionary.snippets.readingMinutesShort}
          </MutedText>
        </div>

        <ChipRow>
          {post.tags.map((tag) => (
            <Chip key={`${post.slug}-${tag}`}>{tag}</Chip>
          ))}
        </ChipRow>
      </Surface>

      <Surface className="markdown content-prose article-prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </Surface>

      <nav className="detail-footer-nav" aria-label={ui.labels.backToBlog}>
        <InlineLink href={`/${locale}/blog`}>{ui.labels.backToBlog}</InlineLink>
      </nav>
    </SectionStack>
  )
}
