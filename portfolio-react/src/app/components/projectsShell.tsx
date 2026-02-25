"use client";

import dynamic from "next/dynamic";

// dynamic import *w kliencie* = dozwolone
const ProjectGallery = dynamic(() => import("../components/projectGallery"), {
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading…</div>,
});

export default function ProjectsShell() {
  return <ProjectGallery />;
}