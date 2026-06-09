"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Camera, Sparkles, TrendingUp, ShoppingBag } from "lucide-react";

export default function ConsultationPage() {
  return (
    <main style={{ backgroundColor: "#FFFDFB" }}>
      <AnnouncementBar />
      <Navbar />

      <section
        className="min-h-screen flex items-center py-28"
        style={{ background: "linear-gradient(135deg,#FAF7F2 0%,#FAE8E8 60%,#F6EFE8 100%)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: "#E88C9A" }}
            >
              Personalized Beauty
            </p>
            <h1
              className="font-playfair font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,5vw,3.2rem)", color: "#3A2D2D" }}
            >
              Book a Consultation
            </h1>
            <div
              className="w-12 h-0.5 mx-auto mb-6"
              style={{ background: "linear-gradient(90deg,#C9A15D,#E8C766)" }}
            />
            <p
              className="text-base leading-relaxed max-w-xl mx-auto mb-10"
              style={{ color: "rgba(58,45,45,0.65)" }}
            >
              Get personalized skincare guidance from our AI Beauty Consultant or
              reach out to our team directly for product recommendations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/ai-consultant" className="btn-gold">
                Try AI Consultant
              </Link>
              <Link href="/#contact" className="btn-outline">
                Contact Our Team
              </Link>
            </div>

            {/* Features */}
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
              {[
                { icon: <Camera size={20} />, label: "Skin Analysis" },
                { icon: <Sparkles size={20} />, label: "Personalized Routine" },
                { icon: <ShoppingBag size={20} />, label: "Product Match" },
                { icon: <TrendingUp size={20} />, label: "Progress Tracking" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-3 py-5 px-4 rounded-2xl text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.80)",
                    border: "1px solid rgba(201,161,93,0.15)",
                    color: "#3A2D2D",
                  }}
                >
                  <span style={{ color: "#C9A15D" }}>{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
