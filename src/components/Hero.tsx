import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { Equalizer } from "./Equalizer";
import heroImg from "@/assets/hero-concert.jpg";
import logo from "@/assets/superior-band-logo.jpg";

const loop = ["Live Performances", "Concert Experiences", "Hyderabad Nights", "Musical Madness", "Live Energy"];

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-background grain">
      {/* Background montage */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Superior Band live concert stage"
          className="h-full w-full object-cover scale-110 mask-fade-b"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-stage opacity-80" />
      </div>

      {/* Spotlight sweeps */}
      <div className="absolute -top-1/2 left-1/4 h-[160vh] w-[40vw] origin-top spotlight-sweep bg-gradient-to-b from-[var(--gold)]/25 via-[var(--gold)]/8 to-transparent blur-2xl" />
      <div
        className="absolute -top-1/2 right-1/4 h-[160vh] w-[40vw] origin-top spotlight-sweep bg-gradient-to-b from-[var(--violet-glow)]/25 via-[var(--violet-glow)]/8 to-transparent blur-2xl"
        style={{ animationDelay: "-4s" }}
      />

      <Particles count={50} />

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Superior Band logo" className="h-10 w-10 rounded-full ring-1 ring-[var(--gold)]/40" />
          <span className="font-cinematic text-sm tracking-[0.4em] text-[var(--gold)]">SUPERIOR / EST. HYD</span>
        </div>
        <div className="hidden items-center gap-8 font-cinematic text-xs tracking-[0.3em] text-foreground/70 md:flex">
          <a href="#about" className="hover:text-[var(--gold)] transition">ABOUT</a>
          <a href="#shows" className="hover:text-[var(--gold)] transition">SHOWS</a>
          <a href="#music" className="hover:text-[var(--gold)] transition">MUSIC</a>
          <a href="#book" className="hover:text-[var(--gold)] transition">BOOK</a>
        </div>
      </div>

      {/* Center copy */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinematic text-xs tracking-[0.6em] text-[var(--gold)]/80"
        >
          — A LIVE MUSIC EXPERIENCE —
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.02em" }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-[18vw] font-bold leading-[0.85] text-foreground text-glow-gold md:text-[12vw] lg:text-[180px]"
        >
          SUPERIOR
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[18vw] leading-[0.85] text-gradient-gold md:text-[12vw] lg:text-[180px]"
        >
          BAND
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="mt-8 max-w-xl font-body text-base text-foreground/70 md:text-lg"
        >
          Where music becomes an experience. Fifteen sensational voices. One stage. Unlimited madness.
        </motion.p>

        {/* Loop */}
        <div className="mt-10 flex h-7 items-center justify-center overflow-hidden">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -loop.length * 28 }}
            transition={{ duration: loop.length * 2, repeat: Infinity, ease: "linear" }}
            className="flex flex-col items-center gap-1"
          >
            {[...loop, ...loop].map((t, i) => (
              <span key={i} className="font-cinematic text-sm tracking-[0.4em] text-[var(--gold)]/80">
                · {t} ·
              </span>
            ))}
          </motion.div>
        </div>

        <Equalizer className="mt-10" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-cinematic text-[10px] tracking-[0.5em] text-foreground/50">SCROLL</span>
        <div className="relative h-10 w-[1px] bg-foreground/20">
          <motion.div
            animate={{ y: [0, 32, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-x-0 top-0 h-3 bg-[var(--gold)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
