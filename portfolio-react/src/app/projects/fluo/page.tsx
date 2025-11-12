"use client";
import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "./fluo.css"; 

type Flavor = {
  key: string;
  name: string;
  slogan: string;
  colors: string[];
  img: string;
  description: string;
  accent: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE },
  viewport: { once: true },
};

const flavors: Flavor[] = [
  {
    key: "party-blue-berries",
    name: "Party Blue Berries",
    slogan: "Jagodowa eksplozja energii",
    colors: ["#A77BF3", "#7CCFFF", "#FF9CDC"],
    img: "/party-blue-berries.png",
    description:
      "Intensywnie jagodowy smak z lekką nutą malin i słodkiej energii. Idealny na wieczorne spotkania lub kreatywne poranki.",
    accent: "#7CCFFF",
  },
  {
    key: "refreshing-cytrus",
    name: "Orzeźwiający Cytrus",
    slogan: "Cytrusowa fala mocy",
    colors: ["#F9E65C", "#C8E46C", "#FFB347"],
    img: "/refreshing-cytrus.png",
    description:
      "Lekki, rześki smak cytrusów, który orzeźwia i dodaje energii. Idealny do pracy, nauki i letnich dni.",
    accent: "#F9E65C",
  },
  {
    key: "juicy-peaches",
    name: "Juicy Peaches",
    slogan: "Soczysta chwila",
    colors: ["#FFB6A3", "#FFC9C9", "#FFF0E1"],
    img: "/juicy-peaches.png",
    description:
      "Słodki i aromatyczny smak brzoskwini, który kojarzy się z wakacjami i spokojem. Idealny na chwilę relaksu.",
    accent: "#FFB6A3",
  },
];

const gradientStyle = (colors: string[]): React.CSSProperties => ({
  background: `linear-gradient(135deg, ${colors.join(", ")})`,
});

