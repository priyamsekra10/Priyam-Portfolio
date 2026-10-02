"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { Close, Menu } from "@/components/ui/Icons";

function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname === `${href}/`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name}, home`}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong bg-surface font-display text-sm font-semibold transition group-hover:border-accent group-hover:text-accent">
            PS
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm transition hover:text-ink ${
                isActive(item.href) ? "text-ink" : "text-muted"
              }`}
            >
              {item.title}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="btn btn-primary ml-3 !py-2">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="container-page pb-6 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col divide-y divide-line border-t border-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`mailto:${site.email}`} className="btn btn-primary mt-5 w-full">
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}

export default Nav;
