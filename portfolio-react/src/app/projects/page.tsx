import ProjectsSection from '../components/FigmaGallery'
import NightSky from '../components/nightSky'

export default function projectsPage() {
  return (
    <section className=" relative h-screen p-6 text-white">
      <NightSky />
      <ProjectsSection />
    </section>
  );
}