import type { LocaleDictionary } from "@/data/i18n/types"
import { buildRecommendations, type RecommendationTranslationsById } from "@/data/recommendations"

const recommendationTranslations: RecommendationTranslationsById = {
  "valeriia-kruchinina": {
    context: "July 9, 2024, Valeriia managed Cleisson directly",
    quote: [
      "I was the product manager on a project where Cleisson worked as a front-end, or I would even say full-stack developer.",
      "I was impressed by how quickly and efficiently he worked. He was also deeply involved in the project and proposed solutions that significantly improved the user experience. I was delighted to work with such an amazing professional like him!"
    ]
  },
  "cristian-karsten": {
    context: "July 17, 2023, Cristian managed Cleisson directly",
    quote: [
      "I led Cleisson for around nine months in the research and development department, and overall it was a privilege to know and work with him. From the start, he embraced the challenge of building a mobile-first application from scratch, which he executed with expertise and quality far above other professionals I have met. Overall, he is one of the developers with the highest future potential I have ever worked with."
    ]
  },
  "gabriel-lobo": {
    context: "April 20, 2023, Gabriel was senior to Cleisson but did not manage Cleisson directly",
    quote: [
      "It is with satisfaction that I express my admiration for Cleisson's competence and commitment. He shows constant interest and enthusiasm in understanding the challenges that are presented to him, being extremely proactive and curious in the search for knowledge.",
      "I reinforce my recommendation to Cleisson as an exceptional professional! He dedicates himself intensely to each activity, always aiming to deliver high quality results."
    ]
  },
  "andrezza-de-melo-troian": {
    context: "July 14, 2023, Andrezza worked with Cleisson on the same team",
    quote: [
      "I recommend Cleisson as a talented developer with whom I had the pleasure of working. While managing the team, I was able to witness his impressive technical ability and commitment to excellence. Cleisson was essential to the success of the projects, contributing with his expertise and collaboration."
    ]
  },
  "matheus-goulart": {
    context: "July 14, 2023, Matheus worked with Cleisson on the same team",
    quote: [
      "It is with great satisfaction that I recommend Cleisson as a React Native developer. I had the pleasure of working alongside him on several projects, and his expertise in this area is impressive. Cleisson has deep technical knowledge, solid development skills, and meticulous attention to detail. His ability to build high-quality applications using React Native is remarkable. In addition, Cleisson is an extremely collaborative team member, always willing to share knowledge and help colleagues. I recommend Cleisson without hesitation as a highly competent React Native developer."
    ]
  },
  "vinicius-dos-santos-bueno": {
    context: "July 14, 2023, Vinicius worked with Cleisson on the same team",
    quote: [
      "I worked with Cleisson in the same internship program and in the same department. He always stood out as an example of dedication, responsibility, and quality in development. It was a pleasure to work with Cleisson and I recommend him 100%. His work ethic, skills, and collaboration make him an outstanding professional."
    ]
  },
  "luisa-foppa": {
    context: "July 14, 2023, Luísa worked with Cleisson on the same team",
    quote: [
      "Cleisson is an excellent developer and had a very good relationship with everyone on the team I worked with. His communication is exceptional, and his organization and dedication to delivering projects are admirable. Considering the qualities mentioned, he has great potential to join and bring success to any team and project."
    ]
  }
}

