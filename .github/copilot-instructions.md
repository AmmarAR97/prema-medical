# Prema Medicals - AI Coding Instructions

## Project Overview
Single-page React landing site for a local pharmacy in Karkala, India. Built with Vite + React 19 + Tailwind CSS + Framer Motion.

## Architecture

### Component Structure
```
App.jsx          → Layout wrapper, imports all sections
├── Navbar       → Fixed header with scroll-aware styling
├── Hero         → Full-screen hero with animated background blobs
├── Brands       → Partner brand showcase (text-only logos)
├── Products     → 6-card product grid with hover effects
├── Features     → 4-card "Why Choose Us" grid
├── Services     → 2-column services + embedded Google Map
├── Footer       → 4-column footer with contact info
└── BackToTop    → Scroll-triggered floating button
```

### Key Patterns

**Utility Function:** Always use `cn()` from [src/lib/utils.js](src/lib/utils.js) for conditional Tailwind classes:
```jsx
import { cn } from "../lib/utils";
className={cn("base-classes", condition && "conditional-classes")}
```

**Animation Pattern:** Use Framer Motion with `whileInView` for scroll-triggered animations:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  viewport={{ once: true }}
>
```

**Section IDs:** All sections have `scroll-mt-20` for navbar offset. Use `id="sectionname"` for navigation anchors.

## Design System (tailwind.config.js)

### Custom Colors
- `primary` / `primary-light` / `primary-dark`: Medical green (#2E7D32)
- `secondary` / `secondary-dark`: Soft blue (#E3F2FD)
- `charcoal` / `charcoal-light` / `charcoal-lighter`: Text colors (#263238)

### Typography
- Headings: `font-heading` (Poppins)
- Body: `font-sans` (Inter)
- Section titles: `text-4xl md:text-5xl font-heading font-bold`

### Common Patterns
- Cards: `rounded-2xl border border-secondary/20 shadow-md hover:shadow-xl`
- Buttons: `rounded-full bg-primary hover:bg-primary-dark text-white`
- Section padding: `py-16` or `py-20`
- Container: `container mx-auto px-4 md:px-6`

## Icons
Use **lucide-react** exclusively. Always include `aria-hidden="true"` on decorative icons:
```jsx
import { MapPin, Phone, Clock } from "lucide-react";
<MapPin size={16} className="text-primary" aria-hidden="true" />
```

## Static Assets
- Images: `/public/images/` (product images with `_premium.png` suffix)
- Logo: `/public/logo.svg` (medical cross with leaf design)

## Commands
```bash
npm run dev      # Start dev server (Vite)
npm run build    # Production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Known Issues (see SENIOR_UI_UX_REVIEW.md)
Active UI/UX review document tracks contrast issues and typography inconsistencies. Check before making visual changes.

## Accessibility Requirements
- All interactive elements need minimum 44x44px touch targets on mobile
- Include `aria-label` on icon-only buttons
- External links need `target="_blank" rel="noopener noreferrer"`
- Use semantic heading hierarchy (h1 in Hero, h2 for sections, h3/h4 for cards)
