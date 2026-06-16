"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { publications, type Publication } from "@/lib/data/publications";
import { researchAreas, areaBySlug } from "@/lib/data/research";
import { facultyBySlug } from "@/lib/data/faculty";

// Maps the short facultyKey used in the publications data to the canonical
// faculty slug, so display names/links stay consistent with the People page
// (the source HTML has a couple of name typos we normalize away here).
const KEY_TO_SLUG: Record<string, string> = {
  ruozhou: "ruozhou-yu",
  mihail: "mihail-sichitiu",
  yuchen: "yuchen-liu",
  wenye: "wenye-wang",
  ismail: "ismail-guvenc",
  vijay: "vijay-shah",
  dara: "dara-ron",
  huaiyu: "huaiyu-dai",
  hamid: "hamid-krim",
  tianfu: "tianfu-wu",
  chauwai: "chau-wai-wong",
  xiaorui: "xiaorui-liu",
  sevgi: "sevgi-gurbuz",
  suresh: "suresh-venkatesh",
  brian: "brian-floyd",
  yuan: "yuan-liu",
  alexandra: "alexandra-duel-hallen",
  jake: "jake-adams",
  zhishan: "zhishan-guo",
  jaemin: "jaemin-lee",
  alper: "alper-bozkurt",
};

// Short labels for the area pills so the filter row stays compact.
const AREA_SHORT: Record<string, string> = {
  "intelligent-wireless-networking-distributed-systems": "Wireless",
  "ai-foundations-learning": "AI",
  "sensing-perception-integrated-intelligence": "Sensing",
  "communication-systems-hardware-platforms": "Hardware",
  "autonomous-systems-applications": "Autonomy",
};

function displayName(key: string, fallback: string): string {
  const slug = KEY_TO_SLUG[key];
  return (slug && facultyBySlug[slug]?.name) || fallback;
}

type Pill = { value: string; label: string; count: number };

export default function PublicationsExplorer() {
  const [area, setArea] = useState<string>("all");
  const [faculty, setFaculty] = useState<string>("all");
  const [awardsOnly, setAwardsOnly] = useState(false);

  // Faculty options, deduped by key and sorted by canonical display name.
  const facultyOptions: Pill[] = useMemo(() => {
    const map = new Map<string, Pill>();
    for (const p of publications) {
      const label = displayName(p.facultyKey, p.facultyName);
      const existing = map.get(p.facultyKey);
      if (existing) existing.count += 1;
      else map.set(p.facultyKey, { value: p.facultyKey, label, count: 1 });
    }
    return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const filtered: Publication[] = useMemo(() => {
    return publications.filter(
      (p) =>
        (area === "all" || p.areaSlug === area) &&
        (faculty === "all" || p.facultyKey === faculty) &&
        (!awardsOnly || p.award)
    );
  }, [area, faculty, awardsOnly]);

  const hasFilters = area !== "all" || faculty !== "all" || awardsOnly;

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

        {/* Faculty author — searchable dropdown + awards toggle */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8">
          <div className="w-full sm:max-w-xs">
            <span className="block text-xs font-sans font-bold uppercase tracking-[0.08em] text-ink mb-3">
              Faculty Author
            </span>
            <FacultyCombobox
              options={facultyOptions}
              total={publications.length}
              value={faculty}
              onChange={setFaculty}
              selectedLabel={faculty === "all" ? "All faculty" : displayName(faculty, faculty)}
            />
          </div>

          <label className="inline-flex items-center gap-2 cursor-pointer select-none sm:pb-2.5">
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
      </div>

      {/* Result count + reset */}
      <div className="mt-6 mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-wolfgray-700">
          Showing <span className="font-bold text-ink">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "publication" : "publications"}
          {area !== "all" && <> in {areaBySlug[area]?.title}</>}
          {faculty !== "all" && <> by {displayName(faculty, faculty)}</>}.
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setArea("all");
              setFaculty("all");
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
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFaculty(p.facultyKey)}
                    className="inline-block bg-wolfgray-100 hover:bg-wolfgray-200 text-ink/75 text-xs font-semibold rounded px-2.5 py-1 transition-colors"
                  >
                    {displayName(p.facultyKey, p.facultyName)}
                  </button>
                  {a && (
                    <Link
                      href={`/research/${a.slug}`}
                      className="inline-block text-xs font-semibold text-wolfred hover:underline"
                    >
                      Area {String(a.number).padStart(2, "0")} · {a.title}
                    </Link>
                  )}
                </div>
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

/** Searchable single-select dropdown for the faculty list. */
function FacultyCombobox({
  options,
  total,
  value,
  onChange,
  selectedLabel,
}: {
  options: Pill[];
  total: number;
  value: string;
  onChange: (value: string) => void;
  selectedLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const q = query.trim().toLowerCase();
  const matches = q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;

  const select = (v: string) => {
    onChange(v);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 bg-white border border-wolfgray-200 rounded px-3 py-2 text-sm text-ink hover:border-wolfgray-400 transition-colors"
      >
        <span className={value === "all" ? "text-ink/70" : "font-semibold"}>{selectedLabel}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden className="text-wolfgray-500">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-30 mt-1 w-full rounded-lg border border-wolfgray-200 bg-white shadow-[0_20px_40px_-18px_rgba(16,16,16,0.4)]">
          <div className="p-2 border-b border-wolfgray-100">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search authors…"
              className="w-full rounded border border-wolfgray-200 px-2.5 py-1.5 text-sm focus:outline-none focus:border-wolfred"
            />
          </div>
          <ul role="listbox" className="max-h-72 overflow-y-auto py-1">
            <li>
              <OptionButton
                label="All faculty"
                count={total}
                active={value === "all"}
                onClick={() => select("all")}
              />
            </li>
            {matches.map((o) => (
              <li key={o.value}>
                <OptionButton
                  label={o.label}
                  count={o.count}
                  active={value === o.value}
                  onClick={() => select(o.value)}
                />
              </li>
            ))}
            {matches.length === 0 && (
              <li className="px-3 py-2 text-sm text-wolfgray-500">No authors found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function OptionButton({
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
      className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-sm text-left transition-colors ${
        active ? "bg-wolfred/10 text-wolfred font-semibold" : "text-ink/85 hover:bg-wolfgray-50"
      }`}
    >
      <span>{label}</span>
      <span className={active ? "text-wolfred/70" : "text-wolfgray-500"}>{count}</span>
    </button>
  );
}
