---
title: AccessTrace
slug: accesstrace
summary: Laboratorio local de analytics de ciberseguridad que normaliza eventos sinteticos de estilo AWS, Google Workspace y Slack en ClickHouse y Postgres, con vistas de investigacion para dashboard.
dateStart: "2026-05-02T12:00:00.000Z"
role: Ingeniero de Software
status: active
type: systems-lab
stage: lab
tags:
  - Security Analytics
  - ClickHouse
  - TypeScript
  - Postgres
  - Audit Logs
stack:
  - Next.js 16
  - React 19
  - TypeScript
  - ClickHouse
  - Postgres
  - Docker Compose
  - Zod
  - Vitest
highlights:
  - Construí un flujo local y determinístico de ingestión con 1.200 eventos normalizados sintéticos entre fuentes de estilo AWS, Google Workspace y Slack.
  - Modelé almacenamiento de payloads crudos, eventos de acceso normalizados, seguimiento de importaciones y scripts de consulta con resultados en formato de dashboard.
  - Añadí funciones tipadas de consulta en el servidor, validación de filtros con Zod, primer dashboard, experimentos con tablas resumen en ClickHouse y revisión de seguridad local.
coverImage: /projects/accesstrace-overview.png
---

AccessTrace es un prototipo local de producto para explorar cómo los logs de auditoría de seguridad pueden convertirse en datos útiles para investigación.

El proyecto empieza con eventos sintéticos con formas parecidas a fuentes reales, los normaliza en un modelo común de eventos de acceso, calcula riesgo con reglas explicables, almacena datos analíticos en ClickHouse, guarda metadatos de importación en Postgres y entrega vistas de dashboard para métricas generales, logs filtrados, actores de mayor riesgo, recursos sensibles, volumen por hora y detalles de eventos.

## Qué construí

- Setup con Docker Compose para ClickHouse y Postgres locales.
- Inicialización idempotente de base de datos para eventos crudos, eventos normalizados, lotes de importación, errores de importación y tablas resumen en ClickHouse.
- Generador determinístico de eventos sintéticos que cubre registros de estilo AWS CloudTrail, Google Workspace y Slack Audit Logs.
- Normalización y puntuación de riesgo con cobertura enfocada en Vitest.
- Capa de consultas del lado servidor con funciones tipadas, validación con Zod, filtros por período, paginación y query parameters de ClickHouse.
- Primer dashboard con vista general, explorador de logs y página de detalle de evento.
- Documentación de arquitectura, datos sintéticos, aprendizajes de ClickHouse, caso de estudio, screenshots, auditoría de dependencias, revisión de seguridad y posicionamiento de lanzamiento.

## Por qué lo construí

Quería un proyecto de portafolio que pareciera un sistema real, no solo una interfaz. AccessTrace ejercita modelado de datos, ingestión, consultas analíticas, flujos locales reproducibles, validación backend, diseño de dashboard y revisión de seguridad en un caso concreto de ciberseguridad.

## Alcance actual

AccessTrace es intencionalmente local y sintético. Todavía no se conecta a APIs reales de Slack, Google Workspace o AWS. Tampoco tiene autenticación, aislamiento multi-tenant de producción ni promesas de seguridad para producción.

Esa limitación forma parte del diseño: la primera versión prueba la base de datos y el flujo de investigación antes de agregar conectores reales o controles de producción.
