import AboutContent from "./AboutContent";

// ✅ SEO Metadata (Now Works Because This Is A Server Component)
export const metadata = {
  title: "About Refresh-IV.Taci | Nurse-Led IV Hydration & Vitamin Therapy",
  description:
    "Learn about Refresh-IV.Taci, founded by Board-Certified Nurse Practitioner Tsarina (“Taci”). Science-backed IV hydration, vitamin infusions, and wellness care that help you feel your best.",
  openGraph: {
    title: "About Refresh-IV.Taci | IV Hydration & Vitamin Therapy",
    description:
      "Discover the story behind Refresh-IV.Taci — where science meets self-care. Founded by Nurse Practitioner Taci, offering hydration, vitamin therapy, and holistic wellness.",
    url: "https://refreshivtaci.com/about",
    siteName: "Refresh-IV.Taci",
    images: [
      {
        url: "/refresh-logo.png",
        width: 1200,
        height: 630,
        alt: "Refresh-IV.Taci Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Refresh-IV.Taci | IV Hydration & Vitamin Therapy",
    description:
      "Meet Taci — a Nurse Practitioner redefining wellness through IV hydration and vitamin therapy.",
    images: ["/refresh-logo.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
