export type TagId = "all" | "uiux" | "branding" | "illustration" | "other";

export type Project = {
  id: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  tags: TagId[];
  images?: string[];
  video?: string;
  embed?: string;
  link?: string;
};

export const TAGS: TagId[] = ["all", "uiux", "branding", "illustration", "other"];

export const TAG_LABELS: Record<TagId, { pl: string; en: string }> = {
  all: { pl: "Wszystko", en: "All" },
  uiux: { pl: "UI/UX", en: "UI/UX" },
  branding: { pl: "Grafika reklamowa / branding", en: "Branding / advertising" },
  illustration: { pl: "Ilustracje", en: "Illustrations" },
  other: { pl: "Pozostałe", en: "Other" },
};

export const PROJECTS: Project[] = [
  {
    id: 11,
    title: "TaoTaoTea",
    description: "Brand reklamowy marki TaoTao Tea.",
    descriptionEn: "Brand identity concept for TaoTao Tea.",
    images: ["/mockup1.PNG"],
    link: "https://portfolio-preview-skierka.netlify.app/projects/taotao",
    tags: ["branding"],
  },
  {
    id: 4,
    title: "Napoje Fluo",
    titleEn: "Fluo Drinks",
    description:
      "Spot reklamowy wykonany w Canvie — projekt etykiety i animacja promująca nowy smak napoju.",
    descriptionEn:
      "A short ad made in Canva — label design and animation promoting a new drink flavor.",
    video: "/fluoMP4.mp4",
    tags: ["branding"],
  },
  {
    id: 5,
    title: "Scary Movie Night",
    description:
      "Krótka reklama wydarzenia kulturalnego — dynamiczna animacja wykonana w Canvie.",
    descriptionEn:
      "A short promo for a cultural event — dynamic animation made in Canva.",
    video: "/ScaryMovieNight.mp4",
    tags: ["branding"],
  },
  {
    id: 12,
    title: "Bajkowy sen",
    titleEn: "Fairytale Dream",
    description:
      "Ilustracja digitalowa przedstawiająca jelenia śpiącego w magicznym lesie. Odnowiona graficznie adaptacja Wielkanocnej łąki.",
    descriptionEn:
      "A digital illustration of a deer sleeping in a magical forest. A refreshed visual adaptation of an Easter meadow concept.",
    images: ["/BajkowySen.png"],
    tags: ["illustration"],
  },
  {
    id: 6,
    title: "Smaczne bagno",
    titleEn: "Tasty Swamp",
    description:
      "Kolaż wykonany w Photoshopie — zabawna kompozycja inspirowana jedzeniem i zwierzętami.",
    descriptionEn:
      "A Photoshop collage — a playful composition inspired by food and animals.",
    images: ["/FoodSwamp.png"],
    tags: ["illustration"],
  },
  {
    id: 7,
    title: "Grzybowa wioska",
    titleEn: "Mushroom Village",
    description:
      "Digitalowa ilustracja fantasy przedstawiająca spokojną wioskę wśród trawy.",
    descriptionEn:
      "A fantasy digital illustration of a peaceful village hidden in grass.",
    images: ["/MushroomVillage.png"],
    tags: ["illustration"],
  },
  {
    id: 3,
    title: "Wielkanocna łąka",
    titleEn: "Easter Meadow",
    description:
      "Ilustracja fantasy wykonana digitalowo. Bajkowy klimat, gra światłem i żywymi kolorami.",
    descriptionEn:
      "A fantasy digital illustration. A fairytale mood with light and vivid colors.",
    images: ["/Forest.png"],
    tags: ["illustration"],
  },
  {
    id: 2,
    title: "Paws&Claws",
    description:
      "Projekt UX/UI wykonany w Figmie, prezentujący przyjazny interfejs strony usługowej.",
    descriptionEn:
      "A UX/UI project made in Figma, presenting a friendly service website interface.",
    images: ["/paws&claws.png"],
    tags: ["uiux"],
  },
  {
    id: 10,
    title: "Cozy Bedroom",
    description: "Izometryczny pokój wyrenderowany w Blenderze — scena 3D.",
    descriptionEn: "An isometric room rendered in Blender — a cozy 3D scene.",
    images: ["/RenderResult.png"],
    tags: ["other"],
  },
  {
    id: 8,
    title: "Sieć Ciepłownicza",
    titleEn: "District Heating Network",
    description:
      "Trzy slajdy Figmy wyjaśniające działanie sieci ciepłowniczej w stylu izometrycznym.",
    descriptionEn:
      "Three Figma slides explaining how a district heating network works, in an isometric style.",
    images: ["/ciepłownictwo.JPG"],
    tags: ["branding", "other"],
  },
  {
    id: 1,
    title: "Budgeting App",
    description:
      "Projekt zespołowy: aplikacja do śledzenia wydatków i rozliczeń grupowych.",
    descriptionEn:
      "Team project: an app for tracking expenses and group settlements.",
    images: ["/budgetingApp.JPG"],
    link: "https://budgeting-pi.vercel.app/demo",
    tags: ["uiux"],
  },
];
