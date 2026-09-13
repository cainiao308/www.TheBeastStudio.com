# ASSETS — provenance

All images are **self-hosted** under `public/assets/images/`. No live hotlinks to `behance.vo.llnwd.net`.

## Chrome (logo / header)

| File | Source | Notes |
|------|--------|-------|
| `assets/images/chrome/logo.png` | **wayback** | `behance.vo.llnwd.net/.../prosite/2-559022-4e58e97c...png` via `20130312085148id_` |
| `assets/images/chrome/header.jpg` | **wayback / artist** | Replaced empty ProSite frame with wide `header-alt` (Moe Pike “NEW WORK! / 3000” banner art from Wayback ProSite chrome set) so homepage top is real artwork, not a white hole. |
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
| MadThrills | **unsplash-similar** — see Similar-direction cover fill |
| Broadway Myanmar Travels | **unsplash-similar** — see Similar-direction cover fill |

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
| *(MADE IN FUTURE, VICE, Anticipation, MadThrills, Broadway)* | see **Similar-direction cover fill** | Procedural stand-ins replaced with real photos/art |

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
**Superseded 2026-09-13 evening:** all of these procedural JPGs were overwritten by similar-direction real photos/art (see table below). Slugs formerly procedural are listed in that table.

### HTML fetch notes
- CDX unique showcase-ish paths ~74; after dedupe vs shipped set and successful HTML extract: 48 pages + follow-the-shapes (image-only, text reconstructed).
- Some URLs failed SSL/rate-limit retries (delicacy, paradigm-shift, after-the-end, the-other-half, digital-fruits, utopia, etc.) and were skipped.
- Works: Wayback only had the same 5 already shipped. Blog: single 2013 ProSite blog capture already represented via WordPress-derived posts.

### Policy
Still never hotlink `behance.vo.llnwd.net`. **Update:** `cover_placeholder` flags cleared after similar-direction fill pass (see below).


## Similar-direction cover fill (2026-09-13 evening)

Exact original Behance CDN hashes for most remaining titles were unavailable (live gallery pages bot-blocked / Wayback empty). Replaced **all 47** `cover_placeholder: true` procedural JPGs with **self-hosted real photos/art** in a similar theme/mood. No `behance.vo.llnwd.net` hotlinks.

### Counts
- Replaced: **47**
- Still procedural placeholders: **0**

### Legend
- **behance-similar** — authentic Moe Pike image from a *different* live Behance project (same artist, similar direction); not the exact original project cover
- **psdfan-similar** — Moe Pike PSDFan feature image reused for a near-mood title
- **unsplash-similar** / **wikimedia-similar** — thematic stock/art when no matching artist file existed

### Provenance table

