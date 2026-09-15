import type { LegalDoc } from "@/components/sections/LegalPage";

const EMAIL = "wearekarfi@gmail.com";
const PHONE = "+228 70 40 74 70";

const fr: LegalDoc = {
  metaTitle: "Conditions d'utilisation — Diya",
  metaDescription:
    "Les conditions qui encadrent l'utilisation de l'application de gestion locative Diya.",
  title: "Conditions d'utilisation",
  subtitle:
    "Les règles qui encadrent l'utilisation de l'application Diya. Merci de les lire avant de vous en servir.",
  updatedLabel: "Dernière mise à jour",
  updated: "15 septembre 2026",
  tocLabel: "Sur cette page",
  sections: [
    {
      id: "acceptance",
      title: "Acceptation des conditions",
      blocks: [
        {
          t: "p",
          s: "En téléchargeant ou en utilisant Diya, vous acceptez les présentes conditions. Si vous n'êtes pas d'accord avec l'une d'elles, n'utilisez pas l'application.",
        },
      ],
    },
    {
      id: "service",
      title: "Description du service",
      blocks: [
        {
          t: "p",
          s: "Diya est une application mobile de **gestion locative** qui vous aide à suivre vos biens, locataires, loyers, dépenses, réservations et reçus. Elle fonctionne **hors‑ligne**, les données étant conservées sur votre appareil.",
        },
      ],
    },
    {
      id: "license",
      title: "Licence d'utilisation",
      blocks: [
        {
          t: "p",
          s: "Nous vous accordons un droit **personnel, limité, non exclusif et non transférable** d'utiliser l'application pour vos besoins de gestion locative, dans le respect des présentes conditions.",
        },
      ],
    },
    {
      id: "acceptable",
      title: "Usage acceptable",
      blocks: [
        { t: "p", s: "Vous vous engagez à ne pas :" },
        {
          t: "list",
          items: [
            "utiliser l'application à des fins illégales ou frauduleuses ;",
            "revendre, louer ou redistribuer l'application sans autorisation ;",
            "tenter de décompiler, désassembler ou faire de la rétro‑ingénierie ;",
            "porter atteinte au bon fonctionnement ou à la sécurité du service.",
          ],
        },
      ],
    },
    {
      id: "your-data",
      title: "Vos contenus et votre responsabilité",
      blocks: [
        {
          t: "p",
          s: "Vous êtes seul responsable des informations que vous saisissez (exactitude des loyers, des locataires, des montants) et de l'usage que vous faites des reçus et documents générés.",
        },
        {
          t: "note",
          s: "Comme vos données sont stockées localement, pensez à réaliser des sauvegardes régulières. Nous ne pouvons pas récupérer des données perdues sur votre appareil.",
        },
      ],
    },
    {
      id: "availability",
      title: "Disponibilité du service",
      blocks: [
        {
          t: "p",
          s: "L'application est fournie « **en l'état** ». Nous nous efforçons de l'améliorer en continu, mais nous ne garantissons pas qu'elle soit exempte d'erreurs ni disponible sans interruption.",
        },
      ],
    },
    {
      id: "liability",
      title: "Limitation de responsabilité",
      blocks: [
        {
          t: "p",
          s: "Dans les limites autorisées par la loi, nous ne saurions être tenus responsables des dommages indirects, ni des pertes de données résultant d'une mauvaise utilisation, d'une panne de l'appareil ou de l'absence de sauvegarde.",
        },
      ],
    },
    {
      id: "ip",
      title: "Propriété intellectuelle",
      blocks: [
        {
          t: "p",
          s: "La marque **Diya**, son logo et les éléments de l'application (interface, textes, graphismes) sont protégés. Aucune reproduction n'est autorisée sans accord préalable.",
        },
      ],
    },
    {
      id: "termination",
      title: "Résiliation",
      blocks: [
        {
          t: "p",
          s: "Vous pouvez cesser d'utiliser l'application à tout moment en la désinstallant. Nous pouvons suspendre l'accès au service en cas de non‑respect des présentes conditions.",
        },
      ],
    },
    {
      id: "law",
      title: "Droit applicable",
      blocks: [
        {
          t: "p",
          s: "Les présentes conditions sont régies par le **droit togolais**. Tout litige relève de la compétence des juridictions de **Lomé (Togo)**, sous réserve des dispositions légales impératives.",
        },
      ],
    },
    {
      id: "changes",
      title: "Modifications",
      blocks: [
        {
          t: "p",
          s: "Nous pouvons mettre à jour ces conditions. La date de dernière mise à jour figure en haut de cette page ; l'usage continu de l'application vaut acceptation de la version en vigueur.",
        },
      ],
    },
    {
      id: "contact",
      title: "Nous contacter",
      blocks: [
        {
          t: "p",
          s: `Pour toute question sur ces conditions : e‑mail \`${EMAIL}\` · WhatsApp \`${PHONE}\`.`,
        },
      ],
    },
  ],
};

