# Module: Hero

**Status:** ✅ Complete  
**Components:** `HeroSection.vue`, `VisionSection.vue`  
**Data source:** Hardcoded (no external data file — content is static copy)

---

## Component Tree

```
HomePage.vue
├── HeroSection.vue      ← gradient banner + headline + CTA + buildings image
└── VisionSection.vue    ← "Our Vision" label + heading + truck/balloon image + body text
```

---

## HeroSection.vue

**File:** `FE/src/components/hero/HeroSection.vue`

### Visual Layout

```
┌─────────────────────────────────────────────────────────────┐
│  (blue gradient background)                                  │
│                                                              │
│       Measure and Reduce Your Logistics Carbon Footprint     │
│    Track emissions, gain real-time insights...               │
│                                                              │
│           [ Explore Sustainability Solutions > ]             │
│                                                              │
│   [  isometric buildings illustration — full width  ]        │
│                                                              │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ ← fade to white
└─────────────────────────────────────────────────────────────┘
```

### Background Gradient

```css
background: linear-gradient(160deg, #1a6fa8 0%, #2e8fc5 35%, #5ab4d6 65%, #a8d8ea 100%);
```

Transitions from deep blue (top-left) to light sky blue (bottom-right), matching the screenshot.

### CTA Button Style

- Semi-transparent white pill: `bg-white/20 border border-white/60`
- Hover: `bg-white/30`
- Backdrop blur: `backdrop-blur-sm`
- Has a right-pointing chevron SVG

### Bottom Fade

An absolutely-positioned `div` at the bottom of the section fades the gradient into `#f0f8ff` (the `brand-light` color), creating a seamless transition into the Vision section.

### Required Image

| Filename | Location | Description |
|---|---|---|
| `hero-buildings.png` | `/FE/public/img/` | Wide isometric grid of logistics buildings (warehouses, hubs, delivery vehicles). Recommended: ~1400×500px |

### Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| Mobile (`<sm`) | H1 at `text-3xl`, buildings image scales down |
| Tablet (`sm`) | H1 at `text-4xl` |
| Desktop (`lg+`) | H1 at `text-5xl`, full-width buildings at max 420px height |

---

## VisionSection.vue

**File:** `FE/src/components/vision/VisionSection.vue`

### Visual Layout

```
┌─────────────────────────────────────────────────────────────┐
│  (white background)                                          │
│                                                              │
│                    Our Vision                                │  ← teal label
│             Built for Measure Sustainability                 │  ← dark heading
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  [  GO-GENIE truck + balloon + trees illustration  ]  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│   At GO-GENIE®, sustainability starts with understanding...  │
└─────────────────────────────────────────────────────────────┘
```

### Typography

| Element | Class |
|---|---|
| "Our Vision" label | `text-brand-teal text-sm font-semibold uppercase tracking-widest` |
| H2 heading | `text-3xl sm:text-4xl font-bold text-text-dark` |
| Body paragraph | `text-text-muted text-base sm:text-lg leading-relaxed` |

### Required Image

| Filename | Location | Description |
|---|---|---|
| `vision-truck-balloon.png` | `/FE/public/img/` | 3D scene: blue GO-GENIE delivery truck on road, green hot air balloon with recycle symbol, trees. Recommended: ~900×400px |

---

## Image Placement Summary

All images go in `/FE/public/img/`. Vite serves this folder at the root `/` URL at runtime — no build-time resolution required.

| File | Used by |
|---|---|
| `hero-buildings.png` | `HeroSection.vue` |
| `vision-truck-balloon.png` | `VisionSection.vue` |

---

## Future Backend Integration Notes

- The hero headline and CTA text could be driven by a CMS (e.g. Contentful, Strapi).
- Replace hardcoded strings with a `useHeroStore()` Pinia store that fetches from `GET /api/content/hero`.
- The CTA button `href="#"` should route to `/solutions` once Vue Router is added.
