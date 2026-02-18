---
name: seo-audit
description: SEO audit for Onette Berlin. Use when checking meta tags, schema, headings, or local SEO.
---

# SEO Audit — Onette Berlin

Local business one-page static site (Astro 4). Single file: `src/pages/index.astro`. Domain TBD (`https://onette.berlin` is placeholder). EN default, DE via client-side CSS toggle (both languages in HTML source).

## Priority Keywords

"breakfast Schöneberg", "lunch Berlin Schöneberg", "wine bar Schöneberg", "Onette Berlin", "luncheonette Berlin", "walk-ins Berlin"

## Current Meta (audit against this)

- Title: `Onette Berlin` — too short, no keywords
- Description: present but doesn't match recommended copy
- OG image: relative path (`/images/hero-wide.png`) — should be absolute
- No canonical tag, no Twitter Card, no hreflang, no robots.txt/sitemap

**Recommended (from `backend_structure.md`):**
- EN title: `Onette — Breakfast & Lunch in Schöneberg (walk-ins only)`
- EN desc: `A New York-style luncheonette with neighborhood soul in Schöneberg. Breakfast & lunch by day, wine and snacks Thu-Sat from 15:00. Walk-ins only.`
- DE title: `Onette — Frühstück & Lunch in Schöneberg (ohne Reservierung)`
- DE desc: `Eine Luncheonette im New-York-Stil mit Kiezgefühl in Schöneberg. Frühstück & Lunch, und Do-Sa ab 15:00 Wein & Snacks. Walk-ins only.`

## JSON-LD Schema

**Verified fields (keep):** name, address, openingHoursSpecification, acceptsReservations: false, paymentAccepted: "Card"
**Missing (should add):** `sameAs`: `https://www.instagram.com/onette_berlin/`
**Flag as unverified:** `geo` coords, `servesCuisine`, `priceRange` — present but not confirmed in source docs
**Must NEVER appear:** telephone, aggregateRating, review, menu URL, accessibility claims, awards

## Heading Hierarchy (expected)

One H1 ("New York Style."). H2s for About, Menu, Atmospheric, Wine Bar. H3s for menu categories. Check for skipped levels and headings used only for styling.

## NAP Consistency

Every instance must match: **Onette** / **Grunewaldstraße 11, 10781 Berlin** / **No phone anywhere**.

## Quick Checks

- [ ] All images have descriptive `alt` text
- [ ] `favicon.svg` exists in `public/`
- [ ] Outbound press links: `target="_blank" rel="noopener noreferrer"` and URLs are live
- [ ] OG image absolute URL
- [ ] Consider `FAQPage` schema for the info strip Q&As (verified only)
- [ ] No analytics/tracking scripts without approval
