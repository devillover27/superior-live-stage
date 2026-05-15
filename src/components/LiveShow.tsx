import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import crowd from "@/assets/crowd.jpg";
import singer1 from "@/assets/singer-1.jpg";
import singer2 from "@/assets/singer-2.jpg";
import guitarist from "@/assets/guitarist.jpg";
import drummer from "@/assets/drummer.jpg";
import lights from "@/assets/stage-lights.jpg";

const slides = [
  { img: crowd, caption: "Every Stage Has A Story", tag: "01 / CROWD" },
  { img: singer1, caption: "Every Night Becomes A Memory", tag: "02 / VOCAL" },
  { img: lights, caption: "Music That Moves Crowds", tag: "03 / LIGHT" },
  { img: guitarist, caption: "Strings That Burn The Air", tag: "04 / SIX-STRING" },
  { img: drummer, caption: "Rhythm Is A Heartbeat", tag: "05 / RHYTHM" },
  { img: singer2, caption: "Voices That Carry The Night", tag: "06 / SOUL" },
];

export function LiveShow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="shows" ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-background">
        <div className="relative z-10 flex items-center justify-between px-6 pt-10 md:px-12">
          <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 02 / LIVE SHOW</span>
          <span className="font-cinematic text-xs tracking-[0.3em] text-foreground/50">SCROLL HORIZONTAL ↦</span>
        </div>
        <h2 className="relative z-10 px-6 pt-2 font-display text-5xl leading-none md:px-12 md:text-7xl">
          Enter the <span className="italic text-gradient-gold">arena.</span>
        </h2>

        <motion.div style={{ x }} className="mt-8 flex h-full items-center gap-6 pl-6 md:pl-12">
          {slides.map((s, i) => (
            <div
              key={i}
              className="group relative h-[65vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-sm md:w-[55vw] lg:w-[42vw]"
            >
              <img
                src={s.img}
                alt={s.caption}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                <span className="font-cinematic text-xs tracking-[0.4em] text-[var(--gold)]">{s.tag}</span>
                <div>
                  <h3 className="font-display text-3xl leading-tight md:text-5xl">{s.caption}</h3>
                  <div className="mt-3 h-px w-16 bg-[var(--gold)]" />
                </div>
              </div>
            </div>
          ))}
          <div className="flex h-[65vh] w-[60vw] flex-shrink-0 items-center justify-center">
            <a
              href="#book"
              className="group flex flex-col items-center gap-3 font-cinematic text-sm tracking-[0.4em] text-[var(--gold)]"
            >
              <div className="rounded-full border border-[var(--gold)]/40 px-8 py-6 transition group-hover:bg-[var(--gold)] group-hover:text-background">
                BOOK THE EXPERIENCE
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
