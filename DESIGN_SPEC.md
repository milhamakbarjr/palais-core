# Pa'lais.bio — Design Reference Spec

Source: https://www.palais.bio/ (captured 2026-06-15, viewport 1281×1170 @2x DPR)
Built on: WordPress (custom theme "palais" by atelierdesign.be)

Full-page screenshot: `palais-fullpage.jpeg`
Raw captures: `palais-meta.json`, `palais-typography.json`

---

## 1. Brand Meta

| Field | Value |
|---|---|
| Site title | Pa'lais \| The Plant Kitchen \| Plant-based & organic spread cheeses and creamy sauces |
| Tagline / niche | Vegan spread-cheeses and sauces — lactose/gluten/soy/sugar/additive-free |
| Primary brand color | `#234386` (deep cobalt blue) — used for ALL headlines, body, accents |
| Secondary theme-color (meta) | `#234386` set as `<meta name="theme-color">` |
| Languages | EN / FR / NL / DE |
| Social | Facebook, Instagram, LinkedIn |

---

## 2. Typography System

The site mixes **5 custom display/text fonts plus 1 Adobe Typekit font** — a deliberately playful, hand-drawn editorial mix. This is the most distinctive part of the visual identity. Recreate it carefully.

### 2.1 Font Inventory

All self-hosted fonts have been downloaded into `./fonts/` in both `.woff2` (original) and `.ttf` (for OS install). Install the `.ttf` files via macOS Font Book — then quit & relaunch Figma desktop so it re-scans system fonts.

| Font | Role | Local file (install this) |
|---|---|---|
| **Sandman Fill** | Hero/H2 display — chunky filled script | `./fonts/Sandman_Fill-210122.ttf` |
| **hwt-artz** | H1 / H3 / large editorial titles — wood-type sans | **NOT downloadable** — Adobe Typekit only. Activate via Figma → Account Settings → Sync Adobe Fonts, then search "HWT Artz". |
| **Delivery Note DEMO** | Handwritten accents (timings "25 min", section labels like "The future of cooking") | `./fonts/DeliveryNoteDEMO-Regular.ttf` |
| **Sonder Sans Black Rough** | UI labels / nav / buttons / small caps | `./fonts/SonderSans-BlackRough.ttf` |
| **Sonder Sans Rough / Bold Rough** | Secondary UI weights | `./fonts/SonderSans-Rough.ttf`, `./fonts/SonderSans-BoldRough.ttf` |
| **ITC Avant Garde Std Bk** | Long-form body copy paragraphs | `./fonts/ITCAvantGardeStd-Bk.ttf` |
| **Axiforma** (Regular + ExtraBold) | Secondary UI / forms | `./fonts/Axiforma-Regular.ttf`, `./fonts/Axiforma-ExtraBold.ttf` |
| Clearface (Bold) | Declared in @font-face but not used on home page — keep for other pages | `./fonts/Clearface-Bold.ttf` |

> **Licensing reminder:** these are commercial fonts. Installation on your own machine for design work is standard practice, but production/deployment use requires proper licenses. `DeliveryNoteDEMO` is the demo (personal-use only) version.

### 2.2 Typography Roles (measured)

| Role | Font | Size / LH | Weight | Letter-spacing | Color | Transform |
|---|---|---|---|---|---|---|
| H1 hero ("Grow your plant kitchen") | Sandman_Fill | 73 / 54 | 400 | normal | `#234386` | none |
| H1 secondary ("Incredible recipes…") | hwt-artz | 72 / 56 | 400 | normal | `#FFFFFF` | none |
| H2 "The future of cooking" | Delivery Note DEMO | 50 / 44 | 400 | normal | `#234386` | none |
| H2 large script ("Spready, saucy…", "You are Pa'lais") | Sandman_Fill | 72 / 47.5–56 | 400 | normal | `#234386` | none |
| H2 sub headline (newsletter copy) | hwt-artz | 33 / 39 | 400 | normal | `#234386` | none |
| H3 section title ("Pa'lais Spreads", "Pa'lais Cuisine") | hwt-artz | 46 / 40 | 400 | normal | `#FFFFFF` | none |
| H3 banner title ("PA'LAIS FINDER", "Got any questions?") | hwt-artz | 46 / 46 | 400 | 2px | `#FFFFFF` | none (rendered uppercase by content) |
| H3 sub-label ("MENU", "STORE LOCATOR", "CONTACT PA'LAIS") | Sonder Sans Black Rough | 16 | 400 | 1.6px | `#FFFFFF` | uppercase |
| Recipe card title | hwt-artz | 32 | 400 | normal | `#FFFFFF` | none |
| Body / intro paragraph | ITC Avant Garde Std Bk | 24 / 40 | 400 | 3.2px | `#234386` | none |
| Recipe meta ("25 min") | Delivery Note DEMO | 16 | 400 | normal | `#234386` | none |
| Nav links (top, primary) | Sonder Sans Black Rough | 12 | 400 | 1.6px | `#FFFFFF` | none |
| Lang switcher (active) | Sonder Sans Black Rough | 12 | 400 | 1.6px | `#FFFFFF` | uppercase |
| Lang switcher (inactive) | Sonder Sans Black Rough | 14 | 600 | 2px | `#234386` | uppercase |
| Buttons (REJECT/ACCEPT cookie + CTAs) | Sonder Sans Black Rough | 14 / 14–18 | 400 | 1.6px | `#234386` / `#FFFFFF` | (content uppercase) |

