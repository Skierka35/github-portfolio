import { Suspense } from "react";
import ProjectsClient from "./projectsClient";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen p-6">
      <Suspense fallback={<div className="py-20 text-center">Loading…</div>}>
        <ProjectsClient />
      </Suspense>
    </section>
  );
}