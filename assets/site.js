(() => {
  const preview = document.querySelector('[data-crew-preview]');
  const previewImage = preview?.querySelector('img');
  const previewName = preview?.querySelector('[data-preview-name]');
  const previewRole = preview?.querySelector('[data-preview-role]');
  const crewLinks = [...document.querySelectorAll('.crew-index-link[data-preview-src]')];

  function updateCrewPreview(link) {
    if (!previewImage || !link) return;
    previewImage.src = link.dataset.previewSrc;
    previewImage.alt = link.dataset.previewAlt || '';
    if (previewName) previewName.textContent = link.dataset.previewName || '';
    if (previewRole) previewRole.textContent = link.dataset.previewRole || '';
  }

  crewLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => updateCrewPreview(link));
    link.addEventListener('focus', () => updateCrewPreview(link));
  });

  const triggers = [...document.querySelectorAll('[data-lightbox-trigger]')];
  const lightbox = document.querySelector('[data-lightbox]');
  if (!triggers.length || !lightbox) return;

  const lightboxImage = lightbox.querySelector('[data-lightbox-image]');
  const lightboxCaption = lightbox.querySelector('[data-lightbox-caption]');
  const lightboxCount = lightbox.querySelector('[data-lightbox-count]');
  const closeButton = lightbox.querySelector('[data-lightbox-close]');
  const previousButton = lightbox.querySelector('[data-lightbox-prev]');
  const nextButton = lightbox.querySelector('[data-lightbox-next]');
  const focusable = [closeButton, previousButton, nextButton].filter(Boolean);
  let activeIndex = 0;
  let lastTrigger = null;

  function renderLightbox() {
    const trigger = triggers[activeIndex];
    const image = trigger.querySelector('img');
    const figure = trigger.closest('figure');
    const caption = figure?.querySelector('.gallery-caption span:first-child')?.textContent || image.alt;
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = caption;
    lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(triggers.length).padStart(2, '0')}`;
  }

  function openLightbox(index) {
    activeIndex = index;
    lastTrigger = triggers[index];
    renderLightbox();
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    closeButton?.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    lightboxImage.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    lastTrigger.focus();
  }

  function moveLightbox(delta) {
    activeIndex = (activeIndex + delta + triggers.length) % triggers.length;
    renderLightbox();
  }

  triggers.forEach((trigger, index) => trigger.addEventListener('click', () => openLightbox(index)));
  closeButton?.addEventListener('click', closeLightbox);
  previousButton?.addEventListener('click', () => moveLightbox(-1));
  nextButton?.addEventListener('click', () => moveLightbox(1));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (lightbox.getAttribute('aria-hidden') === 'true') return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') moveLightbox(-1);
    if (event.key === 'ArrowRight') moveLightbox(1);
    if (event.key === 'Tab' && focusable.length) {
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();
