import { motion } from "framer-motion";

const lines = ["A stage.", "A crowd.", "A rhythm.", "A movement.", "Superior Band is not just music.", "It's an atmosphere."];

export function Story() {
  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-stage opacity-60" />
      <div className="container relative mx-auto px-6 text-center">
        <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 07 / MANIFESTO</span>
        <div className="mt-16 space-y-3 md:space-y-6">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className={`font-display text-4xl leading-tight md:text-6xl lg:text-7xl ${
                i === lines.length - 1 ? "text-gradient-gold italic" : "text-foreground"
              }`}
            >
              {l}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
