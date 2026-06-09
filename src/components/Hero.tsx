"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ─── Cosmetic Jar CSS Component ──────────────────────── */
function CosmeticJar() {
  return (
    <div className="relative w-full flex items-center justify-center py-8">

      {/* Background glow orbs */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-70 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5D6D6 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-10 left-8 w-36 h-36 rounded-full blur-2xl opacity-50 pointer-events-none"
        style={{ background: "#F5D6D6" }}
      />
      <div
        className="absolute bottom-8 right-4 w-24 h-24 rounded-full blur-xl opacity-40 pointer-events-none"
        style={{ background: "#E88C9A" }}
      />

      {/* Jar container */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Gold lid */}
        <div
          className="w-52 h-[60px] rounded-t-[44px] rounded-b-[10px] shadow-lg"
          style={{
            background:
              "linear-gradient(140deg,#EED078 0%,#C9A15D 35%,#B8860B 65%,#D4B96B 100%)",
            boxShadow: "0 6px 24px rgba(201,161,93,0.45), inset 0 1px 0 rgba(255,240,150,0.35)",
          }}
        />

        {/* Jar body */}
        <div
          className="relative w-52 h-48 rounded-b-[44px] flex flex-col items-center justify-center px-7 border overflow-hidden"
          style={{
            background: "linear-gradient(160deg,#FFFFFF 0%,#FAF7F2 55%,#F0EBE0 100%)",
            borderColor: "rgba(201,161,93,0.18)",
            boxShadow:
              "0 24px 60px rgba(58,45,45,0.13), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Glass shine highlight */}
          <div
            className="absolute right-5 top-4 w-2 h-20 rounded-full blur-sm opacity-50"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.8),transparent)",
              transform: "rotate(12deg)",
            }}
          />

          {/* Label */}
          <div className="text-center space-y-[3px]">
            <p
              className="tracking-[0.32em] uppercase font-light"
              style={{ fontSize: "0.5rem", color: "rgba(58,45,45,0.85)" }}
            >
              C-Suite
            </p>
            <p
              className="tracking-[0.18em] uppercase"
              style={{ fontSize: "0.38rem", color: "rgba(58,45,45,0.55)" }}
            >
              Beauty Boutique
            </p>
          </div>

          {/* Gold separator */}
          <div
            className="w-9 h-px my-2.5"
            style={{ background: "linear-gradient(90deg,transparent,#C9A15D,transparent)" }}
          />

          <div className="text-center space-y-[4px]">
            <p
              className="tracking-[0.16em] uppercase font-medium"
              style={{ fontSize: "0.48rem", color: "rgba(58,45,45,0.88)" }}
            >
              Skin Lightening
            </p>
            <p
              className="tracking-[0.16em] uppercase font-medium"
              style={{ fontSize: "0.48rem", color: "rgba(58,45,45,0.88)" }}
            >
              Cream
            </p>
          </div>

          <p
            className="mt-3 tracking-[0.12em] uppercase text-center"
            style={{ fontSize: "0.35rem", color: "rgba(58,45,45,0.45)" }}
          >
            Brighten · Even Tone · Glow
          </p>
          <p
            className="mt-1 text-center"
            style={{ fontSize: "0.32rem", color: "rgba(58,45,45,0.30)" }}
          >
            50g / 1.76 oz
          </p>
        </div>

        {/* Marble platform */}
        <div
          className="w-64 h-[22px] rounded-full mt-2 shadow-md"
          style={{
            background:
              "linear-gradient(90deg,#E4DDD6 0%,#F5F0EB 40%,#F5F0EB 60%,#E4DDD6 100%)",
            boxShadow: "0 10px 32px rgba(58,45,45,0.14)",
          }}
        />
        <div
          className="w-52 h-2 rounded-full mt-0.5 blur-sm"
          style={{ background: "rgba(58,45,45,0.07)" }}
        />
      </div>

      {/* "Visible Results" badge */}
      <div
        className="absolute top-4 right-0 md:right-4 w-[82px] h-[82px] rounded-full flex items-center justify-center text-center"
        style={{
          border: "1.5px solid #C9A15D",
          background: "rgba(255,253,251,0.92)",
          boxShadow: "0 4px 16px rgba(201,161,93,0.18)",
        }}
      >
        <div>
          <p
            className="uppercase font-semibold leading-tight block"
            style={{ fontSize: "0.42rem", letterSpacing: "0.12em", color: "#C9A15D" }}
          >
            Visible
          </p>
          <p
            className="uppercase font-semibold leading-tight block"
            style={{ fontSize: "0.42rem", letterSpacing: "0.12em", color: "#C9A15D" }}
          >
            Results
          </p>
          <div
            className="w-4 h-px mx-auto my-0.5"
            style={{ background: "rgba(201,161,93,0.40)" }}
          />
          <p
            className="uppercase leading-tight block"
            style={{ fontSize: "0.38rem", letterSpacing: "0.10em", color: "rgba(201,161,93,0.70)" }}
          >
            You Can
          </p>
          <p
            className="uppercase leading-tight block"
            style={{ fontSize: "0.38rem", letterSpacing: "0.10em", color: "rgba(201,161,93,0.70)" }}
          >
            Trust
          </p>
        </div>
      </div>

      {/* Rose petal decorations */}
      <div className="absolute bottom-12 left-0 pointer-events-none">
        <div
          className="w-14 h-14 rounded-full opacity-70"
          style={{ background: "radial-gradient(circle, #E88C9A 30%, #F5D6D6 70%)", filter: "blur(2px)" }}
        />
      </div>
      <div className="absolute bottom-6 left-6 pointer-events-none">
        <div
          className="w-8 h-8 rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, #D97080 20%, #F5D6D6 80%)", filter: "blur(3px)" }}
        />
      </div>
    </div>
  );
}

/* ─── Hero Section ────────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
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
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#FFFDFB 0%,#FAF7F2 35%,#F5D6D6 70%,#F6EFE8 100%)",
        minHeight: "min(90vh, 800px)",
      }}
    >
      {/* Decorative blush radial behind the product */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at 80% 30%, #F5D6D6 0%, transparent 65%)" }}
      />

      <div className="container relative z-10 py-16 md:py-0 md:min-h-[inherit]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-[min(90vh,800px)]">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1 pb-8 lg:pb-0"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="uppercase font-medium mb-5 tracking-[0.28em] text-xs"
              style={{ color: "#E88C9A" }}
            >
              Confidence. Radiance. Elevated.
            </motion.p>

            {/* Headline */}
            <h1 className="font-playfair leading-none mb-6">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.4 }}
                className="block font-bold leading-[0.95]"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: "#3A2D2D" }}
              >
                LIGHTEN.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.6 }}
                className="block font-bold mt-1 leading-[0.95]"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: "#C9A15D" }}
              >
                NOURISH.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.8 }}
                className="block font-script mt-2 leading-[1.1]"
                style={{ fontSize: "clamp(3.2rem, 7.5vw, 5.2rem)", color: "#C9A15D" }}
              >
                Transform.
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.0 }}
              className="text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-9"
              style={{ color: "rgba(58,45,45,0.68)" }}
            >
              Our advanced Skin Lightening Cream visibly brightens, nourishes and
              reveals your most radiant skin.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.15 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link href="/shop" className="btn-primary">
                Shop The Cream
              </Link>
              <Link href="/results" className="btn-outline">
                See Results
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Product Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="w-full max-w-[360px] mx-auto">
              <CosmeticJar />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
