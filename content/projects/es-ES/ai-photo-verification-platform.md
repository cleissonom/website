---
title: Plataforma de Verificación de Fotos con IA
slug: ai-photo-verification-platform
summary: Pipeline escalable para verificación de edad y coincidencia facial en una app de consumo.
dateStart: 2023-07-01
dateEnd: 2025-02-01
role: Ingeniero de Software
status: active
tags:
  - Backend
  - AWS
  - IA
  - Sistemas distribuidos
stack:
  - Node.js
  - Python
  - AWS Rekognition
  - DynamoDB
  - Kubernetes
links:
  repo: https://github.com/cleissonom
  live: https://cleissonom.dev
highlights:
  - Construí flujos cloud-native para la ingesta y validación de imágenes.
  - Soporté el crecimiento a más de 2.000 usuarios activos en los primeros meses.
  - Integré validaciones impulsadas por IA para verificación de edad y consistencia de identidad.
---

Este proyecto se centró en la fiabilidad y la velocidad para un producto mobile-first.

La arquitectura utilizó procesamiento orientado a eventos y servicios cloud-native en AWS para mantener baja la latencia mientras manejaba picos de carga en subidas de fotos.

## Qué entregué

- Diseñé APIs backend para carga, moderación y verificación de perfiles.
- Implementé observabilidad y rutas de recuperación ante fallos para los trabajos de procesamiento.
- Mejoré la calidad de las recomendaciones integrando relaciones de usuarios basadas en grafos.
