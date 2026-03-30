import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    number: "01",
    title: "7 Challenges of Owning an HVAC Business (And How to Overcome Them)",
    description: "Explore the top 7 challenges of owning an HVAC business and how to turn them into opportunities for growth.",
    slug: "7-challenges-of-owning-an-hvac-business-and-how-to-overcome-them",
    category: "HVAC",
    readTime: "6 min",
  },
  {
    number: "02",
    title: "The Stages of a Business Lifecycle: Home Service Business Success",
    description: "Learn how to navigate each stage of the business lifecycle to grow your home service company.",
    slug: "the-stages-of-a-business-lifecycle-home-service-business-success",
    category: "Growth",
    readTime: "5 min",
  },
  {
    number: "03",
    title: "How Much Does Service Excellence Matter for Home Service Providers?",
    description: "Discover why service excellence is essential for home service providers and how it drives growth.",
    slug: "how-much-does-service-excellence-matter-for-home-service-providers",
    category: "Operations",
    readTime: "4 min",
  },
];

const BADGE_TEXT = "PRACTICAL INSIGHTS · FROM THE FIELD · ";

function RotatingBadge() {
  return (
    <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56">
      {/* Outer spinning text ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="badgeCircle"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fontSize="7.5"
            fontWeight="800"
            letterSpacing="2"
            className="fill-gray-500 uppercase"
          >
            <textPath href="#badgeCircle">{BADGE_TEXT}</textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center circle — counter-rotates so arrow always points up-right */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full blue-gradient-bg flex items-center justify-center shadow-lg"
          style={{ boxShadow: "0 8px 32px rgba(20,90,158,0.4)" }}
        >
          <ArrowUpRight className="w-8 h-8 text-white" strokeWidth={2.5} />
        </motion.div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section className="py-16 md:py-28 px-6 bg-[#E8ECEF] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* ── Left: header ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start lg:sticky lg:top-12 xl:top-16"
          >
            <p className="text-electric-blue text-xs font-bold uppercase tracking-[0.25em] mb-4">
              From the Blog
            </p>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight font-display text-gray-900 leading-[1.06] mb-5">
              Resources for{" "}
              <span className="italic blue-gradient-text inline-block pr-1">
                Your Business
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xs">
              Practical insights from coaches who've been in the trenches — and come out ahead.
            </p>

            <a
              href="/blogs/"
              className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-400 hover:text-electric-blue uppercase tracking-[0.2em] transition-colors mb-10"
            >
              View all articles <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <RotatingBadge />
          </motion.div>

          {/* ── Right: Article rows ── */}
          <div className="flex flex-col">
            {posts.map((post, i) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover="hover"
                className="group relative flex items-start gap-6 py-6 md:py-7 lg:py-9 border-t border-gray-300/70 last:border-b cursor-pointer"
              >
                {/* Hover background sweep */}
                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -inset-x-6 inset-y-0 bg-white rounded-2xl pointer-events-none shadow-sm"
                />

                {/* Number */}
                <motion.span
                  variants={{ hover: { color: "rgba(20,90,158,0.15)" } }}
                  className="relative shrink-0 font-black font-display leading-none text-gray-900/[0.07] transition-colors"
                  style={{ fontSize: "clamp(40px, 10vw, 64px)", lineHeight: 1, marginTop: "-4px" }}
                >
                  {post.number}
                </motion.span>

                {/* Content */}
                <div className="relative flex-1 min-w-0 pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-electric-blue text-[10px] font-bold uppercase tracking-[0.2em]">
                      {post.category}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-400 text-[10px] font-medium">{post.readTime} read</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl font-display leading-snug mb-2 group-hover:text-electric-blue transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  variants={{ hover: { rotate: 0, opacity: 1, x: 0, y: 0 } }}
                  initial={{ rotate: -15, opacity: 0, x: -4, y: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="relative shrink-0 w-10 h-10 rounded-full blue-gradient-bg flex items-center justify-center mt-1"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
