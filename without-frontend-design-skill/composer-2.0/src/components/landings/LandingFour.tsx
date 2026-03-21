/** Iteration 4 — Neo-brutalist: loud type, hard edges, high energy. */
export function LandingFour() {
  return (
    <div className="min-h-screen bg-[#ffe600] text-black">
      <header className="border-b-4 border-black px-6 py-4 sm:px-10">
        <span className="font-mono text-sm font-bold uppercase tracking-widest">
          Cortex / v0
        </span>
      </header>
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
        <h1 className="max-w-4xl text-[clamp(2.5rem,8vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tighter">
          Second
          <br />
          brain
        </h1>
        <p className="mt-8 max-w-xl border-l-4 border-black pl-6 font-mono text-sm leading-relaxed sm:text-base">
          DUMP THOUGHTS. LINK THEM. STOP LOSING THE GOOD ONES. THIS IS YOUR
          EXTERNAL MEMORY—LOUD AND UNMISSABLE.
        </p>
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <a
            href="#"
            className="flex items-center justify-center border-4 border-black bg-black px-10 py-5 text-center font-mono text-sm font-bold uppercase tracking-wider text-[#ffe600] shadow-[6px_6px_0_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]"
          >
            Start now →
          </a>
          <a
            href="#"
            className="flex items-center justify-center border-4 border-black bg-[#ffe600] px-10 py-5 text-center font-mono text-sm font-bold uppercase tracking-wider shadow-[6px_6px_0_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]"
          >
            Read manifesto
          </a>
        </div>
        <div className="mt-20 grid gap-4 border-t-4 border-black pt-10 sm:grid-cols-3">
          {["Capture", "Connect", "Recall"].map((t) => (
            <div key={t} className="border-4 border-black bg-white p-6 font-mono text-xs font-bold uppercase">
              {t}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
