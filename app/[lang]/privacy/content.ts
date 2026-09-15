import type { LegalDoc } from "@/components/sections/LegalPage";

const EMAIL = "wearekarfi@gmail.com";
const PHONE = "+228 70 40 74 70";

const fr: LegalDoc = {
  metaTitle: "Politique de confidentialité — Diya",
  metaDescription:
    "Comment Diya traite vos données : une application de gestion locative hors‑ligne où vos informations restent sur votre appareil.",
  title: "Politique de confidentialité",
  subtitle:
    "Diya est conçue hors‑ligne : vos données locatives restent sur votre appareil. Voici, en clair, ce que cela implique.",
  updatedLabel: "Dernière mise à jour",
  updated: "15 septembre 2026",
  tocLabel: "Sur cette page",
  sections: [
    {
      id: "summary",
      title: "En bref",
      blocks: [
        {
          t: "list",
          items: [
            "Diya fonctionne **hors‑ligne** : vos biens, locataires, loyers et reçus sont enregistrés **sur votre appareil**, pas sur nos serveurs.",
            "**Aucun compte n'est requis** pour utiliser l'application.",
            "Nous n'utilisons **ni pistage ni revente** de vos données.",
          ],
        },
        {
          t: "note",
          s: "Cette page décrit nos pratiques actuelles. Elle évoluera si l'application ajoute de nouvelles fonctionnalités (par exemple une sauvegarde en ligne optionnelle).",
        },
      ],
    },
    {
      id: "data-app",
      title: "Vos données dans l'application",
      blocks: [
        {
          t: "p",
          s: "Les informations que vous saisissez dans Diya — biens, unités, locataires, loyers, dépenses, réservations et reçus — sont stockées **localement** sur votre téléphone (base de données de l'appareil).",
        },
        {
          t: "p",
          s: "Nous n'avons **pas accès** à ces données : elles ne sont pas transmises à nos serveurs et nous ne pouvons pas les consulter.",
        },
        {
          t: "list",
          items: [
            "Vous restez seul responsable de la confidentialité de votre appareil (verrouillage, code, etc.).",
            "Si vous exportez ou partagez un reçu, c'est vous qui choisissez le destinataire.",
          ],
        },
      ],
    },
    {
      id: "site",
      title: "Le site diya",
      blocks: [
        {
          t: "p",
          s: "Ce site vitrine ne dépose **aucun cookie de pistage** et n'utilise **aucun outil d'analyse d'audience**.",
        },
        {
          t: "p",
          s: "Seule votre préférence d'apparence (thème clair/sombre) est conservée localement dans votre navigateur pour améliorer votre confort de lecture. Elle ne nous est jamais transmise.",
        },
      ],
    },
    {
      id: "contact-data",
      title: "Lorsque vous nous contactez",
      blocks: [
        {
          t: "p",
          s: `Si vous nous écrivez par e‑mail (\`${EMAIL}\`) ou par WhatsApp (\`${PHONE}\`), nous recevons les informations que vous choisissez de nous communiquer. Nous les utilisons **uniquement** pour répondre à votre demande et assurer le support.`,
        },
      ],
    },
    {
      id: "sharing",
      title: "Partage avec des tiers",
      blocks: [
        {
          t: "p",
          s: "Nous ne vendons pas et ne louons pas vos données. L'application est distribuée via **Google Play**, dont les propres conditions et politique de confidentialité s'appliquent au téléchargement.",
        },
      ],
    },
    {
      id: "retention",
      title: "Conservation et suppression",
      blocks: [
        {
          t: "p",
          s: "Vos données de l'application vivent sur votre appareil aussi longtemps que vous les conservez. **Désinstaller l'application supprime les données locales** correspondantes.",
        },
        {
          t: "warn",
          s: "La désinstallation étant définitive pour les données locales, pensez à effectuer une sauvegarde avant si vous souhaitez les conserver.",
        },
        {
          t: "p",
          s: "Les messages que vous nous envoyez sont conservés le temps nécessaire au traitement de votre demande.",
        },
      ],
    },
    {
      id: "security",
      title: "Sécurité",
      blocks: [
        {
          t: "p",
          s: "Comme vos données restent sur votre appareil, leur protection dépend surtout des mesures de sécurité de celui‑ci. Nous vous recommandons d'activer le verrouillage de l'écran et de maintenir votre système à jour.",
        },
      ],
    },
    {
      id: "children",
      title: "Mineurs",
      blocks: [
        {
          t: "p",
          s: "Diya s'adresse à des propriétaires et gestionnaires ; le service n'est pas destiné aux personnes mineures.",
        },
      ],
    },
    {
      id: "rights",
      title: "Vos droits",
      blocks: [
        {
          t: "p",
          s: "Comme vos données restent sur votre appareil, vous pouvez à tout moment les consulter, les modifier ou les supprimer directement dans l'application. Pour toute question relative à cette politique ou à vos droits, contactez‑nous (voir plus bas).",
        },
      ],
    },
    {
      id: "changes",
      title: "Modifications de cette politique",
      blocks: [
        {
          t: "p",
          s: "Nous pouvons mettre à jour cette politique pour refléter des évolutions de l'application ou de la réglementation. La date de dernière mise à jour figure en haut de cette page.",
        },
      ],
    },
    {
      id: "contact",
      title: "Nous contacter",
      blocks: [
        {
          t: "p",
          s: `Pour toute question sur cette politique de confidentialité : e‑mail \`${EMAIL}\` · WhatsApp \`${PHONE}\`.`,
        },
      ],
    },
  ],
};

