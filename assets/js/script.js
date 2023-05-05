// 'use strict';

import {
    showHideBurgerMenu,
    createCategoriesAndWords,
    createAndInsertCardsOnPage,
    setMultipleAttributes,
} from "./utils.js";
import {
    Category
} from "./Category.js";
import {
    WordCard
} from "./WordCard.js";
import {
    categories
} from "./categories.js";

//Создаем массив из объектов-категорий.
export const categoryObjectsArray = createCategoriesAndWords(categories);

//Добавляем карточки-категории на страницу:
createAndInsertCardsOnPage(categoryObjectsArray);

//Вешаем обработчик событий на контейнер с карточками:
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', (event) => {
    if (event.target.closest('.card-category')) {
        const target = event.target.closest('.card-category');

        categoryObjectsArray.forEach(categoryObject => {
            if (categoryObject.categoryName === target.id) {
                cardContainer.innerHTML = '';
                createAndInsertCardsOnPage(categoryObject.childrenCollection);
            }
        })
    }
    //Вешаем обработчик событий на кнопки карточек для переворачивания:
    const cardRotateBtnCollection = document.getElementsByClassName('card-rotate-btn');

    for (let btn of cardRotateBtnCollection) {
        btn.addEventListener('click', event => {
            event.stopPropagation();
            event.target.closest('.card').classList.add('card-reverse');
        })
    }
});

//Переворачиваем карточки обратно при убирании курсора:
cardContainer.addEventListener('mouseout', (event) => {
    if (event.target.closest('.card-word')) {
        const target = event.target.closest('.card-word');
        console.log(event.relatedTarget.closest('.card-word')?.id);
        if (event.relatedTarget.closest('.card-word')?.id !== event.target.closest('.card-word').id) {
            target.classList.remove('card-reverse');
        }
    }
});

//Вешаем обработчик событий на контейнер с карточками для воспроизведения звука:
cardContainer.addEventListener('click', (event) => {
    if (event.target.closest('.card-word')) {
        const target = event.target.closest('.card-word');

        categoryObjectsArray.forEach(categoryObject => {
            if (categoryObject.categoryName === target.getAttribute('category')) {
                categoryObject.childrenCollection.forEach(wordObject => {
                    if (target.id === wordObject.word) {
                        wordObject.playSound();
                    }
                })
            }
        })
    }
});

//Открытие и закрытие бургер-меню.
const burgerBtn = document.querySelector('.burger-btn'),
    burgerMenuContainer = document.querySelector('.burger-menu-container');

burgerBtn.addEventListener('click', () => showHideBurgerMenu(burgerMenuContainer, burgerBtn));

//Переключение кнопки свитчера:
const modeSwitcher = document.querySelector('.switch'),
    trainMode = document.querySelector('.train-mode'),
    playMode = document.querySelector('.play-mode');
modeSwitcher.addEventListener('change', () => {
    trainMode.classList.toggle('active');
    playMode.classList.toggle('active');
    console.log(playMode.classList.contains('active'));

})