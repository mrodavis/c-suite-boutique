import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | C-Suite Beauty Boutique",
  description:
    "The story behind C-Suite Beauty Boutique — luxury skincare rooted in empowerment. Learn about our mission, philosophy, and commitment to premium beauty.",
  openGraph: {
    title: "About C-Suite Beauty Boutique",
    description:
      "Luxury skincare for the woman who leads. Our formulations are crafted to brighten, nourish, and transform your skin with confidence.",
    siteName: "C-Suite Beauty Boutique",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
