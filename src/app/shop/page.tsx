"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { wellnessProducts, Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";

const CATEGORIES = [
  { value: "all", label: "All Products" },
  { value: "tea", label: "Sea Moss Teas" },
  { value: "gel", label: "Sea Moss Gel" },
  { value: "supplement", label: "Supplements" },
] as const;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? wellnessProducts
      : wellnessProducts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen bg-gradient-to-b from-[#0e0f11] to-charcoal text-white">
        {/* Hero strip */}
        <section className="pt-32 pb-12 px-4">
          <div className="container">
            <Link
              href="/#wellness-shop"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="section-title text-shimmer-gold">Wellness Shop</h1>
              <p className="section-sub mt-4 text-white/60 max-w-xl">
                Handcrafted wellness products to support your health journey — from sea moss teas to daily supplement packs.
              </p>
            </motion.div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "btn-gold text-ink border-transparent"
                      : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product grid */}
        <section className="pb-24 px-4">
          <div className="container">
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {filtered.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function ShopProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden
                 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(255,215,0,0.12)]
                 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`text-lg font-semibold font-[var(--font-inter)] mb-2 ${product.color}`}>
          {product.name}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed flex-1">{product.desc}</p>

        <div className="flex items-center justify-between mt-5">
          <span className="price-shimmer text-xl font-bold">{product.priceLabel}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              added
                ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-400"
                : "btn-gold text-ink"
            }`}
          >
            <ShoppingCart size={15} />
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
