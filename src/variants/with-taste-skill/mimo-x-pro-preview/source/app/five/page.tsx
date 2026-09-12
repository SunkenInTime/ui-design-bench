import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mono",
  description:
    "Cortex iteration five: a brutalist monospace landing for a second-brain notes app.",
};

export default function FivePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#fafafa] font-mono text-[#0a0a0a]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between border-b-2 border-[#0a0a0a] px-5 py-4 sm:px-6">
        <span className="text-sm font-bold uppercase tracking-[0.14em]">
          Cortex
        </span>
        <div className="flex items-center gap-2">
          <a
            href="#features"
            className="hidden border-2 border-[#0a0a0a] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] sm:inline-block"
          >
            Features
          </a>
          <a
            href="#get"
            className="border-2 border-[#0a0a0a] bg-[#0a0a0a] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#fafafa]"
          >
            Get Cortex
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-6">
        <section className="grid gap-0 border-b-2 border-[#0a0a0a] py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
          <div className="pr-0 lg:pr-10">
            <h1 className="text-[clamp(2.4rem,7vw,4.75rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em]">
              Second
              <br />
              brain.
              <br />
              <span className="bg-[#ffe600] px-2">No fluff.</span>
            </h1>
            <p className="mt-6 max-w-[40ch] text-sm leading-relaxed sm:text-base">
              Capture ideas the moment they arrive. Cortex links them so recall
              feels automatic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#get"
                className="border-2 border-[#0a0a0a] bg-[#ffe600] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-transform hover:-translate-y-px active:translate-y-0 sm:text-sm"
              >
                Get Cortex
              </a>
              <a
                href="#features"
                className="border-2 border-[#0a0a0a] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:bg-[#0a0a0a] hover:text-[#fafafa] sm:text-sm"
              >
                Read the features
              </a>
            </div>
          </div>

          <div className="mt-10 border-2 border-[#0a0a0a] lg:mt-0">
            <Image
              src="/variants/with-taste-skill/mimo-x-pro-preview/images/five-hero.png"
              alt="High-contrast photocopied stack of paper sheets"
              width={1536}
              height={1024}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section id="features" className="border-b-2 border-[#0a0a0a] py-12">
          <h2 className="text-xl font-bold uppercase tracking-[0.14em]">
            What it does
          </h2>
          <ul className="mt-8 divide-y-2 divide-[#0a0a0a] border-y-2 border-[#0a0a0a]">
            {[
              {
                title: "Instant capture",
                body: "Hotkey. Share sheet. Drop a file. The thought is stored before the UI finishes loading.",
              },
              {
                title: "Hard links",
                body: "Every backlink is explicit. No hidden magic edges unless you approve them.",
              },
              {
                title: "Meaning search",
                body: "Type a question. Get the note that answers it, not a bag of keyword hits.",
              },
              {
                title: "Local disk",
                body: "Markdown on your machine. Sync is optional. Export is copy-paste simple.",
              },
            ].map((item) => (
              <li key={item.title} className="py-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-[#333]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid border-b-2 border-[#0a0a0a] md:grid-cols-3">
          {[
            {
              label: "Capture",
              text: "One stream. Zero folders required on day one.",
            },
            {
              label: "Connect",
              text: "Approve links. Reject noise. Keep the graph honest.",
            },
            {
              label: "Recall",
              text: "Open the note with its neighbors already attached.",
            },
          ].map((item, index) => (
            <article
              key={item.label}
              className={[
                "p-6 sm:p-8",
                index < 2 ? "border-b-2 border-[#0a0a0a] md:border-b-0 md:border-r-2" : "",
              ].join(" ")}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.14em]">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#333]">
                {item.text}
              </p>
            </article>
          ))}
        </section>

        <section id="get" className="py-12 lg:py-16">
          <div className="border-2 border-[#0a0a0a] bg-[#0a0a0a] p-6 text-[#fafafa] sm:p-10">
            <h2 className="max-w-[14ch] text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-4xl">
              Install the machine that remembers.
            </h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-[#c4c4c4]">
              Free for personal vaults. Works offline. Your files remain ordinary
              Markdown on disk.
            </p>
            <a
              href="#get"
              className="mt-8 inline-flex border-2 border-[#ffe600] bg-[#ffe600] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0a] transition-transform hover:-translate-y-px active:translate-y-0 sm:text-sm"
            >
              Download for desktop
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-[#0a0a0a] py-5">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-xs font-bold uppercase tracking-[0.12em] sm:px-6">
          <span>Cortex</span>
          <span>Design iteration 5 · Mono</span>
        </div>
      </footer>

    </div>
  );
}
