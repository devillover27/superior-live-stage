import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1 }}
              className="font-cinematic text-xs tracking-[0.4em] text-[var(--gold)]"
            >
              SUPERIOR BAND
            </motion.div>
            <div className="mt-4 h-px w-40 overflow-hidden bg-foreground/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
