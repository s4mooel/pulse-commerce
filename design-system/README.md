# Pulse Commerce — Design System

Pulse Commerce is an **enterprise commerce platform** for large retailers and brands. Merchants run their entire operation in Pulse: orders, inventory, customers, channels, analytics, and storefronts — all in one place. Designed for operations teams at the enterprise tier (think mid-market retail through global brands).

This design system covers four surfaces:

1. **Marketing website** — public-facing, sales pitch, editorial energy.
2. **Merchant dashboard** — the dense, day-job admin surface (orders/inventory/analytics).
3. **Storefront** — the shopper-facing experience Pulse renders for end consumers.
4. **Admin / internal tools** — Pulse staff-facing ops console.

> **Sources:** Built from scratch — no codebase, Figma, or existing brand was provided. All decisions in this document were made and documented during creation. Treat them as starting opinions, not gospel — iterate as the real product takes shape.

---

## Index

| File / Folder              | Purpose                                                              |
| -------------------------- | -------------------------------------------------------------------- |
| `README.md`                | This file. Brand overview, content, visual foundations, iconography. |
| `SKILL.md`                 | Agent skill manifest — invoke `pulse-design` to use this system.     |
| `colors_and_type.css`      | All design tokens (color, type, spacing, radii, shadow, motion).     |
| `assets/`                  | Logos, marks, brand visuals.                                         |
| `preview/`                 | Per-token preview cards rendered in the Design System tab.           |
| `ui_kits/marketing/`       | Marketing website kit — homepage, pricing, features.                 |
| `ui_kits/dashboard/`       | Merchant dashboard kit — orders, inventory, analytics.               |
| `ui_kits/storefront/`      | Shopper-facing storefront kit — PLP, PDP, cart.                      |
| `ui_kits/admin/`           | Internal admin console kit — tenant management, support tools.       |

---

## Brand at a glance

- **Name:** Pulse Commerce
- **One-liner:** *Commerce infrastructure for brands that move.*
- **Primary color:** Emerald `#059669` — used surgically. Never floods a layout.
- **Type:** Geist (sans, UI), Geist Mono (numerics, code), Instrument Serif (editorial).
- **Aesthetic:** Stripe-grade precision base + occasional editorial serif moments for marketing. Never playful, never retro.

---

## CONTENT FUNDAMENTALS

Pulse copy sounds like a senior PM who respects your time: confident, specific, and short. We earn trust with **precision**, not enthusiasm.

### Voice

- **Confident, not loud.** Make the claim once, support it, move on. Never use exclamation marks. Never use "amazing," "incredible," "powerful," "seamless," "delight."
- **Specific over abstract.** "Sub-200ms checkout" beats "blazing-fast checkout." Numbers, names, verbs.
- **Address the operator.** "You" for the merchant. "Your customers" or "shoppers" for end users. Never "I" or "we" except in support/changelog contexts.
- **No fluff transitions.** Don't write "In today's fast-paced world…" Get to the point.

### Tone by surface

| Surface         | Tone                                                       |
| --------------- | ---------------------------------------------------------- |
| Marketing       | Editorial-confident. Long-form serif headlines OK. Punchy. |
| Dashboard       | Direct, scannable. Verbs in CTAs. Plain English errors.    |
| Storefront      | Shopper-friendly, light, helpful. Less jargon.             |
| Admin           | Procedural, neutral. Like an internal tool should sound.   |
| Errors / states | Plain, actionable. Tell the user what to do next.          |

### Casing

- **Sentence case** for buttons, menu items, headings, page titles. ("Create order", not "Create Order".)
- **Title Case** only for proper nouns (product names, integration names): "Stripe", "Shopify Markets".
- **UPPERCASE** only for tiny eyebrows (`.eyebrow`) at 11–12px with letter-spacing.

### Punctuation & glyphs

- **Em dashes** (—) freely. **Commas** for breath, not Oxford religion.
- **No emoji** in product UI. Marketing site may use one carefully (e.g., `✦` as a section separator), never a face emoji.
- **Numbers** use real commas and currency symbols: `$1,284,902.40`, not `1.28M`. Use `K`/`M` only on charts.
- **Pulse is a proper noun.** Always capital P. Never "pulse commerce" lowercase.

