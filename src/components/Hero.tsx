"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);

  // Mobile viewport height fix
    useEffect(() => {
    const setVh = () => {
        if (typeof window !== "undefined") {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
        window.removeEventListener("resize", setVh);
        window.removeEventListener("orientationchange", setVh);
    };
    }, []);

  // Scroll parallax effect for hero text
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
        <section
        id="home"
        ref={ref}
        suppressHydrationWarning
        className="relative w-full overflow-hidden bg-black h-[45vh] sm:h-screen"
        style={{
            height: "calc(var(--vh, 1vh) * 100)",
            minHeight: "100dvh",
            maxHeight: "100dvh",
            backgroundColor: "#000",
        }}
        >
        <div className="absolute inset-0 bg-black z-0" />
      {/* Background video with fade-in */}
        <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        >
        {/* Desktop video */}
        <video
            className="hidden sm:block absolute inset-0 w-full h-full object-cover"
            src="/hero-mobile.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-fallback.png"
        />

        {/* Mobile video */}
        <video
            className="block sm:hidden absolute inset-0 w-full h-full object-cover"
            src="/hero-mobile.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-fallback.png"
        />
        </motion.div>


      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-100px,rgba(35,174,204,0.35),rgba(14,15,17,0))]" />

      {/* Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-white/70 mb-4 text-lg md:text-xl font-inter"
        >
          Your journey to wellness starts here.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-playfair leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="block text-5xl md:text-7xl text-teal-200 drop-shadow-lg font-playfair text-shimmer"
          >
            Feel Good
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="block text-4xl md:text-6xl mt-2 text-white drop-shadow-md font-playfair"
          >
            Feel Refreshed
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 flex gap-4"
        >
          <a href="/book" className="btn-gold text-ink font-inter">
            BOOK NOW
          </a>
          <a href="#drips" className="btn-outline font-inter">
            Explore Drips
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
