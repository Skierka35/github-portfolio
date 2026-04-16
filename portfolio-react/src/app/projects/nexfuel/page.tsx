"use client";

import Image from "next/image";
import { useLang } from "@/app/components/languageProvider";

export default function MollerspaPage() {
  const { lang } = useLang();

  const TEXT = {
    pl: {
      heroTitle: "Mollerspa",
      heroDesc:
        "Projekt identyfikacji wizualnej i materiałów promocyjnych przygotowany dla marki Mollerspa podczas pracy w firmie Denix. Moim celem było stworzenie spójnej, estetycznej komunikacji, która podkreśla charakter marki oraz jej spokojny, pielęgnacyjny i profesjonalny wizerunek. W projekcie skupiłam się na czytelności, harmonijnej kolorystyce oraz atrakcyjnej prezentacji produktów i materiałów reklamowych.",
      contextTitle: "Kontekst projektu",
      contextDesc:
        "Projekt zrealizowany w ramach pracy zawodowej w firmie Denix. W portfolio został zaprezentowany za zgodą na wykorzystanie materiałów.",
      palette: "Kolorystyka",
      paletteDesc:
        "Delikatne, eleganckie odcienie budujące wrażenie świeżości, spokoju i estetyki premium.",
      typography: "Typografia",
      typographyDesc:
        "Czytelne i nowoczesne kroje pisma wspierające profesjonalny, subtelny charakter marki.",
      showcase: "Prezentacja projektu",
      materials: "Materiały projektowe",
      footerNote:
        "Projekt wykonany podczas pracy w firmie Denix. Materiały użyte w portfolio za zgodą.",
    },
    en: {
      heroTitle: "Mollerspa",
      heroDesc:
        "A visual identity and promotional materials project created for the Mollerspa brand during my work at Denix. The goal was to build a consistent and aesthetically pleasing communication style that reflects the calm, professional, and care-focused character of the brand. The project focused on clarity, harmonious color choices, and an attractive presentation of products and promotional assets.",
      contextTitle: "Project Context",
      contextDesc:
        "This project was created as part of my professional work at Denix. It is presented in this portfolio with permission to use the materials.",
      palette: "Color Palette",
      paletteDesc:
        "Soft and elegant tones designed to evoke freshness, calmness, and a premium aesthetic.",
      typography: "Typography",
      typographyDesc:
        "Clean and modern typefaces supporting the professional and subtle tone of the brand.",
      showcase: "Project Showcase",
      materials: "Design Materials",
      footerNote:
        "Project created during my employment at Denix. Materials used in this portfolio with permission.",
    },
  };

  const t = TEXT[lang];

  const materials = [
    {
      title: lang === "pl" ? "Materiał promocyjny 01" : "Promotional Material 01",
      desc:
        lang === "pl"
          ? "Przykład materiału promocyjnego przygotowanego z myślą o spójnej komunikacji wizualnej marki."
          : "An example of promotional material designed to maintain a consistent brand communication style.",
      img: "/mollerspa-1.png",
    },
    {
      title: lang === "pl" ? "Materiał promocyjny 02" : "Promotional Material 02",
      desc:
        lang === "pl"
          ? "Projekt wykorzystujący estetykę marki w materiałach reklamowych i prezentacyjnych."
          : "A design applying the brand’s visual identity to advertising and presentation materials.",
      img: "/mollerspa-2.png",
    },
    {
      title: lang === "pl" ? "Materiał promocyjny 03" : "Promotional Material 03",
      desc:
        lang === "pl"
          ? "Kolejny przykład kompozycji wizualnej dopasowanej do charakteru marki."
          : "Another example of visual composition tailored to the character of the brand.",
      img: "/mollerspa-3.png",
    },
  ];

  return (
    <div
      className="
        min-h-screen transition-colors duration-300
        bg-[#fcfaf7] text-[#2f2a26]
        dark:bg-[#141414] dark:text-[#ece7df]
      "
    >
      {/* HERO */}
      <main
        className="
          py-10 px-4 sm:px-6 text-center
          bg-gradient-to-b from-[#f4ede6] to-[#fcfaf7]
          dark:from-[#1b1b1b] dark:to-[#141414]
        "
      >
        <Image
          src="/mollerspa-moodboard.png"
          alt="Mollerspa moodboard"
          width={1000}
          height={900}
          priority
          className="
            mx-auto mb-8
            w-full max-w-[900px]
            h-auto
            rounded-2xl
          "
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {t.heroTitle}
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed p-4 sm:p-6 text-justify text-[#5f564d] dark:text-[#c8c0b7]">
          {t.heroDesc}
        </p>
      </main>

      {/* PROJECT CONTEXT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-[#f5efe8] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-sm border border-[#e5dbcf] dark:border-white/10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            {t.contextTitle}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#5f564d] dark:text-[#c8c0b7]">
            {t.contextDesc}
          </p>
        </div>
      </section>

      {/* PALETTE & TYPOGRAPHY */}
      <section className="max-w-5xl mx-auto py-10 sm:py-14 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          <div className="bg-[#f5efe8] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-sm border border-[#e5dbcf] dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              {t.palette}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#5f564d] dark:text-[#c8c0b7]">
              {t.paletteDesc}
            </p>
          </div>

          <div className="bg-[#f5efe8] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-sm border border-[#e5dbcf] dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              {t.typography}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#5f564d] dark:text-[#c8c0b7]">
              {t.typographyDesc}
            </p>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          {t.materials}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {materials.map((item) => (
            <div
              key={item.title}
              className="bg-[#f5efe8] dark:bg-[#1f1f1f] rounded-2xl p-5 sm:p-6 shadow-md border border-[#e5dbcf] dark:border-white/10 hover:scale-[1.02] transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={320}
                height={380}
                className="mx-auto mb-4 object-contain rounded-xl"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-center text-[#5f564d] dark:text-[#c8c0b7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          {t.showcase}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {["/mollerspa-mockup1.png", "/mollerspa-mockup2.png", "/mollerspa-mockup3.png"].map(
            (mock, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-md border border-[#e5dbcf] dark:border-white/10 hover:shadow-lg transition"
              >
                <Image
                  src={mock}
                  alt={`Mollerspa mockup ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f4ede6] dark:bg-[#1b1b1b] border-t border-[#e5dbcf] dark:border-white/10 py-12 text-center px-4">
        <p className="text-sm sm:text-base text-[#5f564d] dark:text-[#c8c0b7]">
          {t.footerNote}
        </p>
      </footer>
    </div>
  );
}