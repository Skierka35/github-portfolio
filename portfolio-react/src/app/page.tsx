"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import Introduce from "./components/introduce";
import ContactPage from "./components/contact";
import HomeLatestProjects from "./components/homeLatestProjects";
import { useLang } from "./components/languageProvider";

const TEXT = {
  pl: {
    role: "Grafik marketingowy",
    name: "Julia Koszczoł",
    pronouns: "she/her",
    introLabel: "Intro",
    intro:
      "Projektuję materiały wizualne dla marek, kampanii i komunikacji online. Skupiam się na estetyce, czytelności i spójnym przekazie, żeby projekty nie tylko dobrze wyglądały, ale też wspierały cel marki.",
    aboutLabel: "O mnie",
    about:
      "Junior graphic designer skupiona na brandingu, social mediach i materiałach marketingowych.",
    projectsLabel: "Projekty",
    experienceLabel: "Zakres współpracy",
    contactLabel: "Kontakt",
    skillsLabel: "Umiejętności",
    languagesLabel: "Języki",
    location: "Polska / zdalnie",
    email: "Julia.Koszczol112@gmail.com",
    phone: "+48 508 617 676",
    website: "portfolio-preview-skierka.netlify.app",
    contactTitle: "Porozmawiajmy o współpracy",
    viewAll: "Wszystkie projekty",
    services: [
      {
        title: "Branding i identyfikacja",
        text: "Logo, key visuale, podstawowe systemy wizualne i spójna komunikacja marki.",
      },
      {
        title: "Social media",
        text: "Posty, karuzele, grafiki promocyjne i materiały dopasowane do kanałów online.",
      },
      {
        title: "Materiały marketingowe",
        text: "Banery, prezentacje, grafiki reklamowe, digital assets i proste materiały sprzedażowe.",
      },
    ],
    skills: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Canva",
      "Figma",
      "CapCut",
      "Blender",
      "AI",
      "Next.js",
    ],
    languages: ["Polski", "Angielski", "Niemiecki"],
  },
  en: {
    role: "Marketing Designer",
    name: "Julia Koszczoł",
    pronouns: "she/her",
    introLabel: "Intro",
    intro:
      "I design visual materials for brands, campaigns and online communication. I focus on aesthetics, clarity and consistent messaging, so the projects not only look good but also support the brand’s goal.",
    aboutLabel: "About",
    about:
      "Junior graphic designer focused on branding, social media and marketing materials.",
    projectsLabel: "Projects",
    experienceLabel: "Services",
    contactLabel: "Contact",
    skillsLabel: "Skills",
    languagesLabel: "Languages",
    location: "Poland / remote",
    email: "Julia.Koszczol112@gmail.com",
    phone: "+48 508 617 676",
    website: "portfolio-preview-skierka.netlify.app",
    contactTitle: "Let’s talk about cooperation",
    viewAll: "All projects",
    services: [
      {
        title: "Branding and identity",
        text: "Logos, key visuals, basic visual systems and consistent brand communication.",
      },
      {
        title: "Social media",
        text: "Posts, carousels, promotional graphics and assets tailored for online channels.",
      },
      {
        title: "Marketing materials",
        text: "Banners, presentations, ad creatives, digital assets and simple sales materials.",
      },
    ],
    skills: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Canva",
      "Figma",
      "CapCut",
      "Blender",
      "AI",
      "Next.js",
    ],
    languages: ["Polish", "English", "German"],
  },
} as const;

const labelClass =
  "mb-3 text-[11px] uppercase tracking-[0.22em] text-slate-400";

const cardClass =
  "rounded-2xl border border-black/5 bg-white p-5 shadow-sm";

