"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Layers,
  Mail,
  Sparkles,
} from "lucide-react";
import { useLang } from "./languageProvider";

export default function RightSidebar() {
  const { lang } = useLang();

  const t = {
    pl: {
      label: "Szybki dostęp",
      available: "Dostępna do współpracy",
      role: "Grafik reklamowy",
      description:
        "Projektuję grafiki do social media, materiały promocyjne i proste identyfikacje wizualne.",
      navTitle: "Sekcje",
      projects: "Projekty",
      offer: "Oferta",
      about: "O mnie",
      contact: "Kontakt",
      cta: "Napisz do mnie",
      portfolio: "Wszystkie projekty",
      focusTitle: "Specjalizacje",
      focus: ["Social media", "Materiały reklamowe", "Branding", "Ilustracja"],
    },
    en: {
      label: "Quick access",
      available: "Available for work",
      role: "Advertising designer",
      description:
        "I design social media graphics, promotional materials and simple visual identities.",
      navTitle: "Sections",
      projects: "Projects",
      offer: "Services",
      about: "About",
      contact: "Contact",
      cta: "Contact me",
      portfolio: "All projects",
      focusTitle: "Focus areas",
      focus: ["Social media", "Ad materials", "Branding", "Illustration"],
    },
  }[lang === "pl" ? "pl" : "en"];

  const navItems = [
    { href: "#projekty", label: t.projects },
    { href: "#oferta", label: t.offer },
    { href: "#about", label: t.about },
    { href: "#kontakt", label: t.contact },
  ];

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 space-y-5">
        <div className="rounded-[2rem] border border-black/10 bg-[#f5fafb] p-6 shadow-sm">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[#006970]">
            {t.label}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#006970] opacity-30" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#006970]" />
            </span>
            <p className="text-sm font-semibold text-slate-800">{t.available}</p>
          </div>

          <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#bbc9ca] bg-[#f5fafb] text-[#006970]">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg font-black leading-tight text-black">{t.role}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{t.description}</p>
          </div>
        </div>

        <nav className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-slate-400">
            {t.navTitle}
          </p>

          <div className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#f5fafb] hover:text-[#006970]"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-slate-400 group-hover:text-[#006970]">
                    0{index + 1}
                  </span>
                  {item.label}
                </span>
                <ArrowUpRight
                  size={15}
                  className="opacity-40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </nav>

        <div className="rounded-[2rem] border border-black/10 bg-[#e9efef] p-6">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#bbc9ca] bg-white text-[#006970]">
            <Layers size={20} />
          </div>

          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[#006970]">
            {t.focusTitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {t.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="mailto:Julia.Koszczol112@gmail.com"
          className="group flex items-center justify-between rounded-[2rem] bg-[#006970] p-6 text-white shadow-sm transition hover:brightness-110"
        >
          <span>
            <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-white/70">
              Email
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm font-bold">
              <Mail size={17} />
              {t.cta}
            </span>
          </span>
          <ArrowUpRight
            size={20}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

        <Link
          href="/projects"
          className="group flex items-center justify-between rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:border-[#006970]"
        >
          <span>
            <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-slate-400">
              Portfolio
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm font-bold text-black">
              <BriefcaseBusiness size={17} />
              {t.portfolio}
            </span>
          </span>
          <ArrowUpRight
            size={20}
            className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#006970]"
          />
        </Link>
      </div>
    </aside>
  );
}
