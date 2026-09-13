# www.TheBeastStudio.com

Tier B hybrid visual restore of **The Beast’s Portfolio** (Moe Pike Soe) — approximating the ~2012 Behance ProSite “geometric” template formerly at `TheBeastStudio.com`.

Now a **Next.js (App Router)** app for Vercel, with the same AdSense env pattern as Green Carnation / stoppeklokke.

## Deploy (Vercel)

1. Import this GitHub repo in Vercel (or `vercel` CLI from the repo root).
2. Framework preset: **Next.js** (`vercel.json` sets `"framework": "nextjs"`).
3. In **Project Settings → Environment Variables**, set:
   - `NEXT_PUBLIC_ADSENSE_ENABLED` — `true` or `false`
   - `NEXT_PUBLIC_ADSENSE_CLIENT` — e.g. `ca-pub-xxxxxxxxxxxxxxxx`
   - `ADS_TXT_CONTENT` — full body of `ads.txt` (served dynamically at `/ads.txt`)
4. Connect the production domain to **TheBeastStudio.com** / `www.TheBeastStudio.com`.
5. Deploy. Build command: `npm run build` (Vercel default for Next.js).

See `.env.example` for local stubs (no secrets).

Local:

```bash
cp .env.example .env.local
npm install
npm run dev
# open http://127.0.0.1:3000/
```

Smoke-check ads:

```bash
NEXT_PUBLIC_ADSENSE_ENABLED=true NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-test ADS_TXT_CONTENT='google.com, pub-test, DIRECT, f08c47fec0942fa0' npm run build
npm start
# curl http://127.0.0.1:3000/ads.txt
```

## What’s restored

- Showcase grid (10 projects from the May 2012 homepage), Works, Blog, About, Resume
- Dark geometric ProSite-inspired chrome (logo/header from Wayback where available)
- Self-hosted artwork under `public/assets/images/` (no hotlinks to dead `behance.vo.llnwd.net`)
- Provenance in `ASSETS.md`; page HTML bodies in `src/data/pages.json`

## Sources

- Primary Wayback: `http://web.archive.org/web/20120519011828id_/http://thebeaststudio.com/`
- Image fills: Wayback CDN snapshots, [PSDFan feature](http://psd.fanextra.com/articles/featured-artist-moe-pike-soe/), [moepike.wordpress.com](https://moepike.wordpress.com/), customize.org

## Notes

Archival / educational reconstruction, not an official site of Moe Pike Soe. Some project images remain unresolved (valid self-hosted SVG placeholders); see `ASSETS.md`.
