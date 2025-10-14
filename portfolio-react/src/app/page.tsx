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
        <h1 className="py-2 text-4xl text-purple-500 font-bold mb-5"> 
          Skontaktuj się ze mną
        </h1>
        <ContactPage />
      </section>
    </main>
  );
}