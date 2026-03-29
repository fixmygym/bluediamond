import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, TrendingUp, Calendar } from "lucide-react";

// ─── Step 1 Visual: booking slot picker ───────────────────────────────────────
function ClarityCallVisual() {
  const slots = ["9:00 AM", "10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM"];
  const [active, setActive] = useState(2);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    let idx = 2;
    const cycle = () => {
      idx = (idx + 1) % slots.length;
      setBooked(false);
      setActive(idx);
      setTimeout(() => setBooked(true), 650);
    };
    setBooked(true);
    const id = setInterval(cycle, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-[210px] mx-auto px-2">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="w-3.5 h-3.5 text-electric-blue" />
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">
          Choose a time
        </span>
      </div>
      {slots.map((slot, i) => (
        <motion.div
          key={slot}
          animate={{
            borderColor:
              active === i
                ? "rgba(46,163,242,0.55)"
                : "rgba(255,255,255,0.07)",
            backgroundColor:
              active === i
                ? "rgba(46,163,242,0.10)"
                : "rgba(255,255,255,0.03)",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between px-3 py-2 rounded-lg border text-xs"
        >
          <span
            className={
              active === i ? "text-white font-medium" : "text-slate-500"
            }
          >
            {slot}
          </span>
          {active === i && booked ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1 text-electric-blue"
            >
              <Check className="w-3 h-3" />
              <span className="text-[10px] font-semibold">Booked</span>
            </motion.div>
          ) : (
            <span className="text-[10px] text-slate-600">30 min</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Step 2 Visual: weekly bar chart ──────────────────────────────────────────
function WeeklyProgressVisual() {
  const bars = [
    { label: "Wk 1", pct: 28 },
    { label: "Wk 2", pct: 51 },
    { label: "Wk 3", pct: 73 },
    { label: "Wk 4", pct: 91 },
  ];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 250);
    };
    show();
    const id = setInterval(show, 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end justify-center gap-5 w-full h-full">
      {bars.map((bar, i) => (
        <div key={bar.label} className="flex flex-col items-center gap-2">
          <div className="relative w-9 h-[96px] rounded-t-md overflow-hidden bg-white/[0.05]">
            <motion.div
              className="absolute bottom-0 w-full rounded-t-md"
              style={{
                background: "linear-gradient(to top, #145A9E, #2EA3F2)",
              }}
              initial={{ height: "0%" }}
              animate={{ height: visible ? `${bar.pct}%` : "0%" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: visible ? i * 0.13 : 0,
              }}
            />
          </div>
          <span className="text-[10px] text-slate-500">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Step 3 Visual: revenue counter ───────────────────────────────────────────
function GrowthCounterVisual() {
  const TARGET = 847;
  const [value, setValue] = useState(0);

  useEffect(() => {
    const run = () => {
      setValue(0);
      const duration = 1800;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * TARGET));
        if (t < 1) requestAnimationFrame(tick);
      };
      setTimeout(() => requestAnimationFrame(tick), 300);
    };
    run();
    const id = setInterval(run, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3 pt-12">
      <div className="relative flex items-baseline gap-1">
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{ background: "rgba(46,163,242,0.18)", transform: "scale(2)" }}
        />
        <span className="relative text-xl font-bold text-electric-blue">$</span>
        <span className="relative text-5xl font-black text-white tabular-nums leading-none">
          {value.toLocaleString()}
        </span>
        <span className="relative text-xl font-bold text-slate-500">K</span>
      </div>
      <span className="text-[10px] text-slate-500 uppercase tracking-[0.15em]">
        Avg. client revenue gain
      </span>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mt-1">
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span className="text-emerald-400 text-xs font-bold">+43% avg. YoY</span>
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Free Clarity Now",
    body: "Book your free 30-minute Clarity Call. We zero in on the most pressing issue in your business and give you direct insight on what to do — all gratis.",
    Visual: ClarityCallVisual,
  },
  {
    number: "02",
    title: "Get Real Guidance",
    body: "Each week you meet with us. We tackle what's most urgent together — hands-on, ultra-specific, and rooted in real trades experience.",
    Visual: WeeklyProgressVisual,
  },
  {
    number: "03",
    title: "Build Undeniable Growth",
    body: "Operations run smoother. Revenue grows. You regain control and lead with the empowered purpose you didn't know was possible.",
    Visual: GrowthCounterVisual,
  },
];

export default function ProcessSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-28 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-electric-blue text-xs font-bold uppercase tracking-[0.2em] mb-5">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight font-display">
            Ready To Stop Spinning and{" "}
            <span className="italic blue-gradient-text inline-block pr-2">
              Start Scaling?
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              className="glass-card flex flex-col overflow-hidden group cursor-pointer h-full"
            >
              {/* Visual area */}
              <div className="relative flex items-center justify-center h-[220px] md:h-[280px] p-8 border-b border-white/[0.06] w-full overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(46,163,242,0.07) 0%, transparent 70%)",
                  }}
                />
                {/* Watermark step number */}
                <span className="absolute top-4 right-5 text-5xl font-black text-white/[0.04] font-display select-none">
                  {step.number}
                </span>
                <div className="flex items-center justify-center w-full self-stretch">
                  <step.Visual />
                </div>
              </div>

              {/* Text area */}
              <div className="p-7 mt-auto">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-6 h-6 rounded-full blue-gradient-bg flex items-center justify-center text-white text-xs font-black shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">{step.title}</h3>
                </div>
                <p className="text-slate-300 text-base leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full font-bold uppercase tracking-widest accent-gradient-bg hover:scale-105 transition-transform font-button"
          >
            Get Your Free Session
          </a>
        </div>
      </div>
    </motion.section>
  );
}
