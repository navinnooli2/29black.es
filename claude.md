# 29Black ES — Dev Notes

Visual clone of https://29black.com (FR origin), localized for the Spanish (ES)
market. Front-end only, static export, in production.

## Stack
- Next.js 16 (App Router) + static export (`output: "export"` in next.config.ts)
- React 19, TypeScript 5
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Font: Poppins (next/font/google) — accent `#ffb700`, black/dark theme
- Node 22 (`.node-version`)

## Commands
- `npm install`
- `npm run dev`   — local dev server
- `npm run build` — static export to `out/`
- `npm run start` — serve production build
- `npm run lint`  — eslint

## Deploy
- `npm run build` -> static `out/` (git-ignored). Deploy `out/` to any static
  host. Site live at https://29black.es. Repo: github.com/navinnooli2/29black.es.

## Content locations
- `src/lib/siteConfig.ts` — brand, URL, affiliate tracking URL, legal/operator
  data (license ALSI-202411007-FI1, LunaGate Ltd, Maxrise Services), socials,
  footer copy/links.
- `src/lib/homeData.ts` / `faqData.ts` / `vipData.ts` — page data.
- `src/app/es/*` — all locale pages (home, vip, faq, about, contact-us,
  affiliates, terms-of-service, privacy-policy, aml-policy,
  responsible-gambling-policy).
- `src/components/{home,layout,shared}` — UI components.
- `Slots/`, `Live_Casino/`, `public/assets/` — game thumbnails & brand assets.

## Gotchas
- All CTA/game links go to the affiliate URL in `siteConfig.affiliateUrl`. An
  inline script in `src/app/layout.tsx` appends the current page URL as a `src`
  param to outbound `/go/` links. Update tracking in both places if the offer
  changes.
- Static export: no server runtime; `images.unoptimized: true` (no next/image
  optimization). Keep links/assets static-export friendly.

## Design system (extracted from original HTML)
- Background `#000000`; cards/sections `#111111`, `#1a1a1a`
- Accent `#ffb700`; text `#ffffff` / `rgba(255,255,255,0.5)`
- Borders `#454545`, `rgba(255,255,255,0.1)`
- Sidebar 240px expanded; radius 8px buttons / 12px cards
- Poppins weights 400–700

## Status
- Site stable in production. No open work item known. Watch affiliate tracking
  URLs if the offer changes. Assets downloaded from original site.
