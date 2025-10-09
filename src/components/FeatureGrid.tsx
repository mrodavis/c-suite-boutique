"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Droplets, ShieldCheck, Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface InteractiveFeatureProps extends Feature {
  index: number;
}

// Feature data
const features: Feature[] = [
  {
    icon: <Droplets className="h-7 w-7 text-teal-300" />,
    title: "Medical-Grade Hydration",
    desc: "Premium IV blends crafted for performance, recovery, immunity, and glow.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-teal-300" />,
    title: "Nurse-Led Care",
    desc: "Licensed professionals, sterile protocols, and personalized dosing.",
  },
  {
    icon: <Sparkles className="h-7 w-7 text-teal-300" />,
    title: "Luxury Experience",
    desc: "Relaxed, spa-like vibe with concierge-level comfort.",
  },
];

// 3D Interactive Card component
function InteractiveFeature({ icon, title, desc, index }: InteractiveFeatureProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(springY, [-50, 50], [15, -15]);
  const rotateY = useTransform(springX, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        y: [0, -6, 0],
        transition: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: index * 0.3 },
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-charcoal/80 p-8 backdrop-blur-sm cursor-pointer
                 hover:border-teal-400/20 hover:shadow-[0_0_40px_rgba(20,200,180,0.25)] 
                 transition-all duration-500 ease-out transform-gpu will-change-transform"
    >
      <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/70 mt-3 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function FeatureGrid() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#0e0f11] via-charcoal to-[#0e0f11] text-white py-24 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-playfair leading-tight">
            Why Choose{" "}
            <span className="text-teal-300 font-semibold font fair-play">
              Refresh-IV
            </span>
            <span className="text-shimmer-gold">.Taci</span>?
          </h2>

          {/* ✨ Gold Accent Line */}
          <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>

          <p className="text-lg text-white/80 mt-6 leading-relaxed">
            We combine science-backed formulations with a premium experience so you
            feel restored, focused, and ready to thrive.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <InteractiveFeature key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
