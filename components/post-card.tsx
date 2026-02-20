import { Card, Chip, ChipRow, InlineLink } from "@/components/design-system"
import type { BlogEntry } from "@/lib/content"
import type { Locale } from "@/lib/i18n"

export function PostCard({
  post,
  locale,
  readMoreLabel,
  readMoreAboutPrefix,
  readingMinutesLabel
}: {
  post: BlogEntry
  locale: Locale
  readMoreLabel: string
  readMoreAboutPrefix: string
  readingMinutesLabel: string
}) {
  const contextLabel = `${readMoreAboutPrefix} ${post.title}`
  const descriptiveLabel = `${readMoreLabel} ${contextLabel}`

  return (
    <Card>
      <p className="card-meta">
        {new Date(post.date).toLocaleDateString(locale, {
          year: "numeric",
          month: "short",
          day: "numeric"
        })}
        {` | ${post.readingTimeMinutes} ${readingMinutesLabel}`}
      </p>
      <h3>
        <a href={`/${locale}/blog/${post.slug}`}>{post.title}</a>
      </h3>
      <p>{post.summary}</p>
      <ChipRow>
        {post.tags.map((tag) => (
          <Chip key={`${post.slug}-${tag}`}>{tag}</Chip>
        ))}
      </ChipRow>
      <InlineLink href={`/${locale}/blog/${post.slug}`} aria-label={descriptiveLabel}>
        {readMoreLabel}
        <span className="sr-only"> {contextLabel}</span>
      </InlineLink>
    </Card>
  )
}
