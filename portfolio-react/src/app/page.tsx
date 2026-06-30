"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  Globe,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactPage from "./components/contact";
import HomeLatestProjects from "./components/homeLatestProjects";
import { useLang } from "./components/languageProvider";

const TEXT = {
  pl: {
    heroKicker: "Graphic designer & ad strategist",
    heroLineOne: "Kreatywne Rozwiązania,",
    heroLineTwo: "Które Sprzedają",
    heroLead:
      "Łączę reklamowe podejście z ilustracyjnym wyczuciem koloru i kompozycji. Tworzę materiały wizualne, które przyciągają uwagę, budują rozpoznawalność i jasno prowadzą odbiorcę do komunikatu marki.",
    scroll: "Przejdź do projektów",
    role: "Grafika reklamowa z ilustracyjnym wyczuciem koloru i kompozycji",
    name: "Julia Koszczoł",
    aboutLabel: "O mnie",
    about:
      "Junior graphic designer skupiona na brandingu, social mediach i materiałach marketingowych.",
    projectsLabel: "Projekty",
    experienceLabel: "Oferta",
    contactLabel: "Kontakt",
    skillsLabel: "Umiejętności",
    languagesLabel: "Języki",
    Linkedin: "https://www.linkedin.com/in/julia-koszczo%C5%82-199516226/",
    location: "Polska / zdalnie",
    email: "Julia.Koszczol112@gmail.com",
    phone: "+48 508 617 676",
    website: "portfolio-preview-skierka.netlify.app",
    viewAll: "Wszystkie projekty",
    selectedProjects: "Wybrane realizacje",
    projectsDescription:
      "Projekty z zakresu grafiki reklamowej, social mediów, ilustracji i komunikacji wizualnej.",
    offerTitle: "W czym mogę pomóc?",
    offerDescription:
      "Tworzę materiały wizualne, które pomagają markom wyglądać spójnie, profesjonalnie i czytelnie komunikować swoją ofertę.",
    aboutTitle: "Design to communication.",
    aboutText:
      "W projektach skupiam się na równowadze między estetyką a funkcją. Grafika ma nie tylko wyglądać dobrze, ale też wspierać konkretny cel: sprzedaż, rozpoznawalność, wizerunek lub komunikację marki.",
    aboutCards: [
      {
        title: "Komunikacja",
        text: "Dbam o to, żeby projekt był czytelny i dopasowany do odbiorcy.",
      },
      {
        title: "Spójność",
        text: "Tworzę materiały, które pasują do charakteru marki i jej komunikacji.",
      },
      {
        title: "Ilustracyjne wyczucie",
        text: "Doświadczenie z ilustracją pomaga mi świadomie pracować z kolorem, nastrojem i kompozycją.",
      },
    ],
    services: [
      {
        title: "Grafika reklamowa",
        text: "Banery, reklamy digitalowe, grafiki promocyjne i materiały przygotowane pod kampanie online.",
      },
      {
        title: "Social media",
        text: "Posty, karuzele, stories i grafiki sprzedażowe dopasowane do komunikacji marki w social mediach.",
      },
      {
        title: "Materiały marketingowe",
        text: "Prezentacje, ulotki, proste layouty, key visuale i digital assets wspierające promocję usług lub produktów.",
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
    heroKicker: "Graphic designer & ad strategist",
    heroLineOne: "Creative Solutions,",
    heroLineTwo: "That Sell",
    heroLead:
      "I combine advertising thinking with an illustrative sense of color and composition. I create visual materials that attract attention, build recognition and guide the audience toward the brand message.",
    scroll: "Scroll to projects",
    role: "Advertising design with an illustrative sense of color and composition",
    name: "Julia Koszczoł",
    aboutLabel: "About",
    about:
      "Junior graphic designer focused on branding, social media and marketing materials.",
    projectsLabel: "Projects",
    experienceLabel: "Offer",
    contactLabel: "Contact",
    skillsLabel: "Skills",
    languagesLabel: "Languages",
    location: "Poland / remote",
    Linkedin: "https://www.linkedin.com/in/julia-koszczo%C5%82-199516226/",
    email: "Julia.Koszczol112@gmail.com",
    phone: "+48 508 617 676",
    website: "portfolio-preview-skierka.netlify.app",
    viewAll: "All projects",
    selectedProjects: "Selected work",
    projectsDescription:
      "Projects focused on advertising design, social media, illustration and visual communication.",
    offerTitle: "How can I help?",
    offerDescription:
      "I create visual materials that help brands look consistent, professional and communicate their offer clearly.",
    aboutTitle: "Design to communication.",
    aboutText:
      "In my projects, I focus on balancing aesthetics and function. Design should not only look good, but also support a specific goal: sales, recognition, image or brand communication.",
    aboutCards: [
      {
        title: "Communication",
        text: "I make sure the project is clear and tailored to its audience.",
      },
      {
        title: "Consistency",
        text: "I create materials that match the brand’s character and communication.",
      },
      {
        title: "Illustrative sensitivity",
        text: "My illustration background helps me work intentionally with color, mood and composition.",
      },
    ],
    services: [
      {
        title: "Advertising graphics",
        text: "Banners, digital ads, promotional graphics and visual assets prepared for online campaigns.",
      },
      {
        title: "Social media",
        text: "Posts, carousels, stories and sales-oriented graphics tailored to brand communication in social media.",
      },
      {
        title: "Marketing materials",
        text: "Presentations, leaflets, simple layouts, key visuals and digital assets supporting products or services.",
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
  "mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-[#006970]";

export default function Home() {
  const { lang, toggleLang } = useLang();
  const t = TEXT[lang];

  return (
    <main className="min-h-screen bg-[#f4f4f1] px-5 py-6 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-[1440px] rounded-[2rem] border border-black/5 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* LEFT SIDEBAR */}
          <aside className="border-b border-black/5 p-6 lg:sticky lg:top-6 lg:h-[calc(100vh-48px)] lg:border-b-0">
            <div className="flex h-full flex-col">
              <div className="flex justify-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
                <Image
                  src="/prof.png"
                  alt={t.name}
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
              <div>
                
                <div className="mt-5">
                  <h1 className="flex justify-center text-2xl font-semibold tracking-tight">{t.name}</h1>
                </div>

                <div className="mt-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {t.aboutLabel}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">{t.about}</p>
                </div>

                <div className="mt-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {t.contactLabel}
                  </p>

                  <div className="space-y-3 text-sm text-slate-600">
                  <a
                    href={`mailto:${t.email}`}
                    className="grid grid-cols-[18px_1fr] items-center gap-3 transition hover:text-slate-950"
                  >
                    <Mail size={16} className="justify-self-center" />
                    <span className="break-all">{t.email}</span>
                  </a>

                  <a
                    href={t.Linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="grid grid-cols-[18px_1fr] items-center gap-3 transition hover:text-slate-950"
                  >
                    <Linkedin size={16} className="justify-self-center" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`tel:${t.phone.replaceAll(" ", "")}`}
                    className="grid grid-cols-[18px_1fr] items-center gap-3 transition hover:text-slate-950"
                  >
                    <Phone size={16} className="justify-self-center" />
                    <span>{t.phone}</span>
                  </a>

                  <div className="grid grid-cols-[18px_1fr] items-center gap-3">
                    <MapPin size={16} className="justify-self-center" />
                    <span>{t.location}</span>
                  </div>
                </div>
                </div>

                <div className="mt-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {t.skillsLabel}
                  </p>
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
                  <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {t.languagesLabel}
                  </p>
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
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <section className="min-h-screen border-l border-black/5">
            {/* LOCAL STICKY HEADER */}
            <div className="sticky top-0 z-40 flex items-center justify-end gap-6 border-b border-black/5 bg-white/85 px-6 py-4 backdrop-blur-xl md:px-10 lg:px-12">
              <a
                href="#projekty"
                className="text-sm font-medium text-slate-700 transition hover:text-[#006970]"
              >
                {lang === "pl" ? "Projekty" : "Projects"}
              </a>

              <a
                href="#oferta"
                className="text-sm font-medium text-slate-700 transition hover:text-[#006970]"
              >
                {lang === "pl" ? "Oferta" : "Services"}
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-slate-700 transition hover:text-[#006970]"
              >
                {lang === "pl" ? "O mnie" : "About"}
              </a>

              <a
                href="#kontakt"
                className="text-sm font-medium text-slate-700 transition hover:text-[#006970]"
              >
                {lang === "pl" ? "Kontakt" : "Contact"}
              </a>

              <Link
                href="/projects"
                className="text-sm font-medium text-slate-700 transition hover:text-[#006970]"
              >
                {lang === "pl" ? "Wszystkie projekty" : "All projects"}
              </Link>

              <button
                type="button"
                onClick={toggleLang}
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold transition hover:bg-black/5"
                aria-label="Toggle language"
              >
                {lang.toUpperCase()}
              </button>
            </div>

            <div className="px-6 py-8 md:px-10 lg:px-12">
              {/* INTRO / HERO */}
              <section id="up" className="min-h-[620px] pb-16 pt-10 md:pt-16">
                <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-[#006970]">
                  {t.heroKicker}
                </p>

                <h2 className="max-w-5xl text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.98] tracking-[-0.06em] text-black">
                  {t.heroLineOne}
                  <br />
                  <span className="italic text-[#006970]">{t.heroLineTwo}</span>
                </h2>

                <p className="mt-10 max-w-xl text-base leading-8 text-slate-700">
                  {t.heroLead}
                </p>

                <a
                  href="#projekty"
                  className="mt-12 inline-flex items-center gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-800 transition hover:text-[#006970]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#006970] text-[#006970] transition group-hover:bg-[#006970] group-hover:text-white">
                    <ArrowDown size={16} />
                  </span>
                  {t.scroll}
                </a>
              </section>

              {/* PROJECTS */}
              <section
                id="projekty"
                className="scroll-mt-24 border-t border-black/10 py-20"
              >
                <div className="mb-12 flex items-end justify-between gap-4">
                  <div>
                    <p className={labelClass}>{t.projectsLabel}</p>
                    <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
                      {t.selectedProjects}
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                      {t.projectsDescription}
                    </p>
                  </div>

                  <Link
                    href="/projects"
                    className="hidden border border-black/15 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-800 transition hover:border-[#006970] hover:text-[#006970] sm:block"
                  >
                    {t.viewAll}
                  </Link>
                </div>

                <HomeLatestProjects />
              </section>

              {/* SERVICES */}
              <section
                id="oferta"
                className="scroll-mt-24 border-t border-black/10 py-20"
              >
                <p className={labelClass}>{t.experienceLabel}</p>

                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
                      {t.offerTitle}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                      {t.offerDescription}
                    </p>
                  </div>

                  <div className="divide-y divide-black/10 border-t border-black/10">
                    {t.services.map((service, index) => (
                      <article
                        key={service.title}
                        className="grid gap-6 py-8 sm:grid-cols-[72px_1fr]"
                      >
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#006970]">
                          0{index + 1}
                        </p>

                        <div>
                          <h3 className="text-2xl font-black tracking-tight text-black">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                            {service.text}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              {/* ABOUT */}
              <section
                id="about"
                className="scroll-mt-24 border-t border-black/10 py-20"
              >
                <p className={labelClass}>
                  {lang === "pl" ? "Więcej o mnie" : "More about me"}
                </p>

                <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
                  <div>
                    <h2 className="text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
                      {t.aboutTitle}
                    </h2>
                  </div>

                  <div>
                    <p className="text-lg leading-9 text-slate-700">
                      {t.aboutText}
                    </p>

                    <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
                      {t.aboutCards.map((card, index) => (
                        <div key={card.title} className="grid gap-4 py-7 sm:grid-cols-[56px_1fr]">
                          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#006970]">
                            0{index + 1}
                          </p>
                          <div>
                            <h3 className="text-xl font-black text-black">{card.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                              {card.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* CONTACT */}
              <ContactPage />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
