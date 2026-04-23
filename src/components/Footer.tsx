import Link from "next/link";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "IV Drips",      href: "/#drips" },
      { label: "Shot Bar",      href: "/shot-bar" },
      { label: "Wellness Shop", href: "/#wellness-shop" },
      { label: "Add-Ons",       href: "/#add-ons" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "About",        href: "/#about" },
      { label: "How It Works", href: "/#how" },
      { label: "FAQs",         href: "/#faq" },
    ],
  },
  {
    heading: "Visit Us",
    links: [
      { label: "Contact",  href: "/#contact" },
      { label: "Book Now", href: "/book" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Logo + brand */}
          <div className="flex flex-col gap-4">
            <Link href="/#home" className="flex items-center gap-3 w-fit">
              <img
                src="/refresh-logo.svg"
                alt="Refresh-IV Taci Logo"
                className="h-10 w-auto drop-shadow-[0_0_4px_rgba(255,215,0,0.3)]"
              />
              <span className="font-semibold text-lg tracking-wide text-white/90 font-playfair">
                Refresh-<span className="text-teal-400">IV</span>
                <span className="text-shimmer-gold">.Taci</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              Premium IV hydration &amp; wellness therapies. Hydrate today. Thrive tomorrow.
            </p>
            <a href="/book" className="btn-gold text-sm text-ink w-fit mt-2">
              Book Now
            </a>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
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

      <div className="border-t border-white/10" />

      <div className="container flex flex-col md:flex-row gap-3 items-center justify-between py-8 text-white/60">
        <p>© {new Date().getFullYear()} Refresh-IV.Taci. All rights reserved.</p>
        <p className="text-sm">Made with care • Hydrate responsibly</p>
      </div>
    </footer>
  );
}
