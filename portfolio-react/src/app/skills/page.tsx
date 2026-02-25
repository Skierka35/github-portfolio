"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaLinkedin, FaFacebookSquare, FaArtstation, FaGithub } from "react-icons/fa";
import { useLang } from "../components/languageProvider";

type Track = "branding" | "illustration";

const profile = {
  name: "Julia Koszczoł",
  titlePl: "Graphic designer ",
  titleEn: "Graphic designer ",
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
    trackBranding: "Branding / reklama",
    trackIllustration: "Ilustracja / concept art",
    overview: "Czym się zajmuję",
    workflow: "Proces współpracy",
    deliverables: "Co mogę dostarczyć",
    tools: "Narzędzia",
    languages: "Języki",
    facts: {
      a: "Branding, kampanie, key visuale, social packi",
      b: "Ilustracje digitalowe, concept art, postacie i rekwizyty",
      c: "Pliki gotowe do publikacji + mockupy + eksporty",
    },
    workflowSteps: [
      { t: "1. Brief", d: "Zakres, formaty, referencje i deadline." },
      { t: "2. Kierunek", d: "Moodboard / szkice / propozycja stylu." },
      { t: "3. Iteracje", d: "Poprawki w uzgodnionej liczbie rund." },
      { t: "4. Final", d: "Eksporty, wersje formatów i przygotowanie do publikacji." },
    ],
    langs: [
      { name: "Polski (ojczysty)", level: "C2" },
      { name: "Angielski (B2)", level: "B2" },
      { name: "Niemiecki (A2)", level: "A2" },
    ],
  },
  en: {
    pageTitle: "Skills",
    cv: "View CV",
    trackBranding: "Branding / advertising",
    trackIllustration: "Illustration / concept art",
    overview: "Overview",
    workflow: "Workflow",
    deliverables: "What I can deliver",
    tools: "Tools",
    languages: "Languages",
    facts: {
      a: "Brand identity, campaigns, key visuals, social packs",
      b: "Digital illustration, concept art, characters and props",
      c: "Publication-ready files + mockups + exports",
    },
    workflowSteps: [
      { t: "1. Brief", d: "Scope, formats, references and deadline." },
      { t: "2. Direction", d: "Moodboard / sketches / style proposal." },
      { t: "3. Iterations", d: "Revisions in an agreed number of rounds." },
      { t: "4. Final", d: "Exports, format versions and delivery." },
    ],
    langs: [
      { name: "Polish (native)", level: "C2" },
      { name: "English (B2)", level: "B2" },
      { name: "German (A2)", level: "A2" },
    ],
  },
} as const;

const TRACKS: Record<
  Track,
  {
    deliverablesPl: string[];
    deliverablesEn: string[];
    toolsPl: string[];
    toolsEn: string[];
    highlightsPl: string[];
    highlightsEn: string[];
  }
> = {
  branding: {
    deliverablesPl: [
      "Key visual (KV) i layouty kampanii",
      "Identyfikacja wizualna (logo + podstawy systemu)",
      "Materiały digital (social, banery, landing visuals)",
      "Mockupy i prezentacja projektu",
    ],
    deliverablesEn: [
      "Key visuals and campaign layouts",
      "Visual identity (logo + basic system)",
      "Digital assets (social, banners, landing visuals)",
      "Mockups and project presentation",
    ],
    toolsPl: ["Adobe (PS/AI/ID)", "Figma", "Canva", "Blender (mockupy)"],
    toolsEn: ["Adobe (PS/AI/ID)", "Figma", "Canva", "Blender (mockups)"],
    highlightsPl: [
      "Kompozycja, typografia, hierarchia informacji",
      "Spójność systemu (kolor/siatka/brand tone)",
      "Przygotowanie do publikacji w formatach",
    ],
    highlightsEn: [
      "Composition, typography, information hierarchy",
      "System consistency (color/grid/brand tone)",
      "Export and production-ready formats",
    ],
  },
  illustration: {
    deliverablesPl: [
      "Ilustracje digital (okładki, sceny, pojedyncze postacie)",
      "Character design: warianty, stroje, detale",
      "Concept art: propsy, elementy świata, mini-briefy",
      "Pliki w wysokiej rozdzielczości + wersje do social",
    ],
    deliverablesEn: [
      "Digital illustrations (covers, scenes, single characters)",
      "Character design: variants, outfits, details",
      "Concept art: props, world elements, mini-briefs",
      "High-res files + social-ready versions",
    ],
    toolsPl: ["Photoshop / Procreate (jeśli używasz)", "Figma (prezentacja)", "Blender (referencje)"],
    toolsEn: ["Photoshop / Procreate (if used)", "Figma (presentation)", "Blender (references)"],
    highlightsPl: [
      "Silhouette & czytelność formy",
      "Światło i wartości (value), czytelny render",
      "Spójność stylu pod brief / uniwersum",
    ],
    highlightsEn: [
      "Silhouette & shape readability",
      "Light and values (value), clean rendering",
      "Style consistency for a brief / universe",
    ],
  },
};

export default function SkillsPage() {
  const { lang } = useLang();
  const t = TEXT[lang];

  const [track, setTrack] = useState<Track>("branding");

  const title = lang === "en" ? profile.titleEn : profile.titlePl;

  const deliverables = useMemo(() => {
    return lang === "en" ? TRACKS[track].deliverablesEn : TRACKS[track].deliverablesPl;
  }, [lang, track]);

  const tools = useMemo(() => {
    return lang === "en" ? TRACKS[track].toolsEn : TRACKS[track].toolsPl;
  }, [lang, track]);

  const highlights = useMemo(() => {
    return lang === "en" ? TRACKS[track].highlightsEn : TRACKS[track].highlightsPl;
  }, [lang, track]);

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

            {/* Segmented control */}
            <div
              className="
                w-full max-w-xs mt-2 grid grid-cols-2 rounded-xl border border-black/10 overflow-hidden
                dark:border-white/10
              "
            >
              <button
                type="button"
                onClick={() => setTrack("branding")}
                className={`
                  px-4 py-3 text-sm font-medium transition
                  ${track === "branding"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white text-slate-700 hover:bg-black/5 dark:bg-transparent dark:text-white/80 dark:hover:bg-white/10"}
                `}
              >
                {t.trackBranding}
              </button>
              <button
                type="button"
                onClick={() => setTrack("illustration")}
                className={`
                  px-4 py-3 text-sm font-medium transition
                  ${track === "illustration"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white text-slate-700 hover:bg-black/5 dark:bg-transparent dark:text-white/80 dark:hover:bg-white/10"}
                `}
              >
                {t.trackIllustration}
              </button>
            </div>
          </aside>

          {/* RIGHT */}
          <main className="lg:col-span-2 p-4 space-y-10">
            <Section title={t.overview}>
              <ul className="space-y-2 text-slate-700 dark:text-white/80">
                <li>• {t.facts.a}</li>
                <li>• {t.facts.b}</li>
                <li>• {t.facts.c}</li>
              </ul>
            </Section>

            <Section title={t.deliverables}>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {deliverables.map((x) => (
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
                {tools.map((item) => (
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

              <div className="mt-4">
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  {lang === "pl" ? "Mocne strony" : "Highlights"}
                </div>
                <ul className="space-y-1 text-slate-700 dark:text-white/80">
                  {highlights.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
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
