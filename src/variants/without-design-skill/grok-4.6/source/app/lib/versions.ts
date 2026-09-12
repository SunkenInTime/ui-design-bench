export const versions = [
  { path: "/1", id: "1", label: "Folio", hint: "Editorial paper" },
  { path: "/2", id: "2", label: "Graph", hint: "Night constellation" },
  { path: "/3", id: "3", label: "Studio", hint: "Product white" },
  { path: "/4", id: "4", label: "Signal", hint: "Brutalist poster" },
  { path: "/5", id: "5", label: "Ma", hint: "Quiet archive" },
] as const;

export type VersionPath = (typeof versions)[number]["path"];
