import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, Clock, Shield } from "lucide-react";

const companySizes = [
  "Less than 5 employees",
  "5-10 employees",
  "10+ employees",
];

const trustPoints = [
  { icon: Clock, text: "30-minute call, no fluff" },
  { icon: CheckCircle2, text: "Zero obligation or pressure" },
  { icon: Shield, text: "200+ businesses coached" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    size: "",
    name: "",
    email: "",
    phone: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white text-base placeholder-slate-600 focus:outline-none focus:border-electric-blue transition-colors";

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-20 pb-16 md:pt-36 md:pb-28 px-6 relative overflow-hidden bg-[#050D18]"
    >
      {/* Ambient background glow — clipped by overflow-hidden */}
      <div
        className="absolute top-1/2 right-[35%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(20,90,158,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:pt-2"
          >
            <p className="text-electric-blue text-xs font-bold uppercase tracking-[0.25em] mb-5">
              Free Clarity Call
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display text-white leading-[1.06] mb-6">
              Get Your{" "}
              <span className="italic blue-gradient-text inline-block pr-2">
                Free Session
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              In one focused conversation, we'll zero in on the biggest issues holding your business back. Quick to book, zero risk, packed with value.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-4 mb-12">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 border border-electric-blue/40 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-electric-blue" />
                  </div>
                  <span className="text-slate-300 text-base font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Stat strip */}
            <div className="flex items-center gap-0 pt-2">
              {[
                { value: "200+", label: "Businesses Coached" },
                { value: "94%", label: "Hit Their Goals" },
                { value: "90+", label: "Yrs Combined" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white font-display leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
                      {stat.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="w-px h-8 bg-white/10 mx-6 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative glass-card px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14"
              style={{
                boxShadow: "0 0 0 1px rgba(46,163,242,0.15), 0 0 50px rgba(20,90,158,0.35), 0 0 100px rgba(20,90,158,0.15)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-14 h-14 blue-gradient-bg rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">You're all set!</h3>
                  <p className="text-slate-400">We'll be in touch within 24 hours to confirm your Clarity Call.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Company <span className="text-electric-blue">*</span>
                      </label>
                      <input required type="text" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass} placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Team Size <span className="text-electric-blue">*</span>
                      </label>
                      <select required value={form.size}
                        onChange={(e) => setForm({ ...form, size: e.target.value })}
                        className={inputClass + " appearance-none"}>
                        <option value="" disabled className="bg-gray-900">Select</option>
                        {companySizes.map((s) => (
                          <option key={s} value={s} className="bg-gray-900">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Name <span className="text-electric-blue">*</span>
                      </label>
                      <input required type="text" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass} placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Email <span className="text-electric-blue">*</span>
                      </label>
                      <input required type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Phone <span className="text-electric-blue">*</span>
                    </label>
                    <input required type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass} placeholder="(555) 000-0000" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Biggest Challenge
                    </label>
                    <textarea rows={5} value={form.challenge}
                      onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                      className={inputClass + " resize-none"}
                      placeholder="What's holding you back right now?" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-full font-bold uppercase tracking-widest blue-gradient-bg hover:scale-[1.02] active:scale-[0.98] transition-transform text-white text-base shadow-lg shadow-electric-blue/20 font-button"
                  >
                    Book My Free Session
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
