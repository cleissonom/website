import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

import type { Locale } from "@/lib/i18n";

const contentRoot = path.join(process.cwd(), "content");

const dateStringSchema = z.union([z.string().min(1), z.date()]).transform((value) => {
  if (typeof value === "string") {
    return value;
  }

  return value.toISOString();
});

const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  summary: z.string().min(1),
  dateStart: dateStringSchema,
  dateEnd: dateStringSchema.optional(),
  role: z.string().min(1),
  status: z.enum(["active", "archived"]),
  tags: z.array(z.string().min(1)).min(1),
  stack: z.array(z.string().min(1)).min(1),
  links: z
    .object({
      repo: z.string().url().optional(),
      live: z.string().url().optional(),
      caseStudy: z.string().url().optional(),
      demo: z.string().url().optional()
    })
    .default({}),
  highlights: z.array(z.string().min(1)).min(1),
  coverImage: z.string().optional()
});

const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  summary: z.string().min(1),
  date: dateStringSchema,
  updatedAt: dateStringSchema.optional(),
  tags: z.array(z.string().min(1)).min(1),
  coverImage: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  lang: z.union([z.literal("en-US"), z.literal("pt-BR")])
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export type ProjectEntry = ProjectFrontmatter & {
  locale: Locale;
  body: string;
};

export type BlogEntry = BlogFrontmatter & {
  locale: Locale;
  body: string;
  readingTimeMinutes: number;
};

function getLocaleDir(type: "projects" | "blog", locale: Locale): string {
  return path.join(contentRoot, type, locale);
}

function listMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort();
}

function readMarkdownFile(filePath: string): { frontmatter: Record<string, unknown>; body: string } {
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { frontmatter: data, body: content.trim() };
}

function readProjectFile(filePath: string, locale: Locale): ProjectEntry {
  const { frontmatter, body } = readMarkdownFile(filePath);
  const parsed = projectFrontmatterSchema.parse(frontmatter);
  return {
    ...parsed,
    locale,
    body
  };
}

function readBlogFile(filePath: string, locale: Locale): BlogEntry {
  const { frontmatter, body } = readMarkdownFile(filePath);
  const parsed = blogFrontmatterSchema.parse(frontmatter);

  return {
    ...parsed,
    locale,
    body,
    readingTimeMinutes: estimateReadingTime(body)
  };
}

function toTimeValue(value: string | undefined): number {
  if (!value) {
    return 0;
  }

  const result = Date.parse(value);
  return Number.isFinite(result) ? result : 0;
}

function estimateReadingTime(markdown: string): number {
  const words = markdown
    .replace(/[\n#>*_`\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}

export function getAllProjects(locale: Locale): ProjectEntry[] {
  const dir = getLocaleDir("projects", locale);

  return listMarkdownFiles(dir)
    .map((filename) => readProjectFile(path.join(dir, filename), locale))
    .sort((a, b) => toTimeValue(b.dateEnd ?? b.dateStart) - toTimeValue(a.dateEnd ?? a.dateStart));
}

export function getProjectBySlug(locale: Locale, slug: string): ProjectEntry | null {
  return getAllProjects(locale).find((project) => project.slug === slug) ?? null;
}

export function getAllProjectSlugs(locale: Locale): string[] {
  return getAllProjects(locale).map((project) => project.slug);
}

export function getAllPosts(locale: Locale): BlogEntry[] {
  const dir = getLocaleDir("blog", locale);

  return listMarkdownFiles(dir)
    .map((filename) => readBlogFile(path.join(dir, filename), locale))
    .sort((a, b) => toTimeValue(b.date) - toTimeValue(a.date));
}

export function getPostBySlug(locale: Locale, slug: string): BlogEntry | null {
  return getAllPosts(locale).find((post) => post.slug === slug) ?? null;
}

export function getAllPostSlugs(locale: Locale): string[] {
  return getAllPosts(locale).map((post) => post.slug);
}

export function getAllPostsForFeeds(): BlogEntry[] {
  const locales: Locale[] = ["en-US", "pt-BR"];

  return locales
    .flatMap((locale) => getAllPosts(locale))
    .sort((a, b) => toTimeValue(b.date) - toTimeValue(a.date));
}
