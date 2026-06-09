# C-Suite Beauty Boutique — Migration Plan & Audit Report
**Source:** Refresh-IV | **Target:** C-Suite Beauty Boutique  
**Date:** 2026-06-09 | **Author:** Staff Architect

---

## CODEBASE AUDIT

### Tech Stack
| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14.2.6 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^3.4 |
| Animation | Framer Motion | ^12 |
| Icons | Lucide React | ^0.545 |
| Fonts | Google Fonts (Inter + Playfair Display) | — |
| Payment | Square Web Payments SDK stub | — |
| State | React Context + useReducer | — |
| Persistence | localStorage | — |
| Database | None | — |
| Auth | None | — |
| CMS | None | — |
| Email | None | — |
| SMS | None | — |

### Existing Features Inventory
| Feature | Status | Notes |
|---|---|---|
| Cart (add/remove/qty/persist) | ✅ Full | CartContext + localStorage |
| Cart Drawer | ✅ Full | Animated slide-in, Framer Motion |
| Shop Page | ✅ Full | Category filters, product grid |
| Checkout Page | ✅ Full | Form, order summary, Square stub |
| Product Data Layer | ✅ Full | Static TypeScript product catalog |
| Responsive Design | ✅ Full | Tailwind breakpoints |
| Framer Motion Animations | ✅ Full | 3D tilt, parallax, spring physics |
| SEO Metadata | ✅ Partial | layout.tsx + page metadata |
| Authentication | ❌ None | — |
| User Accounts | ❌ None | — |
| Admin Dashboard | ❌ None | — |
| Orders / Order History | ❌ None | — |
| Reviews | ❌ None | — |
| Real Payment Processing | ❌ None | Square stub only |
| Email Integration | ❌ None | — |
| SMS Integration | ❌ None | — |
| CMS | ❌ None | — |
| Database | ❌ None | Static data only |
| Booking System | ✅ Stub | External JaneApp link |

### Existing Routes
```
/                   → Homepage (11 sections)
/about              → About page (Taci founder story)
/book               → Redirects to JaneApp external booking
/shop               → Wellness shop (category filters + cart)
/checkout           → Checkout (form + order summary + Square stub)
/shot-bar           → IV injection products page
```

### Component Map
```
src/components/
├── Navbar.tsx          — Scroll-aware nav, mobile menu, cart badge
├── Hero.tsx            — Full-screen video hero with parallax
├── FeatureGrid.tsx     — 3-card feature grid with 3D tilt + modal
├── DripCards.tsx       — 12 IV drip product cards (external links)
├── AddOns.tsx          — 9 injection add-on cards (external links)
├── WellnessShop.tsx    — 7 products with full cart integration ✅
├── HowItWorks.tsx      — 3-step process cards
├── FAQ.tsx             — Accordion FAQ
├── Contact.tsx         — Contact form + info
├── Footer.tsx          — Footer with link columns
├── CartDrawer.tsx      — Animated slide-in cart drawer ✅
└── InteractiveCard.tsx — Reusable 3D tilt card (shared utility) ✅
```

### State Architecture
```
CartContext (React Context + useReducer)
├── State: { items: CartItem[], isOpen: boolean }
├── Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QTY, CLEAR, OPEN/CLOSE_DRAWER, HYDRATE
├── Computed: totalItems, subtotal
└── Persistence: localStorage ("refresh-iv-cart" key → renamed "csuite-cart")
```

### Design System (Source — Dark Medical)
- Background: `#0E0F11` (charcoal), `#111319` (ink)
- Accent: teal `#23AECC` (IV therapy blue)
- Text: white
- Gold gradient (CTAs): `#F7E7A6 → #E8C766 → #D7A21A`
- Fonts: Playfair Display + Inter

---

## TRANSFORMATION DECISIONS

---

## KEEP — Preserve As-Is or With Minor Updates

