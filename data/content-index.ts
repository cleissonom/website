import type { Locale } from "@/lib/i18n";

const projectSlugs = ["ai-photo-verification-platform", "commerce-mobile-application"];
const blogSlugs = ["designing-reliable-nodejs-services", "scaling-kubernetes-on-aws"];

export const PROJECT_SLUGS_BY_LOCALE: Record<Locale, string[]> = {
  "en-US": projectSlugs,
  "pt-BR": projectSlugs
};

export const BLOG_SLUGS_BY_LOCALE: Record<Locale, string[]> = {
  "en-US": blogSlugs,
  "pt-BR": blogSlugs
};
