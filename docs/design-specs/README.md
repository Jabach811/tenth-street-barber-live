# Tenth Street Barber Co. — Design Direction Specs

Three approved design directions for the site. **Dark Editorial is built on the
`codex/dark-editorial` branch** (`index.html` + `barbers/*/index.html`, styled by
`assets/site.css`). Classic Americana remains on the prior branch and Warm Neighborhood
remains specified for a future build.

| # | Direction | Status | Spec |
|---|-----------|--------|------|
| 1 | Classic Americana | Built on prior branch | [01-classic-americana.md](01-classic-americana.md) |
| 2 | Warm Neighborhood | Spec only | [02-neighborhood-warm.md](02-neighborhood-warm.md) |
| 3 | Dark Editorial | **Built on `codex/dark-editorial`** | [03-dark-editorial.md](03-dark-editorial.md) |

## How the barber pages work

Every barber page shares the site's design system but carries a personal accent color set
on `<body style="--accent: …">`:

| Barber | Accent | Hex |
|--------|--------|-----|
| Greg Solario | Forest green | `#1f4a3c` |
| Shevy the Barberian | Amber | `#c88a2e` |
| Javier Larios | Cobalt | `#24509c` |
| Mike Zeiger | Oxblood | `#7a2620` |
| Robert O'Shea | Rust | `#b4492e` |
| Casa de Cortez (CDC Culture) | Old gold | `#9a7b3f` |

If one barber wants their page in a *different direction* than the rest of the site
(e.g. CDC Culture in Dark Editorial while the shop stays Americana), each spec includes a
"Barber page treatment" section. Keep the shared header (breadcrumb back to the shop, shop
booking button) and shared footer even when the middle of the page changes style — that's
what keeps six personalities feeling like one house.

## Non-negotiables in every direction

These carry across all three specs:

- **Dual booking, equal weight.** Every page shows the barber's own booking channel AND the
  shop's Squire link (`getsquire.com/booking/brands/tenth-street-barber-co`) side by side.
- **Shop facts** (single source of truth):
  24 E 10th St, Tracy, CA 95376 · 209-834-5211 · Tue–Fri 10–7, Sat 9–3, Sun–Mon closed.
- **Accessibility:** skip link, visible focus styles, `prefers-reduced-motion` respected,
  real alt text, semantic headings, minimum 48px tap targets on CTAs.
- **Performance:** explicit `width`/`height` on images, `loading="lazy"` below the fold,
  `fetchpriority="high"` on the hero only. (Outstanding chore: the generated PNGs are ~2 MB
  each and should be re-exported as ~200 KB WebP/JPEG derivatives.)
- **Credit real work.** Any real client photo shown outside a barber's own page must name the
  barber (currently all real work photos are Shevy's).

## Per-barber booking channels (source of truth)

| Barber | Primary booking | Instagram |
|--------|-----------------|-----------|
| Greg Solario | DM via Instagram | `@highsocksandlowfades` |
| Shevy the Barberian | https://barbershevy.booksy.com | `@shevythebarberian` |
| Javier Larios | Shop iOS app — App Store id6744204211 | `@korakutzz` |
| Mike Zeiger | https://getsqr.co/mike-zeiger | `@beardsbladesfadesbymike` |
| Robert O'Shea | https://osheastylez.booksy.com | `@osheastylez___blendedculture` |
| CDC Culture | Instagram (brand page) | `@cdc.culture` |
