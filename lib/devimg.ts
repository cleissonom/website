import { DEVIMG_MANIFEST } from "@/lib/devimg.generated"

type ProjectImageFit = "cover" | "contain"

type ProjectImageVariant = {
  src: string
  width: number
  height: number
  fit: ProjectImageFit
}

type DevimgSource = (typeof DEVIMG_MANIFEST.sources)[number]
type DevimgVariant = DevimgSource["variants"][number]
type ProjectPreset = "project-card" | "project-banner"

const PROJECT_VARIANT_DEFAULTS: Record<ProjectPreset, { width: number; height: number }> = {
  "project-card": {
    width: 640,
    height: 360
  },
  "project-banner": {
    width: 1200,
    height: 630
  }
}

const PROJECT_VARIANT_FORMAT = "jpeg"

export function projectCardImageVariant(src: string): ProjectImageVariant {
  return projectImageVariant(src, "project-card")
}

export function projectBannerImageVariant(src: string): ProjectImageVariant {
  return projectImageVariant(src, "project-banner")
}

export function projectCardImage(src: string): string {
  return projectCardImageVariant(src).src
}

export function projectBannerImage(src: string): string {
  return projectBannerImageVariant(src).src
}

function projectImageVariant(src: string, preset: ProjectPreset): ProjectImageVariant {
  const variant = findProjectVariant(src, preset)
  const fallback = PROJECT_VARIANT_DEFAULTS[preset]

  return {
    src: variant?.src ?? src,
    width: variant?.width ?? fallback.width,
    height: variant?.height ?? fallback.height,
    fit: projectImageFit(variant?.fit)
  }
}

function findProjectVariant(src: string, preset: ProjectPreset): DevimgVariant | undefined {
  const sourcePath = projectSourcePath(src)
  const source = DEVIMG_MANIFEST.sources.find((source) => source.source_path === sourcePath)

  return source?.variants.find(
    (variant) => variant.preset === preset && variant.format === PROJECT_VARIANT_FORMAT
  )
}

function projectSourcePath(src: string): string {
  return src.startsWith("/") ? `public${src}` : src
}

function projectImageFit(fit: string | undefined): ProjectImageFit {
  return fit === "contain" ? "contain" : "cover"
}
