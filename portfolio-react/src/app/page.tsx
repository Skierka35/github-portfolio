import NightSky from './components/nightSky';
import Introduce from './components/introduce';
import ContactPage from './components/contact';
import ProjectsSection from "./components/presentGallery";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center text-white">
      <section>
        <NightSky />
        <ProjectsSection />
      </section>

      <section className="py-20">
      <Introduce />
      </section>

      <section className="relative justify-center flex flex-col">
        <NightSky />
        <h1 className="py-20 text-4xl font-bold mb-10"> 
          Skontaktuj się ze mną
        </h1>
        <ContactPage />
      </section>
    </main>
  );
}