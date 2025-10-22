import Image from "next/image";

export default function TaoTaoPage() {
  return (
    <div className="text-[#3a2e1f] bg-[#faf6f0] min-h-screen">
      <main className="py-20 px-6 text-center bg-gradient-to-b from-[#f5e9dc] to-[#faf6f0]">
        <Image
          src="/taotao-logo.png"
          alt="TaoTao Tea Logo"
          width={160}
          height={160}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4c3b28]">
          Marka Herbaty TaoTao Tea
        </h1>
        <p className="text-lg md:text-xl text-[#6b5b45] max-w-3xl mx-auto leading-relaxed p-6">
        TaoTao Tea to marka herbat inspirowana naturą, prostotą i codziennym rytuałem spokoju. Projekt powstał w Canvie z myślą 
        o stworzeniu przyjaznego, ekologicznego wizerunku. To nie tylko herbata, lecz filozofia spokoju, zaproszenie do zatrzymania się, 
        głębszego oddechu i odnalezienia równowagi w codziennym pośpiechu. Każdy wariant napoju można spożywać wedle upodobań i potrzeb: 
        klasyczna zielona na co dzień, korzenna ogrzewająca w chłodniejsze dni i ziołowa z lawendą na odprężenie na wieczór. 
        </p>
      </main>

      <section className="max-w-5xl mx-auto py-16 px-8">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="bg-[#f4e6d2] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-[#4b3b2a]">
              Kolorystyka
            </h3>
              Kolorystyka utrzymana w stonowanych odcieniach beżu, zieleni i brązu nawiązuje do barw ziemi, liści i drewna. 
            <div className="flex justify-center gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-[#607522]" title="#607522"></div>
              <div className="w-12 h-12 rounded-full bg-[#78a831]" title="#78a831"></div>
              <div className="w-12 h-12 rounded-full bg-[#92c730]" title="#92c730"></div>
              <div className="w-12 h-12 rounded-full bg-[#c6946e]" title="#c6946e"></div>
              <div className="w-12 h-12 rounded-full bg-[#633d24]" title="#633d24"></div>   
            </div>
          Takie połączenie kolorów tworzy ciepły, spokojny nastrój oraz podkreśla organiczny, ekologiczny charakter produktów. Stonowana paleta sprawia, że opakowania wyglądają elegancko i autentycznie, a jednocześnie pozwalają, by opisy i detale na etykietach były wyraźnie widoczne dzięki kontrastowi ciemnego brązu.  
          </div>

          <div className="bg-[#f4e6d2] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-[#4b3b2a]">
              Typografia
            </h3>
            <p className="text-[#6b5b45] p-6">
              <strong>Leafy</strong> – wykorzystana do logotypu 
              <br />
              <strong>Playful Display</strong> – proste, czytelne opisy smaków
            </p>
            <p>Typografia odgrywa równie ważną rolę w budowaniu tożsamości marki. W warstwie graficznej projekt stawia na minimalizm i oddech. Kompozycje są czyste, z dużą ilością przestrzeni, co pozwala podkreślić filozofię prostoty i spokoju. 
          Delikatne, roślinne ilustracje i subtelne elementy nadają rękodzielniczy charakter.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center text-[#5e4633] mb-10">
          Warianty Herbat
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Classic",
              desc: "Zielona herbata klasyczna. Lekka, orzeźwiająca - idealna na dobry początek dnia.",
              img: "/taotao-classic.png",
              bg: "bg-[#f4e6d2]",
            },
            {
              name: "Golden Noon",
              desc: "Czarna herbata z korzennymi dodatkami. Ciepła, jesienna kompozycja pełna energii.",
              img: "/taotao-noon.png",
              bg: "bg-[#f4e6d2]",
            },
            {
              name: "Silent Night",
              desc: "Ziołowa mieszanka z lawendą. Kojący smak, który pozwala wyciszyć umysł.",
              img: "/taotao-night.png",
              bg: "bg-[#f4e6d2]",
            },
          ].map((tea) => (
            <div
              key={tea.name}
              className={`${tea.bg} rounded-2xl p-6 shadow-md text-center border border-[#e0d3c2] hover:scale-105 transition-transform`}
            >
              <Image
                src={tea.img}
                alt={tea.name}
                width={300}
                height={400}
                className="mx-auto rounded-lg mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-[#4b3b2a] mb-2">
                {tea.name}
              </h3>
              <p className="text-[#6b5b45] text-sm leading-relaxed">{tea.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl font-semibold text-[#5e4633] mb-10">
          Prezentacja Produktów
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#f5e9dc] border-t border-[#e0d3c2] py-16 text-center">
        <a href="https://www.canva.com/design/DAG1yYq7SbA/aY-g-k7gX0bDp-hnp__PYA/edit?utm_content=DAG1yYq7SbA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="hover:underline">
          Link do podglądu projektu w canva.
        </a>
      </footer>
    </div>
  );
}
