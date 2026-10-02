/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { FeaturedProject } from "@/data/projects";
import StoreBadges from "@/components/ui/StoreBadges";
import Reveal from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";
import { JunoVisual, TetherVisual } from "./ProjectVisuals";

function Visual({ project }: { project: FeaturedProject }) {
  if (project.slug === "juno") return <JunoVisual />;
  if (project.slug === "tether") return <TetherVisual icon={project.icon} />;
  return null;
}

function FeaturedCase({
  project,
  index,
  flip = false
}: {
  project: FeaturedProject;
  index: number;
  flip?: boolean;
}) {
  return (
    <Reveal>
      <article
        id={project.slug}
        className="card scroll-mt-24 overflow-hidden rounded-4xl"
        style={{ "--tint": project.tint } as React.CSSProperties}
      >
        <div className="tint-glow" />

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div className={flip ? "lg:order-2" : ""}>
            <div className="flex items-center justify-between">
              <p className="eyebrow">
                <span className="text-[rgb(var(--tint))]">{String(index + 1).padStart(2, "0")}</span>
                <span className="mx-2 text-faint">/</span>
                {project.org} · {project.period}
              </p>
              <span className="chip !border-emerald-400/30 !text-emerald-300">
                <span className="mr-1.5 h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                Live
              </span>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <img
                src={project.icon}
                alt={`${project.name} app icon`}
                width={64}
                height={64}
                className="h-16 w-16 rounded-2xl shadow-lg shadow-black/40"
              />
              <div>
                <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h3>
                <p className="mt-1 text-sm text-muted">{project.platforms}</p>
              </div>
            </div>

            <p className="serif-accent mt-7 text-3xl leading-tight text-ink sm:text-[2.1rem]">
              {project.tagline}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{project.summary}</p>

            <div className="mt-8">
              <p className="eyebrow">What I worked on</p>
              <ul className="mt-4 space-y-3">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[rgb(var(--tint)/0.18)] text-[rgb(var(--tint))]">
                      <Check size={10} strokeWidth={3.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>

            <StoreBadges links={project.links} className="mt-8" />
          </div>

          <div className={`flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
            <Visual project={project} />
            <ul className="mx-auto mt-8 grid w-full max-w-md gap-x-6 gap-y-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="border-l border-[rgb(var(--tint)/0.5)] pl-3 text-[13px] leading-snug text-muted">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.gallery && (
          <div
            className={`relative border-t border-line px-6 py-8 sm:px-10 lg:px-14 lg:py-10 ${
              project.gallery.images.length === 1 ? "sm:flex sm:items-center sm:gap-10" : ""
            }`}
          >
            <div className="max-w-2xl">
              <p className="eyebrow !text-[rgb(var(--tint))]">{project.gallery.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.gallery.caption}</p>
            </div>
            <ul
              className={
                project.gallery.images.length === 1
                  ? "mt-6 shrink-0 sm:order-first sm:mt-0"
                  : "-mx-6 mt-6 flex snap-x gap-4 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0"
              }
            >
              {project.gallery.images.map((image) => (
                <li key={image.src} className="shrink-0 snap-start">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-[22rem] w-auto rounded-2xl border border-line-strong sm:h-[26rem]"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        <dl className="relative grid grid-cols-2 gap-px border-t border-line bg-line lg:grid-cols-4">
          {project.facts.map((fact) => (
            <div key={fact.label} className="bg-surface px-6 py-5 sm:px-10 lg:px-14">
              <dt className="eyebrow !text-[10px]">{fact.label}</dt>
              <dd className="mt-1.5 font-display text-lg font-medium tracking-tight text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Reveal>
  );
}

export default FeaturedCase;
