/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { site } from "@/data/site";
import { highlights, lifecycle } from "@/data/about";
import { ArrowRight, Download, GitHub, LinkedIn } from "@/components/ui/Icons";

function Hero() {
  return (
    <section className="relative isolate pb-16 pt-32 sm:pt-40 lg:pb-24">
      <div className="backdrop" />
      <div className="container-page grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <p className="eyebrow flex animate-rise items-center gap-2.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            {site.role} · End-to-end product builder
          </p>

          <h1
            className="mt-6 animate-rise text-[clamp(2.7rem,7.4vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
            style={{ animationDelay: "80ms" }}
          >
            From first idea to{" "}
            <span className="serif-accent text-accent">shipped product.</span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            I&apos;m {site.name}, an applied AI engineer and product lead. I handle the whole path:
            shaping the idea, scoping it, designing the architecture, building the voice and agentic
            systems, then deploying, launching and running them in production.
          </p>

          <div
            className="mt-9 flex animate-rise flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/#work" className="btn btn-primary">
              See the work <ArrowRight size={16} />
            </Link>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Download size={16} /> Resume
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn btn-ghost !px-3"
            >
              <GitHub size={18} />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn btn-ghost !px-3"
            >
              <LinkedIn size={18} />
            </a>
          </div>
        </div>

        <div className="animate-rise lg:justify-self-end" style={{ animationDelay: "200ms" }}>
          <div className="w-44 overflow-hidden rounded-3xl border border-line-strong bg-surface sm:w-56 lg:w-[17.5rem]">
            <img
              src="/work/priyam.jpg"
              alt={`Portrait of ${site.name}`}
              width={680}
              height={900}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="container-page mt-16 animate-rise lg:mt-20" style={{ animationDelay: "320ms" }}>
        <Link
          href="/#process"
          aria-label="See every phase I handle, from ideation to running the product"
          className="group block rounded-2xl border border-line bg-surface/60 p-4 transition hover:border-line-strong sm:p-5"
        >
          <p className="eyebrow">Every phase, handled by me</p>
          <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2.5">
            {lifecycle.map((phase, i) => (
              <li key={phase.title} className="flex items-center gap-2">
                <span className="rounded-full border border-line-strong bg-bg/60 px-3 py-1.5 text-[13px] font-medium text-ink">
                  <span className="mr-1.5 font-mono text-[10px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {phase.title}
                </span>
                <ArrowRight size={13} className="shrink-0 text-faint" />
              </li>
            ))}
            <li className="rounded-full bg-accent px-3 py-1.5 text-[13px] font-semibold text-bg">
              Live product
            </li>
          </ol>
        </Link>

        <dl className="mt-3 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-line bg-surface/60 p-4 sm:p-5">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold tracking-tight text-ink">
                  {item.value}
                </span>
                <span className="mt-1 block text-sm leading-snug text-muted">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
