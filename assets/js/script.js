'use strict';

import { showHideBurgerMenu } from "./functions.js";

const burgerBtn = document.querySelector('.burger-btn'),
    burgerMenuContainer = document.querySelector('.burger-menu-container');

burgerBtn.addEventListener('click', () => showHideBurgerMenu(burgerMenuContainer, burgerBtn));
