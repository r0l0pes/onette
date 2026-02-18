# Claude.md

## Purpose
This file is the “operating contract” for AI coding tools (Claude Code + Google Antigravity).

## Non-negotiables
- Hours = Instagram bio only
- Payment = “Card accepted”
- EN-first + simple DE toggle
- Walk-ins only; no phone anywhere
- Omit dietary/takeaway/accessibility/events unless explicitly verified
- No review scraping; link out for reviews/maps
- Static-first; no backend by default
- No new dependencies unless explicitly approved

## Workflow rules
1) Canonical docs are in the project root: `prd.md`, `app_flow.md`, `tech_stack.md`, `frontend_guidelines.md`, `backend_structure.md`, `implementation_plan_and_handoff.md`
2) Do not invent facts. If a field is unknown, mark as `TBD` and add a short verification note.
3) Keep the UI tasteful and calm: typography + spacing + photos, not flashy effects.
4) Implement accessibility best practices (focus states, keyboard nav, reduced motion).

## Content architecture
- `site.json` = verified facts only
- `copy.en.json` and `copy.de.json` = all UI strings
- Components must not hardcode copy except keys/fallbacks.

## “Stop” conditions
- If asked to add a new dependency, stop and request explicit approval.
- If asked to add unverified claims (ratings, phone, accessibility), stop and mark as TBD.
