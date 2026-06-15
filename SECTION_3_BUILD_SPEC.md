# ⚠️ DEPRECATED — DO NOT USE

**This spec was written against a wrong structural assumption.** Section 3 (Recipe Slider) is already fully built in the Figma file at node `275:6081` + `275:6077` (orange blob bg), with 12 recipe cards. See `CORRECTED_AUDIT.md` §"Real structural map" for the actual state of the file.

The build instructions below would duplicate existing work. They are kept only as a record of what I incorrectly recommended.

---

# Section 3 — Recipe Slider — Figma Build Spec

Target Figma slot: **`275:6074` "Placeholder for Section (margin)"** at body y=1929, size 2545 × 596
Inner placeholder: **`275:5798` "Placeholder for Section"** at y=100 (relative), size 2545 × 496

All measurements below are from the live palais.bio at 1440 viewport. The Figma file uses the same content-area scale (1173-wide centered content within the 2545 canvas), so **dimensions can be used 1:1**. Full-bleed decorations extend 0 → 2545; content sits in the centered 1173-wide column from `x=686` to `x=1859`.

Assets are at `figma-export/assets/`.

---

## 1. Section frame

```
Section "Recipe Slider"
  x: 0   y: 1929   w: 2545   h: 596
  background: #FFFFFF (white)
  ↳ Inner placeholder content area
      x: 0   y: 100   w: 2545   h: 496
      Content layout column: x=686, w=1173
```

---

## 2. Layer order (bottom → top)

| Z | Layer | What |
|---|---|---|
| 1 | Bottom-left chive/scallion scatter (raster) | Bridges from intro section |
| 2 | Big orange organic shape (mask) | Right-half background blob |
| 3 | Cobalt botanical sprigs on orange | Decorative line art |
| 4 | Recipe cards row | Left-half: 3 visible cards |
| 5 | Right-half text block | Headline + sub + body + CTA |
| 6 | Slider nav arrows | Below the cards |

---

## 3. Background — Orange organic blob (right side)

