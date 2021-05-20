const toggle = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
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
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}
/* Event listener */
document.addEventListener("click", closeSubmenu, false);

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.addEventListener('scroll', function () {
    let header = document.querySelector('.header-container');
    let windowPosition = window.scrollY >= 80;
    header.classList.toggle('scrolling-active', windowPosition);
})
