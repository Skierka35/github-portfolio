"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import {
  PROJECTS,
  TAG_LABELS,
  type Project,
  type ProjectTag,
} from "../components/projects";
import { useLang } from "../components/languageProvider";

function getProjectContent(project: Project, lang: "pl" | "en") {
  return {
    title: lang === "en" ? project.titleEn ?? project.title : project.title,
    description:
      lang === "en"
        ? project.descriptionEn ?? project.description
        : project.description,
  };
}

function getLatestByTag(tag: ProjectTag, limit: number) {
  return PROJECTS
    .filter((project) => project.tags.includes(tag))
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
}

const TEXT = {
  pl: {
    title: "Ostatnie projekty marketingowe",
    subtitle:
      "Wybrane, najnowsze realizacje z obszaru brandingu i grafiki reklamowej.",
    allBranding: "Zobacz branding / marketing",
    allProjects: "Wszystkie projekty",
    noThumb: "Brak podglądu",
    details: "Zobacz projekt",
    previewOnly: "Podgląd projektu",
    previous: "Poprzedni",
    next: "Następny",
    category: "Branding / Marketing",
  },
  en: {
    title: "Latest marketing projects",
    subtitle: "A selection of recent work in branding and marketing design.",
    allBranding: "View branding / marketing",
    allProjects: "All projects",
    noThumb: "No preview available",
    details: "View project",
    previewOnly: "Project preview",
    previous: "Previous",
    next: "Next",
    category: "Branding / Marketing",
  },
} as const;

export default function HomeLatestProjects() {
  const { lang } = useLang();
  const t = TEXT[lang];

  const projects = useMemo(() => getLatestByTag("branding", 4), []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= projects.length) {
      setCurrent(0);
    }
  }, [current, projects.length]);

  const total = projects.length;
  const project = projects[current];

  if (!project) return null;

  const { title, description } = getProjectContent(project, lang);
  const cover = project.thumbnail ?? project.images[0] ?? null;
  const hasCaseStudy = Boolean(project.caseStudy);
  const hasExternalLink = Boolean(project.link);

  const goToPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goToNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-white/70">
            {t.subtitle}
          </p>
        </div>

        <div className="relative">
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                aria-label={t.previous}
                className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-slate-900 shadow-md backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-black/70 dark:text-white md:flex"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label={t.next}
                className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-slate-900 shadow-md backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-black/70 dark:text-white md:flex"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <article className="grid items-stretch gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-black/20">
              {cover ? (
                <Image
                  src={cover}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-slate-500 dark:text-white/60">
                  {t.noThumb}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-white/50">
                {t.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-white/70 md:text-base">
                {description}
              </p>

              {project.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
                    >
                      {TAG_LABELS[tag][lang]}
                    </span>
                  ))}
                </div>
              )}

              {(hasCaseStudy || hasExternalLink) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {hasCaseStudy && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
                      {t.details}
                      <ExternalLink size={16} />
                    </Link>
                  )}

                  {!hasCaseStudy && hasExternalLink && (
                    <Link
                      href={project.link!}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
                      {t.previewOnly}
                      <ExternalLink size={16} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </article>

          {total > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index
                      ? "w-8 bg-slate-900 dark:bg-white"
                      : "w-2.5 bg-slate-300 dark:bg-white/25"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects?tag=branding"
            className="rounded-full border border-black/15 px-6 py-3 text-slate-900 transition hover:border-black/30 dark:border-white/15 dark:text-white dark:hover:border-white/30"
          >
            {t.allBranding}
          </Link>

          <Link
            href="/projects"
            className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            {t.allProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}