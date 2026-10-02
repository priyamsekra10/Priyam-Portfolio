import Link from "next/link";
import React from "react";
import { nav, site } from "@/data/site";
import { ArrowUpRight, GitHub, LinkedIn, Mail, Pen } from "@/components/ui/Icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Applied AI engineer and product lead. Voice and agentic systems, from first idea to
            production.
          </p>
          <p className="mt-3 text-sm text-faint">{site.location}</p>
        </div>

        <div>
          <p className="eyebrow">Pages</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-muted transition hover:text-ink">
                Home
              </Link>
            </li>
            {nav
              .filter((item) => !item.href.startsWith("/#"))
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition hover:text-ink">
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-muted transition hover:text-ink"
              >
                <GitHub size={15} /> GitHub <ArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-muted transition hover:text-ink"
              >
                <LinkedIn size={15} /> LinkedIn <ArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a
                href={site.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-muted transition hover:text-ink"
              >
                <Pen size={15} /> Medium <ArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-muted transition hover:text-ink"
              >
                <Mail size={15} /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p className="font-mono">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
