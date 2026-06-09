export interface Product {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  desc: string;
  image?: string;
  category: "cream" | "serum" | "kit" | "accessory";
  badge?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

// ─── C-Suite Beauty Product Catalog ───────────────────────────────────────────

export const beautyProducts: Product[] = [
  {
    id: "csuite-skin-lightening-cream",
    name: "C-Suite Skin Lightening Cream",
    price: 68,
    priceLabel: "$68",
    desc: "Formulated with powerful brightening agents and botanical extracts. Visibly reduces dark spots, evens skin tone, improves texture and clarity. For all skin types.",
    category: "cream",
    badge: "Signature",
    featured: true,
  },
  {
    id: "csuite-brightening-serum",
    name: "Brightening Vitamin C Serum",
    price: 54,
    priceLabel: "$54",
    desc: "Concentrated vitamin C serum that illuminates and protects. Delivers antioxidant power for a visibly brighter, more even complexion.",
    category: "serum",
    badge: "Coming Soon",
    comingSoon: true,
  },
  {
    id: "csuite-nourishing-body-cream",
    name: "Nourishing Body Cream",
    price: 48,
    priceLabel: "$48",
    desc: "Rich, velvety body cream that deeply moisturizes while evening skin tone from head to toe. Infused with shea butter and botanical oils.",
    category: "cream",
    badge: "Coming Soon",
    comingSoon: true,
  },
  {
    id: "csuite-luxury-beauty-kit",
    name: "C-Suite Luxury Beauty Kit",
    price: 145,
    priceLabel: "$145",
    desc: "The ultimate C-Suite experience. Complete brightening and nourishing system curated for transformative results.",
    category: "kit",
    badge: "Coming Soon",
    comingSoon: true,
  },
];

export const allProducts: Product[] = [...beautyProducts];
