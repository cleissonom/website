import Link from "next/link";

import type { ProjectEntry } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function ProjectCard({ project, locale, readMoreLabel }: { project: ProjectEntry; locale: Locale; readMoreLabel: string }) {
  return (
    <article className="card">
      <p className="card-meta">{project.role}</p>
      <h3>
        <Link href={`/${locale}/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p>{project.summary}</p>
      <div className="chip-row">
        {project.tags.map((tag) => (
          <span key={`${project.slug}-${tag}`} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <Link className="inline-link" href={`/${locale}/projects/${project.slug}`}>
        {readMoreLabel}
      </Link>
    </article>
  );
}
