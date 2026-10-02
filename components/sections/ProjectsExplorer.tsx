"use client";
import React, { useMemo, useState } from "react";
import { categories, projects } from "@/data/projects";
import type { Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Filter = Category | "All";

function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");

  const available = useMemo(
    () => categories.filter((category) => projects.some((p) => p.category === category)),
    []
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {(["All", ...available] as Filter[]).map((option) => {
          const active = option === filter;
          const count =
            option === "All" ? projects.length : projects.filter((p) => p.category === option).length;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-ink bg-ink text-bg"
                  : "border-line text-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {option}
              <span className={`ml-2 font-mono text-[11px] ${active ? "text-bg/60" : "text-faint"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsExplorer;
