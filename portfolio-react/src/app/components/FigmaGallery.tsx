'use client';
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Paws&Claws",
    description: "Projekt wizualny strony świadczącej usługi.",
    image: "/paws&claws.png",
    link: "https://www.figma.com/proto/TXxwp9OUnAyJIxtYDSkZJo/Paws-Claws?node-id=0-1&t=U0XOsMiAWSSCYPA9-1",
  },
  {
    title: "Tableheroes",
    description: "Projekt wizualny strony internetowej o tematyce DND.",
    image: "/tableheroes.png",
    link: "https://www.figma.com/proto/u01N1L3IRgpiMZWiRGEQta/Untitled?t=U0XOsMiAWSSCYPA9-1",
  },
  {
    title: "Ciepłownictwo przyszłości",
    description: "Projekt prezentujący działanie źródeł odnawialnych",
    image: "/ciepłownictwo.jpg",
    link: "https://www.figma.com/proto/gYuTbdH8RPIO3THTsXDfUs/Ciep%C5%82ownictwo-przysz%C5%82o%C5%9Bci?node-id=1-2&t=U0XOsMiAWSSCYPA9-1",
  },
];

function ProjectCard({ title, description, image, link }: typeof projects[0]) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl transition-all">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-4 py-2 rounded-md inline-block"
        >
          Zobacz projekt
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsSectionF() {
  return (
    <section className="py-30 px-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Projekty figma</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
