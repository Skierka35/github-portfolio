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
  type FilterTag,
} from "../components/projects";
import { useLang } from "../components/languageProvider";
import ProjectPreviewModal from "./ProjectPreviewModal";

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

function ProjectCard({
  project,
  lang,
  onOpen,
}: {
  project: Project;
  lang: Lang;
  onOpen: () => void;
}) {
  const { title, description } = getProjectContent(project, lang);
  const cover = project.thumbnail ?? project.images[0] ?? null;
  const hasAction = Boolean(project.caseStudy || project.link);

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:shadow-lg">
      <button
        type="button"
        onClick={onOpen}
        className="group block w-full text-left"
      >
        <div className="h-64 overflow-hidden bg-black/5 md:h-72">
          {project.video ? (
            <video
              src={project.video}
              poster={cover ?? undefined}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition group-hover:brightness-110"
            />
          ) : cover ? (
            <Image
              src={cover}
              alt={title}
              width={1200}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-500">
              {lang === "pl" ? "Brak podglądu" : "No preview"}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-slate-900 md:text-2xl">
            {title}
          </h3>

          <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
      </button>

      <div className="px-6 pb-6">
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            className="inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/90"
          >
            {lang === "pl" ? "Zobacz projekt" : "View project"}
          </Link>
        ) : hasAction ? (
          <span className="text-sm italic text-slate-500">
            {lang === "pl" ? "Kliknij, aby otworzyć" : "Click to open"}
          </span>
        ) : (
          <span className="text-sm italic text-slate-500">
            {lang === "pl" ? "Kliknij, aby powiększyć" : "Click to enlarge"}
          </span>
        )}
      </div>
    </article>
  );
}

export default function Portfolio() {
  const { lang } = useLang();
  const searchParams = useSearchParams();

  const [activeTag, setActiveTag] = useState<FilterTag>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tagFromUrl = searchParams.get("tag") as FilterTag | null;

    if (tagFromUrl && TAGS.includes(tagFromUrl)) {
      setActiveTag(tagFromUrl);

      setTimeout(() => {
        gridRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    }
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  const heading =
    lang === "pl" ? "Projekty marketingowe" : "Marketing projects";
  const subtitle =
    lang === "pl"
      ? "Branding, kampanie, materiały do social mediów i inne realizacje."
      : "Branding, campaigns, social assets and more.";

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-4 text-center text-4xl font-semibold text-slate-900">
        {heading}
      </h1>

      <p className="mb-10 text-center text-slate-600">{subtitle}</p>

      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {TAGS.map((tagId) => {
          const isActive = activeTag === tagId;

          return (
            <button
              key={tagId}
              type="button"
              onClick={() => setActiveTag(tagId)}
              className={`rounded-xl border px-5 py-2 transition ${
                isActive
                  ? "border-black/20 bg-black text-white"
                  : "border-black/10 bg-white text-slate-700 hover:border-black/20"
              }`}
            >
              {TAG_LABELS[tagId][lang]}
            </button>
          );
        })}
      </div>

      <div ref={gridRef} className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectPreviewModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}