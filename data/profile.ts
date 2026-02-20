import type { Locale } from "@/lib/i18n"
import { SITE_HEADLINE, SITE_LINKS, SITE_NAME, SITE_SHORT_TITLE } from "@/lib/site"

export type ExperienceRole = {
  title: string
  period: string
  bullets: string[]
}

export type ExperienceCompany = {
  company: string
  employment: string
  location: string
  roles: ExperienceRole[]
}

export const siteIdentity = {
  name: SITE_NAME,
  shortTitle: SITE_SHORT_TITLE,
  headline: SITE_HEADLINE,
  links: SITE_LINKS
} as const

export const aboutByLocale: Record<Locale, string[]> = {
  "en-US": [
    "Senior Software Engineer specializing in backend development, cloud infrastructure, and scalable systems.",
    "I work on designing and building production software using Node.js, Python, AWS, Kubernetes, and modern cloud-native technologies.",
    "My experience includes designing scalable backend systems, building cloud infrastructure, developing APIs and distributed systems, and contributing to architecture decisions in startup and international environments.",
    "I am passionate about system design, performance, and building reliable software. Outside of work, I explore new technologies and build personal projects."
  ],
  "pt-BR": [
    "Desenvolvedor de Software Sênior especializado em desenvolvimento backend, infraestrutura em nuvem e sistemas escaláveis.",
    "Atuo no design e desenvolvimento de software em produção usando Node.js, Python, AWS, Kubernetes e tecnologias modernas cloud-native.",
    "Tenho experiência em arquitetura e evolução de sistemas backend escaláveis, desenvolvimento e operação de infraestrutura em nuvem, criação de APIs e sistemas distribuídos, atuação em startups e ambientes internacionais, além de contribuir ativamente para decisões técnicas e arquitetura.",
    "Sou apaixonado por design de sistemas, performance e software confiável. Fora do trabalho, gosto de explorar novas tecnologias e desenvolver projetos pessoais."
  ]
}

export const focusAreas = [
  "Backend Engineering",
  "Cloud Infrastructure",
  "Distributed Systems",
  "System Design",
  "Scalability & Performance",
  "AWS",
  "Kubernetes",
  "Node.js",
  "Python",
  "AI-powered products"
] as const

