---
title: DevImg
slug: devimg
summary: Pipeline de imagens em Rust com GitHub Action para otimizar imagens de projetos, gerar variantes responsivas, emitir manifestos e relatórios, e validar orçamentos de imagem no CI.
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
  - Adicionei nomes com hash de conteúdo, controles de crop, overrides por preset, helpers gerados a partir do manifesto e validação de drift no CI.
  - Empacotei a ferramenta como GitHub Release versionado e usei em produção no pipeline de imagens deste site.
---

DevImg é um pipeline de imagens para desenvolvimento criado para tornar fluxos de imagens em sites estáticos mais reproduzíveis e menos manuais.

A ferramenta lê um `devimg.toml`, escaneia pastas de origem, gera variantes configuradas, escreve um manifesto JSON, produz um relatório Markdown e valida se os arquivos gerados existem, estão atualizados e respeitam os orçamentos configurados.

## O que construí

- Biblioteca core em Rust responsável por configuração, scan, planejamento, transformações, manifestos, relatórios, orçamentos e validação.
- CLI em Rust com comandos `init`, `optimize`, `check`, `report`, `inspect` e exportação de manifesto.
- GitHub Action que executa a CLI em pull requests e falha quando imagens geradas estão ausentes, antigas, grandes demais ou fora de sincronia.
- Nomes de arquivos com hash de conteúdo para permitir cache imutável com segurança.
- Âncoras de crop, pontos focais normalizados e overrides por arquivo para screenshots e diagramas reais.
- Exportação TypeScript do manifesto para que aplicações consumam caminhos com hash sem tabelas mantidas manualmente.

## Por que construí

O projeto começou a partir das ideias menores de `imgconvert` e `imgcrop`, depois evoluiu para um fluxo produtizado para imagens de portfólio e sites estáticos.

Eu queria que o pipeline se comportasse como infraestrutura de desenvolvimento: configuração determinística, saída repetível, relatórios explícitos, validação em CI, artefatos de release e uso real em produção.

## Escopo atual

DevImg hoje foca em assets estáticos locais e fluxos estáveis com PNG, JPEG e WebP. Ele ainda não oferece serviço hospedado, armazenamento remoto, commits automáticos em pull requests ou interface web.