const en: LegalDoc = {
  metaTitle: "Terms & Conditions — Diya",
  metaDescription:
    "The terms that govern the use of the Diya rental-management app.",
  title: "Terms & Conditions",
  subtitle:
    "The rules that govern the use of the Diya app. Please read them before using it.",
  updatedLabel: "Last updated",
  updated: "September 15, 2026",
  tocLabel: "On this page",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of terms",
      blocks: [
        {
          t: "p",
          s: "By downloading or using Diya, you agree to these terms. If you do not agree with any of them, do not use the app.",
        },
      ],
    },
    {
      id: "service",
      title: "Description of the service",
      blocks: [
        {
          t: "p",
          s: "Diya is a mobile **rental-management** app that helps you track your properties, tenants, rents, expenses, bookings and receipts. It works **offline**, with data kept on your device.",
        },
      ],
    },
    {
      id: "license",
      title: "License to use",
      blocks: [
        {
          t: "p",
          s: "We grant you a **personal, limited, non-exclusive and non-transferable** right to use the app for your rental-management needs, subject to these terms.",
        },
      ],
    },
    {
      id: "acceptable",
      title: "Acceptable use",
      blocks: [
        { t: "p", s: "You agree not to:" },
        {
          t: "list",
          items: [
            "use the app for illegal or fraudulent purposes;",
            "resell, rent or redistribute the app without permission;",
            "attempt to decompile, disassemble or reverse-engineer it;",
            "interfere with the proper operation or security of the service.",
          ],
        },
      ],
    },
    {
      id: "your-data",
      title: "Your content and responsibility",
      blocks: [
        {
          t: "p",
          s: "You are solely responsible for the information you enter (accuracy of rents, tenants, amounts) and for how you use the receipts and documents generated.",
        },
        {
          t: "note",
          s: "Because your data is stored locally, make regular backups. We cannot recover data lost on your device.",
        },
      ],
    },
    {
      id: "availability",
      title: "Service availability",
      blocks: [
        {
          t: "p",
          s: "The app is provided “**as is**”. We strive to improve it continuously, but we do not guarantee that it is error-free or available without interruption.",
        },
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      blocks: [
        {
          t: "p",
          s: "To the extent permitted by law, we shall not be liable for indirect damages, nor for data loss resulting from misuse, device failure or lack of backup.",
        },
      ],
    },
    {
      id: "ip",
      title: "Intellectual property",
      blocks: [
        {
          t: "p",
          s: "The **Diya** name, its logo and the app's elements (interface, text, graphics) are protected. No reproduction is allowed without prior consent.",
        },
      ],
    },
    {
      id: "termination",
      title: "Termination",
      blocks: [
        {
          t: "p",
          s: "You may stop using the app at any time by uninstalling it. We may suspend access to the service in case of breach of these terms.",
        },
      ],
    },
    {
      id: "law",
      title: "Governing law",
      blocks: [
        {
          t: "p",
          s: "These terms are governed by the **laws of Togo**. Any dispute falls under the jurisdiction of the courts of **Lomé (Togo)**, subject to mandatory legal provisions.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes",
      blocks: [
        {
          t: "p",
          s: "We may update these terms. The last-updated date is shown at the top of this page; continued use of the app means you accept the version in force.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        {
          t: "p",
          s: `For any question about these terms: email \`${EMAIL}\` · WhatsApp \`${PHONE}\`.`,
        },
      ],
    },
  ],
};

export const terms = { fr, en } as const;
