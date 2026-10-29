"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE, whatsappUrl } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const ctaHref = whatsappUrl(SITE.whatsapp.defaultMessage);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-white shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[72px] flex items-center justify-between">

        {/* Wordmark */}
        <Link href="/" aria-label="IM Properties" className="flex items-baseline gap-[5px] group">
          <span
            className={`text-[22px] font-black tracking-[-0.04em] leading-none transition-all duration-300 ${
              scrolled ? "text-[#111]" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            }`}
          >
            im
          </span>
          <span
            className={`text-[10px] font-bold tracking-[0.18em] uppercase leading-none transition-all duration-300 ${
              scrolled ? "text-[#8B1111]" : "text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            }`}
          >
            properties
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {["#estate", "#properties", "#contact"].map((href, i) => {
            const labels = ["The Estate", "Properties", "Contact"];
            return (
              <Link
                key={href}
                href={href}
                className={`text-[13px] font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] ${
                  scrolled
                    ? "text-neutral-600 hover:text-neutral-900"
                    : "text-white/80 hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                }`}
              >
                {labels[i]}
              </Link>
            );
          })}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center text-[13px] font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
              scrolled
                ? "bg-gradient-to-r from-[#8B1111] to-[#A81414] text-white shadow-[0_4px_16px_rgba(139,17,17,0.25)] hover:shadow-[0_6px_20px_rgba(139,17,17,0.35)]"
                : "glass text-white border border-white/30 hover:bg-white/20"
            }`}
          >
            Contact an Agent
          </a>

          <button
            className={`md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-all duration-200 ${
              scrolled ? "bg-neutral-100 hover:bg-neutral-200" : "glass hover:bg-white/10"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-200 ${open ? "rotate-45 translate-y-[6.5px]" : ""} ${scrolled ? "bg-neutral-900" : "bg-white"}`} />
            <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-200 ${open ? "opacity-0" : ""} ${scrolled ? "bg-neutral-900" : "bg-white"}`} />
            <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""} ${scrolled ? "bg-neutral-900" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out glass-white ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile">
          {[["#estate", "The Estate"], ["#properties", "Properties"], ["#contact", "Contact"]].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3.5 px-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 mb-1 flex items-center justify-center bg-gradient-to-r from-[#8B1111] to-[#A81414] text-white text-sm font-semibold py-4 rounded-2xl hover:shadow-lg transition-all"
          >
            Contact an Agent
          </a>
        </nav>
      </div>
    </header>
  );
}
