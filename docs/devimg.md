# Dev Image Pipeline

This site dogfoods `devimg` for static project cover variants and SEO Open Graph images. Project covers use JPEG generated sources with `next/image` marked `unoptimized` because DevImg already owns their sizing and quality. SEO source PNGs are converted into smaller content-hashed JPEGs for metadata.

## Scope

- Project source: `public/projects`
- Project output: `public/images/generated/projects`
- Project manifest: `public/images/devimg-manifest.json`
- SEO source: `public/seo`
- SEO output: `public/images/generated/seo`
- SEO manifest: `public/images/seo-manifest.json`
- Local reports: `.devimg/devimg-report.md` and `.devimg/seo-report.md`

The generated filenames are content-hashed through `content_hash_filenames = true`, so each generated URL changes when the encoded bytes change. This is the required precondition before applying broad immutable CDN caching to generated assets.

Project cover variants use `crop = "top"` so screenshot headers and top navigation remain visible in cropped cards and banners. SEO variants use a separate `devimg.seo.toml` config so project presets do not generate unrelated SEO outputs and SEO presets do not generate unrelated project outputs.

The CLI Tools and DevImg artwork use `[[overrides]]` entries with `fit = "contain"` so each full diagram is resized without cropping while the other project screenshots keep top-crop behavior.

AccessTrace keeps two narrow `quality:cover-crop` acknowledgements for the card and banner presets because the top-anchored crop was visually reviewed and is intentional. New unacknowledged warnings still fail strict checks.

`lib/devimg.generated.ts` is generated from `public/images/devimg-manifest.json`; `lib/devimg-seo.generated.ts` is generated from `public/images/seo-manifest.json`. They are the only places generated content-hash filenames are copied into app code. `lib/devimg.ts` derives project card, project banner, and SEO metadata variants from those generated modules.

## Local Commands

```bash
devimg optimize --dry-run
devimg optimize
devimg manifest export --manifest public/images/devimg-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg.generated.ts
devimg manifest export --manifest public/images/devimg-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg.generated.ts --check
devimg check --fail-on-warning
devimg optimize --config devimg.seo.toml
devimg manifest export --manifest public/images/seo-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg-seo.generated.ts
devimg manifest export --manifest public/images/seo-manifest.json --strip-prefix public --url-prefix / --format typescript --output lib/devimg-seo.generated.ts --check
devimg check --config devimg.seo.toml --fail-on-warning
devimg ai consent --ai-provider openai --model openai-dry-run-model --dry-run --output /tmp/cleisson-devimg-openai-consent.json --force
devimg review --manifest public/images/devimg-manifest.json --ai --ai-provider openai --model openai-dry-run-model --dry-run --ai-output /tmp/cleisson-devimg-openai-ai-review.json --markdown /tmp/cleisson-devimg-openai-ai-review.md --force
devimg alt --output /tmp/cleisson-devimg-alt.json --markdown /tmp/cleisson-devimg-alt.md --force
devimg draft --draft-type project-page-copy --ai-provider openai --model openai-dry-run-model --dry-run --ai-review-json /tmp/cleisson-devimg-openai-ai-review.json --review-html .devimg/review.html --output /tmp/cleisson-devimg-project-page-copy.md --force
```

Use `--allow-overwrite` when intentionally regenerating existing variants after changing source images or presets.

The AI consent dry-run is a provider setup preview only. The AI review and project-page draft dry-runs exercise OpenAI artifact paths without calling OpenAI; the alt-text command stays metadata-only by default. They require no API key, include no image bytes by default, and write artifacts under `/tmp` for local inspection. Draft output is review-only prose and is not committed. Real OpenAI AI review, alt-text, and draft calls are opt-in, require `OPENAI_API_KEY`, and send image bytes only with `--include-images`.

## CI

The main CI workflow uses the public `cleissonom/devimg/action@v0.2.7` Action. It downloads the matching Linux release archive, verifies its checksum, runs `devimg check --fail-on-warning`, validates the project manifest export, checks the SEO DevImg config/export with the resolved binary, and uploads project and SEO review artifacts.

After the Action resolves the CLI, CI uses its `binary-path` output to run fully flagged AI consent, AI review, metadata-only alt-text, and draft dry-runs. The previews are written only under `$RUNNER_TEMP`, asserted nonempty, and do not require `OPENAI_API_KEY`; draft prose is not committed or published by CI.

Generated variants, `public/images/devimg-manifest.json`, `public/images/seo-manifest.json`, `lib/devimg.generated.ts`, and `lib/devimg-seo.generated.ts` should be committed with image changes; `.devimg/` is ignored because reports and review artifacts are regenerated locally and in CI.
