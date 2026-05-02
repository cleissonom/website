const PROJECT_IMAGE_VARIANTS: Record<string, { card: string; banner: string }> = {
  "/projects/accesstrace-overview.png": {
    card: "/images/generated/projects/accesstrace-overview.project-card.640.99197950f285.jpeg",
    banner: "/images/generated/projects/accesstrace-overview.project-banner.1200.2e980c09f37e.jpeg"
  },
  "/projects/website.webp": {
    card: "/images/generated/projects/website.project-card.640.88dea3f9f53b.jpeg",
    banner: "/images/generated/projects/website.project-banner.1200.2c72d6802a9e.jpeg"
  }
}

export function projectCardImage(src: string): string {
  return PROJECT_IMAGE_VARIANTS[src]?.card ?? src
}

export function projectBannerImage(src: string): string {
  return PROJECT_IMAGE_VARIANTS[src]?.banner ?? src
}
