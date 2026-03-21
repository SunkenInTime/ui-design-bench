import { IterationSwitcher } from "../iteration-switcher";

export default function IterationFivePage() {
  return (
    <main className="min-h-screen bg-[#f5f100] px-6 py-10 text-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border-4 border-black bg-[#fffdf5] p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] sm:p-12">
        <p className="text-xs uppercase tracking-[0.45em] text-black/70">
          Iteration Five / Poster
        </p>

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">
              Make the message impossible to miss.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/70">
              This final route is intentionally loud: oversized typography, bold framing, and immediate
              visual punch over subtlety.
            </p>
          </div>

          <div className="grid gap-4">
            {["High contrast", "Strong attitude", "Immediate recall"].map((item) => (
              <div key={item} className="border-4 border-black bg-[#ff7a00] p-5 text-xl font-bold uppercase">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 border-t-4 border-black pt-8 md:grid-cols-3">
          {[
            "Best when you want an opinionated first impression.",
            "Useful for campaign pages and concept presentations.",
            "Deliberately different from the softer earlier options.",
          ].map((note) => (
            <div key={note} className="border-4 border-black bg-white p-5 text-sm font-semibold uppercase leading-6">
              {note}
            </div>
          ))}
        </section>
      </div>
      <IterationSwitcher currentSlug="five" />
    </main>
  );
}