export const experienceTimelineByLocale: Record<Locale, ExperienceCompany[]> = {
  "en-US": [
    {
      company: "Productera LLC",
      employment: "Full-time",
      location: "United States - Remote",
      roles: [
        {
          title: "Senior Software Engineer - Encore Project",
          period: "Jul 2024 - Present",
          bullets: []
        },
        {
          title: "Software Engineer - ThirdEdition Project",
          period: "May 2024 - Jul 2024 (2 months)",
          bullets: [
            "This project provided invaluable experience in technology decision-making, comprehensive system infrastructure planning, and front-end development.",
            "Planned and structured the system infrastructure using AWS services.",
            "Employed Terraform to manage and control AWS infrastructure development.",
            "Developed the entire front-end structure and made all technology decisions.",
            "Contributed to backend development."
          ]
        }
      ]
    },
    {
      company: "MeMima.com.br",
      employment: "Full-time",
      location: "Brazil - Remote",
      roles: [
        {
          title: "Software Engineer",
          period: "Jul 2023 - Feb 2025 (1 year and 8 months)",
          bullets: [
            "This early-stage startup experience taught me how to launch a product and drive adoption.",
            "Reached over 2,000 active users within a few months.",
            "Introduced innovative features to ensure continuous product development.",
            "Led strategic planning and collaborative project ideation.",
            "Integrated payment gateways and chat functionalities.",
            "Improved user flow and recommendations using graph databases.",
            "Delivered a robust and scalable cloud infrastructure on AWS.",
            "Leveraged AWS AI services for photo processing workflows including age verification and facial recognition."
          ]
        }
      ]
    },
    {
      company: "Avanti E-commerce & Digital Marketing",
      employment: "Full-time",
      location: "Florianopolis, Santa Catarina, Brazil",
      roles: [
        {
          title: "Software Engineer (Remote)",
          period: "Feb 2024 - May 2024 (3 months)",
          bullets: [
            "Planned and developed an e-commerce mobile application built with React Native and Expo."
          ]
        },
        {
          title: "Software Engineer (Remote)",
          period: "Jan 2023 - Jul 2023 (6 months)",
          bullets: [
            "Successfully developed and deployed mobile applications for major brands.",
            "Developed and maintained software for 150+ users, including applications for GOL, Kopenhagen, and Intelbras on App Store and Play Store.",
            "Built and maintained APIs with Django and Django REST Framework using PostgreSQL and Heroku.",
            "Integrated Firebase Analytics, VTEX Orders, WordPress, and RD Station.",
            "Created a notification system with AWS SNS and SES, Celery, and Firebase Cloud Messaging."
          ]
        },
        {
          title: "Intern Software Engineer (On-site)",
          period: "Aug 2022 - Jan 2023 (6 months)",
          bullets: [
            "Joined the research, development, and innovation team.",
            "Worked with the VTEX framework for e-commerce development.",
            "Developed a mobile application from scratch."
          ]
        }
      ]
    }
  ],
  "pt-BR": [
    {
      company: "Productera LLC",
      employment: "Tempo integral",
      location: "Estados Unidos - Remoto",
      roles: [
        {
          title: "Engenheiro de Software Sênior - Projeto Encore",
          period: "jul. 2024 - atual",
          bullets: []
        },
        {
          title: "Engenheiro de Software - Projeto ThirdEdition",
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
          title: "Engenheiro de Software",
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
          title: "Engenheiro de Software (Remoto)",
          period: "fev. 2024 - mai. 2024 (3 meses)",
          bullets: [
            "Planejei e desenvolvi um aplicativo mobile de e-commerce com React Native e Expo."
          ]
        },
        {
          title: "Engenheiro de Software (Remoto)",
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
          title: "Estagiário de Engenharia de Software (Presencial)",
          period: "ago. 2022 - jan. 2023 (6 meses)",
          bullets: [
            "Atuei no time de pesquisa, desenvolvimento e inovação.",
            "Trabalhei com o framework VTEX para desenvolvimento de e-commerce.",
            "Desenvolvi um aplicativo mobile do zero."
          ]
        }
      ]
    }
  ]
}

export type UiDictionary = {
  nav: {
    home: string
    projects: string
    blog: string
    resume: string
  }
  cta: {
    contact: string
    linkedin: string
    downloadResume: string
  }
  sections: {
    about: string
    focusAreas: string
    experience: string
    projects: string
    blog: string
  }
  labels: {
    locale: string
    light: string
    dark: string
    readMore: string
    published: string
    updated: string
    role: string
    status: string
    stack: string
    highlights: string
    experienceTimelineAria: string
    backToProjects: string
    backToBlog: string
    notFoundTitle: string
    notFoundDescription: string
    goHome: string
  }
}

export const uiByLocale: Record<Locale, UiDictionary> = {
  "en-US": {
    nav: {
      home: "About",
      projects: "Projects",
      blog: "Blog",
      resume: "Resume"
    },
    cta: {
      contact: "Contact",
      linkedin: "View LinkedIn",
      downloadResume: "Download resume PDF"
    },
    sections: {
      about: "About",
      focusAreas: "Focus Areas",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog"
    },
    labels: {
      locale: "Language",
      light: "Light",
      dark: "Dark",
      readMore: "Read more",
      published: "Published",
      updated: "Updated",
      role: "Role",
      status: "Status",
      stack: "Stack",
      highlights: "Highlights",
      experienceTimelineAria: "Experience timeline",
      backToProjects: "Back to projects",
      backToBlog: "Back to blog",
      notFoundTitle: "Page not found",
      notFoundDescription: "The page you requested does not exist for this locale.",
      goHome: "Go to home"
    }
  },
  "pt-BR": {
    nav: {
      home: "Sobre",
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
      role: "Função",
      status: "Status",
      stack: "Stack",
      highlights: "Destaques",
      experienceTimelineAria: "Linha do tempo de experiência",
      backToProjects: "Voltar para projetos",
      backToBlog: "Voltar para o blog",
      notFoundTitle: "Página não encontrada",
      notFoundDescription: "A página solicitada não existe para este idioma.",
      goHome: "Ir para o início"
    }
  }
}
