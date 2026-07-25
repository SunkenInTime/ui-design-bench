import { nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Mono footer, hairline top. pb-28 keeps the fixed iteration switcher off the
  footer content.
*/
export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.09] pt-10 pb-28">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 font-mono text-[12px] text-[#8b8b87] md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <span className="text-[#e8e8e6]">{product.name.toLowerCase()}</span>
          <span>{product.domain}</span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-150 hover:text-[#3ddc97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3ddc97]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
