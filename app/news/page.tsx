import type { Metadata } from "next";
import { news } from "@/lib/data/site";
import { PageHeader } from "@/components/ui";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = { title: "News and Updates" };

const INTRO =
  "Stay up to date with the latest research breakthroughs, partnerships, awards, and events from the xGI researchers and collaborators.";

export default function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="xGI Initiative" title="News and Updates" intro={INTRO} />

      {/* One list, newest first — no featured / archive split. */}
      <section className="container-site py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} heading="h2" />
          ))}
        </div>
      </section>
    </>
  );
}
