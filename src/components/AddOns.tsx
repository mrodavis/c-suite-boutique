"use client";

import { motion } from "framer-motion";
import { Crown, FlaskConical, Heart } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: <Crown size={22} strokeWidth={1.5} style={{ color: "#C9A15D" }} />,
    title: "Premium Quality",
    desc: "Only the finest ingredients for exceptional results.",
  },
  {
    icon: <FlaskConical size={22} strokeWidth={1.5} style={{ color: "#C9A15D" }} />,
    title: "Backed by Science",
    desc: "Advanced formulations created for real results.",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} style={{ color: "#C9A15D" }} />,
    title: "Made for You",
    desc: "Skincare solutions that celebrate your unique beauty.",
  },
];

export default function AddOns() {
  return (
    <section
      id="founder"
      className="section relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#2C2020 0%,#3A2D2D 100%)" }}
    >
      {/* Gold shimmer line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(201,161,93,0.6),transparent)" }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div
              className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
                border: "1px solid rgba(201,161,93,0.20)",
              }}
            >
              <div
                className="w-full h-full flex items-end justify-center pb-8"
                style={{
                  background:
                    "linear-gradient(160deg,#4A3535 0%,#3A2D2D 50%,#2C2020 100%)",
                }}
              >
                {/* Placeholder silhouette */}
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,rgba(201,161,93,0.25),rgba(201,161,93,0.10))",
                      border: "1px solid rgba(201,161,93,0.25)",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>✦</span>
                  </div>
                  <p
                    className="font-script text-2xl"
                    style={{ color: "rgba(201,161,93,0.7)" }}
                  >
                    Cynthia
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top,rgba(44,32,32,0.4) 0%,transparent 50%)",
                }}
              />
            </div>
          </motion.div>

          {/* Center: Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2
              className="font-playfair font-bold leading-tight mb-2"
              style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#FAF7F2" }}
            >
              Beauty Is Power.
            </h2>
            <p
              className="font-script leading-none mb-6"
              style={{ fontSize: "clamp(2rem,5vw,3rem)", color: "#C9A15D" }}
            >
              Own It.
            </p>

            <div
              className="w-12 h-px mb-6 mx-auto lg:mx-0"
              style={{ background: "linear-gradient(90deg,#C9A15D,#E8C766)" }}
            />

            <p
              className="text-base leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0"
              style={{ color: "rgba(250,247,242,0.72)" }}
            >
              At C-Suite Beauty Boutique, we believe skincare should empower
              confidence and self-care. Because when your skin glows, you lead
              with confidence.
            </p>

            {/* Signature */}
            <div>
              <p
                className="font-script text-3xl"
                style={{ color: "#C9A15D" }}
              >
                C-Suite
              </p>
              <p
                className="font-inter text-xs uppercase tracking-[0.25em] mt-1"
                style={{ color: "rgba(250,247,242,0.50)" }}
              >
                Founder &amp; CEO
              </p>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-6"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="flex items-start gap-4"
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0"
                  style={{
                    border: "1px solid rgba(201,161,93,0.30)",
                    background: "rgba(201,161,93,0.08)",
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-1 uppercase tracking-[0.12em]"
                    style={{ color: "#FAF7F2" }}
                  >
                    {p.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.55)" }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom trust strip */}
      <div
        className="absolute bottom-0 left-0 right-0 py-3 border-t"
        style={{ borderColor: "rgba(201,161,93,0.15)", background: "rgba(0,0,0,0.20)" }}
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs uppercase tracking-[0.18em]"
            style={{ color: "rgba(250,247,242,0.45)" }}
          >
            {["Secure Payment", "100% Authentic", "Satisfaction Guaranteed", "Worldwide Shipping"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
