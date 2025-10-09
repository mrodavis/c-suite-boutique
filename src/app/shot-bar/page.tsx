"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";


interface Product {
  image: string;
  name: string;
  desc: string;
  price: string;
  index: number;
}

const products: Product[] = [
  {
    image: "/shots/b12.png",
    name: "Vitamin B12 Shot",
    desc: "Boost energy, mood, and metabolism.",
    price: "$45",
    index: 0,
  },
  {
    image: "/shots/glutathione.png",
    name: "Glutathione Glow",
    desc: "Brighten skin tone + detoxify naturally.",
    price: "$60",
    index: 1,
  },
  {
    image: "/shots/immune.png",
    name: "Immunity Booster",
    desc: "Vitamin C + Zinc + B-Complex defense.",
    price: "$55",
    index: 2,
  },
  {
    image: "/shots/slim.png",
    name: "Slim & Tone Shot",
    desc: "Lipotropic blend for fat metabolism.",
    price: "$65",
    index: 3,
  },
];

function ProductCard({ image, name, desc, price, index }: Product) {
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
      className="group rounded-2xl border border-white/10 bg-ink/80 p-6 backdrop-blur-sm cursor-not-allowed
                 hover:border-teal-400/20 hover:shadow-[0_0_40px_rgba(20,200,180,0.25)]
                 transition-all duration-500 ease-out transform-gpu will-change-transform relative"
    >
      <div className="w-full aspect-[3/4] relative overflow-hidden rounded-xl bg-black/40">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white font-[var(--font-inter)]">{name}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
      <div className="mt-3 font-bold bg-gradient-to-r from-[#f7e7a6] via-[#e8c766] to-[#d7a21a] bg-clip-text text-transparent">
        {price}
      </div>

      <div className="mt-4">
        <button
          disabled
          className="btn-gold text-ink w-full opacity-60 cursor-not-allowed"
        >
          Coming Soon
        </button>
      </div>
    </motion.div>
  );
}

export default function ShotBarPage() {
  return (
    <section className="relative bg-gradient-to-b from-[#0e0f11] via-charcoal to-[#0e0f11] text-white py-24 md:py-32">
      < Navbar />
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair leading-tight">
            The Shot Bar
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
          <p className="text-lg text-white/80 mt-6 leading-relaxed max-w-2xl mx-auto">
            A collection of powerful vitamin injections to boost your body and mind —  
            available soon at Refresh-IV.Taci.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
