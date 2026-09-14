import "server-only";

export type DocBlock =
  | { t: "h3"; s: string }
  | { t: "p"; s: string }
  | { t: "steps"; items: string[] }
  | { t: "tip" | "note" | "warn"; s: string }
  | { t: "shot"; s: string }
  | { t: "qa"; q: string; a: string };

export type DocSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  blocks: DocBlock[];
};

export type DocContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  tocLabel: string;
  offline: string;
  sections: DocSection[];
};

// Les chemins de menu et libellés de boutons sont entre `backticks` → rendus en puce mono.
const fr: DocContent = {
  metaTitle: "Documentation Diya — Guide d'utilisation",
  metaDescription:
    "Guide d'utilisation de Diya : biens, logements, locataires, baux, loyers, réservations, dépenses, sauvegarde et sécurité.",
  title: "Guide d'utilisation",
  subtitle:
    "Tout ce qu'il faut pour prendre en main Diya, écran par écran — de la création de votre compte à la sauvegarde de vos données.",
  tocLabel: "Sommaire",
  offline: "100 % hors-ligne",
  sections: [
    {
      id: "premiers-pas",
      eyebrow: "Démarrer",
      title: "Premiers pas",
      intro:
        "Diya fonctionne entièrement hors-ligne : tout est enregistré sur votre téléphone. Quelques minutes suffisent pour créer votre compte et sécuriser l'application.",
      blocks: [
        { t: "h3", s: "Créer votre compte" },
        {
          t: "steps",
          items: [
            "À la première ouverture, parcourez l'écran d'accueil (présentation).",
            "Créez votre compte : nom du bailleur ou de la structure.",
            "Choisissez votre devise — `FCFA` par défaut, adaptée à l'Afrique de l'Ouest.",
          ],
        },
        { t: "shot", s: "Onboarding & création de compte" },
        { t: "h3", s: "Sécuriser l'application" },
        {
          t: "steps",
          items: [
            "Définissez un code PIN.",
            "Activez le déverrouillage par empreinte (biométrie) si votre téléphone le permet.",
          ],
        },
        { t: "h3", s: "L'écran d'accueil" },
        {
          t: "p",
          s: "L'accueil réunit l'essentiel : la carte « Revenu du mois », le bouton `+` (actions rapides) et les rappels de loyers en retard.",
        },
        {
          t: "tip",
          s: "Aucune connexion Internet n'est nécessaire — vos données restent disponibles à tout moment, même sans réseau.",
        },
      ],
    },
    {
      id: "biens-logements",
      eyebrow: "Patrimoine",
      title: "Biens & logements",
      intro:
        "Un bien (immeuble ou propriété) contient un ou plusieurs logements (appartements, chambres, villas, boutiques…).",
      blocks: [
        { t: "h3", s: "Ajouter un bien" },
        {
          t: "steps",
          items: [
            "Touchez `+` › `Ajouter un bien`.",
            "Renseignez le nom, le type, la ville et l'adresse.",
            "Enregistrez.",
          ],
        },
        { t: "shot", s: "Formulaire d'un bien" },
        { t: "h3", s: "Ajouter un logement" },
        {
          t: "steps",
          items: [
            "Ouvrez un bien, puis ajoutez-y un logement.",
            "Indiquez le numéro / nom et le type (Studio, Appartement 2 pièces, Villa, Boutique…).",
            "Ajoutez les caractéristiques : étage, pièces, chambres, salles de bain, équipements (meublé, cuisine, wifi, balcon, compteurs).",
            "Renseignez le loyer conseillé, la caution et l'avance.",
          ],
        },
        { t: "shot", s: "Formulaire d'un logement" },
        { t: "h3", s: "Mode du logement" },
        {
          t: "p",
          s: "Chaque logement est en mode Bail (location classique) ou en mode Réservation (court séjour). Voir la section Réservations.",
        },
        {
          t: "note",
          s: "La fiche d'un logement affiche ses caractéristiques en cartes, le loyer et la caution, et l'occupant s'il y a un bail actif. Les statuts (Vacant, Occupé, Réservé, En travaux) se mettent à jour automatiquement.",
        },
      ],
    },
    {
      id: "locataires",
      eyebrow: "Contacts",
      title: "Locataires",
      intro: "Centralisez vos locataires et toutes leurs coordonnées.",
      blocks: [
        { t: "h3", s: "Ajouter un locataire" },
        {
          t: "steps",
          items: [
            "Touchez `+` › `Ajouter un locataire`.",
            "Renseignez le nom, le téléphone, un second numéro, l'e-mail, la pièce d'identité et le contact d'urgence.",
          ],
        },
        { t: "h3", s: "La fiche d'un locataire" },
        {
          t: "p",
          s: "Depuis la fiche, une section Actions vous permet d'Appeler, d'écrire sur WhatsApp, de voir les Paiements et les Dépenses liées. Vous y trouvez aussi la location ou réservation en cours et l'historique des paiements.",
        },
        { t: "shot", s: "Fiche d'un locataire" },
        {
          t: "tip",
          s: "Un appui sur WhatsApp ouvre une conversation déjà pré-remplie avec le locataire.",
        },
      ],
    },
    {
      id: "baux-loyers",
      eyebrow: "Location",
      title: "Baux & loyers",
      intro:
        "Le cœur de la gestion : créer un bail, encaisser le loyer et partager la quittance.",
      blocks: [
        { t: "h3", s: "Créer un bail" },
        {
          t: "steps",
          items: [
            "Touchez `+` › `Créer un bail` (ou depuis un logement).",
            "Choisissez le locataire.",
            "Renseignez le loyer, la caution, l'avance et le jour d'échéance.",
            "Ajoutez les charges (eau, électricité, wifi, entretien) si besoin.",
            "Enregistrez : vous arrivez sur la quittance à encaisser.",
          ],
        },
        { t: "shot", s: "Création d'un bail" },
        { t: "h3", s: "Encaisser un loyer" },
        {
          t: "steps",
          items: [
            "Depuis l'onglet `Paiement` ou le logement concerné.",
            "Saisissez le montant et validez.",
            "Le paiement alimente votre caisse.",
          ],
        },
        { t: "h3", s: "Quittance & reçu" },
        {
          t: "steps",
          items: [
            "Après l'encaissement, partagez la quittance en `PDF` ou en `image`.",
            "Envoyez-la par WhatsApp, par e-mail, ou imprimez-la.",
          ],
        },
        {
          t: "p",
          s: "Vous pouvez aussi scanner le QR d'un reçu pour vérifier son authenticité.",
        },
        { t: "shot", s: "Quittance PDF" },
        { t: "h3", s: "Relancer les retards" },
        {
          t: "steps",
          items: [
            "Sur l'accueil, touchez `Rappel`.",
            "La liste des locataires en retard s'affiche.",
            "Touchez un locataire pour envoyer une relance WhatsApp pré-remplie.",
          ],
        },
        {
          t: "note",
          s: "Les quittances restent fidèles à l'impression — accents et symbole FCFA corrects.",
        },
      ],
    },
    {
      id: "reservations",
      eyebrow: "Court séjour",
      title: "Réservations",
      intro:
        "Pour les hôtels et les meublés — facturation à l'heure, au jour ou au mois, sans bail.",
      blocks: [
        { t: "h3", s: "Activer le mode Réservation" },
        {
          t: "steps",
          items: [
            "Dans le logement, choisissez le mode `Réservation`.",
            "Renseignez les tarifs par heure, par jour et/ou par mois.",
          ],
        },
        { t: "h3", s: "Créer une réservation" },
        {
          t: "steps",
          items: [
            "Action rapide `Réservation` (accueil), `+` › `Créer une réservation`, ou `Réserver` sur un logement en mode réservation.",
            "Choisissez le locataire, la base (heure / jour / mois) et les dates de début et de fin.",
            "Le montant se calcule automatiquement — validez.",
          ],
        },
        { t: "shot", s: "Formulaire de réservation" },
        { t: "h3", s: "Suivi d'une réservation" },
        {
          t: "p",
          s: "Les statuts s'enchaînent : Réservée → Arrivée (check-in) → Départ (check-out), ou Annulée. Encaissez l'acompte puis le solde, et générez un reçu.",
        },
        {
          t: "warn",
          s: "Pas de double réservation : si les dates chevauchent une réservation existante du même logement, la création est bloquée.",
        },
      ],
    },
    {
      id: "depenses",
      eyebrow: "Finances",
      title: "Dépenses & trésorerie",
      intro: "Suivez chaque dépense et gardez une caisse toujours juste, par bien.",
      blocks: [
        { t: "h3", s: "Ajouter une dépense" },
        {
          t: "steps",
          items: [
            "Touchez `+` › `Ajouter une dépense`.",
            "Indiquez le bien ou le logement concerné, la catégorie, le montant et la date.",
          ],
        },
        {
          t: "p",
          s: "Une dépense réglée par le bailleur crée automatiquement une sortie de caisse.",
        },
        { t: "h3", s: "Trésorerie" },
        {
          t: "p",
          s: "La caisse consolide les entrées (loyers, réservations) et les sorties (dépenses). La carte « Revenu du mois » de l'accueil résume vos rentrées et leur variation.",
        },
        { t: "shot", s: "Trésorerie / caisse" },
      ],
    },
    {
      id: "statistiques",
      eyebrow: "Pilotage",
      title: "Statistiques",
      intro: "Suivez la performance de votre patrimoine en un coup d'œil.",
      blocks: [
        {
          t: "p",
          s: "Retrouvez le revenu, le taux d'occupation, les dépenses par bien et l'évolution mensuelle pour prendre de meilleures décisions.",
        },
        { t: "shot", s: "Écran Statistiques" },
      ],
    },
    {
      id: "sauvegarde",
      eyebrow: "Protection",
      title: "Sauvegarde & sécurité",
      intro:
        "Vos données sont chiffrées sur votre téléphone. Sauvegardez-les pour les retrouver sur un nouvel appareil.",
      blocks: [
        { t: "h3", s: "Sauvegarde Google Drive" },
        {
          t: "steps",
          items: [
            "Allez dans `Profil` › `Données & sauvegardes` › `Google Drive`.",
            "Touchez `Connecter Google Drive`.",
            "La sauvegarde est automatique et sans mot de passe (la clé est gérée pour vous).",
            "Sur un nouvel appareil, utilisez `Restaurer depuis Drive`.",
          ],
        },
        { t: "shot", s: "Sauvegarde Google Drive" },
        { t: "h3", s: "Sauvegarde par e-mail" },
        {
          t: "p",
          s: "Vous pouvez aussi envoyer une copie par Gmail, protégée par un mot de passe que vous choisissez.",
        },
        { t: "h3", s: "Verrouillage" },
        {
          t: "steps",
          items: [
            "Protégez l'application par un code PIN et le déverrouillage par empreinte.",
            "Changez votre PIN dans `Profil`.",
          ],
        },
        {
          t: "note",
          s: "Vos données ne quittent votre téléphone que si vous le décidez.",
        },
      ],
    },
    {
      id: "reglages",
      eyebrow: "Préférences",
      title: "Réglages",
      intro: "Personnalisez Diya selon vos besoins.",
      blocks: [
        {
          t: "steps",
          items: [
            "Devise : `Profil` › `Préférences` › `Devise`.",
            "Langue : Français ou Anglais.",
            "Thème : clair ou sombre.",
            "Profil : nom, photo du bailleur.",
            "Support & FAQ : contactez l'équipe et consultez les questions fréquentes.",
          ],
        },
      ],
    },
    {
      id: "faq",
      eyebrow: "Aide",
      title: "Questions fréquentes",
      intro: "Les réponses aux questions les plus courantes.",
      blocks: [
        {
          t: "qa",
          q: "Diya fonctionne-t-il sans connexion Internet ?",
          a: "Oui. Diya est 100 % hors-ligne : tout est enregistré sur votre téléphone et reste disponible à tout moment.",
        },
        {
          t: "qa",
          q: "Mes données sont-elles en sécurité ?",
          a: "Votre base est chiffrée et protégée par un verrouillage biométrique. Vos données ne quittent jamais votre appareil sans votre accord.",
        },
        {
          t: "qa",
          q: "Puis-je gérer plusieurs biens et logements ?",
          a: "Oui, autant que vous le souhaitez : appartements, maisons, hôtels, meublés, commerces et bureaux.",
        },
        {
          t: "qa",
          q: "Dans quelle devise puis-je facturer ?",
          a: "En FCFA par défaut, adaptée à l'Afrique de l'Ouest, avec des reçus lisibles et fidèles à l'impression.",
        },
        {
          t: "qa",
          q: "Comment sauvegarder mes données ?",
          a: "Diya sauvegarde automatiquement sur votre Google Drive, sans mot de passe. Vous pouvez restaurer vos données sur un nouvel appareil.",
        },
      ],
    },
  ],
};

