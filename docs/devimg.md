# Dev Image Pipeline

This site dogfoods `devimg` for static project cover variants. The project uses JPEG generated sources because the current `devimg` WebP encoder can produce larger files for this screenshot-style asset; Vercel/Next can still serve optimized browser formats from the resized JPEG sources.

## Scope

- Source: `public/projects`
- Generated output: `public/images/generated/projects`
- Manifest: `public/images/devimg-manifest.json`
- Local report: `.devimg/devimg-report.md`

The generated filenames are stable, not content-hashed, so `next.config.mjs` applies the same short revalidation cache policy used by other stable project images. Do not switch generated images to broad immutable caching until `devimg` supports content-hash filenames.

## Local Commands

```bash
devimg optimize --config devimg.toml --dry-run
devimg optimize --config devimg.toml
devimg check --config devimg.toml
```

Use `--allow-overwrite` when intentionally regenerating existing variants after changing source images or presets.

## CI

The main CI workflow can run `devimg check` by downloading the `v0.1.1` Linux release archive from the private `cleissonom/devimg` repository. Configure a `DEVIMG_RELEASE_TOKEN` repository secret with read access to that repository to enable the check. Without the secret, CI skips only the image check and continues with lint, typecheck, and build.

Generated variants and `public/images/devimg-manifest.json` should be committed with image changes; `.devimg/` is ignored because reports are regenerated locally and in CI.
