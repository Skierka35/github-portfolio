"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { useLang } from "./languageProvider";

export default function ContactPage() {
  const { lang } = useLang();

  const t = {
    pl: {
      label: "Kontakt",
      title: "Porozmawiajmy o współpracy",
      description:
        "Masz projekt reklamowy, potrzebujesz grafik do social media albo materiałów promocyjnych? Napisz do mnie krótko, czego potrzebujesz, a ustalimy zakres współpracy.",
      button: "Napisz do mnie",
      email: "Julia.Koszczol112@gmail.com",
      hintTitle: "Co warto napisać?",
      hints: [
        "czego dotyczy projekt",
        "gdzie grafika będzie używana",
        "jaki styl lub efekt chcesz osiągnąć",
        "czy masz już materiały, logo lub teksty",
      ],
    },
    en: {
      label: "Contact",
      title: "Let’s talk about working together",
      description:
        "Have an advertising project, need social media graphics or promotional materials? Send me a short message about what you need and we’ll define the project scope.",
      button: "Email me",
      email: "Julia.Koszczol112@gmail.com",
      hintTitle: "What should you include?",
      hints: [
        "what the project is about",
        "where the design will be used",
        "what style or result you want",
        "whether you already have assets, logo or text",
      ],
    },
  }[lang === "pl" ? "pl" : "en"];

  return (
    <section id="kontakt" className="scroll-mt-24 border-t border-black/10 py-20">
      <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-[#006970]">
        {t.label}
      </p>

      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>

          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700">
            {t.description}
          </p>

          <Link
            href={`mailto:${t.email}`}
            className="mt-10 inline-flex items-center gap-3 bg-[#006970] px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition hover:brightness-110"
          >
            {t.button}
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="border-t border-black/10 pt-8 lg:mt-20">
          <h3 className="text-2xl font-black text-black">{t.hintTitle}</h3>

          <ul className="mt-6 divide-y divide-black/10">
            {t.hints.map((hint, index) => (
              <li key={hint} className="grid grid-cols-[48px_1fr] py-4 text-sm leading-7 text-slate-700">
                <span className="font-mono text-xs font-semibold text-[#006970]">
                  0{index + 1}
                </span>
                <span>{hint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
