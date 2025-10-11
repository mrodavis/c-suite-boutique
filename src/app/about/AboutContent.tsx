"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
// import { Droplets, ShieldCheck, Sparkles } from "lucide-react";


export default function AboutContent() {
  return (
    <main className="bg-[#0e0f11] text-white min-h-screen overflow-hidden">
        < Navbar />
      {/* 🩵 Hero Section */}
      <section className="relative py-32 md:py-40 bg-[radial-gradient(circle_at_top,_rgba(20,150,140,0.25),_transparent_70%)] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-playfair text-shimmer-gold mb-6"
        >
          Meet Taci. Discover Refresh-IV.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          A modern wellness practice born from medical expertise and compassion.
          Refresh-IV.Taci blends precision IV therapy with holistic care to help
          you look, feel, and function at your best — inside and out.
        </motion.p>
      </section>

      {/* ✨ Mission + Philosophy */}
      <section className="py-20 md:py-28 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-charcoal/80 rounded-2xl p-10 border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-playfair text-shimmer-gold mb-4">
            Our Mission
          </h2>
          <p className="text-white/80 leading-relaxed">
            To help every client achieve optimal well-being through safe,
            science-backed IV hydration and vitamin therapy — delivered in a
            luxury, nurse-led environment that feels personal, rejuvenating, and
            empowering.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-charcoal/80 rounded-2xl p-10 border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-playfair text-shimmer-gold mb-4">
            Our Philosophy
          </h2>
          <p className="text-white/80 leading-relaxed">
            We believe wellness should be both clinical and compassionate. At
            Refresh-IV.Taci, every treatment is customized to your goals,
            ensuring the perfect balance between medical precision and holistic
            rejuvenation.
          </p>
        </motion.div>
      </section>

      {/* 🌿 Founder Story */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-charcoal/40 to-[#0e0f11]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Placeholder image circle */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-teal-400/40 to-gold/20 border border-gold/30 shadow-[0_0_60px_rgba(255,215,0,0.2)]" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl font-playfair text-shimmer-gold mb-4">
              About Tsarina (“Taci”), FNP-C
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Tsarina, a Board-Certified Family Nurse Practitioner and founder
              of Refresh-IV.Taci, created this practice to empower individuals
              to feel their best through personalized hydration therapy, vitamin
              infusions, and wellness care. With a background in women’s health,
              primary care, and labor & delivery, she combines clinical
              expertise with compassion, ensuring every session feels restorative
              and luxurious.
            </p>
            <p className="text-white/70 leading-relaxed">
              Her goal is simple yet profound: to help you feel refreshed,
              balanced, and supported — from the inside out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 💫 Call to Action */}
      <section className="py-24 bg-gradient-to-r from-teal-900/30 via-charcoal to-teal-800/30 text-center">
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
      </section>
    </main>
  );
}
