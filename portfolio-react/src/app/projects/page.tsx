import Gallery from '../components/projectGallery'

export default function projectsPage() {
  return (
    <section className=" relative h-screen p-6 bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Projekty</h1>
      <Gallery />
    </section>
  );
}