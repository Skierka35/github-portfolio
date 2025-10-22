'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/skills', label: 'Umiejętności' },
    { href: '/projects', label: 'Projekty' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isHome ? 'backdrop-blur-md bg-black/80 shadow-md' : 'bg-black shadow-lg'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" onClick={closeMenu}>
          <span className="text-lg sm:text-xl font-bold text-white tracking-wide hover:text-purple-500 transition-colors">
            PORTFOLIO GRAFICZNE
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) =>
            pathname === link.href ? (
              <span
                key={link.href}
                className="text-sm font-medium text-purple-500 cursor-default opacity-80"
              >
                {link.label}
              </span>
            ) : (
              <Link key={link.href} href={link.href}>
                <button
                  className="text-sm font-medium text-white hover:text-purple-500 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </button>
              </Link>
            )
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-purple-500 transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden bg-black/95 border-t border-gray-700 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) =>
            pathname === link.href ? (
              <span
                key={link.href}
                className="block text-purple-500 text-base cursor-default opacity-80"
              >
                {link.label}
              </span>
            ) : (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span className="block text-white text-base hover:text-purple-500 transition-colors">
                  {link.label}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
