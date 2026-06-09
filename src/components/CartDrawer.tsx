"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, subtotal, removeItem, updateQty, closeDrawer } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40"
            style={{ background: "rgba(58,45,45,0.35)", backdropFilter: "blur(4px)" }}
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md flex flex-col"
            style={{
              background: "#FFFDFB",
              borderLeft: "1px solid rgba(58,45,45,0.08)",
              boxShadow: "-8px 0 48px rgba(58,45,45,0.12)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "rgba(58,45,45,0.08)" }}
            >
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={20} style={{ color: "#C9A15D" }} />
                <span className="font-playfair font-semibold text-lg" style={{ color: "#3A2D2D" }}>
                  Your Cart
                </span>
                {items.length > 0 && (
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(201,161,93,0.12)", color: "#C9A15D" }}
                  >
                    {items.length}
                  </span>
                )}
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-full transition-colors"
                style={{ color: "rgba(58,45,45,0.50)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(58,45,45,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-16">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(201,161,93,0.08)" }}
                  >
                    <Sparkles size={24} style={{ color: "rgba(201,161,93,0.50)" }} />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: "#3A2D2D" }}>Your cart is empty</p>
                    <p className="text-sm" style={{ color: "rgba(58,45,45,0.50)" }}>
                      Discover our luxury skincare collection.
                    </p>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="btn-primary text-sm px-6 py-2.5"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 rounded-2xl p-4"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(58,45,45,0.07)",
                    }}
                  >
                    {/* Image */}
                    <div
                      className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#FAE8E8,#FAF7F2)" }}
                    >
                      {item.product.image ? (
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Sparkles size={16} style={{ color: "rgba(201,161,93,0.45)" }} />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium leading-snug mb-1 truncate"
                        style={{ color: "#3A2D2D" }}
                      >
                        {item.product.name}
                      </p>
                      <p className="price-shimmer text-sm font-bold">
                        {item.product.priceLabel}
                      </p>

                      {/* Qty controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.product.id, item.qty - 1)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                          style={{ border: "1px solid rgba(58,45,45,0.15)", color: "rgba(58,45,45,0.55)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C9A15D")}
                          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(58,45,45,0.15)")}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-sm w-5 text-center font-medium" style={{ color: "#3A2D2D" }}>
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.product.id, item.qty + 1)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                          style={{ border: "1px solid rgba(58,45,45,0.15)", color: "rgba(58,45,45,0.55)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C9A15D")}
                          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(58,45,45,0.15)")}
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="self-start p-1 rounded transition-colors"
                      style={{ color: "rgba(58,45,45,0.30)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#3A2D2D")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(58,45,45,0.30)")}
                      aria-label="Remove item"
                    >
                      <X size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="px-6 py-5 border-t space-y-4"
                style={{ borderColor: "rgba(58,45,45,0.08)" }}
              >
                {/* Free shipping nudge */}
                {subtotal < 75 && (
                  <div
                    className="text-xs text-center py-2 px-4 rounded-full"
                    style={{ background: "rgba(201,161,93,0.08)", color: "#C9A15D" }}
                  >
                    Add ${(75 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "rgba(58,45,45,0.60)" }}>Subtotal</span>
                  <span className="font-semibold" style={{ color: "#3A2D2D" }}>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs" style={{ color: "rgba(58,45,45,0.38)" }}>
                  Shipping calculated at checkout.
                </p>
                <Link
                  href="/checkout"
                  onClick={closeDrawer}
                  className="btn-primary w-full text-center block"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={closeDrawer}
                  className="w-full text-xs text-center py-1 transition-colors"
                  style={{ color: "rgba(58,45,45,0.45)" }}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
