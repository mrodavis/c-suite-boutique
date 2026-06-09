"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does the Skin Lightening Cream take to show results?",
    a: "Most clients notice visible brightening within 2–4 weeks of consistent use. For best results, apply twice daily to clean, dry skin. Significant improvement in dark spots and skin tone typically occurs within 6–8 weeks.",
  },
  {
    q: "Is the cream safe for all skin types?",
    a: "Yes. Our formula is carefully developed to be gentle yet effective for all skin types, including sensitive skin. We recommend a patch test before full application. Avoid contact with eyes.",
  },
  {
    q: "What are the key ingredients?",
    a: "Our Skin Lightening Cream is formulated with brightening agents, botanical extracts, and deep hydration ingredients. Full ingredient list is included on every product label and available on our ingredients page.",
  },
  {
    q: "How should I apply the cream?",
    a: "Apply a small amount to affected areas twice daily — morning and evening. Cleanse skin first, then gently massage in circular motions until fully absorbed. Follow with SPF during the day for best results.",
  },
  {
    q: "What is your shipping and return policy?",
    a: "We offer free shipping on all orders over $75. Orders are processed within 1–2 business days. We stand behind our products with a 30-day satisfaction guarantee — if you're not thrilled with your results, contact us.",
  },
  {
    q: "Can I use the cream alongside other skincare products?",
    a: "Absolutely. Our cream integrates seamlessly into any skincare routine. We recommend applying serums first, then the lightening cream, followed by moisturizer and SPF. Avoid combining with harsh acids on the same application.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section"
      style={{ backgroundColor: "#FFFDFB" }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: "#E88C9A" }}
          >
            Common Questions
          </p>
          <h2 className="section-title" style={{ display: "inline-block" }}>
            FAQs
          </h2>
          <p
            className="mt-6 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(58,45,45,0.62)" }}
          >
            Everything you need to know about C-Suite Beauty Boutique and our
            signature Skin Lightening Cream.
          </p>
        </motion.div>

        {/* Accordion */}
        <div
          className="rounded-2xl overflow-hidden divide-y"
          style={{
            border: "1px solid rgba(58,45,45,0.08)",
          }}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between transition-colors duration-200"
                  style={{
                    background: isOpen ? "rgba(201,161,93,0.05)" : "transparent",
                  }}
                >
                  <span
                    className="font-medium text-sm pr-4 leading-relaxed"
                    style={{ color: "#3A2D2D" }}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl flex-shrink-0 font-light"
                    style={{ color: "#C9A15D" }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(58,45,45,0.65)" }}
                        >
                          {f.a}
                        </p>
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
