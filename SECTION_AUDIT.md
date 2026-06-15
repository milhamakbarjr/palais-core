# ⚠️ SUPERSEDED — See CORRECTED_AUDIT.md

This audit was written against a wrong structural model. **Section 3 IS BUILT** at node `275:6081` (with 12 recipe cards) and `275:6077` (orange blob bg) — both sit at the Palais frame root, NOT inside the Body frame. The "Section 3 — Not started" verdict here is wrong.

See `CORRECTED_AUDIT.md` for the corrected per-section status and the explanation of the structural error.

---

# Pa'lais — Per-Section Figma vs Live Audit

Comparing Figma `AeA7sB6KS7dXeAvMWQlUy5` (node `275:5786 "Palais"`) against `https://www.palais.bio/`.
Side-by-side screenshots saved in `./figma-export/sections/`.
Assets saved in `./figma-export/assets/` (51 SVG/PNG files, organized by section).
Logos exported from Figma + originals saved in `./figma-export/logos/`.

Legend: ✅ matches · ⚠️ partial / needs verification · ❌ missing or wrong

---

## Section 1 — Header + Hero ("Grow your plant kitchen")

Figma nodes: `275:6837` (Hero body, 0,0 → 2545×1193) · `275:6932` (Header, 0,56 → 1173×75) · `275:6965` (Navigation, 274,12.5 → 899×50) · `275:6935` (logo-palais 164×75) · `275:5961` (logo-palais-2 140×65) · `275:6890` (hero-section-wave bottom divider)

Reference screenshots: `01-hero-palaisbio.jpeg`, `01-hero-figma.png`, `01-hero-figma-header.png`, `01-hero-figma-logo-palais.png`, `01-hero-figma-logo-palais-2.png`

### Logo

| | Original | Figma | Status |
|---|---|---|---|
| `logo-palais` (positive) | 164.11×75.58, single fill `#234386` | 164×75 cobalt ✓ | ✅ |
| `logo-palais-2` (negative) | white-on-cobalt, same shape | 140×65 white ✓ | ✅ shape OK, size 15% smaller — likely intentional for nav vs footer |

⚠️ **Figma SVG export bug:** when you export `logo-palais` / `logo-palais-2` directly via "Export → SVG" you get a 71KB file with an injected `<rect width="..." fill="#1E1E1E">` background (the dark Figma canvas color). **Use the originals at `./figma-export/assets/Brand/brand-logo-positive.svg` and `brand-logo-negative.svg` (24KB, clean)** — those are the live site's actual logos.

### Top utility row (above main nav)

| Element | Original | Figma | Status |
|---|---|---|---|
| "FOR PROFESSIONALS" | Sonder Sans Black Rough 12 / 1.6px cobalt | not visible in Header frame | ❌ MISSING |
| Vertical divider (`top-bar-divider-1.svg`) | thin cobalt line | — | ❌ MISSING |
| "EN ▾" language switcher with `Arrow-lang.svg` | Sonder Sans 12 + arrow | — | ❌ MISSING |

→ Add a row above the main nav with these three elements. Assets are in `./figma-export/assets/HeroSection/`.

### Main nav row

| Element | Original | Figma | Status |
|---|---|---|---|
| Logo (left) | logo-palais | logo-palais ✓ | ✅ |
| "GET INSPIRED" | Sonder Sans Black Rough 12/1.6px cobalt | ✓ | ✅ |
| "OUR PRODUCTS" | same | ✓ | ✅ |
| "FOR A BETTER WORLD" | same | ✓ | ✅ |
| "CONTACT" | same | ✓ | ✅ |
| "STORE LOCATOR" button | `#234386` fill, white text, slight corner radius | ✓ but corner radius may be too sharp | ⚠️ verify radius matches original (~4–6px) |

### Hero content (center)

