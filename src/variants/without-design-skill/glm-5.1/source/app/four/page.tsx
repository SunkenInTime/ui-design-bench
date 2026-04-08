export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-zinc-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
          <div className="text-lg font-semibold tracking-tight">Synapse</div>
          <nav className="flex items-center gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-stone-100">Features</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-stone-100">Pricing</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-stone-100">About</a>
          </nav>
        </div>
      </div>
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-8 py-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                The knowledge operating system
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight lg:text-6xl">
                Your notes were never meant to be
                <em className="not-italic text-amber-600 dark:text-amber-400"> isolated</em>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Synapse turns scattered notes into a connected knowledge graph.
                Write freely. Link naturally. Let your second brain surface the
                insights you would have missed.
              </p>
              <div className="flex gap-4">
                <button className="rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600">
                  Try Synapse free
                </button>
                <button className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                  Read the manifesto
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { num: "01", title: "Capture anything", body: "Notes, bookmarks, PDFs, images, voice memos — everything goes in." },
                { num: "02", title: "Link organically", body: "Bi-directional links form automatically as you write. No manual tagging needed." },
                { num: "03", title: "Retrieve instantly", body: "Semantic search understands meaning, not just keywords. Find what you meant." },
              ].map((item) => (
                <div key={item.num} className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-2 flex items-baseline gap-3">
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400">{item.num}</span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-5xl px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight">Trusted by deep thinkers</h2>
              <p className="text-zinc-500">Researchers, writers, and builders who think in systems.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { quote: "Finally, a tool that matches how my brain actually works.", author: "Dr. Maya Chen", role: "Neuroscience Researcher" },
                { quote: "I stopped losing ideas. That alone is worth everything.", author: "James Holloway", role: "Author & Essayist" },
                { quote: "The graph view changed how I think about my own thinking.", author: "Priya Sharma", role: "Product Lead, AI Startup" },
              ].map((t) => (
                <div key={t.author} className="rounded-xl border border-zinc-100 p-6 dark:border-zinc-800">
                  <p className="mb-4 text-sm leading-relaxed text-zinc-600 italic dark:text-zinc-400">"{t.quote}"</p>
                  <div>
                    <div className="text-sm font-semibold">{t.author}</div>
                    <div className="text-xs text-zinc-400">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
