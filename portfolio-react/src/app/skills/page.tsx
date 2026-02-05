'use client';

import Image from 'next/image';
import NightSky from '../components/nightSky';
import { FaLinkedin, FaFacebookSquare, FaArtstation, FaGithub } from "react-icons/fa";

const data = {
  name: 'Julia Koszczoł',
  title: 'Graphic Designer',
  avatar: '/profile.png',
  cvLink: 'https://www.canva.com/design/DAHAL5uNy6o/ww3Tvz56rwAgutYcS69E0Q/edit?utm_content=DAHAL5uNy6o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  skills: [
    { name: 'React', level: 55 },
    { name: 'Next.js', level: 30 },
    { name: 'JavaScript', level: 40 },
    { name: 'Tailwind CSS', level: 60 },
    { name: 'Blender', level: 40 },
  ],
  languages: [
    { name: 'Polski - język ojczysty', level: 90 },
    { name: 'Angielski - B2, korzystam codziennie', level: 70 },
    { name: 'Niemiecki - A2, uczę się', level: 35 },
  ],
  inventory: ['Unity', 'język C#', 'Pakiet Adobe', 'Pakiet Microsoft', 'Blender', 'Figma'],
  education: 'WSIZ Bielsko-Biała — Tytuł inżyniera spec. grafika komputerowa',
};

export default function PortfolioCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-sans">
      <NightSky />

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">

        <aside className="md:w-1/3 bg-white/10 p-6 flex flex-col items-center justify-between text-white">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold">{data.name}</h2>
              <p className="text-purple-400 font-semibold">{data.title}</p>
            </div>

            <Image
              className="rounded-full shadow-2xl"
              src={data.avatar}
              alt="Avatar"
              width={190}
              height={190}
            />

            <div className="flex space-x-4 text-2xl">
              {[
                { icon: FaLinkedin, link: 'https://www.linkedin.com/in/julia-koszczo%C5%82-199516226/' },
                { icon: FaFacebookSquare, link: 'https://www.facebook.com/profile.php?id=100004515671116' },
                { icon: FaArtstation, link: 'https://www.artstation.com/skierka' },
                { icon: FaGithub, link: 'https://github.com/Skierka35' },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <a
            href={data.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-x2 shadow-lg text-sm transition"
          >
            Podgląd CV
          </a>
        </aside>

        <main className="md:w-2/3 bg-white/70 text-gray-900 p-6 space-y-8">
          <Section title="Postępy w trakcie">
            {data.skills.map(({ name, level }) => (
              <Progress key={name} label={name} value={level} />
            ))}
          </Section>

          <Section title="Znajomość języków">
            {data.languages.map(({ name, level }) => (
              <Progress key={name} label={name} value={level} />
            ))}
          </Section>

          <Section title="Umiejętności">
            <div className="flex flex-wrap gap-2">
              {data.inventory.map((item, i) => (
                <span key={i} className="bg-purple-100 text-emerald-800 px-3 py-1 rounded-lg text-sm shadow">
                  {item}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Edukacja">
            <p className="bg-purple-100 border border-emerald-300 px-3 py-2 rounded-lg w-fit">
              {data.education}
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-3 text-emerald-700">{title}</h3>
      {children}
    </div>
  );
}

function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-300 h-3 rounded-full">
        <div className="h-3 bg-emerald-500 rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
