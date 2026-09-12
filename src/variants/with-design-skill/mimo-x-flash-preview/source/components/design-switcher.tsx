import Link from "next/link";

export type DesignKey = "one" | "two" | "three" | "four" | "five";

const OPTIONS: { key: DesignKey; label: string; href: string }[] = [
  { key: "one", label: "Accession", href: "/one" },
  { key: "two", label: "Lamplight", href: "/two" },
  { key: "three", label: "Xerox", href: "/three" },
  { key: "four", label: "Plotter", href: "/four" },
  { key: "five", label: "Marquee", href: "/five" },
];

const RADII: Record<DesignKey, string> = {
  one: "rounded-none",
  two: "rounded-sm",
  three: "rounded-none",
  four: "rounded-[2px]",
  five: "rounded-full",
};

const INK: Record<DesignKey, string> = {
  one: "border-[#111111] bg-[#F7F7F5] text-[#111111]",
  two: "border-[#C9A53C]/50 bg-[#16120E] text-[#F3EDE2]",
  three: "border-[#0B0B0B] bg-[#D9D6CE] text-[#0B0B0B]",
  four: "border-[#0C1821] bg-[#EEF0F3] text-[#0C1821]",
  five: "border-[#F2F0EB] bg-[#0D0C10] text-[#F2F0EB]",
};

const ACTIVE: Record<DesignKey, string> = {
  one: "bg-[#1F3BFF] text-white border-[#1F3BFF]",
  two: "bg-[#C9A53C] text-[#16120E] border-[#C9A53C]",
  three: "bg-[#FF4B12] text-[#0B0B0B] border-[#FF4B12]",
  four: "bg-[#0F7A6C] text-white border-[#0F7A6C]",
  five: "bg-[#FF2E63] text-[#0D0C10] border-[#FF2E63]",
};

export function DesignSwitcher({ current }: { current: DesignKey }) {
  return (
    <nav
      aria-label="Landing page iterations"
      className="fixed right-4 bottom-4 z-50 print:hidden sm:right-6 sm:bottom-6"
    >
      <div
        className={`flex items-center gap-1 border p-1 shadow-[0_8px_30px_rgba(0,0,0,0.18)] ${RADII[current]} ${INK[current]} backdrop-blur-sm`}
      >
        <span className="px-2 py-1 font-mono text-[10px] tracking-wider opacity-60 select-none">
          Cairn
        </span>
        {OPTIONS.map((opt) => {
          const isActive = opt.key === current;
          return (
            <Link
              key={opt.key}
              href={opt.href}
              title={opt.label}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-7 min-w-7 items-center justify-center border px-1.5 font-mono text-[11px] leading-none transition-colors ${RADII[current]} ${
                isActive
                  ? ACTIVE[current]
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {OPTIONS.indexOf(opt) + 1}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
