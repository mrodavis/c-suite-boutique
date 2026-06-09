"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/",               label: "Home" },
  { href: "/shop",           label: "Shop" },
  { href: "/about",          label: "About Us" },
  { href: "/results",        label: "Results" },
  { href: "/ai-consultant",  label: "AI Consultant" },
  { href: "/#contact",       label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(58,45,45,0.08)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex flex-col items-start leading-none select-none">
          <span
            className="font-playfair font-bold tracking-[0.12em] uppercase"
            style={{ fontSize: "1.15rem", color: "#3A2D2D" }}
          >
            C-Suite
          </span>
          <span
            className="font-inter font-light tracking-[0.3em] uppercase"
            style={{ fontSize: "0.58rem", color: "rgba(58,45,45,0.55)" }}
          >
            Beauty Boutique
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-gold-500"
              style={{ color: "rgba(58,45,45,0.75)", letterSpacing: "0.03em" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-1">
          <button
            className="p-2 rounded-full transition-colors hover:bg-cream-200"
            aria-label="Search"
            style={{ color: "rgba(58,45,45,0.65)" }}
          >
            <Search size={18} />
          </button>
          <button
            className="p-2 rounded-full transition-colors hover:bg-cream-200"
            aria-label="Account"
            style={{ color: "rgba(58,45,45,0.65)" }}
          >
            <User size={18} />
          </button>
          <button
            onClick={openDrawer}
            className="relative p-2 rounded-full transition-colors hover:bg-cream-200"
            aria-label="Open cart"
            style={{ color: "rgba(58,45,45,0.65)" }}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center leading-none"
                style={{ backgroundColor: "#E88C9A" }}
              >
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
          <Link href="/shop" className="btn-primary text-xs ml-2 px-5 py-2.5">
            Shop Now
          </Link>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={openDrawer}
            className="relative p-2 transition-colors"
            aria-label="Open cart"
            style={{ color: "rgba(58,45,45,0.65)" }}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center leading-none"
                style={{ backgroundColor: "#E88C9A" }}
              >
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
          <button
            className="p-2 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ color: "#3A2D2D" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(58,45,45,0.08)", backgroundColor: "rgba(255,253,251,0.98)" }}
        >
          <div className="container py-5 grid gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base py-1 transition-colors hover:text-gold-500"
                style={{ color: "rgba(58,45,45,0.80)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="btn-primary text-sm text-center mt-2"
              onClick={() => setOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
