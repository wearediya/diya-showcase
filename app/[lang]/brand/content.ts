export type BrandLogo = {
  file: string; // dans /public/logos
  download: string; // nom de fichier proposé au téléchargement
  name: string;
  desc: string;
  bg: "light" | "dark" | "mint";
};

export type BrandColor = { name: string; hex: string; role: string };

export type BrandDetail = { label: string; value: string };

export type BrandContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  detailsHeading: string;
  details: BrandDetail[];
  logosHeading: string;
  logosLead: string;
  downloadLabel: string;
  logos: BrandLogo[];
  colorsHeading: string;
  colorsLead: string;
  copyLabel: string;
  copiedLabel: string;
  colors: BrandColor[];
  usageHeading: string;
  dosLabel: string;
  dontsLabel: string;
  dos: string[];
  donts: string[];
};

const fr: BrandContent = {
  metaTitle: "Marque — Diya",
  metaDescription:
    "L'identité de marque Diya : logos à télécharger, couleurs officielles et règles d'usage.",
  title: "Marque",
  subtitle:
    "Les éléments officiels de l'identité Diya : logos, couleurs et bonnes pratiques. Téléchargez ce dont vous avez besoin.",
  detailsHeading: "Identité",
  details: [
    { label: "Nom", value: "Diya" },
    { label: "Baseline", value: "La gestion locative, simple et accessible partout." },
    { label: "Catégorie", value: "Application de gestion locative" },
  ],
  logosHeading: "Logos",
  logosLead:
    "Utilisez toujours les fichiers officiels, sans les redessiner. Chaque variante est fournie en SVG.",
  downloadLabel: "Télécharger le SVG",
  logos: [
    {
      file: "logo.svg",
      download: "diya-logo.svg",
      name: "Logo principal",
      desc: "Couleur — sur fond clair",
      bg: "light",
    },
    {
      file: "logo-black.svg",
      download: "diya-logo-noir.svg",
      name: "Monochrome noir",
      desc: "Sur fond clair",
      bg: "light",
    },
    {
      file: "logo-white.svg",
      download: "diya-logo-blanc.svg",
      name: "Monochrome blanc",
      desc: "Sur fond foncé",
      bg: "dark",
    },
    {
      file: "logo-icon.svg",
      download: "diya-icone.svg",
      name: "Icône",
      desc: "Symbole seul",
      bg: "mint",
    },
  ],
  colorsHeading: "Couleurs",
  colorsLead:
    "La palette de marque. Cliquez sur une couleur pour copier son code hexadécimal.",
  copyLabel: "Copier",
  copiedLabel: "Copié !",
  colors: [
    { name: "Vert Diya", hex: "#099664", role: "Couleur principale" },
    { name: "Vert foncé", hex: "#053725", role: "Texte sur menthe" },
    { name: "Menthe", hex: "#C9F4DE", role: "Fonds & accents" },
    { name: "Menthe claire", hex: "#7FE3AC", role: "Accents lumineux" },
    { name: "Encre", hex: "#1D1D1B", role: "Texte principal" },
    { name: "Blanc", hex: "#FFFFFF", role: "Fond de base" },
  ],
  usageHeading: "Bonnes pratiques",
  dosLabel: "À faire",
  dontsLabel: "À éviter",
  dos: [
    "Garder un espace de protection suffisant autour du logo.",
    "Utiliser la version blanche sur les fonds foncés.",
    "Conserver les couleurs officielles de la palette.",
  ],
  donts: [
    "Déformer, étirer ou faire pivoter le logo.",
    "Changer les couleurs ou appliquer des dégradés.",
    "Ajouter des ombres, contours ou effets.",
  ],
};

const en: BrandContent = {
  metaTitle: "Brand — Diya",
  metaDescription:
    "The Diya brand identity: downloadable logos, official colors and usage guidelines.",
  title: "Brand",
  subtitle:
    "The official Diya identity elements: logos, colors and best practices. Download what you need.",
  detailsHeading: "Identity",
  details: [
    { label: "Name", value: "Diya" },
    { label: "Baseline", value: "Rental management, simple and available everywhere." },
    { label: "Category", value: "Rental-management app" },
  ],
  logosHeading: "Logos",
  logosLead:
    "Always use the official files, never redraw them. Each variant is provided as SVG.",
  downloadLabel: "Download SVG",
  logos: [
    {
      file: "logo.svg",
      download: "diya-logo.svg",
      name: "Primary logo",
      desc: "Color — on light backgrounds",
      bg: "light",
    },
    {
      file: "logo-black.svg",
      download: "diya-logo-black.svg",
      name: "Monochrome black",
      desc: "On light backgrounds",
      bg: "light",
    },
    {
      file: "logo-white.svg",
      download: "diya-logo-white.svg",
      name: "Monochrome white",
      desc: "On dark backgrounds",
      bg: "dark",
    },
    {
      file: "logo-icon.svg",
      download: "diya-icon.svg",
      name: "Icon",
      desc: "Symbol only",
      bg: "mint",
    },
  ],
  colorsHeading: "Colors",
  colorsLead: "The brand palette. Click a color to copy its hex code.",
  copyLabel: "Copy",
  copiedLabel: "Copied!",
  colors: [
    { name: "Diya green", hex: "#099664", role: "Primary color" },
    { name: "Dark green", hex: "#053725", role: "Text on mint" },
    { name: "Mint", hex: "#C9F4DE", role: "Backgrounds & accents" },
    { name: "Light mint", hex: "#7FE3AC", role: "Bright accents" },
    { name: "Ink", hex: "#1D1D1B", role: "Primary text" },
    { name: "White", hex: "#FFFFFF", role: "Base background" },
  ],
  usageHeading: "Best practices",
  dosLabel: "Do",
  dontsLabel: "Don't",
  dos: [
    "Keep enough clear space around the logo.",
    "Use the white version on dark backgrounds.",
    "Keep the official palette colors.",
  ],
  donts: [
    "Distort, stretch or rotate the logo.",
    "Change the colors or apply gradients.",
    "Add shadows, outlines or effects.",
  ],
};

export const brand = { fr, en } as const;