### Examples

| ❌ Off-brand                                       | ✅ On-brand                                            |
| -------------------------------------------------- | ------------------------------------------------------ |
| "Welcome to Pulse! 🎉 Let's get started."         | "Welcome. Connect a store to begin."                   |
| "Our amazing analytics give you powerful insights" | "Revenue, attribution, and cohort metrics in one view" |
| "Oops! Something went wrong"                       | "We couldn't reach Stripe. Retry, or check connection." |
| "Submit"                                           | "Save changes" / "Create order" / "Refund $48.20"      |

### Microcopy patterns

- **Empty states:** one sentence of context + one verb-led CTA. ("No orders yet. Create one →")
- **Confirmations:** state outcome + reversibility. ("Refunded $48.20. The customer was emailed.")
- **Destructive:** name what will be deleted. ("Delete `Spring Drop` collection? 12 products will be unassigned.")

---

## VISUAL FOUNDATIONS

The visual system is **flat, hairline-driven, and quiet**. Pulse competes on operator efficiency, not visual flash. The dashboard is where merchants spend 6 hours a day; we earn that hour by being calm.

### Color

- **One accent.** Emerald `#059669` is the only chromatic color in the system. It marks: primary CTAs, the active item in nav, positive deltas in analytics, the logo mark, and links on hover. Everywhere else, neutrals.
- **Warm-cool slate neutrals** with a subtle green undertone (so emerald feels native, not bolted on).
- **Semantic colors** for state only — never decorative. Warning amber, danger red, info blue. Always paired with an icon and a tinted background, never a solid block.
- **No gradients** in product UI. Marketing may use one editorial gradient — emerald `→` ink — for feature heroes only.
- **Dark surfaces** are pure ink (`--ink-900`) not blue-black. Used for marketing footers, demo screenshots, terminal blocks. Dashboard is always light mode (dark mode is roadmap).

### Typography

- **Geist** is the primary face. Used at 13–14px in dashboards, 15–17px in marketing body, 30–84px in headlines.
- **Geist Mono** for any number that needs to align (tables, KPIs, codes, IDs) and for inline code.
- **Instrument Serif** is used **sparingly** — italic, on marketing only — to give one editorial moment per page (e.g., the word "*everything*" inside a headline). Never in product UI.
- **Tight tracking** on display sizes (`-0.02em`). Normal on body. Wide tracking only on tiny eyebrows.
- **Numerals** are tabular everywhere they're scanned vertically.

### Spacing

- **4px base.** Everything is a multiple of 4. The most-used values are 4, 8, 12, 16, 24, 32, 48.
- **Density:** dashboard rows are 40–48px tall. Marketing sections are 96–128px vertical padding.
- **Card interior:** 24px default, 16px on dense table-card hybrids.

### Backgrounds

- **Pure white** (`--bg`) is the default surface.
- **`--bg-subtle`** (`#F8FAF9`) is the page background under cards in the dashboard. Subtle enough that white cards just barely lift.
- **No textures.** No noise. No patterns. No hand-drawn illustrations.
- **Imagery** when present is **photographic, neutral-warm, low saturation** — product photography, store shots, light grain OK. Never stock-photo-people-laughing-at-laptop.
- **Marketing hero backgrounds** may use a single soft emerald-tinted radial gradient on white. Never wallpapered emerald.

### Borders

- **1px hairlines** are the primary structural device. `--border` (`#DCE2DF`) is the default; `--border-subtle` for inside cards; `--border-strong` for emphasis.
- Borders do almost all the work that shadows would in other systems.

### Shadows

- **Low and small.** `--shadow-sm` for cards on white. `--shadow-md` only on raised UI (popovers, dropdowns). `--shadow-lg`+ only for modals.
- **No colored shadows.** Always black @ 4–14% alpha.
- **No inner glows.** No emboss.

### Radii

- **8px** default control radius (buttons, inputs).
- **12px** card radius.
- **16–24px** for marketing feature panels and hero cards.
- **Full pill** (9999px) for chips, badges, avatars.
- **3–6px** for tight spaces (tags inside dense tables).

### Motion

