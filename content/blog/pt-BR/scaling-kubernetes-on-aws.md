---
title: Escalando Kubernetes na AWS sem Surpresas
slug: scaling-kubernetes-on-aws
summary: Estratégias de capacidade, custo e rollout para workloads estáveis.
date: 2025-05-21
updatedAt: 2025-07-02
tags:
  - Kubernetes
  - AWS
  - Scalability
lang: pt-BR
---

Muitas equipes escalam tarde demais ou de forma agressiva. Uma abordagem melhor combina autoscaling com guardrails explícitos.

## O que otimizo primeiro

- Requests e limits de CPU/memória baseados em perfil real
- Limiares do HPA por classe de endpoint
- Comportamento do cluster autoscaler para janelas de pico

## Segurança de deploy

Blue-green ou rollout progressivo é obrigatório para serviços de alto tráfego. O objetivo é reduzir blast radius.
