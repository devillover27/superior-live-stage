import { motion } from "framer-motion";
import { Equalizer } from "./Equalizer";
import logo from "@/assets/superior-band-logo.jpg";

const tracks = [
  { t: "Hyderabad Anthem", d: "4:12", live: true },
  { t: "Telugu Night Mix", d: "5:48", live: true },
  { t: "Friendship Forever", d: "3:56", live: false },
  { t: "Stage Fire (Live)", d: "6:22", live: true },
  { t: "Madness Encore", d: "7:01", live: true },
];

export function Music() {
  return (
    <section id="music" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 04 / SOUND</span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl">
              Press <span className="italic text-gradient-gold">play.</span>
            </h2>
          </div>
          <Equalizer className="hidden md:flex" bars={32} />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Vinyl */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_oklch(0.18_0.02_270)_30%,_oklch(0.08_0.005_270)_31%,_oklch(0.18_0.02_270)_33%,_oklch(0.08_0.005_270)_35%,_oklch(0.15_0.02_270)_70%)] glow-gold"
              >
                <div className="absolute inset-[38%] flex items-center justify-center overflow-hidden rounded-full ring-2 ring-[var(--gold)]">
                  <img src={logo} alt="Superior Band" className="h-full w-full object-cover" />
                </div>
              </motion.div>
              <div className="absolute -inset-4 rounded-full border border-[var(--gold)]/20" />
              <div className="absolute -inset-10 rounded-full border border-[var(--gold)]/10" />
            </div>
          </motion.div>

          {/* Tracklist */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-[var(--gold)]/20 bg-card/40 p-6 backdrop-blur md:p-10">
              <div className="mb-6 flex items-center justify-between font-cinematic text-xs tracking-[0.3em] text-foreground/50">
                <span>SUPERIOR / LIVE SESSIONS</span>
                <span>{tracks.length} TRACKS</span>
              </div>
              <ul className="space-y-1">
                {tracks.map((tr, i) => (
                  <li
                    key={tr.t}
                    className="group flex cursor-pointer items-center justify-between gap-4 rounded-sm px-3 py-4 transition hover:bg-[var(--gold)]/5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-6 font-cinematic text-sm text-foreground/40">0{i + 1}</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--gold)]/40 transition group-hover:bg-[var(--gold)] group-hover:text-background">
                        <span className="ml-0.5 text-xs">▶</span>
                      </div>
                      <div>
                        <div className="font-display text-lg transition group-hover:text-gradient-gold">{tr.t}</div>
                        {tr.live && (
                          <span className="font-cinematic text-[9px] tracking-[0.3em] text-[var(--ember)]">● LIVE</span>
                        )}
                      </div>
                    </div>
                    <span className="font-cinematic text-xs tracking-widest text-foreground/50">{tr.d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cinematic text-xs tracking-[0.3em] text-[var(--gold)] underline-offset-4 hover:underline"
                >
                  ↗ FULL CHANNEL ON YOUTUBE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
