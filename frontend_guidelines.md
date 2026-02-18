# FRONTEND_GUIDELINES.md

## Source of truth
- Brand answers provided by user (pillars, voice, taboo)
- IG bio + caption screenshots for vibe and language patterns
- Photos: warm wood, checkerboard, lace curtains, clean plates, editorial food shots
- Hard constraints: no phone, walk-ins only, hours from IG bio, EN-first + DE toggle

---

# 1) Design brief (integrated)

## Brand pillars (3)
1) **Day-to-night duality** (luncheonette → wine bar)
2) **Neighborhood warmth / “always been here” familiarity**
3) **Intentional editorial identity** (quiet polish, magazine-like restraint)

## Tone of voice
**Do**
- Warm, playful, confident
- Short sentences, friendly clarity
- EN-first; DE is “international Berlin German” (clear, lightly informal)

**Don’t**
- Corporate / startup / techy
- Flashy trend hype
- Fine-dining formality / pretension
- Unverifiable superlatives (“best”, “award-winning”)

## Visual keywords (8–12)
Warm wood • checkerboard floor • lace café curtains • booths by the window • pendant lamps • bright whites • crisp plates • editorial close-ups • soft shadows • neighborhood street view • calm grid • understated charm

## Day → night narrative (one sentence)
**From bright, comforting breakfast/lunch (10–15) to a relaxed wine-bar mood (Thu–Sat from 15:00), designed for lingering.**

---

# 2) Design principles (brand → UI)
1) **Immediate trust layer:** hours/address/directions visible fast on mobile
2) **Editorial restraint:** strong typography + whitespace > decorative effects
3) **Warm materiality:** wood/cream tones, not “tech white”
4) **Subtle day→night shift:** gentle temperature shift, not animations-as-a-feature
5) **Content-first:** sections read like a well-edited menu/magazine spread

---

# 3) Design tokens (initial proposal)
These are *tokens for the demo*; final palette can be refined after implementation preview.

## Colors (hex)
- Ink (primary text): `#111111`
- Warm white (background): `#FAF8F2`
- Paper (surface): `#FFFFFF`
- Wood (accent): `#A06A3B`
- Amber (night accent): `#C07A2C`
- Muted line (borders): `#E8E2D6`
- Soft shadow: `rgba(17,17,17,0.08)`

**Day→night rule**
- Day uses more Warm white + Wood
- Night sections introduce Amber accents + slightly deeper surfaces (still light)

## Typography (mood)
Goal: editorial + friendly warmth.
- Headings: modern serif OR sharp editorial sans (choose one at build time)
- Body: highly readable neutral sans

**Type scale**
- H1: 40–44 (mobile), 56–64 (desktop)
- H2: 24–28 / 32–40
- H3: 18–20 / 22–24
- Body: 16–18
- Small: 13–14

## Spacing scale
- 4, 8, 12, 16, 24, 32, 48, 64

## Radii
- Cards: 16
- Buttons: 999 (pill) or 12 (soft)
- Images: 16

## Shadows
- 1: subtle card lift
- 2: hover lift (slightly stronger)
Keep shadows soft; no heavy glows.

## Motion timings
- Fast: 120ms
- Normal: 180ms
- Slow: 240ms
**Reduced motion:** disable non-essential transitions.

---

# 4) Layout + breakpoints
## Breakpoints
- xs: 360
- sm: 480
- md: 768
- lg: 1024
- xl: 1280

## Layout rules
- Mobile-first; hero + quick info within first ~1.25 screens
- Max width: 1100–1200 on desktop
- Consistent vertical rhythm: section padding 48–72 desktop, 28–40 mobile

---

# 5) Components (required) + rules
## Header / Navbar
- Minimal: logo + anchors + language toggle
- On mobile: compact header; anchors can be a simple menu

## Hero
- Positioning line + short supporting copy
- Primary CTA: Directions
- Secondary CTA: Menu
- One strong photo (interior or signature food)

## Quick info (critical)
Must include (verified-only):
- Walk-ins only
- Hours string (IG bio)
- Address
- Card accepted
- Directions CTA

## Highlight cards (Day / Night)
- Two cards with distinct feel (day brighter, night warmer)
- Keep copy short and clear

## Menu highlights
- Curated list; do not overwhelm
- Add “Menu highlights (snapshot)” and “May change” microcopy

## Gallery
- Grid of images; editorial spacing
- Optional lightbox
- Keyboard support if lightbox exists

## Press links
- Outbound list; no claims beyond linking
- If empty, hide section

## Sticky CTA (mobile)
- Two buttons: Directions + Menu
- Avoid covering content; add bottom padding

## Footer
- Minimal: address, hours string, walk-ins only, language toggle
- Public concept demo label if applicable

---

# 6) Microinteractions
- Hover: gentle lift + underline
- Scroll: subtle section divider reveals (no parallax)
- Day→night: gradual accent shift across sections
- Focus: clear focus ring on all interactive elements

---

# 7) Accessibility (implementation, not claims)
- Contrast: meet WCAG AA where possible
- Keyboard navigation: all controls reachable
- Focus-visible states
- Reduced motion support
