const PROJECT_IMAGE_VARIANTS: Record<string, { card: string; banner: string }> = {
  "/projects/accesstrace-overview.png": {
    card: "/images/generated/projects/accesstrace-overview.project-card.640.65b2bdb3bc73.jpeg",
    banner: "/images/generated/projects/accesstrace-overview.project-banner.1200.5eb6cd0f5378.jpeg"
  },
  "/projects/website.webp": {
    card: "/images/generated/projects/website.project-card.640.e1c08c280a80.jpeg",
    banner: "/images/generated/projects/website.project-banner.1200.a6d0d83ad763.jpeg"
  }
}

export function projectCardImage(src: string): string {
  return PROJECT_IMAGE_VARIANTS[src]?.card ?? src
}

export function projectBannerImage(src: string): string {
  return PROJECT_IMAGE_VARIANTS[src]?.banner ?? src
}
