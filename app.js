// app.js — utility for all pages (no hash router)
(function(){
  // 1) Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2) Highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(a => {
    const isActive = a.getAttribute('href') === path;
    a.classList.toggle('is-active', isActive);      // ← add the T01 class
    if (isActive) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
})();
