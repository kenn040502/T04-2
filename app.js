// Simple routing with hash + active nav feedback
const routes = {
  home: document.getElementById("page-home"),
  televisions: document.getElementById("page-televisions"),
  about: document.getElementById("page-about"),
};

const links = document.querySelectorAll(".nav-link");
const logoBtn = document.getElementById("logoBtn");
const yearEl = document.getElementById("year");

function show(route) {
  // Toggle pages
  Object.entries(routes).forEach(([key, el]) => {
    el.classList.toggle("is-visible", key === route);
  });
  // Active nav link
  links.forEach(a => {
    a.classList.toggle("is-active", a.dataset.route === route);
  });
}

function parseRoute() {
  const hash = (location.hash || "#home").replace("#", "").toLowerCase();
  return routes[hash] ? hash : "home";
}

window.addEventListener("hashchange", () => show(parseRoute()));
logoBtn.addEventListener("click", () => { location.hash = "#home"; });
yearEl.textContent = new Date().getFullYear();

// Init
show(parseRoute());
