'use strict';

export class Card {
    constructor(cardName, cardCategory, cardImagePath, cardSound, cardTranslation) {
        this.cardName = cardName;
        this.cardCategory = cardCategory;
        this.cardImagePath = cardImagePath;
        this.cardSound = cardSound;
        this.cardTranslation;
    }
    playSound() {
        return;
    }
}