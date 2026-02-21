import { BLOG_SLUGS_BY_LOCALE, PROJECT_SLUGS_BY_LOCALE } from "@/data/content-index"
import { LOCALES } from "@/lib/i18n"

import { UiEnhancements } from "@/components/ui-enhancements"

export function ThemeScript() {
  const script = `(function(){try{var key='theme';var root=document.documentElement;var mediaQuery=window.matchMedia('(prefers-color-scheme: dark)');function getSavedTheme(){var cookieValue='; '+document.cookie;var parts=cookieValue.split('; '+key+'=');if(parts.length!==2){return null;}var saved=decodeURIComponent(parts.pop().split(';').shift());return saved==='light'||saved==='dark'?saved:null;}var savedTheme=getSavedTheme();var nextTheme=savedTheme||(mediaQuery.matches?'dark':'light');root.setAttribute('data-theme',nextTheme);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <UiEnhancements
        locales={LOCALES}
        projectSlugsByLocale={PROJECT_SLUGS_BY_LOCALE}
        blogSlugsByLocale={BLOG_SLUGS_BY_LOCALE}
      />
    </>
  )
}
