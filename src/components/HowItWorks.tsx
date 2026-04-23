"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ClipboardCheck, Syringe, Sparkles } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  title: string;
  desc: string;
  image: string;
}

interface InteractiveStepProps extends Step {
  index: number;
}

// Step data
const steps: Step[] = [
  {
    icon: <ClipboardCheck className="h-7 w-7 text-teal-300" />,
    title: "Book Your Session",
    desc: "Schedule online or call our concierge to reserve your IV drip.",
    image: "/images/how-it-works/book-session.png",
  },
  {
    icon: <Syringe className="h-7 w-7 text-teal-300" />,
    title: "We Come to You",
    desc: "Our nurses travel to your location — home, office, or event — and prep your IV on-site.",
    image: "/images/how-it-works/we-come-to-you.png",
  },
  {
    icon: <Sparkles className="h-7 w-7 text-teal-300" />,
    title: "Replenish & Renew",
    desc: "Enjoy the boost — hydration, vitamins, and balance delivered directly to your body.",
    image: "/images/how-it-works/replenish-renew.png",
  },
];

// ✨ 3D Interactive Card Component
function InteractiveStep({ icon, title, desc, image, index }: InteractiveStepProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(springY, [-50, 50], [15, -15]);
  const rotateY = useTransform(springX, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        y: [0, -6, 0],
        transition: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: index * 0.3 },
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-ink/80 p-8 backdrop-blur-sm cursor-pointer
                 hover:border-teal-400/20 hover:shadow-[0_0_40px_rgba(20,200,180,0.25)]
                 transition-all duration-500 ease-out transform-gpu will-change-transform"
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-teal-400/10 hover:bg-teal-400/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/70 mt-3 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// ✨ Section Wrapper
export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative bg-gradient-to-b from-charcoal via-[#0e0f11] to-charcoal text-white py-24 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair leading-tight">
            How It Works
          </h2>

          {/* ✨ Gold Accent Line */}
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>

          <p className="text-lg text-white/80 mt-6 leading-relaxed max-w-2xl mx-auto">
            Experience IV wellness in three effortless steps — efficient, luxurious, and tailored for you.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <InteractiveStep key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
