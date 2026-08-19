import type { Metadata } from "next";
import { faculty } from "@/lib/data/faculty";
import { PageHeader, FacultyCard } from "@/components/ui";

export const metadata: Metadata = { title: "People" };

const OVERVIEW =
  "xGI community brings together faculty across NC State University working at the forefront of next-generation wireless technologies. Our researchers span multiple disciplines — from RF hardware, circuits, and antennas to communication systems, networking, AI/ML, security, and emerging applications, such as robotics. Through close collaboration across these areas, xGI researchers address challenges across the entire wireless stack, combining fundamental research with system design and large-scale experimentation to advance future 6G communications and wireless-enabled systems.";

export default function PeoplePage() {
  const leadership = faculty.filter((f) => f.leadership);
  const associated = faculty
    .filter((f) => !f.leadership)
    .sort((a, b) => a.name.split(" ").pop()!.localeCompare(b.name.split(" ").pop()!));

  return (
    <>
      <PageHeader eyebrow="xGI Initiative" title="People" intro={OVERVIEW} />

      {/* Leadership */}
      <section className="container-site py-16 md:py-20">
        <p className="label-red mb-2">Leadership</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-8">
          Initiative Directors
        </h2>
        {/* Side by side from 640px up, each keeping the single-column card
            width (two 20rem cards plus the gap); stacked below that. */}
        <div className="grid gap-5 max-w-xs sm:grid-cols-2 sm:max-w-[41.25rem]">
          {leadership.map((f) => (
            <FacultyCard key={f.slug} f={f} />
          ))}
        </div>
      </section>

      {/* Associated faculty */}
      <section className="bg-wolfgray-50 border-y border-wolfgray-200">
        <div className="container-site py-16 md:py-20">
          <p className="label-red mb-2">Faculty</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-8">
            Associated Faculty
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {associated.map((f) => (
              <FacultyCard key={f.slug} f={f} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
