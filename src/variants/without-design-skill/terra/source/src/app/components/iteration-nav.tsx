import Link from "next/link";

const iterations = [
  { id: "one", label: "01", name: "Orbit" },
  { id: "two", label: "02", name: "Afterglow" },
  { id: "three", label: "03", name: "Garden" },
  { id: "four", label: "04", name: "Signal" },
  { id: "five", label: "05", name: "Archive" },
] as const;

type IterationId = (typeof iterations)[number]["id"];

type IterationNavProps = {
  active: IterationId;
  tone?: "light" | "dark";
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "switcher-arrow is-left" : "switcher-arrow"}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IterationNav({ active, tone = "light" }: IterationNavProps) {
  const activeIndex = iterations.findIndex((iteration) => iteration.id === active);
  const previous = iterations[(activeIndex + iterations.length - 1) % iterations.length];
  const next = iterations[(activeIndex + 1) % iterations.length];

  return (
    <nav className={`iteration-switcher iteration-switcher--${tone}`} aria-label="Landing page iterations">
      <Link className="switcher-arrow-button" href={`/${previous.id}`} aria-label={`Previous concept: ${previous.name}`}>
        <Arrow direction="left" />
      </Link>
      <span className="switcher-divider" aria-hidden="true" />
      <div className="switcher-pages">
        {iterations.map((iteration) => (
          <Link
            aria-current={iteration.id === active ? "page" : undefined}
            aria-label={`View concept ${iteration.label}: ${iteration.name}`}
            className={`switcher-page ${iteration.id === active ? "is-active" : ""}`}
            href={`/${iteration.id}`}
            key={iteration.id}
          >
            {iteration.label}
          </Link>
        ))}
      </div>
      <span className="switcher-divider" aria-hidden="true" />
      <Link className="switcher-arrow-button" href={`/${next.id}`} aria-label={`Next concept: ${next.name}`}>
        <Arrow direction="right" />
      </Link>
    </nav>
  );
}

