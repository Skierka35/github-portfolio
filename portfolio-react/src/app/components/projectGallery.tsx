"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PROJECTS, TAGS, TAG_LABELS, type Project, type TagId } from "../components/projects";
import { useLang } from "../components/languageProvider";

function ProjectCard({
  project,
  lang,
  onClick,
}: {
  project: Project;
  lang: "pl" | "en";
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const title = lang === "en" ? project.titleEn ?? project.title : project.title;
  const description = lang === "en" ? project.descriptionEn ?? project.description : project.description;

  const cover = project.images?.[0];

  const handleOpen = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClick();
  };

  return (
    <div
      className="
        relative rounded-2xl overflow-hidden cursor-pointer group transition
        border border-black/10 bg-white hover:shadow-lg
        dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl
      "
      onClick={handleOpen}
    >
      <div className="overflow-hidden h-64 md:h-72 bg-black/5 dark:bg-black/20">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover group-hover:brightness-110 transition"
          />
        ) : cover ? (
          <Image
            src={cover}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-white/60">
            {lang === "pl" ? "Brak podglądu" : "No preview"}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-600 dark:text-white/70 mb-5 text-justify">
          {description}
        </p>

        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            className="
              inline-block text-sm font-medium px-4 py-2 rounded-lg transition
              bg-black text-white hover:bg-black/90
              dark:bg-white dark:text-black dark:hover:bg-white/90
            "
            onClick={(e) => e.stopPropagation()}
          >
            {lang === "pl" ? "Zobacz projekt" : "View project"}
          </Link>
        ) : (
          <span className="text-sm text-slate-500 dark:text-white/60 italic">
            {lang === "pl" ? "Kliknij, aby powiększyć" : "Click to enlarge"}
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  lang,
  onClose,
}: {
  project: Project;
  lang: "pl" | "en";
  onClose: () => void;
}) {
  const title = lang === "en" ? project.titleEn ?? project.title : project.title;
  const description =
    lang === "en" ? project.descriptionEn ?? project.description : project.description;

  const images = project.images ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setActiveIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setActiveIndex((i) => Math.min(images.length - 1, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  const activeImage = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl border
          bg-white border-black/10
          dark:bg-[#12161c] dark:border-white/10
          grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* LEFT: Gallery */}
        <div className="min-h-[320px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10">
          {/* big preview */}
          <div className="relative w-full h-[46vh] lg:h-[90vh] max-h-[520px] lg:max-h-none bg-black/5 dark:bg-black/30">
            {project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
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
              <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-white/60">
                {lang === "pl" ? "Brak podglądu" : "No preview"}
              </div>
            )}
          </div>

          {/* thumbs strip */}
          {images.length > 1 && !project.video && (
            <div className="px-4 py-4">
              <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-white/60 mb-3">
                {lang === "pl" ? "Podglądy" : "Previews"}
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((src, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`
                        relative shrink-0 w-24 h-16 rounded-lg overflow-hidden border transition
                        ${isActive
                          ? "border-black/40 dark:border-white/40"
                          : "border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/25"}
                      `}
                      aria-label={`preview ${idx + 1}`}
                    >
                      <Image
                        src={src}
                        alt=""
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

        {/* RIGHT: Text */}
        <aside className="p-6 lg:p-8 overflow-y-auto max-h-[90vh]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {title}
            </h3>

            <button
              type="button"
              onClick={onClose}
              className="
                shrink-0 rounded-lg border px-3 py-2 text-sm transition
                border-black/10 hover:border-black/25
                dark:border-white/10 dark:hover:border-white/25
                text-slate-700 dark:text-white/80
              "
            >
              {lang === "pl" ? "Zamknij" : "Close"}
            </button>
          </div>

          <p className="mt-4 text-slate-600 dark:text-white/70 leading-relaxed">
            {description}
          </p>

          {/* tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="
                  px-3 py-1 rounded-lg text-xs border
                  border-black/10 bg-black/5 text-slate-700
                  dark:border-white/10 dark:bg-white/10 dark:text-white/80
                "
              >
                {t}
              </span>
            ))}
          </div>

          {/* internal case study link */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="
                inline-block px-5 py-3 rounded-lg font-medium transition
                bg-black text-white hover:bg-black/90
                dark:bg-white dark:text-black dark:hover:bg-white/90
              "
            >
              {lang === "pl" ? "Zobacz opis projektu" : "View case study"}
            </Link>

            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="
                  inline-block px-5 py-3 rounded-lg font-medium transition border
                  border-black/15 text-slate-900 hover:border-black/30
                  dark:border-white/15 dark:text-white dark:hover:border-white/30
                "
              >
                {lang === "pl" ? "Link zewnętrzny" : "External link"}
              </Link>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { lang } = useLang();
  const searchParams = useSearchParams();

  const [activeTag, setActiveTag] = useState<TagId>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // /projects?tag=branding
  useEffect(() => {
    const tagFromUrl = searchParams.get("tag") as TagId | null;
    if (tagFromUrl && TAGS.includes(tagFromUrl)) {
      setActiveTag(tagFromUrl);
      setTimeout(() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const heading = lang === "pl" ? "Projekty marketingowe" : "Marketing projects";
  const subtitle =
    lang === "pl"
      ? "Branding, kampanie, materiały do social mediów i inne realizacje."
      : "Branding, campaigns, social assets and more.";

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-4 text-slate-900 dark:text-slate-100">
        {heading}
      </h1>
      <p className="text-center mb-10 text-slate-600 dark:text-white/70">
        {subtitle}
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {TAGS.map((tagId) => {
          const isActive = activeTag === tagId;
          return (
            <button
              key={tagId}
              onClick={() => setActiveTag(tagId)}
              className={`
                px-5 py-2 rounded-xl border transition
                ${isActive
                  ? "bg-black text-white border-black/20 dark:bg-white dark:text-black dark:border-white/20"
                  : "bg-white border-black/10 text-slate-700 hover:border-black/20 dark:bg-white/5 dark:border-white/10 dark:text-white/80 dark:hover:border-white/20"}
              `}
            >
              {TAG_LABELS[tagId][lang]}
            </button>
          );
        })}
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col relative rounded-2xl border
              bg-white border-black/10
              dark:bg-[#12161c] dark:border-white/10
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* MEDIA */}
            {selectedProject.video ? (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] object-contain"
              />
            ) : selectedProject.images?.[0] ? (
              <div className="flex items-center justify-center w-full max-h-[80vh] bg-black/5 dark:bg-black/30">
                <Image
                  src={selectedProject.images[0]}
                  alt={lang === "en" ? (selectedProject.titleEn ?? selectedProject.title) : selectedProject.title}
                  width={1600}
                  height={1000}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            ) : null}

            {/* TEXT */}
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {lang === "en" ? (selectedProject.titleEn ?? selectedProject.title) : selectedProject.title}
              </h3>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                {lang === "en"
                  ? (selectedProject.descriptionEn ?? selectedProject.description)
                  : selectedProject.description}
              </p>

              {selectedProject.link && (
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  className="
                    inline-block text-sm font-medium px-4 py-2 rounded-lg transition
                    bg-black text-white hover:bg-black/90
                    dark:bg-white dark:text-black dark:hover:bg-white/90
                  "
                >
                  {lang === "pl" ? "Otwórz projekt" : "Open project"}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}