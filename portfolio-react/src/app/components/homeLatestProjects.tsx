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
    <div className="w-full">
      <div className="relative">
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrev}
              aria-label={t.previous}
              className="absolute left-4 top-[38%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-slate-900 shadow-md backdrop-blur transition hover:bg-white md:flex"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label={t.next}
              className="absolute right-4 top-[38%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-slate-900 shadow-md backdrop-blur transition hover:bg-white md:flex"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <article className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
            {cover ? (
              <Image
                src={cover}
                alt={title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-500">
                {t.noThumb}
              </div>
            )}
          </div>

          <div className="lg:pr-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#006970]">
              {t.category}
            </p>

            <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              {title}
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {description}
            </p>

            {project.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {TAG_LABELS[tag][lang]}
                  </span>
                ))}
              </div>
            )}

            {(hasCaseStudy || hasExternalLink) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {hasCaseStudy && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-black px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/90"
                  >
                    {t.details}
                    <ExternalLink size={15} />
                  </Link>
                )}

                {!hasCaseStudy && hasExternalLink && (
                  <Link
                    href={project.link!}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-black px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/90"
                  >
                    {t.previewOnly}
                    <ExternalLink size={15} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </article>

        {total > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? "w-8 bg-slate-900" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/projects?tag=branding"
          className="border border-black/15 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:border-[#006970] hover:text-[#006970]"
        >
          {t.allBranding}
        </Link>

        <Link
          href="/projects"
          className="bg-black px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/90"
        >
          {t.allProjects}
        </Link>
      </div>
    </div>
  );
}
