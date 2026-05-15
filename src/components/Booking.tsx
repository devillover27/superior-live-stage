import { motion } from "framer-motion";
import { useState } from "react";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="book" className="relative overflow-hidden py-32">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--gold)]/10 blur-[120px]" />
      <div className="container relative mx-auto grid grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 08 / BOOK</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl"
          >
            Make your event <br />
            <span className="italic text-gradient-gold">unforgettable.</span>
          </motion.h2>
          <p className="mt-8 max-w-md text-foreground/70">
            Weddings, corporate events, friendship-day takeovers, club nights — bring Superior Band to your stage.
          </p>

          <div className="mt-12 space-y-4">
            <a
              href="tel:+917386123986"
              className="group flex items-center justify-between border-b border-foreground/10 py-4 transition hover:border-[var(--gold)]"
            >
              <span className="font-cinematic text-xs tracking-[0.3em] text-foreground/50">CALL</span>
              <span className="font-display text-2xl transition group-hover:text-gradient-gold md:text-3xl">
                +91 73861 23986
              </span>
            </a>
            <a
              href="https://wa.me/917386123986"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-foreground/10 py-4 transition hover:border-[var(--gold)]"
            >
              <span className="font-cinematic text-xs tracking-[0.3em] text-foreground/50">WHATSAPP</span>
              <span className="font-display text-xl transition group-hover:text-gradient-gold">Chat now ↗</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-foreground/10 py-4 transition hover:border-[var(--gold)]"
            >
              <span className="font-cinematic text-xs tracking-[0.3em] text-foreground/50">INSTAGRAM</span>
              <span className="font-display text-xl transition group-hover:text-gradient-gold">
                @superiorbandofficial ↗
              </span>
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-sm border border-[var(--gold)]/30 bg-card/60 p-8 backdrop-blur-md md:p-10"
        >
          <h3 className="font-cinematic text-xs tracking-[0.4em] text-[var(--gold)]">BOOK THE EXPERIENCE</h3>

          {submitted ? (
            <div className="mt-12 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full border-2 border-[var(--gold)] flex items-center justify-center text-[var(--gold)]">✓</div>
              <p className="font-display text-2xl">Request received.</p>
              <p className="mt-2 text-sm text-foreground/60">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              {[
                { l: "NAME", t: "text", n: "name" },
                { l: "PHONE", t: "tel", n: "phone" },
                { l: "EVENT TYPE", t: "text", n: "event" },
                { l: "DATE", t: "date", n: "date" },
              ].map((f) => (
                <div key={f.n}>
                  <label className="font-cinematic text-[10px] tracking-[0.3em] text-foreground/50">{f.l}</label>
                  <input
                    type={f.t}
                    name={f.n}
                    required
                    className="mt-2 w-full border-b border-foreground/20 bg-transparent py-2 font-body text-foreground outline-none transition focus:border-[var(--gold)]"
                  />
                </div>
              ))}
              <div>
                <label className="font-cinematic text-[10px] tracking-[0.3em] text-foreground/50">MESSAGE</label>
                <textarea
                  rows={3}
                  name="message"
                  className="mt-2 w-full resize-none border-b border-foreground/20 bg-transparent py-2 font-body text-foreground outline-none transition focus:border-[var(--gold)]"
                />
              </div>
              <button
                type="submit"
                className="group relative mt-6 w-full overflow-hidden rounded-sm bg-[var(--gold)] py-4 font-cinematic text-sm tracking-[0.4em] text-background transition hover:glow-gold"
              >
                <span className="relative z-10">RESERVE THE NIGHT</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--gold-bright)] via-[var(--ember)] to-[var(--gold)] transition-transform duration-700 group-hover:translate-x-0" />
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
