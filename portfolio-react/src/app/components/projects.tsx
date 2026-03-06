export type TagId = "all" | "branding" | "uiux" | "other";

export type Project = {
  id: number;
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  tags: TagId[];
  images?: string[];      // zawsze tablica
  video?: string;
  embed?: string;
  link?: string;
};

export const TAGS: TagId[] = ["all", "branding", "uiux", "other"];

export const TAG_LABELS: Record<TagId, { pl: string; en: string }> = {
  all: { pl: "Wszystko", en: "All" },
  branding: { pl: "Branding / marketing", en: "Branding / marketing" },
  uiux: { pl: "UI/UX", en: "UI/UX" },
  other: { pl: "Pozostałe", en: "Other" },
};

export const PROJECTS: Project[] = [
  {
    id: 11,
    slug: "taotao",
    title: "TaoTaoTea",
    description: "Koncepcja identyfikacji wizualnej marki herbat.",
    descriptionEn: "Brand identity concept for a tea brand.",
    images: ["/mockup1.PNG"],
    link: "https://portfolio-preview-skierka.netlify.app/projects/taotao",
    tags: ["branding"],
  },
  {
    id: 4,
    slug: "fluo-drinks",
    title: "Napoje Fluo",
    titleEn: "Fluo Drinks",
    description:
      "Spot reklamowy wykonany w Canvie — etykieta + animacja promująca nowy smak napoju.",
    descriptionEn:
      "A short ad made in Canva — label design + animation promoting a new drink flavor.",
    video: "/fluoMP4.mp4",
    tags: ["branding"],
  },
  {
    id: 5,
    slug: "scary-movie-night",
    title: "Scary Movie Night",
    titleEn: "Scary Movie Night",
    description:
      "Krótka reklama wydarzenia kulturalnego — dynamiczna animacja wykonana w Canvie.",
    descriptionEn:
      "A short promo for a cultural event — dynamic animation made in Canva.",
    video: "/ScaryMovieNight.mp4",
    tags: ["branding"],
  },
  {
    id: 8,
    slug: "district-heating-network",
    title: "Sieć Ciepłownicza",
    titleEn: "District Heating Network",
    description:
      "Seria slajdów w Figmie wyjaśniających działanie sieci ciepłowniczej w stylu izometrycznym.",
    descriptionEn:
      "A set of Figma slides explaining how a district heating network works in an isometric style.",
    images: ["/ciepłownictwo.JPG"],
    tags: ["branding", "other"],
  },
  {
    id: 2,
    slug: "paws-and-claws",
    title: "Paws&Claws",
    titleEn: "Paws&Claws",
    description:
      "Projekt UX/UI w Figmie — przyjazny interfejs strony usługowej dla właścicieli zwierząt.",
    descriptionEn:
      "A UX/UI project in Figma — a friendly service website interface for pet owners.",
    images: ["/paws&claws.png"],
    tags: ["uiux"],
  },
  {
    id: 1,
    slug: "budgeting-app",
    title: "Budgeting App",
    titleEn: "Budgeting App",
    description:
      "Projekt zespołowy: aplikacja do śledzenia wydatków i rozliczeń grupowych (frontend + planowanie funkcjonalności).",
    descriptionEn:
      "Team project: an app for tracking expenses and group settlements (frontend + feature planning).",
    images: ["/budgetingApp.JPG"],
    link: "https://budgeting-pi.vercel.app/demo",
    tags: ["uiux"],
  },
  {
    id: 10,
    slug: "cozy-bedroom",
    title: "Cozy Bedroom",
    titleEn: "Cozy Bedroom",
    description: "Izometryczny render w Blenderze — przytulna scena 3D.",
    descriptionEn: "An isometric Blender render — a cozy 3D scene.",
    images: ["/RenderResult.png"],
    tags: ["other"],
  },
];