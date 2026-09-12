export const TRUSTED_LOGOS = [
  { name: "Notion", slug: "notion" },
  { name: "Linear", slug: "linear" },
  { name: "Figma", slug: "figma" },
  { name: "Vercel", slug: "vercel" },
  { name: "Stripe", slug: "stripe" },
  { name: "GitHub", slug: "github" },
] as const;

export function logoUrl(slug: string, color = "71717a") {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}
