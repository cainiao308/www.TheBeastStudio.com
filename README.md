# www.TheBeastStudio.com

Tier B hybrid visual restore of **The Beast’s Portfolio** (Moe Pike Soe) — approximating the ~2012 Behance ProSite “geometric” template formerly at `TheBeastStudio.com`.

## Deploy (Vercel)

1. Import this GitHub repo in Vercel (or `vercel` CLI from the repo root).
2. Framework preset: **Other** (static). No build command required; output is the repo root.
3. Set the production domain to `TheBeastStudio.com` / `www.TheBeastStudio.com` as needed.
4. `cleanUrls` + `trailingSlash` are configured in `vercel.json`.

Local preview:

```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

## What’s restored

- Showcase grid (10 projects from the May 2012 homepage), Works, Blog, About, Resume
- Dark geometric ProSite-inspired chrome (logo/header from Wayback where available)
- Self-hosted artwork (no hotlinks to dead `behance.vo.llnwd.net`)
- Provenance documented in `ASSETS.md`

## Sources

- Primary Wayback: `http://web.archive.org/web/20120519011828id_/http://thebeaststudio.com/`
- Backup: `http://web.archive.org/web/20110427232801id_/http://thebeaststudio.com/`
- Image fills: Wayback CDN snapshots, [PSDFan feature](http://psd.fanextra.com/articles/featured-artist-moe-pike-soe/), [moepike.wordpress.com](https://moepike.wordpress.com/), customize.org wallpaper thumb

## Notes

This is an archival / educational reconstruction, not an official site of Moe Pike Soe. Some project images remain unresolved (geometric placeholders); see `ASSETS.md`.
