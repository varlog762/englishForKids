'use strict';

export function showHideBurgerMenu(menuElement, btn) {
    menuElement.classList.toggle('burger-menu-container--active');
    btn.classList.toggle('burger-btn--active');
}