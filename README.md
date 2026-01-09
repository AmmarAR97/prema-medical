# Prema Medicals — Landing Site

A single-page, fast and accessible landing website for a local pharmacy in Karkala, India. Built with Vite + React 19, Tailwind CSS, Framer Motion, and lucide-react.

## Overview

- Single-page app with anchored sections: Home, Products, Features, Services, Location
- Smooth scrolling with header offset and scroll-aware navbar
- Responsive layout and motion-enhanced UI

## Tech Stack

- React 19 + Vite 5 (ESM)
- Tailwind CSS 3
- Framer Motion 12 (animations)
- lucide-react (icons)
- ESLint 9 (React hooks & refresh plugins)

## Project Structure

```
prema-medical/
├─ public/
│  ├─ images/                 # Product & brand images
│  └─ robots.txt
├─ src/
│  ├─ assets/                 # Local assets (if any)
│  ├─ components/
│  │  ├─ Navbar.jsx           # Fixed navbar, mobile menu (AnimatePresence)
│  │  ├─ Hero.jsx             # Top section with animated SVG/background blobs
│  │  ├─ Brands.jsx           # Brand logos grid
│  │  ├─ Products.jsx         # Product cards with staggered motion
│  │  ├─ Sections.jsx         # Named exports: Features, Services, Footer
│  │  └─ BackToTop.jsx        # Scroll-to-top accessible button
│  ├─ lib/utils.js            # cn() for className merging
│  ├─ App.jsx                 # Section composition and order
│  ├─ App.css                 # Global/overrides
│  ├─ index.css               # Tailwind base & fonts
│  └─ main.jsx                # App bootstrap
├─ index.html                 # Vite entry
├─ eslint.config.js           # ESLint config
├─ tailwind.config.js         # Tailwind theme (colors, fonts)
├─ postcss.config.js          # PostCSS/Tailwind pipeline
├─ vite.config.js             # Vite configuration
└─ README.md
```

## Architecture & Conventions

- Component order in `src/App.jsx`: Navbar → Hero → Brands → Products → Features → Services → Footer → BackToTop
- `Features`, `Services`, `Footer` are named exports from `src/components/Sections.jsx` (keeps composition centralized)
- Section anchors/IDs in use: `home`, `products`, `features`, `services`, `location` — each uses `scroll-mt-20`
- Utility: use `cn()` from `src/lib/utils.js` instead of string concatenation
- Icons: lucide-react only; mark decorative icons with `aria-hidden="true"`

## Accessibility

- Minimum 44×44px touch targets for interactive elements (navbar toggle, BackToTop)
- Icon-only buttons include `aria-label`
- External links include `target="_blank" rel="noopener noreferrer"`
- Semantic headings: h1 in Hero; h2 per section; h3/h4 for card titles

## Animations

- Framer Motion is used for entrance and scroll-in effects
- Preferred grid/list pattern (used in Products):

```jsx
<motion.div
	initial={{ opacity: 0, y: 20 }}
	whileInView={{ opacity: 1, y: 0 }}
	transition={{ delay: index * 0.1 }}
	viewport={{ once: true }}
>
```

## Assets

- Logo: `public/logo.svg`
- Product images: `public/images/*`

## Requirements

- Node.js 18+ and npm
- macOS, Linux, or Windows

## Getting Started

```bash
# Clone
git clone https://github.com/AmmarAR97/prema-medical.git
cd prema-medical

# Install
npm install

# Run dev server (Vite)
npm run dev
# Vite usually serves at http://localhost:5173
```

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview built assets locally
- `npm run lint` — run ESLint across the workspace

## Deployment

You can deploy with any static hosting provider. Common options:

### GitHub Pages
1. Build locally or via CI: `npm run build`
2. Publish the `dist/` folder to `gh-pages` (via GitHub Actions or `gh-pages` CLI)
3. Set Pages source to the `gh-pages` branch

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## ESLint & Styling

- ESLint config is in `eslint.config.js` (React hooks & refresh)
- Tailwind theme and fonts are in `tailwind.config.js` and `src/index.css`
- Use `cn()` for conditional classes; avoid raw string concatenation

## Notes for Future Work

- Add favicon and SEO meta tags
- Verify responsive layout across common breakpoints
- Configure CI to run `npm run lint` on PRs
- Consider adding a deployment workflow (Pages/Netlify/Vercel)

## Issue Tracking

See project tracking issue: https://github.com/AmmarAR97/prema-medical/issues/1

