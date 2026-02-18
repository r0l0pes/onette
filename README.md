# docs/README.md

## Purpose
This folder contains the **canonical documentation** (source of truth) for the Onette café website demo project.

These docs exist to:
- prevent scope drift
- enforce truthfulness (no invented facts)
- keep design consistent
- let AI coding tools execute reliably without guessing

---

## Read order (humans)
1) **PRD.md** — what we’re building, what success means, what’s in/out, content truth rules  
2) **FRONTEND_GUIDELINES.md** — brand → UI rules, tokens, components, microinteractions, accessibility  
3) **APP_FLOW.md** — one-page structure, routes/anchors, user journeys, mobile behavior, empty states  
4) **BACKEND_STRUCTURE.md** — static-only rules, schema, local SEO + AEO starter, reviews policy  
5) **TECH_STACK.md** — stack choices, deployment, dependency policy  
6) **IMPLEMENTATION_PLAN_AND_HANDOFF.md** — step-by-step milestones + tool prompts

After that:
- `../progress.md` — where we are right now (execution state)
- `../Claude.md` — rules for AI tools (must-follow constraints)

---

## Read order (AI tools: Claude Code / Google Antigravity)
**Always read in this order:**
1) `../progress.md` (execution state + what’s next)
2) `../Claude.md` (non-negotiables + stop conditions)
3) `PRD.md`
4) `APP_FLOW.md`
5) `FRONTEND_GUIDELINES.md`
6) `BACKEND_STRUCTURE.md`
7) `TECH_STACK.md`
8) `IMPLEMENTATION_PLAN_AND_HANDOFF.md`

**Rule:** If anything conflicts, the priority is:
`progress.md` (current decisions) → `Claude.md` (rules) → canonical docs.

---

## Files in this folder (links)

- **[PRD.md](PRD.md)**  
  Product requirements, scope, success criteria, verified vs TBD rules, compliance.

- **[FRONTEND_GUIDELINES.md](FRONTEND_GUIDELINES.md)**  
  Design brief + tokens + components + interaction/accessibility rules.

- **[APP_FLOW.md](APP_FLOW.md)**  
  One-page anchors, user journeys, mobile behavior, empty/optional sections.

- **[BACKEND_STRUCTURE.md](BACKEND_STRUCTURE.md)**  
  Static-only policy, forms/reviews policy, schema fields, Local SEO + AEO starter.

- **[TECH_STACK.md](TECH_STACK.md)**  
  Free-first stack, deployment options, “no new deps without approval” rule.

- **[IMPLEMENTATION_PLAN_AND_HANDOFF.md](IMPLEMENTATION_PLAN_AND_HANDOFF.md)**  
  Milestones + verification steps + exact prompts for Stitch/Antigravity/Claude Code.

---

## Quick start (single sentence)
To start implementation: read `../progress.md`, follow `../Claude.md`, then execute Milestones 0→6 from `IMPLEMENTATION_PLAN_AND_HANDOFF.md` without adding new dependencies or inventing facts.
