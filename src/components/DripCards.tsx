"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const drips = [
  { name: "Hydration Boost", price: "$149", desc: "Electrolytes + fluids for immediate rehydration." },
  { name: "Immunity Shield", price: "$179", desc: "Vitamin C, Zinc, B-complex for defense." },
  { name: "Beauty Glow", price: "$189", desc: "Biotin + antioxidants for skin, hair, nails." },
  { name: "Performance", price: "$199", desc: "Amino acids + B12 for energy & recovery." },
];

export default function DripCards() {
  return (
    <section id="drips" className="section bg-charcoal">
      <div className="container">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <h2 className="section-title font-playfair text-4xl md:text-5xl text-white">
            IV Drips
          </h2>
          <a href="#contact" className="btn-gold text-ink font-[var(--font-inter)]">
            Book a Session
          </a>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {drips.map((d, i) => (
            <InteractiveCard key={d.name} index={i} {...d} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ✨ Reusable Interactive Card with 3D Tilt + Idle Float */
function InteractiveCard({
  name,
  desc,
  price,
  index,
}: {
  name: string;
  desc: string;
  price: string;
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(springY, [-50, 50], [15, -15]);
  const rotateY = useTransform(springX, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        y: [0, -8, 0], // gentle vertical float
        transition: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.3, // slight stagger for realism
        },
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-ink/80 backdrop-blur-sm p-6 cursor-pointer
                 hover:border-teal-400/20 hover:shadow-[0_0_45px_rgba(0,255,255,0.12)] 
                 transition-all duration-300 ease-out transform-gpu will-change-transform"
    >
      <h3 className="text-xl font-semibold text-white font-[var(--font-inter)]">{name}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 font-bold price-shimmer">{price}</div>
    </motion.div>
  );
}
