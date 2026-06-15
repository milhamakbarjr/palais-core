# ⚠️ PARTIALLY DEPRECATED

This file was written against the same flawed structural model as `SECTION_3_BUILD_SPEC.md`. **Section 3 content here is wrong** — the Recipe Slider already exists at `275:6081` + `275:6077`. See `CORRECTED_AUDIT.md` for the truth.

The specs for Sections 1, 2, 4a, 4b, 5, 6, 7, 8 below contain real measurements (typography, colors, button radii, etc.) captured from the live palais.bio at 1440px viewport. Those are still accurate as REFERENCE material — but the "build this from scratch" framing of each section is misleading because those sections are largely already built in your Figma.

Use the per-element measurements (font sizes, line heights, exact hex colors, padding values) here as fine-tuning reference only.

---

# Pa'lais — Section Build Specs (All Sections)

Same template & precision as `SECTION_3_BUILD_SPEC.md`. All measurements captured from live palais.bio at 1440px viewport. Figma uses the same 1173-wide centered content column inside a 2545-wide canvas → measurements transfer **1:1**. Full-bleed decorations extend 0 → 2545.

**Color tokens — confirmed by pixel-sampling live screenshots:**

| Token | Hex | Source |
|---|---|---|
| Brand/Cobalt | `#234386` (live `#244386`) | All body text, primary buttons |
| Brand/Orange | `#F08D52` (≈`#ED7328` brand) | Recipe blob, MEET US / DISCOVER button text |
| Surface/White | `#FFFFFF` | Default background |
| Surface/CoolWhite | `#FBF9F6` | Section bgs near hero |
| Banner/Green | `#67B988` | Spreads banner |
| Banner/Yellow | `#FEC601` | Cuisine banner |
| Wave/MintGreen | `#A2D3A6` | Newsletter green wave |
| Wave/Pink | `~#F5C8D2` | "You are Pa'lais" right-side wave |
| Panel/SkyBlue | `#6FABDF` / `#79AFDD` | Finder + Questions blue panels |

**Font tokens** (install `./fonts/*.ttf`; hwt-artz via Adobe Fonts sync):

| Token | Font | Used for |
|---|---|---|
| Display/Filled | Sandman_Fill | Hero H1, Spready H2, You-are H2 |
| Display/Wood | hwt-artz | Banner H3s, newsletter H2, recipe titles |
| Hand | Delivery Note DEMO | Hero H2 sub, cooking time, hand-drawn flourishes |
| Body | ITC Avant Garde Std Bk | All body copy, +3.2px tracking |
| UI | Sonder Sans Black Rough | Buttons, nav, labels, +1.6px tracking |

---

# Section 1 — Header + Hero

Target Figma frame: `275:6837` "Section" at body y=0, size **2545 × 1193**
Header sub-frame: `275:6932` at y=56, size 1173×75
Reference: `figma-export/sections/01-hero-palaisbio.jpeg`, `01-hero-figma-header.png`

## 1.1 Section frame

```
Section "Header + Hero"
  x: 0   y: 0   w: 2545   h: 1193
  background: #FFFFFF
  bottom edge: hero-section-wave SVG bleeds out
```

## 1.2 Layer order (bottom → top)

1. Left green organic blob (mint, behind botanical illustration)
2. Left botanical illustration (cobalt leaves + ladle)
3. Right wooden-plates photo behind orange mask
4. Right orange organic blob (mask)
5. Hero center content: H1, dots divider, H2 sub
6. Scroll-down circle CTA (bottom-left)
7. Center-bottom sprig illustration
8. Top utility row (FOR PROFESSIONALS, lang switcher)
9. Header (logo + main nav + STORE LOCATOR button)
10. hero-section-wave bottom divider

## 1.3 Top utility row (above header) ❌ MISSING

Content column: x=686, w=1173. Row sits at top-right of section.

| Element | x | y | w | h | Notes |
|---|---|---|---|---|---|
| "FOR PROFESSIONALS" | ~870 | 24 | 151 | 12 | Sonder Sans Black Rough 12 / 1.6px / `#234386` uppercase |
| Vertical divider (`assets/HeroSection/top-bar-divider-1.svg`) | 1030 | 22 | 2 | 22 | cobalt stroke |
| "EN" lang label | 1050 | 24 | 22 | 12 | Sonder Sans 12 / 1.6px / `#234386` |
| Down arrow (`Arrow-lang.svg`) | 1080 | 28 | 8 | 5 | cobalt fill |

