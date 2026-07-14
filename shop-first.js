document.documentElement.classList.add('js');

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggle && primaryNav) {
  const closeNav = () => {
    document.documentElement.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = document.documentElement.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNav();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });

  document.addEventListener('click', (event) => {
    if (!document.documentElement.classList.contains('nav-open')) return;
    if (event.target === navToggle || navToggle.contains(event.target)) return;
    if (primaryNav.contains(event.target)) return;
    closeNav();
  });
}

// Hide the fixed booking bar while the footer's identical "Book the shop" CTA is on screen.
// Without JS the bar simply stays visible (its default state).
const mobileBooking = document.querySelector('.mobile-booking');
const footerCta = document.querySelector('.footer-actions .booking-link');

if (mobileBooking && footerCta && 'IntersectionObserver' in window) {
  const footerCtaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        mobileBooking.classList.toggle('is-hidden', entry.isIntersecting);
      });
    },
    // Only count the footer CTA as "visible" once it clears the booking bar itself.
    { rootMargin: '0px 0px -60px 0px' }
  );
  footerCtaObserver.observe(footerCta);
}

const touchInput = window.matchMedia('(hover: none), (pointer: coarse)');
const crewCards = [...document.querySelectorAll('.crew-card')];

for (const card of crewCards) {
  card.addEventListener('click', (event) => {
    if (!touchInput.matches) return;

    event.preventDefault();
    const destination = card.href;
    for (const otherCard of crewCards) otherCard.classList.remove('is-revealed');
    card.classList.add('is-revealed');
    card.setAttribute('aria-busy', 'true');
    window.setTimeout(() => window.location.assign(destination), 960);
  });
}
