import { Target, Eye } from "lucide-react";
import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

export default function About() {
  const { about } = site;
  return (
    <Section id="about" eyebrow="Who we are" title={about.heading}>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-5">
          {about.body.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-300">
              {p}
            </p>
          ))}
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-brand-cyan/40">
              <div className="mb-4 inline-flex rounded-xl bg-brand-cyan/10 p-3 text-brand-cyan">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
              <p className="text-slate-400">{about.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-brand-violet/40">
              <div className="mb-4 inline-flex rounded-xl bg-brand-violet/10 p-3 text-brand-violet">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Our Vision</h3>
              <p className="text-slate-400">{about.vision}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
