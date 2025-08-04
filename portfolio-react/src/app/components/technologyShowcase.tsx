"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";
import {
  FaRandom,
  FaMobileAlt,
  FaCodeBranch,
  FaLink,
  FaCode,
} from "react-icons/fa";

type TechnologyItem = {
  name: string;
  icon: JSX.Element;
};

const cardClass =
  "border shadow-md rounded-xl p-6 text-center transition-all duration-300";
const gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5";

const tools: TechnologyItem[] = [
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
  { name: "React", icon: <SiReact className="text-4xl text-sky-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
  { name: "Vercel (deploy)", icon: <SiVercel className="text-4xl" /> },
];

const mechanisms: TechnologyItem[] = [
  { name: "Routing dynamiczny", icon: <FaRandom className="text-4xl text-purple-600" /> },
  { name: "Responsywność", icon: <FaMobileAlt className="text-4xl text-green-500" /> },
  { name: "Zarządzanie stanem (useState)", icon: <FaCodeBranch className="text-4xl text-orange-400" /> },
  { name: "Interaktywne komponenty", icon: <FaCode className="text-4xl text-gray-300" /> },
  { name: "Linkowanie między podstronami", icon: <FaLink className="text-4xl text-indigo-500" /> },
];

function AnimatedCard({ name, icon }: TechnologyItem) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cardClass}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <p className="text-lg font-medium">{name}</p>
    </motion.div>
  );
}

function TechnologyGrid({
  title,
  items,
}: {
  title: string;
  items: TechnologyItem[];
}) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className={gridClass}>
        {items.map((item, index) => (
          <AnimatedCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function TechnologyShowcase() {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Technologie i funkcjonalności
      </h2>

      <TechnologyGrid title="Narzędzia programistyczne" items={tools} />
      <TechnologyGrid title="Zastosowane mechanizmy" items={mechanisms} />
    </section>
  );
}
