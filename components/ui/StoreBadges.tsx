import React from "react";
import { Apple, GooglePlay, Globe, GitHub, ArrowUpRight, Pen } from "./Icons";

export type ProjectLinks = {
  appStore?: string;
  playStore?: string;
  website?: string;
  github?: string;
  demo?: string;
  article?: string;
};

function StoreButton({
  href,
  icon,
  kicker,
  label
}: {
  href: string;
  icon: React.ReactNode;
  kicker: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-2xl border border-line-strong bg-black/40 px-4 py-2.5 transition hover:border-white/40 hover:bg-black/70"
    >
      <span className="text-ink">{icon}</span>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] uppercase tracking-[0.12em] text-muted">{kicker}</span>
        <span className="mt-1 text-[15px] font-semibold text-ink">{label}</span>
      </span>
    </a>
  );
}

function TextLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm text-ink transition hover:border-white/40 hover:bg-white/5"
    >
      {icon}
      {label}
      <ArrowUpRight size={14} className="text-muted transition group-hover:text-ink" />
    </a>
  );
}

// Renders whichever links a project actually has; nothing is shown for missing ones.
function StoreBadges({ links, className = "" }: { links?: ProjectLinks; className?: string }) {
  if (!links) return null;
  const { appStore, playStore, website, github, demo, article } = links;
  if (!appStore && !playStore && !website && !github && !demo && !article) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {appStore && (
        <StoreButton
          href={appStore}
          icon={<Apple size={24} />}
          kicker="Download on the"
          label="App Store"
        />
      )}
      {playStore && (
        <StoreButton
          href={playStore}
          icon={<GooglePlay size={22} />}
          kicker="Get it on"
          label="Google Play"
        />
      )}
      {website && <TextLink href={website} icon={<Globe size={15} />} label="Website" />}
      {demo && <TextLink href={demo} icon={<Globe size={15} />} label="Live demo" />}
      {github && <TextLink href={github} icon={<GitHub size={15} />} label="Source" />}
      {article && <TextLink href={article} icon={<Pen size={15} />} label="Write-up" />}
    </div>
  );
}

export default StoreBadges;
