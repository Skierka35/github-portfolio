export type ProjectTag = "branding" | "uiux" | "other";
export type FilterTag = "all" | ProjectTag;

export type Project = {
  id: number;
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  thumbnail?: string;
  tags: ProjectTag[];
  images: string[];
  video?: string;
  link?: string;
  featured?: boolean;
  caseStudy?: boolean;
};

export const TAGS: FilterTag[] = ["all", "branding", "uiux", "other"];

export const TAG_LABELS: Record<FilterTag, { pl: string; en: string }> = {
  all: { pl: "Wszystko", en: "All" },
  branding: { pl: "Branding / marketing", en: "Branding / marketing" },
  uiux: { pl: "UI/UX", en: "UI/UX" },
  other: { pl: "Pozostałe", en: "Other" },
};

export const PROJECTS: Project[] = [
  {
  id: 11,
  slug: "powercharge",
  title: "PowerCharge",
  titleEn: "PowerCharge",
  description: "Koncepcja identyfikacji wizualnej dla marki związanej z ładowaniem pojazdów elektrycznych.",
  descriptionEn: "A visual identity concept for a brand focused on electric vehicle charging solutions.",
  thumbnail: "/PowerchargeElectroSoutions.png",
  images: ["/PowerchargeElectroSoutions.png"],
  tags: ["branding"],
  caseStudy: false,
}, 
  {
  id: 10,
  slug: "nexfuel",
  title: "NexFuel",
  titleEn: "NexFuel",
  description:
    "Projekt materiałów promocyjnych i identyfikacji wizualnej dla marki związanej z nowoczesnymi rozwiązaniami energetycznymi.",
  descriptionEn:
    "A promotional design and visual identity project for a brand focused on modern energy solutions.",
  thumbnail: "/NexFuel.png",
  images: ["/NexFuel.png"],
  video: "/NexFuelVideo.mp4",
  tags: ["branding"],
  caseStudy: false,
  },
  {
    id: 9,
    slug: "mollerspa",
    title: "MollerSpa",
    titleEn: "MollerSpa",
    description: "Projekt wizualny marki kosmetyków premium. Marka MollerSpa zawiera szereg produktów zapachowych, do pielęgnacji ciała.",
    descriptionEn: "Visual design for a premium cosmetics brand. The MollerSpa brand includes a range of fragranced body care products.",
    images: ["/Mollerspa-1.png","/Mollerspa-2.png","/Mollerspa-3.png"],
    tags: ["branding"],
    caseStudy: false,
  },
  {
    id: 8,
    slug: "glimmerstone",
    title: "Glimmerstone",
    titleEn: "Glimmerstone",
    description: "Projekt wizualny marki uniwersalnej. Marka glimmerstone zawiera szereg produktów codziennego użytku.",
    descriptionEn: "A visual design for a universal brand, the Glimmerstone brand encompasses a range of everyday products.",
    images: ["/Glimmerstone1.png","/Glimmerstone2.png","/Glimmerstone3.png"],
    tags: ["branding"],
    caseStudy: false,
  },
    {
    id: 7,
    slug: "nexfuel",
    title: "Zaproszenie NexFuel",
    titleEn: "Invitation card NexFuel",
    description: "Projekt zaproszenia na targi, dla klientów marki NexFuel.",
    descriptionEn: "Team project: an app for tracking expenses and group settlements (frontend + feature planning).",
    images: ["/NexFuel.png", "/NexFuel2.png", "/NexFuel3.png"],
    tags: ["branding"],
    caseStudy: false,
  },
  {
    id: 6,
    slug: "taotao",
    title: "TaoTaoTea",
    description: "Koncepcja identyfikacji wizualnej marki herbat.",
    descriptionEn: "Brand identity concept for a tea brand.",
    images: ["/mockup1.PNG", "/mockup2.PNG", "/mockup3.PNG"],
    link: "https://portfolio-preview-skierka.netlify.app/projects/taotao",
    tags: ["branding"],
    caseStudy: true,
  },
  {
    id: 5,
    slug: "fluo",
    title: "Napoje Fluo",
    titleEn: "Fluo Drinks",
    description: "Spot reklamowy wykonany w Canvie — etykieta + animacja promująca nowy smak napoju.",
    descriptionEn: "A short ad made in Canva — label design + animation promoting a new drink flavor.",
    video: "/fluoMP4.mp4",
    link: "https://portfolio-preview-skierka.netlify.app/projects/fluodrinks",
    tags: ["branding"],
    images: ["/fluo1.png", "/fluo2.png", "/fluo3.png"],
    caseStudy: true,
  },
  {
    id: 4,
    slug: "scarymovienight",
    title: "Scary Movie Night",
    titleEn: "Scary Movie Night",
    description: "Krótka reklama wydarzenia kulturalnego — dynamiczna animacja wykonana w Canvie.",
    descriptionEn: "A short promo for a cultural event — dynamic animation made in Canva.",
    video: "/ScaryMovieNight.mp4",
    tags: ["branding"],
    images: []
  },
  {
    id: 3,
    slug: "districtheatingnetwork",
    title: "Sieć Ciepłownicza",
    titleEn: "District Heating Network",
    description: "Seria slajdów w Figmie wyjaśniających działanie sieci ciepłowniczej w stylu izometrycznym.",
    descriptionEn: "A set of Figma slides explaining how a district heating network works in an isometric style.",
    images: ["/ciepłownictwo.JPG"],
    tags: ["branding", "other"],
    caseStudy: false,
  },
  {
    id: 2,
    slug: "paws-and-claws",
    title: "Paws&Claws",
    titleEn: "Paws&Claws",
    description: "Projekt UX/UI w Figmie — przyjazny interfejs strony usługowej dla właścicieli zwierząt.",
    descriptionEn: "A UX/UI project in Figma — a friendly service website interface for pet owners.",
    images: ["/paws&claws.png"],
    tags: ["uiux"],
    caseStudy: false,
  },
  {
    id: 1,
    slug: "cozy-bedroom",
    title: "Cozy Bedroom",
    titleEn: "Cozy Bedroom",
    description: "Izometryczny render w Blenderze — przytulna scena 3D.",
    descriptionEn: "An isometric Blender render — a cozy 3D scene.",
    images: ["/RenderResult.png"],
    tags: ["other"],
    caseStudy: false,
  },
   
];