---
name: frontend-design
description: Visual polish for Onette Berlin. Use when asked to build, style, or refine UI components.
---

# Frontend Design — Onette Berlin

Astro 4 static site + Tailwind 3. Single file: `src/pages/index.astro`. Styles: `src/styles/global.css` + `tailwind.config.mjs`.

## Aesthetic Direction

Editorial/magazine restraint meets neighborhood warmth. "Always been here" — quietly polished, never techy. Day-to-night duality felt through gradual color temperature shift, not announced.

## Tokens (`tailwind.config.mjs`)

| Token | Value | Role |
|---|---|---|
| `primary` | `#bd580f` | Accent, CTAs, wine warmth |
| `ink` | `#1b130d` | Text, dark surfaces |
| `paper-warm` | `#FAF8F2` | Body bg |
| `paper-aged` | `#f2efe9` | Secondary bg (wine section) |
| `background-dark` | `#1a120b` | Dark mode / atmospheric |

Day sections: `paper-warm` bg, `ink` text, `primary` accents. Night sections: `paper-aged` or `ink` bg, amber tones.

## Typography (do not change)

- **Headings:** EB Garamond italic. H1 `text-6xl md:text-8xl`, H2 `text-4xl md:text-5xl`+, H3 `text-2xl`+
- **Body:** Inter 300-400, `text-base md:text-xl`, `leading-relaxed`
- **Labels:** Inter bold, `text-[10px] md:text-xs`, `tracking-[0.2em] uppercase`
- **Prices:** `.serif-heading` (EB Garamond)

Inter is the deliberate body choice here — paired with Garamond as the distinctive display. Do not replace.

## Key Patterns

- Sticky header: `bg-paper-warm/95 backdrop-blur-sm`, `h-16 md:h-20`
- Info strip: floating `-mt-10 md:-mt-16`, `rounded-2xl shadow-xl`
- Menu: sticky sidebar 1/3 + items 2/3 desktop, single column mobile
- Testimonials: snap-scroll carousel, `w-[85vw] md:w-[400px]`
- Language: `<span class="lang-en">` / `<span class="lang-de">` pairs, CSS-toggled

## Rules

- Transitions: `transition-colors`, `duration-700` on images. No parallax, no scroll-triggered animations, no `animate-*`.
- Hover: `group-hover:scale-105` images, `hover:text-primary` links.
- Tap targets: 44px min. Focus: `focus-visible:` ring on interactive elements.
- No new fonts, colors, dependencies, or files without approval.
- No gradients (except hero overlay), no shadows heavier than `shadow-xl`, no glow.
