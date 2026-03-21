/** Iteration 3 — Desk journal: warm paper, ink, tactile margins. */
export function LandingThree() {
  return (
    <div className="min-h-screen bg-[#f4ede4] text-[#2c2416]">
      <div className="mx-auto min-h-screen max-w-3xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="min-h-[calc(100vh-5rem)] rounded-sm border-[3px] border-double border-[#5c4d3c]/35 bg-[#faf6f0] px-8 py-12 shadow-[8px_8px_0_#c4b8a8] sm:px-14 sm:py-16">
          <div className="border-b border-[#5c4d3c]/20 pb-8">
            <p className="font-mono text-xs text-[#7a6a58]">March 20 — morning pages</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Your mind,
              <br />
              on paper that never fills up.
            </h1>
          </div>
          <p className="mt-10 max-w-xl text-lg leading-[1.75] text-[#4a3f32]">
            Jot a thought in seconds. Link it to yesterday&apos;s idea. Your
            second brain feels like a well-loved notebook—only smarter.
          </p>
          <ul className="mt-10 space-y-3 font-mono text-sm text-[#5c4d3c]">
            <li className="flex gap-2">
              <span className="text-[#b45309]">—</span>
              Quick capture from anywhere
            </li>
            <li className="flex gap-2">
              <span className="text-[#b45309]">—</span>
              Bi-directional links between notes
            </li>
            <li className="flex gap-2">
              <span className="text-[#b45309]">—</span>
              Serendipitous rediscovery
            </li>
          </ul>
          <div className="mt-14">
            <a
              href="#"
              className="inline-block border-2 border-[#2c2416] bg-[#2c2416] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#faf6f0] transition hover:bg-transparent hover:text-[#2c2416]"
            >
              Open the journal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
