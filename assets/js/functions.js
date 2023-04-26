'use strict';

import { Category } from "./Category.js";
import { Card } from "./Card.js";
import { categories } from "./categories.js";

export function showHideBurgerMenu(menuElement, btn) {
    menuElement.classList.toggle('burger-menu-container--active');
    btn.classList.toggle('burger-btn--active');
}

function createCategory(obj, cls) {
    for (let key in obj) {
        const [key] = new cls(key, `../images/${key}.png`);
    }
}