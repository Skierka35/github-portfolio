'use client';

import Link from 'next/link';

export default function navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-lg bg-black">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-white">Skierka</span>
      </div>
      <div className="ml-auto flex gap-6">
      <Link href="/">
        <button className="px-6 py-2 bg-black text-white rounded text-lg">
          Home
        </button>
      </Link>
      <Link href="/skills">
        <button className="px-6 py-2 bg-black text-white rounded text-lg">
          Knowledge
        </button>
      </Link>
      <Link href="/projects">
        <button className="px-6 py-2 bg-black text-white rounded text-lg">
          Projects
        </button>
      </Link>
      <Link href="/contact">
        <button className="px-6 py-2 bg-black text-white rounded text-lg">
          Contact
        </button>
      </Link>
      </div>
    </nav>
  );
}
