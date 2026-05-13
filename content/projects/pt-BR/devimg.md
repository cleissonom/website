---
title: DevImg
slug: devimg
summary: CLI em Rust com GitHub Action para gerar variantes responsivas de imagens frontend, exportar helpers da aplicação, criar artefatos de revisão e validar frescor e orçamento no CI.
dateStart: "2026-05-01T12:00:00.000Z"
role: Engenheiro de Software
status: active
type: developer-tool
stage: maintained
tags:
  - Rust
  - CLI
  - GitHub Actions
  - Otimização de Imagens
  - Ferramentas de Desenvolvimento
stack:
  - Rust
  - Clap
  - Serde
  - GitHub Actions
  - Processamento de Imagens
  - Markdown
links:
  repo: https://github.cleisson.com/devimg
coverImage: /projects/devimg.png
highlights:
  - Criei um workspace Rust com biblioteca core reutilizável e CLI `devimg` para fluxos repetíveis de otimização de imagens.
  - Adicionei nomes com hash de conteúdo, controles de crop, overrides por preset, helpers gerados a partir do manifesto, diagnósticos de framework e artefatos visuais de revisão.
  - Usei o fluxo neste site com `devimg optimize`, `devimg manifest export`, `devimg check --fail-on-warning` e um binário fixado de GitHub Release.
---

DevImg é um pipeline de imagens para desenvolvimento criado para tornar fluxos de imagens frontend reproduzíveis, revisáveis e validados em CI em vez de manuais.

A ferramenta lê um `devimg.toml`, escaneia pastas de origem, gera variantes configuradas, escreve um manifesto JSON, exporta helpers amigáveis para a aplicação, produz um relatório Markdown e valida se os arquivos gerados existem, estão atualizados e respeitam os orçamentos configurados.

## O que construí

- Biblioteca core em Rust responsável por configuração, scan, planejamento, transformações, manifestos, relatórios, orçamentos e validação.
- CLI em Rust com comandos `init`, `optimize`, `check`, `doctor`, `report`, `inspect`, artefato de revisão e exportação de manifesto.
- GitHub Action que executa a CLI em pull requests e falha quando imagens geradas estão ausentes, antigas, grandes demais ou fora de sincronia.
- Nomes de arquivos com hash de conteúdo para permitir cache imutável com segurança.
- Âncoras de crop, pontos focais normalizados e overrides por arquivo para screenshots e diagramas reais.
- Exportação TypeScript do manifesto para que aplicações consumam caminhos com hash sem tabelas mantidas manualmente.
- Diagnósticos `doctor` cientes de frameworks, explicando validação de helpers e os modos esperados de consumo com `img`/`picture`, componente `Image` do framework ou otimização em camadas.
- Artefato HTML estático de revisão para inspecionar variantes geradas localmente ou enviadas pelo CI.

## Por que construí

O projeto começou a partir das ideias menores de `imgconvert` e `imgcrop`, depois evoluiu para um fluxo produtizado para imagens de portfólio e sites estáticos.

Eu queria que o pipeline se comportasse como infraestrutura de desenvolvimento: configuração determinística, saída repetível, relatórios explícitos, validação em CI, artefatos de release e uso real em produção. Imagens geradas devem aparecer em PRs como material normal de revisão: fonte/configuração, variantes geradas, manifesto, helper exportado, relatório e artefato visual andando juntos.

## Prova em produção

Este site usa DevImg para imagens de cards e banners dos projetos. As imagens de origem ficam em `public/projects`, as variantes geradas ficam em `public/images/generated` e o código da aplicação lê um helper TypeScript versionado gerado a partir do manifesto.

O CI baixa um binário fixado de uma GitHub Release privada, valida o checksum, executa `devimg check --fail-on-warning` em modo estrito e confirma que o helper exportado está atualizado. Isso mantém os deploys na Vercel usando assets estáticos versionados, com nomes de arquivo com hash de conteúdo compatíveis com CDN.

## Escopo atual

DevImg hoje foca em assets estáticos locais e fluxos estáveis com PNG, JPEG, WebP e saída AVIF opt-in. Ele ainda não oferece serviço hospedado, armazenamento remoto, commits automáticos em pull requests, automação por IA ou interface web.