function SectionConnector() {
  return (
    <div className="relative h-20 -mt-8 mb-[-1px] overflow-hidden" aria-hidden>
      <svg
        className="block w-full h-full text-[#0A0B1A] animate-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C120,40 240,16 360,24 C480,32 600,72 720,72 C840,72 960,32 1080,24 C1200,16 1320,40 1440,64 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

export default function FluoPage() {
  const [activeFlavor, setActiveFlavor] = useState<Flavor | null>(null);
  const flavorsRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const glow = document.createElement("div");
        glow.className = "cursor-glow";
        document.body.appendChild(glow);
        const move = (e: MouseEvent) => {
          glow.style.transform = `translate(${e.clientX - 90}px, ${e.clientY - 90}px)`;
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
      }, []);

        useEffect(() => {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveFlavor(null);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
<>
      <Head>
        <title>Fluo — Color your Energy</title>
        <meta name="description" content="Fluo — napój pełen koloru i smaku" />
      </Head>

      <div className="min-h-screen bg-[#0A0B1A] text-[#F5F5F5] font-body">
        {/* HERO */}
        <header className="relative w-full overflow-hidden">
          <div
            className="absolute inset-0 animate-gradientMove bg-[length:400%_400%]"
            style={{
              backgroundImage:
                "linear-gradient(-45deg, #FFD3A5, #FD6585, #A8C0FF, #91EAE4)",
            }}
          />
          <div className="absolute inset-0 hero-scrim" aria-hidden />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-28 text-center">
            <Image
              src="/fluo-logo.png"
              alt="Logo marki Fluo"
              width={220}
              height={220}
              priority
              className="mx-auto mb-6 drop-shadow-xl"
            />
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-white text-shadow">
              Taste the Color
            </h1>
            <p className="mt-4 text-[#F5F5F5] max-w-2xl mx-auto bg-black/30 p-3 rounded-lg leading-relaxed">
              Fluo to zabawa kolorami i smakami. Każdy wariant to inny nastrój — od
              jagodowej eksplozji po cytrusową świeżość i słodką brzoskwinię.
            </p>
            <div className="mt-10 flex gap-3 flex-wrap justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: EASE }}
                type="button"
                onClick={() => scrollTo(flavorsRef)}
                className="rounded-xl bg-[#FFE873] text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm 
                          hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#FFE873]/40 hover:bg-[#FFD84A] 
                          transition btn-shine"
              >
                Poznaj nasze smaki
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: EASE }}
                type="button"
                onClick={() => scrollTo(videoRef)}
                className="rounded-xl bg-[#FFB6A3] text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm 
                          hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#FFB6A3]/40 hover:bg-[#FF9FA3] 
                          transition btn-shine"
              >
                Zobacz reklamę
              </motion.button>
            </div>


          </div>
        </header>

        {/* ABOUT */}
        <motion.section {...fadeIn} className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-10 text-center underline-glow">Marka Fluo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B0B3C3] leading-relaxed text-justify">
                Marka Fluo stawia na energię, zabawę i odważną identyfikację. 
                Minimalistyczne puszki z wyrazistymi kolorami komunikują nastrój i emocje bez zbędnego szumu. 
                Każdy wariant powstał z myślą o innej sytuacji – porannym pobudzeniu, popołudniowej inspiracji 
                lub wieczornym relaksie. Fluo to nie tylko napój – to styl życia, który łączy świeżość, 
                kolor i pozytywną energię.
              </p>
              <p className="text-[#B0B3C3] leading-relaxed text-justify mt-4">
                Spójna paleta neonowych barw przyciąga wzrok, a pojemność 350 ml 
                zapewnia idealną dawkę orzeźwienia i mocy. Fluo inspiruje do bycia odważnym 
                i radosnym — bez względu na okoliczności.
              </p>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden shadow-xl p-6 flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(-45deg, #FFD3A5, #FD6585, #A8C0FF, #91EAE4)",
                backgroundSize: "400% 400%",
                animation: "gradientMove 12s ease infinite",
              }}
            >
              {/* delikatna poświata */}
              <div className="absolute inset-0 bg-white/20 blur-2xl" aria-hidden />

              <div className="relative w-full max-w-[480px] aspect-[4/3] drop-shadow-[0_12px_25px_rgba(0,0,0,0.25)]">
                <Image
                  src="/hero-mock.png"
                  alt="Wizualizacja puszek Fluo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>


        <SectionConnector />

        {/* MOOD */}
        <motion.section {...fadeIn} className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h3 className="text-3xl font-bold font-heading mb-4">Każdy kolor to inny nastrój</h3>

          <p className="text-[#B0B3C3] max-w-2xl mx-auto leading-relaxed mb-12">
            Fluo to nie tylko napój — to emocja w puszce. Wybierz smak, którego najbardziej potrzebujesz:
            Energię jagód, świeżość cytrusów lub słodycz brzoskwini. Ty decydujesz, jaki kolor będzie miał twój dzień!
          </p>
  <div className="flex justify-center gap-16 mb-12">
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
      className="flex flex-col items-center"
    >
      <span className="text-4xl">🍇</span>
      <p className="text-sm mt-2">Energia</p>
    </motion.div>

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
      className="flex flex-col items-center"
    >
      <span className="text-4xl">🍋</span>
      <p className="text-sm mt-2">Świeżość</p>
    </motion.div>

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
      className="flex flex-col items-center"
    >
      <span className="text-4xl">🍑</span>
      <p className="text-sm mt-2">Słodycz</p>
    </motion.div>
  </div>

  <p className="text-[#B0B3C3] max-w-2xl mx-auto leading-relaxed text-justify">
    Fluo powstało z potrzeby przełamania codzienności. Naszą inspiracją były barwy neonów,
    muzyka lat 80. i kultura ulicy. Chcieliśmy stworzyć napój, który nie tylko orzeźwia,
    ale też inspiruje — kolorem, energią i designem.
    W krótkim czasie Fluo stało się symbolem spontaniczności i nowoczesnego stylu życia.
  </p>
</motion.section>
<SectionConnector />


        {/* FLAVORS */}
        <motion.section {...fadeIn} id="flavors" ref={flavorsRef} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12 font-heading underline-glow">
              Warianty Fluo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {flavors.map((f, i) => (
                <motion.article
                  key={f.key}
                  className="group relative rounded-2xl p-6 text-white overflow-hidden shadow-xl flex flex-col justify-between text-center transition duration-300"
                  style={gradientStyle(f.colors)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: EASE }}
                  onClick={() => setActiveFlavor(f)}
                >
                  <div className="absolute inset-0 bg-black/10 mix-blend-soft-light" aria-hidden />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow: `0 0 0 2px ${f.accent}55 inset, 0 18px 40px rgba(0,0,0,.25)`,
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <h4 className="text-xl font-bold drop-shadow-md">{f.name}</h4>
                    <p className="mt-1 text-sm opacity-90 drop-shadow-sm">{f.slogan}</p>
                    <div className="mt-6 w-full flex justify-center">
                      <div className="relative w-[220px] h-[280px]">
                        <Image
                          src={f.img}
                          alt={`Puszka napoju Fluo — ${f.name}`}
                          fill
                          className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,.35)]"
                        />
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      type="button"
                      className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#FFE873] text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow focus:outline-none focus:ring-4 focus:ring-[#FFE873]/40 hover:bg-[#FFD84A] btn-shine"
                    >
                      Szczegóły
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* MODAL */}
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
                className="bg-[#141526] text-[#F5F5F5] rounded-2xl max-w-md w-full p-6 relative shadow-xl"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveFlavor(null)}
                  className="absolute top-3 right-4 text-slate-300 hover:text-white text-xl focus:outline-none focus:ring-4 focus:ring-white/30 rounded"
                >
                  ✕
                </button>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2 font-heading text-white">
                    {activeFlavor.name}
                  </h4>
                  <p className="text-sm text-slate-300 mb-4 italic">{activeFlavor.slogan}</p>
                  <div className="relative w-52 h-52 mx-auto mb-4">
                    <Image
                      src={activeFlavor.img}
                      alt={`Puszka napoju Fluo — ${activeFlavor.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed max-w-prose mx-auto text-justify">
                    {activeFlavor.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <motion.footer {...fadeIn} ref={videoRef} className="bg-[#0A0B1A] border-t border-white/10 py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 font-heading underline-glow">Zobacz reklamę Fluo</h3>
            <div className="rounded-2xl overflow-hidden shadow-md mx-auto w-full max-w-3xl ring-1 ring-white/10">
              <video
                src="/fluoMP4.mp4"
                controls
                preload="metadata"
                className="block w-full h-auto"
                aria-label="Wideo reklamowe marki Fluo"
              />
            </div>
            <p className="text-xs text-slate-400 mt-8 max-w-prose mx-auto">
              Projekt testowy marki Fluo.{" "}
              <a
                href="https://www.canva.com/design/DAGx7mdE0gU/jpoGibq0YsloKK1rhtHnpQ/edit"
                className="hover:underline text-[#FFB6A3]"
                target="_blank"
                rel="noreferrer noopener"
              >
                Podgląd w Canvie
              </a>
            </p>
          </div>
        </motion.footer>
      </div>
    </>
  );
}
