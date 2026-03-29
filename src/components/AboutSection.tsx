import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-28 px-6 bg-[#E8ECEF] relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 font-display text-gray-900">
            Coaching Built for the{" "}
            <span className="italic blue-gradient-text inline-block pr-2">Real World of the Trades</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Most owners hear "business coaching" and picture generic advice from someone who's
            never had to make payroll in a slow season. That's not us. We've owned, scaled, and
            sold home service companies. We know the industry, the numbers, and the pressure.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            You might be staring at a P&amp;L you don't fully understand or fighting fires every
            day while jobs fall through the cracks. Maybe your best tech just quit, your scheduling
            is a mess, or your software is costing more than it's saving. We've seen it all. And
            fixed it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At Blue Diamond, we deliver high-touch coaching through world-class support and the
            highest level of accountability to scale your business now. We clarify your financials
            until you know exactly where you stand. We work alongside you to refine your operations,
            transform your leadership, and put systems in place that help your business grow with
            ease. Every step is customized to what you're dealing with right now — so the weekly
            wins stack up, the profits climb, and you step fully into the leader your business needs.
          </p>
          <a
            href="/home-service-business-coaching/"
            className="inline-flex items-center gap-2 text-electric-blue font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
          >
            Our Strategy <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Image */}
        <div className="relative h-full">
          {/* Offset accent border behind the card */}
          <div className="hidden sm:block absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-electric-blue/30" />

          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/about-bg.webp"
              alt="Blue Diamond coaching session"
              className="w-full h-full object-cover"
            />

            {/* Vignette — dark edges fade to transparent center */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)",
              }}
            />

            {/* Subtle brand blue tint */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(20,90,158,0.08)" }}
            />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Accent glow */}
          <div className="absolute -bottom-8 -left-8 w-64 h-64 blue-gradient-bg opacity-10 blur-3xl rounded-full" />
        </div>
      </div>
    </motion.section>
  );
}
