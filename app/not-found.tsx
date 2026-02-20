import { DEFAULT_LOCALE } from "@/lib/i18n"

export default function GlobalNotFound() {
  return (
    <main className="container not-found">
      <h1>Page not found</h1>
      <p>The page you requested is unavailable.</p>
      <a className="primary-button" href={`/${DEFAULT_LOCALE}`}>
        Go to home
      </a>
    </main>
  )
}
