"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

const EMPTY_FORM: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

export default function CheckoutPage() {
  const { items, subtotal, totalItems } = useCart();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  if (totalItems === 0) {
    return (
      <>
        <Navbar />
        <CartDrawer />
        <main className="min-h-screen bg-[#0e0f11] text-white flex items-center justify-center px-4">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-playfair text-shimmer-gold">Your cart is empty</h1>
            <p className="text-white/50">Add some products before checking out.</p>
            <Link href="/shop" className="btn-gold text-ink inline-block">
              Browse Products
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen bg-gradient-to-b from-[#0e0f11] to-charcoal text-white">
        <div className="container py-32 px-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title text-shimmer-gold mb-10"
          >
            Checkout
          </motion.h1>

          <div className="grid lg:grid-cols-[1fr_420px] gap-10">
            {/* Left — Customer Info Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Contact */}
              <fieldset className="space-y-4">
                <legend className="text-white font-semibold text-lg mb-4">Contact Information</legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                  <InputField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
                </div>
                <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
                <InputField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
              </fieldset>

              {/* Shipping */}
              <fieldset className="space-y-4">
                <legend className="text-white font-semibold text-lg mb-4">Shipping Address</legend>
                <InputField label="Street Address" name="address" value={form.address} onChange={handleChange} />
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <InputField label="City" name="city" value={form.city} onChange={handleChange} />
                  </div>
                  <InputField label="State" name="state" value={form.state} onChange={handleChange} />
                  <InputField label="ZIP Code" name="zip" value={form.zip} onChange={handleChange} />
                </div>
              </fieldset>

              {/* Payment — Square stub */}
              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-yellow-400 flex-shrink-0" size={22} />
                  <h3 className="text-white font-semibold">Payment — Coming Soon</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  We&apos;re integrating Square for secure card payments. Online checkout will be available shortly.
                </p>
                <p className="text-white/50 text-sm">
                  In the meantime, please{" "}
                  <a href="/#contact" className="text-yellow-400 hover:underline">
                    contact us
                  </a>{" "}
                  to place your order by phone or in person.
                </p>
                {/* Square Web Payments SDK card element mounts here */}
                <div id="square-card-container" />
              </div>

              {/* Disabled CTA */}
              <button
                disabled
                className="w-full rounded-xl px-6 py-4 font-semibold text-ink/60 cursor-not-allowed
                           bg-gradient-to-r from-yellow-600/40 to-yellow-400/40 border border-yellow-400/20"
              >
                Place Order — Payment Setup Pending
              </button>
            </motion.div>

            {/* Right — Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5 sticky top-28">
                <h2 className="text-white font-semibold text-lg">Order Summary</h2>

                <div className="space-y-3 divide-y divide-white/10">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 pt-3 first:pt-0">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm truncate">{item.product.name}</p>
                        <p className="text-white/40 text-xs">Qty {item.qty}</p>
                      </div>
                      <span className="text-white/80 text-sm font-medium">
                        ${(item.product.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white font-semibold text-base pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/40 text-xs pt-1">
                  <ShieldCheck size={14} className="flex-shrink-0" />
                  <span>Secure checkout powered by Square (coming soon)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-white/60 text-sm">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white text-sm
                   placeholder-white/20 focus:outline-none focus:border-yellow-400/50 focus:ring-1
                   focus:ring-yellow-400/30 transition-colors"
        placeholder={label}
      />
    </div>
  );
}
