# BACKEND_STRUCTURE.md

## Source of truth
Default is **no backend**. Static-only.

Constraints:
- Link out for maps and reviews
- No review scraping
- No ratings/counts unless explicitly verified inputs are provided
- Verified-only fields in schema

---

## 1) Backend
### Default
- None.

### Forms
- Default: **mailto fallback** (no third-party dependency)
- Optional (only if approved later): third-party form handling free tier
  - Not included by default

---

## 2) Reviews policy
- Do not scrape or display Google review text automatically.
- Allowed:
  - “Read reviews” link to Google Maps listing
  - Optional “themes only” section **only if** themes are derived from owner-provided text or explicitly approved summaries

---

## 3) SEO + Schema (JSON-LD)
Use **CafeOrCoffeeShop** (or LocalBusiness subtype) with verified-only fields.

### Verified fields we can include
- `@type`: CafeOrCoffeeShop
- `name`: Onette
- `address`:
  - streetAddress: Grunewaldstraße 11
  - postalCode: 10781
  - addressLocality: Berlin
  - addressCountry: DE
- `openingHoursSpecification`:
  - Use IG bio hours as displayed (two blocks: breakfast/lunch; wine bar Thu–Sat)
- `acceptsReservations`: false (walk-ins only)
- `paymentAccepted`: "Card accepted"
- `url`: TBD until deployed
- `sameAs`: Instagram profile URL

### Fields to OMIT unless explicitly verified
- telephone
- geo (unless verified)
- priceRange (unless verified)
- servesCuisine (unless verified)
- accessibility features
- aggregateRating / review
- menu URL unless verified

**Verification plan**
- After deployment, set `url` and canonical.
- If owners provide more details (phone/email/legal), update schema.

---

## 4) Local SEO starter (safe + truthful) + AEO
### Titles/meta (EN/DE)
**EN (default)**
- Title: `Onette — breakfast & lunch in Schöneberg (walk-ins only)`
- Meta description (EN): `A New York–style luncheonette with neighborhood soul in Schöneberg. Breakfast & lunch by day, wine and snacks Thu–Sat from 15:00. Walk-ins only.`

**DE (toggle)**
- Title: `Onette — Frühstück & Lunch in Schöneberg (ohne Reservierung)`
- Meta description (DE): `Eine Luncheonette im New-York-Stil mit Kiezgefühl in Schöneberg. Frühstück & Lunch, und Do–Sa ab 15:00 Wein & Snacks. Walk-ins only.`

*(Keep DE “international Berlin German”: simple, lightly informal.)*

### H1/H2 structure
- H1: `Onette` + one-line positioning
- H2: `Today at a glance` / `Auf einen Blick` (hours, address, walk-ins, card accepted)
- H2: `Day → night` / `Tag → Abend`
- H2: `Menu highlights` / `Menu-Highlights`
- H2: `Gallery` / `Galerie`
- H2: `Press` / `Presse` (optional)

### Internal linking (if multi-page later)
Not needed for one-page demo.
If later expanded:
- `/menu` → highlights + PDF/photo menu
- `/visit` → hours/address/directions
- `/press` → links

### Schema.org JSON-LD fields (CafeOrCoffeeShop)
Include only verified:
- name, address, openingHoursSpecification, acceptsReservations=false, paymentAccepted, sameAs, url (TBD)

### GBP (Google Business Profile) checklist (owner-facing)
- Confirm primary category (e.g., Café / Restaurant) — owner choice
- Ensure hours match IG bio (or decide canonical later)
- Add “Walk-ins only” in description or attributes if available
- Add menu link (if official URL exists)
- Upload best interior + food photos
- Ensure address pin is correct

### NAP consistency checklist
- Name: Onette (consistent spelling)
- Address: Grunewaldstraße 11, 10781 Berlin
- Phone: none listed publicly (consistent: do not invent)
- Website: set after launch
- Instagram: onette_berlin

### AEO (answer engine optimization) additions (safe)
Add an on-page “Quick answers” block (EN/DE) with verified-only Q&A:
- “Where is Onette?” → address + directions CTA
- “When are you open?” → IG bio hours string
- “Do you take reservations?” → Walk-ins only
- “Can I pay by card?” → Card accepted
*(This improves snippet/AI answer readiness without making new claims.)*
