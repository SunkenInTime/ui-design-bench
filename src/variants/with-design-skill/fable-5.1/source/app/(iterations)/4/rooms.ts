export type Room = {
  id: string;
  num: string;
  name: string;
  concept: string;
  body: string;
  count: string;
  rect: [number, number, number, number]; // x y w h
  label: [number, number];
};

export const ROOMS: Room[] = [
  {
    id: "vestibule",
    num: "101",
    name: "Vestibule",
    concept: "Inbox",
    body: "Everything you capture lands here first: a line from your phone, a clipped paragraph, a forwarded email. Nothing has to be filed yet.",
    count: "14 unsorted",
    rect: [60, 60, 200, 140],
    label: [160, 124],
  },
  {
    id: "library",
    num: "102",
    name: "Library",
    concept: "Sources",
    body: "Books, PDFs, articles, with your highlights and the notes you wrote against them. Every source keeps its shelf.",
    count: "318 sources",
    rect: [260, 60, 300, 140],
    label: [410, 150],
  },
  {
    id: "gallery",
    num: "104",
    name: "Gallery",
    concept: "Evergreen notes",
    body: "Ideas you've finished thinking: one idea each, in your words, linked to everything that made it. The room people visit.",
    count: "212 notes",
    rect: [560, 60, 180, 200],
    label: [650, 168],
  },
  {
    id: "study",
    num: "103",
    name: "Study",
    concept: "Drafts",
    body: "Where you write. As you type, Loam carries related cards from the library and the gallery to the desk.",
    count: "9 drafts open",
    rect: [60, 260, 280, 240],
    label: [200, 430],
  },
  {
    id: "archive",
    num: "106",
    name: "Archive",
    concept: "Cold storage",
    body: "Finished projects and stale notes. Out of the way, still searchable, never deleted.",
    count: "651 notes",
    rect: [340, 260, 220, 240],
    label: [450, 420],
  },
  {
    id: "courtyard",
    num: "105",
    name: "Courtyard",
    concept: "Daily notes",
    body: "One open page a day. Weather, meetings, what you noticed. The light gets in here.",
    count: "1 today",
    rect: [560, 260, 180, 240],
    label: [650, 444],
  },
];
