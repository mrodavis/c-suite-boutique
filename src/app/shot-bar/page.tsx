import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

export default function ComingSoonPage() {
  return (
    <main style={{ backgroundColor: "#FFFDFB" }}>
      <AnnouncementBar />
      <Navbar />

      <section
        className="min-h-screen flex items-center justify-center py-28"
        style={{ background: "linear-gradient(135deg,#FAF7F2 0%,#FAE8E8 60%,#F6EFE8 100%)" }}
      >
        <div className="text-center px-6">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: "#E88C9A" }}
          >
            C-Suite Beauty Boutique
          </p>
          <h1
            className="font-playfair font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3.2rem)", color: "#3A2D2D" }}
          >
            Beauty Bar
            <span className="block font-script font-normal mt-1" style={{ color: "#C9A15D", fontSize: "clamp(2.2rem,5.5vw,3.5rem)" }}>
              Coming Soon
            </span>
          </h1>
          <div className="w-12 h-0.5 mx-auto my-6" style={{ background: "linear-gradient(90deg,#C9A15D,#E8C766)" }} />
          <p className="text-base max-w-md mx-auto mb-10" style={{ color: "rgba(58,45,45,0.62)" }}>
            Our Beauty Bar services are coming soon. In the meantime, explore our
            luxury skincare products or try the AI Beauty Consultant.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shop" className="btn-primary">Shop Products</Link>
            <Link href="/ai-consultant" className="btn-outline">AI Consultant</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
