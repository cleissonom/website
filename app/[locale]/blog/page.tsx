import { notFound } from "next/navigation"

import {
  Chip,
  ChipRow,
  Eyebrow,
  Grid,
  Lead,
  PageHeader,
  SectionStack,
  Surface
} from "@/components/design-system"
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
  const postLabels = Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b, locale, { sensitivity: "base" })
  )
  const latestPost = posts[0]

  const breadcrumbs = breadcrumbJsonLd([
    { name: ui.nav.home, url: absoluteUrl(`/${locale}`) },
    { name: ui.nav.blog, url: absoluteUrl(`/${locale}/blog`) }
  ])

  return (
    <SectionStack>
      <JsonLd id="blog-breadcrumb-jsonld" data={breadcrumbs} />

      <Surface as="section" className="page-overview" aria-labelledby="blog-title">
        <PageHeader className="page-overview-copy">
          <Eyebrow>{ui.nav.blog}</Eyebrow>
          <h1 id="blog-title">{ui.sections.blog}</h1>
          <Lead>{dictionary.pages.blog.lead}</Lead>
        </PageHeader>

        <dl className="metric-grid page-overview-metrics">
          <div>
            <dt>{posts.length}</dt>
            <dd>{ui.sections.blog}</dd>
          </div>
          <div>
            <dt>{postLabels.length}</dt>
            <dd>{ui.labels.topics}</dd>
          </div>
          <div>
            <dt>{latestPost ? new Date(latestPost.date).getFullYear() : "-"}</dt>
            <dd>{ui.labels.updated}</dd>
          </div>
        </dl>

        <ChipRow className="overview-chip-row">
          {postLabels.slice(0, 6).map((label) => (
            <Chip key={label}>{label}</Chip>
          ))}
        </ChipRow>
      </Surface>

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
