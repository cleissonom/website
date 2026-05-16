---
title: AccessTrace
slug: accesstrace
summary: Protótipo de produto de analytics para segurança que transforma eventos sintéticos de auditoria em um workspace de investigação, com fronteiras SaaS, self-hosted e MCP local.
dateStart: "2026-05-02T12:00:00.000Z"
role: Engenheiro de Software
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
  - Criei um fluxo local determinístico de ingestão com eventos sintéticos no estilo AWS, Google Workspace, Slack e GitHub.
  - Desenhei um workspace de investigação com alertas, relatórios, saved views, trilha de auditoria, previews de notificação, limites de plano e status operacional.
  - Adicionei fronteiras de produto para SaaS/self-hosted e uma interface MCP local para investigação assistida por agentes de IA sem expor credenciais ou APIs reais.
coverImage: /projects/accesstrace-overview.png
links:
  repo: https://github.com/cleissonom/accesstrace
---

AccessTrace é um protótipo de produto de analytics para segurança que explora como logs de auditoria podem virar dados úteis para investigação.

O projeto parte de eventos sintéticos com formatos parecidos com fontes reais, normaliza tudo em um modelo comum de eventos de acesso, calcula risco com regras explicáveis, armazena dados analíticos no ClickHouse, guarda metadados operacionais no Postgres e entrega views de dashboard para métricas gerais, logs, alertas, relatórios, importações, jobs, notificações, limites de billing e operações administrativas.

## O que eu construí

- Setup com Docker Compose para ClickHouse e Postgres locais.
- Inicialização idempotente do banco para eventos brutos, eventos normalizados, lotes de importação, erros de importação e tabelas-resumo no ClickHouse.
- Geração determinística de eventos sintéticos cobrindo registros no estilo AWS CloudTrail, Google Workspace, Slack Audit Logs e GitHub Enterprise Audit Log.
- Camada de consultas no servidor com funções tipadas, validação com Zod, filtros por período, paginação e query parameters do ClickHouse.
- Workspace de investigação com workflow de alertas, relatórios legíveis, saved views, exportação de evidências, previews locais de notificação e trilha de auditoria administrativa.
- Direção SaaS com workspaces, usuários, papéis, convites, visibilidade de plano, metering, guardrails de entitlement e status operacional.
- Direção self-hosted com checks de runtime, perfil Docker para app, notas de backup/restore, fluxo de upgrade e fronteiras de suporte.
- Fronteira MCP local para agentes de IA consultarem logs, alertas, importações, relatórios e workflows controlados por ferramentas tenant-scoped, redigidas e auditadas.

## Por que eu construí

Eu queria um projeto de portfólio que parecesse um produto real, não apenas uma interface. AccessTrace exercita modelagem de dados, ingestão, consultas analíticas, fluxos locais reproduzíveis, validação backend, design de dashboard, revisão de segurança, empacotamento de produto e fronteiras operacionais em um caso concreto de cibersegurança.

## Para onde ele está indo

A direção do produto é um modelo de implantação no estilo Metabase: SaaS hospedado para onboarding simples, self-hosted para ambientes com logs de auditoria sensíveis e uma opção futura gerenciada/serverless. Conectores reais continuam intencionalmente adiados até existir sandbox seguro, estratégia de credenciais, aprovação de tratamento de dados e decisão de access-control de produção.

## Escopo atual

AccessTrace é intencionalmente local e sintético hoje. Ele ainda não se conecta a APIs reais do Slack, Google Workspace, GitHub ou AWS. Ele possui auth local e fronteiras no formato de RBAC para demos, mas não possui autenticação de produção, billing, entrega real de notificações, isolamento multi-tenant de produção nem promessas de segurança para produção.

Essa limitação faz parte do desenho: a versão atual prova a base de dados, o fluxo de investigação, a forma SaaS/self-hosted e a fronteira de acesso via agente de IA antes de adicionar conectores reais ou controles de produção.
