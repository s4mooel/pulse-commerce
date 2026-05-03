# Pulse Commerce — Next.js app

Production app shell using the Pulse design system, compiled into a Tailwind theme.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Routes

- `/` — Marketing home
- `/pricing` — Pricing tiers
- `/customers` — Case studies
- `/store` — Storefront demo (Northland tenant)
- `/dashboard` — Merchant overview
- `/dashboard/orders` — Orders list
- `/dashboard/inventory` — Product grid
- `/dashboard/customers` — Customer table

## Dark mode

Click the moon/sun in the top nav. Preference persists in `localStorage`. Tailwind `darkMode: 'class'` — toggle adds/removes `dark` on `<html>`.

## Mock data

All data is in `src/lib/data.ts`. Replace with real API calls — types stay the same.

## Deploy

```bash
npx vercel
```

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs `npm ci && npm run build` on every push.
