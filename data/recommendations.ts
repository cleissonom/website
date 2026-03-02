import type {
  Recommendation,
  RecommendationBaseFields,
  RecommendationLocalizedFields
} from "@/data/i18n/types"

const recommendationBase = [
  {
    id: "valeriia-kruchinina",
    name: "Valeriia Kruchinina",
    profileUrl: "https://www.linkedin.com/in/valeriia-kruchinina/",
    headline:
      "AI Product manager | Transforming industries with AI solutions | Technology enthusiast 🚀"
  },
  {
    id: "cristian-karsten",
    name: "Cristian Karsten",
    profileUrl: "https://www.linkedin.com/in/cristian-karsten/en/",
    headline: "PMI-ACP® | Sales Engineer at Avanti"
  },
  {
    id: "gabriel-lobo",
    name: "Gabriel Lobo",
    profileUrl: "https://www.linkedin.com/in/gabrielrbl/",
    headline:
      "Software Engineer | DevOps | Python | Django | React | TypeScript | AWS | Software Developer | Fullstack Developer"
  },
  {
    id: "andrezza-de-melo-troian",
    name: "Andrezza de Melo Troian",
    profileUrl: "https://www.linkedin.com/in/andrezza-de-melo-troian/",
    headline: "Product Owner | PSPO I | Gestão de TI | E-commerce | Gestão de Produtos Digitais"
  },
  {
    id: "matheus-goulart",
    name: "Matheus Goulart",
    profileUrl: "https://www.linkedin.com/in/matheus-alves-goulart/",
    headline: "Full Stack Web Developer"
  },
  {
    id: "vinicius-dos-santos-bueno",
    name: "Vinicius Dos Santos Bueno",
    profileUrl: "https://www.linkedin.com/in/vinicius-dos-santos-bueno-99887920a/",
    headline: "Desenvolvedor fullstack"
  },
  {
    id: "luisa-foppa",
    name: "Luísa Foppa",
    profileUrl: "https://www.linkedin.com/in/luisa-rodrigues-foppa/en/",
    headline:
      "FrontEnd Developer | Software | Javascript | Typescript | Web Developer | React | NodeJS | GraphQL | SEO"
  }
] as const satisfies RecommendationBaseFields[]

export type RecommendationId = (typeof recommendationBase)[number]["id"]
export type RecommendationTranslationsById = Record<RecommendationId, RecommendationLocalizedFields>

export function buildRecommendations(
  translationsById: RecommendationTranslationsById
): Recommendation[] {
  return recommendationBase.map((item) => ({
    ...item,
    ...translationsById[item.id]
  }))
}
