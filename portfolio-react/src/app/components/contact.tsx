"use client";

import { Mail, Phone, Briefcase, MapPin } from "lucide-react";
import { useLang } from "../components/languageProvider";

export default function ContactPage() {
  const { lang } = useLang();

  const TEXT = {
    pl: {
      eyebrow: "Kontakt",
      title: "Porozmawiajmy o współpracy",
      description:
        "Jeśli szukasz osoby do projektów brandingowych, materiałów marketingowych lub grafik do social media, napisz do mnie. Chętnie porozmawiam o zakresie, estetyce i potrzebach Twojej marki.",
      email: "Email",
      phone: "Telefon",
      availability: "Współpraca",
      location: "Lokalizacja",
      availabilityValue: "Freelance / współpraca zdalna",
      locationValue: "Polska",
      cta: "Napisz wiadomość",
    },
    en: {
      eyebrow: "Contact",
      title: "Let’s talk about your project",
      description:
        "If you are looking for someone to create branding, marketing materials or social media graphics, feel free to contact me. I’d be happy to discuss the scope, visual direction and needs of your brand.",
      email: "Email",
      phone: "Phone",
      availability: "Availability",
      location: "Location",
      availabilityValue: "Freelance / remote collaboration",
      locationValue: "Poland",
      cta: "Send a message",
    },
  } as const;

  const t = TEXT[lang];

  return (
    <section className="w-full">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT SIDE */}
        <div className="rounded-[2rem] border border-black/5 bg-[#f8f7f3] p-8 dark:border-white/10 dark:bg-white/5 md:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-white/50">
            {t.eyebrow}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
            {t.title}
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.description}
          </p>

          <div className="mt-8">
            <a
              href="mailto:Julia.Koszczol112@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              <Mail size={16} />
              {t.cta}
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
              <Mail size={18} className="text-slate-700 dark:text-slate-200" />
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-white/50">
              {t.email}
            </p>
            <a
              href="mailto:Julia.Koszczol112@gmail.com"
              className="mt-3 block break-all text-base font-medium text-slate-900 transition hover:opacity-70 dark:text-slate-100"
            >
              Julia.Koszczol112@gmail.com
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
              <Phone size={18} className="text-slate-700 dark:text-slate-200" />
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-white/50">
              {t.phone}
            </p>
            <a
              href="tel:+48508617676"
              className="mt-3 block text-base font-medium text-slate-900 transition hover:opacity-70 dark:text-slate-100"
            >
              +48 508 617 676
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
              <Briefcase size={18} className="text-slate-700 dark:text-slate-200" />
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-white/50">
              {t.availability}
            </p>
            <p className="mt-3 text-base font-medium text-slate-900 dark:text-slate-100">
              {t.availabilityValue}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
              <MapPin size={18} className="text-slate-700 dark:text-slate-200" />
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-white/50">
              {t.location}
            </p>
            <p className="mt-3 text-base font-medium text-slate-900 dark:text-slate-100">
              {t.locationValue}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}