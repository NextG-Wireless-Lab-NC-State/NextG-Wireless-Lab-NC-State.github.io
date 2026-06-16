"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { publications, type Publication } from "@/lib/data/publications";
import { researchAreas, areaBySlug } from "@/lib/data/research";

// Short labels for the area pills so the filter row stays compact.
const AREA_SHORT: Record<string, string> = {
  "intelligent-wireless-networking-distributed-systems": "Wireless",
  "ai-foundations-learning": "AI",
  "sensing-perception-integrated-intelligence": "Sensing",
  "communication-systems-hardware-platforms": "Hardware",
  "autonomous-systems-applications": "Autonomy",
};

export default function PublicationsExplorer() {
  const [area, setArea] = useState<string>("all");
  const [awardsOnly, setAwardsOnly] = useState(false);

  const filtered: Publication[] = useMemo(() => {
    return publications.filter(
      (p) =>
        (area === "all" || p.areaSlug === area) &&
        (!awardsOnly || p.award)
    );
  }, [area, awardsOnly]);

  const hasFilters = area !== "all" || awardsOnly;

  return (
    <div>
      {/* Filter panel */}
      <div className="bg-wolfgray-50 border border-wolfgray-200 rounded-lg p-5 md:p-6 space-y-5">
        {/* Research area — compact pills */}
        <div>
          <span className="block text-xs font-sans font-bold uppercase tracking-[0.08em] text-ink mb-3">
            Research Area
          </span>
          <div className="flex flex-wrap gap-2">
            <AreaPill
              label="All"
              count={publications.length}
              active={area === "all"}
              onClick={() => setArea("all")}
            />
            {researchAreas.map((a) => (
              <AreaPill
                key={a.slug}
                label={`${String(a.number).padStart(2, "0")} ${AREA_SHORT[a.slug] ?? a.title}`}
                count={publications.filter((p) => p.areaSlug === a.slug).length}
                active={area === a.slug}
                onClick={() => setArea(a.slug)}
              />
            ))}
          </div>
        </div>

        {/* Awards toggle */}
        <label className="inline-flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={awardsOnly}
            onChange={(e) => setAwardsOnly(e.target.checked)}
            className="h-4 w-4 accent-wolfred"
          />
          <span className="text-sm font-sans font-semibold text-ink/80">
            Award-winning only
          </span>
        </label>
      </div>

      {/* Result count + reset */}
      <div className="mt-6 mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-wolfgray-700">
          Showing <span className="font-bold text-ink">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "publication" : "publications"}
          {area !== "all" && <> in {areaBySlug[area]?.title}</>}.
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setArea("all");
              setAwardsOnly(false);
            }}
            className="link-red text-xs"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="card p-6 text-wolfgray-700">
          No publications match the selected filters.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((p, i) => {
            const a = areaBySlug[p.areaSlug];
            return (
              <article
                key={`${p.facultyKey}-${i}-${p.title.slice(0, 24)}`}
                className="card p-5 md:p-6 border-l-4 border-l-transparent hover:border-l-wolfred transition-colors"
              >
                {p.award && (
                  <span className="inline-block mb-3 bg-wolfred/10 text-wolfred border border-wolfred/20 text-xs font-sans font-bold rounded-full px-3 py-1">
                    ★ {p.award}
                  </span>
                )}
                <h3 className="font-display font-bold text-lg md:text-xl text-ncnavy leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm md:text-[15px] text-ink/80">
                  <span className="font-semibold text-ink">Authors:</span> {p.authors}
                </p>
                <p className="mt-1 text-sm md:text-[15px] text-wolfgray-700">
                  <span className="font-semibold text-ink">Venue:</span> {p.venue}
                </p>
                {a && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Link
                      href={`/research/${a.slug}`}
                      className="inline-block text-xs font-semibold text-wolfred hover:underline"
                    >
                      Area {String(a.number).padStart(2, "0")} · {a.title}
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AreaPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-[13px] font-sans font-semibold rounded px-3 py-1.5 border transition-colors ${
        active
          ? "bg-wolfred text-white border-wolfred"
          : "bg-white text-ink/80 border-wolfgray-200 hover:border-wolfgray-400"
      }`}
    >
      {label}
      <span className={active ? "text-white/70" : "text-wolfgray-500"}> ({count})</span>
    </button>
  );
}
