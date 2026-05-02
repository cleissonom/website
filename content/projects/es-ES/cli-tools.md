---
title: CLI Tools Collection
slug: cli-tools
summary: Caja de herramientas de línea de comandos construida en Rust y C para procesamiento de imágenes, flujos de terminal con Python, solicitudes HTTP raw y automatización de ingresos/reportes.
dateStart: "2024-06-01T12:00:00.000Z"
role: Ingeniero de Software
status: active
type: developer-tool
stage: maintained
tags:
  - CLI
  - Rust
  - C
  - Developer Tools
  - Automation
  - libcurl
stack:
  - Rust
  - C
  - libcurl
  - Make
  - Shell
links:
  repo: https://github.com/cleissonom/cli_tools
coverImage: /projects/cli_tools.png
highlights:
  - Construí cinco herramientas CLI en Rust y C para automatización de imágenes, compactación de código, solicitudes HTTP raw y reportes de ingresos con conversión de moneda.
  - Unifiqué la colección con build/test basado en Make y un instalador público para macOS que funciona sin clonar el repositorio.
  - Agregué pruebas enfocadas en parsing de CLI, rutas de salida seguras, parsing HTTP, almacenamiento CSV, filtros de reporte y exportación.
---

Construí esta colección para convertir pequeños flujos recurrentes en herramientas de línea de comandos reutilizables, mientras practico Rust, C, testing y ergonomía de instalación local.

El repositorio es intencionalmente práctico: cada herramienta resuelve un problema enfocado, pero la colección comparte scripts de build, orquestación de pruebas e instalación para funcionar como una caja de herramientas real para desarrolladores.

## Qué incluye

- `imgconvert`: CLI en Rust para convertir imágenes entre formatos validando rutas de salida.
- `imgcrop`: CLI en Rust para recortar imágenes a tamaños exactos con controles de proporción y encuadre.
- `pypaste`: CLI en Rust que compacta scripts Python para flujos de pegado en terminal y clipboard.
- `raw_http`: herramienta en C/libcurl que envía solicitudes HTTP raw desde archivos `.txt` e imprime o guarda respuestas completas.
- `workpay`: herramienta en C/libcurl para cálculo de ingresos, conversión de monedas, persistencia CSV y exportación de reportes.

## Dónde me enfoqué

- Estructura multi-lenguaje con proyectos Rust y C dentro del mismo repositorio.
- Flujos locales repetibles mediante Makefiles y scripts en la raíz.
- Comportamiento seguro de salida de archivos para evitar sobrescrituras accidentales.
- Instalación pública en macOS mediante script basado en tarball, sin exigir clone manual.
- Pruebas pequeñas y dirigidas para parsing, formateo, ejecución de solicitudes y reportes.