| Item | Reason |
|---|---|
| `CartContext.tsx` | Production-quality reducer pattern, localStorage persistence, full type safety |
| `CartDrawer.tsx` | Fully functional slide-in drawer — restyle only |
| Shop page architecture | Category filter + grid pattern is perfect for beauty products |
| Checkout page structure | Form + order summary layout works as-is — restyle only |
| `InteractiveCard.tsx` | Reusable 3D tilt card — premium feel, adaptable |
| `Product` interface | Extend with `badge`, `featured`, `comingSoon` fields |
| Framer Motion animation system | 3D tilt, spring physics — keep for luxury feel |
| Navbar scroll behavior | Transparent → frosted glass on scroll — premium UX |
| Mobile responsive patterns | Tailwind breakpoints all reused |
| Google Fonts (Inter + Playfair) | Both already match the C-Suite brand spec |
| Square stub in `lib/square.ts` | Keep as payment foundation — will upgrade to Stripe |
| Next.js App Router structure | No change needed |
| `next.config.mjs`, `tsconfig.json` | No change needed |
| `postcss.config.cjs` | No change needed |
| Wellness product images | `/images/wellness/` — repurpose for C-Suite Wellness line |

---

## REFACTOR — Transform Content, Preserve Pattern

| File | From | To |
|---|---|---|
| `tailwind.config.ts` | Charcoal/ink/teal palette | Gold/blush/cream luxury palette |
| `globals.css` | Dark medical theme | Light ivory luxury theme |
| `layout.tsx` | Refresh-IV metadata, dark bg | C-Suite metadata, ivory bg, add Dancing Script font |
| `lib/products.ts` | Sea moss teas/gels/supplements | Beauty products + wellness line |
| `CartContext.tsx` | Storage key `refresh-iv-cart` | Storage key `csuite-cart` |
| `Navbar.tsx` | Refresh-IV logo + IV nav links | C-Suite logo + beauty nav links |
| `Hero.tsx` | Full-screen video hero | Two-column luxury hero with CSS cosmetic jar |
| `FeatureGrid.tsx` | 3 IV feature cards | 4 beauty benefit cards (TrustSection) |
| `DripCards.tsx` | 12 IV drip cards | Signature product showcase (ProductShowcase) |
| `AddOns.tsx` | 9 injection cards | Founder section (Cynthia Davis story) |
| `WellnessShop.tsx` | IV wellness add-ons | Beauty shop preview with cart |
| `HowItWorks.tsx` | IV 3-step process | AI Beauty Consultant feature section |
| `FAQ.tsx` | IV therapy FAQs | Beauty/skincare FAQs |
| `Contact.tsx` | "Book IV session" | "Contact C-Suite Beauty" |
| `Footer.tsx` | Refresh-IV columns | C-Suite beauty columns |
| `about/page.tsx` + `AboutContent.tsx` | Taci / IV founder story | Cynthia Davis / C-Suite brand story |
| `book/page.tsx` | JaneApp redirect | Beauty consultation page |
| `shop/page.tsx` | Wellness shop | C-Suite beauty shop |
| `checkout/page.tsx` | Dark theme checkout | Light luxury checkout |

---

## REMOVE — IV-Specific, No Place in Beauty Brand

| Item | Reason |
|---|---|
| All IV drip product data (12 items in `DripCards.tsx`) | IV therapy — not applicable |
| All injection/add-on data (9 items in `AddOns.tsx`) | Medical procedures — not applicable |
| JaneApp booking links (`janeapp.com` URLs) | IV booking system |
| `shot-bar/page.tsx` (as IV content) | IV injection page |
| Video hero files (`hero.mp4`, `hero-mobile.mp4`, `splash*.mp4`) | IV therapy visuals — unused |
| `/images/drips/` product images (12 images) | IV drip photos |
| `/images/injections/` product images (9 images) | Injection photos |
| `/images/how-it-works/` images | IV-specific process photos |
| `/images/medical-grade.png`, `nurse-led.png` | Medical imagery |
| `/images/taci-headshot.png`, `tsarina-taci-founder.png` | Taci founder photos |
| `refresh-logo.svg`, `refresh-logo.png` | Refresh-IV branding |
| Teal color scheme (`#23AECC`) | IV therapy brand color |
| Dark background (`#0E0F11`, `#111319`) | Medical aesthetic |
| `text-teal-*` classes throughout | IV brand colors |
| "Book Now" → JaneApp CTAs | IV booking |
| All "Refresh-IV", "IV Therapy", "Infusion", "Drip" text | Brand-specific IV terminology |

