import Link from "next/link";
import { DesignSwitcher } from "./components/DesignSwitcher";

const ITERATIONS = [
  { id: "1", name: "Monastic", desc: "Brutally minimal" },
  { id: "2", name: "Terminal", desc: "Retro-futuristic CRT" },
  { id: "3", name: "Organic", desc: "Warm & natural" },
  { id: "4", name: "Luxury", desc: "Refined & editorial" },
  { id: "5", name: "Maximal", desc: "Bold & playful" },
];

export default function Home() {
  return (
    <div className="home">
      <DesignSwitcher />
      <main className="home__main">
        <h1 className="home__title">Second Brain</h1>
        <p className="home__subtitle">Choose a design iteration</p>
        <div className="home__grid">
          {ITERATIONS.map(({ id, name, desc }) => (
            <Link
              key={id}
              href={`/${id}`}
              className="home__card"
            >
              <span className="home__card-num">{id}</span>
              <span className="home__card-name">{name}</span>
              <span className="home__card-desc">{desc}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

