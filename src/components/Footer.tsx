"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerColumns = [
  {
    heading: "Shop",
    links: [
      { label: "Skin Lightening Cream", href: "/shop" },
      { label: "Serums",               href: "/shop" },
      { label: "Beauty Kits",          href: "/shop" },
      { label: "View All Products",    href: "/shop" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "About Us",         href: "/about" },
      { label: "Results",          href: "/results" },
      { label: "AI Consultant",    href: "/ai-consultant" },
      { label: "FAQs",             href: "/#faq" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us",        href: "/#contact" },
      { label: "Shipping Policy",   href: "/#contact" },
      { label: "Returns",           href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3A2D2D" }}>
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex flex-col items-start leading-none select-none">
              <span
                className="font-playfair font-bold tracking-[0.12em] uppercase"
                style={{ fontSize: "1.1rem", color: "#FAF7F2" }}
              >
                C-Suite
              </span>
              <span
                className="font-inter font-light tracking-[0.28em] uppercase mt-0.5"
                style={{ fontSize: "0.55rem", color: "rgba(250,247,242,0.45)" }}
              >
                Beauty Boutique
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ color: "rgba(250,247,242,0.50)" }}
            >
              Luxury skincare for the woman who leads. Confidence. Radiance. Elevated.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    border: "1px solid rgba(250,247,242,0.15)",
                    color: "rgba(250,247,242,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A15D";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9A15D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,247,242,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,242,0.45)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-xs font-semibold uppercase tracking-[0.22em] mb-5"
                style={{ color: "#C9A15D" }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(250,247,242,0.50)" }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#FAF7F2")}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(250,247,242,0.50)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(250,247,242,0.08)" }}
      >
        <div className="container flex flex-col md:flex-row gap-2 items-center justify-between py-6">
          <p
            className="text-xs"
            style={{ color: "rgba(250,247,242,0.35)" }}
          >
            © {new Date().getFullYear()} C-Suite Beauty Boutique. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(250,247,242,0.25)" }}
          >
            Confidence. Radiance. Elevated.
          </p>
        </div>
      </div>
    </footer>
  );
}
