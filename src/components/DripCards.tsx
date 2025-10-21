"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// 🩺 Refreshed & Accurate Offerings
const drips = [
  {
    name: "Refresh IV (Normal Saline)",
    price: "$155",
    desc: "A simple yet powerful hydration drip with Normal Saline to restore balance, rehydrate your body, and refresh your system. Perfect for anyone feeling depleted from travel, workouts, or everyday fatigue.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/1"
  },
  {
    name: "Refresh Plus IV (Lactated Ringer)",
    price: "$165",
    desc: "An upgraded hydration drip with Lactated Ringer’s for enhanced electrolyte replacement. Ideal for faster recovery after illness, dehydration, or intense exercise.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/2"
  },
  {
    name: "Energy Boost IV",
    price: "$175",
    desc: "Packed with B-Complex vitamins, this drip restores energy levels, improves focus, and supports a healthy metabolism. Great for busy professionals or anyone feeling run down.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/3"
  },
  {
    name: "Beauty & Glow IV",
    price: "$275",
    desc: "A skin-loving infusion with Vitamin C, Glutathione, Zinc, and Biotin that brightens skin, promotes collagen production, and reduces oxidative stress for that healthy glow.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/4"
  },
  {
    name: "Hormone Balance IV",
    price: "$200",
    desc: "Formulated with Magnesium and B-Complex vitamins to restore essential nutrients, support hormonal health, and uplift mood — encouraging a sense of harmony from within.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/5"
  },
  {
    name: "Hormone Balance IV (Women's Health)",
    price: "$250",
    desc: "Specially designed for women with Magnesium, Vitamin B-Complex, and Vitamin C to help regulate hormones, reduce fatigue, and promote emotional balance and energy.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/6"
  },
  {
    name: "Sexual Health Drip",
    price: "$275",
    desc: "Formulated to boost stamina, improve circulation, and enhance vitality with Vitamin B12 and amino acids such as Arginine — supporting hormonal balance and confidence.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/7"
  },
  {
    name: "Hangover Recovery",
    price: "$250",
    desc: "Rehydrate and revive fast with Vitamin C, B-Complex, and Magnesium. Includes Zofran for anti-nausea support — perfect for post-event recovery.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/8"
  },
  {
    name: "Immunity Boost IV",
    price: "$250",
    desc: "A powerful infusion of Vitamin C, Zinc, and B-Complex to strengthen your immune defenses, reduce recovery time, and keep you resilient through stress or illness.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/9"
  },
  {
    name: "Myer’s Cocktail",
    price: "$250",
    desc: "The classic wellness drip — a restorative blend of Magnesium, Calcium, B-Vitamins, and Vitamin C designed to reduce fatigue, support immunity, and boost energy.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/10"
  },
  {
    name: "NAD+ Infusion 250mg",
    price: "$450",
    desc: "A restorative NAD⁺ infusion that enhances cellular energy, focus, and recovery. Ideal for first-time clients or those seeking gentle rejuvenation.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/11"
  },
  {
    name: "NAD+ Infusion 500mg",
    price: "$600",
    desc: "High-dose NAD⁺ infusion delivering maximum cellular repair, improved cognitive clarity, and deep rejuvenation for long-lasting vitality.",
    link: "https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/12"
  },
];

export default function DripCards() {
  return (
    <section id="drips" className="section bg-charcoal">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <h2 className="section-title font-playfair text-4xl md:text-5xl text-shimmer-gold">
            IV Drips
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
          {drips.map((d, i) => (
            <InteractiveCard key={d.name} index={i} {...d} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ✨ Reusable Interactive Card with 3D Tilt + Float */
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