export const enUSDictionary: LocaleDictionary = {
  site: {
    shortTitle: "Senior Software Engineer",
    headline:
      "Senior Software Engineer | Node.js, Python & AWS Specialist | Scalable Systems | Kubernetes | System Design | Building AI-Powered Products"
  },
  ui: {
    nav: {
      home: "About",
      experience: "Experience",
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
      period: "Period",
      role: "Role",
      status: "Status",
      stack: "Stack",
      topics: "Topics",
      highlights: "Highlights",
      experienceTimelineAria: "Experience timeline",
      mainNavigationAria: "Main navigation",
      backToProjects: "Back to projects",
      backToBlog: "Back to blog",
      notFoundTitle: "Page not found",
      notFoundDescription: "The page you requested does not exist for this locale.",
      goHome: "Go to home",
      opensInNewTab: "opens in a new tab"
    }
  },
  content: {
    about: [
      "Senior Software Engineer specializing in backend development, cloud infrastructure, and scalable systems.",
      "I work on designing and building production software using Node.js, Python, AWS, Kubernetes, and modern cloud-native technologies.",
      "My experience includes designing scalable backend systems, building cloud infrastructure, developing APIs and distributed systems, and contributing to architecture decisions in startup and international environments.",
      "I am passionate about system design, performance, and building reliable software. Outside of work, I explore new technologies and build personal projects."
    ],
    focusAreas: [
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
    ],
    experienceTimeline: [
      {
        company: "Productera LLC",
        employment: "Full-time",
        location: "United States - Remote",
        roles: [
          {
            title: "Senior Software Engineer - Encore Project",
            period: "Jul 2024 - Present",
            bullets: [
              "Migrated a Django monolith to microservices using Kubernetes (EKS) and Python, improving scalability and deployment reliability.",
              "Designed cloud-native services leveraging AWS (RDS, Bedrock, SSM, SQS, EventBridge, EKS).",
              "Migrated infrastructure from Terraform and Helm to AWS CDK, standardizing infrastructure as code.",
              "Built and maintained CI/CD pipelines with Octopus Deploy, Kubernetes manifests, and shell automation.",
              "Architected event-driven systems using SQS and SNS, background workers, and Redis for caching and distributed processing.",
              "Developed AI-powered features including audio transcription, content highlighting, and data transformation.",
              "Integrated LLM providers such as OpenAI, Perplexity, and Anthropic (via Bedrock) for analysis, summarization, and automation.",
              "Designed scalable architectures, defined service boundaries, and led implementation planning.",
              "Collaborated on user-focused features, ensuring performance, compliance, and reliability in production environments."
            ]
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
    recommendations: buildRecommendations(recommendationTranslations)
  },
  pages: {
    home: {
      breadcrumbLabel: "Home",
      keywords: [
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
      ]
    },
    experience: {
      metadataTitle: "Experience",
      metadataDescription:
        "Senior software engineer experience across Node.js, Python, AWS, Kubernetes, microservices, AI products, and cloud infrastructure.",
      lead: "A detailed view of the teams, systems, and outcomes behind my software engineering work.",
      overviewHeading: "Professional profile",
      currentRoleLabel: "Current role",
      focusLabel: "Core focus",
      statsLabels: {
        recommendations: "Recommendations"
      },
      latestRoleLabel: "Latest role",
      opensInNewTabLabel: "opens in a new tab",
      timelineHeading: "Professional Experience",
      recommendationsHeading: "Recommendations",
      recommendationsLead: "Recommendations received from colleagues and leaders.",
      viewProfileLabel: "View LinkedIn profile"
    },
    projects: {
      metadataTitle: "Personal Projects",
      metadataDescription:
        "Personal software projects spanning portfolio infrastructure, open-source developer tools, and future learning labs.",
      lead: "Real personal projects I build, maintain, or use to learn deeper engineering skills. I keep this page focused on public or demonstrable work instead of draft ideas.",
      filterHeading: "Filter by label",
      allLabels: "All labels",
      clearLabels: "Clear labels",
      noResultsDescription: "No projects found for the selected labels.",
      notFoundTitle: "Project not found",
      notFoundDescription: "Project not found for this locale.",
      linksHeading: "Links",
      typeHeading: "Type",
      stageHeading: "Stage",
      statusLabels: {
        active: "Active",
        archived: "Archived"
      },
      typeLabels: {
        product: "Product",
        "developer-tool": "Developer Tool",
        website: "Website",
        "systems-lab": "Systems Lab",
        game: "Game",
        experiment: "Experiment"
      },
      stageLabels: {
        live: "Live",
        "in-progress": "In progress",
        maintained: "Maintained",
        lab: "Lab",
        archived: "Archived"
      },
      linkLabels: {
        repo: "Repository",
        live: "Live",
        caseStudy: "Case Study",
        demo: "Demo"
      }
    },
    blog: {
      metadataTitle: "Blog",
      metadataDescription:
        "Writing on backend engineering, cloud infrastructure, and scalable architecture.",
      lead: "Notes from production engineering work: reliability, infrastructure, distributed systems, and delivery strategy.",
      notFoundTitle: "Post not found",
      notFoundDescription: "Post not found for this locale."
    },
    resume: {
      metadataTitle: "Resume",
      metadataDescription: "Resume overview with direct PDF download and contact links.",
      summary:
        "Senior Software Engineer focused on backend systems, cloud infrastructure, and scalable product delivery."
    },
    notFound: {
      metadataTitle: "404",
      metadataDescription: "Localized not found route."
    }
  },
  snippets: {
    readMoreAboutPrefix: "about",
    readingMinutesShort: "min"
  }
}
