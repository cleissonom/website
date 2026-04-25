import type { LocaleDictionary } from "@/data/i18n/types"
import { buildRecommendations, type RecommendationTranslationsById } from "@/data/recommendations"

const recommendationTranslations: RecommendationTranslationsById = {
  "valeriia-kruchinina": {
    context: "9 de julho de 2024, Valeriia gerenciou Cleisson diretamente",
    quote: [
      "Fui product manager em um projeto no qual o Cleisson atuou como desenvolvedor front-end, ou eu diria até full-stack.",
      "Fiquei impressionada com a rapidez e eficiência com que ele trabalhava. Ele também estava profundamente envolvido no projeto e propôs soluções que melhoraram significativamente a experiência do usuário. Foi um prazer trabalhar com um profissional tão incrível quanto ele!"
    ]
  },
  "cristian-karsten": {
    context: "17 de julho de 2023, Cristian gerenciou Cleisson diretamente",
    quote: [
      "Fui líder do Cleisson durante um período de em torno de nove meses no setor de pesquisa e desenvolvimento e, de maneira geral, foi um privilégio conhecer e trabalhar com ele. Abraçou desde o início o desafio de desenvolver do zero uma aplicação mobile first, o qual executou com perícia e qualidade muito superior à de outros profissionais que já conheci. Em geral, é um dos desenvolvedores com maior potencial futuro com quem já trabalhei."
    ]
  },
  "gabriel-lobo": {
    context:
      "20 de abril de 2023, Gabriel era sênior ao Cleisson, mas não o gerenciava diretamente",
    quote: [
      "É com satisfação que expresso minha admiração pela competência e comprometimento do Cleisson. Ele demonstra interesse e entusiasmo constantes em compreender os desafios que lhe são apresentados, sendo extremamente proativo e curioso na busca por conhecimento.",
      "Reforço minha recomendação ao Cleisson como um profissional excepcional! Ele se dedica intensamente a cada atividade, sempre buscando entregar resultados de alta qualidade."
    ]
  },
  "andrezza-de-melo-troian": {
    context: "14 de julho de 2023, Andrezza trabalhou com Cleisson no mesmo time",
    quote: [
      "Recomendo o Cleisson como um talentoso desenvolvedor com quem tive o prazer de trabalhar. Atuando na gestão da equipe, pude testemunhar sua habilidade técnica impressionante e compromisso com a excelência. Cleisson foi fundamental para o sucesso dos projetos, contribuindo com sua expertise e colaboração."
    ]
  },
  "matheus-goulart": {
    context: "14 de julho de 2023, Matheus trabalhou com Cleisson no mesmo time",
    quote: [
      "É com grande satisfação que recomendo Cleisson como desenvolvedor React Native. Tive o prazer de trabalhar ao lado dele em vários projetos e sua expertise nessa área é impressionante. Cleisson possui um profundo conhecimento técnico, habilidades sólidas em desenvolvimento e um olhar meticuloso para os detalhes. Sua capacidade de criar aplicações de alta qualidade usando o React Native é notável. Além disso, Cleisson é um membro de equipe extremamente colaborativo, sempre disposto a compartilhar conhecimentos e ajudar os colegas. Recomendo Cleisson sem dúvidas como um desenvolvedor React Native altamente competente."
    ]
  },
  "vinicius-dos-santos-bueno": {
    context: "14 de julho de 2023, Vinicius trabalhou com Cleisson no mesmo time",
    quote: [
      "Trabalhei junto com Cleisson no mesmo programa de estágio e no mesmo setor. Ele sempre se destacou como exemplo de dedicação, responsabilidade e qualidade no desenvolvimento. Foi um prazer trabalhar com Cleisson e eu o recomendo 100%. Sua ética de trabalho, habilidades e colaboração o tornam um profissional de destaque."
    ]
  },
  "luisa-foppa": {
    context: "14 de julho de 2023, Luísa trabalhou com Cleisson no mesmo time",
    quote: [
      "Cleisson é um desenvolvedor excelente e tinha um relacionamento muito bom com todos da equipe em que trabalhei. A comunicação dele é excepcional, e sua organização e dedicação para realizar os projetos são admiráveis. Considerando as qualidades citadas, ele tem muito potencial para ingressar e trazer sucesso para qualquer equipe e projeto."
    ]
  }
}

