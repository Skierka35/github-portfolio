'use client';

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Projekty Graficzne",
    description:
      "Twory reklamowe wykonane przy użyciu programów graficznych takich jak: Figma, Adobe, Canva.",
    image: "/ChattieLoginPage.jpg",
    link: "https://portfolio-preview-skierka.netlify.app/projects",
  },
  {
    title: "Budgeting App",
    description:
      "Aplikacja służąca do monitorowania wydatków. Projekt grupowy zawierający obsługę bazy danych.",
    image: "/budgetingApp.jpg",
    link: "https://portfolio-preview-skierka.netlify.app/projects/budgetingApp",
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
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between h-52">
        <div>
          <h3 className="text-xl text-emerald-500 font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
        <Link
          href={link}
          target="_blank"
          className="mt-4 text-center bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-md transition"
        >
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 text-white relative z-10">
      <h2 className="text-4xl font-bold text-center text-purple-500 mb-30 drop-shadow-lg">
        Moje Projekty
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
