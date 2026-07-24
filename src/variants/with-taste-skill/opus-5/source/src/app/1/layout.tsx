import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tessera: notes that keep their own connections",
  description:
    "Tessera links what you write as you write it, so the note you need finds you. Plain Markdown files on your own disk.",
};

export default function IterationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-scheme="dark" className="bg-[#0a0a0b]">
      {children}
    </div>
  );
}
