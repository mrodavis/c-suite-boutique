"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#0e0f11] via-charcoal to-[#0e0f11] text-white py-24 md:py-32"
    >
      {/* 👇 Add suppressHydrationWarning */}
      <div suppressHydrationWarning className="container grid gap-10 md:grid-cols-2 px-6 md:px-12">
        {/* Left side — Heading & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair leading-tight">
            Ready to <span className="text-shimmer-gold">Feel Your Best?</span>
          </h2>

          {/* ✨ Gold Accent Line */}
          <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>

          <p className="text-white/70 mt-6 leading-relaxed max-w-md">
            Call, text, or request a time and our team will confirm your appointment.
            Hydrate, restore, and thrive — your wellness journey starts today.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="tel:+15165408586"
              className="block text-lg hover:text-teal-300 transition-colors"
            >
              📞 (516) 540-8586
            </a>
            <a
              href="mailto:refreshivtaci@gmail.com"
              className="block text-lg hover:text-teal-300 transition-colors"
            >
              ✉️ hello@refreshiv.com
            </a>
          </div>
        </motion.div>

        {/* Right side — Contact Form */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-white/10 bg-ink/80 backdrop-blur-sm p-8 grid gap-4 shadow-[0_0_25px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            className="rounded-lg bg-charcoal/70 p-3 outline-none focus:ring-2 focus:ring-teal-400/50 placeholder-white/40 transition-all duration-300"
            placeholder="Full name"
          />
          <input
            className="rounded-lg bg-charcoal/70 p-3 outline-none focus:ring-2 focus:ring-teal-400/50 placeholder-white/40 transition-all duration-300"
            placeholder="Email"
            type="email"
          />
          <input
            className="rounded-lg bg-charcoal/70 p-3 outline-none focus:ring-2 focus:ring-teal-400/50 placeholder-white/40 transition-all duration-300"
            placeholder="Phone"
          />
          <textarea
            className="rounded-lg bg-charcoal/70 p-3 h-28 outline-none focus:ring-2 focus:ring-teal-400/50 placeholder-white/40 transition-all duration-300"
            placeholder="How can we help?"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold text-ink font-semibold"
          >
            Request Booking
          </motion.button>
        </motion.form>
      </div>

      {/* Optional background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(35,174,204,0.15)_0%,rgba(14,15,17,0)_80%)]"></div>
    </section>
  );
}
