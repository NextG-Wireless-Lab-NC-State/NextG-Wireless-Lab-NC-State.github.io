import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import PublicationsExplorer from "@/components/PublicationsExplorer";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research Output"
        title="Publications"
        intro="Selected publications from xGI faculty across the initiative's five research areas, including journal articles, conference papers, and books. Filter by research area."
      />

      <section className="container-site py-14 md:py-20">
        <PublicationsExplorer />
      </section>
    </>
  );
}
