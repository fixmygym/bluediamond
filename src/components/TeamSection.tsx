import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const coaches = [
  {
    name: "Jim Clark",
    role: "Financials & Strategy",
    bio: "Has owned, scaled, and sold home service companies. Turns guesswork financials into full command.",
  },
  {
    name: "Mike",
    role: "Sales & Marketing",
    bio: "Keeps leads and margins strong with proven sales systems and marketing that reaches the right customers.",
  },
  {
    name: "Julie",
    role: "Operations",
    bio: "Transforms chaos into repeatable systems — from dispatch to hiring, she makes operations seamless.",
  },
];

const floatingStats = [
  { value: "90+", label: "Yrs Combined" },
  { value: "200+", label: "Businesses Coached" },
  { value: "10×", label: "Avg. Revenue Growth" },
];

export default function TeamSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-28 px-6 bg-[#050D18] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Photo ── */}
        <div className="relative">
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
            <img
              src="/team-photo-2.webp"
              alt="Blue Diamond coaching team — Mike, Julie, and Jim"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />

            {/* Cinematic overlays */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5,13,24,0.0) 30%, rgba(5,13,24,0.55) 100%), " +
                  "linear-gradient(135deg, rgba(20,90,158,0.12) 0%, transparent 60%)",
              }}
            />

            {/* Sessions open pill — bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-5 right-5 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur-md"
              style={{ background: "rgba(5,13,24,0.70)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-white text-xs font-bold">Sessions open now</span>
            </motion.div>
          </div>

          {/* Floating stat cards — right side */}
          {floatingStats.map((stat, i) => {
            const positions = [
              "absolute -top-5 -left-5",
              "absolute top-1/2 -left-8 -translate-y-1/2",
              "absolute -bottom-5 -left-5",
            ];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -16 }}
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
        </div>

        {/* ── Right: Content ── */}
        <div>
          <p className="text-electric-blue text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Meet Your Coaches
          </p>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 font-display text-white leading-[1.12]">
            Three Coaches.{" "}
            <span className="italic blue-gradient-text inline-block pr-2">
              Your Personal Braintrust.
            </span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed mb-8">
            With over 90 years of combined experience, we've lived the life of a home service
            business owner several times over. We've made the hires, missed the hires, fought
            through slow seasons, scaled through record ones — and we've made the mistakes you
            can now skip. Together, we work with you every single week to make your business
            stronger, more profitable, and easier to run.
          </p>

          {/* Coach profile rows */}
          <div className="flex flex-col gap-3 mb-8">
            {coaches.map((coach, i) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="glass-card flex items-start gap-4 px-5 py-4 group cursor-default"
              >
                {/* Left accent bar */}
                <div className="w-[3px] self-stretch rounded-full blue-gradient-bg shrink-0 mt-0.5" />

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2.5 mb-1.5">
                    <span className="text-white font-bold text-lg leading-none">{coach.name}</span>
                    <span className="text-[11px] text-electric-blue font-bold uppercase tracking-[0.2em] leading-none">
                      {coach.role}
                    </span>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed">{coach.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="/about/meet-the-team/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-widest text-xs backdrop-blur-sm hover:bg-white/10 hover:gap-4 transition-all"
          >
            Meet The Team{" "}
            <ChevronRight className="w-4 h-4 text-electric-blue" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
