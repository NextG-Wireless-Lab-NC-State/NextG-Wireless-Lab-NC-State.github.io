import type { Metadata } from "next";
import { events, CONTACT_EMAIL } from "@/lib/data/site";
import { PageHeader, Arrow } from "@/components/ui";

export const metadata: Metadata = { title: "Events" };

const INTRO =
  "xGI hosts seminars, workshops, symposiums, and industry engagement events that bring together researchers, students, industry leaders, and government partners to discuss emerging wireless technologies and collaborative opportunities.";

export default function EventsPage() {
  const upcoming = events.filter((e) => !e.past);
  const past = events.filter((e) => e.past);

  return (
    <>
      <PageHeader eyebrow="xGI Initiative" title="Events" intro={INTRO} />

      {/* Upcoming */}
      <section className="container-site py-16 md:py-20">
        <p className="label-red mb-2">Upcoming Events</p>
        <h2 className="font-display font-extrabold text-3xl mb-8">What&apos;s next</h2>
        <div className="space-y-5">
          {upcoming.map((ev) => (
            <EventRow key={ev.id} ev={ev} />
          ))}
        </div>
      </section>

      {/* Past */}
      <section className="bg-wolfgray-50 border-y border-wolfgray-200">
        <div className="container-site py-16 md:py-20">
          <p className="label-red mb-2">Past Events</p>
          <h2 className="font-display font-extrabold text-3xl mb-8">Archive</h2>
          {past.length === 0 ? (
            <div className="card p-8 text-center text-wolfgray-700">
              <p className="font-sans font-bold uppercase text-sm text-wolfgray-500">Placeholder</p>
              <p className="mt-2">Past event listings will appear here once available.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {past.map((ev) => (
                <EventRow key={ev.id} ev={ev} past />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function EventRow({ ev, past }: { ev: (typeof events)[number]; past?: boolean }) {
  return (
    <article className="card flex flex-col md:flex-row overflow-hidden">
      <div className="relative overflow-hidden bg-ink text-white p-6 md:w-56 shrink-0 flex flex-col justify-center">
        {ev.image && (
          <>
            <span
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ev.image})` }}
              aria-hidden
            />
            <span className="absolute inset-0 bg-ink/60" aria-hidden />
            <span className="absolute top-2 left-2 z-10 flex flex-col justify-center bg-wolfred px-2 py-1.5 leading-none text-white shadow-sm">
              <span className="font-sans text-xs font-extrabold tracking-tight">NC STATE</span>
              <span className="mt-0.5 font-sans text-[8px] font-light tracking-[0.14em]">UNIVERSITY</span>
            </span>
          </>
        )}
        <span className="relative label-red !text-wolfred">{past ? "Past Event" : "Upcoming"}</span>
        <span className="relative mt-1 font-display font-bold text-xl">{ev.date}</span>
        <span className="relative text-sm text-wolfgray-300 mt-1">{ev.location}</span>
      </div>
      <div className="p-6 flex flex-1 flex-col">
        <h3 className="font-display font-bold text-xl leading-snug">{ev.title}</h3>
        <dl className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-wolfgray-700">
          <div>
            <dt className="inline font-semibold text-ink">Speaker: </dt>
            <dd className="inline">{ev.speaker}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-ink">Topic: </dt>
            <dd className="inline">{ev.topic}</dd>
          </div>
        </dl>
        {!past && (
          <div className="mt-auto pt-5 flex flex-wrap gap-3">
            <a
              href={ev.url ?? `mailto:${CONTACT_EMAIL}`}
              {...(ev.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn-primary !py-2 !px-4 text-xs"
            >
              Register
            </a>
            <a
              href={ev.url ?? `mailto:${CONTACT_EMAIL}`}
              {...(ev.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn-outline !py-2 !px-4 text-xs"
            >
              Event Details <Arrow />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
