'use client';

import { useEffect, useState } from 'react';
import CloudLayer from './cloudLayer';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  twinkleDuration: number;
}

export default function nightSky() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starCount = 150;
    const newStars: Star[] = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      twinkleDuration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-black via-purple-900 to-indigo-800 overflow-hidden">
      <CloudLayer />
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.twinkleDuration}s`,
          }}
        />
      ))}
    </div>
  );
}
