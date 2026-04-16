"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  TAG_LABELS,
  type Project,
} from "../components/projects";

type Lang = "pl" | "en";

function getProjectContent(project: Project, lang: Lang) {
  return {
    title: lang === "en" ? project.titleEn ?? project.title : project.title,
    description:
      lang === "en"
        ? project.descriptionEn ?? project.description
        : project.description,
  };
}

export default function ProjectPreviewModal({
  project,
  lang,
  onClose,
}: {
  project: Project;
  lang: Lang;
  onClose: () => void;
}) {
  const { title, description } = getProjectContent(project, lang);
  const images = project.images;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [project.id]);

  const hasMultipleImages = images.length > 1 && !project.video;

  const goToPrevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (!project.video && images.length > 1) {
        if (e.key === "ArrowLeft") goToPrevImage();
        if (e.key === "ArrowRight") goToNextImage();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, project.video, onClose]);

  const activeImage = images[activeIndex];
  const showDescription = Boolean(project.caseStudy || project.link);
  const showActions = Boolean(project.caseStudy || project.link);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-black/10 bg-white lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="min-h-[320px] border-b border-black/10 lg:min-h-0 lg:border-b-0 lg:border-r">
          <div className="relative h-[46vh] max-h-[520px] w-full bg-black/5 lg:h-[90vh] lg:max-h-none">
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={goToPrevImage}
                  aria-label={lang === "pl" ? "Poprzednie zdjęcie" : "Previous image"}
                  className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-slate-900 shadow-md backdrop-blur transition hover:bg-white md:flex"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={goToNextImage}
                  aria-label={lang === "pl" ? "Następne zdjęcie" : "Next image"}
                  className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-slate-900 shadow-md backdrop-blur transition hover:bg-white md:flex"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            ) : activeImage ? (
              <Image
                src={activeImage}
                alt={title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-500">
                {lang === "pl" ? "Brak podglądu" : "No preview"}
              </div>
            )}
          </div>

          {hasMultipleImages && (
            <div className="px-4 py-4">
              <div className="mb-3 text-xs uppercase tracking-wide text-slate-500">
                {lang === "pl" ? "Podglądy" : "Previews"}
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((src, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                    <button
                      key={`${src}-${idx}`}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                        isActive
                          ? "border-black/40 ring-2 ring-black/10"
                          : "border-black/10 hover:border-black/25"
                      }`}
                      aria-label={`${lang === "pl" ? "Podgląd" : "Preview"} ${idx + 1}`}
                      aria-pressed={isActive}
                    >
                      <Image
                        src={src}
                        alt={`${title} ${idx + 1}`}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <aside className="max-h-[90vh] overflow-y-auto p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-lg border border-black/10 px-3 py-2 text-sm text-slate-700 transition hover:border-black/25"
            >
              {lang === "pl" ? "Zamknij" : "Close"}
            </button>
          </div>

          {showDescription && (
            <p className="mt-4 leading-relaxed text-slate-600">{description}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-700"
              >
                {TAG_LABELS[tag][lang]}
              </span>
            ))}
          </div>

          {showActions && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.caseStudy && (
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-black/90"
                >
                  {lang === "pl" ? "Zobacz opis projektu" : "View case study"}
                </Link>
              )}

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block rounded-lg border border-black/15 px-5 py-3 font-medium text-slate-900 transition hover:border-black/30"
                >
                  {lang === "pl" ? "Link zewnętrzny" : "External link"}
                </Link>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}