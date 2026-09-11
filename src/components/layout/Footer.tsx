import { Mail, MapPin } from "lucide-react";
import { site } from "../../data/site";
import { Icon } from "../../lib/icons";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src={site.club.logo} alt="" className="h-9 w-9" />
              <span className="font-display text-lg font-bold">
                {site.club.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              {site.club.college}. {site.club.tagline}
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wide text-slate-200">
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              {site.nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-brand-cyan">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wide text-slate-200">
              Reach us
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-cyan" /> {site.club.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-cyan" /> {site.club.location}
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass rounded-lg p-2 text-slate-300 transition-colors hover:text-brand-cyan"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {site.club.established}–2026 {site.club.name}. All rights reserved.
          </p>
          <p>Built by students, for students.</p>
        </div>
      </div>
    </footer>
  );
}
