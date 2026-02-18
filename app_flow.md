# APP_FLOW.md

## Source of truth
- One-page site with anchored sections (no multi-page required)
- EN-first + DE toggle
- Core tasks: find info fast, get directions, view menu, switch language

---

## 1) Screen inventory (routes)
### `/` (single page)
Anchors/sections:
1. `#top` Hero
2. `#info` Quick info (hours/address/walk-ins/card)
3. `#day-night` Day → night
4. `#menu` Menu highlights
5. `#gallery` Gallery
6. `#press` Press links (optional, only if links exist)
7. Footer

---

## 2) User journeys
### Journey A — “Find info fast”
**Entry:** lands on `/` via search/IG  
**Goal:** confirm hours + address quickly  
**Flow:**
1) Hero (glance concept)  
2) Quick info strip shows hours/address immediately  
3) Sticky CTA provides Directions  

**Success:** user has hours + address without scrolling more than ~1 screen on mobile.

### Journey B — “Get directions”
**Entry:** mobile user  
**Flow:**
1) Tap “Directions” CTA (hero or sticky)  
2) Opens Google Maps link (new tab/app)

**Success:** maps opens reliably; no embedded map needed.

### Journey C — “View menu”
**Entry:** user wants food snapshot  
**Flow:**
1) Tap “Menu” CTA (scroll to `#menu`)  
2) Sees curated highlights + “menu may change” note  
3) Optionally sees gallery food imagery

**Success:** user sees representative items in <15 seconds.

### Journey D — “Language toggle”
**Entry:** DE-prefers  
**Flow:**
1) Tap language toggle (EN/DE)  
2) Page updates all UI strings  
3) Choice persists on refresh

**Success:** no mixed-language fragments; toggle is reliable.

---

## 3) Error / empty states
### Press links missing
- Hide Press section entirely OR show minimal “Press (TBD)” only in private demo mode (recommended: hide if empty).

### Gallery missing
- Hide gallery section; maintain layout rhythm.

### Menu highlights missing
- Show: “Menu highlights coming soon.” (EN/DE), without inventing items.

---

## 4) Mobile behavior
- Sticky bottom CTA visible after hero (or after slight scroll)
  - Buttons: Directions, Menu
- Section spacing increased for thumb scanning
- Tap targets >= 44px
- Language toggle accessible in header and/or footer
- Reduced motion: no parallax; no “animated” gradients; transitions minimal
