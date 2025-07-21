import Gallery from '../components/projectGallery'
import NightSky from '../components/nightSky'

export default function projectsPage() {
  return (
    <section className=" relative h-screen p-6 text-white">
      <NightSky />
      <h1 className="text-2xl font-bold mb-4">Projekty</h1>
      <Gallery />
    </section>
  );
}