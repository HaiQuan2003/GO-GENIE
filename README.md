# GO-GENIE® — Project Root

Logistics carbon footprint tracking platform. Static UI frontend built with Vue 3, Vite, and Tailwind CSS.

## Project Structure

```
/project-root
├── /FE          → Frontend (Vue 3 + Vite + Tailwind CSS)
├── /BE          → Backend (placeholder — future Node.js / API integration)
├── /data        → Mock JSON data consumed by frontend components
└── README.md    → This file
```

## Module Documentation

| Module | File | Status |
|---|---|---|
| Header | [docs/header.md](./docs/header.md) | ✅ Complete |
| Hero | [docs/hero.md](./docs/hero.md) | ✅ Complete |
| Features | [docs/features.md](./docs/features.md) | ✅ Complete |
| Footer | [docs/footer.md](./docs/footer.md) | ✅ Complete |

## Tech Stack

- **Vue 3** — Composition API, `<script setup>` syntax
- **Vite 5** — Dev server and bundler
- **Tailwind CSS 3** — Utility-first styling with custom brand tokens
- **Inter** — Primary font (Google Fonts)

## Data Files

| File | Purpose |
|---|---|
| `/data/navigation.json` | Nav items and dropdown content for the header |
| `/data/features.json` | All feature section content (cards, headings, CTAs) |
| `/data/footer.json` | Footer columns, addresses, social links, awards |

## Brand Tokens

| Token | Hex | Usage |
|---|---|---|
| `brand-blue` | `#2E86C1` | Header, footer, primary buttons |
| `brand-teal` | `#17A589` | Accent headings, highlights |
| `brand-light` | `#EBF5FB` | Alternate section backgrounds |
| `text-dark` | `#1A252F` | Headings |
| `text-muted` | `#5D6D7E` | Body / description text |

## Getting Started

```bash
cd FE
npm install
npm run dev
```

## Image Assets

Place all image files in `/FE/src/assets/img/`. See each module's `.md` doc for the expected filenames.
