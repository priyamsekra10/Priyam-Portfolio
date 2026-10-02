/* eslint-disable @next/next/no-img-element */
import React from "react";
import { featured, projects } from "@/data/projects";
import ProjectsExplorer from "@/components/sections/ProjectsExplorer";
import StoreBadges from "@/components/ui/StoreBadges";
import ContactCTA from "@/components/sections/ContactCTA";

const description =
  "Everything I have built and shipped: Juno, Tether, and the agents, voice systems, computer vision and automation work that came before.";

export const metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects", description, url: "/projects" }
};

export default function Projects() {
  return (
    <>
      <section className="relative isolate pb-16 pt-32 sm:pt-40">
        <div className="backdrop" />
        <div className="container-page">
          <p className="eyebrow animate-rise">Projects · {featured.length + projects.length} in total</p>
          <h1
            className="mt-5 max-w-4xl animate-rise text-[clamp(2.5rem,6.4vw,4.6rem)] font-semibold leading-[1] tracking-[-0.035em]"
            style={{ animationDelay: "80ms" }}
          >
            Everything I&apos;ve <span className="serif-accent text-accent">built and shipped.</span>
          </h1>
          <p
            className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            Two live products at the top, then the agents, voice systems, computer vision and
            automation work that led to them.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <p className="eyebrow">Live products</p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {featured.map((project) => (
              <article
                key={project.slug}
                className="card flex flex-col overflow-hidden p-7 sm:p-9"
                style={{ "--tint": project.tint }}
              >
                <div className="tint-glow" />
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.icon}
                      alt={`${project.name} app icon`}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-2xl"
                    />
                    <div>
                      <h2 className="text-3xl font-semibold tracking-tight">{project.name}</h2>
                      <p className="text-sm text-muted">
                        {project.org} · {project.period} · {project.platforms}
                      </p>
                    </div>
                  </div>
                  <p className="serif-accent mt-6 text-2xl leading-tight">{project.tagline}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.summary}</p>
                  <p className="mt-5 text-sm text-ink/90">
                    <span className="eyebrow mr-2 !text-[10px]">My part</span>
                    {project.role}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <StoreBadges links={project.links} className="mt-auto pt-8" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="container-page">
          <p className="eyebrow mb-5">All other work</p>
          <ProjectsExplorer />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
