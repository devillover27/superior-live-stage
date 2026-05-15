import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hyd from "@/assets/hyderabad-night.jpg";

export function Nightlife() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={ref} className="relative h-[110vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img src={hyd} alt="Hyderabad night skyline" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      </motion.div>

      <motion.div style={{ y: titleY }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 06 / CITY</span>
        <h2 className="mt-6 font-display text-[14vw] leading-[0.85] text-glow-neon md:text-[10vw]">
          Hyderabad
        </h2>
        <h2 className="font-display text-[14vw] italic leading-[0.85] text-gradient-gold md:text-[10vw]">
          Nights.
        </h2>
        <div className="mt-8 flex gap-6 font-cinematic text-sm tracking-[0.4em] text-foreground/70 md:text-base">
          <span>LIVE LOUD</span>
          <span className="text-[var(--gold)]">·</span>
          <span>FEEL THE VIBE</span>
        </div>
      </motion.div>
    </section>
  );
}
