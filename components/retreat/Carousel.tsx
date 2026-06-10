"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

/**
 * Swipeable image carousel.
 * - Touch / trackpad swipe on mobile (native scroll-snap).
 * - Arrow buttons on desktop.
 * - Dot indicators track the active slide.
 */
export default function Carousel({
  slides,
  aspect = "aspect-[4/5] sm:aspect-[16/10]",
}: {
  slides: Slide[];
  aspect?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, slides.length - 1));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  }, [slides.length]);

  /* keep the active dot in sync while the user swipes */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        setActive(Math.max(0, Math.min(i, slides.length - 1)));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [slides.length]);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-0 rounded-card-lg [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <div
            key={s.src + i}
            className={`relative ${aspect} w-full shrink-0 snap-center`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* arrows — desktop */}
      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => scrollToIndex(active - 1)}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-cream/85 text-ink hover:bg-cream transition-colors shadow-soft disabled:opacity-0"
        disabled={active === 0}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          ‹
        </span>
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => scrollToIndex(active + 1)}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-cream/85 text-ink hover:bg-cream transition-colors shadow-soft disabled:opacity-0"
        disabled={active === slides.length - 1}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          ›
        </span>
      </button>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-ink" : "w-2 bg-ink/25 hover:bg-ink/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
