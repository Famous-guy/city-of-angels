import { PROPERTIES, PropertyUnit, whatsappUrl } from "@/lib/config";

function PropertyCard({ unit }: { unit: PropertyUnit }) {
  const hasShell = unit.finishOptions.includes("shell");
  const hasFull  = unit.finishOptions.includes("full");
  const waHref   = whatsappUrl(unit.whatsappMessage);
  const mainPrice = unit.priceSingle ?? (hasFull ? unit.priceFull : unit.priceShell) ?? "";

  return (
    <article className="group flex flex-col bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden hover:border-neutral-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-0.5">

      {/* Type tag */}
      <div className="px-7 pt-7 pb-0 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#8B1111]">
          {unit.type} · {unit.bedrooms} bed
        </span>
      </div>

      {/* Name */}
      <div className="px-7 pt-4 pb-0">
        <h3 className="text-xl font-black text-[#111] leading-tight tracking-tight">
          {unit.name}
        </h3>
      </div>

      {/* Description */}
      <div className="px-7 pt-3 pb-0 flex-1">
        <p className="text-sm text-neutral-500 leading-relaxed">{unit.description}</p>
      </div>

      {/* Price block */}
      <div className="px-7 pt-8 pb-0">
        {unit.priceSingle ? (
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-neutral-400 mb-1">From</p>
            <p className="text-[1.5rem] sm:text-[1.75rem] font-black text-[#111] leading-none tracking-tight break-all">{mainPrice}</p>
            <p className="text-xs text-neutral-400 mt-2">Fully Finished</p>
          </div>
        ) : (
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-neutral-400 mb-3">Pricing</p>
            <div className="flex flex-col xs:flex-row gap-5">
              {hasShell && unit.priceShell && (
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-neutral-400 mb-1">Shell</p>
                  <p className="text-[1.25rem] font-black text-neutral-600 leading-none break-all">{unit.priceShell}</p>
                </div>
              )}
              {hasFull && unit.priceFull && (
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-neutral-400 mb-1">Full</p>
                  <p className="text-[1.25rem] font-black text-[#111] leading-none break-all">{unit.priceFull}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="px-7 pb-7 pt-7 mt-auto">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex items-center justify-between w-full text-sm font-semibold text-neutral-600 hover:text-[#111] border-t border-neutral-200 pt-6 transition-all duration-300"
          aria-label={`Enquire about ${unit.name} on WhatsApp`}
        >
          <span>Enquire on WhatsApp</span>
          <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover/btn:bg-neutral-200 flex items-center justify-center transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0 translate-x-[-1px] group-hover/btn:translate-x-0 transition-transform" aria-hidden="true">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </div>
        </a>
      </div>
    </article>
  );
}

export default function Properties() {
  return (
    <section
      id="properties"
      className="bg-white border-t border-neutral-100"
      aria-label="Available property types"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 md:py-28">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#8B1111] mb-4">
              City of Angels — Port Harcourt
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-[#111] leading-tight tracking-tight">
              Available Property Types
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
            All units come with C of O title. Shell or fully finished. 20% deposit gets you started.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROPERTIES.map((unit) => (
            <PropertyCard key={unit.id} unit={unit} />
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-[11px] text-neutral-400 text-center leading-relaxed">
          Prices subject to change. Mortgage financing available through the Federal Mortgage Bank of Nigeria.
          Contact an agent for current availability and full payment plans.
        </p>
      </div>
    </section>
  );
}
