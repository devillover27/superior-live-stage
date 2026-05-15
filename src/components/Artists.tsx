import { motion } from "framer-motion";
import singer1 from "@/assets/singer-1.jpg";
import singer2 from "@/assets/singer-2.jpg";
import guitarist from "@/assets/guitarist.jpg";
import drummer from "@/assets/drummer.jpg";

const artists = [
  { name: "Ravi Melodies", role: "Lead Vocal", img: singer1 },
  { name: "Sameera Bharadwaj", role: "Vocalist", img: singer2 },
  { name: "Dhanunjay", role: "Guest Singer", img: guitarist },
  { name: "Sai Sri Charan", role: "Collaborator", img: drummer },
];

export function Artists() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="font-cinematic text-xs tracking-[0.5em] text-[var(--gold)]">— CHAPTER 05 / VOICES</span>
          <h2 className="mt-3 font-display text-5xl md:text-7xl">
            The <span className="italic text-gradient-gold">collective.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {artists.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
              style={{ transform: i % 2 ? "translateY(2rem)" : "none" }}
            >
              <img
                src={a.img}
                alt={a.name}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-cinematic text-[10px] tracking-[0.3em] text-[var(--gold)]">{a.role}</span>
                <h3 className="mt-1 font-display text-xl leading-tight md:text-2xl">{a.name}</h3>
                <div className="mt-2 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
