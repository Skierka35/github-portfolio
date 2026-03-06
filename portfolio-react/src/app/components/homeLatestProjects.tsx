"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project, type TagId } from "../components/projects";
import { useLang } from "../components/languageProvider";

function getLatestByTag(tag: TagId, limit: number): Project[] {
  return PROJECTS.filter((p) => p.tags.includes(tag))
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
}

const TEXT = {
  pl: {
    title: "Ostatnie projekty marketingowe",
    subtitle: "Wybrane, najnowsze realizacje z obszaru brandingu i grafiki reklamowej.",
    allBranding: "Zobacz branding / marketing",
    allProjects: "Wszystkie projekty",
    noThumb: "Brak podglądu",
  },
  en: {
    title: "Latest marketing projects",
    subtitle: "A selection of recent work in branding and marketing design.",
    allBranding: "View branding / marketing",
    allProjects: "All projects",
    noThumb: "No preview available",
  },
} as const;

export default function HomeLatestProjects() {
  const { lang } = useLang();
  const t = TEXT[lang];

  const latest = getLatestByTag("branding", 2);

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-white/70">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {latest.map((p) => {
            const title = lang === "en" ? p.titleEn ?? p.title : p.title;
            const description = lang === "en" ? p.descriptionEn ?? p.description : p.description;

            const cover = p.images?.[0];

            return (
              <article key={p.id} className="group">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border bg-white border-black/10 dark:bg-black/20 dark:border-white/10">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-white/60">
                      {t.noThumb}
                    </div>
                  )}
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects?tag=branding"
            className="
              px-6 py-3 rounded-lg border transition
              border-black/15 hover:border-black/30 text-slate-900
              dark:border-white/15 dark:hover:border-white/30 dark:text-white
            "
          >
            {t.allBranding}
          </Link>

          <Link
            href="/projects"
            className="
              px-6 py-3 rounded-lg transition
              bg-black text-white hover:bg-black/90
              dark:bg-white dark:text-black dark:hover:bg-white/90
            "
          >
            {t.allProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}