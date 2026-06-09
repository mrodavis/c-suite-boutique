import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
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

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "C-Suite Beauty Boutique | Luxury Skincare",
  description:
    "Luxury skincare for the woman who leads. Our advanced Skin Lightening Cream visibly brightens, nourishes, and reveals your most radiant skin. Confidence. Radiance. Elevated.",
  keywords: [
    "luxury skincare",
    "skin lightening cream",
    "C-Suite Beauty",
    "brightening cream",
    "dark spots treatment",
    "premium beauty",
  ],
  openGraph: {
    title: "C-Suite Beauty Boutique | Confidence. Radiance. Elevated.",
    description:
      "Luxury skincare formulated for women who lead. Advanced brightening, nourishing, and transformative skincare.",
    siteName: "C-Suite Beauty Boutique",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C-Suite Beauty Boutique",
    description: "Luxury skincare. Confidence. Radiance. Elevated.",
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}
    >
      <body className="bg-cream-50 text-deep selection:bg-blush-200 selection:text-deep">
        <CartProvider>
          <CartDrawer />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
