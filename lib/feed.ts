import type { BlogEntry } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type FeedItem = {
  id: string;
  title: string;
  summary: string;
  date: string;
  updatedAt?: string;
  url: string;
  locale: string;
};

export function toFeedItems(posts: BlogEntry[]): FeedItem[] {
  return posts.map((post) => ({
    id: `${post.locale}:${post.slug}`,
    title: post.title,
    summary: post.summary,
    date: post.date,
    updatedAt: post.updatedAt,
    url: absoluteUrl(`/${post.locale}/blog/${post.slug}`),
    locale: post.locale
  }));
}

export function buildRss(items: FeedItem[]): string {
  const content = items
    .map(
      (item) => `
      <item>
        <guid>${escapeXml(item.id)}</guid>
        <title>${escapeXml(item.title)}</title>
        <link>${escapeXml(item.url)}</link>
        <description>${escapeXml(item.summary)}</description>
        <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>${escapeXml(`${SITE_NAME} writing feed`)}</description>${content}
  </channel>
</rss>`;
}

export function buildAtom(items: FeedItem[]): string {
  const updated = items[0]?.updatedAt ?? items[0]?.date ?? new Date().toISOString();

  const content = items
    .map(
      (item) => `
  <entry>
    <id>${escapeXml(item.id)}</id>
    <title>${escapeXml(item.title)}</title>
    <updated>${new Date(item.updatedAt ?? item.date).toISOString()}</updated>
    <published>${new Date(item.date).toISOString()}</published>
    <link href="${escapeXml(item.url)}"/>
    <summary>${escapeXml(item.summary)}</summary>
  </entry>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${escapeXml(SITE_URL)}</id>
  <title>${escapeXml(SITE_NAME)}</title>
  <updated>${new Date(updated).toISOString()}</updated>
  <link href="${escapeXml(SITE_URL)}"/>${content}
</feed>`;
}

export function buildJsonFeed(items: FeedItem[]): string {
  return JSON.stringify(
    {
      version: "https://jsonfeed.org/version/1.1",
      title: `${SITE_NAME} Blog`,
      home_page_url: SITE_URL,
      feed_url: absoluteUrl("/feed.json"),
      items: items.map((item) => ({
        id: item.id,
        url: item.url,
        title: item.title,
        summary: item.summary,
        date_published: new Date(item.date).toISOString(),
        date_modified: new Date(item.updatedAt ?? item.date).toISOString(),
        language: item.locale
      }))
    },
    null,
    2
  );
}