| Element | Original | Figma | Status |
|---|---|---|---|
| H1 "Grow your plant kitchen" | **Sandman_Fill** 73/54px cobalt | rendering with fallback font (Sandman_Fill not installed) | ⚠️ FIX BY INSTALLING `./fonts/Sandman_Fill-210122.ttf` then relaunching Figma |
| Dots divider (8 dots) | small cobalt dots | ✓ | ✅ |
| H2 "The future / of cooking - today" | **Delivery Note DEMO** 50/44px cobalt | likely correct shape | ⚠️ verify after installing `./fonts/DeliveryNoteDEMO-Regular.ttf` |

### Decorations & background shapes

| Element | Original | Figma | Status |
|---|---|---|---|
| **Left green organic blob** (behind leaves illustration) | soft mint/sage amorphous shape, approx `#C7DEB1` or similar | ❌ no green shape behind the leaves | ❌ MISSING — add a hand-drawn organic blob, mint green |
| Left leaves + ladle illustration | botanical line drawing in cobalt | ✓ present | ✅ |
| Center-bottom small sprig | tiny botanical illustration cobalt | ✓ present | ✅ |
| Scroll-down circle CTA (bottom-left) | `arrow-scroll-down-circle.svg` + `arrow-scroll-down-arrow.svg` | ✓ present | ✅ |
| **Right blob shape** (masks wooden-plates photo) | bright golden-orange (`#ED7328`-ish saturation) | yellow/golden but lower saturation | ⚠️ verify color — original is closer to `#ED7328`, Figma is currently a paler mustard |
| Right wooden-plates photograph | full-bleed inside mask | ✓ present inside Mask group `276:7` | ✅ |
| `hero-section-wave` bottom divider | cream-on-cobalt wave SVG | ✓ present at `275:6890` | ✅ |

### Summary for Section 1

**Add:**
1. Top utility row (3 items): "FOR PROFESSIONALS" · vertical divider · "EN ▾" language switcher
2. Mint green organic blob behind the left botanical illustration

**Verify / refine:**
3. Right blob color — should be saturated orange `#ED7328`, currently looks mustard yellow
4. STORE LOCATOR button corner radius — measure against original
5. Re-render after installing `Sandman_Fill` and `Delivery Note DEMO` to confirm typography matches

**Already correct:** logos, main nav, dots divider, leaves illustration, sprig, scroll-down CTA, wave divider, wooden-plates mask group.

---

## Section 2 — Intro ("Pa'lais exists because…")

Figma node: `275:6893` (Section y=1193..1929, 2545×736) · `275:6907` paragraph · `275:6910` "Meet us" link · `275:6894 / 6897 / 6899 / 6901` decorative containers

Reference screenshots: `02-intro-palaisbio.jpeg`, `02-intro-figma.png`

### Body copy

| Element | Original | Figma | Status |
|---|---|---|---|
| Paragraph text | "Pa'lais exists because we felt there needed to be more yummy and planet-friendly food. So we made our creamy spreads and sauces entirely out of plants." | same copy ✓ | ✅ |
| Font | **ITC Avant Garde Std Bk** 24/40, +3.2px tracking, `#234386` | rendering with fallback sans (font not installed) | ⚠️ FIX BY INSTALLING `./fonts/ITCAvantGardeStd-Bk.ttf` |
| Width / line breaks | 3 lines on original layout at 1440px viewport | 4 lines in Figma — slightly narrower column or different size | ⚠️ verify width of the Paragraph container (765px in Figma) — original wraps wider |
| "Meet us" CTA pill | orange `#ED7328` outlined pill, uppercase tracked text, left arrow | ✓ present, color & shape OK | ✅ |

### Illustrations / decorations

