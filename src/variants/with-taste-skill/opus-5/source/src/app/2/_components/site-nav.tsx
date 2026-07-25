import { cta, nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { Button } from "./button";

/*
  Sticky bar, 64px tall, one line at desktop. Under md the three links drop out
  and the wordmark plus the signup CTA stay, which keeps the bar one line at
  360px too.
*/
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.09] bg-[#0a0a0b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 md:px-8">
        <a
          href="#top"
          className="font-mono text-[15px] tracking-tight text-[#e8e8e6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3ddc97]"
        >
          {product.name.toLowerCase()}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] text-[#8b8b87] transition-colors duration-150 hover:text-[#3ddc97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3ddc97]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#pricing">{cta.primary}</Button>
      </div>
    </header>
  );
}
