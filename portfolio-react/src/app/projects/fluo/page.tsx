"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Typy i dane ---
type Flavor = {
  key: string;
  name: string;
  slogan: string;
  colors: string[];
  img: string;
  description: string;
};

const flavors: Flavor[] = [
  {
    key: "party-blue-berries",
    name: "Party Blue Berries",
    slogan: "Jagodowa eksplozja energii",
    colors: ["#6EC1FF", "#8A6BFF", "#FF6FB1"],
    img: "/party-blue-berries.png",
    description:
      "Intensywnie jagodowy smak z lekką nutą malin i słodkiej energii. Idealny na wieczorne spotkania lub kreatywne poranki.",
  },
  {
    key: "refreshing-cytrus",
    name: "Refreshing Cytrus",
    slogan: "Cytrusowa fala mocy",
    colors: ["#FF9F1C", "#A8E063", "#FFF200", "#AEE7FF"],
    img: "/refreshing-cytrus.png",
    description:
      "Lekki, cytrusowy i rześki smak, który orzeźwia i dodaje energii. Idealny do pracy, nauki i letnich dni.",
  },
  {
    key: "juicy-peaches",
    name: "Juicy Peaches",
    slogan: "Soczysta chwila",
    colors: ["#FFB27A", "#FF7AA2", "#FF9F4D"],
    img: "/juicy-peaches.png",
    description:
      "Słodki i aromatyczny smak brzoskwini, który kojarzy się z wakacjami i spokojem. Idealny na chwilę relaksu.",
  },
];

// --- Funkcje pomocnicze ---
const gradientStyle = (colors: string[]): React.CSSProperties => ({
  background: `linear-gradient(135deg, ${colors.join(", ")})`,
});

export default function FluoPage() {
  const [activeFlavor, setActiveFlavor] = useState<Flavor | null>(null);

  return (
    <>
      <Head>
        <title>Fluo — Color your Energy</title>
        <meta name="description" content="Fluo — napój pełen koloru i smaku" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-white text-slate-900 font-[Poppins,sans-serif]">
        <header className="py-24 px-6 text-center text-white bg-gradient-to-r from-[#6ec1ff] via-[#8a6bff] to-[#ff6fb1]">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/fluo-logo.png"
              alt="Fluo logo"
              width={250}
              height={250}
              className="mx-auto mb-6 drop-shadow-lg"
            />
            <h1 className="text-3xl font-extrabold tracking-tight font-[Rubik]">
              Taste the Color
            </h1>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3 font-[Rubik]">
                Marka Fluo
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-justify">
                Fluo to zabawa kolorami i smakami. Każdy wariant to inny nastrój —
                od jagodowej eksplozji po cytrusową świeżość i słodką brzoskwinię.
                Marka stawia na energię, zabawę – zarówno w trakcie dnia,
                jak i w każdym łyku.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow">
              <Image
                src="/hero-mock.png"
                alt="Fluo hero mock"
                width={800}
                height={500}
                className="object-cover w-full h-72 md:h-80"
              />
            </div>
          </section>
        </main>

        <section id="flavors" className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 font-[Rubik]">
              Warianty Fluo
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flavors.map((f) => (
                <motion.article
                  key={f.key}
                  className="rounded-xl p-6 text-white relative overflow-hidden shadow-lg cursor-pointer flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.03]"
                  style={gradientStyle(f.colors)}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveFlavor(f)}
                >
                  <div className="absolute inset-0 bg-black/10 mix-blend-soft-light"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h4 className="text-xl font-bold drop-shadow-md">
                      {f.name}
                    </h4>
                    <p className="mt-2 text-sm opacity-90 drop-shadow-sm">
                      {f.slogan}
                    </p>

                    <div className="mt-6 w-full flex justify-center">
                      <div className="relative w-52 h-36">
                        <Image
                          src={f.img}
                          alt={f.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence>
          {activeFlavor && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFlavor(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-md w-full p-6 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveFlavor(null)}
                  className="absolute top-3 right-4 text-slate-400 hover:text-slate-600 text-xl"
                >
                  ✕
                </button>

                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2 font-[Rubik] text-slate-900">
                    {activeFlavor.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4 italic">
                    {activeFlavor.slogan}
                  </p>

                  <div className="relative w-52 h-36 mx-auto mb-4">
                    <Image
                      src={activeFlavor.img}
                      alt={activeFlavor.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-slate-700 text-sm text-justify leading-relaxed">
                    {activeFlavor.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="bg-[#f8fafc] border-t py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-bold mb-6">Zobacz reklamę Fluo</h4>
            <video
              src="/fluoMP4.mp4"
              controls
              className="rounded-2xl shadow-md mx-auto w-full max-w-3xl"
            />
            <p className="text-xs text-slate-500 mt-8">
              Projekt testowy marki Fluo Link do projektu Canva: 
              <a
              href="https://www.canva.com/design/DAGx7mdE0gU/jpoGibq0YsloKK1rhtHnpQ/edit?utm_content=DAGx7mdE0gU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="hover:underline"
            >
              Link do podglądu
            </a>        
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
