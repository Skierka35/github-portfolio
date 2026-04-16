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

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const homeLinks = [
    { href: "#o-mnie", labelPl: "O mnie", labelEn: "About" },
    { href: "#uslugi", labelPl: "Usługi", labelEn: "Services" },
    { href: "#projekty", labelPl: "Projekty", labelEn: "Projects" },
    { href: "#kontakt", labelPl: "Kontakt", labelEn: "Contact" },
  ];

  const externalLinks = [
    { href: "/projects", labelPl: "Wszystkie projekty", labelEn: "All projects" },
  ];

  const languageLabel = lang.toUpperCase();

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/75 transition-all duration-300 dark:border-white/10 dark:bg-black/60 ${
        isHome ? "backdrop-blur-xl" : "backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-wide text-black transition hover:opacity-70 dark:text-white sm:text-xl">
            PORTFOLIO
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {isHome &&
            homeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black transition hover:opacity-70 dark:text-white"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </a>
            ))}

          {externalLinks.map((link) =>
            pathname === link.href ? (
              <span
                key={link.href}
                className="cursor-default text-sm font-medium text-black/40 dark:text-white/40"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </span>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-black transition hover:opacity-70 dark:text-white"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </Link>
            )
          )}

          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-black/10 px-3 py-2 transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            aria-label="Toggle language"
            title={lang === "pl" ? "Zmień język" : "Change language"}
          >
            <span className="text-sm font-semibold text-black dark:text-white">
              {languageLabel}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-black/10 px-3 py-2 transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            aria-label="Toggle language"
          >
            <span className="text-sm font-semibold text-black dark:text-white">
              {languageLabel}
            </span>
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="text-black dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-white transition-all duration-300 dark:bg-black md:hidden ${
          isOpen ? "max-h-[420px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 border-t border-black/10 px-6 pt-4 dark:border-white/10">
          {isHome &&
            homeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-black transition hover:opacity-70 dark:text-white"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </a>
            ))}

          {externalLinks.map((link) =>
            pathname === link.href ? (
              <span key={link.href} className="text-black/40 dark:text-white/40">
                {lang === "pl" ? link.labelPl : link.labelEn}
              </span>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-black transition hover:opacity-70 dark:text-white"
              >
                {lang === "pl" ? link.labelPl : link.labelEn}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}