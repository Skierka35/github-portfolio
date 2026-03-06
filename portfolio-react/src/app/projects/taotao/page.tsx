"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/app/components/languageProvider";

export default function TaoTaoPage() {
  const { lang } = useLang();

  const TEXT = {
    pl: {
      heroTitle: "Marka Herbaty TaoTao Tea",
      heroDesc:
        "TaoTao Tea to marka herbat głęboko inspirowana naturą, prostotą i codziennym rytuałem spokoju. Każda filiżanka ma być małą ucieczką od zgiełku dnia, zaproszeniem do zatrzymania się, głębszego oddechu i odnalezienia wewnętrznej równowagi. Projekt wizualny, stworzony w Canvie, podkreśla przyjazny, ekologiczny charakter marki – od stonowanej, naturalnej kolorystyki po delikatne, harmonijne ilustracje.",
      palette: "Kolorystyka",
      typography: "Typografia",
      variants: "Warianty Herbat",
      showcase: "Prezentacja Produktów",
      canva: "Link do podglądu projektu w Canva",
    },
    en: {
      heroTitle: "TaoTao Tea Brand",
      heroDesc:
        "TaoTao Tea is a tea brand inspired by nature, simplicity and daily calm rituals. Each cup is meant to be a small escape from everyday noise, an invitation to pause, breathe deeply and regain balance. The visual identity created in Canva highlights the eco-friendly and natural character of the brand through soft colors and harmonious illustrations.",
      palette: "Color Palette",
      typography: "Typography",
      variants: "Tea Variants",
      showcase: "Product Showcase",
      canva: "View project on Canva",
    },
  };

  const t = TEXT[lang];

  const teas = [
    {
      name: "Sencha Standard",
      desc:
        lang === "pl"
          ? "Zielona herbata klasyczna. Lekka, orzeźwiająca - idealna na dobry początek dnia."
          : "Classic green tea. Light and refreshing – perfect for a fresh start to the day.",
      img: "/taotao-classic.png",
      modalImg: "/taotao-classic-loose.png",
      modalDesc:
        lang === "pl"
          ? "Herbata zielona klasyczna Sencha w formie sypkiej. Delikatny aromat i świeżość natury w każdej filiżance."
          : "Loose-leaf classic Sencha. Delicate aroma and freshness of nature in every cup.",
    },
    {
      name: "Golden Noon",
      desc:
        lang === "pl"
          ? "Czarna herbata z korzennymi dodatkami. Ciepła, jesienna kompozycja pełna energii."
          : "Black tea with spices. A warm autumn blend full of energy.",
      img: "/taotao-noon.png",
      modalImg: "/taotao-noon-loose.png",
      modalDesc:
        lang === "pl"
          ? "Earl Grey z nutą cynamonu, imbiru, goździków i anyżu. Idealna na jesienne popołudnia."
          : "Earl Grey with cinnamon, ginger, cloves and anise. Perfect for autumn afternoons.",
    },
    {
      name: "Silent Night",
      desc:
        lang === "pl"
          ? "Ziołowa mieszanka z lawendą. Kojący smak, który pozwala wyciszyć umysł."
          : "Herbal blend with lavender. A soothing taste to calm the mind.",
      img: "/taotao-night.png",
      modalImg: "/taotao-night-loose.png",
      modalDesc:
        lang === "pl"
          ? "Mieszanka: Sencha, lawenda, rumianek i melisa. Naturalny spokój w każdej filiżance."
          : "Blend of Sencha, lavender, chamomile and lemon balm. Natural calm in every cup.",
    },
  ];

  const [selectedTea, setSelectedTea] = useState<null | typeof teas[0]>(null);

  return (
    <div className="
      min-h-screen transition-colors duration-300
      text-[#3a2e1f] bg-[#faf6f0]
      dark:bg-[#141414] dark:text-[#e8e3da]
    ">

      {/* HERO */}
      <main className="
        py-10 px-4 sm:px-6 text-center
        bg-gradient-to-b from-[#f5e9dc] to-[#faf6f0]
        dark:from-[#1b1b1b] dark:to-[#141414]
      ">
        <Image
          src="/Moodboard.png"
          alt="TaoTao Tea Moodboard"
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#4c3b28] dark:text-[#e8e3da]">
          {t.heroTitle}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#6b5b45] dark:text-[#c7c1b8] max-w-3xl mx-auto leading-relaxed p-4 sm:p-6 text-justify">
          {t.heroDesc}
        </p>
      </main>

      {/* PALETTE & TYPOGRAPHY */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          
          <div className="bg-[#f4e6d2] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-sm dark:border dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              {t.palette}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {lang === "pl"
                ? "Stonowane odcienie beżu, zieleni i brązu nawiązują do natury."
                : "Muted shades of beige, green and brown reference nature."}
            </p>
          </div>

          <div className="bg-[#f4e6d2] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-sm dark:border dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              {t.typography}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Leafy – logo<br />
              Playful Display – opisy smaków
            </p>
          </div>

        </div>
      </section>

      {/* TEA VARIANTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          {t.variants}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {teas.map((tea) => (
            <div
              key={tea.name}
              className="bg-[#f4e6d2] dark:bg-[#1f1f1f] rounded-2xl p-5 sm:p-6 shadow-md border border-[#e0d3c2] dark:border-white/10 hover:scale-[1.02] transition cursor-pointer"
              onClick={() => setSelectedTea(tea)}
            >
              <Image
                src={tea.img}
                alt={tea.name}
                width={250}
                height={300}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {tea.name}
              </h3>
              <p className="text-sm leading-relaxed text-center">
                {tea.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedTea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-[#faf6f0] dark:bg-[#1f1f1f] rounded-2xl max-w-md w-full p-6 relative shadow-2xl border dark:border-white/10">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setSelectedTea(null)}
            >
              ×
            </button>

            <Image
              src={selectedTea.modalImg || selectedTea.img}
              alt={selectedTea.name}
              width={300}
              height={360}
              className="mx-auto mb-4 object-contain"
            />
            <h3 className="text-2xl font-bold text-center mb-2">
              {selectedTea.name}
            </h3>
            <p className="text-base leading-relaxed text-justify">
              {selectedTea.modalDesc || selectedTea.desc}
            </p>
          </div>
        </div>
      )}

      {/* SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          {t.showcase}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {["/mockup1.png", "/mockup2.png", "/mockup3.png"].map((mock, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md border border-[#e0d3c2] dark:border-white/10 hover:shadow-lg transition"
            >
              <Image
                src={mock}
                alt={`Mockup ${i + 1}`}
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f5e9dc] dark:bg-[#1b1b1b] border-t border-[#e0d3c2] dark:border-white/10 py-12 text-center">
        <a
          href="https://www.canva.com/design/DAG1yYq7SbA/aY-g-k7gX0bDp-hnp__PYA/edit?utm_content=DAG1yYq7SbA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          className="hover:underline"
          target="_blank"
        >
          {t.canva}
        </a>
      </footer>

    </div>
  );
}