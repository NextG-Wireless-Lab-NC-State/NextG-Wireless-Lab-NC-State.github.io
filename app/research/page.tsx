import type { Metadata } from "next";
import Link from "next/link";
import { researchAreas, researchIntro, researchPositioning } from "@/lib/data/research";
import { PageHeader, Arrow } from "@/components/ui";

export const metadata: Metadata = { title: "Research" };

export default function ResearchHubPage() {
  return (
    <>
      <PageHeader eyebrow="xGI Initiative" title="Research" intro={researchIntro} />

      {/* Positioning statement */}
      <section className="bg-wolfred text-white">
        <div className="container-site py-12">
          <p className="font-display font-bold text-2xl md:text-4xl leading-tight max-w-5xl">
            {researchPositioning}
          </p>
        </div>
      </section>

      {/* Research area cards */}
      <section className="container-site py-16 md:py-20">
        <p className="label-red mb-2">Research Areas</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-8">
          Five interconnected thrusts
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {researchAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/research/${area.slug}`}
              className="card group flex flex-col p-6 md:p-8 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <span className="font-display font-extrabold text-5xl md:text-6xl text-wolfgray-200 group-hover:text-wolfred transition-colors leading-none">
                  {String(area.number).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-2xl leading-tight pt-1">{area.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.keywords.map((k) => (
                  <span key={k} className="bg-wolfgray-100 text-ink/75 text-xs px-2.5 py-1">
                    {k}
                  </span>
                ))}
              </div>
              <span className="link-red mt-6">
                Read more <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
