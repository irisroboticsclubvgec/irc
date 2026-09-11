/* Fixed, full-page ambient backdrop: a subtle neon grid plus two
 * slow-drifting glow orbs. Purely decorative, pointer-events-none,
 * and cheap (CSS only) so it never blocks interaction or scrolling. */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* neon grid */}
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* glow orbs */}
      <div className="animate-float-slow absolute -left-32 top-10 h-[38rem] w-[38rem] rounded-full bg-brand-violet/20 blur-[120px]" />
      <div
        className="animate-float-slow absolute -right-24 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-cyan/20 blur-[120px]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-blue/10 blur-[120px]"
        style={{ animationDelay: "4s" }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,rgba(5,6,10,0.85))]" />
    </div>
  );
}
