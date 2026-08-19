"use client";

import { useEffect, useRef, useState } from "react";
import type { NewsItem } from "@/lib/data/site";
import { ImagePlaceholder } from "@/components/ui";
import { assetPath } from "@/lib/asset";

const CLAMP_LINES = 2;

export default function NewsCard({
  item,
  clamp = false,
  heading = "h3",
}: {
  item: NewsItem;
  /** Trim long excerpts to CLAMP_LINES with a show more / show less toggle. */
  clamp?: boolean;
  heading?: "h2" | "h3";
}) {
  const Heading = heading;
  const textRef = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Measured while the text is still at full height, then clamped — so the
  // server-rendered markup carries the whole excerpt and nothing is stranded
  // behind a toggle if hydration never happens.
  useEffect(() => {
    if (!clamp) return;
    const el = textRef.current;
    if (!el) return;

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 21;
    setNeedsToggle(el.scrollHeight / lineHeight > CLAMP_LINES + 0.05);
    setClamped(true);
  }, [clamp]);

  const showToggleRow = clamp && clamped;

  return (
    <article className="card flex h-full flex-col">
      {item.image ? (
        // Decorative: the headline below already names the conference or funder.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={assetPath(item.image)}
          alt=""
          loading="lazy"
          className={
            item.logo
              ? "card-logo aspect-[16/9] w-full object-contain bg-wolfgray-50 border-b border-wolfgray-200 p-6"
              : "aspect-[16/9] w-full object-cover"
          }
        />
      ) : (
        <ImagePlaceholder label="News image" className="aspect-[16/9] w-full" />
      )}

      <div className="p-5 flex flex-1 flex-col">
        {item.date && (
          <span className="text-xs text-wolfgray-500 uppercase tracking-wide">{item.date}</span>
        )}
        <Heading className="mt-1 font-display font-bold text-lg leading-snug">
          {item.headline}
        </Heading>
        {/* No flex-1 here: the card stretches to the row, and a growing
            paragraph would report the grown box rather than the text height,
            making the overflow measurement below meaningless. */}
        <p
          ref={textRef}
          className={`mt-2 text-sm text-wolfgray-700 ${
            clamped && !expanded ? "line-clamp-2" : ""
          }`}
        >
          {item.excerpt}
        </p>

        {showToggleRow && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            // Kept in the layout even when unused, so every card in a row is
            // the same height.
            className={`self-start mt-2 font-sans text-xs font-bold uppercase tracking-wide text-wolfred hover:underline ${
              needsToggle ? "" : "invisible"
            }`}
            tabIndex={needsToggle ? undefined : -1}
            aria-hidden={needsToggle ? undefined : true}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </article>
  );
}