## 1.4 Header (logo + main nav + STORE LOCATOR) ✅ Built — verify

Position: x=686 (centered 1173 column), y=56, w=1173, h=75

| Element | x (rel) | y (rel) | w | h | Spec |
|---|---|---|---|---|---|
| Logo (positive) | 0 | 0 | 164 | 75 | `assets/Brand/brand-logo-positive.svg` (NOT the Figma export) |
| Nav "GET INSPIRED" | 274 | 30 | ~110 | 14 | Sonder Sans 12 / 1.6px / `#234386` |
| Nav "OUR PRODUCTS" | 426 | 30 | ~120 | 14 | same |
| Nav "FOR A BETTER WORLD" | 587 | 30 | ~150 | 14 | same |
| Nav "CONTACT" | 778 | 30 | ~70 | 14 | same |
| STORE LOCATOR pill | 893 | 6 | 280 | 63 | bg `#234386`, text `#FFFFFF` Sonder Sans 12 / 1.6px, border-radius `4` (live uses slight rounding, ~4px), padding 24/48 |

## 1.5 H1 "Grow your plant kitchen" (center)

| Property | Value |
|---|---|
| x | 870 (within content column; centered) |
| y | 278 |
| w | 408 |
| h | 126 |
| Font | **Sandman_Fill** 400, **86px**, line-height **63px**, letter-spacing normal |
| Color | `#234386` |
| Text-align | center |
| Text | "Grow your" + newline + "plant kitchen" |

## 1.6 Dots divider (8 dots)

| Property | Value |
|---|---|
| x | ~970 (centered under H1) |
| y | 416 |
| w | 160 |
| h | 8 |
| Dot size | 8 × 8 each, 16px gap (24px center-to-center) |
| Color | `#234386` fill |

## 1.7 H2 sub "The future / of cooking - today"

| Property | Value |
|---|---|
| x | 870 |
| y | 444 |
| w | 408 |
| h | 104 |
| Font | **Delivery Note DEMO** 400, **58px**, line-height **52px** |
| Color | `#234386` |
| Text-align | center |

## 1.8 Left green organic blob ❌ MISSING

Soft mint amorphous shape behind the leaves illustration.

| Property | Value |
|---|---|
| x | -50 (bleeds off left) |
| y | 280 |
| w | 540 |
| h | 480 |
| Fill | `#C7DEB1` (mint) at opacity ~0.85 |
| Shape | Custom organic blob — draw a pen path with 6-8 anchor points, smooth curves, irregular outline |

## 1.9 Left botanical illustration (leaves + ladle) ✅ present

| Property | Value |
|---|---|
| x | 0 |
| y | 300 |
| w | 380 |
| h | 480 |
| Asset | cobalt line-drawn leaves + ladle SVG (sourced from theme) |
| Color | `#234386` strokes |

## 1.10 Right side: wooden-plates photograph inside orange mask

Mask group at Figma `276:7`. Built ✓ — verify the orange color is **saturated `#F08D52`**, not pale yellow.

| Property | Value |
|---|---|
| Orange shape x | 1520 |
| Orange shape y | -130 |
| Orange shape w | 1100 |
| Orange shape h | 1350 |
| Orange fill | `#F08D52` (or `#ED7328` brand orange) |
| Wooden plates photo | sits inside the mask, full-bleed, color-natural |

## 1.11 Scroll-down circle CTA

| Property | Value |
|---|---|
| x | 80 |
| y | 880 |
| w | 64 |
| h | 64 |
| Asset | `assets/HomePage/arrow-scroll-down-circle.svg` (outer circle) + `arrow-scroll-down-arrow.svg` (inner arrow) |
| Stroke | `#234386` 2px |

## 1.12 Center-bottom sprig (botanical)

| Property | Value |
|---|---|
| x | 580 |
| y | 920 |
| w | 220 |
| h | 220 |
| Color | `#234386` cobalt strokes |
| Asset | small leaves illustration |

## 1.13 hero-section-wave (bottom divider)

| Property | Value |
|---|---|
| x | 0 |
| y | 1069 |
| w | 2545 |
| h | 124 |
| Asset | wave SVG referenced as `hero-section-wave` (already in Figma `275:6890`) |
| Fill | cream `#FBF9F6` or white, depending on next section bg |

## 1.14 QA checklist

