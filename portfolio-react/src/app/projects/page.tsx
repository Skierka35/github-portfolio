import dynamic from "next/dynamic";

const ProjectsClient = dynamic(() => import("../components/projectsClient"), {
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading…</div>,
});

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen p-6">
      <ProjectsClient />
    </section>
  );
}