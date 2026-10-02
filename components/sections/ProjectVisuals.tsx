/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Check } from "@/components/ui/Icons";

// Illustrations of each product's core flow, drawn in markup rather than
// screenshots so they stay sharp and on-theme. The venues and prompts are
// made-up examples.

function Step({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <span className="font-mono text-[10px] text-[rgb(var(--tint))]">{n}</span>
      <span className="eyebrow !text-[10px]">{label}</span>
    </div>
  );
}

const waveform = [34, 62, 48, 86, 58, 100, 72, 44, 90, 60, 38, 76, 52, 94, 66, 42, 80, 56, 30, 68];

export function JunoVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      <div className="rounded-[2rem] border border-line-strong bg-bg/70 p-4 shadow-2xl shadow-black/50 backdrop-blur sm:p-5">
        <div>
          <Step n="01" label="You ask" />
          <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[rgb(var(--tint))] px-4 py-2.5 text-sm font-medium text-white">
            Book a table for two tomorrow at 8.
          </div>
        </div>

        <div className="mt-5">
          <Step n="02" label="You pick from a shortlist" />
          <ul className="space-y-1.5">
            {[
              { name: "Osteria Lume", meta: "Italian · 0.4 mi", picked: true },
              { name: "Marlow & Finch", meta: "Bistro · 0.9 mi", picked: true },
              { name: "The Copper Fig", meta: "Mediterranean · 1.3 mi", picked: false }
            ].map((venue) => (
              <li
                key={venue.name}
                className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 ${
                  venue.picked ? "border-[rgb(var(--tint)/0.5)] bg-[rgb(var(--tint)/0.08)]" : "border-line bg-white/[0.02]"
                }`}
              >
                <span>
                  <span className="block text-sm font-medium text-ink">{venue.name}</span>
                  <span className="block text-xs text-muted">{venue.meta}</span>
                </span>
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full border ${
                    venue.picked
                      ? "border-transparent bg-[rgb(var(--tint))] text-white"
                      : "border-line-strong text-transparent"
                  }`}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <Step n="03" label="Juno calls" />
          <div className="rounded-xl border border-line bg-white/[0.02] px-3.5 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[rgb(var(--tint)/0.18)] text-[rgb(var(--tint))]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[rgb(var(--tint)/0.25)]" />
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.600 2.800c.500-.500 1.300-.500 1.800 0l2.200 2.500c.400.500.400 1.200 0 1.700L9.200 8.700c1.300 2.600 3.500 4.800 6.100 6.100l1.700-1.400c.500-.400 1.200-.400 1.700 0l2.500 2.200c.500.500.500 1.300 0 1.800l-1.300 1.500c-1 1.100-2.600 1.500-4 .900C10.200 17.600 6.400 13.800 4.200 8.100c-.600-1.400-.200-3 .900-4l1.500-1.300Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink">Calling Osteria Lume</span>
                  <span className="block text-xs text-muted">Says it is an AI when they answer</span>
                </span>
              </div>
              <span className="font-mono text-xs tabular-nums text-muted">0:47</span>
            </div>
            <div className="mt-3 flex h-8 items-center gap-[3px]">
              {waveform.map((h, i) => (
                <span
                  key={i}
                  className="wave-bar w-full rounded-full bg-[rgb(var(--tint)/0.7)]"
                  style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Step n="04" label="You get the confirmation" />
          <div className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/[0.07] px-3.5 py-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-400 text-bg">
              <Check size={15} strokeWidth={3} />
            </span>
            <span>
              <span className="block text-sm font-medium text-ink">Booked at Osteria Lume</span>
              <span className="block text-xs text-muted">Tomorrow, 8:00 PM · Table for 2</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TetherVisual({ icon }: { icon: string }) {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      <div className="rounded-[2rem] border border-line-strong bg-bg/70 p-4 shadow-2xl shadow-black/50 backdrop-blur sm:p-5">
        <div className="flex items-center gap-3">
          <img src={icon} alt="" className="h-11 w-11 rounded-xl" />
          <div>
            <p className="text-sm font-medium text-ink">Good evening</p>
            <p className="text-xs text-muted">One small thing for today</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-[rgb(var(--tint)/0.4)] bg-[rgb(var(--tint)/0.08)] p-4">
          <p className="eyebrow !text-[10px] !text-[rgb(var(--tint))]">Guided conversation</p>
          <p className="mt-2 font-serif text-xl italic leading-snug text-ink">
            “What is one thing you wish we did more often, just the two of us?”
          </p>
        </div>

        <div className="mt-4">
          <p className="eyebrow !text-[10px]">My Journey</p>
          <ol className="mt-3 space-y-0">
            {[
              { kind: "Photo", text: "First bike ride without stabilisers" },
              { kind: "Voice note", text: "“Dad, guess what happened at school”" },
              { kind: "Journal", text: "We finally talked about the move" }
            ].map((item, i, all) => (
              <li key={item.kind} className="relative flex gap-3 pb-4 last:pb-0">
                {i < all.length - 1 && (
                  <span className="absolute left-[5px] top-3 h-full w-px bg-line-strong" />
                )}
                <span className="relative mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border-2 border-[rgb(var(--tint))] bg-bg" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                    {item.kind}
                  </span>
                  <span className="block text-sm text-ink">{item.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-xl border border-line bg-white/[0.02] px-3.5 py-3">
          <span className="mt-0.5 text-[rgb(var(--tint))]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.800"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="10.500" width="14" height="10" rx="2.500" />
              <path d="M8 10.500V7.500a4 4 0 0 1 8 0v3" />
            </svg>
          </span>
          <span>
            <span className="block text-sm font-medium text-ink">Safe Space</span>
            <span className="block text-xs text-muted">
              Private journalling, with a reflection when you want one
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
