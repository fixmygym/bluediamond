import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const FB_VIDEO_URL = "https://www.facebook.com/BlueDiamondConsultants/videos/1039536317287634/";

const cards = [
  {
    name: "Jersey Boys Plumbing",
    logo: "/jersey-boys.png",
    quote:
      "Blue Diamond Consultants have been an invaluable partner to our business. Their greatest impact has been educating us in financial literacy, which has transformed the way we operate. They're always available whenever we need support and consistently hold us accountable. Their guidance pushes us to take action in the areas of our business that need it most. The training and coaching they provide not only keep us sharp but also elevate our entire team's performance.",
  },
  {
    name: "All American Home Service",
    logo: "/all-american.webp",
    quote:
      "The Blue Diamond Consultants Group keeps us accountable and focused on meaningful action, helping us push past daily fires to truly move the needle. They've guided us in driving growth, upgrading processes, and staying committed to what matters most. When challenges arise, they provide steady support and follow-through. Most recently, their biggest impact has been in helping us hire, train, and lead two outstanding managers.",
  },
  {
    name: "Stellar Plumbing",
    logo: "/stellar.webp",
    quote:
      "They treat clients like family with unwavering support!!! Vast knowledge across many facets of business and the trades. Quick to respond to urgent matters. Introduction to preferred vendors and industry professionals. Weekly 1-on-1 meetings, and weekly open discussions with other industry professionals.",
  },
];

function TestimonialCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden cursor-default group"
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(20,90,158,0.08), 0 0 32px rgba(20,90,158,0.08)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(46,163,242,0.20), 0 0 48px rgba(20,90,158,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(20,90,158,0.08), 0 0 32px rgba(20,90,158,0.08)";
      }}
    >
      {/* Watermark quote */}
      <span className="absolute -top-4 -left-1 text-[120px] leading-none font-black text-gray-900/[0.04] select-none pointer-events-none font-display">
        "
      </span>

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, s) => (
          <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Quote — clamped or expanded */}
      <div className="relative">
        <p className={`text-gray-600 text-base leading-relaxed ${expanded ? "" : "line-clamp-4"}`}>
          "{card.quote}"
        </p>

        {/* Fade-out gradient when clamped */}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Read more / less toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-electric-blue text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity self-start"
      >
        {expanded ? (
          <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
        ) : (
          <><ChevronDown className="w-3.5 h-3.5" /> Read more</>
        )}
      </button>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200">
          <img src={card.logo} alt={card.name} className="w-full h-full object-contain p-0.5" />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-sm">{card.name}</p>
          <p className="text-electric-blue text-xs uppercase tracking-widest mt-0.5">Verified Client</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-28 px-6 bg-[#E8ECEF] relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto relative">

        {/* ── Top row: quote left, video right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-16">

          {/* Left — Title + featured quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight font-display leading-tight text-gray-900">
              Business Coaching{" "}
              <span className="italic blue-gradient-text inline-block pr-2">Reviews</span>
            </h2>

            <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed">
              "I've learned the skills and strategies of growing and exiting a business, and
              I've enjoyed some big wins because of it. Not everyone has this skillset, and it's
              even rarer in the home service industry. But Jim Clark is nailing it and sharing
              everything he's learned to grow and exit a service business."
            </blockquote>

            <p className="text-electric-blue text-sm font-bold uppercase tracking-widest">
              — Kevin Harrington, Original Shark on Shark Tank
            </p>
          </motion.div>

          {/* Right — Facebook video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-25 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #145A9E, #2EA3F2)" }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.10]" style={{ aspectRatio: "16/9" }}>
              <iframe
                className="w-full h-full"
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(FB_VIDEO_URL)}&show_text=false&autoplay=false`}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gray-300/60 mb-16" />

        {/* ── Bottom row: 3 testimonial cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <TestimonialCard key={card.name} card={card} index={i} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}
