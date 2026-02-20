---
title: Escalar Kubernetes en AWS Sin Sorpresas
slug: scaling-kubernetes-on-aws
summary: Estrategias de capacidad, coste y despliegue para cargas estables en Kubernetes.
date: 2025-05-21
updatedAt: 2025-07-02
tags:
  - Kubernetes
  - AWS
  - Escalabilidad
lang: es-ES
---

Muchos equipos escalan demasiado tarde o de forma agresiva. Un enfoque mejor es combinar autoscaling con guardrails explícitos.

## Lo que optimizo primero

- Requests y limits de CPU/memoria basados en perfiles medidos
- Umbrales del HPA por clase de endpoint
- Comportamiento del cluster autoscaler para ventanas de tráfico pico

## Seguridad de despliegue

Blue-green o despliegues progresivos son obligatorios para servicios de alto tráfico. El objetivo es reducir el radio de impacto, no perseguir velocidad de despliegue.