const en: DocContent = {
  metaTitle: "Diya Documentation — User Guide",
  metaDescription:
    "Diya user guide: properties, units, tenants, leases, rent, bookings, expenses, backup and security.",
  title: "User guide",
  subtitle:
    "Everything you need to get started with Diya, screen by screen — from creating your account to backing up your data.",
  tocLabel: "Contents",
  offline: "100% offline",
  sections: [
    {
      id: "premiers-pas",
      eyebrow: "Get started",
      title: "Getting started",
      intro:
        "Diya works fully offline: everything is saved on your phone. It only takes a few minutes to create your account and secure the app.",
      blocks: [
        { t: "h3", s: "Create your account" },
        {
          t: "steps",
          items: [
            "On first launch, browse the welcome screens (overview).",
            "Create your account: landlord or organization name.",
            "Choose your currency — `CFA` by default, tailored to West Africa.",
          ],
        },
        { t: "shot", s: "Onboarding & account creation" },
        { t: "h3", s: "Secure the app" },
        {
          t: "steps",
          items: [
            "Set a PIN code.",
            "Turn on fingerprint unlock (biometrics) if your phone supports it.",
          ],
        },
        { t: "h3", s: "The home screen" },
        {
          t: "p",
          s: "Home brings together the essentials: the “This month's revenue” card, the `+` button (quick actions) and overdue-rent reminders.",
        },
        {
          t: "tip",
          s: "No Internet connection is required — your data stays available at any time, even with no network.",
        },
      ],
    },
    {
      id: "biens-logements",
      eyebrow: "Portfolio",
      title: "Properties & units",
      intro:
        "A property (building) holds one or more units (apartments, rooms, villas, shops…).",
      blocks: [
        { t: "h3", s: "Add a property" },
        {
          t: "steps",
          items: [
            "Tap `+` › `Add a property`.",
            "Enter the name, type, city and address.",
            "Save.",
          ],
        },
        { t: "shot", s: "Property form" },
        { t: "h3", s: "Add a unit" },
        {
          t: "steps",
          items: [
            "Open a property, then add a unit to it.",
            "Enter the number / name and the type (Studio, 2-room apartment, Villa, Shop…).",
            "Add the characteristics: floor, rooms, bedrooms, bathrooms, amenities (furnished, kitchen, wifi, balcony, meters).",
            "Enter the suggested rent, deposit and advance.",
          ],
        },
        { t: "shot", s: "Unit form" },
        { t: "h3", s: "Unit mode" },
        {
          t: "p",
          s: "Each unit is in Lease mode (classic rental) or Booking mode (short stay). See the Bookings section.",
        },
        {
          t: "note",
          s: "A unit's detail page shows its characteristics as cards, the rent and deposit, and the occupant if there is an active lease. Statuses (Vacant, Occupied, Reserved, Under works) update automatically.",
        },
      ],
    },
    {
      id: "locataires",
      eyebrow: "Contacts",
      title: "Tenants",
      intro: "Keep all your tenants and their contact details in one place.",
      blocks: [
        { t: "h3", s: "Add a tenant" },
        {
          t: "steps",
          items: [
            "Tap `+` › `Add a tenant`.",
            "Enter the name, phone, a secondary number, email, ID document and emergency contact.",
          ],
        },
        { t: "h3", s: "A tenant's detail page" },
        {
          t: "p",
          s: "From the page, an Actions section lets you Call, message on WhatsApp, and view Payments and linked Expenses. You also find the current lease or booking and the payment history.",
        },
        { t: "shot", s: "Tenant detail page" },
        {
          t: "tip",
          s: "Tapping WhatsApp opens a conversation already pre-filled with the tenant.",
        },
      ],
    },
    {
      id: "baux-loyers",
      eyebrow: "Renting",
      title: "Leases & rent",
      intro:
        "The core of management: create a lease, collect the rent and share the receipt.",
      blocks: [
        { t: "h3", s: "Create a lease" },
        {
          t: "steps",
          items: [
            "Tap `+` › `Create a lease` (or from a unit).",
            "Pick the tenant.",
            "Enter the rent, deposit, advance and due day.",
            "Add the charges (water, electricity, wifi, maintenance) if needed.",
            "Save: you land on the receipt to collect.",
          ],
        },
        { t: "shot", s: "Creating a lease" },
        { t: "h3", s: "Collect rent" },
        {
          t: "steps",
          items: [
            "From the `Payment` tab or the relevant unit.",
            "Enter the amount and confirm.",
            "The payment feeds your cash box.",
          ],
        },
        { t: "h3", s: "Receipt" },
        {
          t: "steps",
          items: [
            "After collecting, share the receipt as a `PDF` or `image`.",
            "Send it via WhatsApp, email, or print it.",
          ],
        },
        {
          t: "p",
          s: "You can also scan a receipt's QR code to verify its authenticity.",
        },
        { t: "shot", s: "PDF receipt" },
        { t: "h3", s: "Chase overdue rent" },
        {
          t: "steps",
          items: [
            "On home, tap `Reminder`.",
            "The list of overdue tenants appears.",
            "Tap a tenant to send a pre-filled WhatsApp reminder.",
          ],
        },
        {
          t: "note",
          s: "Receipts stay faithful when printed — accents and the CFA symbol render correctly.",
        },
      ],
    },
    {
      id: "reservations",
      eyebrow: "Short stay",
      title: "Bookings",
      intro:
        "For hotels and furnished units — billing by the hour, day or month, without a lease.",
      blocks: [
        { t: "h3", s: "Turn on Booking mode" },
        {
          t: "steps",
          items: [
            "On the unit, choose the `Booking` mode.",
            "Enter the hourly, daily and/or monthly rates.",
          ],
        },
        { t: "h3", s: "Create a booking" },
        {
          t: "steps",
          items: [
            "The `Booking` quick action (home), `+` › `Create a booking`, or `Book` on a unit in booking mode.",
            "Pick the tenant, the basis (hour / day / month) and the start and end dates.",
            "The total is computed automatically — confirm.",
          ],
        },
        { t: "shot", s: "Booking form" },
        { t: "h3", s: "Tracking a booking" },
        {
          t: "p",
          s: "Statuses flow: Reserved → Checked in → Checked out, or Cancelled. Collect the deposit then the balance, and generate a receipt.",
        },
        {
          t: "warn",
          s: "No double bookings: if the dates overlap an existing booking of the same unit, creation is blocked.",
        },
      ],
    },
    {
      id: "depenses",
      eyebrow: "Finances",
      title: "Expenses & cash flow",
      intro: "Track every expense and keep an always-accurate cash box, per property.",
      blocks: [
        { t: "h3", s: "Add an expense" },
        {
          t: "steps",
          items: [
            "Tap `+` › `Add an expense`.",
            "Set the property or unit, the category, the amount and the date.",
          ],
        },
        {
          t: "p",
          s: "An expense paid by the landlord automatically creates a cash-out entry.",
        },
        { t: "h3", s: "Cash flow" },
        {
          t: "p",
          s: "The cash box consolidates money in (rent, bookings) and money out (expenses). The “This month's revenue” card on home sums up your income and its change.",
        },
        { t: "shot", s: "Cash flow / cash box" },
      ],
    },
    {
      id: "statistiques",
      eyebrow: "Insights",
      title: "Statistics",
      intro: "Track your portfolio's performance at a glance.",
      blocks: [
        {
          t: "p",
          s: "Find revenue, occupancy rate, expenses per property and the monthly trend to make better decisions.",
        },
        { t: "shot", s: "Statistics screen" },
      ],
    },
    {
      id: "sauvegarde",
      eyebrow: "Protection",
      title: "Backup & security",
      intro:
        "Your data is encrypted on your phone. Back it up to find it again on a new device.",
      blocks: [
        { t: "h3", s: "Google Drive backup" },
        {
          t: "steps",
          items: [
            "Go to `Profile` › `Data & backups` › `Google Drive`.",
            "Tap `Connect Google Drive`.",
            "Backup is automatic and password-free (the key is managed for you).",
            "On a new device, use `Restore from Drive`.",
          ],
        },
        { t: "shot", s: "Google Drive backup" },
        { t: "h3", s: "Email backup" },
        {
          t: "p",
          s: "You can also send a copy via Gmail, protected by a password you choose.",
        },
        { t: "h3", s: "App lock" },
        {
          t: "steps",
          items: [
            "Protect the app with a PIN and fingerprint unlock.",
            "Change your PIN in `Profile`.",
          ],
        },
        {
          t: "note",
          s: "Your data only leaves your phone if you decide so.",
        },
      ],
    },
    {
      id: "reglages",
      eyebrow: "Preferences",
      title: "Settings",
      intro: "Tailor Diya to your needs.",
      blocks: [
        {
          t: "steps",
          items: [
            "Currency: `Profile` › `Preferences` › `Currency`.",
            "Language: French or English.",
            "Theme: light or dark.",
            "Profile: landlord name and photo.",
            "Support & FAQ: contact the team and read frequent questions.",
          ],
        },
      ],
    },
    {
      id: "faq",
      eyebrow: "Help",
      title: "Frequent questions",
      intro: "Answers to the most common questions.",
      blocks: [
        {
          t: "qa",
          q: "Does Diya work without an Internet connection?",
          a: "Yes. Diya is 100% offline: everything is saved on your phone and stays available at any time.",
        },
        {
          t: "qa",
          q: "Is my data safe?",
          a: "Your database is encrypted and protected by a biometric lock. Your data never leaves your device without your consent.",
        },
        {
          t: "qa",
          q: "Can I manage several properties and units?",
          a: "Yes, as many as you like: apartments, houses, hotels, furnished units, shops and offices.",
        },
        {
          t: "qa",
          q: "Which currency can I bill in?",
          a: "In CFA francs by default, tailored to West Africa, with clear receipts that stay faithful when printed.",
        },
        {
          t: "qa",
          q: "How do I back up my data?",
          a: "Diya backs up automatically to your Google Drive, with no password. You can restore your data on a new device.",
        },
      ],
    },
  ],
};

export const docs = { fr, en } as const;
