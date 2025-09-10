import ProjectsSectionF from '../components/FigmaGallery'
import ProjectsSectionA from '../components/AnimationGallery'
import NightSky from '../components/nightSky'

export default function projectsPage() {
  return (
    <section className=" relative h-screen p-6 text-white">
      <NightSky />
      <ProjectsSectionA />
      <ProjectsSectionF />
    </section>
  );
}