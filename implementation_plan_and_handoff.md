# IMPLEMENTATION_PLAN_AND_HANDOFF.md

## Source of truth
Executes strictly against:
- PRD.md
- APP_FLOW.md
- TECH_STACK.md
- FRONTEND_GUIDELINES.md
- BACKEND_STRUCTURE.md
- docs/STITCH_DESIGN_PACK.md (design + Stitch workflow)

Non-negotiables:
- Hours = Instagram bio only
- Payment = “Card accepted”
- EN-first + simple DE toggle
- Walk-ins only; no phone
- Omit dietary/takeaway/accessibility/events unless explicitly verified
- No new deps unless explicitly approved
- Static-first; link-out for maps/reviews

---

# 0) Design-first workflow (required)
Before implementation:
1) Use **docs/STITCH_DESIGN_PACK.md** in Google Stitch to produce the visual direction and component references.
2) Export/hand off the outputs (screens + component notes) to Google Antigravity for scaffold + consistency.
3) Then implement with Claude Code.

---

# 1) Implementation milestones (step-by-step)

## Milestone 0 — Repo + baseline scaffolding
**Goal:** Create repo skeleton aligned to TECH_STACK.md  
**Steps**
1) Scaffold Astro static site
2) Add `/docs` and paste canonical docs verbatim
3) Add `Claude.md` + `progress.md`

**Verification**
- Repo builds (placeholder page ok)
- Docs exist in `/docs`

---

## Milestone 1 — Design system foundations
**Goal:** Tokens + base styles + layout primitives  
**Steps**
1) Implement tokens (colors/type/spacing/radii/shadows/motion) from FRONTEND_GUIDELINES.md  
2) Implement base typography rules + link/button styles  
3) Add layout container + section spacing helpers  

**Verification**
- Typography feels editorial + warm
- Mobile spacing is comfortable; no visual clutter

---

## Milestone 2 — Component kit + page structure
**Goal:** Build components and wire one-page anchors  
**Components**
- Header, Hero, QuickInfo, HighlightCards, MenuHighlights, Gallery, PressLinks, Footer, StickyCTA, LanguageToggle
- Optional: Lightbox (only if time permits; keep accessible)

**Verification**
- Anchors work
- Sticky CTA works on mobile
- Reduced motion supported
- Focus states visible

---

## Milestone 3 — Content model + bilingual copy integration
**Goal:** Verified-only content in JSON + EN/DE UI strings  
**Steps**
1) Create `site.json` (verified facts only)
2) Create `copy.en.json` + `copy.de.json` (all UI strings)
3) Implement EN-first default + DE toggle persistence (localStorage)
4) Ensure empty states: press/gallery/menu sections hide if empty

**Verification**
- Language toggle switches everything
- No invented facts appear
- Menu highlights match provided menu photo only

---

## Milestone 4 — SEO + schema + performance
**Goal:** Indexable, fast, truthful  
**Steps**
1) Add meta tags + OG
2) Add canonical URL support (TBD until deployed)
3) Add JSON-LD schema (verified-only)
4) Optimize images (responsive/lazy)

**Verification**
- JSON-LD contains no forbidden fields
- Performance baseline strong (no heavy JS)

---

## Milestone 5 — Demo packaging (private vs public)
**Private owner demo**
- Full branding + photos ok for pitch

**Public concept demo** (only if/when owners buy)
- Add footer label: “Concept demo / redesign study”
- Ensure photo rights are resolved

---

## Milestone 6 — Deploy (free tier)
**Steps**
1) Deploy to Vercel/Netlify/Cloudflare Pages
2) Confirm mobile UX, links, language toggle, schema

**Verification**
- Shareable URL works on mobile
- Directions link opens correctly

---

# 2) Tool handoff prompts (implementation tools only)

## Google Antigravity (implementation scaffold + consistency)
### Prompt — Multi-file scaffold
“Generate an Astro static scaffold with components: Header, Hero, QuickInfo, HighlightCards, MenuHighlights, Gallery, PressLinks, Footer, StickyCTA, LanguageToggle. Add tokens.css + base.css. Wire an index page with anchors per APP_FLOW.md. No new dependencies.”

### Prompt — Content + copy files
“Create `site.json` (verified-only), `copy.en.json`, `copy.de.json`, `seo.json`. Ensure components read from these files. Hide optional sections when arrays are empty.”

### Prompt — SEO + schema
“Add meta/OG scaffolding and JSON-LD schema for CafeOrCoffeeShop using only verified fields. No phone, no ratings, no accessibility claims. Add a ‘Quick answers’ AEO block for verified-only Q&A.”

---

## Claude Code (implementation + polish)
### Prompt — Lane 1 (design + components)
“Implement tokens + base styles per FRONTEND_GUIDELINES.md and docs/STITCH_DESIGN_PACK.md references. Build accessible Astro components. Sticky CTA + focus-visible + reduced motion. No new deps.”

### Prompt — Lane 2 (content + EN/DE)
“Implement JSON content model and bilingual copy. EN-first + DE toggle with persistence. No invented facts. Menu highlights only from provided menu photo.”

### Prompt — Lane 3 (SEO + schema + perf)
“Add meta/OG + JSON-LD verified-only. Optimize images. Keep static. No analytics unless approved.”
