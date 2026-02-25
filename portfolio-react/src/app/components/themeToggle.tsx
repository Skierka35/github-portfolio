"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark"); // domyślnie ciemny, zmień jeśli wolisz

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? null;

    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      applyTheme(saved);
      return;
    }

    // jeśli nie zapisano, weź preferencję systemu
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
    const initial: Theme = prefersDark ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="px-4 py-2 rounded-lg text-sm border border-black/15 hover:border-black/30 transition
                 dark:border-white/15 dark:hover:border-white/30"
      aria-label="Przełącz tryb jasny i ciemny"
    >
      {theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
    </button>
  );
}
