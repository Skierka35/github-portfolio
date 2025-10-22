import Image from "next/image";

export default function TaoTaoPage() {
  return (
    <div className="text-[#3a2e1f] bg-[#faf6f0] min-h-screen">
      <main className="py-16 px-4 sm:px-6 text-center bg-gradient-to-b from-[#f5e9dc] to-[#faf6f0]">
        <Image
          src="/taotao-logo.png"
          alt="TaoTao Tea Logo"
          width={140}
          height={140}
          className="mx-auto mb-6 w-32 h-auto sm:w-40"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#4c3b28]">
          Marka Herbaty TaoTao Tea
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#6b5b45] max-w-3xl mx-auto leading-relaxed p-4 sm:p-6">
          TaoTao Tea to marka herbat inspirowana naturą, prostotą i codziennym
          rytuałem spokoju. Projekt powstał w Canvie z myślą o stworzeniu
          przyjaznego, ekologicznego wizerunku. To nie tylko herbata, lecz
          filozofia spokoju, zaproszenie do zatrzymania się, głębszego oddechu i
          odnalezienia równowagi w codziennym pośpiechu.
        </p>
      </main>

      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {/* Kolorystyka */}
          <div className="bg-[#f4e6d2] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#4b3b2a]">
              Kolorystyka
            </h3>
            <p className="text-sm sm:text-base text-[#5c4b37] leading-relaxed">
              Kolorystyka utrzymana w stonowanych odcieniach beżu, zieleni i
              brązu nawiązuje do barw ziemi, liści i drewna.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-4 sm:p-6">
              {["#607522", "#78a831", "#92c730", "#c6946e", "#633d24"].map(
                (color) => (
                  <div
                    key={color}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                    style={{ backgroundColor: color }}
                    title={color}
                  ></div>
                )
              )}
            </div>
            <p className="text-sm sm:text-base text-[#5c4b37] leading-relaxed">
              Takie połączenie kolorów tworzy ciepły, spokojny nastrój oraz
              podkreśla organiczny, ekologiczny charakter produktów.
            </p>
          </div>

          {/* Typografia */}
          <div className="bg-[#f4e6d2] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#4b3b2a]">
              Typografia
            </h3>
            <p className="text-[#6b5b45] p-4 sm:p-6 text-sm sm:text-base">
              <strong>Leafy</strong> – wykorzystana do logotypu
              <br />
              <strong>Playful Display</strong> – proste, czytelne opisy smaków
            </p>
            <p className="text-sm sm:text-base text-[#5c4b37] leading-relaxed">
              Typografia odgrywa równie ważną rolę w budowaniu tożsamości marki.
              W warstwie graficznej projekt stawia na minimalizm i oddech.
              Delikatne ilustracje i przestrzeń podkreślają filozofię prostoty i
              spokoju.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#5e4633] mb-8 sm:mb-10">
          Warianty Herbat
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {[
            {
              name: "Classic",
              desc: "Zielona herbata klasyczna. Lekka, orzeźwiająca - idealna na dobry początek dnia.",
              img: "/taotao-classic.png",
            },
            {
              name: "Golden Noon",
              desc: "Czarna herbata z korzennymi dodatkami. Ciepła, jesienna kompozycja pełna energii.",
              img: "/taotao-noon.png",
            },
            {
              name: "Silent Night",
              desc: "Ziołowa mieszanka z lawendą. Kojący smak, który pozwala wyciszyć umysł.",
              img: "/taotao-night.png",
            },
          ].map((tea) => (
            <div
              key={tea.name}
              className="bg-[#f4e6d2] rounded-2xl p-5 sm:p-6 shadow-md text-center border border-[#e0d3c2] hover:scale-[1.02] transition-transform"
            >
              <Image
                src={tea.img}
                alt={tea.name}
                width={250}
                height={300}
                className="mx-auto rounded-lg mb-4 object-contain w-full h-auto max-w-[250px]"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-[#4b3b2a] mb-2">
                {tea.name}
              </h3>
              <p className="text-[#6b5b45] text-sm sm:text-base leading-relaxed">
                {tea.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#5e4633] mb-8 sm:mb-10">
          Prezentacja Produktów
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {["/mockup1.png", "/mockup2.png", "/mockup3.png"].map((mock, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md border border-[#e0d3c2] hover:shadow-lg transition"
            >
              <Image
                src={mock}
                alt={`Mockup ${i + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#f5e9dc] border-t border-[#e0d3c2] py-12 sm:py-16 text-center text-sm sm:text-base">
        <a
          href="https://www.canva.com/design/DAG1yYq7SbA/aY-g-k7gX0bDp-hnp__PYA/edit?utm_content=DAG1yYq7SbA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          className="hover:underline"
        >
          Link do podglądu projektu w Canva
        </a>
      </footer>
    </div>
  );
}
