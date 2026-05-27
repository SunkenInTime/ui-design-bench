export function GalleryCardLeavingSoonBookmark() {
  return (
    <div
      className="pointer-events-none absolute bottom-3 right-0 z-10 max-w-[42%] sm:bottom-4"
      aria-label="Archiving soon"
    >
      <div
        className="flex h-6 items-center bg-[#ecd06a] py-0.5 pl-3 pr-2 sm:pl-3.5 sm:pr-2.5"
        style={{
          clipPath:
            "polygon(0.5rem 50%, 0.75rem 0, 100% 0, 100% 100%, 0.75rem 100%)",
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.45)",
            "0 0 0 1px rgba(180,134,28,0.42)",
            "0 1px 2px rgba(0,0,0,0.08)",
            "0 3px 10px rgba(120,53,15,0.2)",
          ].join(", "),
        }}
        aria-hidden
      >
        <p className="whitespace-nowrap text-[10px] font-medium leading-none tracking-tight text-[#5c4212] sm:text-[11px]">
          Archiving soon
        </p>
      </div>
    </div>
  );
}
