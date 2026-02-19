import Link from "next/link";

import { siteIdentity } from "@/data/profile";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>
          {siteIdentity.name} | {year}
        </p>
        <div className="footer-links">
          <a href={siteIdentity.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteIdentity.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteIdentity.links.email}>Email</a>
          <Link href="/rss.xml">RSS</Link>
          <Link href="/atom.xml">Atom</Link>
          <Link href="/feed.json">JSON Feed</Link>
          <Link href={`/${locale}/resume`}>Resume</Link>
        </div>
      </div>
    </footer>
  );
}
