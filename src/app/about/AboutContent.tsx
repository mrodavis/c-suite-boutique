"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutContent() {
  return (
    <main className="bg-[#0e0f11] text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero */}
      <div className="relative py-28 md:py-36 bg-[radial-gradient(circle_at_top,_rgba(20,150,140,0.25),_transparent_70%)] text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Image
            src="/refresh-logo.svg"
            alt="Refresh-IV.Taci Logo"
            width={340}
            height={340}
            className="w-[260px] md:w-[340px] animate-pulse-slow"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-6xl font-playfair text-shimmer-gold mb-6 z-10"
        >
          Meet Taci. Discover Refresh-IV.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative text-white/80 max-w-3xl mx-auto text-lg leading-relaxed z-10"
        >
          A modern wellness practice born from medical expertise and compassion.
          Refresh-IV.Taci blends precision IV therapy with holistic care to help
          you look, feel, and function at your best — inside and out.
        </motion.p>
      </div>

      {/* Mission + Philosophy */}
      <div className="pt-10 md:pt-12 pb-4 container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-charcoal/80 rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm
                       hover:border-gold/20 hover:shadow-[0_0_25px_rgba(255,215,0,0.1)]
                       transition-all duration-500"
          >
            <h2 className="text-2xl md:text-3xl font-playfair text-shimmer-gold mb-3">
              Our Mission
            </h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              To help every client achieve optimal well-being through safe,
              science-backed IV hydration and vitamin therapy — delivered in a
              luxury, nurse-led environment that feels personal, rejuvenating, and
              empowering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-charcoal/80 rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm
                       hover:border-gold/20 hover:shadow-[0_0_25px_rgba(255,215,0,0.1)]
                       transition-all duration-500"
          >
            <h2 className="text-2xl md:text-3xl font-playfair text-shimmer-gold mb-3">
              Our Philosophy
            </h2>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              We believe wellness should be both clinical and compassionate. At
              Refresh-IV.Taci, every treatment is customized to your goals, ensuring
              the perfect balance between medical precision and holistic rejuvenation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founder Story */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-charcoal/40 to-[#0e0f11] relative z-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_60px_rgba(255,215,0,0.25)]">
              <Image
                src="/images/taci-headshot.png"
                alt="Tsarina Taci Garcia, Board-Certified Nurse Practitioner and Founder of Refresh-IV.Taci"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25),transparent_70%)] animate-pulse-slow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl font-playfair text-shimmer-gold mb-3">
              About Tsarina (&ldquo;Taci&rdquo;), FNP-C
            </h3>
            <p className="text-white/80 leading-relaxed mb-5">
              Tsarina Garcia, a Board-Certified Family Nurse Practitioner and founder
              of Refresh-IV.Taci, created this practice to empower individuals to feel
              their best through personalized hydration therapy, vitamin infusions,
              and wellness care. With a background in women&apos;s health, primary care,
              and labor & delivery, she combines clinical expertise with compassion,
              ensuring every session feels restorative and luxurious.
            </p>
            <p className="text-white/70 leading-relaxed">
              Her goal is simple yet profound: to help you feel refreshed,
              balanced, and supported — from the inside out.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 md:py-24 bg-gradient-to-r from-teal-900/30 via-charcoal to-teal-800/30 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair mb-6 text-shimmer-gold"
        >
          Ready to Feel Refreshed?
        </motion.h2>
        <motion.a
          href="/book"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="btn-gold text-ink font-inter inline-block"
        >
          Book Your Session
        </motion.a>
      </div>

      <Footer />
    </main>
  );
}
