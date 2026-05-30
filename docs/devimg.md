# Dev Image Pipeline

This site dogfoods `devimg` for static project cover variants. The project uses JPEG generated sources because these screenshot-style assets are consumed by Next Image, and Vercel/Next can still serve optimized browser formats from the resized JPEG sources.

## Scope

- Source: `public/projects`
- Generated output: `public/images/generated/projects`
- Manifest: `public/images/devimg-manifest.json`
- Local report: `.devimg/devimg-report.md`

The generated filenames are content-hashed through `content_hash_filenames = true`, so each generated URL changes when the encoded bytes change. This is the required precondition before applying broad immutable CDN caching to generated assets.

Project cover variants use `crop = "top"` so screenshot headers and top navigation remain visible in cropped cards and banners. The DevImg source uses a quality override so its detailed banner stays under the current per-file budget.

The CLI Tools and DevImg artwork use `[[overrides]]` entries with `fit = "contain"` so each full diagram is resized without cropping while the other project screenshots keep top-crop behavior.

AccessTrace keeps two narrow `quality:cover-crop` acknowledgements for the card and banner presets because the top-anchored crop was visually reviewed and is intentional. New unacknowledged warnings still fail strict checks.

`lib/devimg.generated.ts` is generated from `public/images/devimg-manifest.json` and is the only place generated content-hash filenames are copied into app code. `lib/devimg.ts` derives project card and banner variants from that generated module.

## Local Commands

```bash
devimg optimize --dry-run
devimg optimize
devimg manifest export --manifest public/images/devimg-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg.generated.ts
devimg manifest export --manifest public/images/devimg-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg.generated.ts --check
devimg check --fail-on-warning
devimg ai consent --ai-provider openai --model openai-dry-run-model --dry-run --output /tmp/cleisson-devimg-openai-consent.json --force
```

Use `--allow-overwrite` when intentionally regenerating existing variants after changing source images or presets.

The AI consent dry-run is a provider setup preview only. It requires no API key, includes no image bytes by default, and writes deterministic JSON under `/tmp` for local inspection. Real OpenAI calls are deferred to future opt-in DevImg AI commands.

## CI

The main CI workflow uses the public `cleissonom/devimg/action@v0.2.3` Action. It downloads the matching Linux release archive, verifies its checksum, runs `devimg check --fail-on-warning`, validates `devimg manifest export --check`, and uploads the generated review artifact.

After the Action resolves the CLI, CI uses its `binary-path` output to run an OpenAI `devimg ai consent --dry-run` preview. The preview is written only under `$RUNNER_TEMP`, asserted nonempty, and does not require `OPENAI_API_KEY`.

Generated variants, `public/images/devimg-manifest.json`, and `lib/devimg.generated.ts` should be committed with image changes; `.devimg/` is ignored because reports are regenerated locally and in CI.
