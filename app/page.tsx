import Link from "next/link";
import { researchAreas } from "@/lib/data/research";
import { news, events, MISSION, VISION, CONTACT_EMAIL } from "@/lib/data/site";
import { Arrow, ImagePlaceholder, ReadMore } from "@/components/ui";
import Reveal from "@/components/Reveal";
import HeroCarousel from "@/components/HeroCarousel";

const HERO_SLIDES = [
  { src: "/home/cover.jpg", alt: "Close-up of an RF / microwave circuit developed at xGI" },
  { src: "/home/lab-group.jpg", alt: "xGI research group in the lab" },
  { src: "/home/workstation.jpg", alt: "xGI researchers at a development workstation" },
  { src: "/home/research-lab.jpg", alt: "xGI researcher working in a wireless sensing lab" },
  { src: "/home/conference.jpg", alt: "xGI students at a research conference" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero / feature area */}
      <section className="relative isolate overflow-hidden hero-glow grain text-white">
        <div className="container-site relative z-10 grid lg:grid-cols-12 gap-12 items-center py-20 md:py-28">
          {/* Headline */}
          <div className="lg:col-span-7">
            <p className="label-red anim-rise mb-5" style={{ animationDelay: "0.05s" }}>
              NC State University · Intelligent Wireless
            </p>
            <h1
              className="anim-rise font-display font-extrabold tracking-tight text-5xl md:text-7xl xl:text-[5.4rem] leading-[0.98]"
              style={{ animationDelay: "0.15s" }}
            >
              The Future of <span className="text-glow-red">Intelligent</span> Wireless Networked Systems
            </h1>
            <p
              className="anim-rise mt-7 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed"
              style={{ animationDelay: "0.28s" }}
            >
              xGI brings together communications, AI, sensing, hardware, and autonomous systems to
              build the technologies that define the FutureG era.
            </p>
            <div className="anim-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
              <Link href="/research" className="btn-primary">
                Explore Research <Arrow />
              </Link>
              <Link href="/people" className="btn-ghost-light">
                Meet the Faculty
              </Link>
            </div>
          </div>

          {/* Feature visual with floating chips */}
          <div className="lg:col-span-5 anim-rise" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/15 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
                <HeroCarousel slides={HERO_SLIDES} className="absolute inset-0 h-full w-full" />
              </div>
              {/* Stat chip */}
              <div className="absolute -top-4 -right-3 sm:-right-5 bg-wolfred text-white rounded-lg px-4 py-3 shadow-[0_18px_30px_-12px_rgba(204,0,0,0.7)]">
                <span className="block font-display font-extrabold text-3xl leading-none">5</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/85">Research Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="container-site py-20 md:py-28">
        <Reveal className="grid md:grid-cols-[220px,1fr] gap-6 md:gap-12">
          <div>
            <h2 className="label-red text-base">Our Mission</h2>
          </div>
          <p className="border-l-2 border-wolfred pl-6 md:pl-8 text-2xl md:text-[2rem] leading-[1.45] text-ink/90 font-display font-semibold max-w-4xl">
            {MISSION}
          </p>
        </Reveal>
      </section>

      {/* 3. Vision callout */}
      <section className="relative overflow-hidden bg-wolfred grain text-white">
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-10 left-2 text-[16rem] leading-none font-display font-black text-white/10"
        >
          &ldquo;
        </span>
        <div className="container-site relative z-10 py-16 md:py-24">
          <Reveal>
            <p className="label-red !text-white/80 mb-5">Our Vision</p>
            <p className="font-display font-bold text-3xl md:text-5xl xl:text-6xl leading-[1.08] max-w-5xl">
              {VISION}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. Research gateway */}
      <section className="container-site py-20 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="label-red mb-3">Research</p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">
              Five areas. One wireless fabric.
            </h2>
          </div>
          <ReadMore href="/research">Explore all research</ReadMore>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <Reveal key={area.slug} delay={i * 70} className="h-full">
              <Link
                href={`/research/${area.slug}`}
                className="card group flex h-full flex-col p-7"
              >
                <span className="font-display font-extrabold text-6xl text-wolfgray-200 group-hover:text-wolfred transition-colors duration-300 leading-none">
                  {String(area.number).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display font-bold text-xl leading-tight">{area.title}</h3>
                <p className="mt-3 text-sm text-wolfgray-700 flex-1">
                  {area.keywords.slice(0, 6).join(" · ")}
                </p>
                <span className="link-red mt-6">
                  Read more <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. News preview — hidden for the time being */}
      {false && (
      <section className="bg-ncolive text-white">
        <div className="container-site py-20 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-sans font-bold uppercase tracking-[0.12em] text-sm text-white/80 mb-3 inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-white/70" /> Latest
              </p>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl">News</h2>
            </div>
            <Link
              href="/news"
              className="font-sans font-bold uppercase tracking-wide text-sm text-white inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              All news <Arrow />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((item, i) => (
              <Reveal key={item.id} delay={i * 70} className="h-full">
                <article className="card flex h-full flex-col">
                  <ImagePlaceholder label="News image" className="aspect-[4/3] w-full" />
                  <div className="p-5 flex flex-1 flex-col">
                    <span className="text-xs text-wolfgray-500 uppercase tracking-wide">{item.date}</span>
                    <h3 className="mt-1 font-display font-bold text-lg leading-snug">{item.headline}</h3>
                    <p className="mt-2 text-sm text-wolfgray-700 flex-1">{item.excerpt}</p>
                    <span className="link-red mt-4 text-xs">
                      Read more <Arrow />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/70 italic">
            Placeholder news — to be replaced with final xGI content.
          </p>
        </div>
      </section>
      )}

      {/* 6. Upcoming events preview */}
      <section className="bg-ncnavy text-white">
        <div className="container-site py-20 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-sans font-bold uppercase tracking-[0.12em] text-sm text-white/80 mb-3 inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-white/70" /> Mark your calendar
              </p>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl">Upcoming Events</h2>
            </div>
            <Link
              href="/events"
              className="font-sans font-bold uppercase tracking-wide text-sm text-white inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              All events <Arrow />
            </Link>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {events.map((ev, i) => (
              <Reveal key={ev.id} delay={i * 80} className="h-full">
                <article className="card flex h-full flex-col sm:flex-row overflow-hidden">
                  <div className="relative overflow-hidden bg-ink text-white p-5 sm:w-40 shrink-0 flex flex-col justify-center">
                    {ev.image && (
                      <>
                        <span
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${ev.image})` }}
                          aria-hidden
                        />
                        <span className="absolute inset-0 bg-ink/60" aria-hidden />
                        <span className="absolute top-2 left-2 z-10 flex flex-col justify-center bg-wolfred px-1.5 py-1 leading-none text-white shadow-sm">
                          <span className="font-sans text-[11px] font-extrabold tracking-tight">NC STATE</span>
                          <span className="mt-0.5 font-sans text-[7px] font-light tracking-[0.14em]">UNIVERSITY</span>
                        </span>
                      </>
                    )}
                    <span className="relative label-red !text-wolfred before:hidden">Event</span>
                    <span className="relative mt-1 font-display font-bold text-lg">{ev.date}</span>
                    <span className="relative text-xs text-wolfgray-300 mt-1">{ev.location}</span>
                  </div>
                  <div className="p-5 flex flex-1 flex-col">
                    <h3 className="font-display font-bold text-lg leading-snug">{ev.title}</h3>
                    <p className="text-sm text-wolfgray-700 mt-1">Speaker: {ev.speaker}</p>
                    <p className="text-sm text-wolfgray-700">Topic: {ev.topic}</p>
                    <div className="mt-auto pt-4 flex gap-3">
                      {ev.url ? (
                        <>
                          <a
                            href={ev.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !py-2 !px-4 text-xs"
                          >
                            Register
                          </a>
                          <a
                            href={ev.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline !py-2 !px-4 text-xs"
                          >
                            Event Details
                          </a>
                        </>
                      ) : (
                        <>
                          <Link href="/events" className="btn-primary !py-2 !px-4 text-xs">
                            Register
                          </Link>
                          <Link href="/events" className="btn-outline !py-2 !px-4 text-xs">
                            Event Details
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Calls to action */}
      <section className="relative overflow-hidden bg-ink grain text-white">
        <div className="container-site relative z-10 py-20 md:py-24">
          <Reveal className="grid gap-5 md:grid-cols-4">
            <CtaCard href="/research" title="Explore Research" desc="Five research areas across the wireless stack." />
            <CtaCard href="/people" title="Meet the Faculty" desc="Researchers across NC State." />
            <CtaCard href="/industry-affiliates" title="Become an Affiliate" desc="Partner with xGI on FutureG." primary />
            <CtaCard href={`mailto:${CONTACT_EMAIL}`} title="Contact xGI" desc={CONTACT_EMAIL} external />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CtaCard({
  href,
  title,
  desc,
  primary,
  external,
}: {
  href: string;
  title: string;
  desc: string;
  primary?: boolean;
  external?: boolean;
}) {
  const inner = (
    <div
      className={`h-full p-6 rounded-lg border-2 transition-all duration-300 group hover:-translate-y-1 ${
        primary
          ? "bg-wolfred border-wolfred hover:bg-wolfred-dark shadow-[0_18px_40px_-20px_rgba(204,0,0,0.7)]"
          : "border-white/15 bg-white/[0.03] hover:border-wolfred hover:bg-white/[0.06]"
      }`}
    >
      <h3 className="font-display font-bold text-xl flex items-center justify-between gap-2">
        {title}
        <Arrow className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
      </h3>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
    </div>
  );
  return external ? <a href={href}>{inner}</a> : <Link href={href}>{inner}</Link>;
}
