'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ImageOnScroll() {
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
    <div
      ref={ref}
      className={`flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
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
