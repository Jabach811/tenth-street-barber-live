# Dark Editorial Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Classic Americana presentation with the approved Dark Editorial system across the Tenth Street homepage and all six barber pages while preserving factual content, real booking destinations, accessibility, and image provenance.

**Architecture:** Keep the site dependency-light and static. `assets/site.css` owns every visual token and responsive layout; `assets/site.js` owns crew-preview and reusable lightbox behavior; each HTML page remains directly deployable from GitHub Pages and carries only its content, accent token, and asset paths.

**Tech Stack:** Semantic HTML5, shared CSS, vanilla JavaScript, Node.js built-in test runner.

## Global Constraints

- Use exactly `#0b0b0a`, `#161614`, `#efece4`, `#9b978c`, and `rgba(239,236,228,.16)` for the shared palette.
- Use Archivo Black for display, DM Mono for labels/navigation/captions, and Inter 400/500 for body copy.
- Use one per-page accent only; no rounded corners, shadows, scripts, warm-language flourishes, or legacy Americana tokens.
- Homepage order is hero, service ticker, numbered crew index with fixed preview, work gallery/lightbox, visit data sheet, minimal footer.
- Barber pages use a shared breadcrumb/header/footer, 55/45 grayscale portrait hero, full-width gallery/lightbox, and `LOCK IN THE CHAIR.` dual-booking band.
- Preserve exact shop facts, per-barber booking channels, skip links, visible focus, reduced-motion handling, image dimensions, lazy loading below the fold, and high-priority hero images.

---

### Task 1: Encode the Dark Editorial contract

**Files:**
- Create: `tests/dark-editorial.test.mjs`
- Test: `tests/dark-editorial.test.mjs`

**Interfaces:**
- Consumes: `docs/design-specs/03-dark-editorial.md`, `docs/design-specs/README.md`
- Produces: Node assertions for shared tokens, typography, page order, accessibility, image behavior, lightbox hooks, barber accents, and booking URLs.

- [ ] **Step 1: Write failing tests**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(.:)/, '$1');
const read = (...parts) => readFileSync(join(root, ...parts), 'utf8');

test('shared CSS implements the exact Dark Editorial tokens and typography', () => {
  const css = read('assets', 'site.css');
  for (const value of ['#0b0b0a', '#161614', '#efece4', '#9b978c', 'rgba(239,236,228,.16)', 'Archivo Black', 'DM Mono', 'Inter']) assert.match(css, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.doesNotMatch(css, /border-radius\s*:\s*(?!0)/);
  assert.doesNotMatch(css, /box-shadow\s*:/);
});
```

- [ ] **Step 2: Run test to verify RED**

Run: `node --test tests/dark-editorial.test.mjs`
Expected: FAIL because the current CSS is Classic Americana and `assets/site.js` does not exist.

- [ ] **Step 3: Extend the same test file with explicit homepage, profile, and interaction assertions**

```js
assert.match(home, /data-crew-preview/);
assert.match(home, /data-lightbox-trigger/);
assert.ok(home.indexOf('id="crew"') < home.indexOf('id="work"'));
for (const html of profiles) {
  assert.match(html, /LOCK IN THE CHAIR\./);
  assert.match(html, /data-lightbox-trigger/);
  assert.match(html, /Book this barber/);
  assert.match(html, /Book the shop/);
}
```

- [ ] **Step 4: Keep tests red until production files satisfy them**

Run: `node --test tests/dark-editorial.test.mjs`
Expected: FAIL on missing Dark Editorial markup and shared script.

### Task 2: Build the shared design and interaction systems

**Files:**
- Replace: `assets/site.css`
- Create: `assets/site.js`
- Test: `tests/dark-editorial.test.mjs`

**Interfaces:**
- Consumes: semantic classes and `data-*` hooks in every page.
- Produces: `data-crew-preview`, `data-lightbox-trigger`, `.lightbox`, `.is-open`, keyboard navigation, focus restoration, and a focus trap.

- [ ] **Step 1: Replace legacy tokens and components with the exact Dark Editorial system**
- [ ] **Step 2: Implement crew hover/focus image swapping and reusable lightbox behavior in `assets/site.js`**
- [ ] **Step 3: Run the focused tests**

Run: `node --test tests/dark-editorial.test.mjs`
Expected: CSS and script assertions pass; HTML assertions remain red.

### Task 3: Rebuild the homepage in the specified order

**Files:**
- Replace: `index.html`
- Test: `tests/dark-editorial.test.mjs`

**Interfaces:**
- Consumes: `assets/site.css`, `assets/site.js`, existing environment/crew/Shevy imagery.
- Produces: rail + 55/45 masthead, service ticker, crew index/preview, credited lightbox gallery, visit sheet, and minimal footer.

- [ ] **Step 1: Write the semantic homepage structure with clipped technical copy**
- [ ] **Step 2: Add exact shop facts, structured data, dimensions, loading priorities, and accessible labels**
- [ ] **Step 3: Run the focused tests**

Run: `node --test tests/dark-editorial.test.mjs`
Expected: homepage contract passes; profile assertions remain red.

### Task 4: Rebuild all six barber pages from one shared grammar

**Files:**
- Replace: `barbers/greg-solario/index.html`
- Replace: `barbers/shevy-the-barberian/index.html`
- Replace: `barbers/javier-larios/index.html`
- Replace: `barbers/mike-zeiger/index.html`
- Replace: `barbers/robert-oshea/index.html`
- Replace: `barbers/cdc-culture/index.html`
- Test: `tests/dark-editorial.test.mjs`

**Interfaces:**
- Consumes: shared CSS/JS, existing local portraits/work images, exact per-barber accent and booking sources.
- Produces: consistent breadcrumb header/footer, 55/45 hero, numbered work gallery, and equal-weight dual booking CTAs.

- [ ] **Step 1: Implement Greg, Javier, Mike, Robert, and CDC pages with their existing local assets**
- [ ] **Step 2: Implement Shevy with all 12 real work images, priced services, and wedding-service content**
- [ ] **Step 3: Run the full contract test**

Run: `node --test tests/dark-editorial.test.mjs`
Expected: all tests pass with zero failures.

### Task 5: Update documentation and verify the built artifact

**Files:**
- Modify: `docs/design-specs/03-dark-editorial.md`
- Modify: `docs/design-specs/README.md`

**Interfaces:**
- Consumes: completed implementation and test results.
- Produces: accurate built-status documentation.

- [ ] **Step 1: Mark Dark Editorial as built on branch `codex/dark-editorial` without changing the approved design requirements**
- [ ] **Step 2: Run all tests and scan for legacy leakage/placeholders/broken references**

Run: `node --test tests/*.test.mjs`
Expected: all tests pass.

Run: `rg -n "Classic Americana|Yellowtail|Lora|Oswald|TBD|TODO|PASTE|CONFIRM WITH|border-radius|box-shadow" index.html assets barbers`
Expected: no legacy visual tokens or placeholders in production files; only intentional `border-radius: 0` is permitted.

- [ ] **Step 3: Serve locally and capture desktop/mobile screenshots with a headless browser**

Run: `python -m http.server 4173`
Expected: homepage and representative barber pages return HTTP 200; screenshots show the fixed grid, readable mobile flow, and functional gallery.

- [ ] **Step 4: Review `git diff --check`, `git diff --stat`, and `git status -sb`**

Expected: no whitespace errors and only Dark Editorial implementation files changed.
