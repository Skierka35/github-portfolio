"use client";

import Introduce from "./components/introduce";
import ContactPage from "./components/contact";
import HomeLatestIllustrations from "./components/homeLatestProjects";
import ThemeToggle from "./components/themeToggle";
import { useLang } from "./components/languageProvider";

const TEXT = {
  pl: {
    subtitle:
      "Graphic designer & ilustratorka. Branding, kampanie i ilustracje digitalowe.",
    contactBtn: "Kontakt",
    projectsBtn: "Projekty",
    contactTitle: "Skontaktuj się ze mną",
  },
  en: {
    subtitle:
      "Graphic designer & illustrator. Branding, campaigns and digital illustration.",
    contactBtn: "Contact",
    projectsBtn: "Projects",
    contactTitle: "Get in touch",
  },
} as const;

export default function Home() {
  const { lang } = useLang();
  const t = TEXT[lang];

  return (
    <main className="relative w-full">
      {/* Top bar */}
      <header className="w-full">
        <div className="max-w-6xl mx-auto px-6 pt-6 flex items-center justify-end">
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        <section className="relative w-full overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/hero-bg.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-sm" />
          </div>

          <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Julia Koszczoł
              </h1>

              <p className="mt-4 text-lg text-slate-700 dark:text-white/70">
                Graphic designer & ilustratorka. Branding, kampanie i ilustracje digitalowe.
              </p>
            </div>
          </div>
        </section>


        {/* O MNIE */}
        <section className="py-16">
          <Introduce />
        </section>

        {/* OSTATNIE ILUSTRACJE */}
        <HomeLatestIllustrations />

        {/* KONTAKT */}
        <section id="kontakt" className="py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            {t.contactTitle}
          </h2>
          <ContactPage />
        </section>
      </div>
    </main>
  );
}
