import { getAllPostsForFeeds } from "@/lib/content";
import { buildJsonFeed, toFeedItems } from "@/lib/feed";

export const revalidate = 3600;

export function GET() {
  const posts = getAllPostsForFeeds();
  const feed = buildJsonFeed(toFeedItems(posts));

  return new Response(feed, {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
