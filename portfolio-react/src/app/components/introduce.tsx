'use client';

import { useEffect, useRef, useState } from 'react';
import ImageOnScroll from '../components/imageAnimation';
import { useLang } from '../components/languageProvider';

export default function Introduce() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLang();

  const content = {
    pl: {
      heading: "O mnie",
      sections: [
        {
          title: "Czym się zajmuję",
          text: "Tworzę projekty graficzne i ilustracje, łącząc estetykę z funkcjonalnością. Realizuję identyfikacje wizualne, materiały reklamowe oraz ilustracje digitalowe - od klimatycznych scen fantasy po projekty o charakterze komercyjnym.",
        },
        {
          title: "Specjalizacja",
          text: "Szczególnie interesuje mnie ilustracja koncepcyjna, character design oraz budowanie nastroju poprzez światło i kolor. W projektach brandingowych skupiam się na spójności wizualnej i klarownej komunikacji marki.",
        },
        {
          title: "Jak pracuję",
          text: "Łączę zaplecze techniczne z wrażliwością wizualną. Dbam o detale, kompozycję i czytelność przekazu. Lubię rozwijać pomysł od szkicu aż do finalnej, dopracowanej formy.",
        },
        {
          title: "Poza projektowaniem",
          text: "W wolnym czasie rozwijam swoje umiejętności rysunkowe, tworzę autorskie ilustracje oraz eksploruję temat concept artu. Inspirują mnie gry, literatura fantasy i wizualny storytelling.",
        },
      ],
    },
    en: {
      heading: "About me",
      sections: [
        {
          title: "What I do",
          text: "I create graphic design projects and digital illustrations, combining aesthetics with functionality. I work on visual identities, marketing materials and digital illustrations - from atmospheric fantasy scenes to commercial visual projects.",
        },
        {
          title: "Specialization",
          text: "I am particularly interested in concept illustration, character design and building mood through light and color. In branding projects, I focus on visual consistency and clear brand communication.",
        },
        {
          title: "How I work",
          text: "I combine technical knowledge with visual sensitivity. I pay attention to detail, composition and clarity of message. I enjoy developing ideas from initial sketches to refined final visuals.",
        },
        {
          title: "Beyond design",
          text: "In my free time, I develop my drawing skills, create personal illustrations and explore concept art. I am inspired by games, fantasy literature and visual storytelling.",
        },
      ],
    },
  } as const;

  const t = content[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full flex flex-col md:flex-row items-center gap-14 
      transition-all duration-1000 ease-in-out 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div
        className="
          w-full flex flex-col md:flex-row items-center gap-14 p-10

          bg-white border-black/10
          dark:bg-white/5 dark:border-white/10
          dark:backdrop-blur-xl
        "
      >
        {/* TEXT */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-8 text-slate-900 dark:text-slate-100">
            {t.heading}
          </h2>

          <div className="space-y-8">
            {t.sections.map((sec, idx) => (
              <div key={idx}>
                <h3 className="text-sm uppercase tracking-wide font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {sec.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-6 bg-indigo-500/10 blur-3xl opacity-0 dark:opacity-60 transition-opacity rounded-2xl" />
            <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-lg">
              <div className="w-auto max-h-[420px]">
                <ImageOnScroll />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
