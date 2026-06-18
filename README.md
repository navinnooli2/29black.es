# 29black.es

Static front-end clone of the **29 Black** online casino, localized for the
Spanish (ES) market. The site is marketing/landing only: there is no real
gaming back end. All call-to-action links point to an affiliate tracking URL.

> Production site: https://29black.es
> Repo: https://github.com/navinnooli2/29black.es

## Stack

- **Next.js 16** (App Router) with **static export** (`output: "export"`)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- Font: Poppins (`next/font/google`)
- Accent color `#ffb700` on a black/dark theme
- Node **22** (see `.node-version`)

Because `next.config.ts` sets `output: "export"` and `images.unoptimized: true`,
`next build` emits a fully static site to `out/` (no Node server required at
runtime).

## Getting started

```bash
npm install
```

## Commands

Exactly as defined in `package.json`:

```bash
npm run dev     # next dev — local dev server (http://localhost:3000)
npm run build   # next build — static export to ./out
npm run start   # next start — serve a production build
npm run lint    # eslint
```

## Deployment

`npm run build` produces a static `out/` directory (git-ignored). Deploy the
contents of `out/` to any static host (Cloudflare Pages / Vercel static / etc.).
The `.vercel` and `.next/`/`out/` artifacts are git-ignored.

## Content & configuration

- `src/lib/siteConfig.ts` — central config: brand name, URL, **affiliate
  tracking URL** (`affiliateUrl`), operator/license/payment-agent legal data,
  social links, footer copy/links.
- `src/lib/homeData.ts` — homepage section data.
- `src/lib/faqData.ts` — FAQ content.
- `src/lib/vipData.ts` — VIP page data.

## Directory map

```
src/
  app/
    layout.tsx            # root layout, SEO metadata, affiliate tracking <script>
    page.tsx              # root redirect/landing
    not-found.tsx
    globals.css           # Tailwind v4 entry + theme tokens
    es/                   # Spanish locale pages
      layout.tsx
      page.tsx            # homepage
      vip/  faq/  about/  contact-us/  affiliates/
      terms-of-service/  privacy-policy/
      aml-policy/  responsible-gambling-policy/
  components/
    home/                 # HeroBanner, SlotsSection, LiveCasino, PopularSports,
                          # LiveBets, LatestBigWins, VIPTeaser, FAQPreview
    layout/               # Header, Sidebar, Footer, MobileNav, SEOContent
    shared/               # Accordion, SectionHeader, LegalPage, ScrollToTop
  lib/                    # siteConfig, homeData, faqData, vipData
public/                   # favicon, og-image, assets/, brand SVGs
Slots/                    # slot game thumbnail images
Live_Casino/              # live casino thumbnail images
```

## Notes

- All gameplay/CTA links use the affiliate URL in `siteConfig.affiliateUrl`. A
  small inline script in `src/app/layout.tsx` appends the current page URL as a
  `src` param to outbound `/go/` links for attribution. Update the tracking URL
  there and in `siteConfig.ts` if the affiliate offer changes.
- Legal/operator details (license `ALSI-202411007-FI1`, operator LunaGate Ltd,
  payment agent Maxrise Services) live in `siteConfig.ts`.
