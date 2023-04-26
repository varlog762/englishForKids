'use strict';

import { showHideBurgerMenu } from "./functions.js";
import { Category } from "./Category.js";
import { Card } from "./Card.js";
import { categories } from "./categories.js";

const burgerBtn = document.querySelector('.burger-btn'),
    burgerMenuContainer = document.querySelector('.burger-menu-container');

burgerBtn.addEventListener('click', () => showHideBurgerMenu(burgerMenuContainer, burgerBtn));