export default function Home() {
  const { lang, toggleLang } = useLang();
  const t = TEXT[lang];

  return (
    <main className="min-h-screen bg-[#f4f4f1] px-5 py-6 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_40px_1fr]">
          {/* LEFT SIDEBAR */}
          <aside className="border-b border-black/5 p-6 lg:sticky lg:top-6 lg:h-[calc(100vh-48px)] lg:border-b-0">
            <div className="flex h-full flex-col">
              <div>
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-black/10">
                  <Image
                    src="/prof.jpg"
                    alt={t.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    {t.name}
                  </h1>
                  <p className="mt-1 text-sm text-slate-500">{t.pronouns}</p>
                </div>

                <div className="mt-7">
                  <p className={labelClass}>{t.aboutLabel}</p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {t.about}
                  </p>
                </div>

                <div className="mt-7">
                  <p className={labelClass}>{t.contactLabel}</p>

                  <div className="space-y-3 text-sm text-slate-600">
                    <a
                      href={`mailto:${t.email}`}
                      className="flex items-center gap-3 transition hover:text-slate-950"
                    >
                      <Mail size={16} />
                      <span className="break-all">{t.email}</span>
                    </a>

                    <a
                      href={`https://${t.website}`}
                      target="_blank"
                      className="flex items-center gap-3 transition hover:text-slate-950"
                    >
                      <Globe size={16} />
                      <span className="break-all">{t.website}</span>
                    </a>

                    <a
                      href={`tel:${t.phone.replaceAll(" ", "")}`}
                      className="flex items-center gap-3 transition hover:text-slate-950"
                    >
                      <Phone size={16} />
                      <span>{t.phone}</span>
                    </a>

                    <div className="flex items-center gap-3">
                      <MapPin size={16} />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <p className={labelClass}>{t.skillsLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-black/10 px-3 py-1 text-xs text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className={labelClass}>{t.languagesLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto hidden items-center gap-5 pt-10 text-slate-400 lg:flex">
                <a href="#" aria-label="Instagram" className="hover:text-black">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-black">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-black">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </aside>
          <div className="hidden  border-black/5 bg-white lg:block" />
          
          {/* RIGHT CONTENT */}
          <section className="min-h-screen">
            {/* LOCAL STICKY HEADER */}
            <div className="sticky top-0 z-40 flex items-center justify-end gap-6 border-b border-black/5 bg-white/90 px-6 py-4 backdrop-blur-md md:px-10 lg:px-12">
              <a
                href="#projekty"
                className="text-sm font-medium text-slate-700 transition hover:text-black"
              >
                {lang === "pl" ? "Projekty" : "Projects"}
              </a>

              <a
                href="#kontakt"
                className="text-sm font-medium text-slate-700 transition hover:text-black"
              >
                {lang === "pl" ? "Kontakt" : "Contact"}
              </a>

              <Link
                href="/projects"
                className="text-sm font-medium text-slate-700 transition hover:text-black"
              >
                {lang === "pl" ? "Wszystkie projekty" : "All projects"}
              </Link>

              <button
                type="button"
                onClick={toggleLang}
                className="rounded-full border border-black/10 px-3 py-2 text-sm font-semibold transition hover:bg-black/5"
                aria-label="Toggle language"
              >
                {lang.toUpperCase()}
              </button>
            </div>

            <div className="px-6 py-8 md:px-10 lg:px-12">
              {/* INTRO */}
              <section className="pb-12">
                <p className={labelClass}>{t.introLabel}</p>

                <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-start">
                  <div>
                    <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                      {t.role}
                    </h2>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                      {t.intro}
                    </p>
                  </div>

                  <div className="hidden overflow-hidden rounded-3xl border border-black/5 bg-slate-100 lg:block">
                    <Image
                      src="/bajkowysen.png"
                      alt=""
                      width={520}
                      height={640}
                      className="h-72 w-full object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* PROJECTS */}
              <section
                id="projekty"
                className="scroll-mt-20 border-t border-black/5 py-12"
              >
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className={labelClass}>{t.projectsLabel}</p>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {lang === "pl"
                        ? "Wybrane realizacje"
                        : "Selected projects"}
                    </h2>
                  </div>

                  <Link
                    href="/projects"
                    className="text-sm font-medium text-slate-700 underline underline-offset-4"
                  >
                    {t.viewAll}
                  </Link>
                </div>

                <HomeLatestProjects />
              </section>

              {/* SERVICES */}
              <section className="border-t border-black/5 py-12">
                <p className={labelClass}>{t.experienceLabel}</p>

                <div className="space-y-4">
                  {t.services.map((service) => (
                    <article key={service.title} className={cardClass}>
                      <h3 className="text-lg font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {service.text}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* ABOUT */}
              <section className="border-t border-black/5 py-12">
                <p className={labelClass}>
                  {lang === "pl" ? "Więcej o mnie" : "More about me"}
                </p>
                <Introduce />
              </section>

              {/* CONTACT */}
              <section
                id="kontakt"
                className="scroll-mt-20 border-t border-black/5 py-12"
              >
                <p className={labelClass}>{t.contactLabel}</p>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                  {t.contactTitle}
                </h2>

                <div className="rounded-3xl border border-black/5 bg-[#f8f8f6] p-5">
                  <ContactPage />
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}