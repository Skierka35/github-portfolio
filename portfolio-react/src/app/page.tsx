"use client";

import Introduce from "./components/introduce";
import ContactPage from "./components/contact";
import HomeLatestProjects from "./components/homeLatestProjects";
import { useLang } from "./components/languageProvider";
import Link from "next/link";

const TEXT = {
  pl: {
    role: "Graphic Designer",
    subtitle:
      "Tworzę grafiki marketingowe, identyfikacje wizualne i materiały social media, które łączą estetykę z czytelnym przekazem.",
    ctaPrimary: "Kontakt",
    ctaSecondary: "Zobacz projekty",
    latestTitle: "Wybrane projekty marketingowe",
    aboutTitle: "O mnie",
    servicesTitle: "Zakres współpracy",
    servicesSubtitle:
      "Projektuję materiały wizualne dla marek, kampanii i komunikacji online.",
    contactTitle: "Skontaktuj się ze mną",
    seeAll: "Zobacz wszystkie",
    cards: {
      specialization: "Specjalizacja",
      focus: "Fokus",
      availability: "Dostępność",
      specializationValue: "Branding / Social Media / Video",
      focusValue: "estetyka, spójność marki, komunikacja wizualna",
      availabilityValue: "projekty freelance i współpraca zdalna",
    },
    services: [
      {
        title: "Grafiki do social media",
        text: "Posty, karuzele, materiały promocyjne i kreacje dopasowane do komunikacji marki.",
      },
      {
        title: "Identyfikacja wizualna",
        text: "Spójne systemy wizualne, key visuale, styl komunikacji i podstawowe elementy brandingu.",
      },
      {
        title: "Materiały marketingowe",
        text: "Grafiki reklamowe, banery, prezentacje, materiały sprzedażowe i digital assets.",
      },
      {
        title: "Video i krótkie formy",
        text: "Proste materiały video, rolki i formaty do komunikacji w social mediach.",
      },
    ],
  },
  en: {
    role: "Marketing Designer",
    subtitle:
      "I create marketing visuals, brand identities and social media assets that combine aesthetics with clear communication.",
    ctaPrimary: "Contact",
    ctaSecondary: "View projects",
    latestTitle: "Selected marketing projects",
    aboutTitle: "About me",
    servicesTitle: "Services",
    servicesSubtitle:
      "I design visual materials for brands, campaigns and online communication.",
    contactTitle: "Get in touch",
    seeAll: "View all",
    cards: {
      specialization: "Specialization",
      focus: "Focus",
      availability: "Availability",
      specializationValue: "Branding / Social Media / Video",
      focusValue: "aesthetics, visual consistency, brand communication",
      availabilityValue: "freelance projects and remote collaboration",
    },
    services: [
      {
        title: "Social media graphics",
        text: "Posts, carousels, promotional materials and assets tailored to brand communication.",
      },
      {
        title: "Visual identity",
        text: "Consistent visual systems, key visuals, communication style and essential branding elements.",
      },
      {
        title: "Marketing materials",
        text: "Ad creatives, banners, presentations, sales materials and digital assets.",
      },
      {
        title: "Video and short-form content",
        text: "Simple video materials, reels and formats for social media communication.",
      },
    ],
  },
} as const;

export default function Home() {
  const { lang } = useLang();
  const t = TEXT[lang];

  return (
    <main className="w-full bg-[#f6f6f4] text-slate-900 dark:bg-neutral-950 dark:text-slate-100">
      {/* HERO */}
      <section className="relative min-h-[720px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bajkowysen.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#f6f6f4] dark:to-neutral-950" />
        </div>

        <div className="relative z-10 flex min-h-[620px] flex-col items-center justify-center px-6 pb-28 pt-28 text-center md:px-10">
          <div className="mb-6 h-36 w-36 overflow-hidden rounded-full border-4 border-white/90 shadow-2xl md:h-44 md:w-44">
            <img
              src="/prof.jpg"
              alt="Julia Koszczoł"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-xs uppercase tracking-[0.28em] text-white/75 md:text-sm">
            {t.role}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Julia Koszczoł
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#kontakt"
              className="rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
            >
              {t.ctaPrimary}
            </a>

            <a
              href="#projekty"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* floating info cards */}
        <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 md:px-6">
          <div className="grid gap-4 rounded-[2rem] border border-black/5 bg-white/90 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:grid-cols-3 md:p-6">
            <div className="rounded-2xl bg-[#f6f6f4] px-5 py-4 dark:bg-white/5">
              <p className="text-sm text-slate-500 dark:text-white/60">
                {t.cards.specialization}
              </p>
              <p className="mt-1 font-medium">{t.cards.specializationValue}</p>
            </div>

            <div className="rounded-2xl bg-[#f6f6f4] px-5 py-4 dark:bg-white/5">
              <p className="text-sm text-slate-500 dark:text-white/60">
                {t.cards.focus}
              </p>
              <p className="mt-1 font-medium">{t.cards.focusValue}</p>
            </div>

            <div className="rounded-2xl bg-[#f6f6f4] px-5 py-4 dark:bg-white/5">
              <p className="text-sm text-slate-500 dark:text-white/60">
                {t.cards.availability}
              </p>
              <p className="mt-1 font-medium">{t.cards.availabilityValue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:px-8">
        {/* ABOUT */}
        <section id="o-mnie" className="scroll-mt-28 py-14">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-white/50">
              {t.aboutTitle}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-3xl">
              {lang === "pl"
                ? "Projektuję materiały, które mają dobrze wyglądać i działać jeszcze lepiej."
                : "I design visual materials that should look good and work even better."}
            </h2>
          </div>

          <Introduce />
        </section>

        {/* SERVICES */}
        <section id="uslugi" className="scroll-mt-28 py-14">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-white/50">
              {t.servicesTitle}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-3xl">
              {t.servicesSubtitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projekty" className="scroll-mt-28 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-white/50">
                Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-3xl">
                {t.latestTitle}
              </h2>
            </div>

            <Link
              href="/projects"
              className="text-sm font-medium text-slate-700 underline underline-offset-4 dark:text-white/80"
            >
              {t.seeAll}
            </Link>
          </div>

          <HomeLatestProjects />
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="scroll-mt-28 py-14">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-white/50">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.contactTitle}
            </h2>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-8">
            <ContactPage />
          </div>
        </section>
      </div>
    </main>
  );
}