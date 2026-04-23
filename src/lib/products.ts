export interface Product {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  desc: string;
  color: string;
  image: string;
  category: "tea" | "gel" | "supplement";
}

export const wellnessProducts: Product[] = [
  {
    id: "sea-moss-tea-immunity",
    name: "Sea Moss Tea – Immunity Boost",
    price: 20,
    priceLabel: "$20",
    desc: "Supports immune health and hormone balance. With sea moss, elderberry, ginger, and cinnamon.",
    color: "text-gold",
    image: "/images/wellness/sea-moss-tea-immunity-boost.png",
    category: "tea",
  },
  {
    id: "sea-moss-tea-hormone",
    name: "Sea Moss Tea – Hormone Balance",
    price: 20,
    priceLabel: "$20",
    desc: "Supports women's health and hormonal balance. Includes red raspberry leaf, maca root, and rose petals.",
    color: "text-pink-400",
    image: "/images/wellness/sea-moss-tea-hormone-balance.png",
    category: "tea",
  },
  {
    id: "sea-moss-tea-vitality",
    name: "Sea Moss Tea – Sexual Vitality",
    price: 20,
    priceLabel: "$20",
    desc: "Enhances libido, stamina, and hormonal harmony. Infused with maca root, damiana, tribulus, and cinnamon.",
    color: "text-rose-400",
    image: "/images/wellness/sea-moss-tea-sexual-vitality.png",
    category: "tea",
  },
  {
    id: "sea-moss-tea-detox",
    name: "Sea Moss Tea – Detox + Anti-Inflammatory",
    price: 20,
    priceLabel: "$20",
    desc: "Promotes liver health and reduces inflammation. Contains burdock root, turmeric, and lemon peel.",
    color: "text-emerald-400",
    image: "/images/wellness/sea-moss-tea-detox-anti-inflammatory.png",
    category: "tea",
  },
  {
    id: "sea-moss-gel-elderberry",
    name: "Sea Moss Gel – Elderberry & Coconut",
    price: 30,
    priceLabel: "$30",
    desc: "Irish sea moss blended with elderberry, flaxseed, and coconut for daily nourishment and vitality.",
    color: "text-gold",
    image: "/images/wellness/sea-moss-gel-elderberry-coconut.png",
    category: "gel",
  },
  {
    id: "libido-vitality-packs",
    name: "Libido & Vitality Daily Packs",
    price: 40,
    priceLabel: "$40",
    desc: "30-day supplement for stamina and hormone balance. Each pack contains 7 essential capsules.",
    color: "text-gold",
    image: "/images/wellness/libido-vitality-daily-packs.png",
    category: "supplement",
  },
  {
    id: "hormone-vitality-support",
    name: "Hormone & Vitality Support",
    price: 40,
    priceLabel: "$40",
    desc: "Vitamin D, Saw Palmetto, and Inositol for balance and wellness. 30 daily packs included.",
    color: "text-gold",
    image: "/images/wellness/hormone-vitality-support.png",
    category: "supplement",
  },
];
