"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  embed?: string;
  link?: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "Budgeting App",
    description:
      "Projekt zespołowy: aplikacja do śledzenia wydatków i rozliczeń grupowych. Odpowiadałam za planowanie funkcjonalności oraz frontend.",
    image: "/budgetingApp.JPG",
    link: "https://budgeting-pi.vercel.app/demo",
    tags: ["UI/UX"],
  },
  {
    id: 2,
    title: "Paws&Claws",
    description:
      "Projekt UX/UI wykonany w Figmie, prezentujący przyjazny interfejs strony usługowej dla właścicieli zwierząt.",
    image: "/paws&claws.png",
    tags: ["UI/UX"],
  },
  {
    id: 3,
    title: "Wielkanocna łąka",
    description:
      "Ilustracja fantasy wykonana digitalowo. Bajkowy klimat, gra światłem i żywymi kolorami.",
    image: "/Forest.png",
    tags: ["Ilustracje"],
  },
  {
    id: 4,
    title: "Napoje Fluo",
    description:
      "Spot reklamowy wykonany w Canvie — projekt etykiety i animacja promująca nowy smak napoju.",
    video: "/fluoMP4.mp4",
    tags: ["Projekty Graficzne/design"],
  },
  {
    id: 5,
    title: "Scary Movie Night",
    description:
      "Krótka reklama wydarzenia kulturalnego — dynamiczna animacja wykonana w Canvie.",
    video: "/ScaryMovieNight.mp4",
    tags: ["Projekty Graficzne/design"],
  },
  {
    id: 6,
    title: "Food Swamp",
    description:
      "Kolaż wykonany w Photoshopie — zabawna kompozycja inspirowana jedzeniem i zwierzętami.",
    image: "/FoodSwamp.png",
    tags: ["Ilustracje"],
  },
  {
    id: 7,
    title: "Mushroom Village",
    description:
      "Digitalowa ilustracja fantasy przedstawiająca spokojną wioskę wśród trawy.",
    image: "/MushroomVillage.png",
    tags: ["Ilustracje"],
  },
  {
    id: 8,
    title: "Sieć Ciepłownicza",
    description:
      "Trzy slajdy Figmy wyjaśniające działanie sieci ciepłowniczej w stylu izometrycznym.",
    image: "/ciepłownictwo.JPG",
    tags: ["Projekty Graficzne/design"],
  },
  {
    id: 9,
    title: "Character Creator",
    description:
      "Kreator postaci 3D w Unity z możliwością eksportu modelu FBX — projekt koncepcyjny.",
    image: "/Modele postaci w blenderze.PNG",
    tags: ["Pozostałe"],
  },
  {
    id: 10,
    title: "Cozy Bedroom",
    description:
      "Izometryczny pokój wyrenderowany w Blenderze — prosta, przytulna scena 3D.",
    image: "/RenderResult.png",
    tags: ["Pozostałe"],
  },
  {
    id: 11,
    title: "TaoTaoTea",
    description:
      "Brand reklamowy marki TaoTao Tea.",
    image: "/mockup1.PNG",
    link: "https://portfolio-preview-skierka.netlify.app/projects/taotao",
    tags: ["Projekty Graficzne/design"],
  },
];

const tags = [
  "Wszystko",
  "UI/UX",
  "Projekty Graficzne/design",
  "Ilustracje",
  "Pozostałe",
];

function ProjectCard({
  title,
  description,
  image,
  video,
  link,
  onClick,
}: Project & { onClick: () => void }) {
  return (
    <div
      className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden cursor-pointer group transition-all"
      onClick={onClick}
    >
      <div className="overflow-hidden h-56">
        {video ? (
          <video
            src={video}
            controls
            className="w-full h-full object-cover group-hover:brightness-110 transition-all"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : null}
      </div>

      <div className="p-5 text-gray-100">
        <h3 className="text-xl font-semibold text-emerald-300 mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm text-justify leading-relaxed mb-4">
          {description}
        </p>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="bg-purple-600/70 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-md inline-block transition"
            onClick={(e) => e.stopPropagation()}
          >
            Zobacz projekt
          </Link>
        ) : (
          <span className="text-gray-400 text-sm italic">
            Kliknij, aby powiększyć
          </span>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState("Wszystko");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeTag === "Wszystko"
      ? allProjects
      : allProjects.filter((project) => project.tags.includes(activeTag));

  return (
    <section className="py-20 px-6 text-white max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 drop-shadow-md">
        Moje Projekty
      </h1>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-5 py-2 rounded-xl border border-white/20 backdrop-blur-md transition-all 
              ${
                activeTag === tag
                  ? "bg-purple-700/70 text-white shadow-lg"
                  : "bg-white/10 text-gray-200 hover:bg-purple-400/20"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.video ? (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                className="w-full h-auto object-cover"
              />
            ) : selectedProject.image ? (
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            ) : null}

            <div className="p-6 text-gray-100">
              <h3 className="text-2xl font-bold text-emerald-300 mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {selectedProject.description}
              </p>
              {selectedProject.link && (
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  className="mt-2 inline-block bg-purple-700/70 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-md transition"
                >
                  Otwórz projekt
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
