"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#drips", label: "IV Drips" },
  { href: "/shot-bar", label: "Shot Bar" },
  { href: "/#how", label: "How It Works" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
    className={`absolute left-1/2 top-4 z-50 w-[95%] -translate-x-1/2 rounded-2xl border border-white/10 transition-all duration-500 ${
        scrolled
        ? "bg-ink/90 backdrop-blur-xl shadow-[0_2px_25px_rgba(0,0,0,0.6)]"
        : "bg-ink/60 backdrop-blur-xl shadow-[0_2px_25px_rgba(0,0,0,0.4)]"
    }`}
    >

      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-400/40 via-yellow-300/30 to-amber-500/40 blur-lg opacity-60 animate-pulse-slow"></div>
        <img
            src="/refresh-logo.svg"
            alt="Refresh-IV Taci Logo"
            className="relative h-10 w-auto z-10 drop-shadow-[0_0_4px_rgba(255,215,0,0.3)]"
        />
        </div>

          <span className="font-semibold text-lg tracking-wide text-white/90 font-playfair">
            Refresh-<span className="text-teal-400">IV</span><span className="text-shimmer-gold">.Taci</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {i.label}
            </a>
          ))}
          <a href="/book" className="btn-gold text-sm text-ink">
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu color="white" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink/95">
          <div className="container py-4 grid gap-3">
            {navLinks.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="text-white/90 py-2"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-gold text-sm text-ink text-center"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
