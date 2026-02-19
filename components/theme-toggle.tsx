"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle({ lightLabel, darkLabel }: { lightLabel: string; darkLabel: string }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const nextTheme: Theme = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setThemeState(nextTheme);
    setTheme(nextTheme);
  }, []);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="ghost-button"
      onClick={() => {
        setTheme(nextTheme);
        setThemeState(nextTheme);
      }}
      aria-label={theme === "light" ? darkLabel : lightLabel}
    >
      {theme === "light" ? darkLabel : lightLabel}
    </button>
  );
}
