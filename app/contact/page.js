import React from "react";
import { site } from "@/data/site";
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail, Pen } from "@/components/ui/Icons";

const description =
  "Get in touch with Priyam Sekra by email, LinkedIn or GitHub about AI products, voice agents, or a role where both matter.";

export const metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description, url: "/contact" }
};

const channels = [
  {
    label: "LinkedIn",
    value: "priyam-sekra",
    note: "Best for roles and introductions",
    href: site.socials.linkedin,
    icon: LinkedIn
  },
  {
    label: "GitHub",
    value: "priyamsekra10",
    note: "Code and side projects",
    href: site.socials.github,
    icon: GitHub
  },
  {
    label: "Medium",
    value: "@priyam22rr",
    note: "Write-ups on voice agents, RAG and AWS",
    href: site.socials.medium,
    icon: Pen
  },
  {
    label: "Resume",
    value: "Open the CV",
    note: "Experience, publications and awards",
    href: site.resume,
    icon: Download
  }
];

export default function Contact() {
  return (
    <section className="relative isolate pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="backdrop" />
      <div className="container-page">
        <p className="eyebrow animate-rise">Contact</p>
        <h1
          className="mt-5 animate-rise text-[clamp(2.5rem,6vw,4.4rem)] font-semibold leading-[1] tracking-[-0.035em]"
          style={{ animationDelay: "80ms" }}
        >
          Let&apos;s <span className="serif-accent text-accent">talk.</span>
        </h1>
        <p
          className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          Tell me what you are building, or just say hello. Email is the fastest way to reach me.
        </p>

        <div className="mt-12 grid animate-rise gap-5 lg:grid-cols-2" style={{ animationDelay: "240ms" }}>
          <a
            href={`mailto:${site.email}`}
            className="card group relative flex flex-col justify-between overflow-hidden p-7 transition hover:border-accent sm:p-9"
          >
            <div className="pattern absolute inset-0" />
            <div className="relative flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-bg">
                <Mail size={20} />
              </span>
              <ArrowUpRight size={20} className="text-faint transition group-hover:text-accent" />
            </div>
            <div className="relative mt-16">
              <p className="eyebrow">Email</p>
              <p className="mt-2 break-all font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {site.email}
              </p>
              <p className="mt-2 text-sm text-muted">Opens in your mail app</p>
            </div>
          </a>

          <ul className="grid gap-5">
            {channels.map(({ label, value, note, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-4 p-5 transition hover:border-line-strong sm:p-6"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line-strong text-ink transition group-hover:border-accent group-hover:text-accent">
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="eyebrow block !text-[10px]">{label}</span>
                    <span className="mt-1 block font-display text-lg font-medium tracking-tight">{value}</span>
                    <span className="block text-sm text-muted">{note}</span>
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-faint transition group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
