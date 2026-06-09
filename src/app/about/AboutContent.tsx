"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Crown, FlaskConical, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: <Crown size={22} strokeWidth={1.5} style={{ color: "#C9A15D" }} />,
    title: "Premium Quality",
    desc: "We source only the finest ingredients, ensuring every product delivers exceptional, visible results.",
  },
  {
    icon: <FlaskConical size={22} strokeWidth={1.5} style={{ color: "#C9A15D" }} />,
    title: "Science-Backed",
    desc: "Our formulas are developed with rigorous attention to efficacy, safety, and skin compatibility.",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} style={{ color: "#C9A15D" }} />,
    title: "Made for You",
    desc: "Every product celebrates your unique beauty and empowers confidence from the inside out.",
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.5} style={{ color: "#C9A15D" }} />,
    title: "Luxury Standard",
    desc: "We hold ourselves to a luxury standard — because you deserve nothing less.",
  },
];

export default function AboutContent() {
  return (
    <main style={{ backgroundColor: "#FFFDFB" }}>
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section
        className="relative py-28 md:py-36 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#FAF7F2 0%,#FAE8E8 50%,#F6EFE8 100%)",
        }}
      >
        <div className="container relative z-10 max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: "#E88C9A" }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem,6vw,3.8rem)", color: "#3A2D2D" }}
          >
            Beauty Is Power.
            <span
              className="block font-script font-normal mt-1"
              style={{ color: "#C9A15D", fontSize: "clamp(2.4rem,6.5vw,4rem)" }}
            >
              Own It.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed mx-auto"
            style={{ color: "rgba(58,45,45,0.68)", maxWidth: "560px" }}
          >
            C-Suite Beauty Boutique was built on a belief: that luxury skincare
            should be accessible, empowering, and transformative for every woman.
          </motion.p>
        </div>
      </section>

      {/* Mission + Philosophy */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Our Mission",
                text: "To help every woman reveal her most radiant, confident self through premium skincare formulated with purpose, precision, and luxury.",
              },
              {
                title: "Our Philosophy",
                text: "We believe beautiful skin is not a privilege — it's a right. Our philosophy is simple: when your skin glows, you lead with confidence. Everything we create is in service of that belief.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="rounded-2xl p-8"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(58,45,45,0.08)",
                  boxShadow: "0 4px 24px rgba(58,45,45,0.06)",
                }}
              >
                <h2
                  className="font-playfair text-2xl mb-3"
                  style={{ color: "#C9A15D" }}
                >
                  {card.title}
                </h2>
                <p className="leading-relaxed" style={{ color: "rgba(58,45,45,0.70)", fontSize: "0.95rem" }}>
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg,#FAF7F2 0%,#FFFFFF 100%)" }}
      >
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div
                className="w-64 h-72 rounded-3xl flex flex-col items-center justify-end pb-10 overflow-hidden"
                style={{
                  background: "linear-gradient(160deg,#FAE8E8 0%,#F6EFE8 100%)",
                  border: "1px solid rgba(201,161,93,0.15)",
                  boxShadow: "0 16px 48px rgba(58,45,45,0.10)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full mb-4 flex items-center justify-center"
                  style={{ background: "rgba(201,161,93,0.12)", border: "1.5px solid rgba(201,161,93,0.25)" }}
                >
                  <span style={{ fontSize: "1.8rem" }}>✦</span>
                </div>
                <p className="font-script text-2xl" style={{ color: "#C9A15D" }}>Cynthia</p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(58,45,45,0.40)" }}>
                  Founder &amp; CEO
                </p>
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
                style={{ color: "#E88C9A" }}
              >
                Meet the Founder
              </p>
              <h3
                className="font-playfair text-2xl md:text-3xl mb-5"
                style={{ color: "#3A2D2D" }}
              >
                Cynthia Davis, Founder &amp; CEO
              </h3>
              <div
                className="w-10 h-px mb-5"
                style={{ background: "linear-gradient(90deg,#C9A15D,#E8C766)" }}
              />
              <p
                className="leading-relaxed mb-4"
                style={{ color: "rgba(58,45,45,0.68)", fontSize: "0.95rem" }}
              >
                At C-Suite Beauty Boutique, we believe skincare should empower
                confidence and self-care. Cynthia Davis founded C-Suite with a
                vision: to create premium beauty products that celebrate and
                uplift every woman.
              </p>
              <p
                className="leading-relaxed mb-8"
                style={{ color: "rgba(58,45,45,0.60)", fontSize: "0.95rem" }}
              >
                Every formula is crafted with intention — to brighten, nourish,
                and transform. Because when your skin glows, you lead with
                confidence.
              </p>
              <p className="font-script text-3xl" style={{ color: "#C9A15D" }}>C-Suite</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title" style={{ display: "inline-block" }}>
              Our Values
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl"
                style={{
                  background: "#FAF7F2",
                  border: "1px solid rgba(58,45,45,0.07)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: "1px solid rgba(201,161,93,0.25)",
                    background: "rgba(201,161,93,0.07)",
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1.5" style={{ color: "#3A2D2D" }}>{v.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(58,45,45,0.60)" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center px-6"
        style={{ background: "linear-gradient(135deg,#FAE8E8 0%,#FAF7F2 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-playfair font-bold mb-3"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#3A2D2D" }}
          >
            Ready to Transform Your Skin?
          </h2>
          <p className="mb-8 text-base" style={{ color: "rgba(58,45,45,0.62)" }}>
            Start your C-Suite beauty journey today.
          </p>
          <Link href="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
