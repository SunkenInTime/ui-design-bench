import { cta, nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

export function ClosingFooter() {
  return (
    <>
      <section className="w-full border-t border-white/10 px-5 pt-24 pb-24 md:px-[6vw] md:pt-32 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-grotesk max-w-[26ch] text-[2.1rem] leading-[1.02] font-medium tracking-[-0.02em] text-[#f4f4f3] md:text-[3.2rem] lg:text-[4rem]">
            Write it down. Verso brings it back.
          </p>
          <a
            href="#pricing"
            className="mt-10 inline-flex h-12 items-center whitespace-nowrap rounded-full bg-[#f43f5e] px-7 text-sm font-medium text-[#0a0a0b] transition-transform active:scale-[0.98]"
          >
            {cta.primary}
          </a>
        </div>
      </section>

      {/* pb-28 keeps the fixed iteration switcher clear of footer content. */}
      <footer className="w-full border-t border-white/10 px-5 pt-12 pb-28 md:px-[6vw]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="font-grotesk text-lg font-medium tracking-tight text-[#f4f4f3]">
              {product.name}
            </p>
            <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-[#8e8e8c]">
              {product.what}
            </p>
          </div>
          <nav className="md:col-span-3 md:col-start-8">
            <ul className="grid gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#8e8e8c] transition-colors hover:text-[#f4f4f3]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2 md:col-start-11">
            <a
              href={`https://${product.domain}`}
              className="text-sm text-[#f43f5e] transition-opacity hover:opacity-80"
            >
              {product.domain}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
