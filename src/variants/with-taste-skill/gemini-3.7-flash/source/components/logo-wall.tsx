const firms = [
  { name: "Northwind", letter: "N" },
  { name: "Havel", letter: "H" },
  { name: "Fieldwork", letter: "F" },
  { name: "Paloma", letter: "P" },
  { name: "Redoubt", letter: "R" },
  { name: "Kindling", letter: "K" },
] as const;

export function LogoWall({ className }: { className?: string }) {
  return (
    <ul
      className={`grid grid-cols-3 items-center gap-8 lg:grid-cols-6 ${className ?? ""}`}
    >
      {firms.map((firm) => (
        <li key={firm.name} className="flex justify-center">
          <svg
            role="img"
            aria-label={firm.name}
            viewBox="0 0 40 40"
            className="h-10 w-10 text-current"
          >
            <rect
              x="1.5"
              y="1.5"
              width="37"
              height="37"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <text
              x="20"
              y="26"
              textAnchor="middle"
              fill="currentColor"
              fontSize="16"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontWeight="600"
            >
              {firm.letter}
            </text>
          </svg>
        </li>
      ))}
    </ul>
  );
}
