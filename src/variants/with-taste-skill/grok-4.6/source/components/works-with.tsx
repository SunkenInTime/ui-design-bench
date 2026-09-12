import { WORKS_WITH } from "@/variants/with-taste-skill/grok-4.6/source/lib/works-with";

type WorksWithProps = {
  className?: string;
  itemClassName?: string;
};

export function WorksWith({ className, itemClassName }: WorksWithProps) {
  return (
    <ul className={className}>
      {WORKS_WITH.map((brand) => (
        <li key={brand.slug} className={itemClassName}>
          {/* SVG wordmarks from Simple Icons. next/image blocks remote SVG. */}
          <img
            src={`https://cdn.simpleicons.org/${brand.slug}/71717a`}
            alt={brand.name}
            width={88}
            height={24}
            className="h-6 w-auto opacity-80 dark:invert dark:opacity-70"
          />
        </li>
      ))}
    </ul>
  );
}
