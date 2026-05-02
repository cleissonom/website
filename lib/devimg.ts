type ProjectImageFit = "cover" | "contain"

type ProjectImageVariant = {
  src: string
  width: number
  height: number
  fit: ProjectImageFit
}

const PROJECT_IMAGE_VARIANTS: Record<
  string,
  { card: ProjectImageVariant; banner: ProjectImageVariant }
> = {
  "/projects/accesstrace-overview.png": {
    card: {
      src: "/images/generated/projects/accesstrace-overview.project-card.640.99197950f285.jpeg",
      width: 640,
      height: 360,
      fit: "cover"
    },
    banner: {
      src: "/images/generated/projects/accesstrace-overview.project-banner.1200.2e980c09f37e.jpeg",
      width: 1200,
      height: 630,
      fit: "cover"
    }
  },
  "/projects/cli_tools.png": {
    card: {
      src: "/images/generated/projects/cli_tools.project-card.640.bb144ce19644.jpeg",
      width: 640,
      height: 336,
      fit: "contain"
    },
    banner: {
      src: "/images/generated/projects/cli_tools.project-banner.1200.357fa291d080.jpeg",
      width: 1200,
      height: 630,
      fit: "contain"
    }
  },
  "/projects/website.webp": {
    card: {
      src: "/images/generated/projects/website.project-card.640.88dea3f9f53b.jpeg",
      width: 640,
      height: 360,
      fit: "cover"
    },
    banner: {
      src: "/images/generated/projects/website.project-banner.1200.2c72d6802a9e.jpeg",
      width: 1200,
      height: 630,
      fit: "cover"
    }
  }
}

export function projectCardImageVariant(src: string): ProjectImageVariant {
  return (
    PROJECT_IMAGE_VARIANTS[src]?.card ?? {
      src,
      width: 640,
      height: 360,
      fit: "cover"
    }
  )
}

export function projectBannerImageVariant(src: string): ProjectImageVariant {
  return (
    PROJECT_IMAGE_VARIANTS[src]?.banner ?? {
      src,
      width: 1200,
      height: 630,
      fit: "cover"
    }
  )
}

export function projectCardImage(src: string): string {
  return projectCardImageVariant(src).src
}

export function projectBannerImage(src: string): string {
  return projectBannerImageVariant(src).src
}
