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
    description: "Projekt stworzony we współpracy zespołowej, podział na frontend i backend. Praca nad projektem była zorganizowana branchami. Aplikacja umożliwia użytkownikom śledzenie wydatków, tworzenie grup użytkowników w celu rozliczania wydatków. W projekcie moim celem było rozplanowanie funkcjonalności strony oraz praca z front'endem.",
    image: "/budgetingApp.JPG",
    link: "https://budgeting-pi.vercel.app/demo",
    tags: ["UI/UX", "Projekty Graficzne/design"],
  },
  {
    id: 2,
    title: "Paws&Claws",
    description: "Projekt wykonany w programie Figma, prezentujący nowoczesny i przyjazny interfejs strony usługowej. Strona umożliwia przeglądanie oferty adopcyjnej zwierząt, informuje o godzinach pracy oraz oferuje usługi opieki nad pupilami. Projekt skupia się na czytelnej prezentacji informacji i intuicyjnej nawigacji dla użytkowników.",
    image: "/paws&claws.png",
    embed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/TXxwp9OUnAyJIxtYDSkZJo",
    tags: ["UI/UX"],
  },
  {
    id: 3,
    title: "Wielkanocna łąka",
    description: "Ilustracja fantasy wykonana digitalowo. Dużą rolę w tej ilustracji gra światło. Kolory są żywe, mające na celu odwzorować bajkowy klimat i wzbudzić pozytywne uczucia kojarzące się ze świętem. Ilustracja wykonana w Clip Studio na konkurs rysunkowy tła do gry.",
    image: "/Forest.png",
    tags: ["Ilustracje"],
  },
  {
    id: 4,
    title: "Napoje Fluo",
    description: "Spot reklamujący nowe smaki napoju owocowego Fluo. Marka, etykiety na napoje i animacja została wykonana za pomocą programu Canva.",
    video: "/fluoMP4.mp4",
    link: "https://www.canva.com/design/DAGx7mdE0gU",
    tags: ["Animacje"],
  },
  {
    id: 5,
    title: "Scary Movie Night",
    description: "Krótka reklama wykonana w programie Canva. Założeniem projektu było utworzenie reklamy kulturowego wydarzenia w okolicy do 8 sekund.",
    video: "/ScaryMovieNight.mp4",
    link: "https://www.canva.com/design/DAFaaitDYig",
    tags: ["Animacje"],
  },
  {
    id: 6,
    title: "Food Swamp",
    description: "Projekt mający na celu 'wykorzystanie zdjęcia' w swoim projekcie. Jest to jaszczurka z nadgryzionej mocchi sezamowej i nietoperze z zupy ramen. Projekt został wykonany w programie Adobe photoshop.",
    image: "/FoodSwamp.png",
    tags: ["Ilustracje", "Projekty Graficzne/design"],
  },
  {
    id: 7,
    title: "Mushroom Village",
    description: "Ilustracja fantasy wykonana digitalowo. Przedstawia wieczór w wiosce między źdźbłami trawy. Ilustracja wykonana w Clip Studio na konkurs rysunkowy tła do gry.",
    image: "/MushroomVillage.png",
    tags: ["Ilustracje"],
  },
  {
    id: 8,
    title: "Sieć Ciepłownicza",
    description: "Trzy slajdy w Figmie ukazujące działanie sieci ciepłowniczej, rolę pomp ciepła oraz podział użytkowników na prosumentów i konsumentów. Ilustracje w rzucie izometrycznym podkreślają efekt 3D.",
    image: "ciepłownictwo.JPG",
    tags: ["Projekty Graficzne"],
    link: "https://www.figma.com/proto/gYuTbdH8RPIO3THTsXDfUs/Ciep%C5%82ownictwo-przysz%C5%82o%C5%9Bci?node-id=5-26&p=f&t=QLfHBYop7nfZu3O9-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2",
  },
  {
    id: 9,
    title: "Character Creator",
    description: "Prosty projekt kreatora postaci 3D w unity. Narzędzie te miało służyć jako kreator postaci z możliwością pobrania zasobów do osobnego projektu Unity za pomocą formatu .FBX. Projekt działa tylko w środowisku Unity.",
    image: "/Modele postaci w blenderze.PNG",
    link: "https://lillalll.itch.io/charactercreator",
    tags: ["UI/UX", "Projekty Graficzne/design"],
  },
];

const tags = ["Wszystko", "UI/UX", "Projekty Graficzne/design", "Ilustracje", "3D", "Animacje"];

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
      className="bg-gray-800 rounded-2xl shadow-2xl transition-all overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {video ? (
        <video src={video} controls className="w-full h-64 object-cover" />
      ) : image ? (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
      ) : null}

      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-justify text-sm mb-4">{description}</p>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-4 py-2 rounded-md inline-block"
            onClick={(e) => e.stopPropagation()}
          >
            Zobacz projekt
          </Link>
        ) : (
          <span className="text-gray-400 text-sm">Kliknij, aby przybliżyć.</span>
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
    <section className="py-20 px-4 text-white max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Moje Projekty</h1>

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-xl border transition ${
              activeTag === tag
                ? "bg-purple-700 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl overflow-hidden max-w-3xl w-full relative"
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

            <div className="p-5 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400">{selectedProject.description}</p>
              {selectedProject.link && (
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  className="mt-4 inline-block bg-purple-700 hover:bg-purple-800 text-white text-sm px-4 py-2 rounded-md"
                >
                  Zobacz projekt
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
