import React from "react";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import { GitHub, LinkedIn, Mail } from "@/components/ui/Icons";

function ContactCTA() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Reveal className="container-page">
        <div className="card relative overflow-hidden rounded-4xl px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="pattern absolute inset-0 opacity-60" />
          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
              Have something that needs to <span className="serif-accent text-accent">talk back?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m happy to talk about voice agents, LLM products, or a role where both matter.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                <Mail size={16} /> {site.email}
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <LinkedIn size={16} /> LinkedIn
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GitHub size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ContactCTA;
