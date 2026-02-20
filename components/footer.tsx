import { Container } from "@/components/design-system"
import { siteIdentity } from "@/data/profile"
import type { Locale } from "@/lib/i18n"

export function Footer({
  locale,
  resumeLabel,
  contactLabel
}: {
  locale: Locale
  resumeLabel: string
  contactLabel: string
}) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container className="footer-grid">
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
          <a href={siteIdentity.links.email}>{contactLabel}</a>
          <a href="/rss.xml">RSS</a>
          <a href="/atom.xml">Atom</a>
          <a href="/feed.json">JSON Feed</a>
          <a href={`/${locale}/resume`}>{resumeLabel}</a>
        </div>
      </Container>
    </footer>
  )
}
