"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const VisibleResultsBadge = () => (
  <div
    className="w-[86px] h-[86px] md:w-[108px] md:h-[108px] rounded-full flex flex-col items-center justify-center text-center"
    style={{
      border: "1.5px solid #C9A15D",
      background: "rgba(255,253,251,0.90)",
      boxShadow: "0 4px 20px rgba(201,161,93,0.20)",
    }}
  >
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" className="mb-0.5">
      <path d="M1 12L3.5 4.5L9 8.5L14.5 4.5L17 12H1Z" fill="#C9A15D" opacity="0.12" />
      <path d="M1 12L3.5 4.5L9 8.5L14.5 4.5L17 12" stroke="#C9A15D" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <circle cx="1"  cy="4.5" r="1.2" fill="#C9A15D" />
      <circle cx="9"  cy="1.5" r="1.2" fill="#C9A15D" />
      <circle cx="17" cy="4.5" r="1.2" fill="#C9A15D" />
    </svg>
    <p className="uppercase font-bold leading-none"    style={{ fontSize: "0.48rem", letterSpacing: "0.14em", color: "#C9A15D" }}>Visible</p>
    <p className="uppercase font-bold leading-none mt-0.5" style={{ fontSize: "0.48rem", letterSpacing: "0.14em", color: "#C9A15D" }}>Results</p>
    <div className="w-5 h-px my-1" style={{ background: "rgba(201,161,93,0.35)" }} />
    <p className="uppercase leading-none" style={{ fontSize: "0.38rem", letterSpacing: "0.10em", color: "rgba(201,161,93,0.70)" }}>You Can Trust</p>
  </div>
);

const TextContent = () => (
  <div className="max-w-xl">
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="uppercase font-semibold mb-4 tracking-[0.28em] text-xs"
      style={{ color: "#E88C9A" }}
    >
      Confidence. Radiance. Elevated.
    </motion.p>

    <h1 className="font-playfair leading-none mb-5">
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.35 }}
        className="block font-bold leading-[0.92]"
        style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#3A2D2D" }}
      >
        LIGHTEN.
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.50 }}
        className="block font-bold mt-1 leading-[0.92]"
        style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#C9A15D" }}
      >
        NOURISH.
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.65 }}
        className="block font-script mt-1 leading-[1.1]"
        style={{ fontSize: "clamp(3rem, 7.5vw, 5.8rem)", color: "#E88C9A" }}
      >
        Transform.
      </motion.span>
    </h1>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.82 }}
      className="text-base leading-relaxed mb-8"
      style={{ color: "rgba(58,45,45,0.70)" }}
    >
      Our advanced Skin Lightening Cream visibly brightens,<br />
      nourishes and reveals your most radiant skin.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.96 }}
      className="flex flex-wrap gap-4"
    >
      <Link href="/shop" className="btn-primary">Shop The Cream</Link>
      <Link href="/results" className="btn-outline">See Results</Link>
    </motion.div>
  </div>
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  return (
    <section id="home" ref={ref}>

      {/* ── MOBILE layout (< lg): image on top, text below ── */}
      <div className="lg:hidden">
        {/* Product image — landscape crop, jar centered */}
        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          <Image
            src="/images/hero-cream.png"
            alt="C-Suite Skin Lightening Cream"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "55% 15%" }}
            sizes="100vw"
          />
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-4 right-4 z-10"
          >
            <VisibleResultsBadge />
          </motion.div>
        </div>

        {/* Text area */}
        <div className="px-6 py-10" style={{ background: "linear-gradient(180deg,#FAF7F2 0%,#FFFDFB 100%)" }}>
          <TextContent />
        </div>
      </div>

      {/* ── DESKTOP layout (≥ lg): full-bleed background ── */}
      <div
        className="hidden lg:block relative overflow-hidden"
        style={{ minHeight: "min(92vh, 860px)" }}
      >
        {/* Background image */}
        <Image
          src="/images/hero-cream.png"
          alt="C-Suite Skin Lightening Cream with gold lid on marble stand"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Left-fade overlay so text stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(250,247,242,0.88) 0%, rgba(250,247,242,0.65) 38%, rgba(250,247,242,0.08) 62%, transparent 100%)",
          }}
        />

        {/* Visible Results badge — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="absolute top-10 right-10 z-20"
        >
          <VisibleResultsBadge />
        </motion.div>

        {/* Text overlay */}
        <div
          className="relative z-10 flex items-center"
          style={{ minHeight: "min(92vh, 860px)" }}
        >
          <div className="container px-12 py-20">
            <TextContent />
          </div>
        </div>
      </div>

    </section>
  );
}
