import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (...parts) => readFileSync(join(root, ...parts), 'utf8');
const home = read('index.html');
const css = read('assets', 'site.css');
const scriptPath = join(root, 'assets', 'site.js');
const barberPages = {
  'greg-solario': {
    accent: '#1f4a3c',
    booking: 'https://www.instagram.com/highsocksandlowfades/'
  },
  'shevy-the-barberian': {
    accent: '#c88a2e',
    booking: 'https://barbershevy.booksy.com'
  },
  'javier-larios': {
    accent: '#24509c',
    booking: 'https://apps.apple.com/us/app/tenth-street-barber-co/id6744204211'
  },
  'mike-zeiger': {
    accent: '#7a2620',
    booking: 'https://getsqr.co/mike-zeiger'
  },
  'robert-oshea': {
    accent: '#b4492e',
    booking: 'https://osheastylez.booksy.com'
  },
  'cdc-culture': {
    accent: '#9a7b3f',
    booking: 'https://www.instagram.com/cdc.culture/'
  }
};
const shopBooking = 'https://getsquire.com/booking/brands/tenth-street-barber-co';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function assertInOrder(html, ids) {
  let cursor = -1;
  for (const id of ids) {
    const next = html.indexOf(`id="${id}"`);
    assert.ok(next > cursor, `#${id} must appear after the preceding specified section`);
    cursor = next;
  }
}

function localSources(html) {
  return [...html.matchAll(/\bsrc="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((src) => !/^(?:https?:|data:)/.test(src));
}

test('shared CSS implements the exact Dark Editorial system', () => {
  for (const value of [
    '#0b0b0a',
    '#161614',
    '#efece4',
    '#9b978c',
    'rgba(239,236,228,.16)',
    'Archivo Black',
    'DM Mono',
    'Inter'
  ]) {
    assert.match(css, new RegExp(escapeRegExp(value)));
  }
  assert.match(css, /grid-template-columns:\s*55fr\s+45fr/);
  assert.match(css, /filter:\s*grayscale\(1\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
  assert.doesNotMatch(css, /box-shadow\s*:/);
  assert.doesNotMatch(css, /border-radius\s*:\s*(?!0(?:[;\s}]))/);
  assert.doesNotMatch(css, /Yellowtail|Lora|Oswald|--paper|--navy|--red|--brass/);
});

test('shared script provides crew preview and accessible lightbox behavior', () => {
  assert.ok(existsSync(scriptPath), 'assets/site.js must exist');
  const js = read('assets', 'site.js');
  for (const hook of [
    'data-crew-preview',
    'data-lightbox-trigger',
    'Escape',
    'ArrowLeft',
    'ArrowRight',
    'event.key === \'Tab\'',
    'lastTrigger.focus()'
  ]) {
    assert.match(js, new RegExp(escapeRegExp(hook)));
  }
});

test('homepage follows the specified section order and signature elements', () => {
  assertInOrder(home, ['hero', 'services', 'crew', 'work', 'visit']);
  assert.match(home, /37\.7397&deg; N \/ 121\.4252&deg; W/);
  assert.match(home, /data-crew-preview/);
  assert.equal((home.match(/class="crew-index-link"/g) || []).length, 6);
  assert.ok((home.match(/data-lightbox-trigger/g) || []).length >= 4);
  assert.match(home, /Client work \/ Shevy the Barberian/);
  assert.match(home, /<script src="assets\/site\.js" defer><\/script>/);
  assert.match(home, /Archivo\+Black/);
  assert.match(home, /DM\+Mono/);
  assert.match(home, /Inter/);
  assert.doesNotMatch(home, /Take a seat|You.re family|Good cuts|star-rule|class="stripe"/i);
});

test('every barber page uses the shared Dark Editorial grammar and exact bookings', () => {
  for (const [slug, config] of Object.entries(barberPages)) {
    const html = read('barbers', slug, 'index.html');
    assert.match(html, new RegExp(`--accent:\\s*${escapeRegExp(config.accent)}`));
    assert.match(html, /class="profile-hero"/);
    assert.match(html, /LOCK IN THE CHAIR\./);
    assert.match(html, /Book this barber/);
    assert.match(html, /Book the shop/);
    assert.match(html, new RegExp(escapeRegExp(config.booking)));
    assert.match(html, new RegExp(escapeRegExp(shopBooking)));
    assert.match(html, /data-lightbox-trigger/);
    assert.match(html, /class="coordinates"/);
    assert.match(html, /<link rel="stylesheet" href="\.\.\/\.\.\/assets\/site\.css">/);
    assert.match(html, /<script src="\.\.\/\.\.\/assets\/site\.js" defer><\/script>/);
    assert.match(html, /class="skip-link"/);
    assert.doesNotMatch(html, /PASTE|CONFIRM WITH|TBD|TODO/);
  }
});

test('Shevy retains the twelve-photo gallery, services, and wedding offering', () => {
  const html = read('barbers', 'shevy-the-barberian', 'index.html');
  assert.equal((html.match(/data-lightbox-trigger/g) || []).length, 12);
  for (const price of ['$50', '$65', '$40']) assert.match(html, new RegExp(escapeRegExp(price)));
  assert.match(html, /Wedding-day grooming/);
  assert.match(html, /shevy-wedding-flyer\.jpg/);
});

test('all production image references resolve and carry dimensions/loading intent', () => {
  const pages = [
    ['index.html'],
    ...Object.keys(barberPages).map((slug) => ['barbers', slug, 'index.html'])
  ];
  for (const parts of pages) {
    const html = read(...parts);
    const pageDir = dirname(join(root, ...parts));
    for (const src of localSources(html)) {
      assert.ok(existsSync(resolve(pageDir, src)), `${parts.join('/')} references missing ${src}`);
    }
    for (const tag of html.match(/<img\b[^>]*>/g) || []) {
      assert.match(tag, /\bwidth="\d+"/);
      assert.match(tag, /\bheight="\d+"/);
    }
    const images = html.match(/<img\b[^>]*>/g) || [];
    assert.match(images[0], /fetchpriority="high"/);
    for (const tag of images.slice(1)) assert.match(tag, /loading="lazy"/);
  }
});

test('every page preserves the exact shop facts and accessibility baseline', () => {
  const pages = [home, ...Object.keys(barberPages).map((slug) => read('barbers', slug, 'index.html'))];
  for (const html of pages) {
    assert.match(html, /24 E 10th St/);
    assert.match(html, /209-834-5211/);
    assert.match(html, /Tue[^<]*Fri[^<]*10[^<]*7/);
    assert.match(html, /Sat[^<]*9[^<]*3/);
    assert.match(html, /Sun[^<]*Mon[^<]*Closed/);
    assert.match(html, /class="skip-link"/);
    assert.match(html, /<main id="main"/);
  }
});