| Element | Original | Figma | Status |
|---|---|---|---|
| Top cobalt nut (`IntroSection/nut-1.svg`) | small floating nut above paragraph | ✓ present | ✅ |
| Bottom cobalt nut (`IntroSection/nut-2.svg`) | floating nut to right of "Meet us" | ✓ present | ✅ |
| Left cashew + knife + leaves illustration with **pink/coral brush strokes** | hand-drawn cobalt botanical with coral underlay swooshes | ✓ present, pink stroke is visible | ✅ shape matches; verify the pink color (`#F09A9F` or similar coral) |
| Crumbs detail (bottom-center) | tiny cobalt crumb cluster | ✓ present | ✅ |
| **Right-side toast photograph** (toast with creamy spread + cucumber slices on sourdough) | full-bleed real photograph anchored to right edge | ❌ MISSING entirely | ❌ ADD — use `assets/HomePage_raster/toast-1.png` or a fresh export of `Spread-Garlic-Herbs-Toast` from the live recipe. The toast anchors the right side of this section visually. |
| **Bottom-right orange organic ground/wave** with hand-drawn texture | bright `#ED7328` curved shape transitioning into next section | ❌ MISSING | ❌ ADD — appears to be either a custom shape or part of `Slider/big-orange-shape-desktop.svg` re-used. Cobalt fennel/wheat sprig sits on top of it. |
| Small green dot/diamond bottom-left | tiny dot detail | ⚠️ not visible | ⚠️ minor, low priority |
| Top transitional cobalt leaves (carryover from hero wave) | leaves sit at top of section, half-cropped by the hero-wave above | not in this section's Figma render (would be inherited from the Section 1 wave) | ✅ likely OK |

### Summary for Section 2

**Add:**
1. **Right-side toast photograph** — major missing visual element. Without it the right half of the section feels empty.
2. **Bottom-right orange organic shape** with cobalt sprig overlay — transitional ground into the next section.

**Verify / refine:**
3. Paragraph column width — original wraps at 3 lines; Figma at 4. Either widen the paragraph container or reduce body font from 24px down slightly.
4. Pink/coral brush stroke color — confirm hue matches `#F09A9F`-ish coral, not magenta.
5. Re-render once ITC Avant Garde Std Bk is installed.

**Already correct:** body copy text, MEET US button, nut-1/nut-2 placements, left cashew-knife-leaves illustration, crumbs detail.

---

## Section-order correction

After mapping the live palais.bio's actual section y-positions, the order on the live site is:

| # | y (live) | Section |
|---|---|---|
| 1 | 0 | Hero ("Grow your plant kitchen" + "The future of cooking - today") |
| 2 | ~600 | Intro ("Pa'lais exists because…" + toast) |
| 3 | 1828 | **Recipe slider** ("Incredible recipes that will take your taste buds…") |
| 4 | 2770 | "Spready, saucy and non-dairy!" + Pa'lais Spreads + Pa'lais Cuisine banners |
| 5 | 4020 | "You are Pa'lais" |
| 6 | ~4400 | (between You-are and Finder — possibly community/values block) |
| 7 | 4893 | Got any questions? / PA'LAIS finder banner |
| 8 | 5597 | Newsletter signup ("You probably don't want another newsletter…") |
| 9 | 6011 | Footer |

The Figma file uses corresponding y-slots; my earlier section breakdown assumed a "4-packshots row" between Intro and Recipe-slider that doesn't exist on the live site. **Section 3 in Figma (y=1929..2525, slot `275:6074`) is the Recipe slider slot — currently an empty placeholder.**

---

## Section 3 — Recipe slider ("Incredible recipes…")

Figma node: `275:6074` "Placeholder for Section (margin)" at y=1929 → contains empty `275:5798` at y=100. **No content built yet.**

Reference screenshots: `03-recipeslider-palaisbio.jpeg` (full section captured at scroll 1700px / viewport 1440), `03-products-figma.png` (empty Figma slot)

### Live palais.bio composition (what to build)

