"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does an IV session take?",
    a: "Most sessions last 35–60 minutes depending on the formula.",
  },
  {
    q: "Is it safe?",
    a: "Yes. All drips are administered by licensed professionals under strict protocols.",
  },
  {
    q: "How often should I get IV therapy?",
    a: "Many clients visit monthly or before/after big events, travel, or workouts.",
  },
  {
    q: "Does it hurt?",
    a: "Most clients feel only a small pinch. Our nurses are highly skilled in making it quick and comfortable.",
  },
  {
    q: "Do I need to book in advance?",
    a: "To provide the most relaxing and personalized experience, all IV sessions are by appointment only. This allows us to prepare your custom drip and create a seamless visit just for you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-[#0e0f11] via-charcoal to-[#0e0f11] text-white py-24 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-playfair">FAQs</h2>

          {/* ✨ Gold accent line */}
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Everything you need to know before booking your first IV session.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-ink/80 backdrop-blur-sm overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden">
                <motion.button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left p-6 transition-colors duration-300 ${
                    isOpen ? "bg-white/5" : "hover:bg-white/5"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-teal-300 text-2xl select-none"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </div>
                </motion.button>

                {/* Smooth Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth motion
                      }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/70 leading-relaxed">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
