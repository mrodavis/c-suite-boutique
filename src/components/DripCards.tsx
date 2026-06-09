"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Reduces the appearance of dark spots",
  "Evens out skin tone",
  "Improves texture and clarity",
  "Long-lasting hydration",
  "For all skin types",
];

/* ─── CSS jar (smaller version for showcase) ─────────── */
function ShowcaseJar() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background swirl */}
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5D6D6 0%, #FAE0D0 40%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 left-4 w-40 h-40 rounded-full blur-2xl opacity-50 pointer-events-none"
        style={{ background: "#F5D6D6" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Lid */}
        <div
          className="w-56 h-[64px] rounded-t-[48px] rounded-b-[10px] shadow-xl"
          style={{
            background:
              "linear-gradient(140deg,#EED078 0%,#C9A15D 35%,#B8860B 65%,#D4B96B 100%)",
            boxShadow: "0 8px 30px rgba(201,161,93,0.50), inset 0 1px 0 rgba(255,240,150,0.30)",
          }}
        />
        {/* Body */}
        <div
          className="relative w-56 h-52 rounded-b-[48px] flex flex-col items-center justify-center px-8 border overflow-hidden"
          style={{
            background: "linear-gradient(160deg,#FFFFFF 0%,#FAF7F2 55%,#F0EBE0 100%)",
            borderColor: "rgba(201,161,93,0.15)",
            boxShadow: "0 30px 70px rgba(58,45,45,0.14), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <div
            className="absolute right-6 top-5 w-2.5 h-24 rounded-full blur-sm opacity-40"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),transparent)",
              transform: "rotate(12deg)",
            }}
          />
          <div className="text-center">
            <p className="tracking-[0.32em] uppercase font-light" style={{ fontSize: "0.55rem", color: "rgba(58,45,45,0.80)" }}>C-Suite</p>
            <p className="tracking-[0.18em] uppercase mt-0.5" style={{ fontSize: "0.40rem", color: "rgba(58,45,45,0.50)" }}>Beauty Boutique</p>
            <div className="w-10 h-px my-3 mx-auto" style={{ background: "linear-gradient(90deg,transparent,#C9A15D,transparent)" }} />
            <p className="tracking-[0.14em] uppercase font-medium" style={{ fontSize: "0.52rem", color: "rgba(58,45,45,0.88)", lineHeight: 1.5 }}>
              Skin Lightening<br />Cream
            </p>
            <p className="mt-2 tracking-[0.10em] uppercase" style={{ fontSize: "0.36rem", color: "rgba(58,45,45,0.45)" }}>
              Brighten · Even Tone · Glow
            </p>
            <p className="mt-1" style={{ fontSize: "0.34rem", color: "rgba(58,45,45,0.30)" }}>50g / 1.76 oz</p>
          </div>
        </div>

        {/* Platform */}
        <div
          className="w-72 h-6 rounded-full mt-2 shadow-lg"
          style={{
            background: "linear-gradient(90deg,#E4DDD6 0%,#F5F0EB 40%,#F5F0EB 60%,#E4DDD6 100%)",
            boxShadow: "0 10px 30px rgba(58,45,45,0.12)",
          }}
        />
        <div className="w-60 h-2 rounded-full mt-1 opacity-20" style={{ background: "#3A2D2D", filter: "blur(4px)" }} />
      </div>

      {/* Rose swish decorations */}
      <div className="absolute bottom-8 right-4 pointer-events-none">
        <div className="w-20 h-20 rounded-full opacity-60" style={{ background: "radial-gradient(circle, #E88C9A 30%, #F5D6D6 80%)", filter: "blur(3px)" }} />
      </div>
    </div>
  );
}

/* ─── Product Showcase Section ────────────────────────── */
export default function DripCards() {
  return (
    <section
      id="product-showcase"
      className="section"
      style={{ background: "linear-gradient(135deg,#FAE8E8 0%,#FFF7F2 50%,#FAF7F2 100%)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Product visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-sm">
              <ShowcaseJar />
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pl-8"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#E88C9A" }}
            >
              Our Signature
            </p>
            <h2
              className="font-playfair font-normal leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#3A2D2D" }}
            >
              Skin Lightening Cream
            </h2>
            <div
              className="w-12 h-0.5 mb-6"
              style={{ background: "linear-gradient(90deg,#C9A15D,#E8C766)" }}
            />
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(58,45,45,0.68)" }}
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
                  <span className="text-sm" style={{ color: "rgba(58,45,45,0.75)" }}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/shop" className="btn-primary inline-flex">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
