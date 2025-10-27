'use client';

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Projekt reklamowy marki TaoTao",
    description:
      "Projekt identyfikacji marki herbat importowanych prosto z Chin. Marka stawia na ekologiczne wartości, domowy klimat i znalezienia chwili relaksu w ciągu dnia. Identyfikacja wizualna ma oddawać naturalność, spokój i harmonię, które towarzyszą każdej filiżance herbaty.",
    image: "/mockup1.PNG",
    link: "https://portfolio-preview-skierka.netlify.app/projects/taotao",
  },
  {
    title: "Projekt reklamowy marki Fluo",
    description:
      "Kampania wizualna napojów pełnych energii, owocowego smaku i żywych kolorów. Projekt podkreśla imprezowy, dynamiczny charakter marki, przyciąga wzrok i wzmacnia poczucie świeżości oraz owocowej intensywności w każdym łyku.",
    image: "/FluoMark.PNG",
    link: "https://portfolio-preview-skierka.netlify.app/projects/fluo",
  },
  {
    title: "Projekt portfolio",
    description:
      "Projekt aktualnej strony z udostępnionym portfolio wykonany za pomocą next.js i hostingu Netlify.",
    image: "/portfolio-react.jpg",
    link: "https://portfolio-preview-skierka.netlify.app/projects/portfolio-react",
  },
];

function ProjectCard({ title, description, image, link }: typeof projects[0]) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Obraz z ustaloną wysokością */}
      <div className="w-full h-48 md:h-56 lg:h-64 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Treść */}
      <div className="p-5 flex flex-col flex-1 justify-between text-justify">
        <div>
          <h3 className="text-xl text-emerald-500 font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
        <Link
          href={link}
          target="_blank"
          className="mt-4 text-center bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-md transition"
        >
          Zobacz więcej
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 text-white relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
        Moje Projekty
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
