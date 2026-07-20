"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { siteConfig } from "@/lib/data";

const githubUsername =
  siteConfig.social.github.split("/").filter(Boolean).pop() ?? "Shashank-V-A";

const theme = {
  dark: ["#161616", "#3d3420", "#8a6d1f", "#c9a227", "#fbbf24"],
};

function CalendarSkeleton() {
  return (
    <div
      className="mx-auto h-[140px] w-full max-w-[720px] animate-pulse rounded-lg bg-border/20"
      aria-hidden
    />
  );
}

export function GitHubContributions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
          <span className="ml-2 text-xs text-muted">github contributions</span>
        </div>
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent-light transition-colors hover:text-accent"
        >
          @{githubUsername}
        </a>
      </div>

      <div className="overflow-x-auto p-4 sm:p-6">
        <div className="mx-auto w-fit min-w-0 text-muted [&_.react-activity-calendar]:font-sans">
          {mounted ? (
            <GitHubCalendar
              username={githubUsername}
              colorScheme="dark"
              theme={theme}
              blockSize={11}
              blockMargin={3}
              fontSize={12}
              showColorLegend
              showWeekdayLabels
            />
          ) : (
            <CalendarSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}
