"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ITERATIONS = [
  { n: 1, name: "Codex", sub: "editorial" },
  { n: 2, name: "Memex", sub: "terminal" },
  { n: 3, name: "Mycelia", sub: "organic" },
  { n: 4, name: "Index/04", sub: "brutalist" },
  { n: 5, name: "Ma 間", sub: "zen" },
];

export default function Switcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = Number.parseInt(pathname.replace("/", ""), 10);
  const active = Number.isFinite(current) && current >= 1 && current <= 5 ? current : null;

  // Keyboard shortcuts: 1–5 jumps iterations; Escape closes panel.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      const n = Number(e.key);
      if (n >= 1 && n <= 5 && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const target = document.getElementById(`switcher-link-${n}`) as HTMLAnchorElement | null;
        target?.click();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (active === null) return null;

  const activeMeta = ITERATIONS[active - 1];

  return (
    <div
      aria-label="Iteration switcher"
      style={{
        position: "fixed",
        right: "clamp(16px, 3vw, 32px)",
        bottom: "clamp(16px, 3vw, 32px)",
        zIndex: 100,
        fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
      }}
    >
      {/* Expanded panel */}
      <div
        style={{
          position: "absolute",
          bottom: "calc(100% + 10px)",
          right: 0,
          minWidth: 240,
          padding: "10px",
          borderRadius: 14,
          background: "var(--switcher-bg)",
          border: "1px solid var(--switcher-border)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          color: "var(--switcher-fg)",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(6px) scale(0.98)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .22s ease, transform .22s ease",
          boxShadow: "0 20px 50px -20px rgba(0,0,0,0.45)",
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--switcher-muted)",
            padding: "4px 8px 8px",
          }}
        >
          Five iterations
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {ITERATIONS.map((it) => {
            const isActive = it.n === active;
            return (
              <li key={it.n}>
                <Link
                  id={`switcher-link-${it.n}`}
                  href={`/${it.n}`}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 12,
                    padding: "8px 10px",
                    borderRadius: 8,
                    textDecoration: "none",
                    color: "inherit",
                    background: isActive ? "color-mix(in oklab, var(--switcher-accent) 12%, transparent)" : "transparent",
                    transition: "background .15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "color-mix(in oklab, var(--switcher-accent) 18%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = isActive
                      ? "color-mix(in oklab, var(--switcher-accent) 12%, transparent)"
                      : "transparent";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 11,
                      color: "var(--switcher-muted)",
                      width: 18,
                    }}
                  >
                    0{it.n}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.01em",
                      color: isActive ? "var(--switcher-accent)" : "var(--switcher-fg)",
                      fontWeight: isActive ? 600 : 500,
                      flex: 1,
                    }}
                  >
                    {it.name}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: "var(--switcher-muted)",
                    }}
                  >
                    {it.sub}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          style={{
            fontSize: 9.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--switcher-muted)",
            padding: "10px 8px 2px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>keys 1–5</span>
          <span>esc to close</span>
        </div>
      </div>

      {/* Pill button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`Iteration ${active} of 5: ${activeMeta.name}. Click to switch.`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderRadius: 999,
          background: "var(--switcher-bg)",
          border: "1px solid var(--switcher-border)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          color: "var(--switcher-fg)",
          cursor: "pointer",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          boxShadow: "0 10px 30px -12px rgba(0,0,0,0.45)",
          transition: "transform .2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        }}
      >
        <span style={{ display: "inline-flex", gap: 4 }}>
          {ITERATIONS.map((it) => (
            <span
              key={it.n}
              aria-hidden
              style={{
                width: it.n === active ? 16 : 6,
                height: 6,
                borderRadius: 999,
                background:
                  it.n === active ? "var(--switcher-accent)" : "color-mix(in oklab, var(--switcher-accent) 30%, transparent)",
                transition: "width .25s ease, background .25s ease",
              }}
            />
          ))}
        </span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          0{active}/05 · {activeMeta.name}
        </span>
        <span
          aria-hidden
          style={{
            fontSize: 10,
            opacity: 0.55,
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform .2s ease",
            display: "inline-block",
          }}
        >
          ▲
        </span>
      </button>
    </div>
  );
}
