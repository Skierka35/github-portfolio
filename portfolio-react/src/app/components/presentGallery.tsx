'use client';
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "ChattieGames App",
    description: "Projekt strony gry towarzyskiej.",
    image: "/chattieGamesApp.png",
    link: "https://portfolio-preview-skierka.netlify.app/projects/chattieGamesApp",
  },
  {
    title: "Budgeting App",
    description: "Aplikacja służąca do monitorowania wydatków. Projekt grupowy.",
    image: "/budgetingapp.png",
    link: "https://portfolio-preview-skierka.netlify.app/projects/budgetingApp",
  },
  {
    title: "Projekt portfolio",
    description: "Projekt aktualnej strony z udostępnionym portfolio na platformie nestify",
    image: "/portfoliosite.png",
    link: "https://portfolio-preview-skierka.netlify.app/projects/portfolioInfo",
  },
];

function ProjectCard({ title, description, image, link }: typeof projects[0]) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
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

export default function ProjectsSection() {
  return (
    <section className="py-30 px-4 text-white">
      <h2 className="text-4xl font-bold text-center mb-30">Moje Projekty</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
