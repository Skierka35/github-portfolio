'use client';

interface project {
  id: number;
  title: string;
  description: string;
}

const projects: project[] = [
  {
    id: 1,
    title: 'Projekty Figma',
    description: 'Front-end wykonany za pomocą programu Figma',
  },
  {
    id: 2,
    title: 'Stare portfolio wykonane na stronie Wix.com',
    description: 'Projekt pierwszego portfolio wykonanego przy pomocy strony internetowej wix.com',
  },
  {
    id: 3,
    title: 'Odnawialne źródła',
    description: 'Projekt pierwszego portfolio wykonanego przy pomocy strony internetowej wix.com',
  },
  {
    id:4,
    title: "Wizualizacja wykonana",
    description: 'Wizualizacja strony internetowej świadczącej usługi wykonana w figmie',
  },
  {
    id:5,
    title: "Oprogramowanie",
    description: 'Wizualizacja strony internetowej świadczącej usługi wykonana w figmie',
  },
];

export default function Gallery() {
    return(
        <section className="P-8, mx-auto">
        <h2 className="text-3x1 font-bold mb-6"> Moje projekty</h2>
        <p>Tu znajdziesz moje ostatnie projekty. Portfolio będzie aktualizowane na bieżąco!</p>
         {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 m-5 transition-transform duration-300"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
        </section>
  );
}