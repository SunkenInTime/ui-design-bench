import localFont from "next/font/local";

export const sans = localFont({
  src: "../fonts/dm-sans.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "400 700",
});

export const geometric = localFont({
  src: "../fonts/space-grotesk.woff2",
  variable: "--font-geometric",
  display: "swap",
  weight: "400 700",
});

// The Garden direction takes its typography from botanical books and journals.
// EB Garamond is intentionally limited to that editorial direction.
export const editorial = localFont({
  src: [
    { path: "../fonts/eb-garamond.woff2", weight: "400 600", style: "normal" },
    { path: "../fonts/eb-garamond-italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
  preload: false,
});
