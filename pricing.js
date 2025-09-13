// Fanestyring + mobil-etiketter til tabell
(function () {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.classList.add('is-active');

      // Flytt fokus til panel for tilgjengelighet
      if (panel) panel.setAttribute('tabindex', '-1'), panel.focus({ preventScroll: true });
    });
  });

  // Legg data-labels (for mobil) til alle tabeller
  function applyDataLabels(scope = document) {
    scope.querySelectorAll('.rates').forEach(table => {
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
      table.querySelectorAll('tbody tr').forEach(row => {
        Array.from(row.children).forEach((td, i) => td.setAttribute('data-label', headers[i] || ''));
      });
    });
  }

  applyDataLabels();
})();
