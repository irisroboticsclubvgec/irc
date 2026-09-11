import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  /** travel direction */
  y?: number;
  className?: string;
};

/* Reusable scroll-into-view reveal. Wrap any block to get a consistent,
 * cohesive entrance animation across the whole site. Respects
 * prefers-reduced-motion automatically via Framer Motion. */
export default function Reveal({ children, delay = 0, y = 28, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
