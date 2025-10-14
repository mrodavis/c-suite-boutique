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
    <main className="bg-[#0e0f11] text-white min-h-screen overflow-hidden">
      <Navbar />

{/* 🌊 Flowing Water Header */}
<section className="relative w-full overflow-hidden">
  <div className="relative w-full h-[300px] md:h-[340px] overflow-hidden flex items-center justify-center">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-[250%] object-cover object-center translate-y-[-38%] scale-[1.05]"
    >
      <source src="/splash3.mp4" type="video/mp4" />
    </video>

    {/* Even tighter fade for seamless merge */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0e0f11]/60" />
    <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-b from-transparent to-[#0e0f11]" />

    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-4xl md:text-5xl font-playfair tracking-wide text-white text-center drop-shadow-lg"
    >
      The Shot Bar
    </motion.h1>
    <div className="absolute bottom-0 left-0 w-full h-[25px] bg-gradient-to-b from-transparent via-[#f6da7a25] to-[#0e0f11]" />
  </div>
</section>

{/* 💉 Product Section */}
<section
  className="relative pt-0 pb-16 md:pb-20 bg-gradient-to-b from-[#0e0f11] via-charcoal to-[#0e0f11]"
  style={{
    marginTop: "-33rem", // 🔥 increased overlap
    zIndex: 2,
  }}
>
  <div className="container mx-auto px-6 md:px-12 text-center">
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
    >
      A collection of powerful vitamin injections to boost your body and mind —  
      available soon at Refresh-IV.Taci.
    </motion.p>

    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.name} {...p} />
      ))}
    </div>
  </div>
</section>


    </main>
  );
}
