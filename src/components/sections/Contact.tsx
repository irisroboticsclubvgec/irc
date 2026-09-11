import { useState, type FormEvent, type ChangeEvent } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";
import { Icon } from "../../lib/icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });

  const update =
    (key: keyof typeof values) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const { googleFormId, fields } = site.contact;
    const body = new URLSearchParams({
      [fields.name]: values.name,
      [fields.email]: values.email,
      [fields.subject]: values.subject,
      [fields.message]: values.message,
    });

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque —
      // "no-cors" mode still delivers the POST, we just can't read the result.
      await fetch(`https://docs.google.com/forms/d/e/${googleFormId}/formResponse`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setStatus("sent");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const details = [
    { icon: Mail, label: "Email", value: site.club.email, href: `mailto:${site.club.email}` },
    { icon: MapPin, label: "Find us", value: site.club.location, href: undefined },
  ];

  return (
    <Section id="contact" eyebrow="Say hello" title={site.contact.heading} subtitle={site.contact.body}>
      <div className="grid gap-8 lg:grid-cols-5">
        {/* info */}
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            {details.map((d) => {
              const Cmp = d.icon;
              const inner = (
                <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-brand-cyan/40">
                  <div className="rounded-xl bg-brand-cyan/10 p-3 text-brand-cyan">
                    <Cmp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {d.label}
                    </p>
                    <p className="text-sm font-medium text-slate-200">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <a key={d.label} href={d.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={d.label}>{inner}</div>
              );
            })}

            <div className="flex gap-2 pt-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass rounded-xl p-3 text-slate-300 transition-colors hover:text-brand-cyan"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* message form — styled to match the site, but every submission is
            posted straight into our Google Form's responses in the background */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="glass rounded-2xl p-6 sm:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <span className="rounded-full bg-emerald-400/10 p-3 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <p className="text-lg font-semibold text-slate-100">Message sent!</p>
                <p className="max-w-sm text-sm text-slate-400">
                  Thanks for reaching out — our team will get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-medium text-brand-cyan hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={values.name}
                      onChange={update("name")}
                      placeholder="Ada Lovelace"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-brand-cyan/50 focus:bg-white/[0.07]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={update("email")}
                      placeholder="you@vgec.ac.in"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-brand-cyan/50 focus:bg-white/[0.07]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm text-slate-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    required
                    value={values.subject}
                    onChange={update("subject")}
                    placeholder="I'd like to join / sponsor"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-brand-cyan/50 focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={values.message}
                    onChange={update("message")}
                    placeholder="Tell us a bit about yourself…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-brand-cyan/50 focus:bg-white/[0.07]"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-400/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong sending that — please try again, or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet px-6 py-3 font-semibold text-ink transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
