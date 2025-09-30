// Simple SPA router + small UX hooks
(function(){
  const routes = {
    home: document.getElementById('page-home'),
    televisions: document.getElementById('page-televisions'),
    about: document.getElementById('page-about')
  };

  const navLinks = Array.from(document.querySelectorAll('nav a[data-route]'));
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function show(route){
    // pages
    Object.values(routes).forEach(sec => sec && sec.classList.remove('is-visible'));
    const page = routes[route] || routes.home;
    page.classList.add('is-visible');

    // nav
    navLinks.forEach(a => a.classList.remove('is-active'));
    const active = navLinks.find(a => a.getAttribute('href') === `#${route}`);
    if (active) active.classList.add('is-active');

    // announce
    page.setAttribute('tabindex','-1');
    page.focus({preventScroll:true});
  }

  function onHashChange(){
    const route = (location.hash || '#home').slice(1);
    show(route);
    // Let charts draw lazily when Televisions is opened
    if (route === 'televisions' && window.drawT03Charts) {
      window.drawT03Charts();
    }
  }

  window.addEventListener('hashchange', onHashChange);
  onHashChange(); // initial
})();
