# PRD.md

## Source of truth
This PRD is built strictly from:
- Instagram profile bio + provided IG caption screenshots (primary truth for hours + rules)
- Provided menu photo (menu items/prices are *best-effort snapshots*, can change)
- Provided Google Maps screenshot (used only for what is visible/verified)
- Provided press links list (used as outbound references only)

**Hard constraints (non-negotiable)**
- Hours source = Instagram bio only
- Payment = “Card accepted” (no breakdown)
- EN-first + simple DE toggle
- Walk-ins only; no phone
- Omit dietary / takeaway / accessibility / events unless explicitly verified
- Static-first; link-out for maps/reviews
- No new dependencies unless explicitly approved
- No fake claims; if public, label “Concept demo / redesign study”

---

## 1) Problem statement
Onette’s presence lives primarily on Instagram; that’s great for storytelling but not ideal for:
- fast, stable “trust info” (hours, address, directions)
- clarity on the day→night concept
- a polished, owner-ready “this is what your website could be” demo

We need a **demo-first, mobile-first, tasteful-wow** site concept that feels like Onette: warm, editorial, neighborhood, not techy.

---

## 2) Mission
Create a **one-page café website demo** for Onette in Berlin that:
- communicates the concept (luncheonette → wine bar) instantly
- makes essential info frictionless (hours, address, directions)
- uses verified info only
- feels “always been here” + quietly polished

---

## 3) Target users
### Primary
- People nearby in Berlin searching “breakfast”, “lunch”, “wine bar”, “Akazienkiez/Schöneberg”
- Friends-of-friends who heard about Onette and need basics fast

### Secondary
- Visitors coming from press links / Instagram who want “the stable layer”
- Potential collaborators / local community who want context + directions

---

## 4) Success criteria
### Business
- Owners can say: “Yes, this feels like us. This is a website we’d publish.”
- A shareable URL demo exists (private link) for owner pitch.

### UX
- On mobile, a user can find **hours + address + directions in <10 seconds**.
- EN-first + DE toggle works across all UI strings.

### Technical
- Static build, deployed on a free tier (Vercel/Netlify/Cloudflare Pages)
- Lighthouse-style strong performance baseline (no heavy scripts; optimized images)
- JSON-LD schema included with **verified-only** fields

---

## 5) Scope
### In scope
- One-page site (anchors/sections)
- Language toggle EN/DE (simple “international Berlin German”)
- Menu highlights (only from provided menu photo)
- Gallery (from provided photos; owner demo only)
- Press links (outbound only)
- Basic SEO: titles, metas, OG, JSON-LD, robots/sitemap if supported by framework
- Map CTA: link out to Google Maps

### Out of scope
- Online ordering, reservations, table booking (walk-ins only)
- CMS, admin, login, database
- Review scraping, showing rating counts unless explicitly verified and approved
- Accessibility claims (we implement accessibility best practices, but don’t make claims)
- Event calendar / recurring pop-ups unless explicitly verified as ongoing

---

## 6) Content policy: Verified vs TBD
### Verified (allowed to publish in demo)
- Name: Onette
- Address: Grunewaldstraße 11, 10781 Berlin
- Walk-ins only
- Hours string from IG bio:
  - Breakfast & Lunch: Tue–Sun 10:00–15:00
  - Wine Bar & Snacks: Thu–Sat 15:00–22:00
- Payment: Card accepted
- No public phone number (do not display)
- Press links provided by user (outbound)

### TBD / placeholders (allowed only as placeholders, not claims)
- Contact email (placeholder): info@onette.berlin
- Any “about” story details not explicitly in IG/press
- Full wine list / aperitivo specifics beyond what’s verified (keep generic)

**Verification plan (only if needed)**
- If owners want changes, request a single “Owner verification pack” (copy/paste):
  - preferred email, any official website domain, definitive menu highlights to feature, any legal imprint requirements, photo permissions for public launch

---

## 7) Feature list with acceptance criteria
### F1 — Hero + positioning
**Acceptance**
- Hero communicates “NY-style luncheonette + Eckkneipen flair + day-to-night”
- Primary CTA: Directions (maps link)
- Secondary CTA: Menu (scroll)

### F2 — Quick info strip
**Acceptance**
- Shows: Walk-ins only, Hours (IG bio string), Address, Card accepted
- No phone displayed anywhere

### F3 — Day → night highlight
**Acceptance**
- Two concise cards/sections: Day (breakfast/lunch), Night (wine/snacks Thu–Sat)
- Subtle visual shift as user scrolls (no flashy animations)

### F4 — Menu highlights
**Acceptance**
- Uses only items from provided menu photo (short list)
- Includes “menu may change” microcopy (non-claim)

### F5 — Gallery
**Acceptance**
- Uses provided images (IG + maps photos as available)
- Lightbox optional; keyboard accessible if implemented

### F6 — Press links
**Acceptance**
- Outbound links only; no “best in Berlin”, no invented quotes
- Copy is factual: “Press” / “Read more”

### F7 — Language toggle EN/DE
**Acceptance**
- EN default; DE toggle persists (localStorage)
- All UI strings switch, not just part

### F8 — SEO + schema
**Acceptance**
- Title/meta in EN + DE variants
- JSON-LD schema with verified-only fields
- No ratings/counts unless explicitly verified inputs provided

---

## 8) Concept demo vs official compliance
### Private owner demo
- Can use real photos and brand assets provided (for pitch only)

### Public concept demo
- Only if/when owners buy and approve publishing
- Must include visible footer label: **“Concept demo / redesign study”**
- Remove/replace any assets if licensing is unclear

---

## Appendix A — Design brief (visual/brand)
### Brand pillars (3)
1) **Day-to-night duality** (luncheonette → wine bar)
2) **Neighborhood warmth / “always been here” familiarity** (Eckkneipen soul)
3) **Intentional editorial visual identity** (quiet polish, magazine-like restraint)

### Tone of voice
**Do**
- Warm, playful, confident
- Simple, direct, human
- “International Berlin German” (clear, slightly informal)

**Don’t**
- Corporate / startup / techy language
- Trendy-for-trendy’s-sake hype
- Fine-dining pretension, awards/“best in Berlin” claims

### Visual keywords (8–12)
Warm wood • checkerboard floor • lace café curtains • booth by the window • soft pendant lamps • bright daytime whites • crisp plates • editorial food close-ups • neighborhood street view • simple typography • quiet modernism • “lived-in” comfort

### Day → night narrative (one sentence)
**From a bright, comforting luncheonette (10–15) to a relaxed wine-bar mood (Thu–Sat from 15:00), made for “stay for one more” hangs.**

### Design system direction
- **Typography mood:** modern editorial + friendly warmth (high readability, confident headings)
- **Layout rhythm:** generous whitespace, grid discipline, calm section pacing, “menu-as-editorial”
- **Photo treatment:** true-to-life, clean whites, warm neutrals; avoid heavy filters
- **Microinteraction style:** subtle (hover lifts, gentle scroll cues, warm-to-amber accent shift); always reduced-motion safe
