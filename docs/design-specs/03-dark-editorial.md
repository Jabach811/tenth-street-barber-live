# Direction 3 — Dark Editorial (SPEC)

**Status: built on `codex/dark-editorial`.** The premium magazine direction — what the previous individual barber
pages (Javier's precision grid, CDC's luxury spread, Shevy's studio page) were each reaching
for, unified into one coherent system.

## Feel

Moody, confident, gallery-like. Black rooms, hard type, photography treated as artwork.
Feels like a grooming brand, not a walk-in shop — best deployed where the work itself is the
argument (portfolios, CDC Culture, Shevy's studio positioning).

## Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--black` | `#0b0b0a` | Page background |
| `--soft` | `#161614` | Cards, raised surfaces |
| `--bone` | `#efece4` | Text |
| `--muted` | `#9b978c` | Secondary text, captions |
| `--line` | `rgba(239,236,228,.16)` | Hairline rules everywhere |
| `--accent` | per barber | The ONLY saturated color on the page |

One accent per page, used sparingly: index numbers, links, the primary CTA. Everything else
monochrome. Photography desaturated or duotoned toward the accent when consistency demands.

## Typography (Google Fonts)

- **Display:** Archivo Black (or Barlow Condensed 800 for a lighter load) — huge, tight
  (`letter-spacing: -.05em`, `line-height: .8`), uppercase.
- **Mono:** DM Mono — all labels, nav, captions, coordinates, index numbers ("02 / 12").
  The mono voice is the signature of this direction.
- **Body:** Inter 400/500.

## Signature elements

- **Hairline grid**: 1px `--line` rules dividing the layout into visible columns/rows —
  the page reads as a technical sheet.
- **Index numbering everywhere**: sections, photos, and barbers numbered in mono
  ("03 — Javier Larios").
- **Oversized names** cropping off the container edge as a graphic element.
- **Duotone/grayscale portraits** (`filter: grayscale(1)`) with the accent reserved for type.
- **Coordinates chip** on hero images ("37.7397° N / 121.4252° W") — small mono plate.
- **Lightbox gallery** (keyboard-navigable, focus-trapped — port the implementation from the
  old Shevy page, it was solid).

## Layout grammar

Hard grid, asymmetric splits (55/45), no rounded corners, no shadows — depth comes from
surface value changes only. Homepage order: rail + masthead grid hero → mono ticker of
services → crew as a numbered index list (hover swaps a fixed portrait, tap-through on
mobile) → work gallery with lightbox → visit block as a technical data sheet → minimal
footer.

## Barber page treatment

Keep the shared breadcrumb header and footer (restyled to this palette). Hero: 55/45 split —
grayscale portrait one side; mono role label, oversized name, short bio the other. Work:
full-width gallery with mono captions and the lightbox. Booking: full-black band, giant
"LOCK IN THE CHAIR." with accent CTA + shop CTA. Best fit for: Javier (precision), CDC
Culture (luxury), Shevy (editorial solo-studio positioning).

## Voice

Clipped, technical, third person. "Precision has a rhythm." / "One chair. No rush." Labels
over sentences wherever possible. No script, no warmth-words — the restraint IS the tone.
