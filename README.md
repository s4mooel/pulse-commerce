# Pulse Commerce

> Commerce infrastructure for brands that move.

Pulse Commerce is the operating system for modern retail. One system of record for **orders, inventory, customers, and storefronts** across every channel and region you sell in — built API-first with ledger-grade transactions and sub-200ms checkout.

This repository contains the full Pulse design system, four reference UI kits, and a working Next.js application that consumes the brand tokens.

---

## Repository structure

```
pulse-commerce/
├── design-system/          # Brand tokens, assets, preview cards, UI kits (HTML)
│   ├── colors_and_type.css # Single source of truth for tokens
│   ├── assets/             # Logos and marks
│   ├── preview/            # 21 review cards (Type/Color/Spacing/Components/Brand)
│   ├── ui_kits/            # marketing · dashboard · storefront · admin
│   ├── README.md           # Design system documentation
│   └── SKILL.md            # Usage guide for designers
├── app/                    # Next.js 14 + Tailwind production app
│   ├── src/                # App Router pages, components
│   ├── tailwind.config.ts  # Tokens compiled to Tailwind theme
│   └── package.json
├── LICENSE                 # MIT
└── README.md               # This file
```

---

## Quick start

### 1. Browse the design system (no install required)

Open any HTML file in `design-system/` directly in your browser:

```bash
open design-system/ui_kits/marketing/index.html
open design-system/ui_kits/dashboard/index.html
open design-system/ui_kits/storefront/index.html
open design-system/ui_kits/admin/index.html
```

Or serve the folder with any static server:

```bash
npx serve design-system
```

### 2. Run the Next.js app

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Deploy to Vercel

```bash
cd app
npx vercel
```

---

## Design tokens

All color, type, spacing, radius, shadow, and motion tokens live in `design-system/colors_and_type.css` as CSS custom properties. The Next.js app re-exposes them through `tailwind.config.ts` so you can write `bg-pulse-600`, `text-ink-900`, `rounded-lg`, etc.

| Layer       | Where                                              |
| ----------- | -------------------------------------------------- |
| Source      | `design-system/colors_and_type.css`                |
| Tailwind    | `app/tailwind.config.ts`                           |
| App globals | `app/src/app/globals.css` (imports the source CSS) |

Edit tokens in **one place** (`colors_and_type.css`) and both the static design system and the Next app pick it up.

---

## Brand at a glance

- **Voice** — Stripe-precise, with editorial flourishes. Direct, technical, confident.
- **Pulse green** — `#059669` (`--pulse-600`). Used surgically: primary CTAs, active state, KPI deltas, the logo dot. Never a flood.
- **Type** — Geist (UI), Geist Mono (numerics/code), Bricolage Grotesque (display), Fraunces (editorial moments).
- **Shadows** — flat, low-contrast. Hairlines do the work.

See `design-system/README.md` for the full spec.

---

## What's in the four UI kits

| Kit          | Purpose                                                   |
| ------------ | --------------------------------------------------------- |
| `marketing`  | Public website — hero, features, social proof, pricing    |
| `dashboard`  | Merchant control plane — orders, inventory, customers     |
| `storefront` | Shopper-facing tenant site (the merchant wears the brand) |
| `admin`      | Internal Pulse staff tools — tenants, alerts, ops         |

Each kit has its own `README.md` explaining usage patterns.

---

## License

MIT — see [LICENSE](./LICENSE).
