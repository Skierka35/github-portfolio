'use client';

import Image from 'next/image';
import NightSky from '../components/nightSky';

const skills = [
  { name: 'React', level: 70 },
  { name: 'Next.js', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'Tailwind CSS', level: 90 },

];

const languages = [
  { name: 'Angielski', level: 75 },
  { name: 'Niemiecki', level: 30 },
];

const inventory = ['Prawojazdy kat. B','Tytuł inżyniera', 'Programowanie C#', 'Pakiet Adobe', 'Pakiet Microsoft', 'Modelowanie Blender',];

export default function RPGSkillsPanel() {
  return (
    <section>
      <NightSky />
    <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-3xl mx-auto p-6 border-4 border-purple-500 font-mono">
      <div className="flex items-center mb-6">
        <div className="w-32 h-64 mr-4">
          <Image
            src="/avatar.png"
            alt="Postać gracza"
            width={200}
            height={200}
            className="rounded pixelated"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Julia Koszczoł</h2>
          <h3 className="text-3x1"> Front End designer</h3>
          <p>Level: 23</p>
          <p>HP: <span className="text-green-400">████████</span> 1000/1000</p>
          <p>XP: <span className="text-blue-400">████████</span> 365/3242</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl mb-2">Postępy w trakcie</h3>
        <div className="space-y-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full">
                <div
                  className="h-3 bg-green-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
          
        <div className="mb-6">
                <h3 className="text-xl mb-2">Dodatkowe informacje</h3>
                <div className="space-y-2">
                  {languages.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-3 rounded-full">
                        <div
                          className="h-3 bg-green-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

      {/* Sekcja ekwipunku */}
      <div>
        <h3 className="text-xl mb-2">Osiągnięcia</h3>
        <div className="flex space-x-4">
          {inventory.map((item, i) => (
            <div key={i} className="bg-gray-800 p-2 rounded border border-gray-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
