"use client";

import Image from "next/image";
import { FaLinkedin, FaFacebookSquare, FaArtstation, FaGithub } from "react-icons/fa";
import { useLang } from "../components/languageProvider";

const profile = {
  name: "Julia Koszczoł",
  titlePl: "Marketing / Branding Designer",
  titleEn: "Marketing / Branding Designer",
  avatar: "/profile.png",
  cvLink:
    "https://www.canva.com/design/DAHAL5uNy6o/ww3Tvz56rwAgutYcS69E0Q/edit?utm_content=DAHAL5uNy6o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  socials: [
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/julia-koszczo%C5%82-199516226/" },
    { icon: FaFacebookSquare, link: "https://www.facebook.com/profile.php?id=100004515671116" },
    { icon: FaArtstation, link: "https://www.artstation.com/skierka" },
    { icon: FaGithub, link: "https://github.com/Skierka35" },
  ],
};

const TEXT = {
  pl: {
    pageTitle: "Umiejętności",
    cv: "Podgląd CV",
    overview: "Profil",
    workflow: "Proces współpracy",
    deliverables: "Co mogę dostarczyć",
    tools: "Narzędzia",
    languages: "Języki",
    summary: [
      "Branding i identyfikacje wizualne: logo, podstawy systemu, mini-guideline",
      "Grafika marketingowa: kampanie, KV, social media packi, banery, layouty",
      "Pliki gotowe do publikacji: formaty, eksporty, poprawna hierarchia i typografia",
    ],
    deliverablesList: [
      "Key visual (KV) + layouty kampanii",
      "Logo + podstawy identyfikacji (kolor, typografia, zasady)",
      "Social media pack (posty, stories, cover, ads)",
      "Banery i materiały digital (np. landing visuals)",
      "DTP / materiały do druku (jeśli potrzebne): ulotka, plakat, roll-up",
      "Mockupy + prezentacja projektu",
    ],
    toolsList: ["Adobe (PS/AI/ID)", "Figma", "Canva (szybkie wersje)", "Blender (mockupy / podglądy)"],
    highlightsTitle: "Mocne strony",
    highlights: [
      "Kompozycja, typografia i hierarchia informacji",
      "Spójność systemu (kolor, siatka, brand tone)",
      "Przygotowanie plików pod formaty i publikację",
    ],
    workflowSteps: [
      { t: "1. Brief", d: "Zakres, cel, formaty, referencje, deadline." },
      { t: "2. Kierunek", d: "Moodboard / propozycja stylu i układu." },
      { t: "3. Iteracje", d: "Poprawki w uzgodnionej liczbie rund." },
      { t: "4. Final", d: "Eksporty, wersje formatów i komplet plików." },
    ],
    langs: [
      { name: "Polski (ojczysty)", level: "C2" },
      { name: "Angielski", level: "B2" },
      { name: "Niemiecki", level: "A2" },
    ],
  },
  en: {
    pageTitle: "Skills",
    cv: "View CV",
    overview: "Profile",
    workflow: "Workflow",
    deliverables: "What I can deliver",
    tools: "Tools",
    languages: "Languages",
    summary: [
      "Branding and visual identity: logo, basic system, mini guidelines",
      "Marketing design: campaigns, key visuals, social packs, banners, layouts",
      "Publication-ready files: formats, exports, clean hierarchy and typography",
    ],
    deliverablesList: [
      "Key visuals (KV) + campaign layouts",
      "Logo + basic identity system (color, type, rules)",
      "Social media pack (posts, stories, cover, ads)",
      "Digital assets (banners, landing visuals)",
      "Print/DTP (if needed): flyer, poster, roll-up",
      "Mockups + project presentation",
    ],
    toolsList: ["Adobe (PS/AI/ID)", "Figma", "Canva (fast iterations)", "Blender (mockups / previews)"],
    highlightsTitle: "Highlights",
    highlights: [
      "Composition, typography and information hierarchy",
      "System consistency (color, grid, brand tone)",
      "Export and production-ready formats",
    ],
    workflowSteps: [
      { t: "1. Brief", d: "Scope, goal, formats, references, deadline." },
      { t: "2. Direction", d: "Moodboard / style and layout proposal." },
      { t: "3. Iterations", d: "Revisions within an agreed number of rounds." },
      { t: "4. Final", d: "Exports, format variations and file delivery." },
    ],
    langs: [
      { name: "Polish (native)", level: "C2" },
      { name: "English", level: "B2" },
      { name: "German", level: "A2" },
    ],
  },
} as const;

export default function SkillsPage() {
  const { lang } = useLang();
  const t = TEXT[lang];

  const title = lang === "en" ? profile.titleEn : profile.titlePl;

  return (
    <section className="min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-center mb-12 text-slate-900 dark:text-slate-100">
          {t.pageTitle}
        </h1>

        <div
          className="
            grid grid-cols-1 lg:grid-cols-3 gap-10
            rounded-2xl border border-black/10 bg-white p-6
            dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl
          "
        >
          {/* LEFT */}
          <aside className="lg:col-span-1 flex flex-col items-center text-center gap-6 p-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {profile.name}
              </h2>
              <p className="mt-1 text-slate-600 dark:text-white/70">{title}</p>
            </div>

            <Image
              className="rounded-full border border-black/10 dark:border-white/10 shadow-lg"
              src={profile.avatar}
              alt="Avatar"
              width={180}
              height={180}
              priority
            />

            <div className="flex gap-4 text-2xl">
              {profile.socials.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition"
                  aria-label="social link"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <a
              href={profile.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full max-w-xs mt-2 text-center
                px-5 py-3 rounded-lg transition font-medium
                bg-black text-white hover:bg-black/90
                dark:bg-white dark:text-black dark:hover:bg-white/90
              "
            >
              {t.cv}
            </a>
          </aside>

          {/* RIGHT */}
          <main className="lg:col-span-2 p-4 space-y-10">
            <Section title={t.overview}>
              <ul className="space-y-2 text-slate-700 dark:text-white/80">
                {t.summary.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>

              <div className="mt-5">
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  {t.highlightsTitle}
                </div>
                <ul className="space-y-1 text-slate-700 dark:text-white/80">
                  {t.highlights.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            </Section>

            <Section title={t.deliverables}>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.deliverablesList.map((x) => (
                  <li
                    key={x}
                    className="
                      rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-slate-800
                      dark:border-white/10 dark:bg-white/10 dark:text-white/80
                    "
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={t.workflow}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.workflowSteps.map((s) => (
                  <div
                    key={s.t}
                    className="
                      rounded-xl border border-black/10 bg-white px-4 py-3
                      dark:border-white/10 dark:bg-white/5
                    "
                  >
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {s.t}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
                      {s.d}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={t.tools}>
              <div className="flex flex-wrap gap-2">
                {t.toolsList.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 rounded-lg text-sm border
                      border-black/10 bg-black/5 text-slate-800
                      dark:border-white/10 dark:bg-white/10 dark:text-white/80
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Section>

            <Section title={t.languages}>
              <div className="flex flex-wrap gap-2">
                {t.langs.map((l) => (
                  <span
                    key={l.name}
                    className="
                      px-3 py-1 rounded-lg text-sm border
                      border-black/10 bg-white text-slate-800
                      dark:border-white/10 dark:bg-white/5 dark:text-white/80
                    "
                  >
                    {l.name} • {l.level}
                  </span>
                ))}
              </div>
            </Section>
          </main>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      {children}
    </section>
  );
}