- **Quick and restrained.** 80ms for instant feedback (button press), 150ms for state transitions (hover, focus), 250ms for layout (panel slide, modal in), 400ms only for page transitions.
- **`ease-out` is the default.** `ease-in-out` only for return trips.
- **No bounce. No spring.** Pulse is enterprise software; it doesn't sproing.
- **Reduced-motion respected** via `prefers-reduced-motion` — drops animation duration to 0ms, keeps state changes instant.

### Hover & press states

- **Buttons (primary):** hover darkens to `--pulse-700`, press to `--pulse-800`. No translate, no scale.
- **Buttons (ghost / tertiary):** hover sets `background: var(--bg-muted)`. No border change.
- **Links:** hover changes underline color from neutral to emerald, text color shifts to `--pulse-700`.
- **Icons / icon buttons:** hover background `--bg-muted`, no color change to the icon itself.
- **Press:** controls darken one step; very subtle `transform: translateY(0.5px)` on primary buttons only.

### Cards

- **Anatomy:** `1px solid var(--border)` + `var(--radius-lg)` + `var(--bg)` + optional `var(--shadow-sm)` when on `--bg-subtle`. Padding `var(--space-6)` (24px) by default.
- **Hover:** border deepens to `--border-strong`. No shadow change. Cursor only on truly clickable cards.
- **No gradient borders. No left-accent-color borders.** (That pattern is forbidden in Pulse.)

### Transparency & blur

- **Backdrop blur** allowed only on the dashboard top bar (when content scrolls under it) and on storefront sticky elements. `backdrop-filter: blur(12px)` + 80% bg.
- **Overlays** (modals, drawers): `rgba(20, 24, 26, 0.5)` scrim, no blur.
- **No glassmorphism cards.** No frosted hero panels.

### Layout rules

- **Sticky top bar** (56px) on dashboard.
- **Fixed sidebar** (240px) on dashboard, collapsible to 56px icon-only.
- **Marketing max width** 1280px content, 1440px hero.
- **Dashboard max width** none — uses full viewport above 1024px.

---

## ICONOGRAPHY

Pulse uses **Lucide** as its icon system. It matches the brand's stroke-based, modern-neutral aesthetic and is open-source / CDN-available.

- **Source:** [`lucide.dev`](https://lucide.dev) — load via `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>` and call `lucide.createIcons()` once after DOM mount.
- **Stroke weight:** 1.75px (the Lucide default `2` softened slightly for our typography). Set on the SVG via `stroke-width="1.75"`.
- **Sizes:** 14px (inline w/ body text), 16px (default UI), 20px (sidebar nav), 24px (toolbar), 32px+ (feature panels).
- **Color:** always `currentColor`. Inherits from parent text color. Active/selected nav icons inherit `--fg-accent` (emerald-700).
- **Never:** filled icons, two-tone icons, color-baked-in icons, or mixing icon sets.

> ⚠️ **Substitution flag:** Lucide is a substitution for a custom Pulse icon set. If/when a custom set is commissioned, swap the CDN script and update this section. The component code uses `<i data-lucide="...">` markers, so swapping is cheap.

### Logos

Located in `assets/`:

| File              | Use                                                            |
| ----------------- | -------------------------------------------------------------- |
| `logo.svg`        | Default — emerald mark + dark wordmark. Light backgrounds.     |
| `logo-light.svg`  | Light wordmark + lighter emerald mark. Dark backgrounds.       |
| `logo-mono.svg`   | All-ink wordmark + ink mark. Single-color print, embargo.      |
| `mark.svg`        | Square mark only (favicon, app icon, avatar slot).             |

- **Clear space:** equal to the height of the mark on all sides.
- **Minimum size:** wordmark 100px wide; mark 24px square.
- **Don't:** recolor the mark, place it on busy backgrounds, stretch, outline, or add effects.

### Emoji & unicode

- **Not used in product UI.**
- Acceptable in: marketing site as decorative separators (`✦`, `→`), changelog entries, support docs.
- Never in error messages, dashboard copy, or button labels.

---

## Tokens summary

All tokens live in `colors_and_type.css`. Use the **functional** tokens (`--fg`, `--bg`, `--border`, `--action`) in components, not the raw palette (`--pulse-600`). This makes future theming trivial.

```css
@import url('./colors_and_type.css');

.my-component {
  background: var(--bg);
  color: var(--fg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
}
```
