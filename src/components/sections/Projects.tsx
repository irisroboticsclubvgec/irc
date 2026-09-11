import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

const statusStyle: Record<string, string> = {
  Active: "text-brand-cyan bg-brand-cyan/10 ring-brand-cyan/30",
  "In R&D": "text-brand-violet bg-brand-violet/10 ring-brand-violet/30",
  Completed: "text-emerald-300 bg-emerald-400/10 ring-emerald-400/30",
};

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Built by us"
      title="Featured Projects"
      subtitle="A selection of the machines we've designed, fabricated, and programmed."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <article className="group glass h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-glow">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-cyan/10 to-brand-violet/10">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span
                  className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${
                    statusStyle[p.status]
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-brand-cyan">{p.tagline}</p>
                <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-slate-300 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