| Project | File | Kind | Source URL | Notes |
|---------|------|------|------------|-------|
| `3000` | `thumbs/3000.jpg` + `projects/3000/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1451187580459-43490279c0fa | similar-direction web fill — sci-fi earth/space |
| `a-la-mode` | `thumbs/a-la-mode.jpg` + `projects/a-la-mode/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1469334031218-e382a71b716b | similar-direction web fill — fashion / Allure episode |
| `anticipation` | `thumbs/anticipation.jpg` + `projects/anticipation/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3 | similar-direction web fill — stage tension / anticipation |
| `bass` | `thumbs/bass.jpg` + `projects/bass/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1470225620780-dba8ba36b745 | similar-direction web fill — bass / music stage |
| `broadway-myanmar-travels-identity` | `thumbs/broadway-myanmar-travels-identity.jpg` + `projects/broadway-myanmar-travels-identity/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1548013146-72479768bada | similar-direction web fill — Myanmar travel identity mood |
| `change` | `thumbs/change.jpg` + `projects/change/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1550684848-fac1c5b4e853 | similar-direction web fill — metamorphosis abstract |
| `create` | `thumbs/create.jpg` + `projects/create/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1541701494587-cb58502866ab | similar-direction web fill — creation / colorful paint |
| `dan-nar-yi` | `thumbs/dan-nar-yi.jpg` + `projects/dan-nar-yi/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1581833971358-2c8b550f87b3 | similar-direction web fill — Burmese/cultural typography mood |
| `digital-life` | `thumbs/digital-life.jpg` + `projects/digital-life/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1518770660439-4636190af475 | similar-direction web fill — digital life / tech |
| `diversed` | `thumbs/diversed.jpg` + `projects/diversed/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/89856301/Reflections | Moe Pike Reflections — similar 3D/photo-manip direction (Diversed live gallery blocked) |
| `doll` | `thumbs/doll.jpg` + `projects/doll/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e | similar-direction web fill — beauty retouch doll |
| `enigma` | `thumbs/enigma.jpg` + `projects/enigma/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1534528741775-53994a69daeb | similar-direction web fill — mysterious beauty/retouch vibe |
| `erode` | `thumbs/erode.jpg` + `projects/erode/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05 | similar-direction web fill — erosion / metamorphosis landscape |
| `fcuk-fcuk` | `thumbs/fcuk-fcuk.jpg` + `projects/fcuk-fcuk/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d | similar-direction web fill — bold neon internet attention |
| `float` | `thumbs/float.jpg` + `projects/float/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1507525428034-b723cf961d3e | similar-direction web fill — beach float / swim |
| `fragmentation-blankhiss-chapter-vi` | `thumbs/fragmentation-blankhiss-chapter-vi.jpg` + `projects/fragmentation-blankhiss-chapter-vi/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/36131907/The-Digital-Decade-IV-London | Moe Pike Digital Decade IV — similar BlankHiss-era digital art direction (BlankHiss Utopia CDN thumb too small) |
| `from-another-world` | `thumbs/from-another-world.jpg` + `projects/from-another-world/cover.jpg` | **wikimedia-similar** | https://commons.wikimedia.org/wiki/File:Pleiades_large.jpg | similar-direction web fill — deep space beauty |
| `from-then-and-on` | `thumbs/from-then-and-on.jpg` + `projects/from-then-and-on/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1493612276216-ee3925520721 | similar-direction web fill — evocative light art (Evoke collective) |
| `futuristic-love` | `thumbs/futuristic-love.jpg` + `projects/futuristic-love/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/20120991/Desktopography-2014 | Moe Pike Desktopography 2014 — similar space/galaxy romance direction |
| `galactic-glamor` | `thumbs/galactic-glamor.jpg` + `projects/galactic-glamor/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1464802686167-b939a6910659 | similar-direction web fill — galactic glamor |
| `geomatrix` | `thumbs/geomatrix.jpg` + `projects/geomatrix/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/60383987/_bootstrap | Moe Pike _bootstrap — similar geometric/simple design principle |
| `gold-blankhiss-chapter-vi` | `thumbs/gold-blankhiss-chapter-vi.jpg` + `projects/gold-blankhiss-chapter-vi/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead | similar-direction web fill — gold abstract / Tolkien poem mood |
| `illusions` | `thumbs/illusions.jpg` + `projects/illusions/cover.jpg` | **psdfan-similar** | http://psd.fanextra.com/wp-content/uploads/2012/06/moepikesoe11.jpg | PSDFan Haze (moepikesoe11) — similar photo-illusion / manip direction |
| `infinite-worlds` | `thumbs/infinite-worlds.jpg` + `projects/infinite-worlds/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1506905925346-21bda4d32df4 | similar-direction web fill — phone-camera landscape series vibe |
| `insanity` | `thumbs/insanity.jpg` + `projects/insanity/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1514525253161-7a46d19cd819 | similar-direction web fill — chaotic concert insanity |
| `japan` | `thumbs/japan.jpg` + `projects/japan/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e | similar-direction web fill — Japan awareness imagery |
| `made-in-future` | `thumbs/made-in-future.jpg` + `projects/made-in-future/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/103491335/Aurora-Exhibition-VI-BLUE | Moe Pike Aurora cover — similar futuristic direction |
| `madthrills` | `thumbs/madthrills.jpg` + `projects/madthrills/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1516450360452-9312f5e86fc7 | similar-direction web fill — DJ/club energy |
| `mdas` | `thumbs/mdas.jpg` + `projects/mdas/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/65750859/36-Days-of-Type-Part-Two | Moe Pike 36 Days of Type — similar 3D typography direction |
| `me-against-the-world` | `thumbs/me-against-the-world.jpg` + `projects/me-against-the-world/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/10970881/XIII-Overdosed | Moe Pike XIII Overdosed — similar bold confrontational poster energy |
| `omg` | `thumbs/omg.jpg` + `projects/omg/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1492684223066-81342ee5ff30 | similar-direction web fill — OMG lights/photo illustration |
| `poison` | `thumbs/poison.jpg` + `projects/poison/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1515377905703-c4788e51af15 | similar-direction web fill — dark beauty / poison mood |
| `possibilities` | `thumbs/possibilities.jpg` + `projects/possibilities/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/83222517/It-was-a-nice-day | Moe Pike collab piece — similar collaborative art direction |
| `posters` | `thumbs/posters.jpg` + `projects/posters/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1558655146-d09347e92766 | similar-direction web fill — graphic poster design |
| `rage` | `thumbs/rage.jpg` + `projects/rage/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1527482797697-8795b05a13fe | similar-direction web fill — raging sky |
| `secret` | `thumbs/secret.jpg` + `projects/secret/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1519681393784-d120267933ba | similar-direction web fill — secret / misty mountain |
| `smile` | `thumbs/smile.jpg` + `projects/smile/cover.jpg` | **psdfan-similar** | http://psd.fanextra.com/wp-content/uploads/2012/06/moepikesoe2.jpg | PSDFan Dreams Kill (moepikesoe2) — similar portrait art direction |
| `tangled` | `thumbs/tangled.jpg` + `projects/tangled/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d | similar-direction web fill — tangled abstract forms |
| `teachers-vs-juniors` | `thumbs/teachers-vs-juniors.jpg` + `projects/teachers-vs-juniors/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1574629810360-7efbbe195018 | similar-direction web fill — sports fundraiser match |
| `the-beasts-new-logo` | `thumbs/the-beasts-new-logo.jpg` + `projects/the-beasts-new-logo/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe | similar-direction web fill — abstract logo forms |
| `the-dark-guardian` | `thumbs/the-dark-guardian.jpg` + `projects/the-dark-guardian/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d | similar-direction web fill — dark self-portrait mood |
| `the-fallen-naut` | `thumbs/the-fallen-naut.jpg` + `projects/the-fallen-naut/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1446776877081-d282a0f896e2 | similar-direction web fill — astronaut/Desktopography wallpaper vibe |
| `the-invasion` | `thumbs/the-invasion.jpg` + `projects/the-invasion/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1635070041078-e363dbe005cb | similar-direction web fill — futuristic fonts invasion |
| `the-queen` | `thumbs/the-queen.jpg` + `projects/the-queen/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1487412720507-e7ab37603c6f | similar-direction web fill — regal portrait |
| `tribute-to-fonts` | `thumbs/tribute-to-fonts.jpg` + `projects/tribute-to-fonts/cover.jpg` | **behance-similar** | https://www.behance.net/gallery/65747153/36-Days-of-Type-Part-One | Moe Pike 36 Days of Type — similar typography tribute direction |
| `underneath` | `thumbs/underneath.jpg` + `projects/underneath/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1518837695005-2083093ee35b | similar-direction web fill — deep underneath / ocean |
| `vice` | `thumbs/vice.jpg` + `projects/vice/cover.jpg` | **unsplash-similar** | https://images.unsplash.com/photo-1515886657613-9f3515b0c78f | similar-direction web fill — glam/red fashion mood |

### Policy reminder
Still never hotlink `behance.vo.llnwd.net`. These fills are documented as similar-direction stand-ins, not claimed as the original 2011–2013 project covers unless Kind says otherwise.
