import { motion } from "framer-motion";

const events = [
  { date: "AUG 2024", title: "Friendship Day Live", venue: "Hyderabad", tag: "SOLD OUT" },
  { date: "OCT 2024", title: "Knox Hyderabad Show", venue: "Knox Club", tag: "HEADLINE" },
  { date: "DEC 2024", title: "Telugu Music Nights", venue: "Abana Club", tag: "RESIDENCY" },
  { date: "FEB 2025", title: "Multi-Artist Collab", venue: "Hyderabad Arena", tag: "FEATURED" },
  { date: "MAY 2025", title: "Live Jam Sessions", venue: "Open Air, HYD", tag: "SPECIAL" },
];

export function Events() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 03 / TIMELINE</span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl">
              Previous <span className="italic text-gradient-gold">Nights.</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent md:block md:left-[180px]" />
          <ul className="space-y-2">
            {events.map((e, i) => (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="group relative grid grid-cols-1 items-center gap-4 border-b border-foreground/10 py-8 transition hover:bg-foreground/[0.02] md:grid-cols-12 md:py-10"
              >
                <div className="font-cinematic text-sm tracking-[0.3em] text-[var(--gold)] md:col-span-2">{e.date}</div>
                <div className="hidden md:col-span-1 md:block">
                  <div className="h-2 w-2 -translate-x-[5px] rounded-full bg-[var(--gold)] ring-4 ring-[var(--gold)]/20" />
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-3xl transition group-hover:translate-x-2 group-hover:text-gradient-gold md:text-4xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/50">{e.venue}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span className="inline-block border border-[var(--gold)]/40 px-3 py-1 font-cinematic text-[10px] tracking-[0.3em] text-[var(--gold)]">
                    {e.tag}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
