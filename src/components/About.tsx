import { ESTATE, SITE, whatsappUrl } from "@/lib/config";

export default function About() {
  const ctaHref = whatsappUrl(SITE.whatsapp.defaultMessage);

  return (
    <section
      className="bg-white"
      aria-label="About City of Angels Estate"
    >
      {/* ── Large display intro ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20">

        {/* Overline */}
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#8B1111] mb-6">
          About the Estate
        </p>

        {/* Asymmetric layout: big text left, description right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end mb-16">
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.03em] text-[#111] max-w-2xl text-balance"
          >
            {ESTATE.tagline}
          </h2>
          <div className="lg:max-w-xs xl:max-w-sm lg:pb-2">
            <p className="text-[15px] text-neutral-500 leading-relaxed">
              {ESTATE.description}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#8B1111] shrink-0" aria-hidden="true" />
                {ESTATE.location}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#8B1111] shrink-0" aria-hidden="true" />
                {ESTATE.titleDocument}
              </span>
            </div>
          </div>
        </div>

        {/* Highlights — card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ESTATE.highlights.map((h, i) => (
            <div
              key={h.label}
              className="p-6 bg-neutral-50 border border-neutral-100 rounded-2xl hover:border-neutral-200 hover:shadow-sm transition-all duration-300"
            >
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8B1111] mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-base font-bold text-[#111] mb-2">{h.label}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Developer bar ────────────────────────────────────── */}
      <div className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-1">
                Developed by
              </p>
              <p className="text-lg font-black text-[#111] tracking-tight">IM Properties</p>
            </div>
          </div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#8B1111] to-[#A81414] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(139,17,17,0.25)] hover:shadow-[0_8px_24px_rgba(139,17,17,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Schedule a viewing via WhatsApp"
          >
            Schedule a Viewing
          </a>
        </div>
      </div>
    </section>
  );
}
