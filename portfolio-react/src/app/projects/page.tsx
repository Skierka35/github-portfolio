import { Suspense } from "react";
import ProjectsShell from "../components/projectsShell";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen p-6">
      <Suspense fallback={<div className="py-20 text-center">Loading…</div>}>
        <ProjectsShell />
      </Suspense>
    </section>
  );
}