# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Breaking changes warning

This project uses **Next.js 16**, **React 19**, and **Tailwind CSS v4** — all of which have breaking changes relative to older training data. Before writing any code that touches Next.js APIs, routing conventions, or Tailwind config, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.

## Commands

```bash
npm run dev      # start dev server with Turbopack
npm run build    # static export to out/
npm run start    # serve the static export
npm run lint     # ESLint (Next.js flat config)
```

There are no tests.

## Architecture

Single-page marketing site for JARVINx (a local AI agent written in Go). All content lives on one route (`src/app/page.tsx`), which composes section components in order.

**Output:** `next.config.ts` sets `output: "export"` — the build produces a fully static `out/` directory. No server-side features (API routes, SSR, ISR) can be used.

**Component layout:**
- `src/components/sections/` — page sections (`Header`, `Hero`, `Why`, `Features`, `Agents`, `HowItWorks`, `Quickstart`, `Roadmap`, `Footer`). Each is self-contained.
- `src/components/ui/` — shared primitives: `Section` (consistent padding/max-width wrapper) and `SectionHeader` (title + optional subtitle). Always use these when adding new sections.

**Path alias:** `@/*` → `src/*`

## Styling

Tailwind v4 via `@tailwindcss/postcss`. No `tailwind.config.*` file — configuration is done in CSS.

Design tokens are CSS custom properties defined in `src/app/globals.css`:
```
--bg-base, --bg-surface, --border, --text-primary, --text-secondary, --accent (#22c55e green)
```
Use `style={{ color: "var(--text-primary)" }}` for themed colors rather than Tailwind color utilities, so the palette stays in one place.

**Critical pitfall — Tailwind v4 + Turbopack:** Never add a universal CSS reset (`* { margin: 0; padding: 0 }`) or any non-layered base styles in `globals.css`. Turbopack outputs non-layered styles with unconditional priority, which overrides all Tailwind utility classes (`mx-auto`, `p-6`, etc.). Tailwind v4's own preflight already handles resets.
