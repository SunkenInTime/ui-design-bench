/*
  Shared atoms for the "Utility" direction.

  Everything here encodes the three locks this page lives by:
    - palette: white page, #0c0c0c ink, #ff4d00 accent, #4a4a4a for muted body only
    - radius: zero, on every element including images
    - borders: solid ink at 2px (buttons) or 3px (structure), never a shadow

  Buttons invert on hover (orange block becomes ink block, ink block becomes ink
  with orange text). Both states keep an accessible pair: #0c0c0c on #ff4d00 and
  #ff4d00 on #0c0c0c are the same 5.8:1 ratio, so AA holds either way round. The
  orange stroke stays on the primary button in both states so it is still visible
  when it sits on the inverted black bands.
*/

/** Page gutter. One measure for every section so the vertical rules line up. */
export const shell = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

const buttonBase =
  "inline-flex items-center justify-center whitespace-nowrap border-2 font-jet font-bold uppercase tracking-[0.12em] transition-transform duration-100 ease-out active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]";

/** Signup intent. Black text on orange, orange text on black. */
export const primaryButton = `${buttonBase} border-[#ff4d00] bg-[#ff4d00] text-[#0c0c0c] hover:bg-[#0c0c0c] hover:text-[#ff4d00]`;

/** Demo intent. Used once, in the hero. */
export const secondaryButton = `${buttonBase} border-[#0c0c0c] bg-white text-[#0c0c0c] hover:bg-[#0c0c0c] hover:text-white`;

export const buttonLarge = "px-6 py-3.5 text-[13px]";
export const buttonSmall = "px-4 py-2.5 text-[11px]";

/** Section headings. Archivo 900, tight, sentence case with a full stop. */
export const sectionHeading =
  "font-archivo text-3xl font-black leading-[0.95] tracking-[-0.02em] md:text-4xl";

/** The single treatment that makes arbitrary picsum photography read as a system. */
export const photoTreatment = "grayscale contrast-[1.15]";
