---
title: Escalando Kubernetes na AWS sem Surpresas
slug: scaling-kubernetes-on-aws
summary: Estrategias de capacidade, custo e rollout para workloads estaveis.
date: 2025-05-21
updatedAt: 2025-07-02
tags:
  - Kubernetes
  - AWS
  - Scalability
lang: pt-BR
---

Muitas equipes escalam tarde demais ou de forma agressiva. Uma abordagem melhor combina autoscaling com guardrails explicitos.

## O que otimizo primeiro

- Requests e limits de CPU/memoria baseados em perfil real
- Limiares do HPA por classe de endpoint
- Comportamento do cluster autoscaler para janelas de pico

## Seguranca de deploy

Blue-green ou rollout progressivo e obrigatorio para servicos de alto trafego. O objetivo e reduzir blast radius.
