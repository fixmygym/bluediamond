import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { TrendingUp, ChevronRight } from "lucide-react";

// ─── Plumbing: avg ticket counter climbing ─────────────────────────────────
function PlumbingVisual() {
  const FROM = 189, TO = 487;
  const [value, setValue] = useState(FROM);

  useEffect(() => {
    const run = () => {
      setValue(FROM);
      const duration = 1800;
      const start = Date.now();
      const tick = () => {
        const t = Math.min((Date.now() - start) / duration, 1);
        setValue(Math.round(FROM + (1 - Math.pow(1 - t, 3)) * (TO - FROM)));
        if (t < 1) requestAnimationFrame(tick);
      };
      setTimeout(() => requestAnimationFrame(tick), 600);
    };
    run();
    const id = setInterval(run, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
      <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">
        Avg. Ticket Value
      </span>
      <div className="relative flex items-baseline gap-1">
        <div
          className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(46,163,242,0.18)", transform: "scale(2.5)" }}
        />
        <span className="relative text-lg font-bold text-electric-blue">$</span>
        <span className="relative text-5xl font-black text-gray-900 tabular-nums leading-none">
          {value}
        </span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span className="text-emerald-400 text-[10px] font-bold">+157% avg. increase</span>
      </div>
    </div>
  );
}

// ─── HVAC: seasonal revenue bar chart → stable ──────────────────────────────
const HVAC_SPIKY = [30, 96, 32, 18];
const HVAC_SMOOTH = [72, 80, 75, 68];
const HVAC_SEASONS = ["SPR", "SUM", "FALL", "WIN"];

function HVACVisual() {
  const [smoothed, setSmoothed] = useState(false);

  useEffect(() => {
    const cycle = () => {
      setSmoothed(false);
      setTimeout(() => setSmoothed(true), 2200);
    };
    cycle();
    const id = setInterval(cycle, 5200);
    return () => clearInterval(id);
  }, []);

  const bars = smoothed ? HVAC_SMOOTH : HVAC_SPIKY;

  return (
    <div className="flex flex-col items-center gap-3 w-full h-full justify-center">
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">
          Seasonal Revenue
        </span>
        <motion.div
          animate={{
            backgroundColor: smoothed ? "rgba(16,185,129,0.12)" : "rgba(249,115,22,0.12)",
          }}
          transition={{ duration: 0.5 }}
          className="px-2 py-0.5 rounded-full"
        >
          <motion.span
            animate={{ color: smoothed ? "#34d399" : "#fb923c" }}
            transition={{ duration: 0.5 }}
            className="text-[9px] font-bold"
          >
            {smoothed ? "STABLE" : "VOLATILE"}
          </motion.span>
        </motion.div>
      </div>
      <div className="flex items-end justify-center gap-4 w-full" style={{ height: "80px" }}>
        {HVAC_SEASONS.map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-1">
            <div
              className="relative w-9 rounded-t-md overflow-hidden bg-gray-200/60"
              style={{ height: "72px" }}
            >
              <motion.div
                className="absolute bottom-0 w-full rounded-t-md"
                style={{ background: "linear-gradient(to top, #145A9E, #2EA3F2)" }}
                animate={{ height: `${bars[i]}%` }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              />
            </div>
            <span className="text-[9px] text-gray-500">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Electrical: upsell arc gauge ──────────────────────────────────────────
const ELEC_FROM = 8, ELEC_TO = 34, ELEC_MAX = 50;
const ARC_CIRCUMFERENCE = Math.PI * 40; // ~125.66

function ElectricalVisual() {
  const [value, setValue] = useState(ELEC_FROM);
  const pct = value / ELEC_MAX;
  const dashOffset = ARC_CIRCUMFERENCE * (1 - pct);

  useEffect(() => {
    const run = () => {
      setValue(ELEC_FROM);
      const duration = 1800;
      const start = Date.now();
      const tick = () => {
        const t = Math.min((Date.now() - start) / duration, 1);
        setValue(
          Math.round(ELEC_FROM + (1 - Math.pow(1 - t, 3)) * (ELEC_TO - ELEC_FROM))
        );
        if (t < 1) requestAnimationFrame(tick);
      };
      setTimeout(() => requestAnimationFrame(tick), 600);
    };
    run();
    const id = setInterval(run, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
      <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">
        Add-On Conversion
      </span>
      <div className="relative w-28 h-16">
        <svg
          width="112"
          height="64"
          viewBox="0 0 100 56"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="elecGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#145A9E" />
              <stop offset="100%" stopColor="#2EA3F2" />
            </linearGradient>
          </defs>
          {/* Track */}
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Fill — updates each rAF frame via React re-render */}
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="url(#elecGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={ARC_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center pb-1">
          <span className="text-2xl font-black text-gray-900 tabular-nums leading-none">
            {value}%
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span className="text-emerald-400 text-[10px] font-bold">
          +{ELEC_TO - ELEC_FROM}pp uplift
        </span>
      </div>
    </div>
  );
}

// ─── Other Trades: org chart growing ───────────────────────────────────────
const ORG_ROLES = ["Operations", "Sales", "Lead Tech"];

function OtherTradesVisual() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const grow = () => {
      setRevealed(0);
      ORG_ROLES.forEach((_, i) => {
        setTimeout(() => setRevealed(i + 1), (i + 1) * 900);
      });
    };
    grow();
    const id = setInterval(grow, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 w-full h-full justify-center">
      <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">Your Team</span>

      {/* Root node */}
      <div className="flex items-center justify-center w-20 h-8 rounded-lg blue-gradient-bg text-white text-xs font-bold shrink-0">
        You
      </div>

      {/* Connector stem */}
      <motion.div
        animate={{ opacity: revealed > 0 ? 1 : 0, scaleY: revealed > 0 ? 1 : 0 }}
        style={{ originY: 0 }}
        transition={{ duration: 0.3 }}
        className="w-px h-4 bg-electric-blue/30"
      />

      {/* Children row */}
      <div className="flex items-start gap-3" style={{ minHeight: "44px" }}>
        {ORG_ROLES.map((role, i) => (
          <motion.div
            key={role}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              revealed > i
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-3 bg-electric-blue/30" />
            <div className="flex items-center justify-center px-2 py-1.5 rounded-lg border border-electric-blue/30 bg-electric-blue/10 text-deep-blue text-[9px] font-semibold whitespace-nowrap">
              {role}
            </div>
          </motion.div>
        ))}
      </div>

      <span className="text-[10px] text-gray-500 mt-1">
        {revealed === 0 ? "Solo operator" : `${revealed + 1}-person team`}
      </span>
    </div>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────
const trades = [
  {
    number: "01",
    label: "Plumbing",
    tagline:
      "Stop surviving on one-and-done tickets. Double avg. ticket and watch cash flow stabilize.",
    href: "/home-service-business-coaching/plumbing/",
    Visual: PlumbingVisual,
  },
  {
    number: "02",
    label: "HVAC",
    tagline:
      "Break free from the summer spike trap. Build revenue that flows steady all four seasons.",
    href: "/home-service-business-coaching/hvac/",
    Visual: HVACVisual,
  },
  {
    number: "03",
    label: "Electrical",
    tagline:
      "Turn every service call into an upsell. Home automation is your untapped goldmine.",
    href: "/home-service-business-coaching/electrical/",
    Visual: ElectricalVisual,
  },
  {
    number: "04",
    label: "Other Trades",
    tagline:
      "Build the team that sets you free. Stop being the business — start owning it.",
    href: "/home-service-business-coaching/other-trades-business-coach/",
    Visual: OtherTradesVisual,
  },
];

export default function TradesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-28 px-6 bg-[#E8ECEF] relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto relative">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-electric-blue text-xs font-bold uppercase tracking-[0.25em] mb-5">
              Industry Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight font-display text-gray-900 leading-[1.12]">
              For Every Corner of the{" "}
              <span className="italic blue-gradient-text inline-block pr-2">
                Home Service Industry
              </span>
            </h2>
          </div>
          <p className="text-gray-600 text-base leading-relaxed max-w-sm lg:text-right lg:pb-1 shrink-0">
            We've been in the trenches with HVAC, plumbing, electrical, and more.
            If you're in the trades and ready to grow — we're in your corner.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trades.map((trade, i) => (
            <motion.a
              key={i}
              href={trade.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              className="bg-white shadow-sm border border-gray-100 rounded-2xl flex flex-col overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Visual area */}
              <div className="relative flex items-center justify-center h-[220px] p-6 border-b border-gray-100 overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(46,163,242,0.06) 0%, transparent 70%)",
                  }}
                />
                {/* Watermark number */}
                <span className="absolute top-4 right-5 text-5xl font-black text-gray-900/[0.05] font-display select-none pointer-events-none">
                  {trade.number}
                </span>
                <div className="flex items-center justify-center w-full h-full">
                  <trade.Visual />
                </div>
              </div>

              {/* Text area */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold text-gray-900 font-display">{trade.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {trade.tagline}
                </p>
                <div className="flex items-center gap-2 text-electric-blue text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all mt-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
