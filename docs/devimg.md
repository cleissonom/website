# Dev Image Pipeline

This site dogfoods `devimg` for static project cover variants. The project uses JPEG generated sources because these screenshot-style assets are consumed by Next Image, and Vercel/Next can still serve optimized browser formats from the resized JPEG sources.

## Scope

- Source: `public/projects`
- Generated output: `public/images/generated/projects`
- Manifest: `public/images/devimg-manifest.json`
- Local report: `.devimg/devimg-report.md`

The generated filenames are content-hashed through `content_hash_filenames = true`, so each generated URL changes when the encoded bytes change. This is the required precondition before applying broad immutable CDN caching to generated assets.

Project cover variants use `crop = "top"` so screenshot headers and top navigation remain visible in cropped cards and banners. The project-banner preset uses JPEG quality `82` to keep the top-cropped AccessTrace banner inside the current per-file budget.

The CLI Tools artwork uses a `[[overrides]]` entry with `fit = "contain"` so the full diagram is resized without cropping while the other project screenshots keep top-crop behavior.

`lib/devimg.generated.ts` is generated from `public/images/devimg-manifest.json` and is the only place generated content-hash filenames are copied into app code. `lib/devimg.ts` derives project card and banner variants from that generated module.

## Local Commands

```bash
devimg optimize --config devimg.toml --dry-run
devimg optimize --config devimg.toml
devimg manifest export --manifest public/images/devimg-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg.generated.ts
devimg manifest export --manifest public/images/devimg-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg.generated.ts --check
devimg check --config devimg.toml
```

Use `--allow-overwrite` when intentionally regenerating existing variants after changing source images or presets.

## CI

The main CI workflow can run `devimg check` and `devimg manifest export --check` by downloading the Linux `v0.1.6` release archive from the private `cleissonom/devimg` repository. Configure a `DEVIMG_RELEASE_TOKEN` repository secret with read access to that repository to enable the check. Without the secret, CI skips only the image check and continues with lint, typecheck, and build.

Generated variants, `public/images/devimg-manifest.json`, and `lib/devimg.generated.ts` should be committed with image changes; `.devimg/` is ignored because reports are regenerated locally and in CI.
