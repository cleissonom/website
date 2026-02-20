import LocaleHomePage from "@/app/[locale]/page"
import { DEFAULT_LOCALE } from "@/lib/i18n"

export default function RootPage() {
  return <LocaleHomePage params={Promise.resolve({ locale: DEFAULT_LOCALE })} />
}
