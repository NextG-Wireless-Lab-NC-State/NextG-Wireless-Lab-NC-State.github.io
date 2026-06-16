"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset";

export type Slide = { src: string; alt: string };

/**
 * Crossfades through a set of images on a fixed interval. Respects
 * prefers-reduced-motion by holding on the first slide.
 */
export default function HeroCarousel({
  slides,
  interval = 4000,
  className = "",
}: {
  slides: Slide[];
  interval?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className={`relative ${className}`}>
      {slides.map((s, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.src}
          src={assetPath(s.src)}
          alt={s.alt}
          aria-hidden={i !== active}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Slide indicators */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
