import type { Metadata } from "next";
import { news } from "@/lib/data/site";
import { PageHeader, ImagePlaceholder, Arrow } from "@/components/ui";

export const metadata: Metadata = { title: "News and Updates" };

const INTRO =
  "Stay up to date with the latest research breakthroughs, partnerships, awards, and events from the xGI researchers and collaborators.";

export default function NewsPage() {
  const latest = news.slice(0, 2);
  const older = news.slice(2);

  return (
    <>
      <PageHeader eyebrow="xGI Initiative" title="News and Updates" intro={INTRO} />

      <section className="container-site py-16 md:py-20">
        <p className="label-red mb-2">Latest News</p>
        <h2 className="font-display font-extrabold text-3xl mb-8">Recent highlights</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {latest.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-wolfgray-50 border-y border-wolfgray-200">
        <div className="container-site py-16 md:py-20">
          <p className="label-red mb-2">Older News</p>
          <h2 className="font-display font-extrabold text-3xl mb-8">From the archive</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {older.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <p className="container-site py-8 text-xs text-wolfgray-500 italic">
        All news entries are placeholders — to be replaced with final xGI content.
      </p>
    </>
  );
}

function NewsCard({ item }: { item: (typeof news)[number] }) {
  return (
    <article className="card flex flex-col">
      <ImagePlaceholder label="News image" className="aspect-[16/9] w-full" />
      <div className="p-5 flex flex-1 flex-col">
        <span className="text-xs text-wolfgray-500 uppercase tracking-wide">{item.date}</span>
        <h3 className="mt-1 font-display font-bold text-lg leading-snug">{item.headline}</h3>
        <p className="mt-2 text-sm text-wolfgray-700 flex-1">{item.excerpt}</p>
        <span className="link-red mt-4 text-xs">
          Read More <Arrow />
        </span>
      </div>
    </article>
  );
}
