---
title: AccessTrace
slug: accesstrace
summary: Prototipo de producto de analytics de seguridad que convierte eventos sinteticos de auditoria en un workspace de investigacion, con fronteras SaaS, self-hosted y MCP local.
dateStart: "2026-05-02T12:00:00.000Z"
role: Ingeniero de Software
status: active
type: systems-lab
stage: in-progress
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
  - Construí un flujo local y determinístico de ingestión con eventos sintéticos de estilo AWS, Google Workspace, Slack y GitHub.
  - Diseñé un workspace de investigación con alertas, reportes, saved views, auditoría, previews de notificación, límites de plan y estado operacional.
  - Añadí fronteras de producto SaaS/self-hosted y una interfaz MCP local para investigación asistida por agentes de IA sin exponer credenciales ni APIs reales.
coverImage: /projects/accesstrace-overview.png
links:
  repo: https://github.com/cleissonom/accesstrace
---

AccessTrace es un prototipo de producto de analytics de seguridad para explorar cómo los logs de auditoría pueden convertirse en datos útiles para investigación.

El proyecto empieza con eventos sintéticos con formas parecidas a fuentes reales, los normaliza en un modelo común de eventos de acceso, calcula riesgo con reglas explicables, almacena datos analíticos en ClickHouse, guarda metadatos operacionales en Postgres y entrega vistas de dashboard para métricas generales, logs, alertas, reportes, importaciones, jobs, notificaciones, límites de billing y operaciones administrativas.

## Qué construí

- Setup con Docker Compose para ClickHouse y Postgres locales.
- Inicialización idempotente de base de datos para eventos crudos, eventos normalizados, lotes de importación, errores de importación y tablas resumen en ClickHouse.
- Generación determinística de eventos sintéticos que cubre registros de estilo AWS CloudTrail, Google Workspace, Slack Audit Logs y GitHub Enterprise Audit Log.
- Capa de consultas del lado servidor con funciones tipadas, validación con Zod, filtros por período, paginación y query parameters de ClickHouse.
- Workspace de investigación con workflow de alertas, reportes legibles, saved views, exportación de evidencias, previews locales de notificación y auditoría administrativa.
- Dirección SaaS con workspaces, usuarios, roles, invitaciones, visibilidad de plan, metering, guardrails de entitlement y estado operacional.
- Dirección self-hosted con checks de runtime, perfil Docker para app, notas de backup/restore, flujo de upgrade y fronteras de soporte.
- Frontera MCP local para que agentes de IA consulten logs, alertas, importaciones, reportes y workflows controlados mediante herramientas con scope de tenant, redacción y auditoría.

## Por qué lo construí

Quería un proyecto de portafolio que pareciera un producto real, no solo una interfaz. AccessTrace ejercita modelado de datos, ingestión, consultas analíticas, flujos locales reproducibles, validación backend, diseño de dashboard, revisión de seguridad, packaging de producto y fronteras operacionales en un caso concreto de ciberseguridad.

## Hacia dónde va

La dirección del producto es un modelo de despliegue estilo Metabase: SaaS hospedado para onboarding simple, self-hosted para entornos con logs de auditoría sensibles y una opción futura gestionada/serverless. Los conectores reales siguen intencionalmente diferidos hasta tener sandbox seguro, estrategia de credenciales, aprobación de manejo de datos y una decisión de access-control de producción.

## Alcance actual

AccessTrace es intencionalmente local y sintético hoy. Todavía no se conecta a APIs reales de Slack, Google Workspace, GitHub o AWS. Tiene auth local y fronteras con forma de RBAC para demos, pero no autenticación de producción, billing, entrega real de notificaciones, aislamiento multi-tenant de producción ni promesas de seguridad para producción.

Esa limitación forma parte del diseño: la versión actual prueba la base de datos, el flujo de investigación, la forma SaaS/self-hosted y la frontera de acceso vía agentes de IA antes de agregar conectores reales o controles de producción.