- [ ] Top utility row "FOR PROFESSIONALS · | · EN ▾" added above header
- [ ] Logo uses `brand-logo-positive.svg` (clean), not Figma SVG export
- [ ] STORE LOCATOR pill border-radius matches live (~4px)
- [ ] H1 in Sandman_Fill 86/63 cobalt
- [ ] Mint green blob added behind left botanical
- [ ] Right blob fill is saturated `#F08D52`, not mustard yellow
- [ ] hero-section-wave bottom divider present

---

# Section 2 — Intro ("Pa'lais exists because…")

Target Figma frame: `275:6893` at body y=1193, size **2545 × 736**
Reference: `02-intro-palaisbio.jpeg`, `02-intro-figma.png`

## 2.1 Section frame

```
Section "Intro"
  x: 0   y: 1193   w: 2545   h: 736
  background: #FFFFFF
```

## 2.2 Layer order

1. Right-side toast photograph (food shot)
2. Bottom-right orange organic ground shape
3. Left cashew + knife + leaves illustration (cobalt with pink/coral brush)
4. Top + middle cobalt nuts (`IntroSection/nut-1.svg`, `nut-2.svg`)
5. Centered text column (paragraph + MEET US)
6. Crumbs decoration (bottom-center)

## 2.3 Body paragraph

| Property | Value |
|---|---|
| x | 870 (center column) |
| y | 1380 (288 inside section) |
| w | 506 |
| h | ~140 |
| Font | **ITC Avant Garde Std Bk** 400, **18px**, line-height **30px**, letter-spacing **+3.2px** |
| Color | `#234386` |
| Text-align | center |
| Text | "Pa'lais exists because we felt there needed to be more yummy and planet-friendly food. So we made our creamy spreads and sauces entirely out of plants." |

> Note: original Figma was 4 lines @ 24/40. Live renders 3 lines because it has a wider column (~506px). Widen the Figma container OR reduce body size to 18px.

## 2.4 MEET US button ✅ correct

| Property | Value |
|---|---|
| x | 1051 (centered under paragraph) |
| y | 1581 |
| w | 164 |
| h | 67 |
| Background | `#FFFFFF` |
| Border | 2px solid `#F08D52` (orange outline) |
| Border-radius | **32** |
| Padding | 24px / 48px |
| Font | Sonder Sans Black Rough 12 / 1.6px |
| Color | `#F08D52` (orange) |
| Text | "MEET US" (uppercase) |
| Icon | left arrow inside button (small orange arrow SVG) |

## 2.5 Top cobalt nut

| Property | Value | Asset |
|---|---|---|
| x: 1080  y: 1240  w: 60  h: 80 | `assets/IntroSection/nut-1.svg` | `#234386` lines |

## 2.6 Middle/bottom cobalt nut

| Property | Value | Asset |
|---|---|---|
| x: 1190  y: 1620  w: 70  h: 90 | `assets/IntroSection/nut-2.svg` | `#234386` lines |

## 2.7 Left illustration (cashew + knife + leaves with pink brush) ✅ present

| Property | Value |
|---|---|
| x | 0 |
| y | 1280 |
| w | 480 |
| h | 600 |
| Composition | cobalt line-drawn cashew + knife + leaves overlaid with coral/pink (`~#F09A9F`) loose brush strokes |
| Color | `#234386` strokes; pink strokes at opacity 0.7 |

## 2.8 Right toast photograph ❌ MISSING

| Property | Value |
|---|---|
| x | 2070 |
| y | 1380 |
| w | 600 (bleeds off right) |
| h | 480 |
| Image | `assets/RecipePhotos/Foto-Palais-Spread-Garlic-Herbs-Toast-(c)FoodLove-06446-scaled.jpg` or `Spread-Garlic-Fine-Herbs-Falafel-wrap-DSC09344-scaled.jpg` |
| Object-fit | cover, anchored right |

## 2.9 Bottom-right orange organic ground ❌ MISSING

| Property | Value |
|---|---|
| x | 1750 |
| y | 1790 |
| w | 900 (bleeds right) |
| h | 200 |
| Fill | `#F08D52` |
| Shape | hand-drawn organic curve mimicking a "ground" or wave |
| Overlay | small cobalt fennel sprig on top |

## 2.10 Crumbs decoration

| Property | Value |
|---|---|
| x | 870 (center) |
| y | 1820 |
| w | 80 |
| h | 40 |
| Asset | `assets/HomePage_raster/crumbs-1.png` |

## 2.11 QA checklist

- [ ] Body paragraph in ITC Avant Garde 18/30 +3.2px cobalt
- [ ] MEET US: white pill with orange border, orange text, br=32, h=67
- [ ] Right toast photograph anchored right
- [ ] Bottom-right orange ground shape
- [ ] Crumbs detail present

