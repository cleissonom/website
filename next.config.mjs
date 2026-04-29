import bundleAnalyzer from "@next/bundle-analyzer"

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
]

const immutableAssetHeaders = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
]

const stableImageHeaders = [
  { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }
]

const iconAssetSources = [
  "/apple-touch-icon-dark.png",
  "/apple-touch-icon-light.png",
  "/favicon-32x32-dark.png",
  "/favicon-32x32-light.png",
  "/favicon-48x48.png",
  "/favicon-48x48-dark.png",
  "/favicon-48x48-light.png",
  "/favicon-96x96.png",
  "/favicon-96x96-dark.png",
  "/favicon-96x96-light.png",
  "/favicon-dark.png",
  "/favicon-dark.svg",
  "/favicon-light.png",
  "/favicon-light.svg",
  "/favicon.ico"
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  experimental: {
    inlineCss: true
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      },
      {
        source: "/seo/:path*",
        headers: immutableAssetHeaders
      },
      {
        source: "/about/profile.webp",
        headers: stableImageHeaders
      },
      {
        source: "/projects/website.webp",
        headers: stableImageHeaders
      },
      ...iconAssetSources.map((source) => ({
        source,
        headers: immutableAssetHeaders
      }))
    ]
  }
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
})

export default withBundleAnalyzer(nextConfig)
