"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ background: "linear-gradient(135deg,#FAF7F2 0%,#FFFFFF 100%)" }}
    >
      <div className="container grid gap-12 md:grid-cols-2 px-6 md:px-12 items-start">

        {/* Left: Heading & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: "#E88C9A" }}
          >
            Get in Touch
          </p>
          <h2 className="section-title mb-6">
            Ready to Glow?
          </h2>
          <p
            className="leading-relaxed max-w-sm mb-8"
            style={{ color: "rgba(58,45,45,0.65)", fontSize: "0.95rem" }}
          >
            Questions about your order, skincare advice, or wholesale inquiries?
            Our team is here to help. Reach out — we&apos;d love to hear from you.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:hello@csuitebeautyboutique.com"
              className="flex items-center gap-3 text-sm transition-colors hover:text-gold-500"
              style={{ color: "rgba(58,45,45,0.75)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,161,93,0.10)", border: "1px solid rgba(201,161,93,0.20)" }}
              >
                <Mail size={15} style={{ color: "#C9A15D" }} />
              </div>
              hello@csuitebeautyboutique.com
            </a>
            <a
              href="tel:+15165408586"
              className="flex items-center gap-3 text-sm transition-colors hover:text-gold-500"
              style={{ color: "rgba(58,45,45,0.75)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,161,93,0.10)", border: "1px solid rgba(201,161,93,0.20)" }}
              >
                <Phone size={15} style={{ color: "#C9A15D" }} />
              </div>
              (516) 540-8586
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-2xl p-8 grid gap-4"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(58,45,45,0.08)",
            boxShadow: "0 4px 24px rgba(58,45,45,0.08)",
          }}
        >
          <input
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
            placeholder="Full name"
            style={{
              background: "#FAF7F2",
              border: "1px solid rgba(58,45,45,0.12)",
              color: "#3A2D2D",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#C9A15D")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(58,45,45,0.12)")}
          />
          <input
            type="email"
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
            placeholder="Email address"
            style={{
              background: "#FAF7F2",
              border: "1px solid rgba(58,45,45,0.12)",
              color: "#3A2D2D",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#C9A15D")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(58,45,45,0.12)")}
          />
          <input
            type="tel"
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
            placeholder="Phone (optional)"
            style={{
              background: "#FAF7F2",
              border: "1px solid rgba(58,45,45,0.12)",
              color: "#3A2D2D",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#C9A15D")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(58,45,45,0.12)")}
          />
          <textarea
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none h-28"
            placeholder="How can we help?"
            style={{
              background: "#FAF7F2",
              border: "1px solid rgba(58,45,45,0.12)",
              color: "#3A2D2D",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#C9A15D")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(58,45,45,0.12)")}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
