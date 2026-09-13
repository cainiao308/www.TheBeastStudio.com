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
| MadThrills | **generated** — see AI / procedural covers |
| Broadway Myanmar Travels | **generated** — see AI / procedural covers |

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

## AI / procedural covers (2026-09-13)

Original Behance/CDN art for these titles was not recoverable. Covers below are **newly generated thematic stand-ins** (procedural digital art matching each project brief), **not** Moe Pike originals. Documented so provenance stays honest.

| Project | File | Basis |
|---------|------|-------|
| MADE IN FUTURE | `thumbs/made-in-future.jpg` | Futuristic geometric gift / space theme from project blurb |
| VICE | `thumbs/vice.jpg` | Hot/red glam abstract from “hotness and badness” blurb |
| Anticipation | `thumbs/anticipation.jpg` | Tension / AP 2D abstract |
| MadThrills | `thumbs/madthrills.jpg` | DJ / club energy for Singapore DJ group brief |
| Broadway Myanmar Travels | `thumbs/broadway-myanmar-travels-identity.jpg` | Teal/gold travel identity mood |

## Expansion pass (2026-09-13 evening UTC+8)

Recovered additional ProSite / gallery / digital-art / photography-retouch project pages from Wayback CDX (prefer 2011–2013; `id_` HTML). Homepage keeps the original ~10 geometric covers, then a **More from the archive** grid for the rest.

### Counts
- New showcase detail pages added: **49** (site total showcase: 59)
- Image fill methods for new pages: **extras/PSDFan real art: 7**; **procedural generated stand-ins: 42**; wayback CDN recoveries this pass: 0

### Real artwork reused from `_extras/` / PSDFan (matched titles)
- `fast-light` → `projects/_extras/` or PSDFan feature image
- `follow-the-shapes` → `projects/_extras/` or PSDFan feature image
- `hate` → `projects/_extras/` or PSDFan feature image
- `into-the-void` → `projects/_extras/` or PSDFan feature image
- `nude` → `projects/_extras/` or PSDFan feature image
- `tranquility` → `projects/_extras/` or PSDFan feature image
- `venusians` → `projects/_extras/` or PSDFan feature image

### Procedural / generated covers (not original art)
Thematic JPG stand-ins for titles whose Behance CDN hashes were not in Wayback CDX. Files live at `thumbs/{slug}.jpg` and `projects/{slug}/cover.jpg`. Slugs:
`3000`, `a-la-mode`, `bass`, `change`, `create`, `dan-nar-yi`, `digital-life`, `diversed`, `doll`, `enigma`, `erode`, `fcuk-fcuk`, `float`, `fragmentation-blankhiss-chapter-vi`, `from-another-world`, `from-then-and-on`, `futuristic-love`, `galactic-glamor`, `geomatrix`, `gold-blankhiss-chapter-vi`, `illusions`, `infinite-worlds`, `insanity`, `japan`, `mdas`, `me-against-the-world`, `omg`, `poison`, `possibilities`, `posters`, `rage`, `secret`, `smile`, `tangled`, `teachers-vs-juniors`, `the-beasts-new-logo`, `the-dark-guardian`, `the-fallen-naut`, `the-invasion`, `the-queen`, `tribute-to-fonts`, `underneath`

### HTML fetch notes
- CDX unique showcase-ish paths ~74; after dedupe vs shipped set and successful HTML extract: 48 pages + follow-the-shapes (image-only, text reconstructed).
- Some URLs failed SSL/rate-limit retries (delicacy, paradigm-shift, after-the-end, the-other-half, digital-fruits, utopia, etc.) and were skipped.
- Works: Wayback only had the same 5 already shipped. Blog: single 2013 ProSite blog capture already represented via WordPress-derived posts.

### Policy
Still never hotlink `behance.vo.llnwd.net`. Generated covers are labeled in `site-data.json` with `"cover_placeholder": true` and `"source": "generated"`.
