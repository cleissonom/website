import { BLOG_SLUGS_BY_LOCALE, PROJECT_SLUGS_BY_LOCALE } from "@/data/content-index"
import { LOCALES } from "@/lib/i18n"
import { THEME_COOKIE_KEY } from "@/lib/theme"

import { UiEnhancements } from "@/components/ui-enhancements"

export function ThemeScript() {
  const script = `
    (function () {
      try {
        var key = '${THEME_COOKIE_KEY}';
        var root = document.documentElement;
        var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        function readThemeFromCookie() {
          var cookieValue = '; ' + document.cookie;
          var parts = cookieValue.split('; ' + key + '=');
          if (parts.length !== 2) {
            return null;
          }

          var saved = decodeURIComponent(parts.pop().split(';').shift());
          return saved === 'light' || saved === 'dark' ? saved : null;
        }

        function getCurrentTheme() {
          return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        }

        function updateThemeToggleLabel(nextTheme) {
          var buttons = document.querySelectorAll('.js-theme-toggle');
          for (var i = 0; i < buttons.length; i += 1) {
            var button = buttons[i];
            if (!(button instanceof HTMLButtonElement)) {
              continue;
            }

            var lightLabel = button.getAttribute('data-light-label') || '';
            var darkLabel = button.getAttribute('data-dark-label') || '';
            var label = nextTheme === 'dark' ? lightLabel : darkLabel;
            button.setAttribute('aria-label', label);
            button.textContent = label;
          }
        }

        function applyTheme(nextTheme, persistCookie) {
          root.setAttribute('data-theme', nextTheme);
          if (persistCookie) {
            document.cookie =
              key +
              '=' +
              encodeURIComponent(nextTheme) +
              '; path=/; max-age=31536000; samesite=lax';
          }

          updateThemeToggleLabel(nextTheme);
        }

        var savedTheme = readThemeFromCookie();
        var initialTheme = savedTheme || (mediaQuery.matches ? 'dark' : 'light');
        applyTheme(initialTheme, false);

        if (window.__themeToggleBound !== true) {
          window.addEventListener('click', function (event) {
            var target = event.target;
            if (!(target instanceof Element)) {
              return;
            }

            var toggle = target.closest('.js-theme-toggle');
            if (!(toggle instanceof HTMLButtonElement)) {
              return;
            }

            var nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme, true);
          });

          window.__themeToggleBound = true;
        }
      } catch (error) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  `

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