| Property | Value |
|---|---|
| Asset | `assets/Slider/big-orange-shape-desktop.svg` |
| Asset viewBox | 1314 × 1014 |
| Fill color (override the SVG's path fill) | `#ED7328` (palais orange) — current SVG path uses opacity 0.81; remove or keep as design taste |
| Position in section | Right-anchored; ~`x: 970, y: -50` (lets it bleed up & off the right edge) |
| Display size | ~1450 × 1130 (scaled up so the right edge bleeds off-canvas) |
| Z | 2 — sits ABOVE the chive scatter, BELOW everything else |

Visual goal: the orange shape covers the right ~55% of the section with a soft organic outline. The recipe cards on the left half stay on white.

---

## 4. Cobalt botanical sprigs on the orange

Hand-drawn cobalt `#234386` line illustrations of fennel/wheat sprigs. Scattered on top of the orange blob.

- 1× large sprig: top-right area, rotated ~20° clockwise, ~250×320 px
- 1× small sprig: bottom-right area, ~150×180 px

If you don't have a fennel sprig SVG yet, you can re-use:
- `assets/Community/community-deco1.svg` or `community-nut1.svg` (silhouette sprigs)
- `assets/IntroSection/nut-1.svg` / `nut-2.svg` for small accents
- Or sketch a fennel sprig directly in Figma using a pen and `#234386` strokes (1.5–2px width, freeform curves)

---

## 5. Recipe card component (build once, instance 3×)

### 5.1 Card frame

| Property | Value |
|---|---|
| Size | **459 × 464** |
| Background | photo (food image) |
| Border radius | 0 (square) — live site uses sharp corners; cards look like polaroids without rounding |
| Drop shadow | optional, very subtle: y=4, blur=12, color rgba(0,0,0,0.08) |

### 5.2 Photo layer

| Property | Value |
|---|---|
| Asset (per card) | one of the recipe JPGs in `assets/RecipePhotos/` |
| Photo size | 505 × 510 (slightly larger than card → fills with bleed) |
| Position inside card | center, allow overflow to be clipped |
| Object fit | cover |

### 5.3 Dietary badges row (top-left)

| Property | Value |
|---|---|
| Position inside card | x=12, y=12 |
| Layout | horizontal row, 6px gap between badges |
| Badge size | 28 × 28 (each circular SVG) |
| Assets | `assets/Dietary/vegan.svg`, `vegetarian.svg`, `lactose-free.svg`, `soy-free.svg`, `gluten-free.svg` — show 3–5 per card depending on recipe |

### 5.4 Cooking-time pill (top-right)

| Property | Value |
|---|---|
| Position inside card | top-right corner, x=card.w - pill.w - 12, y=12 |
| Pill size | ~96 × 32 |
| Pill bg | `#FFFFFF` with subtle shadow |
| Pill border-radius | 16 (full pill) |
| Inner: clock icon | `assets/ICONS/cooking-time.svg`, 16 × 16, x=10, y=8 |
| Inner: text "25 min" | Delivery Note DEMO 16px / `#234386`, x=32, y=4 |

### 5.5 Recipe title overlay (bottom-left)

| Property | Value |
|---|---|
| Position inside card | x=32, y=294 |
| Width | 230 (wraps to 2–3 lines) |
| Font | **hwt-artz** 400, **32px**, line-height ~32px, `#FFFFFF` |
| Examples | "FALAFEL WRAPS WITH ROASTED CARROT-BEET SALAD AND PICKLES" (uppercase via CSS or hard-uppercase) |

### 5.6 Difficulty icon (bottom-right)

| Property | Value |
|---|---|
| Position inside card | bottom-right, x=card.w - icon.w - 12, y=card.h - icon.h - 12 |
| Icon size | ~64 × 24 (3 chef-hat-like glyphs) |
| Asset | `assets/ICONS/difficulty-lvl1.svg` (or 2/3 versions if available) |

### 5.7 Card instances (4 recipes, 3 visible at once in the slider)

| # | Title | Time | Photo file (in `assets/RecipePhotos/`) |
|---|---|---|---|
| 1 | Falafel wraps with roasted carrot-beet salad and pickles | 25 min | `Spread-Garlic-Fine-Herbs-Falafel-wrap-DSC09344-scaled.jpg` |
| 2 | Strawberry toast with lemon, basil and balsamic vinegar | 10 min | `Spread-Nature-Breakfast-Toast-DSC08857-scaled.jpg` *(use as best-fit until strawberry-toast photo is sourced)* |
| 3 | Sourdough toast with roasted vegetables | 25 min | `Foto-Palais-Spread-Garlic-Herbs-Toast-(c)FoodLove-06446-scaled.jpg` |
| 4 | Three coloured zucchini-tomato tian with basil | 30 min | `Sauce-Bechamel-Tian-de-Provence-DSC09067-scaled.jpg` |

---

## 6. Card row layout (left half of section)

```
Row container
  x: 0   y: 18   w: ~1380   h: 464
  Layout: horizontal, 6px gap
  Contains 3 visible cards (overflow clipped to row container).
  Card 1 starts at x ≈ -50 (slightly off-canvas left to suggest scroll)
  Card 2 at x ≈ 410
  Card 3 at x ≈ 870
  Card 4 at x ≈ 1330 (mostly hidden, peeking from right edge)
```

The horizontal spacing between card left edges is **~459 + 4 = ~463** but staggered so consecutive cards overlap by a few px or sit edge-to-edge.

> If you don't want to build the slider behavior, just lay out 3 cards side-by-side with ~12px gaps and skip the off-canvas peek.

---

## 7. Right-side text column

Anchored inside the orange blob. Content sits at the right side of the 1173 column.

### 7.1 H1 — "INCREDIBLE / RECIPES"

| Property | Value |
|---|---|
| Position | x ≈ 850 (within section), y ≈ 60 |
| Width | ~400 |
| Font | **hwt-artz** 400, **88px**, line-height **72px** (tight) |
| Color | `#FFFFFF` |
| Text | "INCREDIBLE" + line break + "RECIPES" (uppercase) |

### 7.2 H2 sub-headline — "that will take your taste buds to / heaven and back"

| Property | Value |
|---|---|
| Position | y ≈ 220 (below H1) |
| Width | ~420 |
| Font | **Delivery Note DEMO** 400, **30–34px** |
| Color | `#FFFFFF` |
| Style | not uppercase, handwritten flow |
| Text | "that will take your taste buds to" + line break + "heaven and back" |

### 7.3 Body paragraph

| Property | Value |
|---|---|
| Position | y ≈ 290 |
| Width | ~360 |
| Font | **ITC Avant Garde Std Bk** 400, **14px**, line-height ~22px |
| Color | `#FFFFFF` |
| Text | "'Vegan food is bland and boring.' You've heard it, we've heard it. It's why we make Pa'lais so delicious. Try it out with these delicious recipes, or get inspired to do your own thing." |

### 7.4 CTA pill — "CHECK OUT OUR RECIPES"

| Property | Value | Notes |
|---|---|---|
| Position | x ≈ 850, y ≈ 430 |
| Size | **287 × 63** | measured from live |
| Background | `#234386` (cobalt) | |
| Border-radius | **32** (full pill) | |
| Padding | 24px top/bottom, 48px left/right | |
| Font | **Sonder Sans Black Rough** 400, **12px** | uppercase |
| Letter-spacing | 1.6px | |
| Color | `#FFFFFF` | |
| Text | "CHECK OUT OUR RECIPES" | |

---

## 8. Slider nav arrows

| Property | Value |
|---|---|
| Position | Below the card row, centered under the cards (around x=400, y=480) |
| Layout | left arrow + right arrow, 16px gap |
| Asset | `assets/Slider/Slider-arrow.svg` (mirror for left version) |
| Color | cobalt `#234386` stroke, no fill |
| Size | ~24 × 24 each |

---

## 9. Decoration: bottom-left chive/scallion scatter

A photographic accent that bridges this section to the next.

| Property | Value |
|---|---|
| Position | bottom-left of section, x ≈ 40, y ≈ 340, bleeding off the left/bottom edges |
| Layer | bottom-most (z=1) so cards sit on top |
| Asset | not yet downloaded — would need to be extracted from the live site's `chive` / scallion imagery; **fallback:** skip this and the section still reads well |
| Optional | also use small green-leaf SVGs as accent crumbs |

---

## 10. Color tokens

| Variable | Hex |
|---|---|
| Brand/Orange | `#ED7328` |
| Brand/Cobalt | `#234386` |
| Surface/White | `#FFFFFF` |
| (Implicit) green from chives | photographic; no swatch |

---

## 11. Font checklist (must be installed for accurate rendering)

| Font | File | Used in |
|---|---|---|
| hwt-artz | Adobe Fonts only — sync in Figma Account Settings | H1 "INCREDIBLE RECIPES", card titles |
| Delivery Note DEMO | `fonts/DeliveryNoteDEMO-Regular.ttf` | Sub-headline, cooking-time text |
| ITC Avant Garde Std Bk | `fonts/ITCAvantGardeStd-Bk.ttf` | Body paragraph |
| Sonder Sans Black Rough | `fonts/SonderSans-BlackRough.ttf` | CHECK OUT OUR RECIPES button |

---

## 12. Suggested Figma build sequence

1. Resize / confirm the Section 3 frame is `2545 × 596` (placeholder → real Section).
2. Place the orange blob (`big-orange-shape-desktop.svg`) anchored right, scaled to bleed.
3. Add 1–2 cobalt sprig decorations on top of the orange.
4. Build the **Recipe Card component** (one master) at 459×464 with all 6 internal slots (photo, badges, time pill, title, difficulty). Use auto-layout for the dietary badges row and the time pill.
5. Instance the card 3× side by side in a horizontal auto-layout row. Vary the photo, dietary badges, time, and title per recipe.
6. Build the right-side text column: H1 → H2 → body → CTA pill. Group them, anchor right.
7. Add the slider arrows below the card row.
8. (Optional) Add the bottom-left chive scatter / leaf accents.
9. Sanity-check: the orange blob's left edge should sit roughly at x=970 so the rightmost card's right edge overlaps it slightly (~20px), creating depth.

---

## 13. Quick QA checklist after building

- [ ] Orange blob is `#ED7328` (saturated), NOT mustard yellow
- [ ] H1 "INCREDIBLE RECIPES" in hwt-artz 88/72 white
- [ ] Sub-headline in Delivery Note DEMO white
- [ ] Body paragraph in ITC Avant Garde white
- [ ] CTA pill is `#234386` cobalt with white Sonder Sans, border-radius 32
- [ ] Each recipe card: photo + dietary row (top-left) + time pill (top-right) + title (bottom-left, hwt-artz 32 white) + difficulty (bottom-right)
- [ ] Card titles are UPPERCASE
- [ ] Slider arrows present below card row
- [ ] Section transitions cleanly into the "Spready, saucy" section below