| Element | Details |
|---|---|
| Right-side orange organic blob | Saturated `#ED7328` covering right ~50% of section. Use `assets/Slider/big-orange-shape-desktop.svg` or `big-orange-shape-mask-slider.svg`. |
| Cobalt botanical sprigs on the blob | Hand-drawn sprigs (fennel/wheat) sitting on top of the orange shape. |
| "INCREDIBLE / RECIPES" headline | white `#FFFFFF`, **hwt-artz** ~72/56 wood-type display, two-line stack. |
| Sub-headline "that will take your taste buds to / heaven and back" | white, **Delivery Note DEMO** handwritten, ~33–48px. |
| Body paragraph (~5 lines) | white ITC Avant Garde Std Bk, 14–16px. Copy: "'Vegan food is bland and boring.' You've heard it, we've heard it. It's why we make Pa'lais so delicious. Try it out with these delicious recipes, or get inspired to do your own thing." |
| "CHECK OUT OUR RECIPES" CTA | dark cobalt `#234386` pill button, white Sonder Sans Black Rough 12–14 / 1.6px uppercase. |
| Recipe cards slider (3 cards) | Each card: food photograph background, dietary badge row top-left (vegan / vegetarian / lactose-free / soy-free / gluten-free SVGs from `assets/Dietary/`), cooking-time pill top-right (`assets/ICONS/cooking-time.svg` + "25 min"/"30 min"/"10 min" in Delivery Note DEMO 16px cobalt), title overlay bottom-left in white hwt-artz 32px, difficulty stars bottom-right (`assets/ICONS/difficulty-lvl1.svg`). |
| Card titles (from metadata) | "Falafel wraps with roasted carrot-beet salad and pickles" (25 min), "Strawberry toast with lemon, basil and balsamic vinegar" (10 min), "Sourdough toast with roasted vegetables" (25 min), "Three coloured zucchini-tomato tian with basil" (30 min). |
| Slider arrows | small left/right cobalt outlined circles with arrows — use `assets/Slider/Slider-arrow.svg`. |
| Decorative chive/scallion scatter (bottom-left under cards) | green plant photography sprinkled as accents — bridge to next section. |

### Status

❌ **Entirely unbuilt in Figma.** All elements above need to be added to the `275:6074 / 275:5798` slot.

### Recommended build order

1. Drop the big orange shape (`big-orange-shape-desktop.svg`) on the right half as a background mask.
2. Add the cobalt sprig decorations on top of the orange.
3. Build the headline stack: hwt-artz H1 "INCREDIBLE RECIPES" + Delivery Note H2 + body paragraph + CTA button (cobalt pill).
4. Build a single recipe card component (with dietary badges, cooking-time pill, title, difficulty), then instance it 3× side-by-side.
5. Add slider arrows below the cards.
6. Drop chive/scallion photo accents at the bottom-left for the bleed into the next section.

---

## Section 4 — "Spready, saucy" headline + Spreads & Cuisine banners

The live palais.bio fuses these into one visual block, but in your Figma file they are **two adjacent Body children**:

| Sub | Figma node | y-range | What's there |
|---|---|---|---|
| 4a | `275:6075` "Section (margin)" → `275:5799` "Section" | 2525..3247 | Spready Saucy headline + body paragraph + pasta bowl photo top-left, single small nut top-right |
| 4b | `275:5826` "Section" | 3247..3943 | Green-left / yellow-right dual banner pair (Pa'lais Spreads + Pa'lais Cuisine) |

Reference screenshots: `04-spready-figma.png`, `04b-5826-figma.png` (dual banners — built well!), `04-spready-palaisbio.jpeg` (combined live view)

### 4a — "Spready, saucy / and non-dairy!"

| Element | Original | Figma | Status |
|---|---|---|---|
| H2 line 1 "SPREADY, SAUCY" with em-dash flourishes on both sides | Sandman_Fill 72/47.5 cobalt; small "—" dashes left+right | ✓ headline present, dashes not visible | ⚠️ add side dashes (small horizontal cobalt strokes) |
| H2 line 2 "and non-dairy!" with dash flourishes | Sandman_Fill same line as above, smaller; dashes left+right | ✓ present | ⚠️ add side dashes |
| Centered body paragraph "To make Pa'lais, first we take some organic cashews…" | ITC Avant Garde Std Bk centered, cobalt | ✓ copy matches, centered, cobalt | ✅ (verify font after install) |
| Top-left pasta bowl photograph with cashew + chive scatter accents | full-color photo, bowl with broccoli/zucchini noodles in cream sauce | ✓ present with chive scatter | ✅ |
| Top-right toast (creamy spread + cucumber/microgreens) photograph | full-color food photo, anchors the right side | ❌ only a single tiny cashew nut floating — missing the full toast hero shot | ❌ ADD the toast photograph (use `Spread-Garlic-Herbs-Toast` or similar from palais.bio uploads) |

