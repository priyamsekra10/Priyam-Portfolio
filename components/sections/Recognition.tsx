import React from "react";
import { awards, collaborators, publicationAuthors, publications, writing } from "@/data/about";
import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            lead="Awards, research and the people I have built and published with."
          >
            Tested outside <span className="serif-accent text-accent">the codebase.</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Awards and achievements</p>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {awards.map((award) => (
                <li key={award.title} className="grid grid-cols-[4.5rem_1fr] gap-4 py-5">
                  <p className="pt-0.5 font-mono text-xs text-accent">{award.year}</p>
                  <div>
                    <p className="font-display text-lg font-medium leading-snug tracking-tight">
                      {award.title}
                    </p>
                    {award.detail && <p className="mt-1 text-sm leading-relaxed text-muted">{award.detail}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Publications</p>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {publications.map((paper, i) => (
                <li key={paper.title} className="grid grid-cols-[2rem_1fr] gap-4 py-5">
                  <p className="pt-0.5 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <div>
                    <p className="font-display text-lg font-medium leading-snug tracking-tight">
                      {paper.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{paper.venue}</p>
                    {paper.note && <span className="chip mt-2.5">{paper.note}</span>}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-faint">All four by {publicationAuthors}.</p>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className="eyebrow">Collaborators</p>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {collaborators.map((person) => (
              <li key={person.name} className="bg-surface p-6">
                <p className="font-display text-lg font-medium tracking-tight">{person.name}</p>
                <p className="mt-1 text-sm text-muted">{person.affiliation}</p>
                <p className="mt-4 border-l border-accent/50 pl-3 text-[13px] leading-snug text-ink/80">
                  {person.work}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow">Writing</p>
            <a
              href={site.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-ink"
            >
              All posts on Medium <ArrowUpRight size={13} />
            </a>
          </div>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {writing.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-5 transition hover:text-accent"
                >
                  <span className="font-display text-lg font-medium leading-snug tracking-tight">
                    {post.title}
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-faint transition group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Recognition;
