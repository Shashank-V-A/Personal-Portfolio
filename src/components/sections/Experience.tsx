"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CertificateModal } from "@/components/ui/CertificateModal";
import { SectionHeader, FadeIn } from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

type ExperienceEntry = (typeof experience)[number];

function getCertificateImages(job: ExperienceEntry): string[] {
  if (job.certificateImages?.length) return job.certificateImages;
  if (job.certificateImage) return [job.certificateImage];
  return [];
}

function CompanyLogo({
  company,
  logoUrl,
}: {
  company: string;
  logoUrl?: string;
}) {
  const initials = company
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (logoUrl) {
    return (
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/80 bg-white p-1.5">
        <Image
          src={logoUrl}
          alt={`${company} logo`}
          width={32}
          height={32}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-[10px] font-bold text-accent-light">
      {initials}
    </div>
  );
}

function ExperienceRow({
  job,
  index,
  onViewCertificate,
}: {
  job: ExperienceEntry;
  index: number;
  onViewCertificate: (job: ExperienceEntry) => void;
}) {
  const hasCertificate = getCertificateImages(job).length > 0;

  return (
    <FadeIn delay={index * 0.06}>
      <motion.article
        whileHover={{ x: 2 }}
        transition={{ duration: 0.15 }}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 p-4 transition-colors sm:p-5",
          "hover:border-border-hover hover:bg-card-hover",
          "border-accent/20 ring-1 ring-inset ring-accent/10"
        )}
      >
        <div className="absolute inset-y-0 left-0 w-0.5 accent-gradient" />

        <div className="flex gap-3.5 sm:gap-4">
          <CompanyLogo company={job.company} logoUrl={job.logoUrl} />

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-foreground sm:text-[15px]">
                  {job.role}
                </h3>
                <p className="mt-0.5 text-sm text-accent-light/90">
                  {job.company}
                </p>
              </div>
              <span className="shrink-0 text-[11px] tabular-nums text-muted">
                {job.period}
              </span>
            </div>

            {job.location && (
              <p className="mt-1 flex items-center gap-1 text-[11px] text-muted">
                <MapPin size={11} className="shrink-0" />
                {job.location}
              </p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {job.description}
            </p>

            {job.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-xs leading-relaxed text-foreground/55"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/40 pt-3">
              {job.tech?.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/60 bg-background/50 px-2 py-0.5 text-[10px] text-muted"
                >
                  {t}
                </span>
              ))}

              {hasCertificate && (
                <button
                  type="button"
                  onClick={() => onViewCertificate(job)}
                  className={cn(
                    "inline-flex items-center gap-1 text-[11px] font-medium text-accent-light/80 transition-colors hover:text-accent",
                    job.tech?.length ? "sm:ml-auto" : ""
                  )}
                >
                  View certificate
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
}

export function Experience() {
  const [activeCertificate, setActiveCertificate] =
    useState<ExperienceEntry | null>(null);

  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[360px] w-[480px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Experience"
          title={"Where I've built\nand grown"}
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {experience.map((job, i) => (
            <ExperienceRow
              key={`${job.company}-${job.period}`}
              job={job}
              index={i}
              onViewCertificate={setActiveCertificate}
            />
          ))}
        </div>
      </div>

      {activeCertificate && getCertificateImages(activeCertificate).length > 0 && (
        <CertificateModal
          open={!!activeCertificate}
          onClose={() => setActiveCertificate(null)}
          title={`${activeCertificate.role} — ${activeCertificate.company}`}
          organization={activeCertificate.company}
          imageSrc={getCertificateImages(activeCertificate)}
        />
      )}
    </section>
  );
}