> **Rule of thumb:** Display = `Sandman_Fill` (filled script) or `hwt-artz` (wood-type sans). Handwritten flourishes = `Delivery Note DEMO`. All caps/UI = `Sonder Sans Black Rough`. Body = `ITC Avant Garde`.

---

## 3. Color Palette

Frequency-ranked from computed styles (rgba(0,0,0,0) backgrounds = transparent fills, ignored).

### 3.1 Primary

| Swatch | Hex | RGB | Usage |
|---|---|---|---|
| ████ | **#234386** | 35, 67, 134 | Brand cobalt blue — all headlines, body text, primary backgrounds. THE color. |
| ░░░░ | **#FFFFFF** | 255, 255, 255 | Background, text on dark, page surface |
| ████ | **#000000** | 0, 0, 0 | Rare — only browser-default text fallback |

### 3.2 Secondary / Accent

| Swatch | Hex | Usage |
|---|---|---|
| ████ | **#ED7328** | 237, 115, 40 | Orange accent (slider/decor shapes — "big-orange-shape") |
| ████ | **#305787** | 48, 87, 135 | Cookie-bar link blue (slightly lighter brand variant) |
| ████ | **#3A4856** | 58, 72, 86 | Dark slate (cookie banner background) |
| ████ | **#F3F5F7** | 243, 245, 247 | Cool off-white surface |
| ████ | **#F2F2F2** | 242, 242, 242 | Neutral light gray surface |
| ████ | **#E3E1E8** | 227, 225, 232 | Lavender-gray surface |
| ████ | **#FBF9F6** | 251, 249, 246 | Warm cream surface |
| ████ | **#A2D3A6** | 162, 211, 166 | Soft mint green (badges / icons) |
| ████ | **#61A229** | 97, 162, 41 | Forest green (organic / leaf accent) |
| ████ | **#6AA8DC** | 106, 168, 220 | Light sky blue (secondary chip) |
| ████ | **#00578A** | 0, 87, 138 | Deep teal-blue accent |

### 3.3 Inferred Palette Roles

- **Primary brand:** `#234386` (cobalt)
- **Surface light:** `#FFFFFF`
- **Surface cream:** `#FBF9F6`
- **Surface cool gray:** `#F3F5F7`
- **Accent warm:** `#ED7328` (orange)
- **Accent organic:** `#61A229` / `#A2D3A6` (greens, for "bio/vegan" cues)

---

## 4. Visual Language

The aesthetic is **hand-illustrated, editorial, playful organic** — a "plant kitchen" mood:

- **Illustrations everywhere.** Custom SVG plants, nuts, crumbs, mushrooms, donuts, bowls, wave shapes — referenced from `/wp-content/themes/palais/svg/` and `/media/Pictures/HomePage/`. These are draggable decorative elements, not photographs.
- **Cut-paper/wood-type wordmark feel.** Section titles use the rough wood-type font (`hwt-artz`) and the filled-script (`Sandman_Fill`) for that "letterpress poster" look.
- **Handwritten annotations.** `Delivery Note DEMO` mimics felt-tip notes for small callouts (cooking times, "The future of cooking — today").
- **Big organic shape masks.** SVGs like `big-orange-shape-desktop.svg`, `pink-wave1.svg`, `Main-hero-left-shape.svg` are used as section dividers and image masks.
- **Photography:** food photos (credit "FoodLove") in 480×320 / 480×720 / 1024×1536 portrait formats — bright, natural light, top-down or close-up.
- **Iconography:** dietary badges as standalone SVGs (`vegan.svg`, `gluten-free.svg`, `soy-free.svg`, `lactose-free.svg`, `vegetarian.svg`), cooking-time and difficulty icons.

---

## 5. Page Structure (Home)

Sections in order (from screenshot):

