import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../../data/site";

/* First-paint loading animation. Shows a spinning reactor ring with the
 * club name, then fades out. Keeps the reveal short so it feels snappy. */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative h-24 w-24">
            <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-transparent border-t-brand-cyan border-r-brand-violet" />
            <div
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-brand-violet border-l-brand-cyan"
              style={{ animation: "spin-slow 3s linear infinite reverse" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-brand-cyan shadow-[0_0_20px_4px_rgba(34,211,238,0.7)]" />
            </div>
          </div>
          <motion.p
            className="mt-6 font-display text-sm tracking-[0.35em] text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {site.club.name.toUpperCase()}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
