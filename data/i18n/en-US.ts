import type { LocaleDictionary } from "@/data/i18n/types"

export const enUSDictionary: LocaleDictionary = {
  site: {
    shortTitle: "Senior Software Engineer",
    headline:
      "Senior Software Engineer | Node.js, Python & AWS Specialist | Scalable Systems | Kubernetes | System Design | Building AI-Powered Products"
  },
  ui: {
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
      mainNavigationAria: "Main navigation",
      backToProjects: "Back to projects",
      backToBlog: "Back to blog",
      notFoundTitle: "Page not found",
      notFoundDescription: "The page you requested does not exist for this locale.",
      goHome: "Go to home"
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
    ]
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
    projects: {
      metadataTitle: "Projects",
      metadataDescription:
        "Selected engineering projects spanning backend, cloud, and mobile delivery.",
      lead: "Outcome-focused project snapshots with architecture decisions, delivery constraints, and measurable impact.",
      filterHeading: "Filter by label",
      allLabels: "All labels",
      noResultsDescription: "No projects found for the selected label.",
      notFoundTitle: "Project not found",
      notFoundDescription: "Project not found for this locale.",
      linksHeading: "Links",
      statusLabels: {
        active: "Active",
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
