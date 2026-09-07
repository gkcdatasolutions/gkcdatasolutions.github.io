/* All links remain visible without this optional navigation enhancement. */
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!toggle || !nav) return;
  const narrow = window.matchMedia('(max-width: 68rem)');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  toggle.hidden = false;
  document.documentElement.classList.add('nav-enhanced');
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a') && narrow.matches) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setOpen(false);
  });
  narrow.addEventListener('change', () => {
    const focusWillBeHidden = narrow.matches && nav.contains(document.activeElement);
    setOpen(false);
    if (focusWillBeHidden) toggle.focus();
  });
})();

/* The screenshot link opens the full page on its own without this optional viewer. */
(() => {
  const links = document.querySelectorAll('a.shot-zoom');
  if (!links.length || typeof HTMLDialogElement !== 'function' || !HTMLDialogElement.prototype.showModal) return;
  let dialog = null;
  let opener = null;
  let openedByKeyboard = false;
  const build = () => {
    dialog = document.createElement('dialog');
    dialog.className = 'shot-dialog';
    dialog.innerHTML = '<div class="shot-dialog-bar"><p></p><button class="shot-dialog-close" type="button">Close</button></div><div class="shot-dialog-scroll"><img alt=""></div>';
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.closest('.shot-dialog-close')) dialog.close();
    });
    dialog.addEventListener('close', () => {
      const link = opener;
      if (!link) return;
      // Focus must return to the link. Closing with Escape counts as keyboard
      // input, so a viewer opened by pointer would otherwise come back with a
      // ring drawn around the image. Suppress it until the keyboard is used.
      if (!openedByKeyboard) {
        link.classList.add('is-pointer-return');
        const clear = () => link.classList.remove('is-pointer-return');
        link.addEventListener('blur', clear, { once: true });
        link.addEventListener('keydown', clear, { once: true });
      }
      link.focus({ preventScroll: true });
    });
    document.body.append(dialog);
    return dialog;
  };
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const view = dialog || build();
      const thumbnail = link.querySelector('img');
      const image = view.querySelector('img');
      image.src = link.href;
      image.alt = thumbnail ? thumbnail.alt : '';
      view.querySelector('.shot-dialog-bar p').textContent = link.dataset.viewerLabel || '';
      view.setAttribute('aria-label', link.dataset.viewerLabel || 'Full screenshot');
      opener = link;
      openedByKeyboard = event.detail === 0;
      view.showModal();
      view.querySelector('.shot-dialog-scroll').scrollTop = 0;
    });
  });
})();
