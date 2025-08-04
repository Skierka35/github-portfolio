'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav
      className={`w-full flex items-center justify-between px-8 py-4 shadow-lg bg-black text-white transition-all z-50
        ${isHome ? 'sticky top-0 backdrop-blur-md bg-black/80' : ''}
      `}
    >
      <span className="text-lg font-bold">Skierka</span>
      <div className="ml-auto flex gap-6">
        <Link href="/"><button className="text-white">Strona główna</button></Link>
        <Link href="/skills"><button className="text-white">Umiejętności</button></Link>
        <Link href="/projects"><button className="text-white">Projekty</button></Link>
      </div>
    </nav>
  );
}