export const ptBRDictionary: LocaleDictionary = {
  site: {
    shortTitle: "Desenvolvedor de Software Sênior",
    headline:
      "Desenvolvedor de Software Sênior | Especialista em Node.js, Python e AWS | Sistemas Escaláveis | Kubernetes | Design de Sistemas | Construindo Produtos com IA"
  },
  ui: {
    nav: {
      home: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      blog: "Blog",
      resume: "Currículo"
    },
    cta: {
      contact: "Contato",
      linkedin: "Ver LinkedIn",
      downloadResume: "Baixar currículo em PDF"
    },
    sections: {
      about: "Sobre",
      focusAreas: "Áreas de foco",
      experience: "Experiência",
      projects: "Projetos",
      blog: "Blog"
    },
    labels: {
      locale: "Idioma",
      light: "Claro",
      dark: "Escuro",
      readMore: "Ler mais",
      published: "Publicado",
      updated: "Atualizado",
      period: "Período",
      role: "Função",
      status: "Status",
      stack: "Stack",
      topics: "Tópicos",
      highlights: "Destaques",
      experienceTimelineAria: "Linha do tempo de experiência",
      mainNavigationAria: "Navegação principal",
      backToProjects: "Voltar para projetos",
      backToBlog: "Voltar para o blog",
      notFoundTitle: "Página não encontrada",
      notFoundDescription: "A página solicitada não existe para este idioma.",
      goHome: "Ir para o início",
      opensInNewTab: "abre em uma nova aba"
    }
  },
  content: {
    about: [
      "Desenvolvedor de Software Sênior especializado em desenvolvimento backend, infraestrutura em nuvem e sistemas escaláveis.",
      "Atuo no design e desenvolvimento de software em produção usando Node.js, Python, AWS, Kubernetes e tecnologias modernas cloud-native.",
      "Tenho experiência em arquitetura e evolução de sistemas backend escaláveis, desenvolvimento e operação de infraestrutura em nuvem, criação de APIs e sistemas distribuídos, atuação em startups e ambientes internacionais, além de contribuir ativamente para decisões técnicas e arquitetura.",
      "Sou apaixonado por design de sistemas, performance e software confiável. Fora do trabalho, gosto de explorar novas tecnologias e desenvolver projetos pessoais."
    ],
    focusAreas: [
      "Desenvolvimento de Software",
      "Infraestrutura em Nuvem",
      "Sistemas Distribuídos",
      "Design de Sistemas",
      "Escalabilidade e Performance",
      "AWS",
      "Kubernetes",
      "Node.js",
      "Python",
      "Produtos com IA"
    ],
    experienceTimeline: [
      {
        company: "Productera LLC",
        employment: "Tempo integral",
        location: "Estados Unidos - Remoto",
        roles: [
          {
            title: "Desenvolvedor de Software Sênior - Projeto Encore",
            period: "jul. 2024 - atual",
            bullets: [
              "Migrei um monólito Django para microsserviços usando Kubernetes (EKS) e Python, melhorando escalabilidade e confiabilidade dos deploys.",
              "Desenhei serviços cloud-native aproveitando AWS (RDS, Bedrock, SSM, SQS, EventBridge, EKS).",
              "Migrei a infraestrutura de Terraform e Helm para AWS CDK, padronizando infraestrutura como código.",
              "Construí e mantive pipelines de CI/CD com Octopus Deploy, manifests do Kubernetes e automações em shell.",
              "Arquitetei sistemas orientados a eventos usando SQS e SNS, workers em background e Redis para cache e processamento distribuído.",
              "Desenvolvi recursos com IA, incluindo transcrição de áudio, destaque de conteúdo e transformação de dados.",
              "Integrei provedores de LLM como OpenAI, Perplexity e Anthropic (via Bedrock) para análise, sumarização e automação.",
              "Desenhei arquiteturas escaláveis, defini limites de serviços e liderei o planejamento de implementação.",
              "Colaborei em funcionalidades focadas no usuário, garantindo performance, conformidade e confiabilidade em ambientes de produção."
            ]
          },
          {
            title: "Desenvolvedor de Software - Projeto ThirdEdition",
            period: "mai. 2024 - jul. 2024 (2 meses)",
            bullets: [
              "Esse projeto me proporcionou experiência valiosa em tomada de decisões tecnológicas, planejamento completo de infraestrutura e desenvolvimento front-end.",
              "Planejei e estruturei a infraestrutura do sistema com serviços da AWS.",
              "Utilizei Terraform para gerenciar e controlar a evolução da infraestrutura na AWS.",
              "Desenvolvi toda a estrutura de front-end e conduzi as decisões tecnológicas.",
              "Também contribuí para o desenvolvimento backend."
            ]
          }
        ]
      },
      {
        company: "MeMima.com.br",
        employment: "Tempo integral",
        location: "Brasil - Remoto",
        roles: [
          {
            title: "Desenvolvedor de Software",
            period: "jul. 2023 - fev. 2025 (1 ano e 8 meses)",
            bullets: [
              "A experiência em startup em estágio inicial me ensinou a lançar um produto e impulsionar sua adoção.",
              "Alcancei mais de 2.000 usuários ativos em poucos meses.",
              "Introduzi recursos inovadores para sustentar a evolução contínua do produto.",
              "Liderei o planejamento estratégico e a ideação colaborativa de projetos.",
              "Integrei gateways de pagamento e funcionalidades de chat.",
              "Melhorei o fluxo do usuário e as recomendações com bancos de dados em grafo.",
              "Entreguei uma infraestrutura em nuvem robusta e escalável na AWS.",
              "Utilizei serviços de IA da AWS em fluxos de processamento de fotos, incluindo verificação de idade e reconhecimento facial."
            ]
          }
        ]
      },
      {
        company: "Avanti E-commerce & Digital Marketing",
        employment: "Tempo integral",
        location: "Florianópolis, Santa Catarina, Brasil",
        roles: [
          {
            title: "Desenvolvedor de Software (Remoto)",
            period: "fev. 2024 - mai. 2024 (3 meses)",
            bullets: [
              "Planejei e desenvolvi um aplicativo mobile de e-commerce com React Native e Expo."
            ]
          },
          {
            title: "Desenvolvedor de Software (Remoto)",
            period: "jan. 2023 - jul. 2023 (6 meses)",
            bullets: [
              "Desenvolvi e publiquei aplicativos mobile para grandes marcas.",
              "Desenvolvi e mantive software para mais de 150 usuários, incluindo apps da GOL, Kopenhagen e Intelbras na App Store e na Play Store.",
              "Criei e mantive APIs com Django e Django REST Framework usando PostgreSQL e Heroku.",
              "Integrei Firebase Analytics, VTEX Orders, WordPress e RD Station.",
              "Criei um sistema de notificações com AWS SNS e SES, Celery e Firebase Cloud Messaging."
            ]
          },
          {
            title: "Estagiário de Desenvolvimento de Software (Presencial)",
            period: "ago. 2022 - jan. 2023 (6 meses)",
            bullets: [
              "Atuei no time de pesquisa, desenvolvimento e inovação.",
              "Trabalhei com o framework VTEX para desenvolvimento de e-commerce.",
              "Desenvolvi um aplicativo mobile do zero."
            ]
          }
        ]
      }
    ],
    recommendations: buildRecommendations(recommendationTranslations)
  },
  pages: {
    home: {
      breadcrumbLabel: "Início",
      keywords: [
        "Desenvolvimento de Software",
        "Infraestrutura em Nuvem",
        "Sistemas Distribuídos",
        "Design de Sistemas",
        "Escalabilidade e Performance",
        "AWS",
        "Kubernetes",
        "Node.js",
        "Python",
        "Produtos com IA"
      ]
    },
    experience: {
      metadataTitle: "Experiência",
      metadataDescription:
        "Experiência de engenharia de software com Node.js, Python, AWS, Kubernetes, microsserviços, produtos com IA e infraestrutura em nuvem.",
      lead: "Uma visão detalhada dos times, sistemas e resultados por trás do meu trabalho em engenharia de software.",
      overviewHeading: "Perfil profissional",
      currentRoleLabel: "Função atual",
      focusLabel: "Foco principal",
      statsLabels: {
        recommendations: "Recomendações"
      },
      latestRoleLabel: "Função mais recente",
      opensInNewTabLabel: "abre em uma nova aba",
      timelineHeading: "Experiência Profissional",
      recommendationsHeading: "Recomendações",
      recommendationsLead: "Recomendações recebidas de colegas e lideranças.",
      viewProfileLabel: "Ver perfil no LinkedIn"
    },
    projects: {
      metadataTitle: "Projetos",
      metadataDescription:
        "Projetos de desenvolvimento de software com foco em backend, nuvem e entrega mobile.",
      lead: "Recortes de projetos orientados a resultado, com decisões de arquitetura, restrições de entrega e impacto mensurável.",
      filterHeading: "Filtrar por label",
      allLabels: "Todas as labels",
      noResultsDescription: "Nenhum projeto encontrado para a label selecionada.",
      notFoundTitle: "Projeto não encontrado",
      notFoundDescription: "Projeto não encontrado para este idioma.",
      linksHeading: "Links",
      statusLabels: {
        active: "Ativo",
        archived: "Arquivado"
      },
      linkLabels: {
        repo: "Repositório",
        live: "Aplicação",
        caseStudy: "Estudo de caso",
        demo: "Demonstração"
      }
    },
    blog: {
      metadataTitle: "Blog",
      metadataDescription:
        "Conteúdos sobre desenvolvimento de software backend, infraestrutura em nuvem e arquitetura escalável.",
      lead: "Notas de trabalho em desenvolvimento de software: confiabilidade, infraestrutura, sistemas distribuídos e estratégia de entrega.",
      notFoundTitle: "Post não encontrado",
      notFoundDescription: "Post não encontrado para este idioma."
    },
    resume: {
      metadataTitle: "Currículo",
      metadataDescription:
        "Visão geral do currículo com download direto em PDF e links de contato.",
      summary:
        "Desenvolvedor de Software Sênior focado em sistemas backend, infraestrutura em nuvem e entrega de produtos escaláveis."
    },
    notFound: {
      metadataTitle: "404",
      metadataDescription: "Rota localizada de página não encontrada."
    }
  },
  snippets: {
    readMoreAboutPrefix: "sobre",
    readingMinutesShort: "min"
  }
}
