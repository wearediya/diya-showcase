import "server-only";

export type ContactMethod = {
  kind: "whatsapp" | "email" | "phone";
  label: string;
  value: string;
  href: string;
};

export type ContactContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  aboutHeading: string;
  aboutParas: string[];
  values: { title: string; desc: string }[];
  contactHeading: string;
  contactLead: string;
  methods: ContactMethod[];
  locationLabel: string;
  location: string;
};

// Coordonnées réelles (support de l'app Diya).
const EMAIL = "wearekarfi@gmail.com";
const PHONE_INTL = "+22870407470";
const PHONE_HUMAN = "+228 70 40 74 70";
const WA_DIGITS = "22870407470";

const fr: ContactContent = {
  metaTitle: "Contact & à propos — Diya",
  metaDescription:
    "À propos de Diya (édité par KARFI) et comment nous contacter : WhatsApp, e-mail, téléphone.",
  title: "À propos & contact",
  subtitle:
    "Diya est édité par KARFI. Une question, une démo ou un partenariat ? Écrivez-nous — nous répondons vite.",
  aboutHeading: "À propos de Diya",
  aboutParas: [
    "Diya est une application mobile de gestion locative pensée pour les propriétaires et gestionnaires d'Afrique de l'Ouest. Simple, 100 % hors-ligne et en FCFA, elle réunit biens, locataires, loyers, dépenses, réservations et reçus au même endroit.",
    "Notre mission : rendre la gestion locative accessible à tous, même sans connexion Internet stable. Diya est un produit KARFI.",
  ],
  values: [
    {
      title: "Hors-ligne d'abord",
      desc: "Vos données restent sur votre téléphone, disponibles partout, à tout moment.",
    },
    {
      title: "Pensé pour la région",
      desc: "FCFA, WhatsApp, mobile money, espèces : Diya colle aux usages du terrain.",
    },
    {
      title: "Vos données protégées",
      desc: "Base chiffrée, verrouillage biométrique et sauvegarde Google Drive.",
    },
  ],
  contactHeading: "Nous contacter",
  contactLead:
    "L'équipe vous répond en français et en anglais, généralement sous 24 h.",
  methods: [
    {
      kind: "whatsapp",
      label: "WhatsApp",
      value: PHONE_HUMAN,
      href: `https://wa.me/${WA_DIGITS}`,
    },
    { kind: "email", label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
    { kind: "phone", label: "Téléphone", value: PHONE_HUMAN, href: `tel:${PHONE_INTL}` },
  ],
  locationLabel: "Où nous sommes",
  location: "Lomé, Togo",
};

const en: ContactContent = {
  metaTitle: "Contact & about — Diya",
  metaDescription:
    "About Diya (a KARFI product) and how to reach us: WhatsApp, email, phone.",
  title: "About & contact",
  subtitle:
    "Diya is a KARFI product. A question, a demo or a partnership? Write to us — we reply fast.",
  aboutHeading: "About Diya",
  aboutParas: [
    "Diya is a mobile rental-management app built for landlords and property managers in West Africa. Simple, 100% offline and in CFA francs, it brings properties, tenants, rent, expenses, bookings and receipts together in one place.",
    "Our mission: make rental management accessible to everyone, even without a stable Internet connection. Diya is a KARFI product.",
  ],
  values: [
    {
      title: "Offline first",
      desc: "Your data stays on your phone, available anywhere, at any time.",
    },
    {
      title: "Built for the region",
      desc: "CFA, WhatsApp, mobile money, cash: Diya fits how things really work.",
    },
    {
      title: "Your data protected",
      desc: "Encrypted database, biometric lock and Google Drive backup.",
    },
  ],
  contactHeading: "Get in touch",
  contactLead: "Our team replies in French and English, usually within 24 hours.",
  methods: [
    {
      kind: "whatsapp",
      label: "WhatsApp",
      value: PHONE_HUMAN,
      href: `https://wa.me/${WA_DIGITS}`,
    },
    { kind: "email", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { kind: "phone", label: "Phone", value: PHONE_HUMAN, href: `tel:${PHONE_INTL}` },
  ],
  locationLabel: "Where we are",
  location: "Lomé, Togo",
};

export const contact = { fr, en } as const;
