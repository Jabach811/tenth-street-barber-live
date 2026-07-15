# Direction 1 — Classic Americana (BUILT)

**Status: live.** This documents the system implemented in `assets/site.css`.

## Feel

Old-school American barbershop pride: the barber pole, hand-painted signage, printed show
posters, ticket stubs. Honest, warm, a little nostalgic — but typeset tightly enough to
still feel like a working business, not a costume.

## Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--paper` | `#f7f1e3` | Page background (cream) |
| `--paper-deep` | `#efe5cf` | Alternating section background |
| `--ink` | `#1d2b3a` | Text, borders, footer background |
| `--navy` | `#22405e` | Secondary headings, CTA band background |
| `--red` | `#b3232e` | Primary buttons, kickers, pole stripe |
| `--blue` | `#2b4a73` | Pole stripe |
| `--brass` | `#a9812e` | Star rules, footer headings |
| `--accent` | per barber | Card hover, plate numbers, barber CTAs |

## Typography (Google Fonts)

- **Display:** Oswald 500/600/700 — uppercase condensed caps for names, headlines, buttons,
  caption plates. Poster type.
- **Script:** Yellowtail — sign-painter script for section kickers only ("Meet the crew",
  "Come through"). Never for body copy, never more than one line.
- **Body:** Lora — bookish serif, 1.0625rem/1.65.

## Signature elements

- **Pole stripe divider** (`.stripe`): 0.85rem band of 135° red/cream/blue/cream repeating
  stripes with 1px ink borders. Used at the very top of every page and between major sections.
- **Framed photographs** (`.frame`): 3px ink border, warm-white mat padding, hard offset
  shadow (`.4rem .4rem 0`), caption plate with label left / accent number right ("No. 01").
  Everything photographic sits in a frame — it's the unifying visual move.
- **Star rules** (`.star-rule`): brass ✶ between double-line rules under section titles.
- **Double rules** (`border: 4px double`) on header bottom, crew plates, service ledger.
- **Service ledger** (`.service-list`): numbered rows, Oswald names, price right-aligned in
  red, italic serif descriptions.
- **Buttons** (`.btn`): rectangular, 2px ink border, hard offset shadow that collapses on
  press — feels letterpress-stamped. Red = primary, cream outline = secondary,
  navy/accent variants for context.

## Layout grammar

Centered, symmetric, poster-like sections. Homepage order: hero (script kicker → giant
wordmark → star rule → sub → dual CTA → framed storefront) → stripe → shop-life triptych →
crew grid (3/2/1 columns) → stripe → services ledger → work grid (credited) → stripe →
navy CTA band → visit info card + photo → stripe → ink footer.

## Barber page treatment

Shared template on the same system, in this order: breadcrumb header (back to shop + shop
booking button) → profile hero (framed portrait left on desktop; script kicker, Oswald name,
bordered role chip, serif bio, dual CTA row, double-rule meta line with chair number +
Instagram) → stripe → work section on `--paper-deep` → navy closing CTA band (barber accent
button + shop button, equal size) → shared footer. Shevy's page extends the template with
his real 12-photo gallery, priced service ledger, and wedding section — that's the model for
any barber who brings more content.

## Voice

Short declaratives, no irony: "Take a seat. You're family now." / "The essentials, handled
right." / "Your chair is waiting." Numbers written as "No. 01". One script flourish per
section, never two.
