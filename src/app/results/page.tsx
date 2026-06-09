"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

/* ─── Mock Data (CMS-ready structure) ───────────────── */
const testimonials = [
  {
    id: "1",
    name: "Amara K.",
    location: "Atlanta, GA",
    rating: 5,
    weeks: 6,
    quote:
      "My dark spots have visibly faded in just 6 weeks. I've tried so many products and nothing worked like this cream. My skin has never looked this even and radiant.",
    improvement: "Dark spot reduction",
    avatar: "AK",
  },
  {
    id: "2",
    name: "Destiny M.",
    location: "Houston, TX",
    rating: 5,
    weeks: 8,
    quote:
      "I was skeptical at first, but the results speak for themselves. My skin tone is so much more even and I get compliments constantly. This is my holy grail product.",
    improvement: "Even skin tone",
    avatar: "DM",
  },
  {
    id: "3",
    name: "Zoe B.",
    location: "New York, NY",
    rating: 5,
    weeks: 4,
    quote:
      "Within just 4 weeks I noticed a huge difference in brightness. The cream is so luxurious and absorbs quickly. My confidence has genuinely improved.",
    improvement: "Brightening & glow",
    avatar: "ZB",
  },
  {
    id: "4",
    name: "Camille W.",
    location: "Chicago, IL",
    rating: 5,
    weeks: 10,
    quote:
      "10 weeks in and my hyperpigmentation from old acne scars is almost completely gone. I genuinely did not expect results this dramatic. C-Suite changed my skincare game.",
    improvement: "Hyperpigmentation",
    avatar: "CW",
  },
  {
    id: "5",
    name: "Naomi T.",
    location: "Los Angeles, CA",
    rating: 5,
    weeks: 5,
    quote:
      "The texture improvement alone is worth it. My skin feels so soft and hydrated — and the dark spots around my jawline are fading beautifully.",
    improvement: "Texture & hydration",
    avatar: "NT",
  },
  {
    id: "6",
    name: "Jasmine F.",
    location: "Miami, FL",
    rating: 5,
    weeks: 7,
    quote:
      "I've been searching for a product that actually works for my melanin-rich skin. C-Suite Skin Lightening Cream is it. Safe, effective, and luxurious.",
    improvement: "Melanin-rich skin",
    avatar: "JF",
  },
];

const stats = [
  { value: "94%",   label: "Reported visible brightening" },
  { value: "87%",   label: "Saw dark spot reduction" },
  { value: "4–6",   label: "Weeks to first results" },
  { value: "100%",  label: "Natural & safe ingredients" },
];

/* ─── Before/After Placeholder Card ─────────────────── */
function BeforeAfterCard({ week, index }: { week: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(58,45,45,0.08)",
        boxShadow: "0 4px 20px rgba(58,45,45,0.06)",
      }}
    >
      {/* Before/After split */}
      <div className="grid grid-cols-2 h-40">
        <div
          className="flex items-center justify-center border-r"
          style={{
            background: "linear-gradient(135deg,#EDE3D8 0%,#DED0BE 100%)",
            borderColor: "rgba(58,45,45,0.06)",
          }}
        >
          <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(58,45,45,0.40)" }}>Before</p>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#FAE8E8 0%,#FAF7F2 100%)" }}
        >
          <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(201,161,93,0.70)" }}>After</p>
        </div>
      </div>
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(58,45,45,0.06)" }}
      >
        <p className="text-xs font-medium" style={{ color: "#3A2D2D" }}>
          Week {week} results
        </p>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} fill="#C9A15D" style={{ color: "#C9A15D" }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Testimonial Card ───────────────────────────────── */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(58,45,45,0.08)",
        boxShadow: "0 4px 20px rgba(58,45,45,0.05)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} fill="#C9A15D" style={{ color: "#C9A15D" }} />
        ))}
      </div>

      {/* Badge */}
      <span
        className="self-start text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full font-semibold"
        style={{ background: "rgba(232,140,154,0.10)", color: "#E88C9A" }}
      >
        {testimonial.improvement}
      </span>

      {/* Quote */}
      <div className="relative">
        <Quote size={20} className="absolute -top-1 -left-1 opacity-10" style={{ color: "#C9A15D" }} />
        <p className="text-sm leading-relaxed pl-4" style={{ color: "rgba(58,45,45,0.70)" }}>
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid rgba(58,45,45,0.07)" }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#FAE8E8,#E88C9A)", color: "white" }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "#3A2D2D" }}>{testimonial.name}</p>
          <p className="text-xs" style={{ color: "rgba(58,45,45,0.45)" }}>
            {testimonial.location} · {testimonial.weeks} weeks
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function ResultsPage() {
  return (
    <main style={{ backgroundColor: "#FFFDFB" }}>
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section
        className="py-24 text-center px-6"
        style={{ background: "linear-gradient(180deg,#FAF7F2 0%,#FFFDFB 100%)" }}
      >
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#E88C9A" }}
            >
              Real Results
            </p>
            <h1
              className="font-playfair font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem,5vw,3.2rem)", color: "#3A2D2D" }}
            >
              See the Transformation
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "linear-gradient(90deg,#C9A15D,#E8C766)" }} />
            <p className="text-base leading-relaxed" style={{ color: "rgba(58,45,45,0.65)" }}>
              Thousands of women have transformed their skin with C-Suite Skin
              Lightening Cream. These are their stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-12 border-y"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(58,45,45,0.06)" }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(58,45,45,0.06)" }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center py-8 px-4"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <p
                  className="font-playfair font-bold text-3xl md:text-4xl mb-1"
                  style={{ color: "#C9A15D" }}
                >
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(58,45,45,0.55)" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="section px-6">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#E88C9A" }}
            >
              Before &amp; After
            </p>
            <h2 className="section-title">Visible Transformation</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[4, 6, 8, 8, 10, 12].map((week, i) => (
              <BeforeAfterCard key={i} week={week} index={i} />
            ))}
          </div>
          <p
            className="mt-6 text-xs text-center"
            style={{ color: "rgba(58,45,45,0.40)" }}
          >
            * Customer photos. Individual results may vary.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section px-6"
        style={{ backgroundColor: "#FAF7F2" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#E88C9A" }}
            >
              Customer Stories
            </p>
            <h2 className="section-title">What They&apos;re Saying</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
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
            style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#3A2D2D" }}
          >
            Start Your Transformation
          </h2>
          <p className="mb-8" style={{ color: "rgba(58,45,45,0.62)" }}>
            Join thousands of women who have revealed their most radiant skin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shop" className="btn-primary">Shop The Cream</Link>
            <Link href="/ai-consultant" className="btn-outline">Try AI Consultant</Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
