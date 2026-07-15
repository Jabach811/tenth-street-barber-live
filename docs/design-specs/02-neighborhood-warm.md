# Direction 2 — Warm Neighborhood (SPEC)

**Status: spec only.** The evolution of the previous `shop-first` homepage: the shop as a
living room. Where Americana is a poster, this is a documentary — the site should feel like
walking in on a Saturday: music on, fridge stocked, somebody laughing across the room.

## Feel

Warm, unhurried, personal. The photography carries the mood; the type stays quiet and lets
the room talk. This direction leans hardest on the `mock-assets/environment/` series
(lounge, fridge, music room, arrival, empty chair, street at dusk).

## Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--char` | `#11100f` | Near-black warm charcoal — text, footer |
| `--cream` | `#f4efe6` | Page background |
| `--clay` | `#c96f4a` | Primary CTA, links — terracotta warmth |
| `--olive` | `#6b6a4f` | Secondary accents, captions |
| `--butter` | `#e9dcbe` | Card / alternating section background |
| `--accent` | per barber | Same per-barber accent table as the README |

No pure white, no pure black; everything slightly sun-warmed.

## Typography (Google Fonts)

- **Display:** Barlow Condensed 600/700 — friendly condensed sans, sentence case allowed.
  Big but soft; avoid full uppercase except tiny labels.
- **Body/UI:** DM Sans 400/500/700.
- No script face. Warmth comes from color and photos, not flourish.

## Signature elements

- **Full-bleed photography** with soft gradient scrims; photos butt to the viewport edge
  (opposite of Americana's frames).
- **Rounded corners** (12–20px) on cards and buttons; pill-shaped CTAs.
- **The ticker**: a slow horizontal marquee of "Good cuts · Good music · Cold beverage ·
  Good people · Downtown Tracy" (pause on hover, static when reduced-motion).
- **Numbered welcome notes**: the 01/02/03 "Something to drink? / Good music, always /
  People come through" cards, each with its environment photo.
- **Handwritten-feel micro-labels** via lowercase italic DM Sans, not an actual script font.

## Layout grammar

Asymmetric and editorialized-casual: alternating text/photo bands, overlapping images,
generous whitespace. Homepage order: split hero (copy left, storefront photo right with
caption chip) → ticker → welcome triptych → crew (large photo cards with reveal-on-hover
names) → services as a simple conversational list → work strip (credited) → visit band with
the empty-chair photo → street-at-dusk full-bleed footer.

## Barber page treatment

Keep the shared breadcrumb header and footer. Hero becomes a full-bleed atmosphere photo
(each barber has `assets/atmosphere.png`) with the barber's name overlaid bottom-left and a
one-line personality intro. Below: a "from my chair" casual gallery, then a conversational
booking block written in first person where the voice fits ("Catch me on Booksy, or just
book the shop — either way you're covered."). Barber accent colors the pill CTA and caption
chips. Best fit for: Greg (owner-host energy), Mike (Papa Mike), Robert (family/heritage
storytelling).

## Voice

First-person-plural, conversational: "Pull up a chair. Stay a while." / "The soundtrack
matters." Contractions welcome, exclamation points not.
