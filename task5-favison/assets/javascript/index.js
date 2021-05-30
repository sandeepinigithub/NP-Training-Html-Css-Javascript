
let dynamic_header_html = "";

//javascript header
const dynamic_header = document.querySelector(".h__container");
function dynamic_menu() {
    dynamic_header_html += `<nav>
    <ul class="h__container__menu">
    <li class="menu__logo">
        <a href="./index.html"><img src="./assets/images/logo.png" alt="logo" /></a>
    </li>
    ` ;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == "Home" || arguments[i] == "home") {
            dynamic_header_html += `<li class="menu__item"><a href="./index.html">${arguments[i]}</a></li>`;
        }
        else if (i == 2) {
            dynamic_header_html += `<li class="menu__item"><a href="./${arguments[i]}.html">${arguments[i]}</a></li>`;
            dynamic_submenu("pages", "features", "price", "blog");
        }
        else if (i == 3) {
            dynamic_submenu("blog","blog","features");
            dynamic_header_html += `<li class="menu__item"><a href="./${arguments[i]}.html">${arguments[i]}</a></li>`;
            
        }
        else {
            dynamic_header_html += `<li class="menu__item"><a href="./${arguments[i]}.html">${arguments[i]}</a></li>`;

        }

    }
    dynamic_header_html += `<li class="menu__item menu__item__button--p"><a href="#">Log In</a></li>
    <li class="menu__item menu__item__button--p menu__item__button--s"><a href="#">Sign Up</a></li>
    <li class="menu__shopicon">
      <a href="#"><i class="fas fa-shopping-cart"></i><span>0</span></a>
    </li>
    <li class="menu__navtoggler" aria-expanded="false">
      <button>
        <span class="menu__navtoggle__ibar"></span>
        <span class="menu__navtoggle__ibar"></span>
        <span class="menu__navtoggle__ibar"></span>
      </button>
    </li>
    </ul>
    </nav>`;

}
function dynamic_submenu() {
    dynamic_header_html += `<li class="menu__item menu__item__hassubmenu">`;
    for (var j = 0; j < arguments.length; j++) {
        if (j == 0) {
            dynamic_header_html += `<a tabindex="0">${arguments[j]}</a> <ul class="menu__item__submenu"> `;
        }
        else {
            dynamic_header_html += `         
            <li class="submenu__subitem"><a href="./${arguments[j]}.html">${arguments[j]}</a></li>`;
        }
    }
    dynamic_header_html += `</ul></li>`

}
dynamic_menu("home","features","price","contact");
dynamic_header.innerHTML = dynamic_header_html;

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


