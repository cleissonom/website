import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import {
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
    <SectionStack as="article">
      <JsonLd id="blog-post-jsonld" data={blogPostJsonLd(locale, post)} />
      <JsonLd id="blog-post-breadcrumb-jsonld" data={breadcrumbs} />

      <PageHeader>
        <Eyebrow>{ui.nav.blog}</Eyebrow>
        <h1>{post.title}</h1>
        <Lead>{post.summary}</Lead>
        <MutedText>
          {ui.labels.published}: {new Date(post.date).toLocaleDateString(locale)}
          {post.updatedAt
            ? ` | ${ui.labels.updated}: ${new Date(post.updatedAt).toLocaleDateString(locale)}`
            : ""}
        </MutedText>
      </PageHeader>

      <Surface className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </Surface>

      <InlineLink href={`/${locale}/blog`}>{ui.labels.backToBlog}</InlineLink>
    </SectionStack>
  )
}
