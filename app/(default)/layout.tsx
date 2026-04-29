import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "@/app/globals.css"

import { ThemeScript } from "@/components/theme-script"
import { rootMetadata } from "@/lib/metadata"

export const metadata = rootMetadata

export default function DefaultRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" suppressHydrationWarning data-theme="light">
      <body>
        <ThemeScript />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
