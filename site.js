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
