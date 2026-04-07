"use client";

import { useEffect, useRef, useState } from "react";
import ImageOnScroll from "../components/imageAnimation";
import { useLang } from "../components/languageProvider";

export default function Introduce() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLang();

  const content = {
  pl: {
    heading: "O mnie",
    intro:
      "Projektuję materiały wizualne dla marek, skupiając się nie tylko na estetyce, ale przede wszystkim na czytelnej i skutecznej komunikacji. Tworzę projekty, które pomagają przyciągnąć uwagę i jasno przekazać to, co najważniejsze.",

        sections: [
          {
            title: "Czym się zajmuję",
            text: "Tworzę grafiki marketingowe, materiały do social media oraz projekty wspierające komunikację marki. Pracuję nad identyfikacją wizualną, kampaniami oraz pojedynczymi materiałami reklamowymi, dopasowanymi do konkretnego celu.",
          },
          {
            title: "Jak podchodzę do projektów",
            text: "Każdy projekt zaczynam od zrozumienia odbiorcy i kontekstu, w którym będzie funkcjonował. Dbam o hierarchię informacji, kompozycję i spójność wizualną, żeby przekaz był szybki do zrozumienia i naturalny w odbiorze.",
          },
          {
            title: "Co jest dla mnie ważne",
            text: "Najważniejsza jest dla mnie równowaga między estetykąm, a funkcją. Lubię projekty, które są dopracowane wizualnie, ale przede wszystkim spełniają swoją rolę i realnie wspierają komunikację marki.",
          },
        ],
      },

      en: {
        heading: "About me",
        intro:
          "I design visual materials for brands with a focus not only on aesthetics, but also on clear and effective communication. My goal is to create designs that attract attention and deliver the message in a simple, structured way.",

        sections: [
          {
            title: "What I do",
            text: "I create marketing graphics, social media assets and visual materials that support brand communication. My work includes branding elements, campaigns and individual promotional designs tailored to specific goals.",
          },
          {
            title: "How I approach projects",
            text: "I start by understanding the audience and the context in which the design will be used. I focus on information hierarchy, composition and visual consistency to make the message clear and easy to process.",
          },
          {
            title: "What matters to me",
            text: "I value the balance between aesthetics and function. I aim to create designs that look refined but, most importantly, serve a clear purpose and support brand communication effectively.",
          },
        ],
      },
    } as const;

  const t = content[lang];

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full transition-all duration-1000 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="text-justify grid items-center gap-10 rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 md:grid-cols-[1.2fr_0.8fr] md:p-10">
        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
            {t.heading}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.intro}
          </p>

          <div className="mt-8 space-y-7">
            {t.sections.map((sec, idx) => (
              <div key={idx}>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300">
                  {sec.title}
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-indigo-500/10 blur-3xl opacity-0 transition-opacity dark:opacity-60" />
            <div className="h-full w-full [&>img]:h-full [&>img]:w-full [&>img]:object-cover">
              <ImageOnScroll />
            </div>
          </div>
            </div>
            </div>
    </section>
  );
}