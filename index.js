document.querySelector(".nav-menu-img").onclick = () => {
  document.querySelector(".menu-mobile").classList.remove("hidden");
};

document.querySelector(".menu-mobile-close").onclick = () => {
  document.querySelector(".menu-mobile").classList.add("hidden");
};
