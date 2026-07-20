"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const INTRO_HOLD_MS = 900;

export function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);

    if (media.matches) {
      const t = window.setTimeout(() => setVisible(false), 400);
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.2 : 0.7, ease: "easeInOut" }}
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

          <motion.div
            className="relative px-6 text-center"
            initial={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 16, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: reducedMotion ? 0.2 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={() => {
              window.setTimeout(
                () => setVisible(false),
                reducedMotion ? 200 : INTRO_HOLD_MS
              );
            }}
          >
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-muted">
              Portfolio
            </p>
            <h1 className="font-display text-5xl italic leading-none tracking-tight text-accent-light sm:text-6xl md:text-7xl">
              {siteConfig.name}
            </h1>
            <motion.div
              className="mx-auto mt-8 h-px w-16 origin-center accent-gradient"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: reducedMotion ? 0 : 0.45, duration: 0.6 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
