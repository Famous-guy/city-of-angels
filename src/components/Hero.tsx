"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ESTATE, SITE, whatsappUrl, telUrl } from "@/lib/config";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    
    // Force play on mount
    const playVideo = async () => {
      try {
        await v.play();
        setPlaying(true);
        setLoaded(true);
      } catch (err) {
        console.log("Autoplay blocked:", err);
        setLoaded(true);
        setPlaying(false);
      }
    };

    // Small delay to ensure video element is ready
    const timer = setTimeout(playVideo, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const waHref = whatsappUrl(SITE.whatsapp.defaultMessage);
  const telHref = telUrl(SITE.phone.primary);

  return (
    <section
      id="estate"
      className="relative w-full overflow-hidden bg-[#0a0a0a]"
      style={{ height: "100svh", minHeight: 560 }}
      aria-label="City of Angels Estate"
    >
      {/* ── Full-viewport video ─────────────────────────────────── */}
      <video
        ref={videoRef}
        src={ESTATE.video}
        poster={ESTATE.videoPoster || undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />

      {/* Gradient overlay — heavier at bottom for text, lighter at top for nav */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 28%)",
            "linear-gradient(to top,    rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0) 70%)",
          ].join(", "),
        }}
      />

      {/* ── Content — sits over video ───────────────────────────── */}
      <div className="relative h-full flex flex-col justify-end pb-14 md:pb-16 lg:pb-20 px-5 lg:px-10 max-w-7xl mx-auto w-full">

        {/* Eyebrow */}
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 mb-4">
          IM Properties — Port Harcourt
        </p>

        {/* Main title */}
        <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-[0.95] tracking-[-0.03em] text-white mb-5 max-w-3xl text-balance">
          City of Angels
        </h1>

        {/* Location pill */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#C0392B] shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
            </svg>
            {ESTATE.location}
          </span>
        </div>

        {/* CTA row */}
        <div className="flex flex-col xs:flex-row gap-4 mb-10">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8B1111] to-[#A81414] text-white font-semibold text-sm px-8 py-4 rounded-2xl shadow-[0_8px_32px_rgba(139,17,17,0.35)] hover:shadow-[0_12px_40px_rgba(139,17,17,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Enquire on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Enquire on WhatsApp
          </a>
          <a
            href={telHref}
            className="group inline-flex items-center justify-center gap-2.5 glass text-white border border-white/25 hover:border-white/50 font-semibold text-sm px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            aria-label={`Call ${SITE.phone.primaryDisplay}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {SITE.phone.primaryDisplay}
          </a>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-2.5">
          {["C of O Title", "20% Deposit", "Mortgage Available", "Federal Mortgage Bank"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold tracking-wide text-white/70 glass border border-white/15 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Video controls — bottom right ───────────────────────── */}
      <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 flex gap-2">
        <button
          onClick={toggleMute}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors border border-white/10"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 19l2 2L21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
        <button
          onClick={togglePlay}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors border border-white/10"
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}
