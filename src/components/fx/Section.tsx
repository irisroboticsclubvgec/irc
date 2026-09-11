import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

/* Consistent section shell: anchored id, vertical rhythm, and an
 * optional centered header. Reused by every content section. */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base text-slate-400 sm:text-lg">{subtitle}</p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
