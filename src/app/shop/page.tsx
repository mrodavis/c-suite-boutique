"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Sparkles, ArrowLeft } from "lucide-react";
import { allProducts, Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

const CATEGORIES = [
  { value: "all",   label: "All Products" },
  { value: "cream", label: "Creams" },
  { value: "serum", label: "Serums" },
  { value: "kit",   label: "Beauty Kits" },
] as const;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "#FFFDFB" }}>

        {/* Page header */}
        <div
          className="py-20 px-4 text-center"
          style={{ background: "linear-gradient(180deg,#FAF7F2 0%,#FFFDFB 100%)" }}
        >
          <div className="container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-gold-500"
              style={{ color: "rgba(58,45,45,0.50)" }}
            >
              <ArrowLeft size={15} />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
                style={{ color: "#E88C9A" }}
              >
                C-Suite Beauty Boutique
              </p>
              <h1 className="section-title mb-4" style={{ display: "inline-block" }}>
                Shop All
              </h1>
              <p
                className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
                style={{ color: "rgba(58,45,45,0.62)" }}
              >
                Luxury skincare curated for the woman who leads.
              </p>
            </motion.div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={
                    activeCategory === cat.value
                      ? {
                          background: "linear-gradient(90deg,#F7E7A6,#C9A15D)",
                          color: "#3A2D2D",
                          border: "1px solid transparent",
                        }
                      : {
                          border: "1px solid rgba(58,45,45,0.18)",
                          color: "rgba(58,45,45,0.65)",
                          background: "transparent",
                        }
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="pb-24 px-4">
          <div className="container">
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {filtered.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-base" style={{ color: "rgba(58,45,45,0.50)" }}>
                  No products found in this category yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ShopProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (product.comingSoon) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <motion.div
      variants={{
        hidden:   { opacity: 0, y: 24 },
        visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(58,45,45,0.07)",
        boxShadow: "0 2px 12px rgba(58,45,45,0.05)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(201,161,93,0.16)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,161,93,0.28)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(58,45,45,0.05)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(58,45,45,0.07)";
      }}
    >
      {/* Image area */}
      <div className="relative w-full aspect-square overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg,#FAE8E8 0%,#FAF7F2 100%)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ border: "1.5px solid rgba(201,161,93,0.25)" }}
            >
              <Sparkles size={22} style={{ color: "rgba(201,161,93,0.55)" }} />
            </div>
            <p
              className="text-[9px] uppercase tracking-widest text-center px-4"
              style={{ color: "rgba(58,45,45,0.40)" }}
            >
              {product.name}
            </p>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              background: product.badge === "Signature" ? "#C9A15D" : "rgba(58,45,45,0.65)",
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
          className="font-inter font-semibold text-sm mb-1.5 leading-snug"
          style={{ color: "#3A2D2D" }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs leading-relaxed flex-1 mb-4"
          style={{ color: "rgba(58,45,45,0.58)" }}
        >
          {product.desc}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="price-shimmer font-bold text-base">{product.priceLabel}</span>
          <button
            onClick={handleAdd}
            disabled={product.comingSoon}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              product.comingSoon ? "cursor-not-allowed opacity-45" : ""
            }`}
            style={
              product.comingSoon
                ? { border: "1px solid rgba(58,45,45,0.15)", color: "rgba(58,45,45,0.40)" }
                : added
                ? { background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.30)", color: "#059669" }
                : { background: "#E88C9A", color: "white" }
            }
          >
            {product.comingSoon ? (
              "Soon"
            ) : (
              <>
                <ShoppingCart size={12} />
                {added ? "Added!" : "Add to Cart"}
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
