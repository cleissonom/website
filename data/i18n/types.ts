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
    mainNavigationAria: string
    backToProjects: string
    backToBlog: string
    notFoundTitle: string
    notFoundDescription: string
    goHome: string
  }
}

export type ProjectStatus = "active" | "archived"
export type ProjectLinkKey = "repo" | "live" | "caseStudy" | "demo"

export type LocaleDictionary = {
  site: {
    shortTitle: string
    headline: string
  }
  ui: UiDictionary
  content: {
    about: string[]
    focusAreas: string[]
    experienceTimeline: ExperienceCompany[]
  }
  pages: {
    home: {
      breadcrumbLabel: string
      keywords: string[]
    }
    projects: {
      metadataTitle: string
      metadataDescription: string
      lead: string
      filterHeading: string
      allLabels: string
      noResultsDescription: string
      notFoundTitle: string
      notFoundDescription: string
      linksHeading: string
      statusLabels: Record<ProjectStatus, string>
      linkLabels: Record<ProjectLinkKey, string>
    }
    blog: {
      metadataTitle: string
      metadataDescription: string
      lead: string
      notFoundTitle: string
      notFoundDescription: string
    }
    resume: {
      metadataTitle: string
      metadataDescription: string
      summary: string
    }
    notFound: {
      metadataTitle: string
      metadataDescription: string
    }
  }
  snippets: {
    readMoreAboutPrefix: string
    readingMinutesShort: string
  }
}
