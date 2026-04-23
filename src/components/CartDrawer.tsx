"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, subtotal, removeItem, updateQty, closeDrawer } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md
                       bg-[#0e0f11] border-l border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-yellow-400" size={22} />
                <span className="text-white font-semibold text-lg font-playfair">Your Cart</span>
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close cart"
              >
                <X className="text-white/70" size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag className="text-white/20" size={48} />
                  <p className="text-white/50 text-sm">Your cart is empty.</p>
                  <button
                    onClick={closeDrawer}
                    className="btn-gold text-sm text-ink px-5 py-2"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium leading-snug truncate">
                        {item.product.name}
                      </p>
                      <p className="price-shimmer text-sm font-bold mt-1">
                        {item.product.priceLabel}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.product.id, item.qty - 1)}
                          className="w-7 h-7 rounded-lg border border-white/20 flex items-center justify-center
                                     hover:border-yellow-400/50 hover:text-yellow-400 transition-colors text-white/70"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-white text-sm w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.product.id, item.qty + 1)}
                          className="w-7 h-7 rounded-lg border border-white/20 flex items-center justify-center
                                     hover:border-yellow-400/50 hover:text-yellow-400 transition-colors text-white/70"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="self-start p-1 rounded hover:bg-white/10 transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="text-white/40 hover:text-white/80" size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Subtotal</span>
                  <span className="text-white font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-white/40 text-xs">Shipping calculated at checkout.</p>
                <Link
                  href="/checkout"
                  onClick={closeDrawer}
                  className="btn-gold text-ink text-sm w-full text-center block"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
