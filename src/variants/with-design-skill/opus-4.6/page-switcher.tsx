"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { buildVariantHref } from "@/lib/gallery-paths";

const pages = [
  { id: "1", name: "Neural" },
  { id: "2", name: "Velvet" },
  { id: "3", name: "Neon Cortex" },
  { id: "4", name: "Bloom" },
  { id: "5", name: "Cosmos" },
] as const;

export function OpusPageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const currentId = pathname?.split("/").at(-1) ?? "1";
  const currentIndex = pages.findIndex((page) => page.id === currentId);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 99999,
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "absolute",
              bottom: "64px",
              right: 0,
              background: "rgba(15, 15, 15, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "8px",
              minWidth: "200px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {pages.map((page, index) => (
              <motion.button
                key={page.id}
                onClick={() => {
                  router.push(buildVariantHref("with-design-skill", "opus-4.6", page.id));
                  setIsOpen(false);
                }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "10px 14px",
                  background: currentIndex === index ? "rgba(255,255,255,0.1)" : "transparent",
                  border: "none",
                  borderRadius: "10px",
                  color: currentIndex === index ? "#fff" : "rgba(255,255,255,0.55)",
                  cursor: "pointer",
                  fontSize: "13px",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                  letterSpacing: "0.02em",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "7px",
                    background:
                      currentIndex === index
                        ? "linear-gradient(135deg, #fff, #aaa)"
                        : "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: currentIndex === index ? "#111" : "rgba(255,255,255,0.35)",
                    flexShrink: 0,
                  }}
                >
                  {page.id}
                </span>
                {page.name}
              </motion.button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "rgba(15, 15, 15, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="5.5" height="5.5" rx="1.5" fill="currentColor" opacity={isOpen ? 0.5 : 1} />
            <rect x="10.5" y="2" width="5.5" height="5.5" rx="1.5" fill="currentColor" opacity={isOpen ? 0.5 : 0.6} />
            <rect x="2" y="10.5" width="5.5" height="5.5" rx="1.5" fill="currentColor" opacity={isOpen ? 0.5 : 0.6} />
            <rect x="10.5" y="10.5" width="5.5" height="5.5" rx="1.5" fill="currentColor" opacity={isOpen ? 0.5 : 0.3} />
          </svg>
        </motion.span>
      </motion.button>
    </div>
  );
}
