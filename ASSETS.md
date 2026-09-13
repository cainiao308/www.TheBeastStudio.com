# ASSETS — provenance

All images are **self-hosted** under `public/assets/images/`. No live hotlinks to `behance.vo.llnwd.net`.

## Chrome (logo / header)

| File | Source | Notes |
|------|--------|-------|
| `assets/images/chrome/logo.png` | **wayback** | `behance.vo.llnwd.net/.../prosite/2-559022-4e58e97c...png` via `20130312085148id_` |
| `assets/images/chrome/header.jpg` | **wayback** | `.../prosite/2-559022-79e96258...jpg` via `20130312085151id_` |
| `assets/images/chrome/logo-alt.png` | **wayback** | Later ProSite logo (`2-642278-...`) |
| `assets/images/chrome/header-alt.jpg` | **wayback** | Later ProSite header |

Original May 2012 chrome hashes (`2-263979-...`) were **not** in the Wayback CDX (404). Closest archived ProSite chrome from 2013 used instead.

## Showcase covers — filled (real artwork)

| Project | File | Source |
|---------|------|--------|
| Picture Perfect | `thumbs/picture-perfect.jpg` | **web** — PSDFan feature `moepikesoe8.jpg` (Jun 2012 article) |
| Love is Space | `thumbs/l-o-v-e-i-s-s-p-a-c-e.jpg` + `projects/l-o-v-e-i-s-s-p-a-c-e/*.jpg` | **wayback** — `profiles11/280453/projects/3734627/*` (2013-06 captures) |
| DUST | `thumbs/dust.jpg` + project folder | **psdfan** cover + **wayback** `3219137/3d159639...jpg` + **wordpress** sneak peeks |
| Split | `thumbs/split.jpg` | **web** — PSDFan `moepikesoe9.jpg` |
| Decay | `thumbs/decay.jpg` | **web** — PSDFan `moepikesoe13.jpg` |
| Splash Some Love | `thumbs/splash-some-love.jpg` + wallpaper thumb | **web** — PSDFan `moepikesoe12.jpg` + **customize.org** larger thumb via Wayback |

## Showcase — filled (additional)

| Project | File | Source |
|---------|------|--------|
| Pan!k \| iPhone Cases | `thumbs/pank-iphone-cases.jpg` + `projects/pank-iphone-cases/cover.jpg` | **wordpress** — post `2012/02/17/pank-iphone-cover-series/` image `20120217-004704.jpg` |

## Showcase — unresolved (geometric SVG placeholders)

Exact covers/detail images for these were on the dead CDN and not found in Wayback CDX / Behance live CDN / WordPress / PSDFan under matching titles (Behance project IDs known from ProSite HTML; CDN hashes listed in `beast-fetch/all-image-urls.txt` but no archived captures):

| Project | Behance ID | Placeholder | Notes |
|---------|------------|-------------|-------|
| MADE IN FUTURE | `3423611` | `thumbs/made-in-future.svg` | og:image `87615e47…jpg`; HTML/text recovered; CDX empty for project folder |
| VICE | `2855515` | `thumbs/vice.svg` | Text recovered; CDX empty |
| Anticipation | `2241974` | `thumbs/anticipation.svg` | Text recovered; CDX empty |

## Works

| Project | Source |
|---------|--------|
| KhiMera | **wayback** `projects/3756086/98aaf16a...jpg` |
| The Glitz | **web** — PSDFan `moepikesoe7.jpg` |
| Cloud 9 Studio | **wayback** `projects/3022913/ca84ca6c...jpg` |
| MadThrills | **unresolved** — SVG placeholder (Behance `1316605`; og `ec74951c…jpg`; CDX empty) |
| Broadway Myanmar Travels | **unresolved** — SVG placeholder (Behance `1937385`; og `596fb8b5…jpg`; CDX empty) |

## Period extras (not used as wrong covers)

PSDFan also published other 2011–2012 Moe Pike pieces (Mystique, Haze, Into the Void, Venusians, Tranquility, Follow the Shapes, etc.). Stored under `assets/images/projects/_extras/` for reference; **not** substituted as covers for differently titled showcase projects.

## Blog images

From **wordpress** (`moepike.wordpress.com` uploads, 2012) → `assets/images/projects/blog/`.

## Primary HTML snapshots used

- Homepage: `20120519011828id_/http://thebeaststudio.com/`
- Showcase pages: `20120622…` / `20120619…` id_ captures under `/1582/...`
- Works / About / Resume / Blog: `20120619…` id_ captures

## Dead CDN policy

Do **not** reintroduce `http://behance.vo.llnwd.net/...` hotlinks. Prefer `http://web.archive.org/web/TIMESTAMP/id_/ORIGINAL` when recovering more assets later.

## 2026-09-13 search pass

- Queried Wayback CDX for `profiles11/280453/projects/{3423611,2867621,2855515,2241974,1316605,1937385}/*` — no captures (unlike Love/Dust/KhiMera folders which were archived).
- Live Behance `/gallery/{id}/` returns 400 for those legacy IDs; Common Crawl index returned no captures for MADE IN FUTURE CDN path.
- WordPress: **Pan!k** authentic cover recovered from `moepike.wordpress.com/2012/02/17/pank-iphone-cover-series/`. Other WP posts (Dreams Kill sneak peek, Sex Lights, New Project collage) do **not** match remaining unresolved titles — left in blog/`_extras` only.
- PSDFan feature list does not include MADE IN FUTURE / VICE / Anticipation / MadThrills / Broadway.
- `_extras/` not substituted as wrong-title covers.
