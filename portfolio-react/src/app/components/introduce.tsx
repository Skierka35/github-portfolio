'use client';
import { useEffect, useRef, useState } from 'react';
import ImageOnScroll from '../components/imageAnimation';

export default function Introduce() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const paragraphs = [
  'Jestem absolwentką wyższej szkoły informatycznej ze specjalizacją w grafice reklamowej. Obecnie koncentruję się na rozwoju moich umiejętności designu, łącząc wiedzę techniczną z estetyką i dbałością o doświadczenie użytkownika.',
  'Jestem osobą kreatywną, empatyczną i otwartą na nowe doświadczenia. Lubię działać, stawiać sobie cele i konsekwentnie je realizować. Wyzwania lub porażki traktuję jako okazję do nauki i rozwoju.',
  'Interesuję się rysunkiem klasycznym i digitalowym. Chętnie gotuję dla siebie i bliskich, interesuje mnie temat zdrowego odżywiania. W wolnych chwilach czytam książki fantasy oraz gram w gry komputerowe — jeżeli chodzi o gry chętnie zagram w większość tytułów i gatunków.',
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
      className={`flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto p-8 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
    <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl text-gray-200 font-bold mb-6">O mnie</h2>
    {paragraphs.map((text, idx) => (
      <p
        key={idx}
        className={`indent-8 text-justify ${idx !== 0 ? 'mt-4' : ''}`}
      >
        {text}
      </p>
    ))}
    </div>
      <div className="md:w-1/2 flex justify-center">
        <ImageOnScroll />
      </div>
    </section>
  );
}