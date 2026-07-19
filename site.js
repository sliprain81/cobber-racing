document.querySelectorAll('[data-tabs]').forEach((tabSet) => {
  const buttons = tabSet.querySelectorAll(':scope > [role="tab"]');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => activateTab(button, buttons));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const next = buttons[(index + direction + buttons.length) % buttons.length];
      activateTab(next, buttons);
      next.focus();
    });
  });
});

function activateTab(selected, buttons) {
  buttons.forEach((button) => {
    const isSelected = button === selected;
    button.classList.toggle('active', isSelected);
    button.setAttribute('aria-selected', String(isSelected));
    button.setAttribute('tabindex', isSelected ? '0' : '-1');
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (panel) panel.classList.toggle('active', isSelected);
  });
}
