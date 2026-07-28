"use client";

import { motion } from "framer-motion";
import { SectionHeader, FadeIn } from "@/components/ui/SectionHeader";
import {
  formatSkillLabel,
  SkillBrandIcon,
} from "@/components/ui/SkillIcons";
import { skillCategories } from "@/lib/data";
import { SkillMarquee } from "@/components/sections/SkillMarquee";

function SkillTile({ name, index }: { name: string; index: number }) {
  return (
    <FadeIn delay={index * 0.03}>
      <motion.article
        whileHover={{ y: -3, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-border/80 bg-[#161616] px-2 py-3 shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-colors hover:border-accent/40 hover:bg-[#1a1a1a] sm:gap-2.5 sm:px-3 sm:py-3.5"
      >
        <div className="flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8">
          <SkillBrandIcon name={name} size={28} />
        </div>
        <p className="text-center text-[9px] font-semibold uppercase tracking-wider text-foreground/90 sm:text-[10px]">
          {formatSkillLabel(name)}
        </p>
      </motion.article>
    </FadeIn>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[480px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Skills"
          title="What I work with"
        />

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          {skillCategories.map((category) => (
            <div key={category.id} id={`skills-${category.id}`}>
              <div className="mb-3 border-b border-border/60 pb-2">
                <h3 className="font-display text-lg font-medium text-accent-light sm:text-xl">
                  {category.label}
                </h3>
                <p className="mt-0.5 text-xs text-muted sm:text-sm">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 lg:grid-cols-6 lg:gap-3">
                {category.items.map((name, i) => (
                  <SkillTile key={name} name={name} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SkillMarquee />
    </section>
  );
}
