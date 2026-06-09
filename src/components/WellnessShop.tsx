"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShoppingCart, Sparkles } from "lucide-react";
import { allProducts, Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

// Show only the 4 most important products on the homepage preview
const previewProducts = allProducts.slice(0, 4);

export default function WellnessShop() {
  return (
    <section
      id="shop-preview"
      className="section"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between gap-6 flex-wrap mb-12"
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#E88C9A" }}
            >
              Curated for You
            </p>
            <h2 className="section-title">Beauty &amp; Wellness</h2>
          </div>
          <Link href="/shop" className="btn-gold text-sm px-6 py-2.5">
            View All Products
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewProducts.map((p, i) => (
            <ProductCard key={p.id} index={i} product={p} />
          ))}
        </div>
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
  const rotateX = useTransform(springY, [-50, 50], [8, -8]);
  const rotateY = useTransform(springX, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function resetTilt() { x.set(0); y.set(0); }

  function handleAdd() {
    if (product.comingSoon) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        background: "#FFFDFB",
        border: "1px solid rgba(58,45,45,0.08)",
        boxShadow: "0 2px 16px rgba(58,45,45,0.06)",
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden flex flex-col transform-gpu will-change-transform cursor-pointer"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 36px rgba(201,161,93,0.18)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,161,93,0.30)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(58,45,45,0.06)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(58,45,45,0.08)";
      }}
    >
      {/* Product image or placeholder */}
      <div className="relative w-full aspect-square bg-cream-100 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#FAE8E8 0%,#FAF7F2 100%)" }}
          >
            <Sparkles size={28} style={{ color: "rgba(201,161,93,0.50)" }} />
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              background: product.badge === "Signature" ? "#C9A15D" : "rgba(58,45,45,0.70)",
              color: "#FFFDFB",
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-inter font-semibold text-sm leading-snug mb-1.5"
          style={{ color: "#3A2D2D" }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs leading-relaxed flex-1 mb-4"
          style={{ color: "rgba(58,45,45,0.60)" }}
        >
          {product.desc}
        </p>

        <div className="flex items-center justify-between">
          <span className="price-shimmer font-bold text-base">{product.priceLabel}</span>
          <button
            onClick={handleAdd}
            disabled={product.comingSoon}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              product.comingSoon
                ? "opacity-50 cursor-not-allowed"
                : added
                ? "bg-emerald-50 border border-emerald-300 text-emerald-600"
                : "btn-primary"
            }`}
            style={!product.comingSoon && !added ? {} : {}}
          >
            {product.comingSoon ? (
              "Soon"
            ) : (
              <>
                <ShoppingCart size={12} />
                {added ? "Added!" : "Add"}
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
