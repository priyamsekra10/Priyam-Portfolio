import React from "react";
import type { Category, CoverKind, Project } from "@/data/projects";

// Drawn covers for projects without a screenshot. Each one pairs the project
// name with a small motif of what the project does; the sample text inside the
// motifs is made up.

const tints: Record<Category, string> = {
  Product: "244 114 182",
  "Voice AI": "205 244 110",
  "Agents & LLMs": "150 134 255",
  "Computer vision": "84 200 232",
  Automation: "74 222 160",
  Data: "250 188 92"
};

function MemoryMotif() {
  return (
    <div className="flex w-full flex-col gap-1.5 text-[10px] leading-tight">
      <div className="ml-auto max-w-[78%] rounded-xl rounded-br-sm bg-[rgb(var(--tint)/0.9)] px-2.5 py-1.5 font-medium text-bg">
        Voice note, 0:42
      </div>
      <div className="max-w-[86%] rounded-xl rounded-bl-sm border border-line-strong bg-bg/70 px-2.5 py-1.5 text-ink/90">
        Saved 2 contacts and 1 reminder.
      </div>
      <div className="ml-auto max-w-[78%] rounded-xl rounded-br-sm bg-[rgb(var(--tint)/0.9)] px-2.5 py-1.5 font-medium text-bg">
        Who did I meet at that AI event?
      </div>
      <div className="max-w-[86%] rounded-xl rounded-bl-sm border border-line-strong bg-bg/70 px-2.5 py-1.5 text-ink/90">
        Two people. Here are their details.
      </div>
    </div>
  );
}

function ChatMotif() {
  return (
    <div className="flex w-full flex-col gap-1.5 text-[10px] leading-tight">
      <div className="flex items-center gap-1.5 rounded-lg border border-line-strong bg-bg/70 px-2.5 py-1.5 font-mono text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--tint))]" />
        yoursite.com/pricing
      </div>
      <div className="ml-auto max-w-[80%] rounded-xl rounded-br-sm bg-[rgb(var(--tint)/0.9)] px-2.5 py-1.5 font-medium text-bg">
        Is there a free plan?
      </div>
      <div className="max-w-[86%] rounded-xl rounded-bl-sm border border-line-strong bg-bg/70 px-2.5 py-1.5 text-ink/90">
        Yes. It is listed on the pricing page.
      </div>
    </div>
  );
}

function RadarMotif() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" fill="none" stroke="rgb(var(--tint))">
      <circle cx="60" cy="60" r="52" strokeOpacity="0.25" />
      <circle cx="60" cy="60" r="36" strokeOpacity="0.35" />
      <circle cx="60" cy="60" r="20" strokeOpacity="0.5" />
      <path d="M60 60 L97 23" strokeWidth="1.5" strokeOpacity="0.9" />
      <path d="M60 60 L97 23 A52 52 0 0 1 112 60 Z" fill="rgb(var(--tint))" fillOpacity="0.14" stroke="none" />
      <circle cx="86" cy="44" r="3.5" fill="rgb(var(--tint))" stroke="none" />
      <circle cx="40" cy="78" r="2.5" fill="rgb(var(--tint))" fillOpacity="0.6" stroke="none" />
      <circle cx="72" cy="88" r="2" fill="rgb(var(--tint))" fillOpacity="0.4" stroke="none" />
    </svg>
  );
}

function ChartMotif() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full" fill="none" preserveAspectRatio="none">
      <path
        d="M0 78 L18 70 L34 74 L52 52 L70 58 L88 36 L106 44 L124 22 L142 28 L160 10 L160 100 L0 100 Z"
        fill="rgb(var(--tint))"
        fillOpacity="0.12"
      />
      <path
        d="M0 78 L18 70 L34 74 L52 52 L70 58 L88 36 L106 44 L124 22 L142 28 L160 10"
        stroke="rgb(var(--tint))"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function BarsMotif() {
  const bars = [38, 56, 44, 72, 60, 88, 68];
  return (
    <div className="flex h-full w-full items-end gap-1.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-full rounded-t-sm bg-[rgb(var(--tint))]"
          style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.6 }}
        />
      ))}
    </div>
  );
}

function WaveMotif() {
  const bars = [22, 40, 64, 34, 82, 56, 96, 48, 74, 30, 60, 88, 42, 68, 26, 52];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5">
      {[0.9, 0.45].map((opacity, row) => (
        <div key={row} className="flex h-[38%] items-center gap-[3px]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-full rounded-full bg-[rgb(var(--tint))]"
              style={{ height: `${row === 0 ? h : bars[(i + 5) % bars.length]}%`, opacity }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function RankMotif() {
  const rows = [
    { w: 92, label: "0.94" },
    { w: 74, label: "0.81" },
    { w: 58, label: "0.66" },
    { w: 36, label: "0.42" }
  ];
  return (
    <div className="flex w-full flex-col gap-2">
      {rows.map((row, i) => (
        <div key={row.label} className="flex items-center gap-2">
          <span className="font-mono text-[9px] text-muted">{i + 1}</span>
          <span className="h-3 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <span
              className="block h-full rounded-full bg-[rgb(var(--tint))]"
              style={{ width: `${row.w}%`, opacity: 1 - i * 0.2 }}
            />
          </span>
          <span className="font-mono text-[9px] text-muted">{row.label}</span>
        </div>
      ))}
    </div>
  );
}

const motifs: Record<CoverKind, () => JSX.Element> = {
  memory: MemoryMotif,
  chat: ChatMotif,
  radar: RadarMotif,
  chart: ChartMotif,
  bars: BarsMotif,
  wave: WaveMotif,
  rank: RankMotif
};

function ProjectCover({ project }: { project: Project }) {
  const Motif = project.cover ? motifs[project.cover] : null;
  const tint = tints[project.category];

  return (
    <div
      className="relative flex aspect-[16/10] overflow-hidden border-b border-line bg-raised"
      style={{ "--tint": tint } as React.CSSProperties}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_0%_0%,rgb(var(--tint)/0.22),transparent_70%)]" />
      <div className="pattern absolute inset-0" />

      <div className="relative flex w-[46%] flex-col justify-between p-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(var(--tint))]">
          {project.category}
        </span>
        <span className="font-display text-[1.45rem] font-semibold leading-[1.05] tracking-tight text-ink">
          {project.name}
        </span>
      </div>

      <div className="relative flex w-[54%] items-center p-4 pl-0">{Motif && <Motif />}</div>
    </div>
  );
}

export default ProjectCover;
