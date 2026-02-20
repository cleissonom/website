import { ButtonLink, Container } from "@/components/design-system"
import { DEFAULT_LOCALE } from "@/lib/i18n"

export default function GlobalNotFound() {
  return (
    <Container as="main" className="not-found">
      <h1>Page not found</h1>
      <p>The page you requested is unavailable.</p>
      <ButtonLink href={`/${DEFAULT_LOCALE}`}>Go to home</ButtonLink>
    </Container>
  )
}
