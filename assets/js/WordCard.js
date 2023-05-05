'use strict';

import {
    Category
} from "./Category.js";
import {
    createAndInsertElement,
    setMultipleAttributes,
} from "./utils.js";

export class WordCard extends Category {
    constructor(categoryName, ImagePath, word, wordTranslation, soundPath) {
        super(categoryName, ImagePath);
        this.word = word;
        this.wordTranslation = wordTranslation;
        this.soundPath = soundPath;
    }
    playSound() {
        const audio = new Audio(this.soundPath);
        audio.play();
    }
    createCardHTML() {
        const wordCard = document.createElement('div');

        wordCard.classList.add('card', 'card-word');
        setMultipleAttributes(wordCard, {'id': this.word, 'category': this.categoryName})

        const frontSide = createAndInsertElement('div', wordCard, 'append', 'card-word-front-side'),
            backSide = createAndInsertElement('div', wordCard, 'append', 'card-word-back-side'),
            wordCardFrontFigure = createAndInsertElement('figure', frontSide, 'append', 'card-figure'),
            rotateButton = createAndInsertElement('button', frontSide, 'append', 'card-rotate-btn'),
            wordCardBackFigure = createAndInsertElement('figure', backSide, 'append', 'card-figure');


        const wordCardFrontImg = createAndInsertElement('img', wordCardFrontFigure, 'append', 'card-img'),
            wordCardBackImg = createAndInsertElement('img', wordCardBackFigure, 'append', 'card-img');
        setMultipleAttributes(wordCardFrontImg, {'src': this.ImagePath, 'alt': this.word});
        setMultipleAttributes(wordCardBackImg, {'src': this.ImagePath, 'alt': this.word});

        const cardTitle = createAndInsertElement('figcaption', wordCardFrontFigure, 'append', 'card-title'),
            cardTranslation = createAndInsertElement('figcaption', wordCardBackFigure, 'append', 'card-title');
        cardTitle.innerHTML = this.word;
        cardTranslation.innerHTML = this.wordTranslation;

        return wordCard;
    }
}