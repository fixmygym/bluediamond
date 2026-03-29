import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Target,
  Star,
  Droplets,
  Wind,
  Zap,
  Home,
  Wrench,
  TrendingUp,
} from "lucide-react";

const CLIENTS = [
  { name: "Kevin Harrington", icon: Star },
  { name: "Stellar Plumbing", icon: Droplets },
  { name: "Jersey Boys Plumbing", icon: Droplets },
  { name: "All American Home Service", icon: Home },
  { name: "Premier Electrical", icon: Zap },
  { name: "Blue Star HVAC", icon: Wind },
  { name: "ProTech Services", icon: Wrench },
  { name: "Elite Home Pros", icon: TrendingUp },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-200 font-medium sm:text-xs">
      {label}
    </span>
  </div>
);

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden flex items-center">
      <style>{`
        @keyframes heroMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-hero-marquee {
          animation: heroMarquee 40s linear infinite;
        }
      `}</style>

      {/* Background Image — vertical mask wrapper + horizontal mask on image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 50%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 85%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-35"
          style={{
            backgroundImage: "url(/hero-bg.webp)",
            backgroundPosition: "center 50%",
            maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 72%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 72%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16 pt-32 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-4 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 lg:-ml-28">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-[0.3em]">
                  Home Service Business Consultant
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] text-white"
            >
              <span className="italic blue-gradient-text inline-block pr-2">Radically Change</span>
              <br />
              Your Home Service Business.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="max-w-xl text-base md:text-lg text-white leading-relaxed font-light"
            >
              Experience world-class coaching that sharpens your leadership and fuels your growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button style={{ backgroundColor: '#00DDEE' }} className="group inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-base font-bold uppercase tracking-widest text-black hover:scale-105 transition-transform font-button">
                Get Your Free Session
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full border border-white/10 bg-white/5 text-base font-bold uppercase tracking-widest text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-colors font-button">
                <Play className="w-4 h-4 fill-current" />
                See Results
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 lg:col-start-8 space-y-6 lg:translate-x-8">

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-electric-blue/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Target className="h-6 w-6 text-white/60" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">200+</div>
                    <div className="text-sm text-zinc-200">Businesses Coached</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-200">Client Growth Rate</span>
                    <span className="text-white font-medium">94%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0070f3]" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="90+" label="Yrs Combined" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="3" label="Expert Coaches" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="Free" label="First Session" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-white">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    ACCEPTING CLIENTS
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-white">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    PROVEN RESULTS
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Marquee Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl"
            >
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-200">
                Trusted by Home Service Leaders
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="animate-hero-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default"
                    >
                      <client.icon className="h-5 w-5 text-white/60" />
                      <span className="text-sm font-bold text-white tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