---

## NEW — Created for C-Suite Beauty Boutique

| Item | Purpose |
|---|---|
| `AnnouncementBar.tsx` | "Free shipping on orders over $75" top bar |
| `FounderSection.tsx` (in AddOns.tsx) | Cynthia Davis founder story |
| `AIConsultantSection.tsx` (in HowItWorks.tsx) | AI Beauty Consultant homepage preview |
| `/results/page.tsx` | Before/after gallery + testimonials |
| `/ai-consultant/page.tsx` | Full AI Beauty Consultant UI (mock data) |
| C-Suite design tokens | Gold, blush, cream, deep — luxury palette |
| Dancing Script font | Accent script for "Transform." / "Own It." |
| `ProductShowcase` section (in DripCards.tsx) | Signature cream feature section |
| `TrustSection` (in FeatureGrid.tsx) | 4 beauty benefit cards |

---

## FUTURE — Phase Roadmap

### Phase 2: Commerce Upgrade
- [ ] Replace Square stub with **Stripe** (Stripe Elements or Stripe Checkout)
- [ ] Add Stripe subscription support for **Beauty Memberships**
- [ ] Build **Loyalty Program** points system
- [ ] Build **Affiliate Program** tracking (referral codes, commission)
- [ ] **User Authentication** via Clerk (auth + account dashboard)
- [ ] **Order History** — user account order tracking
- [ ] **Email notifications** via Resend (order confirmation, shipping, promotions)
- [ ] **SMS notifications** via Twilio
- [ ] **CMS integration** (Sanity or Contentful) for products, results, blog
- [ ] **Product Reviews** system

### Phase 3: AI Beauty Consultant Backend
- [ ] Connect OpenAI GPT-4 Vision API for skin analysis
- [ ] Image upload + analysis pipeline
- [ ] Skin tone detection + dark spot analysis
- [ ] **Personalized product recommendations** engine
- [ ] **Progress tracking** — photo timeline, before/after
- [ ] Skin analysis history + dashboard
- [ ] **Personalized routines** generation

### Phase 4: Beauty Academy
- [ ] Course/lesson system
- [ ] Video content delivery
- [ ] Student accounts + progress tracking
- [ ] Certificate system
- [ ] Instructor dashboard

### Phase 5: Med Spa Booking
- [ ] Service catalog (facial treatments, etc.)
- [ ] Appointment booking system (Cal.com or custom)
- [ ] Practitioner schedules + availability
- [ ] Pre-appointment forms
- [ ] Appointment reminders (email/SMS)

### Phase 6: Franchise System
- [ ] Multi-tenant architecture
- [ ] Franchise onboarding flow
- [ ] Revenue sharing / royalty tracking
- [ ] Franchise dashboard + reporting

---

## TECHNICAL DEBT IDENTIFIED

| Issue | Severity | Recommended Fix |
|---|---|---|
| No authentication | High | Add Clerk for user accounts (Phase 2) |
| No real payment processing | High | Upgrade Square stub to Stripe (Phase 2) |
| Static product data | Medium | Replace with CMS (Sanity/Contentful) in Phase 2 |
| No order management | High | Build order system with database (Phase 2) |
| No database | High | Add Prisma + PostgreSQL or Supabase (Phase 2) |
| No email/SMS | Medium | Add Resend + Twilio (Phase 2) |
| Cart lives in localStorage only | Medium | Sync to server on auth (Phase 2) |
| No product image optimization pipeline | Low | Add Cloudinary or Vercel's image pipeline |
| No error boundaries | Low | Add React ErrorBoundary components |
| No loading states on checkout | Low | Add optimistic UI patterns |
| `section { min-height: 100vh }` in CSS | Medium | Remove — causes layout issues on short content |
| No robots.txt or sitemap | Medium | Add via Next.js metadata API |

