const PROJECT_IMAGE_VARIANTS: Record<string, { card: string; banner: string }> = {
  "/projects/website.webp": {
    card: "/images/generated/projects/website.project-card.640.jpeg",
    banner: "/images/generated/projects/website.project-banner.1200.jpeg"
  }
}

export function projectCardImage(src: string): string {
  return PROJECT_IMAGE_VARIANTS[src]?.card ?? src
}

export function projectBannerImage(src: string): string {
  return PROJECT_IMAGE_VARIANTS[src]?.banner ?? src
}
