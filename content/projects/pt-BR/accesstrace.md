---
title: AccessTrace
slug: accesstrace
summary: Laboratório local de analytics para cibersegurança que normaliza eventos sintéticos no estilo AWS, Google Workspace e Slack em ClickHouse e Postgres, com views de investigação para dashboard.
dateStart: "2026-05-02T12:00:00.000Z"
role: Engenheiro de Software
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
  - Criei um fluxo local determinístico de ingestão com 1.200 eventos normalizados sintéticos entre fontes no estilo AWS, Google Workspace e Slack.
  - Modelei armazenamento de payloads brutos, eventos de acesso normalizados, rastreamento de importações e scripts de consulta com resultados no formato de dashboard.
  - Adicionei funções tipadas de consulta no servidor, validação de filtros com Zod, primeiro dashboard, experimentos com tabelas-resumo no ClickHouse e revisão de segurança local.
coverImage: /projects/accesstrace-overview.png
---

AccessTrace é um protótipo local de produto para explorar como logs de auditoria de segurança podem virar dados úteis para investigação.

O projeto parte de eventos sintéticos com formatos parecidos com fontes reais, normaliza tudo em um modelo comum de eventos de acesso, calcula risco com regras explicáveis, armazena dados analíticos no ClickHouse, guarda metadados de importação no Postgres e entrega views de dashboard para métricas gerais, logs filtrados, atores de maior risco, recursos sensíveis, volume por hora e detalhes de eventos.

## O que eu construí

- Setup com Docker Compose para ClickHouse e Postgres locais.
- Inicialização idempotente do banco para eventos brutos, eventos normalizados, lotes de importação, erros de importação e tabelas-resumo no ClickHouse.
- Gerador determinístico de eventos sintéticos cobrindo registros no estilo AWS CloudTrail, Google Workspace e Slack Audit Logs.
- Normalização e score de risco com cobertura focada em Vitest.
- Camada de consultas no servidor com funções tipadas, validação com Zod, filtros por período, paginação e query parameters do ClickHouse.
- Primeiro dashboard com visão geral, explorador de logs e página de detalhe do evento.
- Documentação de arquitetura, dados sintéticos, aprendizados de ClickHouse, estudo de caso, screenshots, auditoria de dependências, revisão de segurança e posicionamento de lançamento.

## Por que eu construí

Eu queria um projeto de portfólio que parecesse um sistema real, não apenas uma interface. AccessTrace exercita modelagem de dados, ingestão, consultas analíticas, fluxos locais reproduzíveis, validação backend, design de dashboard e revisão de segurança em um caso concreto de cibersegurança.

## Escopo atual

AccessTrace é intencionalmente local e sintético. Ele ainda não se conecta a APIs reais do Slack, Google Workspace ou AWS. Também não possui autenticação, isolamento multi-tenant de produção nem promessas de segurança para produção.

Essa limitação faz parte do desenho: a primeira versão prova a base de dados e o fluxo de investigação antes de adicionar conectores reais ou controles de produção.
