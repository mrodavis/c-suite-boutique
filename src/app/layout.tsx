import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Refresh IV | IV Drip & Wellness",
  description: "Premium IV hydration, vitamin shots, and wellness therapies. Hydrate today. Thrive tomorrow.",
  icons: { icon: "/refresh-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <head>
          <link rel="preload" as="video" href="/hero.mp4" type="video/mp4" />
          <link rel="preload" as="image" href="/refresh-logo.png" type="image/png" />
        </head>
      <body className="bg-charcoal selection:bg-teal-500/30 selection:text-white">
        <CartProvider>
          <CartDrawer />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
