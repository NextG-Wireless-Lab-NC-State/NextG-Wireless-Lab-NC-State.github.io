# xGI-NC-State

Website for NC State University's xGI Initiative, showcasing research areas, faculty, publications,
and facilities in next-generation intelligent wireless networked systems.

## Branches

The site exists in two forms, because GitHub Pages serves static files only and cannot run PHP.

| Branch | Contents | Purpose |
|---|---|---|
| `main` | `wordpress/xgi-initiative/` — the WordPress theme | Install on a PHP host. See [wordpress/README.md](wordpress/README.md). |
| `pages` | This branch: the Next.js app **and** the theme | Builds a static export that GitHub Pages publishes. |

Both render the same site with the same content. `pages` is what
<https://nextg-wireless-lab-nc-state.github.io/> serves.

**Keep them in step.** A content or design change should be made on both, or it will show up in one
place and not the other. The news items are the shared case: they live in
`wordpress/xgi-initiative/inc/data/xgi-content.json` on `main` and in `lib/data/site.ts` here.

## The Pages build

`.github/workflows/deploy.yml` runs on every push to `pages`: `npm ci`, `npm run build`, then
uploads `out/` to GitHub Pages. `next.config.mjs` sets `output: "export"`, so the build is plain
HTML, CSS, JS and images with no server needed.

For **Settings → Pages**, the source must be **GitHub Actions** (not "Deploy from a branch").

Local development:

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into out/
```

## Requirements

Node 20 for the Pages build. WordPress 6.0+ on PHP 7.4+ for the theme.
