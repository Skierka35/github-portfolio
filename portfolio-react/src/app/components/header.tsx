'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLang } from './languageProvider';

type Theme = 'light' | 'dark';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // THEME
  const [theme, setTheme] = useState<Theme>('dark');

  // LANGUAGE
  const { lang, toggleLang } = useLang();

  const isHome = pathname === '/';

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // INIT THEME
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;

    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
      return;
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
    const initial: Theme = prefersDark ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
    localStorage.setItem('theme', initial);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  const navLinks = [
    { href: '/skills', labelPl: 'Umiejętności', labelEn: 'Skills' },
    { href: '/projects', labelPl: 'Projekty', labelEn: 'Projects' },
  ];

  // Labels for mobile buttons
  const themeLabel = lang === 'pl'
    ? (theme === 'dark' ? 'Jasny' : 'Ciemny')
    : (theme === 'dark' ? 'Light' : 'Dark');

  const languageLabel = lang.toUpperCase(); // PL / EN

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isHome ? 'backdrop-blur-md' : ''}
        bg-white/80 dark:bg-black/70
        border-b border-black/10 dark:border-white/10
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-semibold tracking-wide text-black dark:text-white hover:opacity-70 transition">
            PORTFOLIO
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => {
            const label = lang === 'pl' ? link.labelPl : link.labelEn;

            return pathname === link.href ? (
              <span
                key={link.href}
                className="text-sm font-medium text-black/50 dark:text-white/50 cursor-default"
              >
                {label}
              </span>
            ) : (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span className="text-sm font-medium text-black dark:text-white hover:opacity-70 transition">
                  {label}
                </span>
              </Link>
            );
          })}

          {/* THEME TOGGLE (dark => moon, light => sun) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-black/10 dark:border-white/10
                       hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle theme"
            title={lang === 'pl' ? 'Zmień motyw' : 'Toggle theme'}
          >
            {theme === 'dark' ? (
              <Moon size={18} className="text-white" />
            ) : (
              <Sun size={18} className="text-black" />
            )}
          </button>
        </div>

          {/* LANGUAGE TOGGLE (no icon) */}
          <button
            type="button"
            onClick={toggleLang}
            className="ml-2 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10
                       hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle language"
            title={lang === 'pl' ? 'Zmień język' : 'Change language'}
          >
            <span className="text-sm font-semibold text-black dark:text-white">
              {languageLabel}
            </span>
          </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-black dark:text-white ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-80 py-4' : 'max-h-0 py-0'}
          bg-white dark:bg-black border-t border-black/10 dark:border-white/10
        `}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) => {
            const label = lang === 'pl' ? link.labelPl : link.labelEn;

            return pathname === link.href ? (
              <span key={link.href} className="text-black/50 dark:text-white/50">
                {label}
              </span>
            ) : (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span className="text-black dark:text-white hover:opacity-70 transition">
                  {label}
                </span>
              </Link>
            );
          })}

          <div className="flex gap-3 mt-2">
            {/* MOBILE LANGUAGE (no icon) */}
            <button
              type="button"
              onClick={toggleLang}
              className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/10"
            >
              <span className="text-sm font-semibold text-black dark:text-white">
                {lang === 'pl' ? 'PL / EN' : 'EN / PL'}
              </span>
            </button>

            {/* MOBILE THEME (dark => moon, light => sun) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/10
                         flex items-center gap-2"
            >
              {theme === 'dark' ? (
                <>
                  <Moon size={18} className="text-black dark:text-white" />
                  <span className="text-sm font-semibold text-black dark:text-white">
                    {themeLabel}
                  </span>
                </>
              ) : (
                <>
                  <Sun size={18} className="text-black dark:text-white" />
                  <span className="text-sm font-semibold text-black dark:text-white">
                    {themeLabel}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
