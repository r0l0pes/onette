# TECH_STACK.md

## Source of truth
Constraints:
- Free-first hosting (Vercel/Netlify/Cloudflare Pages)
- Static-first, no backend by default
- No new dependencies unless explicitly approved
- Tooling: ChatGPT + Claude Code; optionally Google Stitch + Google Antigravity

Reference for LLM-friendly docs: Context7 (Upstash) — use for up-to-date framework/library docs in coding workflows.

---

## Default stack (recommended)
### Framework
- **Astro (static site)** — ideal for content-first, high-performance sites with minimal JS.

### Language
- TypeScript (optional but recommended for content objects)
- CSS: plain CSS (tokens + utilities) or minimal CSS modules (no extra framework)

### Content
- JSON files in repo:
  - `site.json` (verified facts only)
  - `copy.en.json`, `copy.de.json` (all UI strings)
  - `seo.json` (titles/meta templates)

### Images
- Store curated images in `public/` (or `src/assets/` if using Astro image pipeline)
- Optimize via Astro built-ins where possible

---

## Tooling list (exact)
- Node.js LTS (developer machine)
- Package manager: npm (default)
- Formatter: Prettier (only if already included by Astro template; otherwise skip)
- Linting: optional; no new deps unless approved

---

## Deployment (free tier)
Choose ONE:
- **Vercel** (recommended) — simple Astro deploy
- Netlify — equally viable
- Cloudflare Pages — viable if team prefers

**Environment variables:** none required for static site.

---

## No new dependencies policy
- Use built-in Astro features first
- If something “needs a library”, pause and request approval before adding it

---

## Versioning note
- Framework versions should be set at repo creation time.
- If not specified, use current stable Astro at scaffold time.
