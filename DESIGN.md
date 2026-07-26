# Design language

High-contrast personal blog: black chrome on a whitesmoke page, hard borders, minimal radius and shadow, accents used sparingly.

**Source of truth for tokens:** `@theme` in [`app/globals.css`](app/globals.css). This doc maps roles and patterns; don’t invent new colors or scales without updating both.

## Colors

| Role | Token | Value | Utility |
|------|-------|-------|---------|
| Chrome / borders / underlines | `black` | `#222222` | `bg-black`, `border-black`, `text-black` |
| Page background; light text on chrome | `white` | `whitesmoke` | `bg-white`, `text-white` |
| Muted / secondary copy | `grey` | `#606060` | `text-grey` |
| Inline code tint (markdown) | `light-grey` | `#e1dede` | CSS only |
| Progress accent | `blue` | `#00b7d4` | `bg-blue` |
| “New” badge | `red` | `#ff1f15` | `text-red` |
| Quote rail | `yellow` | `#f0c300` | CSS only |
| Quote background | `quote` | `#eeeeee` | CSS only |

Do not use default Tailwind palettes (`gray-*`, `slate-*`, etc.). Syntax highlighting uses Monokai (`public/assets/css/monokai.css`) and stays isolated from UI tokens.

## Typography

| Role | Family | Token / utility |
|------|--------|-----------------|
| Body / post prose | Roboto Slab | `--font-body` (default on `body`) |
| UI, nav, list titles, post `h1` | Source Sans Pro | `font-sans` |

Weights in use: 300 (post body), 400, 700 (`font-bold`).

| Size | Token | Use |
|------|-------|-----|
| 10px | `text-xs` | Rare microcopy (e.g. easter egg) |
| 14px | `text-s` | Meta, tags, footer, pagination |
| 18px | `text-m` | Excerpts; post body on small screens |
| 22px | `text-l` | Nav brand, list titles, post body desktop |
| 30px | `text-xl` | In-post headings; post title on small screens |
| 45px | `text-xxl` | Post title desktop; 404 |

## Spacing

| Token | px | Typical use |
|-------|-----|-------------|
| `xxs` | 5 | Tight chip padding, small gaps |
| `xs` | 10 | Meta gaps, quote rail width |
| `ss` | 20 | Nav vertical padding, list bullets |
| `s` | 30 | Section rhythm, side padding (narrow) |
| `sm` | 45 | Page vertical padding |
| `m` | 60 | List item margin; post main padding |
| `l` | 100 | Large post heading top margin |
| `xl` | 150 | (scale) |
| `xxl` | 250 | (scale) |
| `thumb` | 150 | List thumbnails (`size-thumb`) |
| `footer` | 50 | Footer height (`h-footer`) |
| `progress` | 4 | Scroll progress bar (`h-progress`) |

## Radius & shadow

| Token | Value | Use |
|-------|-------|-----|
| `rounded-sm` | 5px | Images, code blocks |
| `shadow-float` | soft drop | `.floating-image` |

## Breakpoints

| Token | px |
|-------|-----|
| `xxs` | 350 |
| `xs` | 450 |
| `ss` | 550 |
| `s` | 680 |
| `m` | 855 |
| `l` | 1032 |
| `xl` | 1182 |
| `xxl` | 1382 |

Use theme variants (`ss:`, `max-xs:`, `min-s:max-m:`, …). Post CSS media queries use `theme(--breakpoint-*)` (build-time). Scroll progress hides below `l` (1032).

## Surfaces

- **Nav / footer** — Full-bleed `bg-black`, light `text-white`, horizontal flex. UI type: `font-sans`.
- **Page shell** — Whitesmoke body; stepped horizontal padding (`px-s` → `px-m` → `px-l` → `px-[20vw]` at xl). `min-h-[calc(100vh-135px)]` is layout math (nav + footer), not a spacing token.
- **List row** — Horizontal `border-black`; sans title (`text-l font-bold`) + grey excerpt (`text-m text-grey`); tags; date/read meta (`text-s`). Optional red “new” + thicker borders on the first item.
- **Tags** — Inline bold boxes, `border-2 border-black`; Series = dashed.
- **Pagination** — Centered; current page = `bg-black text-white`. Fine padding (`px-[3px] py-px`) stays arbitrary.
- **Post** — Centered header + `.floating-image` cover; body via `.post` CSS: 2px black link underlines, `>` list markers, yellow-rail blockquotes on `quote` bg, dashed series box.
- **Scroll progress** — Sticky `h-progress bg-blue`; desktop + post pages only.

## Rules

1. Prefer theme utilities (`bg-black`, `text-s`, `gap-xs`, …) over raw hex or default Tailwind colors.
2. Markdown / rehype HTML is styled in `@layer components` (`.post`, `.floating-image`, …) — utilities can’t wrap that output.
3. Don’t add hover/glow/card patterns that fight the hard-border, low-chrome look unless intentionally redesigning.
4. Document layout exceptions (`calc(100vh-135px)`, `20vw` padding) here rather than forcing them into the spacing scale.
