import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProductShowcase from "@/components/ProductShowcase";
import BeautyShopPreview from "@/components/BeautyShopPreview";
import FounderSection from "@/components/FounderSection";
import AIConsultantSection from "@/components/AIConsultantSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustSection />
      <ProductShowcase />
      <BeautyShopPreview />
      <FounderSection />
      <AIConsultantSection />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
