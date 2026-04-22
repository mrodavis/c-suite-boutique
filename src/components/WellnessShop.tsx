"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const products = [
  {
    name: "Sea Moss Tea – Immunity Boost",
    price: "$20",
    desc: "Supports immune health and hormone balance. With sea moss, elderberry, ginger, and cinnamon.",
    color: "text-gold",
    image: "/images/wellness/sea-moss-tea-immunity-boost.png",
  },
  {
    name: "Sea Moss Tea – Hormone Balance",
    price: "$20",
    desc: "Supports women’s health and hormonal balance. Includes red raspberry leaf, maca root, and rose petals.",
    color: "text-pink-400",
    image: "/images/wellness/sea-moss-tea-hormone-balance.png",
  },
  {
    name: "Sea Moss Tea – Sexual Vitality",
    price: "$20",
    desc: "Enhances libido, stamina, and hormonal harmony. Infused with maca root, damiana, tribulus, and cinnamon.",
    color: "text-rose-400",
    image: "/images/wellness/sea-moss-tea-sexual-vitality.png",
  },
  {
    name: "Sea Moss Tea – Detox + Anti-Inflammatory",
    price: "$20",
    desc: "Promotes liver health and reduces inflammation. Contains burdock root, turmeric, and lemon peel.",
    color: "text-emerald-400",
    image: "/images/wellness/sea-moss-tea-detox-anti-inflammatory.png",
  },
  {
    name: "Sea Moss Gel – Elderberry & Coconut",
    price: "$30",
    desc: "Irish sea moss blended with elderberry, flaxseed, and coconut for daily nourishment and vitality.",
    color: "text-gold",
    image: "/images/wellness/sea-moss-gel-elderberry-coconut.png",
  },
  {
    name: "Libido & Vitality Daily Packs",
    price: "$40",
    desc: "30-day supplement for stamina and hormone balance. Each pack contains 7 essential capsules.",
    color: "text-gold",
    image: "/images/wellness/libido-vitality-daily-packs.png",
  },
  {
    name: "Hormone & Vitality Support",
    price: "$40",
    desc: "Vitamin D, Saw Palmetto, and Inositol for balance and wellness. 30 daily packs included.",
    color: "text-gold",
    image: "/images/wellness/hormone-vitality-support.png",
  },
];

export default function WellnessShop() {
  return (
    <section
      id="wellness-shop"
      className="section bg-gradient-to-b from-charcoal to-ink text-white"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <h2 className="section-title text-shimmer-gold">
              Wellness Shop
            </h2>
          </div>
          <a href="/shop" className="btn-gold text-ink font-[var(--font-inter)]">
            View All Products
          </a>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((p, i) => (
            <ProductCard key={p.name} index={i} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ✨ Floating & Fade-Up Product Card */
function ProductCard({
  name,
  desc,
  price,
  index,
  color,
  image,
}: {
  name: string;
  desc: string;
  price: string;
  index: number;
  color: string;
  image?: string;
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 cursor-pointer
                 hover:border-gold/30 hover:shadow-[0_0_45px_rgba(255,215,0,0.15)]
                 transition-all duration-300 ease-out transform-gpu will-change-transform"
    >
      {image && (
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      )}
      <h3
        className={`text-xl font-semibold font-[var(--font-inter)] mb-2 ${color}`}
      >
        {name}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 font-bold price-shimmer">{price}</div>
    </motion.div>
  );
}
