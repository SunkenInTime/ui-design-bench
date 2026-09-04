export type Design = "one" | "two" | "three" | "four" | "five";

export const designs = [
  { slug: "one", name: "Paper", description: "A little space for a big mind", color: "#42634d" },
  { slug: "two", name: "Connected", description: "Good ideas find each other", color: "#315cbb" },
  { slug: "three", name: "Garden", description: "Give your thinking room to grow", color: "#64703c" },
  { slug: "four", name: "Curious", description: "For your many minds", color: "#bf4d2c" },
  { slug: "five", name: "Horizon", description: "A little more headspace", color: "#485e70" },
] as const;

// Five independent art directions share a small native CSS component system.
// Typography, composition, palette, and radius tokens are scoped per design.
export const designDials = {
  DESIGN_VARIANCE: 8,
  MOTION_INTENSITY: 5,
  VISUAL_DENSITY: 4,
} as const;

// Layering is structural: navigation < design switcher < native modal top layer.
export const layers = { navigation: 10, switcher: 20 } as const;
