import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "200+", label: "Businesses Coached" },
  { value: "94%", label: "Hit Their Goals" },
  { value: "10×", label: "Avg. Revenue Growth" },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050D18] py-16 md:py-28 px-6">

      {/* ── Decorative watermark "30" ── */}
      <span
        className="absolute right-[42%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-black font-display leading-none"
        style={{
          fontSize: "clamp(200px, 30vw, 420px)",
          color: "rgba(46,163,242,0.03)",
          letterSpacing: "-0.05em",
        }}
      >
        30
      </span>

      {/* ── Global blue glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(20,90,158,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col"
          >
            <p className="text-electric-blue text-xs font-bold uppercase tracking-[0.25em] mb-6">
              Free Clarity Call
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display text-white leading-[1.12] mb-6">
              A 30-Minute Call That{" "}
              <span className="italic blue-gradient-text inline-block">
                Changes Everything
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
              We zero in on exactly what's holding your business back and hand you a
              clear path forward. No fluff. No obligation.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-base accent-gradient-bg font-button group self-start sm:self-start w-full sm:w-auto justify-center sm:justify-start"
            >
              Get Your Free Session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* ── Right: Framed photo + floating stat cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div
              className="absolute -inset-3 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(20,90,158,0.35) 0%, rgba(46,163,242,0.15) 50%, transparent 100%)",
                filter: "blur(20px)",
              }}
            />

            {/* Photo frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
              {/* The photo */}
              <img
                src="/cta-bg.webp"
                alt="Blue Diamond coaching session"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/3" }}
              />

              {/* Cinematic color grade overlay — dark bottom + blue tint */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(5,13,24,0.0) 30%, rgba(5,13,24,0.72) 100%), " +
                    "linear-gradient(135deg, rgba(20,90,158,0.18) 0%, transparent 60%)",
                }}
              />

              {/* Bottom-left pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-5 left-5 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur-md"
                style={{ background: "rgba(5,13,24,0.70)" }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-white text-xs font-bold">Sessions open now</span>
              </motion.div>
            </div>

            {/* ── Floating stat cards ── */}
            {stats.map((stat, i) => {
              const positions = [
                "absolute -top-5 -right-5",
                "absolute top-1/2 -right-8 -translate-y-1/2",
                "absolute -bottom-5 -right-5",
              ];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                  className={`${positions[i]} hidden lg:flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border border-white/[0.10] text-center`}
                  style={{
                    background: "rgba(9,18,32,0.90)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.5), 0 0 28px rgba(20,90,158,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-xl font-black text-white font-display leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider leading-tight px-1">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
