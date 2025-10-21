"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// 💧 Official Refresh-IV.Taci Add-Ons
const addOns = [
  {
    name: "B Bundle (B1/B6/B12)",
    price: "$50",
    desc: "A powerful trio of B vitamins designed to support energy, brain function, and nervous system health. Improves metabolism and reduces stress and fatigue.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/13",
  },
  {
    name: "B12 Shot",
    price: "$40",
    desc: "Boost your energy, mood, and metabolism with a quick B12 injection. Supports red blood cell production and focus.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/14",
  },
  {
    name: "Biotin Injection",
    price: "$30",
    desc: "Support healthy hair, skin, and nails with a quick Biotin boost. Helps improve energy metabolism and supports nervous system function.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/15",
  },
  {
    name: "Toradol Injection / IV Push",
    price: "$40",
    desc: "Fast-acting anti-inflammatory that helps relieve headaches, body aches, and pain. Ideal for migraines, soreness, or post-event recovery.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/16",
  },
  {
    name: "Zofran Injection / IV Push",
    price: "$40",
    desc: "A quick solution for nausea and upset stomach. Relieves symptoms from motion sickness, hangovers, or stomach flu.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/17",
  },
  {
    name: "Vitamin D Injection",
    price: "$40",
    desc: "Support bone strength, immune function, and mood with a concentrated dose of Vitamin D. Perfect during low-sunlight seasons.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/18",
  },
  {
    name: "NAD+ 50mg Injection",
    price: "$70",
    desc: "A quick NAD⁺ booster to support energy, mood, and mental sharpness. Great between infusions or for ongoing wellness support.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/19",
  },
  {
    name: "NAD+ 100mg Injection",
    price: "$90",
    desc: "A slightly stronger NAD⁺ dose that enhances stamina, supports cellular repair, and promotes clarity and focus.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/20",
  },
  {
    name: "NAD+ 200mg Injection",
    price: "$130",
    desc: "A powerful NAD⁺ dose to restore cellular energy, sharpen focus, and combat fatigue — ideal for fast, effective vitality support.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/21",
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
            Shot Bar – Injections
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
  link,
}: {
  name: string;
  desc: string;
  price: string;
  index: number;
  link?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(springY, [-50, 50], [15, -15]);
  const rotateY = useTransform(springX, [-50, 50], [-15, 15]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
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
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
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
                 transition-all duration-300 ease-out transform-gpu will-change-transform block"
    >
      <h3 className="text-xl font-semibold text-white font-[var(--font-inter)]">{name}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 font-bold text-gold price-shimmer">{price}</div>
    </motion.a>
  );
}
