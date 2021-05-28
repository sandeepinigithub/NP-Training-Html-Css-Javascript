const toggle = document.querySelector(".menu__navtoggler");
const menu = document.querySelector(".h__container__menu");
const items = document.querySelectorAll(".menu__item");
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // adds the menu (hamburger) icon
        if (toggle.getAttribute("aria-expanded")) {
            toggle.setAttribute("aria-expanded", "false");
        }
    } else {
        menu.classList.add("active");
        // adds the close (x) icon
        if (toggle.getAttribute("aria-expanded")) {
            toggle.setAttribute("aria-expanded", "true");
        }
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("menu__item__submenu--active")) {
        this.classList.remove("menu__item__submenu--active");
    } else if (menu.querySelector(".menu__item__submenu--active")) {
        menu.querySelector(".menu__item__submenu--active").classList.remove("menu__item__submenu--active");
        this.classList.add("menu__item__submenu--active");
    } else {
        this.classList.add("menu__item__submenu--active");
    }
}
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".menu__item__submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".menu__item__submenu--active")) {
        menu.querySelector(".menu__item__submenu--active").classList.remove("menu__item__submenu--active");
    }
}
/* Event listener */
document.addEventListener("click", closeSubmenu, false);

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.addEventListener('scroll', function () {
    let header = document.querySelector('.h__container');
    let windowPosition = window.scrollY >= 80;
    header.classList.toggle('scrolling-active', windowPosition);
})

// Swiper script 
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });