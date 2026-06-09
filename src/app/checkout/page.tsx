"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";

interface FormData {
  firstName: string;
  lastName:  string;
  email:     string;
  phone:     string;
  address:   string;
  city:      string;
  state:     string;
  zip:       string;
}

const EMPTY_FORM: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", city: "", state: "", zip: "",
};

export default function CheckoutPage() {
  const { items, subtotal, totalItems } = useCart();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const shipping = subtotal >= 75 ? 0 : subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  if (totalItems === 0) {
    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <main
          className="min-h-screen flex items-center justify-center px-4"
          style={{ backgroundColor: "#FFFDFB" }}
        >
          <div className="text-center space-y-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
              style={{ background: "rgba(201,161,93,0.08)" }}
            >
              <Sparkles size={30} style={{ color: "rgba(201,161,93,0.50)" }} />
            </div>
            <h1 className="font-playfair text-3xl" style={{ color: "#3A2D2D" }}>
              Your cart is empty
            </h1>
            <p style={{ color: "rgba(58,45,45,0.55)" }}>
              Add some products before checking out.
            </p>
            <Link href="/shop" className="btn-primary inline-block">
              Browse Products
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "#FFFDFB" }}>
        <div className="container py-12 px-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-gold-500"
            style={{ color: "rgba(58,45,45,0.50)" }}
          >
            <ArrowLeft size={15} />
            Back to Shop
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-3xl md:text-4xl mb-10"
            style={{ color: "#3A2D2D" }}
          >
            Checkout
          </motion.h1>

          <div className="grid lg:grid-cols-[1fr_400px] gap-10">

            {/* ── Left: Customer Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Contact */}
              <FormSection legend="Contact Information">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                  <InputField label="Last Name"  name="lastName"  value={form.lastName}  onChange={handleChange} />
                </div>
                <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
                <InputField label="Phone Number"  name="phone" type="tel"   value={form.phone} onChange={handleChange} />
              </FormSection>

              {/* Shipping */}
              <FormSection legend="Shipping Address">
                <InputField label="Street Address" name="address" value={form.address} onChange={handleChange} />
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <InputField label="City"     name="city"  value={form.city}  onChange={handleChange} />
                  </div>
                  <InputField label="State" name="state" value={form.state} onChange={handleChange} />
                  <InputField label="ZIP"   name="zip"   value={form.zip}   onChange={handleChange} />
                </div>
              </FormSection>

              {/* Payment — coming soon */}
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{
                  background: "rgba(201,161,93,0.05)",
                  border: "1px solid rgba(201,161,93,0.18)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Clock size={20} style={{ color: "#C9A15D" }} />
                  <h3 className="font-semibold" style={{ color: "#3A2D2D" }}>
                    Secure Payment — Coming Soon
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(58,45,45,0.62)" }}>
                  We&apos;re integrating Stripe for secure card payments. Online checkout
                  will be available shortly.
                </p>
                <p className="text-sm" style={{ color: "rgba(58,45,45,0.50)" }}>
                  In the meantime, please{" "}
                  <a href="/#contact" className="underline" style={{ color: "#C9A15D" }}>
                    contact us
                  </a>{" "}
                  to place your order.
                </p>
                <div id="stripe-card-container" />
              </div>

              <button
                disabled
                className="w-full rounded-2xl px-6 py-4 font-semibold cursor-not-allowed text-sm"
                style={{
                  background: "rgba(201,161,93,0.12)",
                  color: "rgba(58,45,45,0.40)",
                  border: "1px solid rgba(201,161,93,0.20)",
                }}
              >
                Place Order — Payment Setup Pending
              </button>
            </motion.div>

            {/* ── Right: Order Summary ── */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div
                className="rounded-2xl p-6 space-y-5 sticky top-24"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(58,45,45,0.08)",
                  boxShadow: "0 4px 24px rgba(58,45,45,0.07)",
                }}
              >
                <h2 className="font-semibold text-lg" style={{ color: "#3A2D2D" }}>
                  Order Summary
                </h2>

                <div className="space-y-3 divide-y divide-[rgba(58,45,45,0.06)]">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 pt-3 first:pt-0">
                      <div
                        className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#FAE8E8,#FAF7F2)" }}
                      >
                        {item.product.image ? (
                          <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Sparkles size={14} style={{ color: "rgba(201,161,93,0.45)" }} />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate font-medium" style={{ color: "#3A2D2D" }}>
                          {item.product.name}
                        </p>
                        <p className="text-xs" style={{ color: "rgba(58,45,45,0.45)" }}>
                          Qty {item.qty}
                        </p>
                      </div>
                      <span className="text-sm font-medium" style={{ color: "#3A2D2D" }}>
                        ${(item.product.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="space-y-2 pt-4 border-t text-sm"
                  style={{ borderColor: "rgba(58,45,45,0.08)" }}
                >
                  <div className="flex justify-between" style={{ color: "rgba(58,45,45,0.60)" }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between" style={{ color: "rgba(58,45,45,0.60)" }}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div
                    className="flex justify-between font-semibold text-base pt-3 border-t"
                    style={{ borderColor: "rgba(58,45,45,0.08)", color: "#3A2D2D" }}
                  >
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(58,45,45,0.40)" }}>
                  <ShieldCheck size={13} className="flex-shrink-0" style={{ color: "#C9A15D" }} />
                  Secure checkout powered by Stripe (coming soon)
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

function FormSection({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-4">
      <legend
        className="font-semibold text-base mb-4"
        style={{ color: "#3A2D2D" }}
      >
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function InputField({
  label, name, type = "text", value, onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-xs font-medium" style={{ color: "rgba(58,45,45,0.60)" }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
        style={{
          background: "#FAF7F2",
          border: "1px solid rgba(58,45,45,0.12)",
          color: "#3A2D2D",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#C9A15D")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(58,45,45,0.12)")}
      />
    </div>
  );
}
