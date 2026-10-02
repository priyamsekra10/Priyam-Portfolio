import React from "react";

function SectionHeading({
  eyebrow,
  children,
  lead
}: {
  eyebrow: string;
  children: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
        {children}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}

export default SectionHeading;
