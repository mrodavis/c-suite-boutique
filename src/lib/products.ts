export interface Product {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  desc: string;
  image?: string;
  category: "cream" | "serum" | "kit" | "wellness" | "accessory";
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

// ─── C-Suite Wellness Line ────────────────────────────────────────────────────

export const wellnessProducts: Product[] = [
  {
    id: "sea-moss-tea-immunity",
    name: "Immunity Boost Sea Moss Tea",
    price: 20,
    priceLabel: "$20",
    desc: "Supports immune health and hormone balance. Blended with sea moss, elderberry, ginger, and cinnamon.",
    image: "/images/wellness/sea-moss-tea-immunity-boost.png",
    category: "wellness",
  },
  {
    id: "sea-moss-tea-hormone",
    name: "Hormone Balance Sea Moss Tea",
    price: 20,
    priceLabel: "$20",
    desc: "Supports women's health and hormonal balance. Includes red raspberry leaf, maca root, and rose petals.",
    image: "/images/wellness/sea-moss-tea-hormone-balance.png",
    category: "wellness",
  },
  {
    id: "sea-moss-tea-vitality",
    name: "Vitality Sea Moss Tea",
    price: 20,
    priceLabel: "$20",
    desc: "Enhances stamina and hormonal harmony. Infused with maca root, damiana, tribulus, and cinnamon.",
    image: "/images/wellness/sea-moss-tea-sexual-vitality.png",
    category: "wellness",
  },
  {
    id: "sea-moss-tea-detox",
    name: "Detox + Anti-Inflammatory Tea",
    price: 20,
    priceLabel: "$20",
    desc: "Promotes liver health and reduces inflammation. Contains burdock root, turmeric, and lemon peel.",
    image: "/images/wellness/sea-moss-tea-detox-anti-inflammatory.png",
    category: "wellness",
  },
  {
    id: "sea-moss-gel-elderberry",
    name: "Sea Moss Gel – Elderberry & Coconut",
    price: 30,
    priceLabel: "$30",
    desc: "Irish sea moss blended with elderberry, flaxseed, and coconut for daily nourishment and vitality.",
    image: "/images/wellness/sea-moss-gel-elderberry-coconut.png",
    category: "wellness",
  },
  {
    id: "libido-vitality-packs",
    name: "Vitality Daily Supplement Packs",
    price: 40,
    priceLabel: "$40",
    desc: "30-day supplement for stamina and hormone balance. Each pack contains 7 essential capsules.",
    image: "/images/wellness/libido-vitality-daily-packs.png",
    category: "wellness",
  },
  {
    id: "hormone-vitality-support",
    name: "Hormone & Vitality Support",
    price: 40,
    priceLabel: "$40",
    desc: "Vitamin D, Saw Palmetto, and Inositol for balance and wellness. 30 daily packs included.",
    image: "/images/wellness/hormone-vitality-support.png",
    category: "wellness",
  },
];

export const allProducts: Product[] = [...beautyProducts, ...wellnessProducts];
