import { getAllPostsForFeeds } from "@/lib/content";
import { buildRss, toFeedItems } from "@/lib/feed";

export const revalidate = 3600;

export function GET() {
  const posts = getAllPostsForFeeds();
  const feed = buildRss(toFeedItems(posts));

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
