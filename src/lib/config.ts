// ─────────────────────────────────────────────────────────────────────────────
// Site Configuration — update all values here, nothing is hardcoded in components
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "IM Properties",
  tagline: "Making Affordable Housing a Reality",
  description:
    "IM Properties develops secure, well-located residential estates across Port Harcourt. Our flagship estate, City of Angels, offers affordable luxury living with Certificate of Occupancy title.",
  url: "https://www.improperties.ng",
  phone: {
    primary: "+2349088888313",
    primaryDisplay: "+234 908 888 8313",
    secondary: "+2347045543327",
    secondaryDisplay: "+234 704 554 3327",
  },
  whatsapp: {
    number: "2349088888313", // no + prefix for wa.me URL
    defaultMessage:
      "Hello IM Properties, I'm interested in City of Angels Estate. Please send me more details.",
  },
  email: "info@improperties.ng",
  address:
    "Vision Mall, Opposite The Spring of Life Church, Close to Jodii Filling Station, SARS Road, Port Harcourt, Rivers State.",
  social: {
    instagram: "https://www.instagram.com/improperties.ng",
    facebook: "https://www.facebook.com/improperties.ng",
  },
} as const;

export const ESTATE = {
  name: "City of Angels",
  tagline: "Affordable Luxury. Secured Title. Prime Location.",
  location: "Obiri-Ikwerre, Airport Road, Port Harcourt",
  description:
    "A landmark residential estate designed for affordable luxury living within a secure and well-planned environment. Located along the rapidly developing Obiri-Ikwerre Airport Road corridor — offering excellent connectivity and long-term investment security.",
  video: "/assets/estate.mov",
  videoPoster: "", // replace with a poster image path e.g. "/assets/estate-poster.jpg"
  titleDocument: "Certificate of Occupancy (C of O)",
  deposit: "20% Initial Deposit",
  mortgage: true,
  mortgagePartner: "Federal Mortgage Bank of Nigeria",
  highlights: [
    {
      label: "Strategic Location",
      detail: "Obiri-Ikwerre, Airport Road — rapidly developing corridor",
    },
    {
      label: "Secured Title",
      detail: "Certificate of Occupancy (C of O) on all units",
    },
    {
      label: "Flexible Payments",
      detail: "Start with 20% deposit, with mortgage options available",
    },
    {
      label: "Mortgage Partner",
      detail: "In partnership with Federal Mortgage Bank of Nigeria",
    },
    {
      label: "Modern Design",
      detail: "Contemporary architecture with premium finishes",
    },
    {
      label: "Investment Value",
      detail: "Long-term appreciation in a high-growth location",
    },
  ],
} as const;

export interface PropertyUnit {
  id: string;
  name: string;
  description: string;
  priceShell?: string;
  priceFull?: string;
  priceSingle?: string;
  finishOptions: ("shell" | "full")[];
  bedrooms: number;
  type: string;
  whatsappMessage: string;
}

export const PROPERTIES: PropertyUnit[] = [
  {
    id: "4br-duplex",
    name: "4-Bedroom Duplex",
    type: "Duplex",
    bedrooms: 4,
    description:
      "A spacious double-storey duplex finished to the highest standard. Ideal for families seeking space, comfort, and a premium address.",
    priceSingle: "₦135,000,000",
    finishOptions: ["full"],
    whatsappMessage:
      "Hello IM Properties, I'm interested in the 4-Bedroom Duplex at City of Angels Estate (₦135M). Please send me more details.",
  },
  {
    id: "4br-terrace",
    name: "4-Bedroom Terrace",
    type: "Terrace",
    bedrooms: 4,
    description:
      "A well-proportioned terrace house with generous living areas, available in shell or fully finished options.",
    priceShell: "₦95,000,000",
    priceFull: "₦115,000,000",
    finishOptions: ["shell", "full"],
    whatsappMessage:
      "Hello IM Properties, I'm interested in the 4-Bedroom Terrace at City of Angels Estate. Please send me pricing and availability details.",
  },
  {
    id: "3br-terrace",
    name: "3-Bedroom Terrace",
    type: "Terrace",
    bedrooms: 3,
    description:
      "A smart mid-size terrace ideal for growing families. Available shell-finished for buyers who want to personalise their interiors.",
    priceShell: "₦78,000,000",
    priceFull: "₦98,000,000",
    finishOptions: ["shell", "full"],
    whatsappMessage:
      "Hello IM Properties, I'm interested in the 3-Bedroom Terrace at City of Angels Estate. Please send me pricing and availability details.",
  },
  {
    id: "2br-terrace",
    name: "2-Bedroom Terrace",
    type: "Terrace",
    bedrooms: 2,
    description:
      "An efficient and stylish terrace perfect for young professionals and couples. Excellent entry point into premium estate living.",
    priceShell: "₦60,000,000",
    priceFull: "₦79,000,000",
    finishOptions: ["shell", "full"],
    whatsappMessage:
      "Hello IM Properties, I'm interested in the 2-Bedroom Terrace at City of Angels Estate. Please send me pricing and availability details.",
  },
  {
    id: "2br-flats",
    name: "2-Bedroom Block of Flats",
    type: "Flat",
    bedrooms: 2,
    description:
      "Affordable, quality-built flats within the estate. An outstanding investment opportunity with strong rental yield potential.",
    priceShell: "₦35,000,000",
    priceFull: "₦49,900,000",
    finishOptions: ["shell", "full"],
    whatsappMessage:
      "Hello IM Properties, I'm interested in the 2-Bedroom Block of Flats at City of Angels Estate. Please send me pricing and availability details.",
  },
];

// ─── Utility helpers ────────────────────────────────────────────────────────

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function telUrl(phone: string): string {
  return `tel:${phone}`;
}
