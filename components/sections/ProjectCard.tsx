/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { Project } from "@/data/projects";
import { ArrowUpRight, GitHub, Globe, Pen } from "@/components/ui/Icons";
import ProjectCover from "./ProjectCover";

function primaryLink(project: Project) {
  const links = project.links;
  if (!links) return undefined;
  return links.website || links.demo || links.github || links.article || links.appStore || links.playStore;
}

function ProjectCard({ project }: { project: Project }) {
  const href = primaryLink(project);
  const links = project.links;

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:border-line-strong">
      {project.image ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-raised">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
              project.imageFit === "contain" ? "bg-white object-contain p-4" : "object-cover object-top"
            }`}
          />
        </div>
      ) : (
        <ProjectCover project={project} />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow !text-[10px]">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          {project.context && <span className="text-[11px] text-faint">{project.context}</span>}
        </div>

        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-1 text-sm text-ink/80">{project.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="chip !text-[10.5px]">
              {tag}
            </li>
          ))}
        </ul>

        {links && (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
            {(links.website || links.demo) && (
              <a
                href={links.website || links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition hover:text-accent"
              >
                <Globe size={14} /> {links.website ? "Visit site" : "Live demo"}
                <ArrowUpRight size={13} />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition hover:text-accent"
              >
                <GitHub size={14} /> Source <ArrowUpRight size={13} />
              </a>
            )}
            {links.article && (
              <a
                href={links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition hover:text-accent"
              >
                <Pen size={14} /> Read the write-up <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
