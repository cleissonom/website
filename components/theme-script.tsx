export function ThemeScript() {
  const script = `(function(){try{var saved=localStorage.getItem('theme');var theme=saved||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',theme);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
