import { motion } from "framer-motion";
import singer1 from "@/assets/singer-1.jpg";
import singer2 from "@/assets/singer-2.jpg";
import guitarist from "@/assets/guitarist.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 md:py-48">
      <div className="absolute inset-0 bg-stage opacity-50" />
      <div className="container relative mx-auto px-6">
        <div className="mb-16 flex flex-col gap-3">
          <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 01 / THE BAND</span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl"
          >
            15 Voices. <br />
            <span className="text-gradient-gold italic">1 Vibe.</span> <br />
            Unlimited madness.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="md:col-span-5 md:col-start-2"
          >
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              Born on the streets of <span className="text-[var(--gold)]">Hyderabad</span>, Superior Band is a live
              entertainment collective fusing Telugu melodies, club energy and stadium-scale spectacle into one
              cinematic night.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">
              Friendship-day blowouts, club residencies, multi-artist collaborations and stage takeovers — every show
              is engineered like a film, not a setlist.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { k: "150+", v: "Live Shows" },
                { k: "15", v: "Voices" },
                { k: "∞", v: "Madness" },
              ].map((s) => (
                <div key={s.v} className="border-l border-[var(--gold)]/30 pl-3">
                  <div className="font-display text-3xl text-gradient-gold md:text-4xl">{s.k}</div>
                  <div className="mt-1 font-cinematic text-[10px] tracking-[0.3em] text-foreground/50">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative md:col-span-5">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img src={singer1} alt="Lead vocalist mid-performance" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280}/>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute -bottom-12 -left-12 hidden aspect-[3/4] w-44 overflow-hidden rounded-sm ring-1 ring-[var(--gold)]/30 md:block"
            >
              <img src={guitarist} alt="Guitarist on stage" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280}/>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute -right-8 -top-8 hidden aspect-[3/4] w-36 overflow-hidden rounded-sm ring-1 ring-[var(--violet-glow)]/40 md:block"
            >
              <img src={singer2} alt="Female singer" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280}/>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mt-32 border-y border-[var(--gold)]/20 py-16 text-center"
        >
          <p className="font-display text-3xl italic leading-tight text-foreground md:text-5xl lg:text-6xl">
            "We don't perform shows. <br />
            <span className="text-gradient-gold">We create unforgettable nights."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
