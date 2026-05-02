# Dev Image Pipeline

This site dogfoods `devimg` for static project cover variants. The project uses JPEG generated sources because these screenshot-style assets are consumed by Next Image, and Vercel/Next can still serve optimized browser formats from the resized JPEG sources.

## Scope

- Source: `public/projects`
- Generated output: `public/images/generated/projects`
- Main manifest: `public/images/devimg-manifest.json`
- CLI Tools manifest: `public/images/devimg-cli-tools-manifest.json`
- Local report: `.devimg/devimg-report.md`

The generated filenames are content-hashed through `content_hash_filenames = true`, so each generated URL changes when the encoded bytes change. This is the required precondition before applying broad immutable CDN caching to generated assets.

Project cover variants use `crop = "top"` so screenshot headers and top navigation remain visible in cropped cards and banners. The project-banner preset uses JPEG quality `82` to keep the top-cropped AccessTrace banner inside the current per-file budget.

The CLI Tools artwork uses `devimg-cli-tools.toml` with `fit = "contain"` so the full diagram is resized without cropping. It stays in a separate config because devimg currently applies every preset to every source in a config.

## Local Commands

```bash
devimg optimize --config devimg.toml --dry-run
devimg optimize --config devimg.toml
devimg check --config devimg.toml
devimg optimize --config devimg-cli-tools.toml --dry-run
devimg optimize --config devimg-cli-tools.toml
devimg check --config devimg-cli-tools.toml
```

Use `--allow-overwrite` when intentionally regenerating existing variants after changing source images or presets.

## CI

The main CI workflow can run `devimg check` by downloading the Linux `v0.1.3` release archive from the private `cleissonom/devimg` repository. Configure a `DEVIMG_RELEASE_TOKEN` repository secret with read access to that repository to enable the check. Without the secret, CI skips only the image check and continues with lint, typecheck, and build.

Generated variants and devimg manifests should be committed with image changes; `.devimg/` is ignored because reports are regenerated locally and in CI.
