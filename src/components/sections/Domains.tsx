import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";
import { Icon } from "../../lib/icons";

export default function Domains() {
  return (
    <Section
      id="domains"
      eyebrow="What we do"
      title="Our Domains"
      subtitle="Six disciplines that come together to build a working robot."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.domains.map((d, i) => (
          <Reveal key={d.title} delay={(i % 3) * 0.08}>
            <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40">
              {/* hover glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/0 blur-2xl transition-all duration-300 group-hover:bg-brand-cyan/20" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 p-3 text-brand-cyan ring-1 ring-white/10">
                  <Icon name={d.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{d.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {d.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