---

# Section 4a — "Spready, saucy / and non-dairy!"

Target Figma frame: `275:6075` → `275:5799` at body y=2525..3247, **2545 × 722**
Reference: `04-spready-palaisbio.jpeg`, `04-spready-figma.png`

## 4a.1 Section frame

```
Section "Spready Saucy"
  x: 0   y: 2525   w: 2545   h: 722
  background: #FFFFFF
```

## 4a.2 Layer order

1. Left pasta bowl photo + chive accent (raster + green photo)
2. Right toast photo with creamy spread + greens
3. Top floating cashew nut (cobalt sprig accents)
4. Centered text block (H2 + sub + paragraph)

## 4a.3 H2 line 1 "SPREADY, SAUCY"

| Property | Value |
|---|---|
| x | 940 (centered) |
| y | 2770 |
| w | 663 |
| h | 117 |
| Font | **Sandman_Fill** 400, **88px**, line-height **58px** |
| Color | `#234386` |
| Text-align | center |

### 4a.3.1 Side dashes (em-dash flourishes) ❌ MISSING

Two small horizontal cobalt strokes flanking the H2 lines.

| Property | Value |
|---|---|
| Left dash x: 880  y: 2810  w: 40  h: 4 | `#234386` fill |
| Right dash x: 1620  y: 2810  w: 40  h: 4 | `#234386` fill |

## 4a.4 H2 line 2 "and non-dairy!" (handwritten flourish)

| Property | Value |
|---|---|
| x | 1020 |
| y | 2845 |
| w | 500 |
| h | 80 |
| Font | **Delivery Note DEMO** 400, **52px**, line-height **48px** |
| Color | `#234386` |
| Text-align | center |
| Side dashes | similar small `#234386` strokes flanking |

## 4a.5 Centered body paragraph

| Property | Value |
|---|---|
| x | 870 |
| y | 2960 |
| w | 506 |
| h | 180 |
| Font | **ITC Avant Garde Std Bk** 400, **16px**, line-height **28px**, letter-spacing **+1.6px** |
| Color | `#234386` |
| Text-align | center |
| Text | "To make Pa'lais, first we take some organic cashews. Then, we turn them into milk and add cultures. We keep it all warm and cosy, so that it gets very cultured indeed, giving it the characteristic Pa'lais taste and texture. And voila! Tasty creamy products made without bothering any cows!" |

## 4a.6 Left pasta bowl photograph

| Property | Value |
|---|---|
| x | -120 (bleeds left) |
| y | 2580 |
| w | 720 |
| h | 540 |
| Image | `assets/RecipePhotos/Sauce-Bechamel-Tian-de-Provence…` or a pasta bowl photo (sourceable) |
| Object-fit | cover |
| Overlay | cashew sprigs + chive scatter on top |

## 4a.7 Right toast photograph ❌ MISSING (currently a single tiny nut)

| Property | Value |
|---|---|
| x | 2070 |
| y | 2640 |
| w | 600 |
| h | 480 |
| Image | toast with greens (sourceable from palais.bio uploads) |

## 4a.8 QA checklist

- [ ] H2 "SPREADY, SAUCY" Sandman_Fill 88/58 cobalt with side dashes
- [ ] "and non-dairy!" Delivery Note 52/48 cobalt with side dashes
- [ ] Paragraph in ITC Avant Garde centered
- [ ] Left pasta bowl photo present with chive scatter
- [ ] Right toast photograph added

---

# Section 4b — Pa'lais Spreads + Cuisine dual banners ✅ mostly built

Target Figma frame: `275:5826` at body y=3247..3943, **2545 × 696**
Reference: `04b-5826-figma.png`, `04-spready-palaisbio.jpeg` (live shows banners)

## 4b.1 Section frame & two halves

```
Section "Spreads + Cuisine banners"
  x: 0   y: 3247   w: 2545   h: 696
  background: split diagonally
```

| Half | x | y | w | h | Fill |
|---|---|---|---|---|---|
| Left (Spreads) | 0 | 0 | ~1300 | 696 | `#67B988` (saturated mint) with right-edge diagonal cut |
| Right (Cuisine) | 1245 | 0 | ~1300 | 696 | `#FEC601` (golden yellow) with left-edge diagonal cut |

The diagonal cut between them is a subtle slanted curve (hand-drawn organic edge) at around x=1245 (slightly left of center) so the green wedge takes a bit more space than yellow.

