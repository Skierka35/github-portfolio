'use client';

import { useEffect, useState } from 'react';

interface Cloud {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  direction: 'left' | 'right';
}

export default function CloudLayer() {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const count = 5;

    function generateCloud(id: number): Cloud {
      return {
        id,
        top: `${Math.random() * 70 + 10}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 250 + 200, // 200-450px
        duration: Math.random() * 40 + 40, // 40-80s
        delay: Math.random() * 10,
        opacity: Math.random() * 0.1 + 0.05, // bardzo subtelne 0.05 - 0.15
        direction: Math.random() > 0.5 ? 'left' : 'right',
      };
    }

    // Generuj chmury na start
    setClouds(Array.from({ length: count }, (_, i) => generateCloud(i)));

    // Opcjonalnie co jakiś czas wymieniaj chmurę na nową losową
    const interval = setInterval(() => {
      setClouds((oldClouds) => {
        const newClouds = oldClouds.slice(1);
        newClouds.push(generateCloud(Date.now()));
        return newClouds;
      });
    }, 30000); // co 30 sekund jedna chmura się wymienia

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`absolute rounded-full bg-white blur-3xl animate-cloud pointer-events-none`}
          style={{
            top: cloud.top,
            left: cloud.left,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            opacity: cloud.opacity,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
            animationDirection: cloud.direction === 'left' ? 'normal' : 'reverse',
          }}
        />
      ))}
    </>
  );
}
