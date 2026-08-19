import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/data/site";

const FOOTER_NAV = [
  { href: "/research", label: "Research" },
  { href: "/facilities-testbeds", label: "Facilities & Testbeds" },
  { href: "/people", label: "People" },
  { href: "/industry-affiliates", label: "Industry Affiliates" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-20">
      <div className="border-t-4 border-wolfred">
        <div className="container-site py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-sans text-sm tracking-[0.06em]">
                <span className="font-extrabold">NC STATE</span>{" "}
                <span className="font-light text-white/80">UNIVERSITY</span>
              </span>
              <span className="mt-1 font-display text-2xl font-bold">xGI Initiative</span>
            </div>
            <p className="mt-4 text-sm text-wolfgray-300 leading-relaxed">
              NC State University | xGI Initiative
              <br />
              Department of Electrical and Computer Engineering
              <br />
              909 Capability Dr, Raleigh, NC 27606
            </p>
          </div>

          <div>
            <h3 className="label-red !text-white/70 mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-wolfgray-300 hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-red !text-white/70 mb-3">Connect</h3>
            <p className="text-sm text-wolfgray-300">
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary !py-2 !px-4 text-xs">
                Contact Us
              </a>
              <Link href="/industry-affiliates" className="btn-ghost-light !py-2 !px-4 text-xs">
                Become an Affiliate
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-wolfgray-500">
          <span>© {new Date().getFullYear()} NC State University · xGI Initiative</span>
          <span>Department of Electrical and Computer Engineering</span>
        </div>
      </div>
    </footer>
  );
}
