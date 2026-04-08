"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function IterationNav() {
  const pathname = usePathname();
  const current = pathname.replace("/", "") || "1";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        Design Iteration
      </span>
      <div
        style={{
          display: "flex",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "100px",
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {["1", "2", "3", "4", "5"].map((num) => (
          <Link
            key={num}
            href={`/${num}`}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "var(--font-geist-mono), monospace",
              textDecoration: "none",
              color: current === num ? "#000" : "rgba(255,255,255,0.6)",
              background: current === num ? "#fff" : "transparent",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: current === num ? "0 0 20px rgba(255,255,255,0.3)" : "none",
              cursor: "pointer",
              border: current === num ? "none" : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (current !== num) {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (current !== num) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                e.currentTarget.style.borderColor = "transparent";
              }
            }}
          >
            {num}
          </Link>
        ))}
      </div>
    </div>
  );
}
