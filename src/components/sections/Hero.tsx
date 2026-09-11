import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, Bot } from "lucide-react";
import { site } from "../../data/site";
import ErrorBoundary from "../fx/ErrorBoundary";

/* Code-split the 3D scene so the page paints instantly and the heavy
 * three.js bundle only loads when the hero mounts. */
const RobotScene = lazy(() => import("../fx/RobotScene"));

/* Shown while the 3D bundle loads. */
function RobotLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-40 w-40">
        <div className="animate-spin-slow absolute inset-0 rounded-full border border-brand-cyan/40" />
        <div className="absolute inset-6 animate-pulse rounded-full bg-brand-violet/20 blur-xl" />
        <div className="absolute inset-0 flex items-center justify-center text-xs tracking-widest text-slate-500">
          BOOTING…
        </div>
      </div>
    </div>
  );
}

/* Static fallback when WebGL is unavailable (some phones / disabled GPU).
 * Keeps the hero looking intentional instead of empty. */
function RobotStatic() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="animate-float-slow relative flex h-56 w-56 items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand-cyan/15 to-brand-violet/15 ring-1 ring-white/10">
        <div className="absolute inset-0 rounded-[2rem] bg-brand-violet/10 blur-2xl" />
        <Bot className="relative h-28 w-28 text-brand-cyan drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
      </div>
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2">
        {/* copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center lg:text-left"
        >
          <motion.div
            variants={item}
            className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 lg:mx-0"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
            {site.club.college}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            {site.club.name.split(" ")[0]}{" "}
            <span className="text-gradient">Robotics</span>
            <br />
            <span className="text-slate-100">Club</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg text-slate-400 lg:mx-0"
          >
            {site.club.heroSubtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet px-6 py-3 font-semibold text-ink transition-transform hover:scale-105"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-slate-100 transition-colors hover:text-brand-cyan"
            >
              Join the club
            </a>

        </motion.div>
        </motion.div>

        {/* 3D robot */}
        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[560px]">
          <div className="absolute inset-0 -z-0 rounded-full bg-brand-violet/10 blur-3xl" />
          <ErrorBoundary fallback={<RobotStatic />}>
            <Suspense fallback={<RobotLoading />}>
              <RobotScene />
            </Suspense>
          </ErrorBoundary>
          <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-slate-600">
            drag to rotate
          </p>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}
