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
  if (isHome) return null;

  const closeMenu = () => setIsOpen(false);
  const languageLabel = lang.toUpperCase();

  const homeLinks = [
    { href: "#up", labelPl: "Główna", labelEn: "Home" },
    { href: "#kontakt", labelPl: "Kontakt", labelEn: "Contact" },
  ];

  const externalLinks = [
    {
      href: "/projects",
      labelPl: "Projekty",
      labelEn: "Projects",
    },
  ];

  return (
    <header
      className={
        isHome
          ? "sticky right-5 top-5 z-50 lg:right-8 lg:top-8"
          : "sticky left-0 top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl"
      }
    >
      <nav
        className={`sticky top-0 z-50 border-b border-black/10 bg-white/75 transition-all duration-300 backdrop-blur-xl dark:border-white/10 dark:bg-black/60 ${
          isHome
            ? "left-0 w-full lg:left-[368px] lg:right-8 lg:w-auto"
            : "left-0 w-full"
        }`}
      >
        {!isHome && (
          <Link href="/" onClick={closeMenu} className="text-lg font-semibold">
            PORTFOLIO
          </Link>
        )}

        <div className="hidden items-center gap-5 md:flex">
          {isHome &&
            homeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-black"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </a>
            ))}

          {externalLinks.map((link) =>
            pathname === link.href ? (
              <span key={link.href} className="text-sm font-medium text-black/40">
                {lang === "pl" ? link.labelPl : link.labelEn}
              </span>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-slate-700 transition hover:text-black"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </Link>
            )
          )}

          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-semibold transition hover:bg-black/5"
            aria-label="Toggle language"
          >
            {languageLabel}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-semibold"
            aria-label="Toggle language"
          >
            {languageLabel}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-full p-1 text-black"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mt-2 rounded-2xl border border-black/10 bg-white p-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            {isHome &&
              homeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-sm text-slate-700"
                >
                  {lang === "pl" ? link.labelPl : link.labelEn}
                </a>
              ))}

            {externalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-slate-700"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}