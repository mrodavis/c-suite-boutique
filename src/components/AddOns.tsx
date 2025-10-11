"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// 💧 Official Refresh-IV.Taci Add-Ons
const addOns = [
  {
    name: "B Bundle (B1/B6/B12)",
    price: "$50",
    desc: "Essential B vitamins to boost energy, mood, and metabolism.",
  },
  {
    name: "B12 Shot",
    price: "$40",
    desc: "Pure B12 for lasting energy and improved focus. Discount: 3× weekly for $75.",
  },
  {
    name: "Toradol (Ketorolac)",
    price: "$40",
    desc: "Fast-acting anti-inflammatory pain relief for headaches and body aches.",
  },
  {
    name: "Zofran (Ondansetron)",
    price: "$40",
    desc: "Powerful anti-nausea support for hangovers, migraines, or recovery.",
  },
  {
    name: "Vitamin D",
    price: "$40",
    desc: "Supports immune health, mood balance, and bone strength. 8-week bundle: $300.",
  },
];

export default function AddOns() {
  return (
    <section id="add-ons" className="section bg-charcoal">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <h2 className="section-title font-playfair text-4xl md:text-5xl text-white">
            Add-Ons
          </h2>
          <a href="/book" className="btn-gold text-ink font-[var(--font-inter)]">
            Book a Session
          </a>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {addOns.map((a, i) => (
            <InteractiveCard key={a.name} index={i} {...a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ✨ Interactive Add-On Card */
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
        y: [0, -8, 0],
        transition: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.3,
        },
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-ink/80 backdrop-blur-sm p-6 cursor-pointer
                 hover:border-gold/30 hover:shadow-[0_0_45px_rgba(255,215,0,0.15)] 
                 transition-all duration-300 ease-out transform-gpu will-change-transform"
    >
      <h3 className="text-xl font-semibold text-white font-[var(--font-inter)]">{name}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 font-bold text-gold price-shimmer">{price}</div>
    </motion.div>
  );
}
