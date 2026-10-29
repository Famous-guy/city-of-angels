import { SITE, whatsappUrl, telUrl } from "@/lib/config";

export default function ContactCTA() {
  const waHref  = whatsappUrl(SITE.whatsapp.defaultMessage);
  const tel1    = telUrl(SITE.phone.primary);
  const tel2    = telUrl(SITE.phone.secondary);

  return (
    <section
      id="contact"
      className="bg-white border-t border-neutral-100"
      aria-label="Contact IM Properties"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#8B1111] mb-4">
            Get in Touch
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-[#111] leading-tight tracking-tight mb-4">
            Ready to secure your home?
          </h2>
          <p className="text-neutral-500 text-base max-w-xl leading-relaxed">
            Speak directly with our agents. No forms, no waiting — just a quick conversation to answer your questions and help you move forward.
          </p>
        </div>

        {/* ── Primary action grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          {/* WhatsApp — takes 2 columns */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 group flex items-center gap-5 p-8 bg-gradient-to-br from-[#25D366]/5 to-transparent border-2 border-[#25D366]/20 rounded-3xl hover:border-[#25D366]/40 hover:shadow-[0_8px_32px_rgba(37,211,102,0.08)] transition-all duration-500 hover:-translate-y-0.5"
            aria-label="Chat with IM Properties on WhatsApp"
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 group-hover:scale-105 transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-8 h-8" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-neutral-400 mb-1.5">Fastest response</p>
              <p className="text-xl font-bold text-[#111] leading-tight mb-1">Chat on WhatsApp</p>
              <p className="text-sm text-neutral-500 truncate">Send a message now — we reply instantly</p>
            </div>
            <svg viewBox="0 0 24 24" fill="currentColor" className="hidden md:block w-6 h-6 text-neutral-300 group-hover:text-[#25D366] group-hover:translate-x-1 shrink-0 transition-all duration-300" aria-hidden="true">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </a>

          {/* Call Card */}
          <div className="flex flex-col gap-3 p-6 bg-neutral-50 border border-neutral-200 rounded-3xl">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-neutral-400 mb-2">Call an agent</p>
            <a
              href={tel1}
              className="group/phone flex items-center gap-3 hover:bg-white -mx-2 px-2 py-2.5 rounded-xl transition-all duration-200"
              aria-label={`Call ${SITE.phone.primaryDisplay}`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#8B1111]/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="#8B1111" className="w-4 h-4" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#111] truncate flex-1">
                {SITE.phone.primaryDisplay}
              </span>
            </a>
            
            <a
              href={tel2}
              className="group/phone flex items-center gap-3 hover:bg-white -mx-2 px-2 py-2.5 rounded-xl transition-all duration-200"
              aria-label={`Call ${SITE.phone.secondaryDisplay}`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#8B1111]/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="#8B1111" className="w-4 h-4" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#111] truncate flex-1">
                {SITE.phone.secondaryDisplay}
              </span>
            </a>
          </div>
        </div>

        {/* ── Office info ─────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pt-6 border-t border-neutral-100">
          <div className="flex-1">
            <p className="text-xs font-medium text-neutral-400 mb-1">Visit us</p>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-lg">{SITE.address}</p>
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="text-sm text-neutral-500 hover:text-[#8B1111] transition-colors shrink-0"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
