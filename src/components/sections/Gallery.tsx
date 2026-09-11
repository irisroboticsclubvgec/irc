import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const images = site.gallery;

  return (
    <Section
      id="gallery"
      eyebrow="Moments"
      title="Gallery"
      subtitle="Build nights, competitions, and everything in between."
    >
      {/* masonry via CSS columns */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {images.map((im, i) => (
          <Reveal key={im.src} delay={(i % 4) * 0.06}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-xl ring-1 ring-white/10"
            >
              <img
                src={im.src}
                alt="Gallery photo"
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-5 top-5 rounded-lg p-2 text-slate-300 hover:text-white"
              aria-label="Close"
            >
              <X />
            </button>
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[active].src}
                alt="Gallery photo"
                className="max-h-[80vh] rounded-xl object-contain ring-1 ring-white/10"
              />
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
