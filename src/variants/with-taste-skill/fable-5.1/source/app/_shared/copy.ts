/**
 * One copy deck shared by all five iterations so the comparison is about
 * design, not content. Testimonials and prices are illustrative (mock).
 */

export const brand = {
  name: "Loam",
  tagline: "Notes that come back to you.",
};

export type Feature = {
  key: "capture" | "connect" | "resurface" | "own" | "search";
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    key: "capture",
    title: "Capture from anywhere",
    body: "Share sheet, browser clipper, a forwarded email, a voice memo. Everything lands in one inbox as a note.",
  },
  {
    key: "connect",
    title: "Link as you write",
    body: "Type two brackets to link any note. Backlinks appear on their own, so old thinking attaches itself to new.",
  },
  {
    key: "resurface",
    title: "Old notes come back",
    body: "Each morning Loam surfaces three notes related to what you wrote yesterday. Nothing to schedule, nothing to tag.",
  },
  {
    key: "own",
    title: "Plain files on your disk",
    body: "Every note is a Markdown file in a folder you choose. Sync is end-to-end encrypted and entirely optional.",
  },
  {
    key: "search",
    title: "Search that understands",
    body: "Full-text and meaning-based search across notes, PDFs and web clips. Ask for the idea, not the exact words.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org?: string;
};

/* mock */
export const testimonials: Testimonial[] = [
  {
    quote: "I stopped losing things. That is the whole review.",
    name: "Ingrid Solheim",
    role: "Doctoral researcher",
    org: "Uppsala University",
  },
  {
    quote:
      "The morning resurfacing is the feature I did not know I needed. Half my columns start there now.",
    name: "Beatriz Nogueira",
    role: "Columnist",
    org: "Público",
  },
  {
    quote:
      "Plain files on disk and sync that just works. I have nothing left to complain about, which is rare for me.",
    name: "Tomasz Wierzbicki",
    role: "Staff engineer",
    org: "Allegro",
  },
  {
    quote: "Six years of notes migrated in an afternoon. Backlinks intact.",
    name: "Ayaan Rahimtoola",
    role: "Product designer",
  },
];

export type Tier = {
  name: string;
  price: string;
  period?: string;
  blurb: string;
  items: string[];
  featured?: boolean;
};

/* mock */
export const pricing: Tier[] = [
  {
    name: "Personal",
    price: "Free",
    blurb: "Local notes on one device, for as long as you like.",
    items: [
      "Unlimited notes",
      "Markdown files on disk",
      "Backlinks and graph",
      "Full-text search",
    ],
  },
  {
    name: "Sync",
    price: "$8",
    period: "per month",
    blurb: "Every device, encrypted, with the clipper and resurfacing.",
    items: [
      "Everything in Personal",
      "End-to-end encrypted sync",
      "Browser clipper and email-in",
      "Meaning-based search",
      "Morning resurfacing",
    ],
    featured: true,
  },
];

export const steps = [
  {
    verb: "Capture",
    body: "A thought, a page, a paragraph from a PDF. Two seconds, from any device.",
  },
  {
    verb: "Link",
    body: "Connect it to what you already know while it is still fresh, or let backlinks do it later.",
  },
  {
    verb: "Resurface",
    body: "Loam brings the right note back when you are working on something related.",
  },
];
