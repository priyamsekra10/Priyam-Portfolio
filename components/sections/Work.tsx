import Link from "next/link";
import React from "react";
import { featured, projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import FeaturedCase from "./FeaturedCase";
import ProjectCard from "./ProjectCard";

function Work() {
  const more = projects.slice(0, 3);

  return (
    <>
      <section id="work" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Live products"
              lead="Two products taken down that path and released on the App Store and Google Play."
            >
              Shipped, and in <span className="serif-accent">people&apos;s hands.</span>
            </SectionHeading>
          </Reveal>

          <div className="mt-14 space-y-8">
            {featured.map((project, index) => (
              <FeaturedCase key={project.slug} project={project} index={index} flip={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="More projects">
              Agents, voice and <span className="serif-accent">everything before.</span>
            </SectionHeading>
            <Link href="/projects" className="btn btn-ghost shrink-0 self-start sm:self-auto">
              All {projects.length} projects <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
