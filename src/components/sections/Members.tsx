import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

export default function Members() {
  return (
    <Section
      id="members"
      eyebrow="The people"
      title="Core Team"
      subtitle="The builders steering the club this year."
    >
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {site.members.map((m, i) => (
          <Reveal key={m.name} delay={(i % 4) * 0.06}>
            <div className="group glass overflow-hidden rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-cyan/10 to-brand-violet/10">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel/90 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold">{m.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-brand-cyan">
                  {m.role}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