## 4b.2 Pa'lais Spreads — left half

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| Packshot 1 (Nature) | 100 | 120 | 380 | 460 | image of Pa'lais Spread Nature carton, rotated -8° |
| Packshot 2 (Cucumber-Chives) | 280 | 240 | 380 | 460 | image rotated 4°, partially overlaps Packshot 1 |
| H3 "PA'LAIS / SPREADS" | 690 | 220 | 280 | 120 | hwt-artz 46/40 white, two-line |
| Body paragraph | 690 | 360 | 280 | 200 | ITC Avant Garde 16/26 white |
| "SPREAD THE LOVE" pill button | 690 | 580 | 270 | 63 | white bg, `#234386` text Sonder Sans 12/1.6px, br=32, padding 24/48 |

Body copy: "Our spreads have incredible fresh flavours and creamy textures. That just means they taste good. Obviously, we would say that. But give them a try to find out if we're telling the truth…"

## 4b.3 Pa'lais Cuisine — right half

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| H3 "PA'LAIS / CUISINE" | 1340 | 220 | 280 | 120 | hwt-artz 46/40 white, two-line |
| Body paragraph | 1340 | 360 | 320 | 200 | ITC Avant Garde 16/26 white |
| "GET SAUCY!" pill button | 1340 | 580 | 200 | 63 | white bg, cobalt text, br=32 |
| Packshot 1 (Bechamel) | 1820 | 140 | 380 | 460 | sauce carton image rotated 6° |
| Packshot 2 (Pasta Sauce) | 1980 | 90 | 360 | 440 | rotated -10°, slightly overlapping |

Body copy: "Pa'lais plant-based sauces are pretty simple. You don't need to be a chef to use our creamy Bechamel or cheesy Pasta Sauce. Something this tasty and easy to use shouldn't be healthy — but it is!"

## 4b.4 QA checklist

- [ ] Left half `#67B988` green, right half `#FEC601` yellow
- [ ] Diagonal hand-drawn cut between halves (not a hard rectangle line)
- [ ] Both H3 white in hwt-artz 46/40
- [ ] Both bodies in ITC Avant Garde white
- [ ] Both CTA pills white with cobalt text
- [ ] Packshots overlap with slight rotation for visual depth

---

# Section 5 — "You are Pa'lais" + community

Target Figma frame: `275:5875` at body y=3947..4931, **2545 × 984**
Reference: `05-youare-palaisbio.jpeg`, `05-youare-figma.png`

## 5.1 Section frame

```
Section "You are Pa'lais"
  x: 0   y: 3947   w: 2545   h: 984
  background: #FFFFFF (with pink wave on right)
```

## 5.2 Layer order

1. **Pink wave background** (right half) ❌ MISSING
2. Top-left cobalt botanical leaves accent
3. Mid-left larger botanical illustration
4. Center cashew nut accent
5. Left text block (H2 + body + DISCOVER)
6. Right Instagram cards stack (3 cards overlapping)

## 5.3 Pink wave background ❌ ADD

| Property | Value |
|---|---|
| Asset | `assets/Community/pink-wave1.svg` |
| x | 1000 |
| y | 0 |
| w | 1700 |
| h | 984 |
| Fill | `~#F5C8D2` soft pink (sample from live) |
| Position | bleeds beyond right edge of canvas |

## 5.4 H2 "YOU ARE / Pa'lais" 

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| Line 1 "YOU ARE" | 870 | 4060 | 340 | 80 | Sandman_Fill 72/72 cobalt centered |
| Line 2 "Pa'lais" | 880 | 4150 | 320 | 80 | Delivery Note DEMO 48/40 cobalt |

## 5.5 Body paragraph

| Property | Value |
|---|---|
| x | 870 |
| y | 4260 |
| w | 380 |
| h | 200 |
| Font | ITC Avant Garde 14/24 +1.6px |
| Color | `#234386` |
| Text-align | center |
| Text | "There's plenty of room in our Plant Kitchen, come and chill with us. Our community is great for recipes and inspo, and you can even share your own if you want. No pressure. Just make sure to add @palais.bio or #palaisbio to your post." |

## 5.6 DISCOVER pill button ✅ correct

| Property | Value |
|---|---|
| x | 980 (centered under paragraph) |
| y | 4500 |
| w | 175 |
| h | 67 |
| Background | `#FFFFFF` |
| Border | 2px `#F08D52` orange |
| Border-radius | 32 |
| Padding | 24/48 |
| Font | Sonder Sans 12/1.6px |
| Color | `#F08D52` |
| Text | "DISCOVER" |

