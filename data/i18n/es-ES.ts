import type { LocaleDictionary } from "@/data/i18n/types"

export const esESDictionary: LocaleDictionary = {
  site: {
    shortTitle: "Ingeniero de Software Senior",
    headline:
      "Ingeniero de Software Senior | Especialista en Node.js, Python y AWS | Sistemas escalables | Kubernetes | Diseño de sistemas | Construyendo productos con IA"
  },
  ui: {
    nav: {
      home: "Sobre mí",
      projects: "Proyectos",
      blog: "Blog",
      resume: "Currículum"
    },
    cta: {
      contact: "Contacto",
      linkedin: "Ver LinkedIn",
      downloadResume: "Descargar currículum en PDF"
    },
    sections: {
      about: "Sobre mí",
      focusAreas: "Áreas de enfoque",
      experience: "Experiencia",
      projects: "Proyectos",
      blog: "Blog"
    },
    labels: {
      locale: "Idioma",
      light: "Claro",
      dark: "Oscuro",
      readMore: "Leer más",
      published: "Publicado",
      updated: "Actualizado",
      role: "Rol",
      status: "Estado",
      stack: "Stack",
      highlights: "Aspectos clave",
      experienceTimelineAria: "Línea de tiempo de experiencia",
      mainNavigationAria: "Navegación principal",
      backToProjects: "Volver a proyectos",
      backToBlog: "Volver al blog",
      notFoundTitle: "Página no encontrada",
      notFoundDescription: "La página solicitada no existe para este idioma.",
      goHome: "Ir al inicio"
    }
  },
  content: {
    about: [
      "Ingeniero de Software Senior especializado en desarrollo backend, infraestructura en la nube y sistemas escalables.",
      "Trabajo en el diseño y la construcción de software en producción con Node.js, Python, AWS, Kubernetes y tecnologías cloud-native modernas.",
      "Mi experiencia incluye diseñar sistemas backend escalables, construir infraestructura cloud, desarrollar APIs y sistemas distribuidos, y contribuir a decisiones de arquitectura en startups y entornos internacionales.",
      "Me apasionan el diseño de sistemas, el rendimiento y el software confiable. Fuera del trabajo, exploro nuevas tecnologías y desarrollo proyectos personales."
    ],
    focusAreas: [
      "Ingeniería backend",
      "Infraestructura en la nube",
      "Sistemas distribuidos",
      "Diseño de sistemas",
      "Escalabilidad y rendimiento",
      "AWS",
      "Kubernetes",
      "Node.js",
      "Python",
      "Productos impulsados por IA"
    ],
    experienceTimeline: [
      {
        company: "Productera LLC",
        employment: "Tiempo completo",
        location: "Estados Unidos - Remoto",
        roles: [
          {
            title: "Ingeniero de Software Senior - Proyecto Encore",
            period: "jul. 2024 - actual",
            bullets: []
          },
          {
            title: "Ingeniero de Software - Proyecto ThirdEdition",
            period: "may. 2024 - jul. 2024 (2 meses)",
            bullets: [
              "Este proyecto me dio una experiencia valiosa en toma de decisiones tecnológicas, planificación integral de infraestructura del sistema y desarrollo frontend.",
              "Planifiqué y estructuré la infraestructura del sistema con servicios de AWS.",
              "Utilicé Terraform para gestionar y controlar la evolución de la infraestructura en AWS.",
              "Desarrollé toda la estructura de frontend y tomé todas las decisiones tecnológicas.",
              "También contribuí al desarrollo backend."
            ]
          }
        ]
      },
      {
        company: "MeMima.com.br",
        employment: "Tiempo completo",
        location: "Brasil - Remoto",
        roles: [
          {
            title: "Ingeniero de Software",
            period: "jul. 2023 - feb. 2025 (1 año y 8 meses)",
            bullets: [
              "La experiencia en una startup en etapa temprana me enseñó a lanzar un producto e impulsar su adopción.",
              "Alcancé más de 2.000 usuarios activos en pocos meses.",
              "Introduje funcionalidades innovadoras para asegurar el desarrollo continuo del producto.",
              "Lideré la planificación estratégica y la ideación colaborativa de proyectos.",
              "Integré pasarelas de pago y funcionalidades de chat.",
              "Mejoré el flujo de usuario y las recomendaciones mediante bases de datos de grafos.",
              "Entregué una infraestructura en la nube robusta y escalable en AWS.",
              "Aproveché servicios de IA de AWS para flujos de procesamiento de fotos, incluyendo verificación de edad y reconocimiento facial."
            ]
          }
        ]
      },
      {
        company: "Avanti E-commerce & Digital Marketing",
        employment: "Tiempo completo",
        location: "Florianópolis, Santa Catarina, Brasil",
        roles: [
          {
            title: "Ingeniero de Software (Remoto)",
            period: "feb. 2024 - may. 2024 (3 meses)",
            bullets: [
              "Planifiqué y desarrollé una aplicación móvil de comercio electrónico construida con React Native y Expo."
            ]
          },
          {
            title: "Ingeniero de Software (Remoto)",
            period: "ene. 2023 - jul. 2023 (6 meses)",
            bullets: [
              "Desarrollé y publiqué aplicaciones móviles para grandes marcas.",
              "Desarrollé y mantuve software para más de 150 usuarios, incluyendo aplicaciones para GOL, Kopenhagen e Intelbras en App Store y Play Store.",
              "Construí y mantuve APIs con Django y Django REST Framework usando PostgreSQL y Heroku.",
              "Integré Firebase Analytics, VTEX Orders, WordPress y RD Station.",
              "Creé un sistema de notificaciones con AWS SNS y SES, Celery y Firebase Cloud Messaging."
            ]
          },
          {
            title: "Ingeniero de Software en Prácticas (Presencial)",
            period: "ago. 2022 - ene. 2023 (6 meses)",
            bullets: [
              "Me incorporé al equipo de investigación, desarrollo e innovación.",
              "Trabajé con el framework VTEX para desarrollo de comercio electrónico.",
              "Desarrollé una aplicación móvil desde cero."
            ]
          }
        ]
      }
    ]
  },
  pages: {
    home: {
      breadcrumbLabel: "Inicio",
      keywords: [
        "Ingeniería backend",
        "Infraestructura en la nube",
        "Sistemas distribuidos",
        "Diseño de sistemas",
        "Escalabilidad y rendimiento",
        "AWS",
        "Kubernetes",
        "Node.js",
        "Python",
        "Productos impulsados por IA"
      ]
    },
    projects: {
      metadataTitle: "Proyectos",
      metadataDescription: "Proyectos de ingeniería enfocados en backend, nube y entrega mobile.",
      lead: "Resumen de proyectos orientados a resultados, con decisiones de arquitectura, restricciones de entrega e impacto medible.",
      filterHeading: "Filtrar por etiqueta",
      allLabels: "Todas las etiquetas",
      noResultsDescription: "No se encontraron proyectos para la etiqueta seleccionada.",
      notFoundTitle: "Proyecto no encontrado",
      notFoundDescription: "No se encontró el proyecto para este idioma.",
      linksHeading: "Enlaces",
      statusLabels: {
        active: "Activo",
        archived: "Archivado"
      },
      linkLabels: {
        repo: "Repositorio",
        live: "Aplicación",
        caseStudy: "Caso de estudio",
        demo: "Demostración"
      }
    },
    blog: {
      metadataTitle: "Blog",
      metadataDescription:
        "Publicaciones sobre ingeniería backend, infraestructura cloud y arquitectura escalable.",
      lead: "Notas de trabajo en ingeniería de producción: fiabilidad, infraestructura, sistemas distribuidos y estrategia de entrega.",
      notFoundTitle: "Publicación no encontrada",
      notFoundDescription: "No se encontró la publicación para este idioma."
    },
    resume: {
      metadataTitle: "Currículum",
      metadataDescription:
        "Resumen del currículum con descarga directa en PDF y enlaces de contacto.",
      summary:
        "Ingeniero de Software Senior enfocado en sistemas backend, infraestructura en la nube y entrega de productos escalables."
    },
    notFound: {
      metadataTitle: "404",
      metadataDescription: "Ruta localizada de página no encontrada."
    }
  },
  snippets: {
    readMoreAboutPrefix: "sobre",
    readingMinutesShort: "min"
  }
}
