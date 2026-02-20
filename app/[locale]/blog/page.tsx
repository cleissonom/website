import { notFound } from "next/navigation"

import { Eyebrow, Grid, Lead, PageHeader, SectionStack } from "@/components/design-system"
import { JsonLd } from "@/components/json-ld"
import { PostCard } from "@/components/post-card"
import { getDictionary } from "@/data/i18n"
import { getAllPosts } from "@/lib/content"
import { isLocale } from "@/lib/i18n"
import { SEO_IMAGE_PATHS, absoluteUrl, buildPageTitle, createMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd } from "@/lib/schema"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dictionary = getDictionary(locale)

  return createMetadata(locale, {
    title: buildPageTitle(dictionary.pages.blog.metadataTitle),
    description: dictionary.pages.blog.metadataDescription,
    path: "/blog",
    imagePath: SEO_IMAGE_PATHS.blog,
    imageAlt: `${dictionary.pages.blog.metadataTitle} social preview`
  })
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const ui = dictionary.ui
  const posts = getAllPosts(locale)

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.blog, url: absoluteUrl(`/${locale}/blog`) }
  ])

  return (
    <SectionStack>
      <JsonLd id="blog-breadcrumb-jsonld" data={breadcrumbs} />

      <PageHeader>
        <Eyebrow>{ui.nav.blog}</Eyebrow>
        <h1>{ui.sections.blog}</h1>
        <Lead>{dictionary.pages.blog.lead}</Lead>
      </PageHeader>

      <Grid>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
            locale={locale}
            readMoreLabel={ui.labels.readMore}
            readMoreAboutPrefix={dictionary.snippets.readMoreAboutPrefix}
            readingMinutesLabel={dictionary.snippets.readingMinutesShort}
          />
        ))}
      </Grid>
    </SectionStack>
  )
}
