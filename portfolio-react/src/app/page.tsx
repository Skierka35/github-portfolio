"use client";

import Introduce from "./components/introduce";
import ContactPage from "./components/contact";
import HomeLatestProjects from "./components/homeLatestProjects";
import { useLang } from "./components/languageProvider";
import Link from "next/link";

const TEXT = {
  pl: {
    subtitle:
      "Grafika marketingowa: branding, kampanie, social media, materiały sprzedażowe i DTP.",
    ctaPrimary: "Kontakt",
    ctaSecondary: "Zobacz projekty marketingowe",
    contactTitle: "Skontaktuj się ze mną",
  },
  en: {
    subtitle:
      "Marketing design: branding, campaigns, social media, sales assets and DTP.",
    ctaPrimary: "Contact",
    ctaSecondary: "View marketing projects",
    contactTitle: "Get in touch",
  },
} as const;

export default function Home() {
  const { lang } = useLang();
  const t = TEXT[lang];

  return (
    <main className="relative w-full">

      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="relative w-full overflow-hidden rounded-2xl">
          <div className="absolute inset-0 -z-10">
            <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/85 dark:bg-black/70 backdrop-blur-sm" />
          </div>

          <div className="px-6 md:px-10 pt-20 md:pt-24 pb-16 md:pb-20">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-white/60">
                Marketing Designer
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Julia Koszczoł
              </h1>

              <p className="mt-5 text-lg text-slate-700 dark:text-white/70 leading-relaxed">
                {t.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="
                    px-5 py-3 rounded-lg transition text-sm font-medium
                    bg-black text-white hover:bg-black/90
                    dark:bg-white dark:text-black dark:hover:bg-white/90
                  "
                >
                  {t.ctaPrimary}
                </a>

                <Link
                  href="/projects?tag=branding"
                  className="
                    px-5 py-3 rounded-lg border transition text-sm font-medium
                    border-black/15 hover:border-black/30 text-slate-900
                    dark:border-white/15 dark:hover:border-white/30 dark:text-white
                  "
                >
                  {t.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20">
          <Introduce />
        </section>

        {/* LATEST BRANDING */}
        <HomeLatestProjects />

        {/* CONTACT */}
        <section id="kontakt" className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-slate-900 dark:text-slate-100">
            {t.contactTitle}
          </h2>
          <ContactPage />
        </section>
      </div>
    </main>
  );
}