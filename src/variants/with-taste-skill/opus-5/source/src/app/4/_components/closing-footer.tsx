import { cta, nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { buttonLarge, primaryButton, shell } from "./primitives";

/*
  Layout family: inverted CTA band plus three-column footer.
  The band is the second and last inverted block on the page. The footer is white with
  a 3px top rule, JetBrains Mono links in three columns (one column under md) and
  pb-28 so the fixed iteration switcher never sits on top of anything readable.
*/
const footerColumns = [
  {
    heading: "Product",
    links: nav.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    heading: "Answers",
    links: [
      { label: "Questions", href: "#faq" },
      { label: "Works with", href: "#integrations" },
      { label: "Plans", href: "#pricing" },
    ],
  },
  {
    heading: product.name,
    links: [
      { label: product.domain, href: "#top" },
      { label: "Privacy", href: "#top" },
      { label: "Terms", href: "#top" },
    ],
  },
];

export function ClosingFooter() {
  return (
    <>
      <section className="border-y-[3px] border-[#0c0c0c] bg-[#0c0c0c] text-white">
        <div className={`${shell} py-14 md:py-20`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
            <h2 className="max-w-[22ch] font-archivo text-4xl font-black leading-[0.9] tracking-[-0.03em] md:text-6xl">
              Keep writing. Verso keeps the connections.
            </h2>
            <a
              href="#pricing"
              className={`${primaryButton} ${buttonLarge} shrink-0 self-start md:self-auto`}
            >
              {cta.primary}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-[3px] border-[#0c0c0c] bg-white">
        <div className={`${shell} pt-12 pb-28 md:pt-14 md:pb-32`}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="font-jet text-[12px] font-bold text-[#0c0c0c]">
                  {column.heading}
                </p>
                <ul className="mt-4 grid gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-jet text-[13px] text-[#4a4a4a] transition-transform duration-100 hover:text-[#0c0c0c] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t-[3px] border-[#0c0c0c] pt-6">
            <p className="font-jet text-[13px] font-bold uppercase tracking-[0.3em]">
              {product.name}
            </p>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-[#4a4a4a]">
              {product.what}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
