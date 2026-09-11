import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "../../data/site";

/* Sticky glass navbar. Driven by site.nav so links stay in sync with the
 * config. Highlights the section currently in view and collapses to a
 * slide-down menu on mobile. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy: mark the section closest to the top as active
  useEffect(() => {
    const ids = site.nav.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass shadow-glow" : ""
        } mx-3 sm:mx-auto`}
      >
        {/* brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 font-display text-lg font-bold"
        >
          <img src={site.club.logo} alt="" className="h-8 w-8" />
          <span className="hidden sm:inline">
            {site.club.shortName.split(" ")[0]}
            <span className="text-gradient"> Robotics</span>
          </span>
        </button>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === n.id
                    ? "text-brand-cyan"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
        {/* mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-3 mt-2 overflow-hidden rounded-2xl p-2 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {site.nav.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-200 hover:bg-white/5"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
