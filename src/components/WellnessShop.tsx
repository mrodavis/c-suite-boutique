"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { wellnessProducts, Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

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
          <Link href="/shop" className="btn-gold text-ink font-[var(--font-inter)]">
            View All Products
          </Link>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {wellnessProducts.map((p, i) => (
            <ProductCard key={p.id} index={i} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

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

  const resetTilt = () => { x.set(0); y.set(0); };

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 cursor-pointer
                 hover:border-gold/30 hover:shadow-[0_0_45px_rgba(255,215,0,0.15)]
                 transition-all duration-300 ease-out transform-gpu will-change-transform
                 flex flex-col"
    >
      {product.image && (
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
      )}
      <h3 className={`text-xl font-semibold font-[var(--font-inter)] mb-2 ${product.color}`}>
        {product.name}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed flex-1">{product.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold price-shimmer">{product.priceLabel}</span>
        <button
          onClick={handleAdd}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
            added
              ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-400"
              : "btn-gold text-ink"
          }`}
        >
          <ShoppingCart size={13} />
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </motion.div>
  );
}
