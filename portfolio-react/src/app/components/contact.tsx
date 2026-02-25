"use client";

import { useLang } from "../components/languageProvider";

export default function ContactPage() {
  const { lang } = useLang();

  const TEXT = {
    pl: {
      title: "Kontakt",
      email: "Email",
      phone: "Telefon",
    },
    en: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
    },
  } as const;

  const t = TEXT[lang];

  return (
    <section className="w-full py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="space-y-6 text-lg text-slate-700 dark:text-white/70">
          <div>
            <span className="block text-sm uppercase tracking-wider text-slate-500 dark:text-white/50 mb-1">
              {t.email}
            </span>
            <a
              href="mailto:Julia.Koszczol112@gmail.com"
              className="hover:opacity-70 transition"
            >
              Julia.Koszczol112@gmail.com
            </a>
          </div>

          <div>
            <span className="block text-sm uppercase tracking-wider text-slate-500 dark:text-white/50 mb-1">
              {t.phone}
            </span>
            <a
              href="tel:+48508617676"
              className="hover:opacity-70 transition"
            >
              +48 508 617 676
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
