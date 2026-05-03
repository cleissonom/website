---
title: DevImg
slug: devimg
summary: Pipeline de imágenes en Rust con GitHub Action para optimizar imágenes de proyectos, generar variantes responsivas, emitir manifiestos e informes, y validar presupuestos de imagen en CI.
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
  repo: https://github.cleisson.com/devimg
coverImage: /projects/devimg.png
highlights:
  - Construí un workspace Rust con una biblioteca core reutilizable y una CLI `devimg` para flujos repetibles de optimización de imágenes.
  - Añadí nombres con hash de contenido, controles de recorte, overrides por preset, helpers generados desde el manifiesto y validación de drift en CI.
  - Empaqueté la herramienta como GitHub Release versionado y la dogfoodeé en el pipeline de imágenes de producción de este sitio.
---

DevImg es un pipeline de imágenes para desarrollo creado para que los flujos de imágenes en sitios estáticos sean reproducibles en lugar de manuales.

La herramienta lee un `devimg.toml`, escanea carpetas de origen, genera variantes configuradas, escribe un manifiesto JSON, produce un informe Markdown y valida que los archivos generados existan, estén actualizados y respeten los presupuestos configurados.

## Qué construí

- Biblioteca core en Rust responsable de configuración, escaneo, planificación, transformaciones, manifiestos, informes, presupuestos y validación.
- CLI en Rust con comandos `init`, `optimize`, `check`, `report`, `inspect` y exportación de manifiesto.
- GitHub Action que ejecuta la CLI en pull requests y falla cuando las imágenes generadas faltan, están obsoletas, son demasiado grandes o están fuera de sincronía.
- Nombres de archivo con hash de contenido para permitir cache inmutable de forma segura.
- Anclas de recorte, puntos focales normalizados y overrides por archivo para screenshots y diagramas reales.
- Exportación TypeScript del manifiesto para que las aplicaciones consuman rutas con hash sin tablas mantenidas manualmente.

## Por qué lo construí

El proyecto empezó a partir de las ideas más pequeñas de `imgconvert` e `imgcrop`, y luego evolucionó hasta convertirse en un flujo productizado para imágenes de portafolios y sitios estáticos.

Quería que el pipeline se comportara como infraestructura de desarrollo: configuración determinística, salida repetible, informes explícitos, validación en CI, artefactos de release y uso real en producción.

## Alcance actual

DevImg hoy se enfoca en assets estáticos locales y flujos estables con PNG, JPEG y WebP. Todavía no ofrece servicio alojado, almacenamiento remoto, commits automáticos en pull requests ni interfaz web.
