import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/data/site";
import { PageHeader, Arrow } from "@/components/ui";

export const metadata: Metadata = { title: "Industry Affiliates" };

const ABOUT = [
  "xGI at NC State University collaborates with industry, government, and research organizations to advance cutting-edge wireless technologies. Our interdisciplinary faculty work across wireless hardware, communication systems, networking, artificial intelligence, security, and emerging wireless-enabled applications.",
  "Through the xGI Affiliate Program, partners engage directly with leading researchers and gain early access to emerging technologies in 5G, 6G, wireless sensing, and connected systems.",
  "xGI combines fundamental research, system design, and large-scale experimental platforms to accelerate innovation and enable real-world validation of next-generation wireless technologies.",
];

const BENEFITS = [
  { title: "Early Access to Research", desc: "Engage with faculty developing the next generation of wireless technologies." },
  { title: "Collaborative Research", desc: "Participate in joint projects and large federal research initiatives." },
  { title: "Experimental Platforms", desc: "Access advanced wireless testbeds and large-scale experimentation environments." },
  { title: "Talent Pipeline", desc: "Recruit highly skilled graduate students and postdoctoral researchers." },
];

export default function IndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-glow grain text-white">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-wolfred" aria-hidden />
        <div className="container-site relative z-10 py-16 md:py-24">
          <p className="label-red anim-rise mb-4" style={{ animationDelay: "0.05s" }}>Industry Affiliates</p>
          <h1
            className="anim-rise font-display font-extrabold tracking-tight text-4xl md:text-6xl leading-[1.02] max-w-4xl"
            style={{ animationDelay: "0.15s" }}
          >
            Partner with xGI
          </h1>
          <p
            className="anim-rise mt-6 max-w-3xl text-lg text-white/70 leading-relaxed"
            style={{ animationDelay: "0.28s" }}
          >
            Partner with the xGI community to advance next-generation wireless technologies and
            accelerate the transition of research innovations into real-world systems.
          </p>
          <div className="anim-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
            <Link href="/industry-affiliates#join" className="btn-primary">
              Become an Affiliate <Arrow />
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ghost-light">
              Contact xGI
            </a>
          </div>
        </div>
      </section>

      {/* About the program */}
      <section className="container-site py-16 md:py-20">
        <p className="label-red mb-2">About the Affiliate Program</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6">
          Collaboration that moves research to reality
        </h2>
        <div className="grid gap-5 md:grid-cols-3 max-w-5xl">
          {ABOUT.map((p, i) => (
            <p key={i} className="text-base text-wolfgray-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-wolfgray-50 border-y border-wolfgray-200">
        <div className="container-site py-16 md:py-20">
          <p className="label-red mb-2">Why Partner with xGI</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-8">
            The value of membership
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="card p-6 flex flex-col">
                <span className="font-display font-extrabold text-4xl text-wolfred leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display font-bold text-lg leading-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-wolfgray-700">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join / contact */}
      <section id="join" className="bg-wolfred text-white scroll-mt-24">
        <div className="container-site py-16 md:py-20">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl max-w-3xl">
            Organizations interested in collaborating with xGI are encouraged to contact us.
          </h2>
          <p className="mt-5 text-lg">
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-semibold">
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="bg-white text-wolfred font-sans font-bold uppercase tracking-wide px-6 py-3 text-sm hover:bg-wolfgray-100"
            >
              Contact Us
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ghost-light">
              Become an Affiliate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
