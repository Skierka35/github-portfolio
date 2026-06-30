"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "./languageProvider";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  const isHome = pathname === "/";
  const languageLabel = lang.toUpperCase();

  // Na stronie głównej nawigacja jest lokalnie w Page.tsx, żeby nie dublować UI.
  if (isHome) return null;

  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "/", labelPl: "Główna", labelEn: "Home" },
    { href: "/projects", labelPl: "Projekty", labelEn: "Projects" },
  ];

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-black/10 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" onClick={closeMenu}>
          <span className="text-lg font-semibold tracking-wide text-black transition hover:text-[#006970] sm:text-xl">
            PORTFOLIO
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) =>
            pathname === link.href ? (
              <span
                key={link.href}
                className="cursor-default text-sm font-medium text-black/40"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </span>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-slate-700 transition hover:text-[#006970]"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </Link>
            )
          )}

          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold transition hover:bg-black/5"
            aria-label="Toggle language"
          >
            {languageLabel}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold transition hover:bg-black/5"
            aria-label="Toggle language"
          >
            {languageLabel}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-full p-1 text-black transition hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[220px] border-t border-black/10 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          {links.map((link) =>
            pathname === link.href ? (
              <span key={link.href} className="text-sm text-black/40">
                {lang === "pl" ? link.labelPl : link.labelEn}
              </span>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-slate-700 transition hover:text-[#006970]"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}