### 4b — Dual product banners (Spreads + Cuisine)

| Element | Original | Figma | Status |
|---|---|---|---|
| Left half green background | `#A2D3A6` mint with diagonal cut-edge meeting yellow on right | ✓ green present with diagonal split | ✅ |
| Right half yellow background | warm gold `#F2C94C`-ish with diagonal cut-edge | ✓ yellow present | ✅ |
| Left: Two Pa'lais Spread packshots (Nature + Cucumber-Chives) angled overlap | 3D product packshots floating left, large | ✓ packshots present | ✅ |
| Left H3 "PA'LAIS / SPREADS" | hwt-artz white H3 46/40 | ✓ "PA'LAIS SPREADS" two-line | ✅ (verify font after install) |
| Left body "Our spreads have incredible fresh flavours…" | ITC Avant Garde Std Bk white | ✓ copy + color OK | ✅ |
| Left CTA "SPREAD THE LOVE" | white pill button with cobalt text Sonder Sans | ✓ white pill | ✅ |
| Right: Pa'lais Cuisine sauce packshot (Bechamel + Pasta Sauce) | sauce packshots in 3D angled | ✓ present (Bechamel + Pasta) | ✅ |
| Right H3 "PA'LAIS / CUISINE" | hwt-artz white H3 46/40 | ✓ "PA'LAIS CUISINE" two-line | ✅ |
| Right body "Pa'lais plant-based sauces are pretty simple…" | ITC Avant Garde Std Bk white | ✓ copy + color OK | ✅ |
| Right CTA "GET SAUCY!" | white pill button | ✓ white pill | ✅ |

### Summary for Section 4

**Add (4a):**
1. Side em-dash flourishes around both "SPREADY, SAUCY" and "and non-dairy!" lines
2. Toast photograph on the top-right (currently just a small nut)

**Already correct (4b — well-built!):** green/yellow split background, both H3s, both body copies, both packshot arrangements, both pill CTAs. This is the most polished section so far.

---

## Re-mapping discovery — corrected Figma section list

| # | Figma node | y-range | What's actually built | Status |
|---|---|---|---|---|
| 1 | `275:6837` | 0..1193 | Hero (Section 1) | mostly built |
| 2 | `275:6893` | 1193..1929 | Intro (Section 2) | mostly built |
| 3 | `275:6074 → 275:5798` | 1929..2525 | **EMPTY** — for Recipe slider | not built |
| 4a | `275:6075 → 275:5799` | 2525..3247 | "Spready, saucy" headline + paragraph + pasta bowl | mostly built |
| 4b | `275:5826` | 3247..3943 | Spreads + Cuisine dual banners | **fully built** ✅ |
| 5 | `275:5875` | 3947..4931 | "You are Pa'lais" + Instagram promo cards (community) | needs verification |
| 6 | `275:5922` | 4927..5757 | Pa'lais Finder + Got Any Questions blue banner pair | **built** ✅ (see `07-5922-figma.png`) |
| 7 | `275:6783` / `275:5955` | 5757..6107 | Newsletter signup slot | pending check |
| 8 | `275:5956` | 6107..6635 | Footer | pending check |

