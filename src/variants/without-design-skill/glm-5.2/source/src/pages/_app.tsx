import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import "@/generated/scoped-variant-css/without-design-skill/glm-5.2/source/src/app/globals.css";
import IterationSwitcher from "../components/IterationSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <Component {...pageProps} />
      <IterationSwitcher />
    </div>
  );
}
