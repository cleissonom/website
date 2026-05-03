---
title: CLI Tools Collection
slug: cli-tools
summary: Caixa de ferramentas de linha de comando construída em Rust e C para processamento de imagens, fluxos de terminal com Python, requisições HTTP brutas e automação de ganhos/relatórios.
dateStart: "2024-06-01T12:00:00.000Z"
role: Engenheiro de Software
status: active
type: developer-tool
stage: maintained
tags:
  - CLI
  - Rust
  - C
  - Developer Tools
  - Automation
  - libcurl
stack:
  - Rust
  - C
  - libcurl
  - Make
  - Shell
links:
  repo: https://github.cleisson.com/cli_tools
coverImage: /projects/cli_tools.png
highlights:
  - Criei cinco ferramentas CLI em Rust e C para automação de imagens, compactação de código, requisições HTTP brutas e relatórios de ganhos com conversão de moeda.
  - Unifiquei a coleção com build/test via Make e um instalador público para macOS que funciona sem clonar o repositório.
  - Adicionei testes focados em parsing de CLI, caminhos de saída seguros, parsing HTTP, armazenamento CSV, filtros de relatório e exportação.
---

Criei esta coleção para transformar pequenos fluxos recorrentes em ferramentas de linha de comando reutilizáveis, enquanto pratico Rust, C, testes e ergonomia de instalação local.

O repositório é propositalmente prático: cada ferramenta resolve um problema específico, mas a coleção compartilha scripts de build, orquestração de testes e instalação para funcionar como uma caixa de ferramentas real para desenvolvedores.

## O que está incluído

- `imgconvert`: CLI em Rust para converter imagens entre formatos validando caminhos de saída.
- `imgcrop`: CLI em Rust para recortar imagens em tamanhos exatos com controles de proporção e enquadramento.
- `pypaste`: CLI em Rust que compacta scripts Python para fluxos de colagem no terminal e clipboard.
- `raw_http`: ferramenta em C/libcurl que envia requisições HTTP brutas a partir de arquivos `.txt` e imprime ou salva respostas completas.
- `workpay`: ferramenta em C/libcurl para cálculo de ganhos, conversão de moedas, persistência em CSV e exportação de relatórios.

## Onde foquei

- Estrutura multilíngue com projetos Rust e C no mesmo repositório.
- Fluxos locais repetíveis usando Makefiles e scripts na raiz.
- Comportamento seguro de saída de arquivos para evitar sobrescritas acidentais.
- Instalação pública no macOS por script baseado em tarball, sem exigir clone manual.
- Testes pequenos e direcionados para parsing, formatação, execução de requisições e relatórios.
