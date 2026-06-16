import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { researchAreas, areaBySlug } from "@/lib/data/research";
import { facultyBySlug } from "@/lib/data/faculty";
import { PageHeader, FacultyCard, Arrow } from "@/components/ui";

export function generateStaticParams() {
  return researchAreas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = areaBySlug[params.slug];
  return { title: area ? area.title : "Research" };
}

export default function ResearchAreaPage({ params }: { params: { slug: string } }) {
  const area = areaBySlug[params.slug];
  if (!area) notFound();

  const facultyList = area.facultySlugs.map((s) => facultyBySlug[s]).filter(Boolean);

  // Other areas for inter-area navigation
  const others = researchAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHeader
        eyebrow={`Research Area ${String(area.number).padStart(2, "0")}`}
        title={area.title}
      />

      {/* Keyword strip */}
      <section className="bg-wolfgray-50 border-b border-wolfgray-200">
        <div className="container-site py-5 flex flex-wrap gap-2">
          {area.keywords.map((k) => (
            <span key={k} className="bg-white border border-wolfgray-200 text-ink/75 text-xs px-3 py-1">
              {k}
            </span>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="container-site py-14 md:py-16">
        <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
          <h2 className="label-red text-base">Overview</h2>
          <p className="text-lg md:text-xl leading-relaxed text-ink/90 max-w-4xl">{area.overview}</p>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-wolfgray-50 border-y border-wolfgray-200">
        <div className="container-site py-14 md:py-16">
          <p className="label-red mb-2">Faculty</p>
          <h2 className="font-display font-extrabold text-3xl mb-8">
            Researchers in this area
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facultyList.map((f) => (
              <FacultyCard key={f.slug} f={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Publications */}
      <section className="container-site py-14 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="label-red mb-2">Highlighted Publications</p>
            <h2 className="font-display font-extrabold text-3xl">Selected work</h2>
          </div>
          <Link href="/publications" className="link-red text-sm">
            Browse all publications <Arrow />
          </Link>
        </div>

        <div className="space-y-10">
          {area.publicationGroups.map((group) => (
            <div key={group.faculty}>
              <h3 className="font-display font-bold text-xl border-l-4 border-wolfred pl-3 mb-4">
                {group.faculty}
              </h3>
              <ul className="space-y-3">
                {group.items.map((pub, i) => (
                  <li
                    key={i}
                    className="card p-4 text-sm leading-relaxed text-ink/90 border-l-2 border-l-wolfred/0 hover:border-l-wolfred"
                  >
                    {pub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Explore other areas */}
      <section className="bg-ink text-white">
        <div className="container-site py-12">
          <p className="label-red mb-4">Continue exploring</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/research/${a.slug}`}
                className="border-2 border-white/20 hover:border-wolfred p-4 group transition-colors"
              >
                <span className="font-display font-extrabold text-2xl text-white/30 group-hover:text-wolfred">
                  {String(a.number).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display font-bold text-sm leading-snug flex items-center gap-1">
                  {a.title}
                </h3>
                <span className="link-red mt-2 text-xs">
                  Read more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
