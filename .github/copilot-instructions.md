# Prema Medicals — AI Coding Instructions

Concise, actionable conventions for AI agents working in this repo. Document only what’s present in code today.

## Overview
- Single-page landing site for a local pharmacy (Karkala, India)
- Stack: Vite + React 19 + Tailwind CSS + Framer Motion + lucide-react
- Entry and layout: see [src/App.jsx](src/App.jsx)

## Architecture
- Components loaded in order: `Navbar` → `Hero` → `Brands` → `Products` → `Features` → `Services` → `Footer` → `BackToTop` (see [src/App.jsx](src/App.jsx)).
- `Features`, `Services`, `Footer` are named exports from [src/components/Sections.jsx](src/components/Sections.jsx) rather than separate files.
- Section anchors: IDs in use — `home`, `products`, `features`, `services`, `location`. All sections apply `scroll-mt-20` to offset the fixed navbar.
- Navigation: `Navbar` implements scroll-aware styling and a mobile menu with `AnimatePresence` (see [src/components/Navbar.jsx](src/components/Navbar.jsx)). Mobile links smooth-scroll with a header offset.

## Styling & Utilities
- Tailwind theme: custom colors and fonts defined in [tailwind.config.js](tailwind.config.js); Google Fonts loaded in [src/index.css](src/index.css).
- Utility: use `cn()` from [src/lib/utils.js](src/lib/utils.js) to merge conditional classNames.
  Example: `className={cn("base", condition && "variant")}`.
- Common patterns:
  - Cards: `rounded-2xl border border-secondary/20 shadow-md hover:shadow-xl`
  - Buttons: `rounded-full bg-primary hover:bg-primary-dark text-white`
  - Section padding: `py-16`/`py-20`; Container: `container mx-auto px-4 md:px-6`

## Animation
- Framer Motion is used for entrance and scroll-in animations.
- Preferred pattern for grids/lists (see [src/components/Products.jsx](src/components/Products.jsx)):
  ```jsx
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
  ```
- `Hero` uses animated SVG paths and ambient blobs for background motion (see [src/components/Hero.jsx](src/components/Hero.jsx)).

## Icons
- Use `lucide-react` exclusively; mark decorative icons with `aria-hidden="true"`.
- Example: `import { MapPin } from "lucide-react"` then `<MapPin size={16} className="text-primary" aria-hidden="true" />`.

## Accessibility
- Minimum 44×44px touch targets for interactive elements (see `Navbar` toggle and `BackToTop`).
- Include `aria-label` for icon-only buttons; set external links with `target="_blank" rel="noopener noreferrer"`.
- Semantic headings: h1 in `Hero`; h2 per section; h3/h4 for card titles.

## Assets
- Logo: `/public/logo.svg`.
- Product images under `/public/images/`. Existing cards reference filenames like `*_premium.png` (see [src/components/Products.jsx](src/components/Products.jsx)).

## Workflows
- Scripts (see [package.json](package.json)):
  - `npm run dev` → start Vite dev server
  - `npm run build` → production build
  - `npm run preview` → preview built assets
  - `npm run lint` → run ESLint on the workspace
- ESLint config: [eslint.config.js](eslint.config.js) with React plugins; no TypeScript.

## Implementation Notes
- Prefer adding new sections as named exports in `src/components/Sections.jsx` to keep composition consistent with [src/App.jsx](src/App.jsx).
- When adding scroll anchors, include `scroll-mt-20` and update `Navbar` links as needed.
- Reuse `cn()` for class composition; avoid raw string concatenation.
- For map/location embeds, follow the `iframe` pattern in `Services` including `title`, `loading="lazy"`, and responsive height.

## External Dependencies
- React 19, Framer Motion, lucide-react, Tailwind CSS, `clsx` + `tailwind-merge` for `cn()`.
- Fonts: Inter and Poppins via Google Fonts in [src/index.css](src/index.css).

If anything above is unclear or incomplete, tell us what you need more detail on (e.g., adding a new section/card, modifying navbar behavior), and we’ll refine these instructions.
