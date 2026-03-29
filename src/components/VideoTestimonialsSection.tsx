import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

// Replace with the real YouTube video ID
const VIDEO_ID = "dQw4w9WgXcQ";

export default function VideoTestimonialsSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pb-16 px-6 bg-[#070A0E]"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer group bg-[#0d1a2e] border border-white/[0.08]"
          onClick={() => setPlaying(true)}
        >
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(46,163,242,0.15) 40px, rgba(46,163,242,0.15) 41px)",
                }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(46,163,242,0.10) 0%, transparent 70%)",
                }}
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20,90,158,0.9), rgba(46,163,242,0.9))",
                    boxShadow: "0 0 50px rgba(46,163,242,0.4)",
                  }}
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </motion.div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}
