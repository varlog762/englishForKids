'use strict';
import { createAndInsertElement } from './utils.js';

export class Category {
    constructor(categoryName, ImagePath) {
        this.categoryName = categoryName;
        this.ImagePath = ImagePath;
        this.childrenCollection = [];
    }
    createCardHTML() {
        const categoryCard = document.createElement('div');

        categoryCard.classList.add('card', 'card-category');
        categoryCard.setAttribute('id', this.categoryName);

        const cardCategoryFigure = createAndInsertElement('figure', categoryCard, 'append', 'card-figure');

        const cardCategoryImg = createAndInsertElement('img', cardCategoryFigure, 'append', 'card-img');
        cardCategoryImg.setAttribute('src', this.ImagePath);
        cardCategoryImg.setAttribute('alt', this.categoryName);

        const cardTitle = createAndInsertElement('figcaption', cardCategoryFigure, 'append', 'card-title');
        cardTitle.innerHTML = this.categoryName;

        return categoryCard;
    }

    addChildToCollection(child) {
        this.childrenCollection.push(child);
    }
}