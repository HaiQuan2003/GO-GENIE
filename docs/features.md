# Module: Features

**Status:** ✅ Complete  
**Components:** `CarbonTrackingSection.vue`, `SustainabilitySection.vue`, `ReportingSection.vue`, `CtaSection.vue`  
**Data source:** Hardcoded (content matches `/data/features.json` for future CMS integration)

---

## Component Tree

```
HomePage.vue
├── CarbonTrackingSection.vue   ← 3-card grid + Book A Demo
├── SustainabilitySection.vue   ← 3-col illustration grid
├── ReportingSection.vue        ← 3 stacked horizontal cards
└── CtaSection.vue              ← city map + CTA button
```

---

## CarbonTrackingSection.vue

**Background:** `bg-brand-light` (`#EBF5FB`)

### Layout
- Centered heading block (H2 + teal accent line + subtitle)
- 3-column card grid (`md:grid-cols-3`)
- Each card: icon box (rounded, colored bg) + title + description
- "Book A Demo" outlined pill button centered below

### Icons
| Card | Icon type | Source |
|---|---|---|
| Optimise Delivery Routes | Inline SVG lightning bolt | `text-brand-blue` |
| Monitor Environmental Impact | Image | `visual_monitor enviromental impact.png` |
| Achieve Sustainability Goals | Inline SVG house | `text-yellow-500` |

> Note: Simple icon SVGs are inline (not complex illustrations). Only the monitor card uses an image asset.

---

## SustainabilitySection.vue

**Background:** `bg-white`

### Layout
- Centered heading block
- 3-column grid (`md:grid-cols-3`), each column: image (136×136px) + title + description

### Image Assets

| Column | File | Description |
|---|---|---|
| Data-Driven Insights | `visual_environmental impact_1.png` | Teal folder with charts + magnifier |
| Scalable Solutions | `visual_green fleet.png` | Blue electric delivery truck |
| Real Impact | `upscale_image[Upscaled3].png` | 3D green earth + tree + clouds |

All images use `drop-shadow-md` for depth. Black backgrounds on source images are transparent in-browser due to PNG alpha.

---

## ReportingSection.vue

**Background:** `bg-brand-light`

### Layout
- Centered heading block
- 3 stacked horizontal cards (full width, `flex-row`)
- Each card: text (left) + illustration image (right, `h-32`)

### Image Assets

| Card | File | Description |
|---|---|---|
| Track Progress | `masterAgent_laptop.png` | 3D man waving with laptop |
| Generate Reports | `upscale_image[Upscaled2].png` | 3D man in chair + cloud upload + server |
| Showcase Achievements | `upscale_image[Upscaled1].png` | 3D man on rocket + bar chart |

---

## CtaSection.vue

**Background:** `bg-white`

### Layout
- Wide isometric city map image (centered, max-width 2xl)
- White card overlapping the bottom of the image (`-mt-6 z-10`)
- Card contains: H2 + teal accent + subtitle + tagline + solid blue CTA button

### Image Asset

| File | Description |
|---|---|
| `ecosystem_sep2025.png` | Dark isometric city map with GO-GENIE control tower, warehouses, delivery trucks |

---

## Image Utility

All images are resolved via `@/composables/useAsset.js`:

```js
import { getAsset } from '@/composables/useAsset'
const src = getAsset('filename.png')
// → resolves to src/assets/img/filename.png via Vite's import.meta.url
```

This pattern works correctly with Vite's asset pipeline and supports hashed filenames in production builds.

---

## Future Backend Integration Notes

- Feature card content (titles, descriptions) should come from `GET /api/content/features`.
- CTA button should route to `/contact` once Vue Router is added.
- The `getAsset()` utility can be replaced with a CDN URL resolver for production image hosting.