---

## FILES CHANGED

### Modified
- `package.json` — name updated
- `tailwind.config.ts` — full palette replacement
- `src/app/globals.css` — full design system replacement
- `src/app/layout.tsx` — metadata, fonts, background
- `src/lib/products.ts` — beauty product catalog
- `src/context/CartContext.tsx` — storage key
- `src/app/page.tsx` — new homepage structure
- `src/components/Navbar.tsx` — full rebrand
- `src/components/Hero.tsx` — full rebuild (two-column)
- `src/components/FeatureGrid.tsx` → TrustSection
- `src/components/DripCards.tsx` → ProductShowcase
- `src/components/AddOns.tsx` → FounderSection
- `src/components/WellnessShop.tsx` → BeautyShopPreview
- `src/components/HowItWorks.tsx` → AIConsultantSection
- `src/components/FAQ.tsx` — beauty FAQs
- `src/components/Contact.tsx` — C-Suite contact
- `src/components/Footer.tsx` — C-Suite footer
- `src/components/CartDrawer.tsx` — light theme
- `src/app/shop/page.tsx` — beauty shop
- `src/app/checkout/page.tsx` — light theme
- `src/app/about/page.tsx` — metadata update
- `src/app/about/AboutContent.tsx` — full rebrand
- `src/app/book/page.tsx` — consultation page
- `src/app/shot-bar/page.tsx` — coming soon / redirect

### Created
- `docs/csuite-migration-plan.md` — this document
- `src/components/AnnouncementBar.tsx` — shipping announcement
- `src/app/results/page.tsx` — before/after gallery
- `src/app/ai-consultant/page.tsx` — AI Beauty Consultant (mock)

---

## REUSABLE COMPONENTS DISCOVERED

| Component | Reuse Value | Notes |
|---|---|---|
| `CartContext` + `CartDrawer` | ★★★★★ | Production-quality cart system, keep exactly |
| `InteractiveCard` | ★★★★☆ | 3D tilt utility, generic enough to use anywhere |
| 3D tilt pattern (useMotionValue + useSpring + useTransform) | ★★★★☆ | Repeated in every card — could extract to hook |
| `InputField` (in checkout) | ★★★★☆ | Clean form input component — reuse in contact forms |
| `ShopProductCard` (in shop) | ★★★★☆ | Cart-integrated product card pattern |
| Product type interface | ★★★★☆ | Extend for full PIM |
| Scroll-aware Navbar pattern | ★★★☆☆ | Transparent → frosted glass — good pattern |
| FAQ Accordion | ★★★☆☆ | Reusable AnimatePresence accordion |

---

## BRAND VOCABULARY REPLACEMENT

| Old Term | New Term |
|---|---|
| Refresh-IV / Refresh-IV.Taci | C-Suite Beauty Boutique |
| IV Therapy / IV Drip | Skincare / Treatment |
| Hydration | Nourishment / Radiance |
| Wellness Drip | Beauty Ritual |
| Medical Treatment | Premium Formula |
| Nurse / Nurse Practitioner | Beauty Expert / Formulator |
| Infusion | Serum / Essence |
| Book a Session | Shop Now / Consult |
| Shot Bar | Beauty Bar |
| Taci / Tsarina Garcia | Cynthia Davis |
| "Feel Refreshed" | "Radiate Confidence" |
| "Hydrate Today" | "Brighten. Nourish. Transform." |

---

*This document serves as the living architectural reference for all C-Suite Beauty Boutique development. Update it as phases are completed.*
