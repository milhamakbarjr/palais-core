# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

`palais-core` is a TanStack Start app (React 19, Vite 8, Nitro SSR) being built as a recreation of [palais.bio](https://www.palais.bio/). The repo bundles three things:

1. **The TanStack Start app** — `src/`, `public/`, `vite.config.ts`. The runtime.
2. **Figma design audit artifacts** — Markdown audits + a `figma-export/` tree of SVG/PNG assets extracted from the live site, plus a `fonts/` tree of `.ttf` files for the 5 brand fonts. Used as the design source of truth when implementing UI.
3. **`prototype/`** — a standalone HTML clone of palais.bio served via `python3 -m http.server`. Not part of the build; treat it as a visual reference only.

## Commands (uses Bun)

```bash
bun install                    # install
bun --bun run dev              # vite dev on :3000
bun --bun run build            # production build
bun --bun run preview          # preview built app
bun --bun run test             # vitest run (single shot)
bun --bun run test -- <pattern>  # filter to specific tests
bun --bun run check            # biome check (lint + format + organize imports)
bun --bun run lint
bun --bun run format
bun --bun run generate-routes  # tsr generate (only needed outside dev — the router plugin regenerates on save during dev)
```

Production deploy: Nitro emits a self-contained Node server at `dist/server/index.mjs`. For host-specific presets see https://v3.nitro.build/deploy.

## Architecture

### Routing — file-based, auto-generated

- Routes live in `src/routes/`. The root layout is `src/routes/__root.tsx` (defines `<html>`, head, devtools).
- **`src/routeTree.gen.ts` is generated. Never edit it.** It's marked read-only in `.vscode/settings.json` and excluded from Biome (`!**/src/routeTree.gen.ts` in `biome.json`). The TanStack router-plugin regenerates it on file changes during `vite dev`; outside dev, run `bun --bun run generate-routes`.
- `src/router.tsx` instantiates the router with `defaultPreload: 'intent'` and SSR types via the `Register` augmentation.

### Server code lives inside route files

- **Server functions:** use `createServerFn` from `@tanstack/react-start` in any module — these execute server-only and are called from components.
- **API routes:** define a route file with a `server.handlers.GET/POST/...` object (no separate `api/` directory). The route's path is its URL.
- Both patterns are shown in `README.md`.

### Path aliases

Both `#/*` and `@/*` resolve to `./src/*` (configured in `tsconfig.json` paths + `package.json` `imports`). Prefer one consistently within a file.

### Styling — Tailwind v4

- Single global stylesheet at `src/styles.css` imports Tailwind via `@import "tailwindcss"` (v4 single-import API, no `tailwind.config.js`).
- Tailwind is wired through `@tailwindcss/vite` in `vite.config.ts`.
- `@tailwindcss/typography` is installed.

## Biome conventions

- **Indent: tabs.** **Quotes: double.** `organizeImports: on` runs on save. The recommended ruleset is enabled.
- `src/styles.css` and `src/routeTree.gen.ts` are excluded from Biome — don't try to format them.
- VS Code is preconfigured to use Biome as the default formatter for JS/TS/JSON/CSS.

## Design references (use when implementing UI)

When building UI components that map to palais.bio sections, **`CORRECTED_AUDIT.md` is the source of truth**. Read it before touching design files — it contains the accurate Figma structural map and per-section gap list.

Older audit files exist but are explicitly superseded:

| File | Status |
|---|---|
| `CORRECTED_AUDIT.md` | ✅ Use this |
| `SECTION_AUDIT.md` | ⚠️ Superseded (banner at top) |
| `SECTION_3_BUILD_SPEC.md` | ⚠️ Deprecated — was based on a wrong structural assumption |
| `BUILD_SPECS.md` | ⚠️ Partially deprecated — per-element measurements (font sizes, hex colors, button radii) still accurate as reference |
| `DESIGN_SPEC.md` | ✅ Brand-level reference (typography tokens, color tokens, asset inventory) |

### Brand tokens (when wiring into Tailwind theme / CSS variables)

```
cobalt   #234386   primary brand
orange   #F08D52   accent (recipe slider, MEET US / DISCOVER buttons)
green-banner  #67B988   Pa'lais Spreads banner bg
yellow-banner #FEC601   Pa'lais Cuisine banner bg + "So vegan" bubble
mint-wave     #A2D3A6   newsletter green wave
pink-wave     #F5C8D2   "You are Pa'lais" right-side wave
blue-panel    #6FABDF   Finder + Questions blue panels
```

### Brand fonts

Located at `./fonts/*.ttf`. To use in the app, wire them in via `@font-face` in `src/styles.css`. Mapping:

| Role | Font file |
|---|---|
| Hero / chunky display | `Sandman_Fill-210122.ttf` |
| Wood-type display (banner H3s, recipe titles) | hwt-artz (Adobe Fonts — not redistributable; substitute with Rye / Bungee Shade if Typekit isn't available) |
| Handwritten flourishes | `DeliveryNoteDEMO-Regular.ttf` (demo / personal-use only) |
| Body | `ITCAvantGardeStd-Bk.ttf` |
| UI / button labels | `SonderSans-BlackRough.ttf` (also `Rough` + `BoldRough` variants) |
| Secondary UI | `Axiforma-Regular.ttf`, `Axiforma-ExtraBold.ttf` |

Several of these are commercial fonts. They're fine for local dev / Figma comps; production deployment requires the appropriate licenses.

### Design assets

`figma-export/assets/` — 51 SVG/PNG illustrations from palais.bio organized by section folder (`HeroSection/`, `IntroSection/`, `HomePage/`, `Slider/`, `Community/`, `SaucyChoice/`, `SignUpSection/`, `Socials/`, `ICONS/`, `Brand/`, `Dietary/`, `HomePage_raster/`, `SignUpSection_raster/`). Plus `figma-export/assets/RecipePhotos/` for food photos. Drop these into `public/` or import via Vite when implementing components.

## Testing

Vitest + jsdom + React Testing Library (`@testing-library/react`, `@testing-library/dom`). No test config file — Vitest uses defaults. Tests live alongside source files (or `src/**/*.test.tsx`).
