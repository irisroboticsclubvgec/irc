import { Check, ArrowRight } from "lucide-react";
import { site } from "../../data/site";
import Reveal from "../fx/Reveal";

export default function Join() {
  const { join } = site;
  return (
    <section id="join" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          {/* decorative glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Recruitment open</p>
              <h2 className="text-3xl font-bold sm:text-4xl">{join.heading}</h2>
              <p className="mt-4 max-w-md text-slate-300">{join.body}</p>
              <a
                href={join.ctaHref}
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet px-6 py-3 font-semibold text-ink transition-transform hover:scale-105"
              >
                {join.ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="space-y-3">
              {join.perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <span className="mt-0.5 rounded-full bg-brand-cyan/15 p-1 text-brand-cyan">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-200">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
