"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Reduces the appearance of dark spots",
  "Evens out skin tone",
  "Improves texture and clarity",
  "Long-lasting hydration",
  "For all skin types",
];

export default function ProductShowcase() {
  return (
    <section id="product-showcase" className="overflow-hidden" style={{ background: "#F8E8E4" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "clamp(420px, 60vw, 640px)" }}>

        {/* Left: full-bleed product image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative min-h-[300px] lg:min-h-full"
        >
          <Image
            src="/images/showcase-cream.png"
            alt="C-Suite Skin Lightening Cream on pink swirl background"
            fill
            className="object-cover"
            style={{ objectPosition: "10% center" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right: copy — same blush background */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center px-8 md:px-14 py-16 lg:py-20"
          style={{ background: "#F8E8E4" }}
        >
          <div className="max-w-lg">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#E88C9A" }}
            >
              Our Signature
            </p>
            <h2
              className="font-playfair font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#3A2D2D" }}
            >
              Skin Lightening Cream
            </h2>
            <div
              className="w-12 h-0.5 mb-6"
              style={{ background: "linear-gradient(90deg,#C9A15D,#E8C766)" }}
            />
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(58,45,45,0.72)" }}
            >
              Formulated with powerful brightening agents and botanical extracts
              that work in harmony to lighten, hydrate and restore your skin&apos;s
              natural radiance.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <CheckCircle2
                    size={17}
                    className="flex-shrink-0"
                    style={{ color: "#C9A15D" }}
                  />
                  <span className="text-sm" style={{ color: "rgba(58,45,45,0.78)" }}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/shop" className="btn-primary inline-flex">
              Shop Now
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
