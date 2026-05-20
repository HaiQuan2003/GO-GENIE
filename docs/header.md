# Module: Header

**Status:** ✅ Complete  
**Components:** `AppHeader.vue`, `NavDropdown.vue`, `LanguageSwitcher.vue`  
**Data source:** `/data/navigation.json`

---

## Component Tree

```
AppHeader.vue
├── NavDropdown.vue  (×4 — one per nav item)
└── LanguageSwitcher.vue
```

---

## AppHeader.vue

**File:** `FE/src/components/header/AppHeader.vue`

The sticky top navigation bar. Renders on all pages via `DefaultLayout.vue`.

### Layout (Desktop ≥1024px)

```
[ GO-GENIE logo ]  [ Services ▾ ] [ Solutions ▾ ] [ About ▾ ] [ Help & Guides ▾ ]  [ Track Your Parcel ] [ Sign In ] [ 🇬🇧 EN ▾ ]
```

### Behaviour

| Element | Behaviour |
|---|---|
| Logo | Plain text `GO-GENIE`, white, bold. Links to `/`. |
| Nav items | Rendered from `navigation.json`. Each wraps a `NavDropdown`. |
| Track Your Parcel | Outlined white button. Hover: fills white, text turns `brand-blue`. |
| Sign In | Ghost text link. |
| Language Switcher | Flag image + "EN" + chevron. Static — no actual switching. |
| Mobile | Hamburger icon visible below `lg` breakpoint. Panel not yet implemented (static phase). |

### Styling

- Background: `bg-brand-blue` (`#2E86C1`)
- Height: `h-16` (64px)
- Position: `sticky top-0 z-40`
- Max width container: `max-w-7xl mx-auto`

---

## NavDropdown.vue

**File:** `FE/src/components/header/NavDropdown.vue`

Reusable dropdown component. Accepts a `label` (string) and `items` (array) prop.

### Props

| Prop | Type | Description |
|---|---|---|
| `label` | `String` | The nav item text (e.g. "Services") |
| `items` | `Array` | Array of `{ title, description, icon, hasArrow? }` objects |

### Item Shape (from navigation.json)

```json
{
  "title": "Delivery",
  "description": "Fast and accurate order processing",
  "icon": "icon-delivery.png",
  "hasArrow": false
}
```

### Behaviour

- **Trigger:** `mouseenter` opens, `mouseleave` closes (with 120ms delay to allow cursor travel into panel)
- **Chevron:** Rotates 180° when open via `rotate-180` Tailwind class + `transition-transform`
- **Panel animation:** Fade + slide up via Vue `<Transition>` component
- **Image fallback:** If icon image not yet placed, `onImgError` sets opacity to 0.3 gracefully

### Dropdown Panel Styling

- Background: `white`
- Border radius: `rounded-xl`
- Shadow: `shadow-xl`
- Min width: `260px`
- Position: `absolute top-full left-0`
- Z-index: `z-50`

### Expected Icon Images (place in `/FE/src/assets/img/`)

| Dropdown | Filename |
|---|---|
| Services → Delivery | `icon-delivery.png` |
| Services → Warehousing | `icon-warehousing.png` |
| Services → Fulfilment | `icon-fulfilment.png` |
| Solutions → Merchant | `avatar-merchant.png` |
| Solutions → Service Provider | `avatar-service-provider.png` |
| Solutions → Gig Worker | `avatar-gig-worker.png` |
| About → GO-GENIE® | `icon-about-gogenie.png` |
| About → Our Ecosystem | `icon-ecosystem.png` |
| About → Sustainability | `icon-sustainability.png` |
| About → Newsroom | `icon-newsroom.png` |
| Help & Guides → Help Center | `icon-help-center.png` |
| Help & Guides → Contact Us | `icon-contact.png` |

---

## LanguageSwitcher.vue

**File:** `FE/src/components/header/LanguageSwitcher.vue`

Static language display. Shows UK flag + "EN" text + chevron.

### Expected Image

| Filename | Description |
|---|---|
| `flag-en.png` | UK/English flag, ~20×16px |

---

## Future Backend Integration Notes

- The `navItems` array is currently imported from a static JSON file.
- For dynamic nav (e.g. CMS-driven), replace the JSON import in `AppHeader.vue` with a Pinia store action that fetches from `GET /api/navigation`.
- The language switcher should dispatch a locale change action to a `useI18nStore()` store.
