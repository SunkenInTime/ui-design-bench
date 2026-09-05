import type { IconName } from "./icons";

export type SampleNote = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  kind: "Notes" | "Ideas" | "Links" | "Images";
  collection: string;
  icon: IconName;
  image?: string;
  imageAlt?: string;
  items?: string[];
  color?: string;
};

export const sampleNotes: SampleNote[] = [
  {
    id: "attention", title: "The art of paying attention", excerpt: "A reminder to take the long way home.",
    body: "Walked through the woods without my headphones today. It’s surprising how much you notice when you give yourself the chance.\n\nThe light through the trees. The smell after the rain. A path I’ve walked a hundred times, feeling a little different.\n\nMaybe paying attention is a practice, not a personality trait. Something to come back to.",
    kind: "Notes", collection: "Everyday discoveries", icon: "leaf", image: "/variants/miscellaneous/gpt-6-astra-preview/images/forest.jpg", imageAlt: "Afternoon sunlight falling across a quiet forest path",
  },
  {
    id: "unfinished", title: "An idea to come back to", excerpt: "What if we made more room for unfinished ideas?",
    body: "What if we made more room for unfinished ideas?\n\nNot every thought needs a next step. Some things just need a place to sit until we’re ready to return to them.\n\nA collection of beginnings. A garden, rather than a filing cabinet.",
    kind: "Ideas", collection: "Little beginnings", icon: "sun", color: "peach",
  },
  {
    id: "weekend", title: "A little list for later", excerpt: "A few things I’d like to make time for.",
    body: "A few things I’d like to make time for:\n\n— Take the long way home\n— Read something just because\n— Make time for nothing\n\nNo deadlines. Just a gentle reminder that these things matter, too.",
    kind: "Notes", collection: "Life, lately", icon: "check-square", items: ["Take the long way home", "Read something just because", "Make time for nothing"],
  },
  {
    id: "spaces", title: "Spaces that feel like home", excerpt: "Warm light, natural textures, room to breathe.",
    body: "What makes a space feel like home?\n\nI keep coming back to the same things: light that changes throughout the day, a mix of old and new, and objects that mean something.\n\nSaving this as a reference for our own space. The open shelves, the wooden table, the unhurried feeling.",
    kind: "Images", collection: "Design notes", icon: "image", image: "/variants/miscellaneous/gpt-6-astra-preview/images/interior.jpg", imageAlt: "A light filled interior with natural wood and an open staircase",
  },
  {
    id: "kyoto", title: "Japan, someday soon", excerpt: "Small streets. Slow mornings. No itinerary.",
    body: "A few places I want to get wonderfully lost in.\n\nKyoto in the early morning. Bookshops with no English section. A little coffee shop where we become regulars for a week.\n\nLess checking places off a list. More making room to discover them.",
    kind: "Links", collection: "Places to go", icon: "globe", image: "/variants/miscellaneous/gpt-6-astra-preview/images/kyoto.jpg", imageAlt: "A traditional Kyoto street with a pagoda in the distance",
  },
  {
    id: "creative", title: "On being a beginner", excerpt: "You don’t have to be good at something for it to be good for you.",
    body: "You don’t have to be good at something for it to be good for you.\n\nSigned up for a pottery class. Made a bowl that might technically be a plate. Had a lovely time.\n\nA reminder to do more things for the doing of them. Curiosity is a good enough reason.",
    kind: "Ideas", collection: "Things I’m learning", icon: "spark", color: "sage",
  },
];
