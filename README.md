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

Posts: `content/blog/`. Styles: `sass/` (from the Jekyll blog era).

## Deploy

Netlify: `npm run build` via `@netlify/plugin-nextjs`.
