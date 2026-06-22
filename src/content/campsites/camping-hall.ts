import type { CampsiteConfig } from "../types";

/**
 * Camping Hall in Tirol — honest, source-grounded config (raw/digest).
 * Bildarmer Lead: nur wenige echte Platz-/Ortsfotos vorhanden → schlanke,
 * ehrliche Belegung (Hero + CampingFeatures + Aktivitäten); Pillars/Galerie
 * bleiben leer und blenden sich sauber aus. Design fix: kein theme, Hero center.
 */
const IMG = "/campsites/camping-hall";

const campingHall: CampsiteConfig = {
  name: "Camping Hall in Tirol",
  shortName: "Camping Hall",
  slug: "camping-hall",
  ort: "Hall in Tirol",
  region: "Tirol",
  brandKind: "Camping & Wohnmobil-Park",
  regionLong: "Hall in Tirol · Region Hall-Wattens · Tirol",

  heroVariant: "center",

  claim: "Camping im Grünen — die Altstadt vor der Tür",
  claimEmphasis: "im Grünen",
  emailDetail: "eure Lage direkt neben dem Schwimmbad und nur Gehminuten von der Altstadt",
  intro:
    "Ruhig und doch zentral: 90 Stellplätze im Grünen, umrahmt vom Bergpanorama. Die historische Altstadt von Hall erreichst du in wenigen Gehminuten, Innsbruck in zehn Autominuten.",

  logo: { src: `${IMG}/logo-bf18b0f7d3.png`, alt: "Camping Hall in Tirol" },

  statement: {
    text: "Bei uns campst du im Grünen und stehst trotzdem in wenigen Minuten in der Haller Altstadt.",
    emphasis: "im Grünen",
  },

  // Bildarm: keine drei eigenständigen, motivtreuen Pillar-Fotos vorhanden → Block ehrlich leer.
  pillars: [],

  usps: [
    "90 Stellplätze im Grünen",
    "Über 10.000 m² Fläche",
    "Sanitäranlagen & WLAN",
    "Altstadt in Gehweite",
    "Ganzjähriger Wohnmobil-Park",
    "Innsbruck in 10 Minuten",
  ],

  trust: {
    heading: "Klein, fein — und mittendrin",
    headingEmphasis: "mittendrin",
    intro:
      "Ein ruhiger Platz im Grünen, der Komfort und kurze Wege verbindet: saubere Sanitäranlagen, freies WLAN, das Schwimmbad gleich nebenan und die historische Altstadt in wenigen Gehminuten.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: {
      src: `${IMG}/gallery-5915e8cedd.webp`,
      alt: "Hall in Tirol vor dem Karwendel — Luftaufnahme der Altstadt",
    },
  },

  camping: {
    heading: "Camping unter alten Bäumen",
    intro:
      "Natürlicher Grasboden, schattige Bäume und Platz auf über 10.000 m² — hier stellst du dich ins Grüne und hast Altstadt, Schwimmbad und Berge gleich vor der Tür.",
    features: [
      {
        title: "90 Stellplätze im Grünen",
        text: "Ebene Plätze auf Naturrasen, im Schatten alter Bäume und mit Bergpanorama ringsum — Camping mitten im Grünen.",
        image: {
          src: `${IMG}/gallery-34778d07c0.webp`,
          alt: "Stellplätze im Grünen am Camping Hall in Tirol im Abendlicht",
        },
      },
      {
        title: "Ganzjähriger Wohnmobil-Park",
        text: "Während der Campingplatz im Sommer öffnet, steht dir der Wohnmobil-Park das ganze Jahr über offen.",
        image: {
          src: `${IMG}/gallery-1dbcf81ee1.webp`,
          alt: "Wohnmobil-Park in Hall in Tirol vor herbstlichem Bergpanorama",
        },
      },
      {
        title: "Ruhig und doch zentral",
        text: "Die historische Altstadt von Hall erreichst du in wenigen Gehminuten, Innsbruck in rund zehn Autominuten.",
        image: {
          src: `${IMG}/gallery-ca72a4f99a.webp`,
          alt: "Blick vom Münzerturm über die Haller Altstadt mit Karwendel im Hintergrund",
        },
      },
    ],
  },

  aktivitaeten: {
    heading: "Hall in Tirol entdecken",
    intro:
      "Vom Platz aus bist du schnell mittendrin: die Münze Hall mit dem Münzerturm, die mittelalterliche Altstadt und das Eissportcenter liegen gleich um die Ecke.",
    items: [
      {
        title: "Münze Hall & Münzerturm",
        text: "Im Münzerturm wurde Münzgeschichte geschrieben — heute ein Wahrzeichen der Haller Altstadt.",
        image: {
          src: `${IMG}/gallery-63ea1c62b0.webp`,
          alt: "Münzerturm der Münze Hall vor dem Karwendel",
        },
      },
      {
        title: "Eislaufen im Eissportcenter",
        text: "Im Eissportcenter Hall drehst du auch im Winter deine Runden, nur wenige Minuten vom Platz.",
        image: {
          src: `${IMG}/activity-e9be9cc060.webp`,
          alt: "Eislaufplatz des Eissportcenters Hall vor der Altstadt",
        },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Hall in Tirol",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A12 Inntalautobahn, Abfahrt Hall-Mitte, sind es nur wenige Minuten bis zum Platz neben dem Schwimmbad.",
      },
      {
        title: "Mit der Bahn",
        text: "Vom Bahnhof Hall in Tirol erreichst du Altstadt und Campingplatz in wenigen Minuten.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Innsbruck liegt rund 15 Autominuten entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus Hall",
    headingEmphasis: "Hall",
    intro: "Ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "Mai bis September",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Hall",
    headingEmphasis: "deinen Platz",
    intro:
      "Sag uns Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Pro Nacht für 2 Personen inkl. Strom, zzgl. Ortstaxe.",
    highlight: {
      title: "Mitten in Hall",
      text: "Altstadt, Schwimmbad und Berge — alles in wenigen Minuten erreichbar.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 38, perExtraGuest: 9 },
      { id: "zelt", label: "Zeltplatz", perNight: 29, perExtraGuest: 9 },
      { id: "wohnmobil", label: "Wohnmobil-Park", perNight: 24 },
    ],
  },

  kontakt: {
    tel: "+43 5223 58 55",
    telHref: "tel:+4352235855",
    mail: "info@camping-hall.at",
    adresse: "Scheidensteinstraße 24 · 6060 Hall in Tirol · Tirol",
    coords: { lat: 47.284724, lng: 11.496112 },
  },

  languages: ["DE", "EN", "IT", "FR", "NL"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Erleben", href: "#aktivitaeten" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
  ],
};

export default campingHall;
