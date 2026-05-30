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

DevImg es un pipeline de imágenes para desarrollo creado para que los flujos de imágenes frontend sean reproducibles, revisables y validados en CI en lugar de manuales. Está pensado para equipos que mantienen assets estáticos en el repositorio y quieren que las variantes generadas se comporten como artefactos normales de build.

La herramienta lee un `devimg.toml`, escanea carpetas de origen, genera variantes configuradas, escribe un manifiesto JSON, exporta helpers amigables para la aplicación, produce un informe Markdown y valida que los archivos generados existan, estén actualizados y respeten los presupuestos configurados. Vive al lado de los componentes de imagen del framework y de la CDN: DevImg se encarga de la generación determinística de variantes, mientras el frontend decide cómo renderizar los assets seleccionados.

## Instalación y CI

Instala la CLI con Rust 1.88 o más reciente:

```bash
cargo install devimg
```

Usa la GitHub Action pública en pull requests:

```yaml
- uses: cleissonom/devimg/action@v0.2.7
  with:
    mode: check
```

La Action descarga el binario correspondiente desde GitHub Releases, verifica su checksum SHA-256 y ejecuta el mismo comportamiento de la CLI usada localmente.

## Flujo de uso

1. Define fuentes, presets, anchos, formatos, calidad, recorte y presupuestos en `devimg.toml`.
2. Ejecuta `devimg optimize` para generar variantes responsivas y el manifiesto.
3. Ejecuta `devimg manifest export` cuando la aplicación necesite un helper TypeScript o JSON versionado para nombres con hash de contenido.
4. Ejecuta `devimg review` para crear un artefacto HTML estático de revisión visual.
5. Ejecuta `devimg check` en CI para bloquear imágenes ausentes, obsoletas, demasiado grandes o fuera de sincronía con la configuración.

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

## Por qué es útil

El trabajo con imágenes en frontend suele generar drift porque los archivos derivados son fáciles de olvidar, difíciles de revisar y muchas veces dependen de scripts ad hoc. DevImg hace explícito ese flujo: imagen de origen, configuración, variantes generadas, manifiesto, helper exportado, informe Markdown y artefacto de revisión avanzan juntos en el mismo pull request.

Para sitios estáticos, portafolios, documentación y páginas de marketing, esto mantiene visibles la calidad visual y los presupuestos de bytes sin exigir un servicio alojado ni almacenamiento remoto.

## Por qué lo construí

El proyecto empezó a partir de las ideas más pequeñas de `imgconvert` e `imgcrop`, y luego evolucionó hasta convertirse en un flujo productizado para imágenes de portafolios y sitios estáticos.

Quería que el pipeline se comportara como infraestructura de desarrollo: configuración determinística, salida repetible, informes explícitos, validación en CI, artefactos de release y uso real en producción. Las imágenes generadas deberían aparecer en PRs como material normal de revisión: fuente/configuración, variantes generadas, manifiesto, helper exportado, informe y artefacto visual avanzando juntos.

## Prueba en producción

Este sitio usa DevImg para imágenes de tarjetas y banners de proyectos. Las imágenes de origen viven en `public/projects`, las variantes generadas viven en `public/images/generated` y el código de la aplicación lee un helper TypeScript versionado generado desde el manifiesto.

El CI usa la Action pública `cleissonom/devimg/action@v0.2.7`, descarga un binario de release con checksum, ejecuta `devimg check --fail-on-warning` en modo estricto, confirma que los helpers exportados estén actualizados, sube artefactos de revisión para proyectos y SEO, y ejecuta dry-runs de revisión con IA, alt text metadata-only y borrador de página de proyecto sin claves de API. El borrador en prosa se escribe solo en `$RUNNER_TEMP` y CI no lo commitea ni lo publica. El `devimg.toml` predeterminado gestiona covers de proyectos, mientras `devimg.seo.toml` genera imágenes Open Graph más pequeñas y con hash de contenido para metadata.

## Alcance actual

DevImg hoy se enfoca en assets estáticos locales y flujos estables con PNG, JPEG, WebP y salida AVIF opt-in. Todavía no ofrece servicio alojado, almacenamiento remoto, commits automáticos en pull requests, automatización con IA ni interfaz web.
