'use client';
import { useEffect, useRef, useState } from 'react';
import ImageOnScroll from '../components/imageAnimation';

export default function Introduce() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        <h2 className="text-3xl text-gray-200 font-bold mb-4">O mnie</h2>
        <p className="text-gray-200">
          Jestem absolwentką wyższej szkoły informatycznej. Specjalizuję się w grafice reklamowej. Planuję rozwój w kierunku front-end.
          W wolnym czasie rozwijam swoje umiejętności programistyczne oraz poświęcam czas na moje pasje. Uważam siebie za osobę
          empatyczną, kreatywną, chętną do działania i skrupulatnie trzymającą się założonych celi.
        </p>
        <p className="text-gray-200 py-5">
          Interesuję się rysunkiem klasycznym i digitalowym. Lubię gotować, czytać książki fantasy i grać w gry komputerowe.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <ImageOnScroll />
      </div>
    </section>
  );
}