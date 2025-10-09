"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  index?: number;
}

export default function InteractiveCard({ title, desc, icon, index = 0 }: CardProps) {
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

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        y: [0, -8, 0],
        transition: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: index * 0.3 },
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-ink/80 backdrop-blur-sm p-6 cursor-pointer
                 hover:border-teal-400/20 hover:shadow-[0_0_45px_rgba(0,255,255,0.12)]
                 transition-all duration-300 ease-out transform-gpu will-change-transform"
    >
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-xl font-semibold text-white font-[var(--font-inter)]">{title}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
