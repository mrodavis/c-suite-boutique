"use client";

import { motion } from "framer-motion";
import { Camera, Scan, ShoppingBag, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

const aiFeatures = [
  { icon: <Scan size={16} />, label: "Skin tone analysis" },
  { icon: <Sparkles size={16} />, label: "Dark spot detection" },
  { icon: <ShoppingBag size={16} />, label: "Product recommendations" },
  { icon: <TrendingUp size={16} />, label: "Progress tracking" },
  { icon: <Camera size={16} />, label: "Personalized routines" },
];

export default function HowItWorks() {
  return (
    <section
      id="ai-consultant"
      className="section"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div
              className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(160deg,#3A2D2D 0%,#2C2020 100%)",
                border: "1px solid rgba(201,161,93,0.20)",
              }}
            >
              {/* Mock phone screen */}
              <div className="p-6 h-full flex flex-col">
                {/* Status bar */}
                <div className="flex justify-between items-center mb-5 opacity-40">
                  <span className="text-[9px] text-white tracking-wider">9:41</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-white" />
                    ))}
                  </div>
                </div>

                {/* App header */}
                <div className="mb-5">
                  <p
                    className="text-xs uppercase tracking-[0.2em] mb-1"
                    style={{ color: "rgba(201,161,93,0.70)" }}
                  >
                    C-Suite
                  </p>
                  <p className="font-playfair text-white text-lg">AI Consultant</p>
                </div>

                {/* Scan area */}
                <div
                  className="flex-1 rounded-2xl flex items-center justify-center relative overflow-hidden mb-4"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px dashed rgba(201,161,93,0.30)" }}
                >
                  <div className="text-center">
                    <Camera size={32} style={{ color: "rgba(201,161,93,0.60)" }} className="mx-auto mb-2" />
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Upload a selfie
                    </p>
                  </div>
                  {/* Corner scan markers */}
                  {[
                    "top-2 left-2 border-t border-l",
                    "top-2 right-2 border-t border-r",
                    "bottom-2 left-2 border-b border-l",
                    "bottom-2 right-2 border-b border-r",
                  ].map((cls, i) => (
                    <div
                      key={i}
                      className={`absolute w-4 h-4 ${cls}`}
                      style={{ borderColor: "rgba(201,161,93,0.50)" }}
                    />
                  ))}
                </div>

                {/* Mock analysis bars */}
                {["Skin Tone", "Hydration", "Clarity"].map((label, i) => (
                  <div key={label} className="mb-2">
                    <div className="flex justify-between text-[8px] mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                      <span>{label}</span>
                      <span>{[82, 76, 91][i]}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.10)" }}>
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: `${[82, 76, 91][i]}%`,
                          background: "linear-gradient(90deg,#C9A15D,#E8C766)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#E88C9A" }}
            >
              Powered by AI
            </p>
            <h2 className="section-title mb-4">
              AI Beauty Consultant
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(58,45,45,0.68)" }}
            >
              Upload a selfie and receive a personalized skincare assessment powered
              by AI. Get product recommendations tailored to your unique skin profile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {aiFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl"
                  style={{
                    background: "rgba(201,161,93,0.08)",
                    border: "1px solid rgba(201,161,93,0.15)",
                  }}
                >
                  <span style={{ color: "#C9A15D" }}>{f.icon}</span>
                  <span className="text-sm font-medium" style={{ color: "#3A2D2D" }}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/ai-consultant" className="btn-gold inline-flex">
              Try The AI Beauty Consultant
            </Link>
            <p
              className="text-xs mt-3"
              style={{ color: "rgba(58,45,45,0.45)" }}
            >
              Free · No account required · Results in seconds
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
