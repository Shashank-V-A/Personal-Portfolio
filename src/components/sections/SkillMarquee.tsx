"use client";

import {
  formatSkillLabel,
  SkillBrandIcon,
} from "@/components/ui/SkillIcons";
import { skillCategories } from "@/lib/data";

function MarqueeItem({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-border/60 bg-card/70 px-5 py-2.5 backdrop-blur-sm">
      <div className="flex h-8 w-8 items-center justify-center">
        <SkillBrandIcon name={name} size={28} />
      </div>
      <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-foreground/80">
        {formatSkillLabel(name)}
      </span>
    </div>
  );
}

function MarqueeTrack({
  items,
  reverse,
  duration,
}: {
  items: readonly string[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div
      style={{ animationDuration: `${duration}s` }}
      className={`flex w-max shrink-0 items-center gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      <div className="flex items-center gap-4 pr-4" aria-hidden={false}>
        {items.map((name) => (
          <MarqueeItem key={name} name={name} />
        ))}
      </div>
      <div className="flex items-center gap-4 pr-4" aria-hidden>
        {items.map((name) => (
          <MarqueeItem key={`dup-${name}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export function SkillMarquee() {
  const frontend = skillCategories.find((c) => c.id === "frontend")!.items;
  const rest = skillCategories
    .filter((c) => c.id !== "frontend")
    .flatMap((c) => c.items);

  // Scale duration by item count so both rows travel at the same px/s speed.
  const secondsPerItem = 6.5;

  return (
    <div className="relative mt-16 w-full sm:mt-20">
      <div className="border-y border-border/50 bg-[#0c0c0c]/90 py-6 sm:py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

        <div className="space-y-4 overflow-hidden">
          <MarqueeTrack
            items={frontend}
            duration={frontend.length * secondsPerItem}
          />
          <MarqueeTrack
            items={rest}
            reverse
            duration={rest.length * secondsPerItem}
          />
        </div>
      </div>
    </div>
  );
}
