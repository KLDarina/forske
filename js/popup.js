import {
    HEADER_BUTTON,
    POPUP,
    POPUP_WRAP,
    POPUP_CONTENT,
    POPUP_CLOSE,
    SELLING_BUTTON,
    ITEMS_BUTTONS,
    PACKAGE_BUTTON,
    HEADER_BURGER,
    MENU,
    MENU_CLOSE,
    MENU_POPUP
} from "./constants.js";

function openPopup() {
    POPUP.classList.remove("fade-out");
    POPUP.classList.add("open");
    POPUP.classList.add("fade-in");
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
}

function closePopup() {
    POPUP.classList.remove("fade-in");
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.remove("open");
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, 1000);

}

HEADER_BUTTON.addEventListener("click", openPopup);
SELLING_BUTTON.addEventListener("click", openPopup);
PACKAGE_BUTTON.addEventListener("click", openPopup);
MENU_POPUP.addEventListener("click", openPopup);
for (let i = 0; i < ITEMS_BUTTONS.length; i++) {
    ITEMS_BUTTONS[i].addEventListener("click", openPopup);
}

POPUP_CLOSE.addEventListener("click", closePopup);
POPUP_WRAP.addEventListener("click", closePopup);
POPUP_CONTENT.addEventListener("click", function(event) {
    event.stopPropagation();
    event.preventDefault();
})

function openMenu() {
    MENU.classList.add("fade-in");
    MENU.classList.remove("fade-out");
    MENU.classList.add("open");
    const active = document.querySelector(".menu__navigation a.active");
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    setTimeout(() => {
        active.classList.add("active");
        console.log(active);
    }, 500);

}

function closeMenu() {
    MENU.classList.remove("fade-in");
    MENU.classList.add("fade-out");
    setTimeout(() => {
        MENU.classList.remove("open");
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, 1000);

}

HEADER_BURGER.addEventListener("click", openMenu);
MENU_CLOSE.addEventListener("click", closeMenu);

export {
    closeMenu
};