const en: LegalDoc = {
  metaTitle: "Privacy Policy — Diya",
  metaDescription:
    "How Diya handles your data: an offline rental-management app where your information stays on your device.",
  title: "Privacy Policy",
  subtitle:
    "Diya is built offline: your rental data stays on your device. Here is, in plain terms, what that means.",
  updatedLabel: "Last updated",
  updated: "September 15, 2026",
  tocLabel: "On this page",
  sections: [
    {
      id: "summary",
      title: "In short",
      blocks: [
        {
          t: "list",
          items: [
            "Diya works **offline**: your properties, tenants, rents and receipts are stored **on your device**, not on our servers.",
            "**No account is required** to use the app.",
            "We do **not** track or sell your data.",
          ],
        },
        {
          t: "note",
          s: "This page describes our current practices. It will evolve if the app adds new features (for example an optional online backup).",
        },
      ],
    },
    {
      id: "data-app",
      title: "Your data in the app",
      blocks: [
        {
          t: "p",
          s: "The information you enter in Diya — properties, units, tenants, rents, expenses, bookings and receipts — is stored **locally** on your phone (on-device database).",
        },
        {
          t: "p",
          s: "We have **no access** to this data: it is never sent to our servers and we cannot view it.",
        },
        {
          t: "list",
          items: [
            "You remain responsible for the security of your device (screen lock, passcode, etc.).",
            "When you export or share a receipt, you choose the recipient.",
          ],
        },
      ],
    },
    {
      id: "site",
      title: "The diya website",
      blocks: [
        {
          t: "p",
          s: "This marketing site sets **no tracking cookies** and uses **no analytics** tools.",
        },
        {
          t: "p",
          s: "Only your appearance preference (light/dark theme) is stored locally in your browser for reading comfort. It is never sent to us.",
        },
      ],
    },
    {
      id: "contact-data",
      title: "When you contact us",
      blocks: [
        {
          t: "p",
          s: `If you reach out by email (\`${EMAIL}\`) or WhatsApp (\`${PHONE}\`), we receive the information you choose to share. We use it **only** to answer your request and provide support.`,
        },
      ],
    },
    {
      id: "sharing",
      title: "Sharing with third parties",
      blocks: [
        {
          t: "p",
          s: "We do not sell or rent your data. The app is distributed through **Google Play**, whose own terms and privacy policy apply to the download.",
        },
      ],
    },
    {
      id: "retention",
      title: "Retention and deletion",
      blocks: [
        {
          t: "p",
          s: "Your app data lives on your device for as long as you keep it. **Uninstalling the app deletes the corresponding local data.**",
        },
        {
          t: "warn",
          s: "Because deleting local data is permanent, make a backup first if you want to keep it.",
        },
        {
          t: "p",
          s: "Messages you send us are kept for as long as needed to handle your request.",
        },
      ],
    },
    {
      id: "security",
      title: "Security",
      blocks: [
        {
          t: "p",
          s: "Since your data stays on your device, its protection mostly depends on that device's security measures. We recommend enabling the screen lock and keeping your system up to date.",
        },
      ],
    },
    {
      id: "children",
      title: "Minors",
      blocks: [
        {
          t: "p",
          s: "Diya is intended for property owners and managers; the service is not directed at minors.",
        },
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      blocks: [
        {
          t: "p",
          s: "Because your data stays on your device, you can view, edit or delete it at any time directly in the app. For any question about this policy or your rights, contact us (see below).",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        {
          t: "p",
          s: "We may update this policy to reflect changes to the app or to the law. The last-updated date is shown at the top of this page.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        {
          t: "p",
          s: `For any question about this privacy policy: email \`${EMAIL}\` · WhatsApp \`${PHONE}\`.`,
        },
      ],
    },
  ],
};

export const privacy = { fr, en } as const;
