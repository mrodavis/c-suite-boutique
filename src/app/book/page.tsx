"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function BookPage() {
  return (
    <section className="relative bg-gradient-to-b from-[#0e0f11] via-charcoal to-[#0e0f11] text-white min-h-screen py-24 md:py-32">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair leading-tight">
            Book Your Appointment
          </h1>

          {/* ✨ Gold accent underline */}
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Schedule your IV drip or vitamin shot securely through our JaneApp portal.
          </p>
        </motion.div>

        {/* Booking CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14"
        >
          <a
            href="https://refreshivtaci.janeapp.com/#/staff_member/1/treatment/1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-ink inline-block px-10 py-4 text-lg font-semibold hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-500"
          >
            Launch Booking Portal
          </a>



          <p className="text-white/60 mt-6 text-sm">
            You’ll be securely redirected to our{" "}
            <a
              href="https://jane.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:underline"
            >
              JaneApp
            </a>{" "}
            booking system.
          </p>
        </motion.div>
      </div>


      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(35,174,204,0.15)_0%,rgba(14,15,17,0)_80%)]"></div>
    </section>
  );
}