## 5.7 Instagram card stack (3 cards overlapping right)

Each card represents an Instagram post screenshot (Pa'lais branded promo).

| Card | x | y | w | h | Rotation |
|---|---|---|---|---|---|
| Card 1 (bottom of stack) | 1500 | 4080 | 380 | 480 | -5° |
| Card 2 (middle) | 1700 | 4040 | 380 | 480 | 2° |
| Card 3 (top) | 1900 | 4090 | 380 | 480 | -3° |

Each card: white background, drop shadow, IG-style chrome (top header bar with username + ⋯, image area, bottom row with like/comment/save icons), promotional photo of Pa'lais products inside.

## 5.8 Decorations

| Element | x | y | w | h | Asset |
|---|---|---|---|---|---|
| Top-left botanical leaves | 60 | 4000 | 200 | 220 | small cobalt SVG |
| Mid-left larger botanical | 60 | 4400 | 280 | 440 | larger cobalt leaf cluster |
| Center cashew (between text and cards) | 1280 | 4400 | 50 | 65 | `assets/Community/community-nut1.svg` |
| Other community deco | various | various | — | — | `community-deco1.svg`, `community-deco2.svg`, `community-nut2.svg` |

## 5.9 QA checklist

- [ ] Pink wave background visible on right half
- [ ] Y2 "YOU ARE" Sandman_Fill + "Pa'lais" Delivery Note
- [ ] Body paragraph centered, cobalt
- [ ] DISCOVER button orange-outlined pill
- [ ] 3 Instagram cards overlapping with slight rotation

---

# Section 6 — Pa'lais Finder + Got Any Questions banners ✅ mostly built

Target Figma frame: `275:5922` at body y=4927..5757, **2545 × 830**
Reference: `06-finder-palaisbio.jpeg`, `07-5922-figma.png`

## 6.1 Section frame

```
Section "Finder + Questions"
  x: 0   y: 4927   w: 2545   h: 830
  background: #FFFFFF
```

## 6.2 Layer order

1. Bottom-left tian/casserole photo (bridge) ❌
2. Bottom green-wave transition ❌
3. Top decoration (botanical leaves, floating nut) ✅
4. Two blue-blob panels (left + right)
5. "So vegan" yellow speech bubble ❌

## 6.3 Two blue-blob panels

Each panel is a hand-drawn rough-edged blue shape (NOT a perfect rectangle), with a tinted photo overlay underneath the text.

| Panel | x | y | w | h | Blue fill |
|---|---|---|---|---|---|
| Left (Finder) | 380 | 5050 | 540 | 560 | `#6FABDF` blue, organic edges |
| Right (Questions) | 1390 | 5050 | 540 | 560 | `#79AFDD` blue, organic edges |

> Build technique: use a Figma vector pen with 8-12 anchor points, pull handles to create wavy/uneven edges. Apply blue fill at ~90% opacity so the photo underneath shows through.

## 6.4 Left panel — Pa'lais Finder

| Element | x (in section) | y | w | h | Spec |
|---|---|---|---|---|---|
| Background photo (person holding spread) | 380 | 5050 | 540 | 560 | image inside panel, tinted blue via overlay |
| H3 "PA'LAIS FINDER" | 470 | 5160 | 340 | 90 | hwt-artz 46/46 +2px white |
| Body | 470 | 5260 | 360 | 100 | ITC Avant Garde 14/22 white |
| Pill CTA "STORE LOCATOR" (currently "THIS BUTTON" in Figma) | 590 | 5430 | 200 | 63 | white bg, cobalt text, br=32 |

Body copy: "Pa'lais likes to hang out in nearby shops. Our web designer poured their heart into making the little button below which lets you see which ones."

## 6.5 Right panel — Got Any Questions

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| Background photo (smiling woman) | 1390 | 5050 | 540 | 560 | tinted blue overlay |
| H3 "GOT ANY / QUESTIONS?" | 1500 | 5150 | 380 | 130 | hwt-artz 46/46 +2px white, two-line |
| Body | 1500 | 5290 | 360 | 100 | ITC Avant Garde 14/22 white |
| Pill CTA "READ OUR ANSWERS" | 1605 | 5460 | 250 | 63 | white bg, cobalt text, br=32 |

Body copy: "Here's where you can see the questions people ask the most. You could almost call these questions 'frequently asked'."

## 6.6 Decorations

| Element | x | y | w | h | Asset |
|---|---|---|---|---|---|
| Top-left botanical leaves | 60 | 4940 | 240 | 200 | small cobalt SVG |
| Top-center floating cashew nut | 1230 | 4940 | 60 | 80 | `assets/IntroSection/nut-1.svg` |
| **Bottom-left tian casserole photo** ❌ | -50 | 5560 | 700 | 320 | live food photograph; bleeds left edge |
| **"So vegan" yellow speech bubble** ❌ | 540 | 5610 | 160 | 130 | yellow bubble shape `#FEC601` with Delivery Note "So vegan" white text 30px |
| **Bottom-right fennel/wheat sprig** ❌ | 2200 | 5500 | 280 | 320 | cobalt line illustration |
| **Bottom green wave transition** ❌ | 0 | 5680 | 2545 | 80 | mint `#A2D3A6` wave shape, full-bleed |

## 6.7 QA checklist

- [ ] Both blue panels have organic hand-drawn rough edges (not rectangles)
- [ ] Panel photos tinted with blue overlay
- [ ] Left CTA renamed from "THIS BUTTON" → "STORE LOCATOR"
- [ ] Bottom-left tian photo bleeding off edge
- [ ] "So vegan" yellow speech bubble added
- [ ] Bottom-right fennel sprig
- [ ] Bottom green wave bridge into newsletter

---

# Section 7 — Newsletter signup

Target Figma frame: `275:6783` at body y=5757..6107, **2545 × 350**
Reference: `07-newsletter-palaisbio.jpeg`, `07-newsletter-figma.png`

## 7.1 Section frame

```
Section "Newsletter"
  x: 0   y: 5757   w: 2545   h: 350
  background: #A2D3A6 (mint green)
```

## 7.2 Layer order

1. Mint green background (full-bleed)
2. Top-left tian/casserole photo
3. Yellow speech bubble overlay on tian
4. Top decoration: spoon + botanical (right)
5. Center text + form

## 7.3 Top-left tian photo + bubble

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| Tian photo | -100 | 5760 | 600 | 360 | bleeds left + top edges; food photo of casserole/tian |
| Yellow speech bubble | 470 | 5760 | 160 | 130 | yellow `#FEC601` bubble shape with tail |
| Bubble text "So vegan" (Figma has "Lactose free") | 490 | 5790 | 120 | 80 | **Delivery Note DEMO** 32/32 white |

> Note: Figma currently shows "Lactose free" — if that was intentional content variation, leave; otherwise rename to "So vegan" per live.

## 7.4 Center headline & form

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| H2 "YOU PROBABLY DON'T WANT ANOTHER NEWSLETTER IN YOUR MAILBOX," | 910 | 5827 | 720 | 157 | **hwt-artz** 33/39 cobalt centered |
| Sub-headline "but then you'd miss our fantastic recipes" | 910 | 6000 | 720 | 40 | **Delivery Note DEMO** 32/32 cobalt centered |
| Country select "BELGIUM ▼" ❌ MISSING | 800 | 6063 | 263 | 68 | white bg, cobalt text Sonder Sans 13/1.6px, no border-radius, padding 0 10 |
| Email input | 1063 | 6063 | 420 | 60 | white bg, cobalt Sonder Sans 13/1.6px, placeholder "EMAIL" |
| SUBMIT button | 1483 | 6063 | 165 | 73 | cobalt `#234386` fill, white Sonder Sans 14/1.6px, padding 24/48, no border-radius |

> The whole form (select + email + submit) is one connected white block with the submit being a cobalt button on the right end. Border-radius is small on the outer container (~4px).

## 7.5 Right-side spoon + botanical

| Property | Value |
|---|---|
| x | 2200 |
| y | 5800 |
| w | 340 |
| h | 320 |
| Asset | cobalt line illustration of wheat sprig + spoon — sourceable from theme |

## 7.6 QA checklist

- [ ] Mint green `#A2D3A6` background
- [ ] Top-left tian photo + yellow "So vegan" bubble
- [ ] Headline `hwt-artz` 33/39 cobalt
- [ ] Sub-headline Delivery Note cobalt
- [ ] Form: country select + email input + cobalt submit button
- [ ] Right-side spoon + wheat illustration

---

# Section 8 — Footer ✅ mostly done

Target Figma frame: `275:5956` "Footer" at body y=6107..6635, **2545 × 528**
Reference: `08-footer-palaisbio.jpeg`, `08-footer-figma.png`

## 8.1 Section frame

```
Section "Footer"
  x: 0   y: 6107   w: 2545   h: 528
  background: #234386 (cobalt)
```

## 8.2 Layer order

1. Cobalt background (full-bleed)
2. Logo (left)
3. 3 columns (Menu, Store Locator, Contact)
4. Divider line
5. Bottom row (legal + socials)

## 8.3 Logo (negative / white)

| Property | Value |
|---|---|
| x | 290 |
| y | 6207 |
| w | 140 |
| h | 64 |
| Asset | `assets/Brand/brand-logo-negative.svg` |
| Color | white |

## 8.4 Columns

3 column layout starting at x=686 (centered content column).

### 8.4.1 MENU column

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| H3 "MENU" | 686 | 6207 | 164 | 19 | Sonder Sans Black Rough 16 / 1.6px white uppercase |
| Link "Get inspired" | 686 | 6260 | 140 | 24 | ITC Avant Garde 14/24 white at ~80% opacity |
| Link "Our products" | 686 | 6292 | — | 24 | same |
| Link "For a better world" | 686 | 6324 | — | 24 | same |
| Link "Contact" | 686 | 6356 | — | 24 | same |
| Link "FAQ" | 686 | 6388 | — | 24 | same |
| (gap) | — | — | — | — | — |
| Link "For professionals" | 686 | 6452 | — | 24 | same |

### 8.4.2 STORE LOCATOR column

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| H3 "STORE LOCATOR" | 953 | 6207 | 204 | 19 | Sonder Sans Black Rough 16 / 1.6px white |
| **Pin icon** ❌ | 1150 | 6207 | 18 | 22 | `assets/pin.svg` white fill |
| Body "We are available in various points of sale." | 953 | 6260 | 220 | 60 | ITC Avant Garde 14/26 white at ~80% opacity |

### 8.4.3 CONTACT PA'LAIS column

| Element | x | y | w | h | Spec |
|---|---|---|---|---|---|
| H3 "CONTACT PA'LAIS" | 1259 | 6207 | 204 | 19 | Sonder Sans Black Rough 16 / 1.6px white |
| Body "Do you have a question? Send it to us!" | 1259 | 6260 | 220 | 80 | ITC Avant Garde 14/26 white at ~80% opacity |

## 8.5 Divider line

| Property | Value |
|---|---|
| x | 290 |
| y | 6510 |
| w | 1965 |
| h | 1 |
| Color | white at 30% opacity |

## 8.6 Legal info (bottom-left)

3 lines stacked.

| Element | x | y | h | Spec |
|---|---|---|---|---|
| "LEGAL INFORMATION" | 686 | 6540 | 14 | Sonder Sans 11 / 1.6px white at 70% |
| "PRIVACY POLICY" | 686 | 6562 | 14 | same |
| "POWERED BY AD" | 686 | 6584 | 14 | same |

## 8.7 Social icons (bottom-right)

3 circular outlined icons.

| Icon | x | y | w | h | Asset |
|---|---|---|---|---|---|
| Facebook | 2050 | 6540 | 44 | 44 | `assets/Socials/facebook.svg` + circle stroke |
| Instagram | 2104 | 6540 | 44 | 44 | `assets/Socials/instagram.svg` |
| LinkedIn | 2158 | 6540 | 44 | 44 | `assets/Socials/linkedin.svg` |

Circle: white 1.5px stroke, no fill. Icon glyph inside white.

## 8.8 QA checklist

- [ ] Cobalt `#234386` background
- [ ] White logo with "THE PLANT KITCHEN" tagline
- [ ] All 3 column H3s in Sonder Sans 16/1.6px white
- [ ] Pin icon next to STORE LOCATOR H3
- [ ] Divider line at ~30% opacity
- [ ] Legal column on left
- [ ] 3 outlined social icons on right

---

# Build order recommendation

Tackle in this order for momentum:

1. **Section 3 Recipe Slider** (biggest gap) — see `SECTION_3_BUILD_SPEC.md`
2. **Section 5 pink wave** — 1 SVG, instant visual impact
3. **Section 1 utility row + green blob** — small additions, completes the hero
4. **Section 2 toast + orange ground** — fills empty right side
5. **Section 4a side dashes + toast** — small polish
6. **Section 6 bridge decorations** — tian, bubble, sprig, green wave
7. **Section 7 country dropdown** — single component
8. **Section 8 pin icon** — 1 SVG

After all of the above, install the 9 fonts + sync hwt-artz via Adobe Fonts → re-render → final pixel sweep.
