import {
  Archivo,
  Barlow,
  Big_Shoulders,
  Chivo_Mono,
  Courier_Prime,
  Fraunces,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Karla,
  Manrope,
  Space_Mono,
  Spline_Sans_Mono,
  Syne,
  Unbounded,
  Work_Sans,
} from "next/font/google";

/* Direction 01 — Card Catalog: drawer-label signage, typewritten cards */
export const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--d1-display",
});

export const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--d1-card",
});

export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--d1-utility",
});

/* Direction 02 — Mycelium: wonky organic serif over a quiet grotesque */
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--d2-display",
});

export const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--d2-body",
});

export const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--d2-label",
});

/* Direction 03 — Memory Palace: drafting sheet lettering */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--d3-display",
});

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--d3-body",
});

export const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--d3-dim",
});

/* Direction 04 — Cybernetic Riso: avant-garde display, manual mono */
export const syne = Syne({
  subsets: ["latin"],
  variable: "--d4-display",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--d4-mono",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--d4-body",
});

/* Direction 05 — Signal Room: wide geometric console type */
export const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--d5-display",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--d5-body",
});

/* Direction 05 data readouts, and the chrome of the direction switcher */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--chrome-mono",
});
