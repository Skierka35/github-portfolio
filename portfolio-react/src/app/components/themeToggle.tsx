"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? "light";
    const initial: Theme = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="
        p-2 rounded-lg border border-black/10 hover:bg-black/5
        dark:border-white/10 dark:hover:bg-white/10
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-white" />
      ) : (
        <Moon size={18} className="text-black" />
      )}
    </button>
  );
}