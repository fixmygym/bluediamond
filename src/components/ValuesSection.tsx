import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

// ─── OS Panel 1: Financials ────────────────────────────────────────────────────
function ClarityPanel() {
  const rows = [
    { label: "Revenue",  val: "$284K", pct: 84 },
    { label: "Margin",   val: "18.4%", pct: 62 },
    { label: "Cash Flow",val: "+$41K", pct: 91 },
  ];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const go = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 300);
    };
    go();
    const id = setInterval(go, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-2.5 p-4 h-full">
      <span className="text-[8px] text-electric-blue uppercase tracking-[0.2em]">Financials</span>
      {rows.map((r, i) => (
        <div key={r.label} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-[9px] text-slate-400">{r.label}</span>
            <motion.span
              animate={{ opacity: visible ? 1 : 0 }}
              transition={{ delay: i * 0.14, duration: 0.4 }}
              className="text-[9px] text-white font-bold tabular-nums"
            >
              {r.val}
            </motion.span>
          </div>
          <div className="h-[3px] bg-white/[0.07] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(to right, #145A9E, #2EA3F2)" }}
              initial={{ width: "0%" }}
              animate={{ width: visible ? `${r.pct}%` : "0%" }}
              transition={{ delay: i * 0.14, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── OS Panel 2: Data Audit ────────────────────────────────────────────────────
function IntegrityPanel() {
  const items = ["Margins verified", "P&L accurate", "No hidden gaps"];
  const [checked, setChecked] = useState<number[]>([]);

  useEffect(() => {
    const run = () => {
      setChecked([]);
      items.forEach((_, i) => {
        setTimeout(() => setChecked(prev => [...prev, i]), i * 680 + 250);
      });
    };
    run();
    const id = setInterval(run, items.length * 680 + 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-2.5 p-4 h-full">
      <span className="text-[8px] text-electric-blue uppercase tracking-[0.2em]">Audit</span>
      {items.map((item, i) => (
        <motion.div
          key={item}
          animate={{
            backgroundColor: checked.includes(i) ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.03)",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 px-2 py-1.5 rounded-md"
        >
          <motion.div
            animate={{
              backgroundColor: checked.includes(i) ? "rgb(16,185,129)" : "rgba(255,255,255,0.08)",
            }}
            transition={{ duration: 0.3 }}
            className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
          >
            {checked.includes(i) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Check className="w-2 h-2 text-white" strokeWidth={3} />
              </motion.div>
            )}
          </motion.div>
          <span
            className={`text-[9px] transition-colors duration-300 ${
              checked.includes(i) ? "text-white/70" : "text-slate-600"
            }`}
          >
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── OS Panel 3: Collaboration ─────────────────────────────────────────────────
function CollaborativePanel() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const cycle = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 500);
      setTimeout(() => setPhase(2), 1300);
    };
    cycle();
    const id = setInterval(cycle, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-start p-4 h-full gap-2">
      <span className="text-[8px] text-electric-blue uppercase tracking-[0.2em]">Collaboration</span>
      <div className="flex-1 flex items-center justify-center w-full relative">
        {/* Left circle */}
        <motion.div
          animate={{ x: phase === 2 ? 12 : phase === 1 ? 6 : 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-11 h-11 rounded-full border border-electric-blue/50 bg-electric-blue/10 flex items-center justify-center"
          style={{ zIndex: 2 }}
        >
          <span className="text-[8px] text-electric-blue font-bold">You</span>
        </motion.div>

        {/* Merged glow */}
        <motion.div
          animate={{ opacity: phase === 2 ? 1 : 0, scale: phase === 2 ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute w-7 h-7 rounded-full"
          style={{
            background: "rgba(46,163,242,0.5)",
            filter: "blur(6px)",
            zIndex: 1,
          }}
        />

        {/* Right circle */}
        <motion.div
          animate={{ x: phase === 2 ? -12 : phase === 1 ? -6 : 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center"
          style={{ zIndex: 2 }}
        >
          <span className="text-[8px] text-slate-300 font-bold">BD</span>
        </motion.div>
      </div>
      <motion.span
        animate={{ opacity: phase === 2 ? 1 : 0 }}
        className="text-[8px] text-electric-blue font-bold uppercase tracking-widest self-center"
      >
        Strategy Locked
      </motion.span>
    </div>
  );
}

// ─── OS Panel 4: Systems ───────────────────────────────────────────────────────
function SynergyPanel() {
  const nodes = [
    { label: "Hiring",   emoji: "👤" },
    { label: "Software", emoji: "⚙️" },
    { label: "Revenue",  emoji: "📈" },
  ];
  const [lit, setLit] = useState(-1);

  useEffect(() => {
    const run = () => {
      setLit(-1);
      nodes.forEach((_, i) => {
        setTimeout(() => setLit(i), i * 620 + 200);
      });
    };
    run();
    const id = setInterval(run, nodes.length * 620 + 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col p-4 h-full gap-2">
      <span className="text-[8px] text-electric-blue uppercase tracking-[0.2em]">Systems</span>
      <div className="flex items-center justify-around flex-1">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-col items-center gap-1.5">
            <motion.div
              animate={{
                backgroundColor: lit >= i ? "rgba(46,163,242,0.18)" : "rgba(255,255,255,0.04)",
                borderColor: lit >= i ? "rgba(46,163,242,0.55)" : "rgba(255,255,255,0.07)",
                boxShadow: lit >= i ? "0 0 12px rgba(46,163,242,0.25)" : "none",
              }}
              transition={{ duration: 0.4 }}
              className="w-9 h-9 rounded-xl border flex items-center justify-center text-lg"
            >
              {node.emoji}
            </motion.div>
            <span className="text-[8px] text-slate-500">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Full OS Dashboard ─────────────────────────────────────────────────────────
function OperatingDashboard() {
  return (
    <div className="glass-card overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <span className="text-[10px] text-slate-500 tracking-widest uppercase">
            Blue Diamond OS
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-emerald-400 uppercase tracking-widest">Live</span>
        </div>
      </div>

      {/* 2×2 panels */}
      <div className="grid grid-cols-2">
        <div className="h-[200px] border-b border-r border-white/[0.06]">
          <ClarityPanel />
        </div>
        <div className="h-[200px] border-b border-white/[0.06]">
          <IntegrityPanel />
        </div>
        <div className="h-[200px] border-r border-white/[0.06]">
          <CollaborativePanel />
        </div>
        <div className="h-[200px]">
          <SynergyPanel />
        </div>
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
const values = [
  {
    number: "01",
    title: "Building Clarity",
    body: "We make the complex simple. Whether it's cleaning up your P&L, tightening dispatch, or deciding who to hire next, you'll always know exactly where you stand and what to do next.",
  },
  {
    number: "02",
    title: "Integrity Illuminated",
    body: "Every recommendation is in your best interest. We'll tell you the truth about your margins, your leadership gaps, and your team performance. Because real change comes from direct honesty.",
  },
  {
    number: "03",
    title: "Collaborative Brilliance",
    body: "We bring decades of lived experience across sales, marketing, operations, and finance. You bring your full presence and commitment. Together, we create strategies you can actually use in the real world, today.",
  },
  {
    number: "04",
    title: "Strength in Synergy",
    body: "The magic happens when your agency meets our expertise. That's where a hiring process starts running itself, software finally earns its keep, and revenue stops riding the season.",
  },
];

export default function ValuesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-electric-blue text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight font-display">
            How We{" "}
            <span className="italic blue-gradient-text inline-block pr-2">Operate</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mt-4">
            Four principles that drive everything we do with every client.
          </p>
        </div>

        {/* 5-col split: sticky OS dashboard left + editorial list right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — dashboard (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <OperatingDashboard />
          </motion.div>

          {/* Right — 2×2 value grid (3 cols) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pl-6 group"
              >
                {/* Vertical accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.08] group-hover:bg-electric-blue/50 transition-colors duration-500" />

                <span className="text-xs text-electric-blue font-bold uppercase tracking-[0.2em]">
                  {v.number}
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1 mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
