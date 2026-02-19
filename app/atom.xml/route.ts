import { getAllPostsForFeeds } from "@/lib/content";
import { buildAtom, toFeedItems } from "@/lib/feed";

export const revalidate = 3600;

export function GET() {
  const posts = getAllPostsForFeeds();
  const feed = buildAtom(toFeedItems(posts));

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