1. **Header / Nav** — logo (positive variant on white, negative on color sections), main menu items in `Sonder Sans Black Rough` 12px white, language switcher (EN/FR/NL/DE).
2. **Hero ("Grow your plant kitchen")** — Sandman_Fill headline in cobalt, decorative plants/nuts SVGs, scroll-down circle CTA.
3. **Intro section** — large ITC Avant Garde body paragraph in cobalt with food illustrations (toast, crumbs, mushroom, donuts, bowl, nut).
4. **"The future of cooking — today"** — Delivery Note DEMO H2.
5. **Product cards** — 4 packshots (Spread Nature, Spread Cucumber-Chives, Sauce Béchamel, Sauce Pasta) on white with shadow PNG cutouts.
6. **Recipe slider ("Incredible recipes…")** — orange-shape masked slider, white hwt-artz titles over food photography, recipe meta (25 min / 10 min) in handwritten font.
7. **"Spready, saucy and non-dairy!"** Sandman_Fill display section.
8. **Saucy Choice / before-after** section with `Before-after-text.svg` decoration.
9. **Community / Instagram feed** — pink wave divider, IG grid (live Smash Balloon feed).
10. **Pa'lais Finder / Store Locator banner** — full-bleed colored CTA.
11. **Newsletter signup** — illustrated bubble-speech CTA on cream.
12. **Footer** — brand-logo-negative, socials, multi-language links.

---

## 6. Assets to Pull for Figma

If you want pixel-accurate reuse in Figma, grab these directly from the live site:

**SVG illustrations (theme dir `/wp-content/themes/palais/svg/`):**
- `brand-logo-positive.svg`, `brand-logo-negative.svg`
- `HeroSection/Main-hero-left-shape.svg`, `top-bar-divider-1.svg`, `Arrow-lang.svg`, `sub-menu-spread-bg.svg`, `sub-menu-sauces-bg.svg`
- `HomePage/Plant01.svg`–`Plant04.svg`, `arrow-scroll-down-circle.svg`, `arrow-scroll-down-arrow.svg`, `intro-section-deco1.svg`
- `IntroSection/nut-1.svg`, `nut-2.svg`
- `Slider/big-orange-shape-desktop.svg`, `big-orange-shape-mask-slider.svg`, `Slider-arrow.svg`
- `Community/pink-wave1.svg`, `community-deco1.svg`, `community-deco2.svg`, `community-nut1.svg`, `community-nut2.svg`
- `SaucyChoice/saucy-choice-section-bg-desktop.svg`
- `SignUpSection/bg-signup.svg`, `bg-signup-btn.svg`, `signup-plant-1.svg`
- `Socials/facebook.svg`, `instagram.svg`, `linkedin.svg`
- `ICONS/cooking-time.svg`, `difficulty-lvl1.svg`, `white-arrow.svg`
- `Before-after-text.svg`, `pin.svg`, `Arrow.svg`

**Raster decorations (`/media/Pictures/HomePage/`):** `crumbs-1.png`, `toast-1.png`, `mushroom-1.png`, `aromatic-1.png`, `donuts-1.png`, `bowl-1.png`, `nut-1.png`.

**Dietary badges (`/wp-content/uploads/2021/03/`):** `vegan.svg`, `vegetarian.svg`, `gluten-free.svg`, `lactose-free.svg`, `soy-free.svg`.

---

## 7. Notes for Figma Recreation

- **Set up text styles first** — there are ~10 distinct combinations; encode them as named styles ("Display/Sandman 72", "H3/HWT-Artz 46", "Body/Avant-Garde 24", "Label/Sonder 12 1.6", "Handwritten/Delivery 16").
- **Color variables:** define `Brand/Cobalt #234386`, `Surface/White`, `Surface/Cream #FBF9F6`, `Surface/Cool #F3F5F7`, `Accent/Orange #ED7328`, `Accent/Mint #A2D3A6`, `Accent/Forest #61A229`.
- **hwt-artz** is Typekit-only — in Figma, enable Adobe Fonts (Account Settings → Sync Adobe Fonts → sign in with Adobe ID, free with Creative Cloud) and activate "HWT Artz". Fallback substitutes: *Bungee Shade* or *Rye* (free Google Fonts).
- **The other 8 fonts are in `./fonts/` ready to install** — install the `.ttf` files via Font Book, then relaunch Figma desktop. See §2.1 for the file → role mapping.
- **Letter-spacing matters** — the cobalt body paragraphs run at +3.2px tracking, which gives the editorial spacing feel. Don't skip it.
- **Layout is wide, generous, vertical-scroll heavy** — viewport tested at 1281px; sections are mostly single-column with overlap/illustration breakouts.

---

When you share the Figma later, I can compare it back against this spec and call out any drift.
