import type { Metadata } from "next";
import { facilities } from "@/lib/data/site";
import { PageHeader, ImagePlaceholder } from "@/components/ui";
import { assetPath } from "@/lib/asset";

export const metadata: Metadata = { title: "Facilities and Testbeds" };

const OVERVIEW =
  "xGI provides access to advanced experimental platforms, wireless testbeds, and measurement facilities that enable the design, prototyping, and real-world validation of next-generation wireless technologies. These facilities support research across the full wireless stack, from RF hardware and antennas to large-scale networked systems and intelligent wireless applications.";

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="xGI Initiative"
        title="Facilities and Testbeds"
        intro={OVERVIEW}
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {facilities.map((fac) => {
            const cardContent = (
              <>
                {fac.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={assetPath(fac.image)}
                    alt={`${fac.name} — facility photo`}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <ImagePlaceholder
                    label={`${fac.name} — facility photo`}
                    className="aspect-[16/9] w-full"
                  />
                )}

                <div className="p-6 flex flex-1 flex-col">
                  <h2 className="font-display font-bold text-2xl border-l-4 border-wolfred pl-3">
                    {fac.name}
                  </h2>

                  <p className="mt-4 text-sm md:text-base text-wolfgray-700 leading-relaxed">
                    {fac.blurb}
                  </p>
                </div>
              </>
            );

            return fac.url ? (
              <a
                key={fac.name}
                href={fac.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the ${fac.name} website`}
                className="card flex flex-col overflow-hidden cursor-pointer"
              >
                {cardContent}
              </a>
            ) : (
              <article
                key={fac.name}
                className="card flex flex-col overflow-hidden"
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}