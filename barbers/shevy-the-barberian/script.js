document.documentElement.classList.add('js');

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  requestAnimationFrame(() => hero.classList.add('is-ready'));
}

function initReveals() {
  const items = [...document.querySelectorAll('[data-reveal]')];
  if (!items.length) return;
  if (reduceMotion() || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  items.forEach((item) => observer.observe(item));
}

function initStickyBooking() {
  const sticky = document.querySelector('[data-sticky-book]');
  const hero = document.querySelector('#hero');
  const book = document.querySelector('#book');
  if (!sticky || !hero || !book || !('IntersectionObserver' in window)) return;
  let heroVisible = true;
  let bookVisible = false;
  const render = () => sticky.classList.toggle('is-visible', !heroVisible && !bookVisible);
  new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; render(); }, { threshold: 0.08 }).observe(hero);
  new IntersectionObserver(([entry]) => { bookVisible = entry.isIntersecting; render(); }, { threshold: 0.12 }).observe(book);
}

document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initReveals();
  initStickyBooking();
});
