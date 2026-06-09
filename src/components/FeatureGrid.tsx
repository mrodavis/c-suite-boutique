"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplets, ShieldCheck, Star } from "lucide-react";
import { ReactNode } from "react";

interface TrustFeature {
  icon: ReactNode;
  title: string;
  desc: string;
}

const features: TrustFeature[] = [
  {
    icon: <Sparkles size={22} strokeWidth={1.5} />,
    title: "Brightens Skin Tone",
    desc: "Visibly reduces dark spots and uneven pigmentation.",
  },
  {
    icon: <Droplets size={22} strokeWidth={1.5} />,
    title: "Deep Nourishment",
    desc: "Hydrates and strengthens skin for a healthy, radiant glow.",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Safe & Effective",
    desc: "Dermatologically formulated with premium ingredients.",
  },
  {
    icon: <Star size={22} strokeWidth={1.5} />,
    title: "Radiance You Deserve",
    desc: "Reveal even, luminous skin with confidence.",
  },
];

export default function FeatureGrid() {
  return (
    <section
      className="w-full py-12 md:py-16 border-y"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "rgba(58,45,45,0.06)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "rgba(58,45,45,0.06)" }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col items-center text-center py-9 px-6"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Icon circle */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
                style={{
                  border: "1.5px solid rgba(201,161,93,0.40)",
                  color: "#C9A15D",
                }}
              >
                {f.icon}
              </div>

              <h3
                className="font-inter font-semibold text-xs uppercase tracking-[0.16em] mb-2"
                style={{ color: "#3A2D2D" }}
              >
                {f.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(58,45,45,0.58)" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
