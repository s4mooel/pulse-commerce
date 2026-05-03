---
name: pulse-design
description: Use this skill to generate well-branded interfaces and assets for Pulse Commerce, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files to know:
- `colors_and_type.css` — all design tokens. Import this from any HTML file.
- `assets/` — logos and brand marks.
- `ui_kits/marketing/`, `ui_kits/dashboard/`, `ui_kits/storefront/`, `ui_kits/admin/` — high-fidelity reference implementations of each surface. Copy components from these.
- `preview/` — small spec cards for each token / component. Useful for grokking the system fast.
