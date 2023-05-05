'use strict';

import {
    Category
} from "./Category.js";
import {
    WordCard
} from "./WordCard.js";
import {
    categories
} from "./categories.js";
import {
    categoryObjectsArray
} from "./script.js";

/**
 * 
 * @param {Object} categoriesCollection 
 * @returns {Array} 
 */
export function createCategoriesAndWords(categoriesCollection) {
    const categoryObjectsArray = [];

    for (let key in categoriesCollection) {
        const category = new Category(key, `./assets/images/${key}.png`);
        categoryObjectsArray.push(category);

        categories[key].forEach(item => {
            const word = new WordCard(key, `./assets/images/${item[0].toLowerCase()}.png`,
                item[0],
                item[1], 
                `./assets/audio/${item[0].toLowerCase()}.m4a`
            );
            category.addChildToCollection(word);
        })
    }
    return categoryObjectsArray;
}

/**
 * Create and insert new HTML element.
 * @param {string} tagName 
 * @param {Object} parent 
 * @param {string} insertMethod - append, prepend, before, after or replaceWith.
 * @param {*} elementClass 
 * @returns {Object} - returns new HTML element.
 */
export function createAndInsertElement(tagName, parent, insertMethod, elementClass = '') {
    const elem = document.createElement(tagName);

    switch (insertMethod) {
        case 'append':
            parent.append(elem);
            break;
        case 'prepend':
            parent.prepend(elem);
            break;
        case 'before':
            parent.before(elem);
            break;
        case 'after':
            parent.after(elem);
            break;
        case 'replaceWith':
            parent.replaceWith(elem);
            break;
    }

    if (elementClass !== '') {
        elem.classList.add(elementClass);
    }

    return elem;
}

/**
 * 
 * @param {Object} element 
 * @param {Object} attributesCollection 
 */
export function setMultipleAttributes(element, attributesCollection) {
    for (let key in attributesCollection) {
        element.setAttribute(key, attributesCollection[key]);
    }
}

/**
 * 
 * @param {*} collection 
 */
export function createAndInsertCardsOnPage(collection) {
    const fragment = document.createDocumentFragment(),
        cardContainer = document.querySelector('.card-container');

    collection.forEach(category => {
        fragment.append(category.createCardHTML())
    });
    cardContainer.append(fragment);
}

/**
 * 
 * @param {*} menuElement 
 * @param {*} btn 
 */
export function showHideBurgerMenu(menuElement, btn) {
    menuElement.classList.toggle('burger-menu-container--active');
    btn.classList.toggle('burger-btn--active');
}