"use strict";

// Make navbar tranparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbar : ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//  Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target.dataset.link;
  if (target == null) {
    return;
  }
  const menu = document.querySelector(`${target}`);
  menu.scrollIntoView({ behavior: "smooth" });
});
