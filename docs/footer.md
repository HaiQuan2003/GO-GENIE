# Module: Footer

**Status:** ✅ Complete  
**Components:** `AppFooter.vue`, `FooterAwards.vue`  
**Data source:** `/data/footer.json`

---

## Component Tree

```
AppFooter.vue
└── FooterAwards.vue
```

---

## AppFooter.vue

**File:** `FE/src/components/footer/AppFooter.vue`

### Layout (Blue Section)

```
┌─────────────────────────────────────────────────────────────┐
│  GO-GENIE                                                    │  ← white bold logo text
│  ─────────────────────────────────────────────────────────  │
│  Services    Solutions    About    Help & Guides  Quick Links│  ← 5-col link grid
│  Last-Mile   Merchants    GO-GENIE® Help Center  Privacy     │
│  Warehousing Service Prov Our Eco  Contact Us    Terms       │
│  Fulfilment  Gig Workers  Sustain               Data Ret.    │
│                           Newsroom                           │
│  ─────────────────────────────────────────────────────────  │
│  SG Address: ...    VN Address: ...    Follow us: f in tt x  │
└─────────────────────────────────────────────────────────────┘
```

### Styling
- Background: `bg-brand-blue`
- Link text: `text-white/75`, hover: `text-white`
- Column headings: `text-white font-semibold`
- Dividers: `border-white/20`

### Data
Columns are driven from `/data/footer.json` → `columns` array. Each column has `heading` and `links[]`.

### Social Icons
Currently rendered as letter-abbrev circles (`f`, `in`, `tt`, `x`) in `bg-white/20` rounded buttons. Replace with actual icon images or an icon library when available.

---

## FooterAwards.vue

**File:** `FE/src/components/footer/FooterAwards.vue`

### Layout (White Section)

```
┌─────────────────────────────────────────────────────────────┐
│  Awards and Recognition          [SPBA logo] [BfG] [SCCCI] [SBF]│
│  • Brands For Good 2025                                      │
│  • SPBA 2025 – Promising Brands                              │
│  • SPBA 2025 – Transformation Efforts                        │
│                                                              │
│  Business Chambers                                           │
│  • Member of SCCCI                                           │
│  • Member of SBF                                             │
│  ─────────────────────────────────────────────────────────  │
│              © 2026 GO-GENIE® All Rights Reserved.           │
└─────────────────────────────────────────────────────────────┘
```

### Image Assets

| File | Used for | Notes |
|---|---|---|
| `transformation efforts - promising brands - gold.png` | SPBA 2025 award logo | Gold award badge, `h-24` |
| `brandsforgood.png` | Brands for Good logo | Teal serif text logo, `h-14` |
| `logo_vertical.png` | SCCCI logo | Red globe emblem, `h-14` |
| SBF | Text fallback (`SBF.`) | No image provided — rendered as styled text |

---

## Future Backend Integration Notes

- Footer links should be driven by `GET /api/navigation/footer` for CMS control.
- Social icon `href="#"` values should be replaced with real social profile URLs stored in a config or CMS.
- Copyright year can be made dynamic: `© {{ new Date().getFullYear() }} GO-GENIE®`.
