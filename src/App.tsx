/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import HeroSection from "./components/ui/glassmorphism-trust-hero";
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import ValuesSection from "./components/ValuesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import TradesSection from "./components/TradesSection";
import TeamSection from "./components/TeamSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-electric-blue/30">
      {/* Background Elements */}
      <div className="glow-bg" />
      <div className="glow-spot top-[-300px] left-[-200px] opacity-80" />
      <div className="glow-spot bottom-[-300px] right-[-200px] opacity-90" />
      <div className="glow-spot-secondary top-[20%] right-[10%] opacity-60" />
      <div className="glow-spot-secondary bottom-[20%] left-[10%] opacity-50" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-charcoal/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center h-20 md:h-32">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img src="/logo 2.png" alt="Blue Diamond Consultants" className="h-20 md:h-32 w-auto" />
          </motion.div>

          {/* Centered Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-10 text-[13px] font-bold uppercase tracking-[0.2em] text-slate-200">
            {["About Blue Diamond", "Our Coaching", "Who We Serve", "Events", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <button className="px-10 py-4 border-2 border-[#00DDEE] text-[#00DDEE] text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-[#00DDEE] hover:text-black transition-all rounded-full font-button">
              Get Your Free Session
            </button>
          </motion.div>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-charcoal border-b border-white/10 p-6 flex flex-col gap-4 lg:hidden"
          >
            <a href="#about" className="text-slate-200 hover:text-white" onClick={() => setMobileMenuOpen(false)}>About Blue Diamond</a>
            <a href="#coaching" className="text-slate-200 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Our Coaching</a>
            <a href="#serve" className="text-slate-200 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Who We Serve</a>
            <button className="w-full py-4 rounded-full accent-gradient-bg font-bold uppercase tracking-widest font-button">Get Your Free Session</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] blue-gradient-bg opacity-[0.03] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] blue-gradient-bg opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <HeroSection />
      </section>

      <ProcessSection />
      <AboutSection />
      <ValuesSection />
      <TestimonialsSection />
      <CTASection />
      <TradesSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 blue-gradient-bg rounded flex items-center justify-center">
                  <ShieldCheck className="text-white w-4 h-4" />
                </div>
                <span className="text-lg font-bold tracking-tight">BLUE DIAMOND</span>
              </div>
              <p className="text-slate-400 text-base leading-relaxed">
                High-touch coaching for home service business owners who are ready to scale, lead, and win.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest font-display">Company</h4>
              <ul className="space-y-4 text-base text-slate-400">
                <li><a href="/about/" className="hover:text-white transition-colors">About Blue Diamond</a></li>
                <li><a href="/about/meet-the-team/" className="hover:text-white transition-colors">Meet the Team</a></li>
                <li><a href="/about/reviews/" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="/about/case-studies/" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest font-display">Coaching</h4>
              <ul className="space-y-4 text-base text-slate-400">
                <li><a href="/home-service-business-coaching/hvac/" className="hover:text-white transition-colors">HVAC</a></li>
                <li><a href="/home-service-business-coaching/plumbing/" className="hover:text-white transition-colors">Plumbing</a></li>
                <li><a href="/home-service-business-coaching/electrical/" className="hover:text-white transition-colors">Electrical</a></li>
                <li><a href="/home-service-business-coaching/other-trades-business-coach/" className="hover:text-white transition-colors">Other Trades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest font-display">Resources</h4>
              <ul className="space-y-4 text-base text-slate-400">
                <li><a href="/blogs/" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/about/video-resources/" className="hover:text-white transition-colors">Video Resources</a></li>
                <li><a href="/events/" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="/contact/" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Blue Diamond Consultants. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="/privacy-policy/" className="hover:text-white">Privacy Policy</a>
              <a href="/terms-and-conditions/" className="hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
