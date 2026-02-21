import type { MetadataRoute } from "next"

import { SITE_NAME, SITE_SHORT_TITLE } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_TITLE,
    description:
      "Senior Software Engineer focused on backend systems, cloud infrastructure, and scalable software.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0D10",
    theme_color: "#0B0D10",
    lang: "en-US",
    scope: "/",
    icons: [
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon-light.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  }
}
