"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  PROJECTS,
  TAGS,
  TAG_LABELS,
  type Project,
  type TagId,
} from "../components/projects";
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
  const description =
    lang === "en"
      ? project.descriptionEn ?? project.description
      : project.description;

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
            width={900}
            height={600}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-white/60">
            {lang === "pl" ? "Brak miniatury" : "No thumbnail"}
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

export default function ProjectGallery() {
  const { lang } = useLang();
  const searchParams = useSearchParams();

  const [activeTag, setActiveTag] = useState<TagId>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Czytanie tagu z URL: /projects?tag=illustration
  useEffect(() => {
    const tagFromUrl = searchParams.get("tag") as TagId | null;
    if (tagFromUrl && TAGS.includes(tagFromUrl)) {
      setActiveTag(tagFromUrl);
      setTimeout(() => {
        gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const pickCategory = (tag: TagId) => {
    setActiveTag(tag);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const heading = lang === "pl" ? "Moje projekty" : "My projects";
  const subtitle =
    lang === "pl"
      ? "Wybierz kategorię albo przefiltruj tagami."
      : "Choose a category or filter by tags.";

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-4 text-slate-900 dark:text-slate-100">
        {heading}
      </h1>
      <p className="text-center mb-10 text-slate-600 dark:text-white/70">
        {subtitle}
      </p>

      {/* Dwie duże kategorie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <button
          type="button"
          onClick={() => pickCategory("branding")}
          className="
            text-left rounded-2xl p-8 transition border
            bg-white border-black/10 hover:shadow-lg
            dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl
          "
        >
          <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            {TAG_LABELS.branding[lang]}
          </div>
          <div className="text-slate-600 dark:text-white/70">
            {lang === "pl"
              ? "Identyfikacje, kampanie, key visuale, projekty marketingowe."
              : "Visual identity, campaigns, key visuals and marketing assets."}
          </div>
          <div
            className="
              mt-5 inline-block text-sm font-medium px-4 py-2 rounded-lg
              border border-black/10 text-slate-900
              dark:border-white/15 dark:text-white
            "
          >
            {lang === "pl" ? "Pokaż projekty" : "Show projects"}
          </div>
        </button>

        <button
          type="button"
          onClick={() => pickCategory("illustration")}
          className="
            text-left rounded-2xl p-8 transition border
            bg-white border-black/10 hover:shadow-lg
            dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl
          "
        >
          <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            {TAG_LABELS.illustration[lang]}
          </div>
          <div className="text-slate-600 dark:text-white/70">
            {lang === "pl"
              ? "Ilustracje autorskie, fantasy, prace koncepcyjne i postacie."
              : "Personal illustrations, fantasy pieces, concept work and characters."}
          </div>
          <div
            className="
              mt-5 inline-block text-sm font-medium px-4 py-2 rounded-lg
              border border-black/10 text-slate-900
              dark:border-white/15 dark:text-white
            "
          >
            {lang === "pl" ? "Pokaż ilustracje" : "Show illustrations"}
          </div>
        </button>
      </div>

      {/* Tagi */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {TAGS.map((tagId) => {
          const isActive = activeTag === tagId;
          return (
            <button
              key={tagId}
              onClick={() => setActiveTag(tagId)}
              className={`
                px-5 py-2 rounded-xl border transition
                ${
                  isActive
                    ? "bg-black text-white border-black/20 dark:bg-white dark:text-black dark:border-white/20"
                    : "bg-white border-black/10 text-slate-700 hover:border-black/20 dark:bg-white/5 dark:border-white/10 dark:text-white/80 dark:hover:border-white/20"
                }
              `}
            >
              {TAG_LABELS[tagId][lang]}
            </button>
          );
        })}
      </div>

      {/* Grid */}
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

      {/* Modal (scroll + wiele obrazów) */}
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
                className="w-full max-h-[75vh] object-contain bg-black/5 dark:bg-black/30"
              />
            ) : selectedProject.images?.length ? (
              <div className="w-full max-h-[75vh] overflow-y-auto p-6 space-y-6 bg-black/5 dark:bg-black/30">
                {selectedProject.images.map((src, i) => (
                  <Image
                    key={src + i}
                    src={src}
                    alt={`${lang === "en"
                      ? selectedProject.titleEn ?? selectedProject.title
                      : selectedProject.title} ${i + 1}`}
                    width={1600}
                    height={1200}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                ))}
              </div>
            ) : null}

            {/* TEXT */}
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {lang === "en"
                  ? selectedProject.titleEn ?? selectedProject.title
                  : selectedProject.title}
              </h3>

              <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                {lang === "en"
                  ? selectedProject.descriptionEn ?? selectedProject.description
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
