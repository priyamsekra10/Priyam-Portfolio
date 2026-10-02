import React from "react";
import { education, experience, toolbox, ventures } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { site } from "@/data/site";

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="About">
              Applied AI engineer, <span className="serif-accent">product lead.</span>
            </SectionHeading>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                I&apos;m an applied AI engineer and product lead based in {site.location}. I work
                directly with clients and business teams to scope ambiguous problems, build inside
                their stack, and take AI systems from prototype to production.
              </p>
              <p>
                I&apos;m comfortable owning a deployment end to end: integrating with existing systems
                over APIs, OAuth and event-driven AWS pipelines, monitoring agents in production, and
                explaining the trade-offs in latency, cost and reliability to engineers and business
                stakeholders alike.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              <span>Also started</span>
              {ventures.map((venture) => (
                <a
                  key={venture.name}
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-ink transition hover:border-line-strong"
                >
                  {venture.name} <ArrowUpRight size={13} className="text-muted" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Experience</p>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {experience.map((role) => (
                <li key={role.org} className="grid gap-1 py-6 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                  <p className="font-mono text-xs text-muted sm:pt-1">{role.period}</p>
                  <div>
                    <p className="font-display text-xl font-medium tracking-tight">
                      {role.org}
                      <span className="ml-2 text-base font-normal text-muted">{role.title}</span>
                    </p>
                    {role.place && <p className="mt-0.5 text-xs text-faint">{role.place}</p>}
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{role.summary}</p>
                  </div>
                </li>
              ))}
              <li className="grid gap-1 py-6 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <p className="font-mono text-xs text-muted sm:pt-1">{education.period}</p>
                <div>
                  <p className="font-display text-xl font-medium tracking-tight">{education.degree}</p>
                  <p className="mt-0.5 text-xs text-faint">{education.school}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{education.detail}</p>
                </div>
              </li>
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className="eyebrow">Toolbox</p>
          <div className="mt-5 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {toolbox.map((group) => (
              <div key={group.group} className="bg-surface p-6">
                <h3 className="text-base font-medium tracking-tight">{group.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
