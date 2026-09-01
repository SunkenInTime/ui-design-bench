import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/*
  Iteration 3: "Substrate"
  Design read: developer and local-first landing for technical users, dark
  tech language without neon overload. IBM Plex Sans + Plex Mono.
  DESIGN_VARIANCE 7 / MOTION_INTENSITY 6 / VISUAL_DENSITY 4
  Palette: near-black + phosphor green (dark), graphite + forest green (light).
  Radius 6px everywhere.
*/
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-iter="3" className={`${plexSans.variable} ${plexMono.variable}`}>
      {children}
    </div>
  );
}
