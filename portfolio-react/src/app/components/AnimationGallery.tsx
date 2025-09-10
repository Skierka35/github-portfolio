'use client';
import Link from "next/link";

const projects = [
  {
    title: "Napoje Fluo",
    description: "Spot reklamujący nowe smaki napoju Fluo.",
    video: "/fluoMP4.mp4",
    link: "https://www.canva.com/design/DAGx7mdE0gU/jpoGibq0YsloKK1rhtHnpQ/edit?utm_content=DAGx7mdE0gU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title: "ScaryMobvieNight",
    description: "Wideo trwające do 8 sekund reklamujące wydarzenie w teatrze.",
    video: "/ScaryMovieNight.mp4",
    link: "https://www.canva.com/design/DAFaaitDYig/wmAMx_VJmlf8AzP095q20g/edit?utm_content=DAFaaitDYig&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

type Project = {
  title: string;
  description: string;
  image?: string;
  video?: string;
  link: string;
};

function ProjectCard({ title, description, image, video, link }: Project) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl transition-all overflow-hidden">
      {video ? (
        <video
          src={video}
          controls
          className="w-full h-64 object-cover"
        />
      ) : image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
      ) : null}

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
    <section className="py-15 px-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-20">Animowane projekty reklamowe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
