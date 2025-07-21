'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ImageOnScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAppeared(true);
          observer.disconnect(); // zatrzymuje obserwację po 1 razie
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform flex justify-center items-center
        ${hasAppeared ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <Image
        src="/prof.jpg"
        alt="Moje zdjęcie"
        width={300}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
