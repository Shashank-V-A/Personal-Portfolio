"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { resumeInfo, siteConfig } from "@/lib/data";

export function Resume() {
  const { education, includes } = resumeInfo;

  return (
    <section id="resume" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Resume"
          title={"Grab the full\nPDF resume"}
          
        />

        <FadeIn className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid lg:grid-cols-5">
              {/* Resume PDF preview */}
              <div className="relative border-b border-border bg-[#111] p-6 sm:p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-accent-light" />
                    <span className="text-xs font-medium uppercase tracking-widest text-muted">
                      Preview
                    </span>
                  </div>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted transition-colors hover:text-accent-light"
                  >
                    Open in new tab
                  </a>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
                  <div className="h-1 w-full accent-gradient" />
                  <iframe
                    src={`${siteConfig.resumeUrl}#toolbar=0&navpanes=0`}
                    title={`${siteConfig.name} resume preview`}
                    className="h-[min(85vh,960px)] w-full bg-white"
                  />
                </div>
              </div>

              {/* Download panel */}
              <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-10">
                <span className="inline-block w-fit rounded-full accent-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                  PDF · Updated 2026
                </span>

                <h3 className="mt-5 font-display text-2xl font-medium text-foreground sm:text-3xl">
                  Download my resume
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A single PDF with my internships, projects, skills, education,
                  and hackathon wins — ready to share with one click.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {includes.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-1.5">
                    <Image
                      src={education.logoUrl}
                      alt={`${education.school} logo`}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      CGPA {education.cgpa}
                    </p>
                    <p className="text-xs text-muted">{education.school}</p>
                  </div>
                </div>

                <Button
                  href={siteConfig.resumeUrl}
                  size="lg"
                  className="mt-8 w-full"
                  download
                >
                  <Download size={18} />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
