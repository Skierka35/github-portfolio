'use client';

import { useEffect, useRef, useState } from 'react';
import ImageOnScroll from '../components/imageAnimation';

export default function Introduce() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    {
      title: 'Co robię:',
      text: 'Jestem absolwentką wyższej szkoły informatycznej ze specjalizacją w grafice komputerowej. Obecnie koncentruję się na rozwoju moich umiejętności designu, łącząc wiedzę techniczną z estetyką i dbałością o doświadczenie użytkownika.',
    },
    {
      title: 'Kim jestem:',
      text: 'Jestem osobą kreatywną, empatyczną, otwartą na nowe doświadczenia. Lubię działać, stawiać sobie cele i konsekwentnie je realizować. Wyzwania lub porażki traktuję jako okazję do nauki oraz rozwoju.',
    },
    {
      title: 'Zainteresowania:',
      text: 'Interesuję się rysunkiem klasycznym i digitalowym. Chętnie gotuję dla siebie oraz bliskich, interesuje mnie temat zdrowego odżywiania. W wolnych chwilach czytam książki fantasy oraz gram w gry komputerowe.',
    },
  ];

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
      className={`max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-center gap-14 
      transition-all duration-1000 ease-in-out 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 w-full flex flex-col md:flex-row items-center gap-14">

        <div className="md:w-2/3 text-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-purple-500 drop-shadow-md">
            O mnie
          </h2>

          <div className="space-y-5">
            {sections.map((sec, idx) => (
              <div key={idx}>
                <h3 className="text-lg text-emerald-300 font-semibold mb-2">{sec.title}</h3>
                <p className="text-gray-200/90 leading-relaxed text-justify tracking-wide mb-6">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <div className="relative group flex justify-center items-center">
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl opacity-50 transition-opacity rounded-2xl"></div>
            <div className="overflow-hidden rounded-2xl shadow-lg transform group-hover:scale-[1.03] transition-transform duration-500">
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