This means tasks 5–9 in the list cover the remaining 4 actual sections in Figma (You-are-Pa'lais, Finder/Questions, Newsletter, Footer).

---

## Section 5 — "You are Pa'lais" + community / Instagram cards

Figma node: `275:5875` "Section" at y=3947..4931 (2545×984)

Reference screenshots: `05-youare-palaisbio.jpeg`, `05-youare-figma.png`

### Element by element

| Element | Original | Figma | Status |
|---|---|---|---|
| H2 line 1 "YOU ARE" | wood-type **hwt-artz** large cobalt | ✓ "YOU ARE" present in same chunky style | ✅ (verify font after Adobe Fonts sync) |
| H2 line 2 "Pa'lais" | handwritten **Delivery Note DEMO** cobalt | ✓ present | ✅ |
| Body paragraph "There's plenty of room in our Plant Kitchen, come and chill with us…" | ITC Avant Garde cobalt, ~7 lines | ✓ copy matches, cobalt | ✅ |
| "DISCOVER" CTA | orange `#ED7328` outlined pill with arrow, Sonder Sans uppercase | ✓ orange outlined pill with arrow | ✅ |
| **Pink wave background** behind the Instagram cards (right side) | `Community/pink-wave1.svg` — large soft pink amorphous shape filling right half | ❌ MISSING — Figma has plain white background | ❌ ADD `assets/Community/pink-wave1.svg` as right-side background |
| Instagram post cards (3 cards, stacked overlapping) | Live IG embed showing real Pa'lais posts (Delhaize promos with women holding packshots, store shots) | ✓ 3 cards present with promo imagery, but lower-fidelity placeholders | ⚠️ swap for actual IG screenshots, or treat as design mock-ups |
| Tiny cashew nut accent (middle, between text and cards) | small cobalt nut SVG | ✓ present | ✅ |
| Top-left botanical leaves (cobalt sketch) | tiny botanical accent at top of section | ✓ present | ✅ |
| Mid-left larger leaves illustration | mid-section cobalt botanical | ✓ present | ✅ |
| Other community deco SVGs (`community-deco1.svg`, `community-deco2.svg`, `community-nut1.svg`, `community-nut2.svg`) | scattered decorative elements | ⚠️ may be missing scattered nuts | ⚠️ check for `community-nut1/2.svg` placements |

### Summary for Section 5

**Add:**
1. **Pink wave background** (`pink-wave1.svg`) behind the Instagram cards — major visual element
2. Smaller scattered community deco (nuts, sprigs) — `community-nut1.svg`, `community-nut2.svg`, `community-deco1/2.svg`

**Verify:** Instagram card stack styling (overlap angle, drop shadow opacity)

**Already correct:** YOU ARE / Pa'lais headline pair, body copy, DISCOVER button, top + mid botanical decoration, middle cashew nut.

---

## Section 6 — Pa'lais Finder + Got Any Questions banners

Figma node: `275:5922` "Section" at y=4927..5757 (2545×830)

Reference screenshots: `06-finder-palaisbio.jpeg`, `07-5922-figma.png` (Figma render)

### Dual banners

| Element | Original | Figma | Status |
|---|---|---|---|
| Left panel: light blue `#6AA8DC`-ish with **hand-drawn rough edges** (organic wavy outline, not rectangle) | irregular blue blob shape | ✓ rough-edged blue blob present | ✅ |
| Left: background photo (person holding Pa'lais cheese spread) with overlay | photo with ~50% blue tint multiply | ✓ photo with blue tint present | ✅ |
| "PA'LAIS FINDER" H3 | hwt-artz white 46/46 +2px letter-spacing | ✓ present | ✅ (verify font after Adobe Fonts sync) |
| Body "Pa'lais likes to hang out in nearby shops. Our web designer poured…" | ITC Avant Garde white | ✓ present | ✅ |
| Pill CTA — live shows "STORE LOCATOR" → in Figma shows placeholder "THIS BUTTON" | white pill, cobalt Sonder Sans uppercase text | ⚠️ Figma has placeholder "THIS BUTTON" text | ⚠️ rename to "STORE LOCATOR" (or to the intended product label) |
| Right panel: same rough-edged blue blob | irregular blue shape | ✓ present | ✅ |
| Right: background photo (smiling curly-haired woman) with overlay | ✓ | ✓ | ✅ |
| "GOT ANY / QUESTIONS?" H3 two-line | hwt-artz white 46/46 | ✓ present | ✅ |
| Body "Here's where you can see the questions people ask the most…" | ITC Avant Garde white | ✓ present | ✅ |
| "READ OUR ANSWERS" pill CTA | white pill, cobalt text | ✓ present | ✅ |

### Surrounding decorations (live site has, Figma missing)

| Element | Original | Figma | Status |
|---|---|---|---|
| Top-left botanical leaves (cobalt sketch) | small leaves SVG | ✓ partial — leaves at top-left | ✅ |
| Top-center floating cashew nut (SVG) | small cobalt nut | ✓ present | ✅ |
| Bottom-left: tian / casserole baking dish photograph | full-color food photo bleeding off left edge | ❌ MISSING | ❌ ADD as bridge decoration |
| **Bottom: orange/yellow speech bubble "So vegan"** | yellow bubble SVG with handwritten Delivery Note DEMO white text | ❌ MISSING | ❌ ADD — use a custom speech bubble shape + "So vegan" Delivery Note text |
| Bottom-right: cobalt fennel/wheat sprig | botanical line illustration | ❌ MISSING | ❌ ADD |
| Bottom: **green wave** (`pink-wave1.svg` variant?) starting the transition into newsletter section | full-bleed green wave | ❌ MISSING | ❌ ADD — likely a recolored variant of the wave shape |

### Summary for Section 6

**Add:**
1. Bottom-left tian/casserole photograph (bridge into next section)
2. "So vegan" speech bubble graphic (yellow bubble + Delivery Note text)
3. Bottom-right fennel sprig botanical sketch
4. Green wave divider at the bottom (transition to newsletter)

**Verify / refine:**
5. Rename Left panel CTA from "THIS BUTTON" placeholder to "STORE LOCATOR" (or final label)

**Already correct (well-built core):** both blue blob panels with organic rough edges, both H3 headlines, both body texts, both photo backgrounds with overlay, both pill buttons, top decoration.

---

## Section 7 — Newsletter signup

Figma node: `275:6783` "Section" at y=5757..6107 (2545×350)

Reference screenshots: `07-newsletter-palaisbio.jpeg`, `07-newsletter-figma.png`

| Element | Original | Figma | Status |
|---|---|---|---|
| Green wave background `sign-up-section-wave` | full-bleed green wave (sage `#A2D3A6`-ish) | ✓ present | ✅ |
| Top-left tian/casserole photo | full-color food photo bleeding off left edge | ✓ present | ✅ |
| Yellow speech bubble overlay on photo | yellow bubble with handwritten white text | ✓ present | ✅ shape |
| Speech bubble text | "So vegan" (Delivery Note DEMO white) | "Lactose free" (Delivery Note style) | ⚠️ different copy — confirm intent. Could be variant for different page state. |
| Center H2 headline "YOU PROBABLY DON'T WANT ANOTHER NEWSLETTER IN YOUR MAILBOX," | hwt-artz cobalt ~33/39 | ✓ present, matches | ✅ |
| Sub-headline "but then you'd miss our fantastic recipes" | Delivery Note DEMO cobalt | ✓ present | ✅ |
| Country selector dropdown ("BELGIUM ▼") | cobalt-bordered dropdown left of email input | ❌ MISSING in Figma | ❌ ADD dropdown component |
| Email input | white field with "Email" placeholder, cobalt text | ✓ present | ✅ |
| SUBMIT button | cobalt `#234386` fill, white Sonder Sans uppercase text | ✓ present | ✅ |
| Right-side cobalt botanical wheat + spoon illustration | line-drawn sprig with spoon | ✓ present | ✅ |
| Background SVG decorations (`bg-signup.svg`, `bg-signup-btn.svg`, `signup-plant-1.svg`, `sign-up-bubble-speed-07.png`, `sign-up-pic-4-min.png`) | various decorative elements | ⚠️ verify all are placed | ⚠️ low priority — mostly present visually |

### Summary for Section 7

**Add:**
1. **Country selector dropdown** (`BELGIUM ▼`) — left of email input

**Verify / refine:**
2. Speech bubble text — "Lactose free" vs "So vegan" — confirm intent (could be a content variant)

**Already correct:** green wave background, casserole photo + yellow bubble, hwt-artz cobalt headline, handwritten subtitle, email field, SUBMIT button, right-side botanical sprig.

---

## Section 8 — Footer

Figma node: `275:5956` "Footer" at y=6107..6635 (2545×528)

Reference screenshots: `08-footer-palaisbio.jpeg`, `08-footer-figma.png`

| Element | Original | Figma | Status |
|---|---|---|---|
| Background | cobalt `#234386` full-bleed | ✓ | ✅ |
| Pa'lais logo (negative / white) | `brand-logo-negative.svg` white with "THE PLANT KITCHEN" tagline | ✓ present | ✅ |
| MENU column H3 | hwt-artz uppercase white +1.6px tracking | ✓ | ✅ |
| MENU links: Get inspired, Our products, For a better world, Contact, FAQ, For professionals | Sonder Sans Black Rough 12 white | ✓ all 6 links present | ✅ |
| STORE LOCATOR column H3 | hwt-artz white | ✓ present | ✅ |
| **Pin icon next to STORE LOCATOR** | small `pin.svg` icon to the right of the H3 | ❌ MISSING in Figma | ❌ ADD `assets/pin.svg` |
| STORE LOCATOR body "We are available in various points of sale." | ITC Avant Garde white | ✓ | ✅ |
| CONTACT PA'LAIS column H3 | hwt-artz white | ✓ | ✅ |
| CONTACT PA'LAIS body "Do you have a question? Send it to us!" | ITC Avant Garde white | ✓ | ✅ |
| Horizontal divider line | thin white line across width | ✓ | ✅ |
| Legal: LEGAL INFORMATION / PRIVACY POLICY / POWERED BY AD | Sonder Sans Black Rough small caps white | ✓ all three present | ✅ |
| Socials (right): facebook / instagram / linkedin circular outlined icons | white outlined circles with white glyphs | ✓ present | ✅ |

### Summary for Section 8

**Add:**
1. Pin icon (`pin.svg`) next to STORE LOCATOR H3

**Already correct:** Everything else — this section is essentially done.

---

## Overall summary across all sections

| # | Section | Build status | Top gaps |
|---|---|---|---|
| 1 | Header + Hero | Mostly built | Top utility row missing; green organic blob behind leaves; fonts not installed |
| 2 | Intro | Mostly built | Right-side toast photograph; bottom-right orange organic shape |
| 3 | Recipe slider | **Not started** | Entire section to build (orange blob, headline, body, CTA, recipe cards, slider arrows) |
| 4a | "Spready, saucy" headline | Mostly built | Side dash flourishes; toast top-right photograph |
| 4b | Spreads + Cuisine dual banners | **Done** ✅ | — |
| 5 | "You are Pa'lais" + community | Mostly built | Pink wave background (`pink-wave1.svg`); scattered community nuts |
| 6 | Pa'lais Finder + Got Any Questions | Mostly built | Tian photo + speech bubble + fennel sprig + green-wave transition; rename "THIS BUTTON" placeholder |
| 7 | Newsletter signup | Mostly built | Country dropdown selector |
| 8 | Footer | **Done** ✅ | Pin icon (tiny) |

### Top priorities
1. **Build Section 3 (Recipe slider) from scratch** — it's the biggest missing piece. Use the asset folder `assets/Slider/` and `assets/ICONS/` plus `assets/Dietary/`.
2. **Install fonts** so existing typography renders correctly (5 of 6 needed are in `./fonts/*.ttf`; `hwt-artz` via Adobe Fonts sync).
3. **Add the pink wave** to Section 5 — easy fix, big visual impact.
4. Patch Section 1 (utility row + green blob) and Section 2 (toast).


