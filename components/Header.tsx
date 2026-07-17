"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/data/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/people", label: "People" },
  { href: "/facilities-testbeds", label: "Facilities & Testbeds" },
  // { href: "/news", label: "News" }, — hidden for the time being
  { href: "/events", label: "Events" },
  { href: "/industry-affiliates", label: "Industry Affiliates" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-12px_rgba(16,16,16,0.25)]" : ""
      }`}
    >
      {/* Utility bar */}
      <div className="bg-ink text-white text-xs">
        <div className="container-site flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1.5">
          <span className="font-semibold tracking-wide">
            NC State University <span className="text-wolfgray-500">|</span> xGI Initiative
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-wolfred-DEFAULT hover:underline">
              {CONTACT_EMAIL}
            </a>
            <span className="hidden sm:inline text-wolfgray-500">|</span>
            <span className="hidden md:inline text-wolfgray-300">
              Department of Electrical and Computer Engineering (ECE)
            </span>
          </div>
        </div>
      </div>

      {/* Red identity band */}
      <div className="bg-wolfred text-white border-b-4 border-ink">
        <div className="container-site flex items-center justify-between gap-4 py-3">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-sans text-sm sm:text-base tracking-[0.06em] text-white">
              <span className="font-extrabold">NC STATE</span>{" "}
              <span className="font-light">UNIVERSITY</span>
            </span>
            <span className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight">
              xGI Initiative
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/industry-affiliates" className="btn-ghost-light !py-2 !px-4 text-xs">
              Become an Affiliate
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="bg-white text-wolfred font-sans font-bold uppercase tracking-wide px-4 py-2 text-xs hover:bg-wolfgray-100">
              Contact Us
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center p-2 -mr-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block bg-white border-b border-wolfgray-200">
        <div className="container-site">
          <ul className="flex flex-wrap">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block font-sans font-bold uppercase tracking-wide text-sm px-4 py-3.5 border-b-[3px] transition-colors ${
                      active
                        ? "border-wolfred text-wolfred"
                        : "border-transparent text-ink hover:text-wolfred hover:border-wolfgray-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-white border-b border-wolfgray-200 shadow-lg">
          <ul className="container-site py-2">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block font-sans font-bold uppercase tracking-wide text-sm py-3 border-l-4 pl-3 ${
                      active ? "border-wolfred text-wolfred" : "border-transparent text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex gap-3 py-3 pl-3">
              <Link href="/industry-affiliates" onClick={() => setOpen(false)} className="btn-primary !py-2 !px-4 text-xs">
                Become an Affiliate
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline !py-2 !px-4 text-xs">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
