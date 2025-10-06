// app.js — utility for all pages (no hash router)
(function(){
// 1) Dynamic year (same as before)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// 2) Highlight active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('header nav a').forEach(a => {
if (a.getAttribute('href') === path) a.setAttribute('aria-current', 'page');
});
})();