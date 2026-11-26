# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio built with React 18 + TypeScript + Vite, MUI v5 for components/theme, and SCSS for layout and custom styling. Deployed as static assets to Cloudflare Workers. Requires Node.js 24 (`.nvmrc`).

## Commands

- `npm start` / `npm run dev` — Vite dev server on http://localhost:3000
- `npm run build` — type-check (`tsc --noEmit`) then build to `build/` (not `dist/`)
- `npm run lint` — ESLint (flat config, typescript-eslint + react-hooks)
- `npm run preview` — serve the production build
- `npm run deploy` — build + `wrangler deploy` (wrangler is not a devDependency). `wrangler.jsonc` serves `./build` with SPA not-found handling.

## Architecture

**Data is separate from components.** To change content, edit data, not JSX:
- `src/config/portfolio.ts` — identity (name, title, email, portrait), social links, nav sections (`sections` ids are used by both the nav and the `<section id>`s), SEO specialties. Must stay plain data with no React/MUI/style imports, because the build imports it too.
- `src/data/{expertise,experience,projects}.ts` — section content as typed arrays; components map over them.

**Build-time SEO** — `vite-plugin-seo.ts` generates `<title>`, meta/OG/X tags, JSON-LD, the `<noscript>` fallback, and `manifest.json` / `robots.txt` / `sitemap.xml` (served by middleware in dev, emitted on build) from `portfolio.ts`. `index.html` holds only static tags; there is no `public/` directory. Head tags are appended (`injectTo: "head"`) to keep `<meta charset>` in the first 1024 bytes.

**Theming (MUI ↔ SCSS contract)** — `src/theme/palette.ts` defines colours per mode; `src/theme/theme.ts` builds the MUI theme and, via `MuiCssBaseline`, emits them as `--pf-*` CSS custom properties. SCSS never hardcodes mode colours: it uses `var(--pf-*)` and the `ink($alpha)` helper (text colour at an opacity) from `src/styles/_tokens.scss`. There are no `.dark-mode`/`.light-mode` classes. MUI component colours (inputs, buttons, paper) are set in the theme, not SCSS. `StyledEngineProvider injectFirst` (in `main.tsx`) lets SCSS override MUI without `!important`. Mode lives in `App.tsx` and is persisted to `localStorage` (`color-mode`).

**Layout** — `Section` gives every content section its gutters (`gutter()` mixin: 10% / 5% below 768px, capped at `$content-max`), heading and lede. Shared pieces: `SocialLinks` (icons keyed by `SocialId`), `TagList`, `FadeIn` (CSS-only staggered animation, disabled under reduced motion). The career timeline uses `react-vertical-timeline-component`; `src/styles/timeline.scss` refines its CSS (the library switches to two columns at 1170px).

**Contact form** — `src/services/contact.ts` posts to EmailJS's REST endpoint with `fetch` (no SDK). Template params `from_name`, `contact_info`, `title`, `message`, `name` must match the EmailJS template.

## Environment

Only deployment-specific public values live in env (`.env.example`): `VITE_SITE_URL` (build-time only, read in `vite.config.ts`) and the three `VITE_EMAILJS_*` IDs. They are baked in at build time; in production they are set in Cloudflare. Process env takes priority over `.env` files (Vite's `loadEnv`).
