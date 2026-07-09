import Link from "next/link";

export type IterationKey = "one" | "two" | "three" | "four" | "five";

export const iterationOptions: Array<{
  key: IterationKey;
  href: string;
  name: string;
  descriptor: string;
}> = [
  { key: "one", href: "/one", name: "Quiet index", descriptor: "Editorial" },
  { key: "two", href: "/two", name: "Field notes", descriptor: "Tactile" },
  { key: "three", href: "/three", name: "Signal", descriptor: "Dark" },
  { key: "four", href: "/four", name: "The archive", descriptor: "Brutalist" },
  { key: "five", href: "/five", name: "Pocket", descriptor: "Human" },
];

export function IterationSwitcher({ current }: { current: IterationKey }) {
  const currentIndex = iterationOptions.findIndex((item) => item.key === current) + 1;
  const currentOption = iterationOptions.find((item) => item.key === current);

  return (
    <details className="iteration-switcher">
      <summary className="iteration-toggle">
        <span className="iteration-toggle-label">
          Direction {String(currentIndex).padStart(2, "0")}
        </span>
        <span className="iteration-toggle-name">{currentOption?.name}</span>
        <span className="iteration-toggle-mark" aria-hidden="true">
          +
        </span>
      </summary>

      <div className="iteration-menu" id="iteration-menu" role="menu">
        {iterationOptions.map((item, index) => (
          <Link
            key={item.key}
            href={item.href}
            role="menuitem"
            className={`iteration-option ${item.key === current ? "is-active" : ""}`}
            aria-current={item.key === current ? "page" : undefined}
          >
            <span className="iteration-option-number">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <strong>{item.name}</strong>
              <small>{item.descriptor}</small>
            </span>
          </Link>
        ))}
      </div>
    </details>
  );
}
