import { DEVIMG_MANIFEST } from "@/lib/devimg.generated"
import { DEVIMG_MANIFEST as DEVIMG_SEO_MANIFEST } from "@/lib/devimg-seo.generated"

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
const SEO_VARIANT_FORMAT = "jpeg"
const SEO_VARIANT_PRESET = "seo-open-graph"
const SEO_VARIANT_DEFAULT = {
  width: 1200,
  height: 630
}

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

export function seoImageVariant(
  src: string
): Pick<ProjectImageVariant, "src" | "width" | "height"> {
  const sourcePath = projectSourcePath(src)
  const source = DEVIMG_SEO_MANIFEST.sources.find((source) => source.source_path === sourcePath)
  const variant = source?.variants.find(
    (variant) => variant.preset === SEO_VARIANT_PRESET && variant.format === SEO_VARIANT_FORMAT
  )

  return {
    src: variant?.src ?? src,
    width: variant?.width ?? SEO_VARIANT_DEFAULT.width,
    height: variant?.height ?? SEO_VARIANT_DEFAULT.height
  }
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
