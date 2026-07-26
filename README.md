# Adam Gonda

Personal blog — Next.js + Markdown, migrated from Jekyll at commit `5b6bb88`.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000

| Route | Page |
|-------|------|
| `/` | Post list (page 1) |
| `/blog/page/2` | Post list pagination |
| `/blog/[slug]` | Post |

Posts: `content/blog/`. Styles: Tailwind `@theme` in `app/globals.css` — see [DESIGN.md](DESIGN.md).

## Deploy

Vercel: import the repo; framework preset is Next.js (`npm run build`).
