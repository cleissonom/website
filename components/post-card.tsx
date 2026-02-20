import type { BlogEntry } from "@/lib/content"
import type { Locale } from "@/lib/i18n"

export function PostCard({
  post,
  locale,
  readMoreLabel
}: {
  post: BlogEntry
  locale: Locale
  readMoreLabel: string
}) {
  const contextLabel = locale === "pt-BR" ? `sobre ${post.title}` : `about ${post.title}`
  const descriptiveLabel = `${readMoreLabel} ${contextLabel}`

  return (
    <article className="card">
      <p className="card-meta">
        {new Date(post.date).toLocaleDateString(locale, {
          year: "numeric",
          month: "short",
          day: "numeric"
        })}
        {` | ${post.readingTimeMinutes} min`}
      </p>
      <h3>
        <a href={`/${locale}/blog/${post.slug}`}>{post.title}</a>
      </h3>
      <p>{post.summary}</p>
      <div className="chip-row">
        {post.tags.map((tag) => (
          <span key={`${post.slug}-${tag}`} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <a
        className="inline-link"
        href={`/${locale}/blog/${post.slug}`}
        aria-label={descriptiveLabel}
      >
        {readMoreLabel}
        <span className="sr-only"> {contextLabel}</span>
      </a>
    </article>
  )
}
