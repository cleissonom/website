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
  repo: https://github.com/cleissonom/devimg
  package: https://crates.io/crates/devimg
coverImage: /projects/devimg.png
highlights:
  - Publiquei a CLI Rust no crates.io como `devimg`, com a biblioteca reutilizável `devimg-core` por baixo.
  - Adicionei nomes com hash de conteúdo, controles de crop, overrides por preset, helpers gerados a partir do manifesto, diagnósticos de framework e artefatos visuais de revisão.
  - Lancei uma GitHub Action pública, binários de release com checksum e uso em produção no pipeline de imagens deste site.
---

DevImg é um pipeline de imagens para desenvolvimento criado para tornar fluxos de imagens frontend reproduzíveis, revisáveis e validados em CI em vez de manuais. Ele foi pensado para times que mantêm assets estáticos no repositório e querem que variantes geradas se comportem como artefatos normais de build.

A ferramenta lê um `devimg.toml`, escaneia pastas de origem, gera variantes configuradas, escreve um manifesto JSON, exporta helpers amigáveis para a aplicação, produz um relatório Markdown e valida se os arquivos gerados existem, estão atualizados e respeitam os orçamentos configurados. Ela fica ao lado dos componentes de imagem do framework e da CDN: DevImg cuida da geração determinística das variantes, enquanto o frontend decide como renderizar os assets selecionados.

## Instalação e CI

Instale a CLI com Rust 1.88 ou mais recente:

```bash
cargo install devimg
```

Use a GitHub Action pública em pull requests:

```yaml
- uses: cleissonom/devimg/action@v0.2.6
  with:
    mode: check
```

A Action baixa o binário correspondente do GitHub Release, valida o checksum SHA-256 e executa o mesmo comportamento da CLI usada localmente.

## Fluxo de uso

1. Defina fontes, presets, larguras, formatos, qualidade, crop e budgets em `devimg.toml`.
2. Rode `devimg optimize` para gerar variantes responsivas e o manifesto.
3. Rode `devimg manifest export` quando a aplicação precisar de um helper TypeScript ou JSON versionado para nomes com hash de conteúdo.
4. Rode `devimg review` para criar um artefato HTML estático de revisão visual.
5. Rode `devimg check` no CI para bloquear imagens ausentes, antigas, grandes demais ou fora de sincronia com a configuração.

## O que construí

- Biblioteca core em Rust responsável por configuração, scan, planejamento, transformações, manifestos, relatórios, orçamentos e validação.
- CLI em Rust com comandos `init`, `optimize`, `check`, `doctor`, `report`, `inspect`, artefato de revisão e exportação de manifesto.
- Pacotes no crates.io para a CLI de uso direto e para a biblioteca core reutilizável.
- GitHub Action pública que executa a CLI em pull requests e falha quando imagens geradas estão ausentes, antigas, grandes demais ou fora de sincronia.
- Nomes de arquivos com hash de conteúdo para permitir cache imutável com segurança.
- Âncoras de crop, pontos focais normalizados e overrides por arquivo para screenshots e diagramas reais.
- Exportação TypeScript do manifesto para que aplicações consumam caminhos com hash sem tabelas mantidas manualmente.
- Diagnósticos `doctor` cientes de frameworks, explicando validação de helpers e os modos esperados de consumo com `img`/`picture`, componente `Image` do framework ou otimização em camadas.
- Artefato HTML estático de revisão para inspecionar variantes geradas localmente ou enviadas pelo CI.

## Por que é útil

Trabalho com imagens em frontend costuma gerar drift porque os arquivos derivados são fáceis de esquecer, difíceis de revisar e muitas vezes dependem de scripts ad hoc. DevImg deixa esse fluxo explícito: imagem de origem, configuração, variantes geradas, manifesto, helper exportado, relatório Markdown e artefato de revisão caminham juntos no mesmo pull request.

Para sites estáticos, portfólios, documentações e páginas de marketing, isso mantém qualidade visual e orçamento de bytes visíveis sem exigir um serviço hospedado ou armazenamento remoto.

## Por que construí

O projeto começou a partir das ideias menores de `imgconvert` e `imgcrop`, depois evoluiu para um fluxo produtizado para imagens de portfólio e sites estáticos.

Eu queria que o pipeline se comportasse como infraestrutura de desenvolvimento: configuração determinística, saída repetível, relatórios explícitos, validação em CI, artefatos de release e uso real em produção. Imagens geradas devem aparecer em PRs como material normal de revisão: fonte/configuração, variantes geradas, manifesto, helper exportado, relatório e artefato visual andando juntos.

## Prova em produção

Este site usa DevImg para imagens de cards e banners dos projetos. As imagens de origem ficam em `public/projects`, as variantes geradas ficam em `public/images/generated` e o código da aplicação lê um helper TypeScript versionado gerado a partir do manifesto.

O CI usa a Action pública `cleissonom/devimg/action@v0.2.6`, baixa um binário de release com checksum, executa `devimg check --fail-on-warning` em modo estrito, confirma que o helper exportado está atualizado, envia um artefato de revisão e roda dry-runs dos artefatos de revisão por IA, alt text e rascunho de página de projeto da OpenAI sem chaves de API. O rascunho em prosa é escrito apenas em `$RUNNER_TEMP` e não é commitado nem publicado pelo CI. O arquivo de configuração é o `devimg.toml` padrão, então o workflow fica curto enquanto os deploys na Vercel seguem usando assets estáticos versionados com nomes de arquivo com hash de conteúdo compatíveis com CDN.

## Escopo atual

DevImg hoje foca em assets estáticos locais e fluxos estáveis com PNG, JPEG, WebP e saída AVIF opt-in. Ele ainda não oferece serviço hospedado, armazenamento remoto, commits automáticos em pull requests, automação por IA ou interface web.
