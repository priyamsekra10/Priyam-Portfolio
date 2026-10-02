/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { lifecycle } from "@/data/about";
import { featured } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

function Lifecycle() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="How I work"
            lead="I take a product through every phase myself, from the first idea to the release and what comes after. No hand-offs between the thinking and the building."
          >
            One engineer, <span className="serif-accent text-accent">the whole path.</span>
          </SectionHeading>
        </Reveal>

        <Reveal className="mt-12">
          <div className="mb-4 flex items-center gap-4">
            <span className="eyebrow shrink-0 !text-ink">From idea</span>
            <span className="relative h-px flex-1 bg-gradient-to-r from-line-strong via-accent/60 to-accent">
              <span className="absolute -right-px top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-accent" />
            </span>
            <span className="eyebrow shrink-0 !text-accent">To live product</span>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((phase, i) => (
              <li key={phase.title} className="flex flex-col bg-surface p-6">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{phase.summary}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {phase.outputs.map((output) => (
                    <li key={output} className="chip !text-[10.5px]">
                      {output}
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="flex flex-col bg-accent p-6 text-bg">
              <span className="font-mono text-xs text-bg/70">Result</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">Live product</h3>
              <p className="mt-2 text-sm leading-relaxed text-bg/80">
                On the App Store and Google Play, with real people using it.
              </p>
              <div className="mt-auto space-y-2 pt-5">
                {featured.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/#${project.slug}`}
                    className="group flex items-center gap-2.5 rounded-xl bg-bg/10 px-2.5 py-2 text-sm font-medium transition hover:bg-bg/20"
                  >
                    <img src={project.icon} alt="" width={24} height={24} className="h-6 w-6 rounded-md" />
                    {project.name}
                    <ArrowRight size={14} className="ml-auto transition group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export default Lifecycle;
