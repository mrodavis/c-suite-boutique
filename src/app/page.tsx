import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import DripCards from "@/components/DripCards";
import AddOns from "@/components/AddOns";
import WellnessShop from "@/components/WellnessShop";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <FeatureGrid />
      <DripCards />
      <WellnessShop />
      <AddOns />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
