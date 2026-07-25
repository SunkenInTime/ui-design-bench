/**
 * Shared product facts for every iteration at /1 .. /5.
 *
 * All five routes are alternative art directions for the SAME product, so the
 * facts, feature set, integrations, prices and CTA labels are locked here. Each
 * route writes its own headlines and body copy in its own voice, but pulls the
 * hard facts from this module so the iterations stay comparable.
 *
 * Two rules this file exists to enforce:
 *  1. CTA intent lock. One label per intent, reused across nav, hero and footer
 *     on every route. Never a second phrasing of the same action.
 *  2. No invented precision. There are no metrics or percentages in here. If a
 *     route wants a number it has to be a real product fact (a price, a count of
 *     something that exists) or it does not ship.
 */

export const product = {
  name: "Verso",
  /** A verso is the left-hand page of an open book: the one already written on. */
  what: "A notebook that links what you write to what you already wrote, then hands it back when it matters.",
  domain: "verso.app",
} as const;

/** CTA intent lock. Import these; do not retype them. */
export const cta = {
  /** Primary, signup intent. The only signup wording allowed on any route. */
  primary: "Start free",
  /** Secondary, demo intent. At most once per page, in the hero. */
  secondary: "See how it works",
} as const;

/** Nav must render on one line at desktop, so this stays at three items. */
export const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
] as const;

export type Capability = {
  /** Short label. Works as a heading on its own. */
  title: string;
  /** One sentence, 25 words or fewer. */
  body: string;
  /**
   * Phosphor export name, imported from `@phosphor-icons/react/ssr` so the icon
   * stays renderable from a Server Component. Note the `Icon` suffix: in
   * @phosphor-icons/react 2.1.10 the bare names (`Graph`, `Lightning`) are
   * deprecated aliases and the suffixed names are the supported ones.
   */
  icon: string;
};

export const capabilities: Capability[] = [
  {
    title: "Capture without leaving",
    body: "One hotkey opens a capture window over whatever you are doing. It closes when you are done. Nothing to file.",
    icon: "LightningIcon",
  },
  {
    title: "Links you did not make",
    body: "Verso reads what you write and connects it to the notes it belongs with, so the graph builds itself as you go.",
    icon: "GraphIcon",
  },
  {
    title: "Notes that come back",
    body: "Each morning Verso surfaces the handful of old notes that bear on what you are working on today.",
    icon: "SunIcon",
  },
  {
    title: "Ask, do not search",
    body: "Type a question in plain language and get the passage that answers it, not a list of files to open.",
    icon: "MagnifyingGlassIcon",
  },
  {
    title: "Plain files on your disk",
    body: "Every note is a markdown file in a folder you choose. You can read them without Verso, and leave whenever you like.",
    icon: "FolderOpenIcon",
  },
  {
    title: "Encrypted before it syncs",
    body: "Sync is end to end encrypted, so your notes reach your other devices without becoming readable to us.",
    icon: "LockIcon",
  },
];

/** The three-step spine used by the "how it works" section on several routes. */
export const steps = [
  {
    title: "Capture",
    body: "Hit the hotkey, type the thought, let go. Verso keeps the source you were looking at.",
  },
  {
    title: "Connect",
    body: "Verso reads the note and links it to the ones it belongs with. You do not tag or file anything.",
  },
  {
    title: "Recall",
    body: "Ask a question, or let the morning digest bring back the notes that bear on today.",
  },
] as const;

/**
 * Framed as integrations, not customers. These are real products, so claiming
 * "trusted by" would be a false endorsement; "works with" is the honest claim
 * and still gives the logo wall real SVG marks.
 */
export const integrations = [
  { name: "Obsidian", slug: "obsidian" },
  { name: "Notion", slug: "notion" },
  { name: "Raycast", slug: "raycast" },
  { name: "Zotero", slug: "zotero" },
  { name: "Instapaper", slug: "instapaper" },
  { name: "Google Chrome", slug: "googlechrome" },
] as const;

/**
 * Logo wall URL. Simple Icons serves a single-colour SVG per brand, colour set
 * in the path. Pass a hex without the `#`.
 */
export function logoUrl(slug: string, hex: string): string {
  return `https://cdn.simpleicons.org/${slug}/${hex.replace("#", "")}`;
}

export type Testimonial = {
  /** Three lines maximum when rendered. No quote marks in the string itself. */
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I stopped keeping a reading list. Verso just hands me the note I took eight months ago, on the morning it turns out to matter.",
    name: "Ingrid Halvorsen",
    role: "Staff engineer, Balemark",
  },
  {
    quote:
      "Four years of thesis notes used to be a graveyard. Now they argue with each other, and I get to referee.",
    name: "Tobias Okonkwo",
    role: "Neuroscience PhD candidate, Kestrel Institute",
  },
  {
    quote:
      "It is the only tool I have used where the second year of notes is more useful than the first.",
    name: "Marisol Quintero",
    role: "Product lead, Thorne and Wick",
  },
];

export const pricing = [
  {
    name: "Solo",
    price: "Free",
    cadence: "",
    summary: "Unlimited notes on one device, stored as files you own.",
    includes: [
      "Unlimited notes and links",
      "Automatic linking and graph view",
      "Ask a question search",
      "Markdown files on your disk",
    ],
  },
  {
    name: "Sync",
    price: "$8",
    cadence: "per month",
    summary: "Everything in Solo, on every device you use, encrypted in transit and at rest.",
    includes: [
      "End to end encrypted sync",
      "Morning resurfacing digest",
      "Web clipper with annotations",
      "Version history for every note",
    ],
    featured: true,
  },
] as const;

export const faq = [
  {
    q: "Where do my notes actually live?",
    a: "In a folder you pick, as plain markdown files. Verso reads and writes that folder; it does not hide your notes in a database.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Verso is offline first and every feature except sync works with no connection at all.",
  },
  {
    q: "What happens if I want to leave?",
    a: "Nothing needs to happen. Your notes are already plain files on your machine, so you delete the app and keep the folder.",
  },
  {
    q: "Do you train models on my notes?",
    a: "No. Sync is end to end encrypted, which means your notes are not readable by us even if we wanted to.",
  },
] as const;

/**
 * Picsum serves random photography by seed. Seeds are descriptive so each route
 * gets stable, section-appropriate imagery instead of a different photo per build.
 */
export function photo(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
