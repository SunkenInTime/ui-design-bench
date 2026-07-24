/**
 * Real brands Tessera reads from or writes to. Marks come from Simple Icons,
 * which serves a single-colour SVG per brand at /{slug}/{hex}.
 */
export type Integration = { slug: string; name: string };

export const integrations: Integration[] = [
  { slug: "obsidian", name: "Obsidian" },
  { slug: "notion", name: "Notion" },
  { slug: "zotero", name: "Zotero" },
  { slug: "raycast", name: "Raycast" },
  { slug: "slack", name: "Slack" },
  { slug: "github", name: "GitHub" },
  { slug: "googlechrome", name: "Chrome" },
];

export function iconUrl(slug: string, hex: string) {
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
}
