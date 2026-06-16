import Link from "next/link";
import type { Faculty } from "@/lib/data/faculty";
import { initials } from "@/lib/data/faculty";
import { assetPath } from "@/lib/asset";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Strong red/black page title band. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden hero-glow grain text-white">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-wolfred" aria-hidden />
      <div className="container-site relative z-10 py-16 md:py-24">
        {eyebrow && (
          <p className="label-red anim-rise mb-4" style={{ animationDelay: "0.05s" }}>
            {eyebrow}
          </p>
        )}
        <h1
          className="anim-rise font-display font-extrabold tracking-tight text-4xl md:text-6xl leading-[1.02] max-w-4xl"
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="anim-rise mt-6 max-w-3xl text-lg text-white/70 leading-relaxed"
            style={{ animationDelay: "0.28s" }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

/** Image placeholder with a clear label describing its purpose. */
export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`placeholder-block grid place-items-center text-center ${className}`}>
      <div className="px-4">
        <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-wolfgray-500">
          Image Placeholder
        </span>
        <span className="mt-1 block text-xs text-wolfgray-700">{label}</span>
      </div>
    </div>
  );
}

export function FacultyCard({ f }: { f: Faculty }) {
  return (
    <div className="card flex flex-col">
      <div className="aspect-square w-full overflow-hidden bg-wolfgray-100">
        {f.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={assetPath(f.photo)}
            alt={f.name}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-wolfred/10">
            <span className="font-display text-5xl font-extrabold text-wolfred/70">
              {initials(f.name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        {f.leadership && (
          <p className="text-xs font-sans font-bold uppercase tracking-wide text-wolfred mb-1">
            {f.leadership}
          </p>
        )}
        <h3 className="font-display text-lg font-bold leading-tight">{f.name}</h3>
        <p className="text-sm text-ink/80 mt-0.5">{f.title}</p>
        <p className="text-xs text-wolfgray-500">{f.department}</p>
        {f.lab && <p className="text-xs text-wolfred font-semibold mt-1">{f.lab}</p>}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {f.keywords.slice(0, 4).map((k) => (
            <span key={k} className="bg-wolfgray-100 text-ink/70 text-[11px] px-2 py-0.5 rounded-sm">
              {k}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-wide">
          {f.website && (
            <a href={f.website} target="_blank" rel="noopener noreferrer" className="text-wolfred hover:underline">
              Website
            </a>
          )}
          {f.website && f.email && <span className="text-wolfgray-300">|</span>}
          {f.email && (
            <a href={`mailto:${f.email}`} className="text-wolfred hover:underline">
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ReadMore({ href, children = "Read more" }: { href: string; children?: React.ReactNode }) {
  return (
    <Link href={href} className="link-red">
      {children}
      <Arrow />
    </Link>
  );
}
