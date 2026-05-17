---
title: DevImg
slug: devimg
summary: CLI en Rust con GitHub Action para generar variantes responsivas de imágenes frontend, exportar helpers de la aplicación, crear artefactos de revisión y validar frescura y presupuesto en CI.
dateStart: "2026-05-01T12:00:00.000Z"
role: Ingeniero de Software
status: active
type: developer-tool
stage: maintained
tags:
  - Rust
  - CLI
  - GitHub Actions
  - Optimización de Imágenes
  - Herramientas de Desarrollo
stack:
  - Rust
  - Clap
  - Serde
  - GitHub Actions
  - Procesamiento de Imágenes
  - Markdown
links:
  repo: https://github.com/cleissonom/devimg
  package: https://crates.io/crates/devimg
coverImage: /projects/devimg.png
highlights:
  - Publiqué la CLI Rust en crates.io como `devimg`, con la biblioteca reutilizable `devimg-core` por debajo.
  - Añadí nombres con hash de contenido, controles de recorte, overrides por preset, helpers generados desde el manifiesto, diagnósticos de framework y artefactos visuales de revisión.
  - Lancé una GitHub Action pública, binarios de release con checksum y uso en producción en el pipeline de imágenes de este sitio.
---

DevImg es un pipeline de imágenes para desarrollo creado para que los flujos de imágenes frontend sean reproducibles, revisables y validados en CI en lugar de manuales.

La herramienta lee un `devimg.toml`, escanea carpetas de origen, genera variantes configuradas, escribe un manifiesto JSON, exporta helpers amigables para la aplicación, produce un informe Markdown y valida que los archivos generados existan, estén actualizados y respeten los presupuestos configurados.

Ahora también está distribuida públicamente: los desarrolladores pueden instalarla con `cargo install devimg`, fijar la GitHub Action con `cleissonom/devimg/action@v0.1.14` o descargar binarios con checksum desde GitHub Releases.

## Qué construí

- Biblioteca core en Rust responsable de configuración, escaneo, planificación, transformaciones, manifiestos, informes, presupuestos y validación.
- CLI en Rust con comandos `init`, `optimize`, `check`, `doctor`, `report`, `inspect`, artefacto de revisión y exportación de manifiesto.
- Paquetes en crates.io para la CLI de uso directo y para la biblioteca core reutilizable.
- GitHub Action pública que ejecuta la CLI en pull requests y falla cuando las imágenes generadas faltan, están obsoletas, son demasiado grandes o están fuera de sincronía.
- Nombres de archivo con hash de contenido para permitir cache inmutable de forma segura.
- Anclas de recorte, puntos focales normalizados y overrides por archivo para screenshots y diagramas reales.
- Exportación TypeScript del manifiesto para que las aplicaciones consuman rutas con hash sin tablas mantenidas manualmente.
- Diagnósticos `doctor` conscientes de frameworks, explicando validación de helpers y los modos esperados de consumo con `img`/`picture`, componente `Image` del framework u optimización en capas.
- Artefacto HTML estático de revisión para inspeccionar variantes generadas localmente o subidas desde CI.

## Por qué lo construí

El proyecto empezó a partir de las ideas más pequeñas de `imgconvert` e `imgcrop`, y luego evolucionó hasta convertirse en un flujo productizado para imágenes de portafolios y sitios estáticos.

Quería que el pipeline se comportara como infraestructura de desarrollo: configuración determinística, salida repetible, informes explícitos, validación en CI, artefactos de release y uso real en producción. Las imágenes generadas deberían aparecer en PRs como material normal de revisión: fuente/configuración, variantes generadas, manifiesto, helper exportado, informe y artefacto visual avanzando juntos.

## Prueba en producción

Este sitio usa DevImg para imágenes de tarjetas y banners de proyectos. Las imágenes de origen viven en `public/projects`, las variantes generadas viven en `public/images/generated` y el código de la aplicación lee un helper TypeScript versionado generado desde el manifiesto.

El CI usa la Action pública `cleissonom/devimg/action@v0.1.14`, descarga un binario de release con checksum, ejecuta `devimg check --fail-on-warning` en modo estricto, confirma que el helper exportado está actualizado y sube un artefacto de revisión. Eso mantiene los despliegues en Vercel usando assets estáticos versionados, con nombres de archivo con hash de contenido compatibles con CDN.

## Alcance actual

DevImg hoy se enfoca en assets estáticos locales y flujos estables con PNG, JPEG, WebP y salida AVIF opt-in. Todavía no ofrece servicio alojado, almacenamiento remoto, commits automáticos en pull requests, automatización con IA ni interfaz web.
