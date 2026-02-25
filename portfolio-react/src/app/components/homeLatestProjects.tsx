"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project, type TagId } from "../components/projects";
import { useLang } from "../components/languageProvider";

function getLatestByTag(tag: TagId): Project | undefined {
  return PROJECTS
    .filter((p) => p.tags.includes(tag))
    .sort((a, b) => b.id - a.id)[0];
}

const TEXT = {
  pl: {
    title: "Ostatnie projekty",
    subtitle: "Najnowsze realizacje z brandingu i ilustracji / concept artu.",
    brandingLabel: "Grafika reklamowa / branding",
    illustrationLabel: "Ilustracja / concept art",
    viewBranding: "Zobacz branding",
    viewIllustrations: "Zobacz ilustracje",
    allProjects: "Wszystkie projekty",
    noThumb: "Brak miniatury",
  },
  en: {
    title: "Latest projects",
    subtitle: "Recent work from branding and illustration / concept art.",
    brandingLabel: "Branding / advertising",
    illustrationLabel: "Illustration / concept art",
    viewBranding: "View branding",
    viewIllustrations: "View illustrations",
    allProjects: "All projects",
    noThumb: "No thumbnail available",
  },
} as const;

export default function HomeLatestProjects() {
  const { lang } = useLang();
  const t = TEXT[lang];

  const latestBranding = getLatestByTag("branding");
  const latestIllustration = getLatestByTag("illustration");

  const items: Array<{
    key: TagId;
    label: string;
    cta: string;
    project?: Project;
  }> = [
    {
      key: "branding",
      label: t.brandingLabel,
      cta: t.viewBranding,
      project: latestBranding,
    },
    {
      key: "illustration",
      label: t.illustrationLabel,
      cta: t.viewIllustrations,
      project: latestIllustration,
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-white/70">
            {t.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map(({ key, label, cta, project }) => {
            if (!project) return null;

            const title = lang === "en" ? (project.titleEn ?? project.title) : project.title;
            const description =
              lang === "en" ? (project.descriptionEn ?? project.description) : project.description;

            const cover = project.images?.[0];

            return (
              <article key={key} className="group">
                {/* Category label */}
                <p className="text-center mb-4 text-sm uppercase tracking-wider text-slate-500 dark:text-white/50">
                  {label}
                </p>

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

                  {/* CTA per category */}
                  <div className="mt-6">
                    <Link
                      href={`/projects?tag=${key}`}
                      className="
                        inline-block px-6 py-3 rounded-lg border transition
                        border-black/15 hover:border-black/30 text-slate-900
                        dark:border-white/15 dark:hover:border-white/30 dark:text-white
                      "
                    >
                      {cta}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom button */}
        <div className="mt-14 flex justify-center">
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
