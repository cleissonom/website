import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/app/globals.css"

import { ThemeScript } from "@/components/theme-script"
import { SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s"
  },
  description:
    "Senior Software Engineer focused on backend systems, cloud infrastructure, and scalable software.",
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon-48x48-light.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-48x48-dark.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/favicon-96x96-light.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-96x96-dark.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      },
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
      {
        url: "/favicon-32x32-light.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon-32x32-dark.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      }
    ],
    shortcut: "/favicon-light.svg",
    apple: [
      {
        url: "/apple-touch-icon-light.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/apple-touch-icon-dark.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)"
      }
    ]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" suppressHydrationWarning data-theme="light">
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  )
}
